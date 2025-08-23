import { CABIN_CLASSES, TRIP_TYPES } from "../config/constants";
import { createContext, useContext, useEffect, useRef, useState } from "react";

import { formatAirportForInput } from "../utils/airportUtils";
import { getCurrentLocation } from "../services/geolocation";
import { getNearByAirports } from "../api/airports";

const SearchContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  // Trip configuration
  const [tripType, setTripType] = useState(TRIP_TYPES.ROUND_TRIP);
  const [cabin, setCabin] = useState(CABIN_CLASSES.ECONOMY);

  // Passenger counts
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsSeat, setInfantsSeat] = useState(0);
  const [infantsLap, setInfantsLap] = useState(0);

  // Dates
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Origin state
  const [originInput, setOriginInput] = useState("");
  const [originSelected, setOriginSelected] = useState(null);
  const [originOptions, setOriginOptions] = useState([]);
  const [showOriginOptions, setShowOriginOptions] = useState(false);
  const [selectedOriginItems, setSelectedOriginItems] = useState([]);
  const [isOriginMultiSelect, setIsOriginMultiSelect] = useState(false);
  const [isOriginFocused, setIsOriginFocused] = useState(false);

  // Destination state
  const [destInput, setDestInput] = useState("");
  const [destSelected, setDestSelected] = useState(null);
  const [destOptions, setDestOptions] = useState([]);
  const [showDestOptions, setShowDestOptions] = useState(false);
  const [selectedDestItems, setSelectedDestItems] = useState([]);
  const [isDestMultiSelect, setIsDestMultiSelect] = useState(false);
  const [isDestFocused, setIsDestFocused] = useState(false);

  // Multicity state
  const [legs, setLegs] = useState([{ from: "", to: "", date: "" }]);
  const [removingLegIndex, setRemovingLegIndex] = useState(null);

  // UI state
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  // Refs
  const searchFormRef = useRef(null);
  const originInputRef = useRef(null);
  const destInputRef = useRef(null);

  // Computed values
  const passengers = adults + childrenCount + infantsSeat + infantsLap;

  // Auto-populate origin with nearest airport on mount
  useEffect(() => {
    const loadNearestAirportWithOptions = async () => {
      if (originInput || originSelected) return;

      setIsLoadingLocation(true);
      try {
        let location;
        try {
          location = await getCurrentLocation();
        } catch (locationError) {
          console.log("Using fallback location (Kathmandu)", locationError);
          location = { lat: 27.7172, lng: 85.324 };
        }

        const nearbyData = await getNearByAirports(location.lat, location.lng);

        if (nearbyData?.current) {
          const formattedCurrent = formatAirportForInput(nearbyData.current);
          setOriginSelected(formattedCurrent);
          setOriginInput(formattedCurrent.presentation.title);
        }

        if (nearbyData?.nearby) {
          const formattedCurrent = formatAirportForInput(nearbyData.current);
          const formattedNearby = nearbyData.nearby
            .map(formatAirportForInput)
            .filter(Boolean);
          const nearbyOptions = [formattedCurrent, ...formattedNearby];
          setOriginOptions(nearbyOptions);
          setDestOptions(nearbyOptions);
        }
      } catch (error) {
        console.error("Failed to load nearby airports:", error);
        setLocationError(error.message);
      } finally {
        setIsLoadingLocation(false);
      }
    };

    loadNearestAirportWithOptions();
  }, [originInput, originSelected]);

  // Validation logic
  const canSearch = (() => {
    if (tripType === TRIP_TYPES.MULTI_CITY) {
      return legs.every((leg) => {
        const hasFrom =
          leg.from && typeof leg.from === "string" && leg.from.trim() !== "";
        const hasTo =
          leg.to && typeof leg.to === "string" && leg.to.trim() !== "";
        const hasDate = leg.date && leg.date !== "";
        return hasFrom && hasTo && hasDate;
      });
    }

    const hasOrigin =
      originSelected ||
      (originInput && originInput.trim() !== "") ||
      selectedOriginItems.length > 0;
    const hasDestination =
      destSelected ||
      (destInput && destInput.trim() !== "") ||
      selectedDestItems.length > 0;
    const hasDepartDate = departDate && departDate !== "";
    const hasReturnDate =
      tripType === TRIP_TYPES.ROUND_TRIP
        ? returnDate && returnDate !== ""
        : true;

    return hasOrigin && hasDestination && hasDepartDate && hasReturnDate;
  })();

  // Helper functions
  const swapLocations = () => {
    const tempInput = originInput;
    const tempSelected = originSelected;
    const tempItems = selectedOriginItems;

    setOriginInput(destInput);
    setOriginSelected(destSelected);
    setSelectedOriginItems(selectedDestItems);

    setDestInput(tempInput);
    setDestSelected(tempSelected);
    setSelectedDestItems(tempItems);
  };

  const addMulticityLeg = () => {
    setLegs([...legs, { from: "", to: "", date: "" }]);
  };

  const removeMulticityLeg = (index) => {
    if (legs.length <= 1) return;

    setRemovingLegIndex(index);
    setTimeout(() => {
      const updatedLegs = [...legs];
      updatedLegs.splice(index, 1);
      setLegs(updatedLegs);
      setRemovingLegIndex(null);
    }, 300);
  };

  const updateMulticityLeg = (index, field, value) => {
    const updatedLegs = [...legs];
    updatedLegs[index] = { ...updatedLegs[index], [field]: value };
    setLegs(updatedLegs);
  };

  const resetForm = () => {
    setTripType(TRIP_TYPES.ROUND_TRIP);
    setDepartDate("");
    setReturnDate("");
    setOriginInput("");
    setOriginSelected(null);
    setDestInput("");
    setDestSelected(null);
    setSelectedOriginItems([]);
    setSelectedDestItems([]);
    setIsOriginMultiSelect(false);
    setIsDestMultiSelect(false);
    setLegs([{ from: "", to: "", date: "" }]);
  };

  const getSearchData = () => {
    if (tripType === TRIP_TYPES.MULTI_CITY) {
      return {
        legs,
        passengers,
        cabin,
        tripType,
      };
    }

    return {
      origin: originSelected || originInput,
      destination: destSelected || destInput,
      departDate,
      returnDate: tripType === TRIP_TYPES.ROUND_TRIP ? returnDate : null,
      passengers,
      cabin,
      tripType,
    };
  };

  const value = {
    // Trip configuration
    tripType,
    setTripType,
    cabin,
    setCabin,

    // Passengers
    adults,
    setAdults,
    children: childrenCount,
    setChildren: setChildrenCount,
    infantsSeat,
    setInfantsSeat,
    infantsLap,
    setInfantsLap,
    passengers,

    // Dates
    departDate,
    setDepartDate,
    returnDate,
    setReturnDate,

    // Origin
    originInput,
    setOriginInput,
    originSelected,
    setOriginSelected,
    originOptions,
    setOriginOptions,
    showOriginOptions,
    setShowOriginOptions,
    selectedOriginItems,
    setSelectedOriginItems,
    isOriginMultiSelect,
    setIsOriginMultiSelect,
    isOriginFocused,
    setIsOriginFocused,

    // Destination
    destInput,
    setDestInput,
    destSelected,
    setDestSelected,
    destOptions,
    setDestOptions,
    showDestOptions,
    setShowDestOptions,
    selectedDestItems,
    setSelectedDestItems,
    isDestMultiSelect,
    setIsDestMultiSelect,
    isDestFocused,
    setIsDestFocused,

    // Multicity
    legs,
    setLegs,
    removingLegIndex,
    addMulticityLeg,
    removeMulticityLeg,
    updateMulticityLeg,

    // UI state
    showCustomPicker,
    setShowCustomPicker,
    isLoadingLocation,
    locationError,

    // Refs
    searchFormRef,
    originInputRef,
    destInputRef,

    // Computed values & helpers
    canSearch,
    swapLocations,
    resetForm,
    getSearchData,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
