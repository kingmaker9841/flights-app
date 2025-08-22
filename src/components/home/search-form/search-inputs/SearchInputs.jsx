import { useEffect, useRef, useState } from "react";

import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import { searchAirports } from "../../../../api/airports";
import { useAirportSearch } from "../../../../hooks/useAirportSearch";
import { useFocusHandlers } from "../../../../hooks/useFocusHandlers";
import { useMultiSelectHandlers } from "../../../../hooks/useMultiSelectHandlers";
import { useQuery } from "@tanstack/react-query";

function SearchInputs({
  tripType,
  setTripType,
  originInput,
  setOriginInput,
  originSelected,
  setOriginSelected,
  originOptions,
  setOriginOptions,
  showOriginOptions,
  setShowOriginOptions,
  destInput,
  setDestInput,
  destSelected,
  setDestSelected,
  destOptions,
  setDestOptions,
  showDestOptions,
  setShowDestOptions,
  departDate,
  setDepartDate,
  returnDate,
  setReturnDate,
  searchFormRef,
  isLoadingLocation,
  locationError,
}) {
  // Refs
  const departHiddenRef = useRef(null);
  const returnHiddenRef = useRef(null);

  // State
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [isOriginMultiSelect, setIsOriginMultiSelect] = useState(false);
  const [isDestMultiSelect, setIsDestMultiSelect] = useState(false);
  const [selectedOriginItems, setSelectedOriginItems] = useState([]);
  const [selectedDestItems, setSelectedDestItems] = useState([]);
  //   const [isOriginFocused, setIsOriginFocused] = useState(false);
  //   const [isDestFocused, setIsDestFocused] = useState(false);

  const { data: cachedOriginOptions, refetch: refetchOrigin } = useQuery({
    queryKey: ["airports", originInput],
    queryFn: () => searchAirports(originInput),
    enabled: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const { data: cachedDestOptions, refetch: refetchDest } = useQuery({
    queryKey: ["airports", destInput],
    queryFn: () => searchAirports(destInput),
    enabled: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const { createMultiSelectHandler, createInputDisplayUpdater } =
    useMultiSelectHandlers();

  // Multi-select handlers
  const updateOriginInputDisplay = createInputDisplayUpdater(
    selectedOriginItems,
    setOriginInput
  );
  const updateDestInputDisplay = createInputDisplayUpdater(
    selectedDestItems,
    setDestInput
  );

  const handleOriginMultiSelect = createMultiSelectHandler(
    selectedOriginItems,
    setSelectedOriginItems,
    updateOriginInputDisplay
  );

  const handleDestMultiSelect = createMultiSelectHandler(
    selectedDestItems,
    setSelectedDestItems,
    updateDestInputDisplay
  );

  // Focus handlers
  const { handleFocus: handleOriginFocus, inputRef: originInputRef } =
    useFocusHandlers(
      cachedOriginOptions,
      setOriginOptions,
      setShowOriginOptions,
      () => {},
      originInput,
      refetchOrigin
    );

  const { handleFocus: handleDestFocus, inputRef: destInputRef } =
    useFocusHandlers(
      cachedDestOptions,
      setDestOptions,
      setShowDestOptions,
      () => {},
      destInput,
      refetchDest
    );

  // Search effects
  useAirportSearch(
    originInput,
    originSelected,
    setOriginOptions,
    setShowOriginOptions,
    refetchOrigin,
    setOriginSelected
  );

  useAirportSearch(
    destInput,
    destSelected,
    setDestOptions,
    setShowDestOptions,
    refetchDest,
    setDestSelected
  );

  // Update input displays when multi-select changes
  useEffect(() => {
    if (isOriginMultiSelect) updateOriginInputDisplay();
  }, [selectedOriginItems, isOriginMultiSelect]);

  useEffect(() => {
    if (isDestMultiSelect) updateDestInputDisplay();
  }, [selectedDestItems, isDestMultiSelect]);

  // Placeholder for origin input
  const getOriginPlaceholder = () => {
    if (isLoadingLocation) return "Getting your location...";
    if (locationError) return "Where from?";
    return "Where from?";
  };

  const swapLocations = () => {
    const tempInput = originInput;
    const tempSelected = originSelected;
    setOriginInput(destInput);
    setOriginSelected(destSelected);
    setDestInput(tempInput);
    setDestSelected(tempSelected);
  };

  const originProps = {
    originInput,
    setOriginInput,
    originSelected,
    setOriginSelected,
    originOptions,
    setOriginOptions,
    showOriginOptions,
    setShowOriginOptions,
    // isOriginFocused,
    handleOriginFocus,
    handleOriginBlur: () => {}, // Add blur handler
    isOriginMultiSelect,
    setIsOriginMultiSelect,
    selectedOriginItems,
    handleOriginMultiSelect,
    isLoadingLocation,
    getOriginPlaceholder,
    cachedOriginOptions,
    // setIsOriginFocused,
    refetchOrigin,
    originInputRef,
  };

  const destinationProps = {
    destInput,
    setDestInput,
    destSelected,
    setDestSelected,
    destOptions,
    setDestOptions,
    showDestOptions,
    setShowDestOptions,
    // isDestFocused,
    handleDestFocus,
    handleDestBlur: () => {}, // Add blur handler
    isDestMultiSelect,
    setIsDestMultiSelect,
    selectedDestItems,
    handleDestMultiSelect,
    destInputRef,
  };

  const dateProps = {
    tripType,
    setTripType,
    departDate,
    setDepartDate,
    returnDate,
    setReturnDate,
    showCustomPicker,
    setShowCustomPicker,
    departHiddenRef,
    returnHiddenRef,
    searchFormRef,
  };

  return (
    <div className="relative px-4 md:px-5 pb-8">
      <MobileLayout
        originProps={originProps}
        destinationProps={destinationProps}
        dateProps={dateProps}
      />

      <DesktopLayout
        originProps={originProps}
        destinationProps={destinationProps}
        dateProps={dateProps}
        // isOriginFocused={isOriginFocused}
        swapLocations={swapLocations}
      />
    </div>
  );
}

export default SearchInputs;
