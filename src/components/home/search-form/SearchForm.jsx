import { useEffect, useRef, useState } from "react";

import CustomDatePicker from "./date-picker/CustomDatePicker";
import MulticitySection from "./MulticitySection";
import SearchButton from "../../common/buttons/SearchButton";
import SearchControls from "./SearchControls";
import SearchInputs from "./search-inputs/SearchInputs";
import { cn } from "../../../utils/cn";
import { searchFlights } from "../../../services/flightService";
import { TRIP_TYPES, CABIN_CLASSES } from "../../../config/constants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useNearestAirport } from "../../../hooks/useNearestAirport";

function SearchForm() {
  const navigate = useNavigate();
  const searchFormRef = useRef(null);

  // Form state
  const [tripType, setTripType] = useState(TRIP_TYPES.ROUND_TRIP);
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infantsSeat, setInfantsSeat] = useState(0);
  const [infantsLap, setInfantsLap] = useState(0);
  const passengers = adults + children + infantsSeat + infantsLap;
  const [cabin, setCabin] = useState(CABIN_CLASSES.ECONOMY);

  // Multi-city state
  const [legs, setLegs] = useState([
    { from: "", to: "", date: "" },
  ]);
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [removingLegIndex, setRemovingLegIndex] = useState(null);

  // Origin/Destination state
  const [originInput, setOriginInput] = useState("");
  const [originSelected, setOriginSelected] = useState(null);
  const [originOptions, setOriginOptions] = useState([]);
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

  const canSearch = (() => {
    if (mutation.isPending) return false;
    
    if (tripType === TRIP_TYPES.MULTI_CITY) {
      return legs.every(leg => {
        const hasFrom = leg.from && typeof leg.from === 'string' && leg.from.trim() !== '';
        const hasTo = leg.to && typeof leg.to === 'string' && leg.to.trim() !== '';
        const hasDate = leg.date && leg.date !== '';
        return hasFrom && hasTo && hasDate;
      });
    }
    
    const hasOrigin = (originSelected || (originInput && originInput.trim() !== ''));
    const hasDestination = (destSelected || (destInput && destInput.trim() !== ''));
    const hasDepartDate = departDate && departDate !== '';
    const hasReturnDate = tripType === TRIP_TYPES.ROUND_TRIP ? (returnDate && returnDate !== '') : true;
    
    return hasOrigin && hasDestination && hasDepartDate && hasReturnDate;
  })();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSearch) return;
    
    if (tripType === TRIP_TYPES.MULTI_CITY) {
      mutation.mutate({
        legs,
        passengers,
        cabin,
        tripType,
      });
    } else {
      mutation.mutate({
        origin: originSelected || originInput,
        destination: destSelected || destInput,
        departDate,
        returnDate: tripType === TRIP_TYPES.ROUND_TRIP ? returnDate : null,
        passengers,
        cabin,
        tripType,
      });
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div
          ref={searchFormRef}
          className={cn(
            "bg-gray-bg rounded-none pb-8 md:rounded-[8px] overflow-visible relative border-0 md:border border-gray-border md:mx-0",
            {
              "pb-2 px-4": tripType === TRIP_TYPES.MULTI_CITY,
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
          {tripType !== TRIP_TYPES.MULTI_CITY && (
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
          {tripType === TRIP_TYPES.MULTI_CITY && (
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
        {tripType === TRIP_TYPES.MULTI_CITY && (
          <CustomDatePicker
            isOpen={showCustomPicker}
            onClose={() => setShowCustomPicker(false)}
            departDate={departDate}
            setDepartDate={setDepartDate}
            returnDate={returnDate}
            setReturnDate={setReturnDate}
            tripType={TRIP_TYPES.ONE_WAY}
            setTripType={() => {}}
            searchFormRef={searchFormRef}
          />
        )}
      </form>
    </div>
  );
}

export default SearchForm;
