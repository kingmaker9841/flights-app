import CustomDatePicker from "./date-picker/CustomDatePicker";
import MulticitySection from "./MulticitySection";
import SearchButton from "../../common/buttons/SearchButton";
import SearchControls from "./SearchControls";
import SearchInputs from "./search-inputs/SearchInputs";
import { cn } from "../../../utils/cn";
import { searchFlights } from "../../../services/flightService";
import { TRIP_TYPES } from "../../../config/constants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useSearchContext } from "../../../context/SearchContext";

function SearchForm() {
  const navigate = useNavigate();
  const {
    tripType,
    searchFormRef,
    showCustomPicker,
    setShowCustomPicker,
    departDate,
    setDepartDate,
    returnDate,
    setReturnDate,
    canSearch,
    getSearchData,
    removeMulticityLeg,
  } = useSearchContext();

  const mutation = useMutation({
    mutationFn: (searchData) => searchFlights(searchData),
    onSuccess: (results) => navigate("/results", { state: { results } }),
    onError: (e) => console.error(e),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSearch || mutation.isPending) return;
    
    const searchData = getSearchData();
    mutation.mutate(searchData);
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
          <SearchControls />

          {/* Round trip and One-way layouts */}
          {tripType !== TRIP_TYPES.MULTI_CITY && <SearchInputs />}

          {/* Multi-city flights */}
          {tripType === TRIP_TYPES.MULTI_CITY && (
            <MulticitySection onRemoveLeg={removeMulticityLeg} />
          )}
        </div>

        {/* Floating Search button */}
        <SearchButton isPending={mutation.isPending} />

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
