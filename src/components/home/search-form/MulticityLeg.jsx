import { CloseIcon } from "../../common/Icons";
import DateInput from "../../common/inputs/DateInput";
import LocationInput from "../../common/inputs/LocationInput";
import { searchAirports } from "../../../api/airports";
import { useAirportSearch } from "../../../hooks/useAirportSearch";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const MulticityLeg = ({
  leg,
  index,
  legs,
  setLegs,
  removingLegIndex,
  onRemoveLeg,
  onDatePickerOpen,
}) => {
  // State for origin input
  const [originOptions, setOriginOptions] = useState([]);
  const [showOriginOptions, setShowOriginOptions] = useState(false);
  const [isOriginMultiSelect, setIsOriginMultiSelect] = useState(false);
  const [selectedOriginItems] = useState([]);
  const [originSelected, setOriginSelected] = useState(null);

  // State for destination input
  const [destOptions, setDestOptions] = useState([]);
  const [showDestOptions, setShowDestOptions] = useState(false);
  const [isDestMultiSelect, setIsDestMultiSelect] = useState(false);
  const [selectedDestItems] = useState([]);
  const [destSelected, setDestSelected] = useState(null);

  // API queries
  const { refetch: refetchOrigin } = useQuery({
    queryKey: ["airports", leg.from],
    queryFn: () => searchAirports(leg.from),
    enabled: false,
    staleTime: 5 * 60 * 1000,
  });

  const { refetch: refetchDest } = useQuery({
    queryKey: ["airports", leg.to],
    queryFn: () => searchAirports(leg.to),
    enabled: false,
    staleTime: 5 * 60 * 1000,
  });

  // Airport search hooks
  useAirportSearch(
    leg.from,
    originSelected,
    setOriginOptions,
    setShowOriginOptions,
    refetchOrigin,
    setOriginSelected
  );

  useAirportSearch(
    leg.to,
    destSelected,
    setDestOptions,
    setShowDestOptions,
    refetchDest,
    setDestSelected
  );

  const handleOriginMultiSelect = () => {};

  const handleDestMultiSelect = () => {};

  const updateLeg = (field, value) => {
    const updatedLegs = [...legs];
    updatedLegs[index] = { ...updatedLegs[index], [field]: value };
    setLegs(updatedLegs);
  };

  const handleDateChange = (newDate) => {
    updateLeg("date", newDate);
  };

  return (
    <div
      className={`transition-all duration-300 leg-row ${
        removingLegIndex === index
          ? "opacity-0 transform scale-95 leg-row-removing"
          : "opacity-100 transform scale-100"
      }`}
    >
      {/* Mobile: 2 rows layout */}
      <div className="md:hidden space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <LocationInput
            type="origin"
            value={leg.from || ""}
            onChange={(value) => {
              updateLeg("from", value);
            }}
            onSelect={(item) => {
              if (item) {
                const selectedValue =
                  item?.presentation?.title ||
                  item?.presentation?.suggestionTitle ||
                  "";
                updateLeg("from", selectedValue);
                setOriginSelected(item);
              } else {
                setOriginSelected(null);
              }
            }}
            placeholder="Where from?"
            options={originOptions}
            showOptions={showOriginOptions}
            setShowOptions={setShowOriginOptions}
            isMultiSelect={isOriginMultiSelect}
            setIsMultiSelect={setIsOriginMultiSelect}
            selectedItems={selectedOriginItems}
            onMultiSelect={handleOriginMultiSelect}
            expandOnFocus={false}
            className="multicity-input"
          />
          <LocationInput
            type="destination"
            value={leg.to || ""}
            onChange={(value) => {
              updateLeg("to", value);
            }}
            onSelect={(item) => {
              if (item) {
                const selectedValue =
                  item?.presentation?.title ||
                  item?.presentation?.suggestionTitle ||
                  "";
                updateLeg("to", selectedValue);
                setDestSelected(item);
              } else {
                setDestSelected(null);
              }
            }}
            placeholder="Where to?"
            options={destOptions}
            showOptions={showDestOptions}
            setShowOptions={setShowDestOptions}
            isMultiSelect={isDestMultiSelect}
            setIsMultiSelect={setIsDestMultiSelect}
            selectedItems={selectedDestItems}
            onMultiSelect={handleDestMultiSelect}
            expandOnFocus={false}
            className="multicity-input"
          />
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-3 items-center">
          <DateInput
            date={leg.date}
            onDateChange={handleDateChange}
            onDatePickerOpen={onDatePickerOpen}
            placeholder="Thu 4 Sept"
          />

          {legs.length > 1 && (
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveLeg(index);
                }}
                className="w-10 h-10 rounded-full hover:bg-gray-bg flex items-center justify-center z-40"
                aria-label="Remove flight"
              >
                <CloseIcon />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop: 3 columns layout */}
      <div className="hidden md:grid grid-cols-3 gap-3">
        <LocationInput
          type="origin"
          value={leg.from || ""}
          onChange={(value) => {
            updateLeg("from", value);
          }}
          onSelect={(item) => {
            if (item) {
              const selectedValue =
                item?.presentation?.title ||
                item?.presentation?.suggestionTitle ||
                "";
              updateLeg("from", selectedValue);
              setOriginSelected(item);
            } else {
              setOriginSelected(null);
            }
          }}
          placeholder="Where from?"
          options={originOptions}
          showOptions={showOriginOptions}
          setShowOptions={setShowOriginOptions}
          isMultiSelect={isOriginMultiSelect}
          setIsMultiSelect={setIsOriginMultiSelect}
          selectedItems={selectedOriginItems}
          onMultiSelect={handleOriginMultiSelect}
          expandOnFocus={false}
          className="multicity-input"
        />
        <LocationInput
          type="destination"
          value={leg.to || ""}
          onChange={(value) => {
            updateLeg("to", value);
          }}
          onSelect={(item) => {
            if (item) {
              const selectedValue =
                item?.presentation?.title ||
                item?.presentation?.suggestionTitle ||
                "";
              updateLeg("to", selectedValue);
              setDestSelected(item);
            } else {
              setDestSelected(null);
            }
          }}
          placeholder="Where to?"
          options={destOptions}
          showOptions={showDestOptions}
          setShowOptions={setShowDestOptions}
          isMultiSelect={isDestMultiSelect}
          setIsMultiSelect={setIsDestMultiSelect}
          selectedItems={selectedDestItems}
          onMultiSelect={handleDestMultiSelect}
          expandOnFocus={false}
          className="multicity-input"
        />
        <div className="relative flex items-center gap-3">
          <DateInput
            date={leg.date}
            onDateChange={handleDateChange}
            onDatePickerOpen={onDatePickerOpen}
            placeholder="Thu 4 Sept"
            className="flex-1"
          />
          {legs.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRemoveLeg(index);
              }}
              className="w-10 h-10 rounded-full hover:bg-gray-bg flex items-center justify-center z-40"
              aria-label="Remove flight"
            >
              <CloseIcon
                strokeWidth="2"
                strokeLinecap="round"
                d="M18 6L6 18M6 6l12 12"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MulticityLeg;
