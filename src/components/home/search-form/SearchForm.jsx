import { useEffect, useRef, useState } from "react";

import CustomDatePicker from "./date-picker/CustomDatePicker";
import MulticitySection from "./MulticitySection";
import SearchButton from "../../common/buttons/SearchButton";
import SearchControls from "./SearchControls";
import SearchInputs from "./search-inputs/SearchInputs";
import { cn } from "../../../utils/cn";
import { mockAirportData } from "../../../utils/mockData";
import { searchFlights } from "../../../services/flightService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useNearestAirport } from "../../../hooks/useNearestAirport";

function SearchForm() {
  const navigate = useNavigate();
  const searchFormRef = useRef(null);

  // Form state
  const [tripType, setTripType] = useState("roundtrip");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infantsSeat, setInfantsSeat] = useState(0);
  const [infantsLap, setInfantsLap] = useState(0);
  const passengers = adults + children + infantsSeat + infantsLap;
  const [cabin, setCabin] = useState("Economy");

  // Multi-city state
  const [legs, setLegs] = useState([
    { from: "", to: "", date: "" },
    { from: "", to: "", date: "" },
  ]);
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [removingLegIndex, setRemovingLegIndex] = useState(null);

  // Origin/Destination state
  const [originInput, setOriginInput] = useState("");
  const [originSelected, setOriginSelected] = useState(null);
  const [originOptions, setOriginOptions] = useState(mockAirportData);
  const [showOriginOptions, setShowOriginOptions] = useState(false);

  const [destInput, setDestInput] = useState("");
  const [destSelected, setDestSelected] = useState(null);
  const [destOptions, setDestOptions] = useState([]);
  const [showDestOptions, setShowDestOptions] = useState(false);

  const { isLoadingLocation, locationError, loadNearestAirport } =
    useNearestAirport(originInput, originSelected);

  const mutation = useMutation({
    mutationFn: (searchData) => searchFlights(searchData),
    onSuccess: (results) => navigate("/results", { state: { results } }),
    onError: (e) => console.error(e),
  });

  // Auto-populate origin with nearest airport on component mount
  useEffect(() => {
    loadNearestAirport(setOriginSelected, setOriginInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveLeg = (index) => {
    if (legs.length <= 1) return;

    setRemovingLegIndex(index);
    setTimeout(() => {
      const updatedLegs = [...legs];
      updatedLegs.splice(index, 1);
      setLegs(updatedLegs);
      setRemovingLegIndex(null);
    }, 300);
  };

  const canSearch =
    !!(originSelected || originInput) &&
    !!(destSelected || destInput) &&
    !!departDate &&
    !mutation.isPending;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSearch) return;
    mutation.mutate({
      origin: originSelected || originInput,
      destination: destSelected || destInput,
      departDate,
      returnDate: tripType === "roundtrip" ? returnDate : null,
      passengers,
      cabin,
    });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div
          ref={searchFormRef}
          className={cn(
            "bg-gray-bg rounded-none pb-8 md:rounded-[8px] overflow-visible relative border-0 md:border border-gray-border md:mx-0",
            {
              "pb-2 px-4": tripType === "multicity",
            }
          )}
          style={{
            boxShadow:
              "0 1px 2px rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
          }}
        >
          {/* Top controls: Trip type, Travelers, Cabin */}
          <SearchControls
            tripType={tripType}
            setTripType={setTripType}
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            infantsSeat={infantsSeat}
            setInfantsSeat={setInfantsSeat}
            infantsLap={infantsLap}
            setInfantsLap={setInfantsLap}
            cabin={cabin}
            setCabin={setCabin}
          />

          {/* Round trip and One-way layouts */}
          {tripType !== "multicity" && (
            <SearchInputs
              tripType={tripType}
              setTripType={setTripType}
              originInput={originInput}
              setOriginInput={setOriginInput}
              originSelected={originSelected}
              setOriginSelected={setOriginSelected}
              originOptions={originOptions}
              setOriginOptions={setOriginOptions}
              showOriginOptions={showOriginOptions}
              setShowOriginOptions={setShowOriginOptions}
              destInput={destInput}
              setDestInput={setDestInput}
              destSelected={destSelected}
              setDestSelected={setDestSelected}
              destOptions={destOptions}
              setDestOptions={setDestOptions}
              showDestOptions={showDestOptions}
              setShowDestOptions={setShowDestOptions}
              departDate={departDate}
              setDepartDate={setDepartDate}
              returnDate={returnDate}
              setReturnDate={setReturnDate}
              searchFormRef={searchFormRef}
              isLoadingLocation={isLoadingLocation}
              locationError={locationError}
            />
          )}

          {/* Multi-city flights */}
          {tripType === "multicity" && (
            <MulticitySection
              legs={legs}
              setLegs={setLegs}
              removingLegIndex={removingLegIndex}
              onRemoveLeg={handleRemoveLeg}
              onDatePickerOpen={() => setShowCustomPicker(true)}
            />
          )}
        </div>

        {/* Floating Search button */}
        <SearchButton canSearch={canSearch} isPending={mutation.isPending} />

        {/* Custom Date Picker for multicity */}
        {tripType === "multicity" && (
          <CustomDatePicker
            isOpen={showCustomPicker}
            onClose={() => setShowCustomPicker(false)}
            departDate={departDate}
            setDepartDate={setDepartDate}
            returnDate={returnDate}
            setReturnDate={setReturnDate}
            tripType="oneway"
            setTripType={() => {}}
            searchFormRef={searchFormRef}
          />
        )}
      </form>
    </div>
  );
}

export default SearchForm;
