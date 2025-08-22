import { useEffect, useRef, useState } from "react";

import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import { searchAirports } from "../../../../api/airports";
import { useAirportSearch } from "../../../../hooks/useAirportSearch";

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
  selectedOriginItems,
  setSelectedOriginItems,
  selectedDestItems,
  setSelectedDestItems,
}) {
  // Refs
  const departHiddenRef = useRef(null);
  const returnHiddenRef = useRef(null);

  // State
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [isOriginMultiSelect, setIsOriginMultiSelect] = useState(false);
  const [isDestMultiSelect, setIsDestMultiSelect] = useState(false);
  // selectedOriginItems and setSelectedOriginItems now come from props
  const [isOriginFocused, setIsOriginFocused] = useState(false);
  const [isDestFocused, setIsDestFocused] = useState(false);
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

  // Focus handlers - simplified to just show options
  const originInputRef = useRef(null);
  const destInputRef = useRef(null);
  
  const handleOriginFocus = () => {
    console.log('Origin focus - options:', originOptions.length);
    setIsOriginFocused(true);
    setShowOriginOptions(true);
  };
  
  const handleDestFocus = () => {
    console.log('Dest focus - options:', destOptions.length);
    setIsDestFocused(true);
    setShowDestOptions(true);
  };

  const handleOriginBlur = () => {
    // Use timeout to allow click events to process first
    setTimeout(() => {
      setIsOriginFocused(false);
      setShowOriginOptions(false);
    }, 150);
  };

  const handleDestBlur = () => {
    // Use timeout to allow click events to process first
    setTimeout(() => {
      setIsDestFocused(false);
      setShowDestOptions(false);
    }, 150);
  };

  // Re-enable airport search for typing queries - only when focused
  useAirportSearch(
    originInput,
    originSelected,
    setOriginOptions,
    setShowOriginOptions,
    refetchOrigin,
    setOriginSelected,
    isOriginFocused
  );

  useAirportSearch(
    destInput,
    destSelected,
    setDestOptions,
    setShowDestOptions,
    refetchDest,
    setDestSelected,
    isDestFocused
  );

  console.log('SearchInputs - originOptions length:', originOptions.length);
  console.log('SearchInputs - isOriginFocused:', isOriginFocused);
  console.log('SearchInputs - originInput:', originInput);
  
  // Add onChange debugging
  const handleOriginInputChange = (value) => {
    console.log('SearchInputs - origin input changed to:', value);
    setOriginInput(value);
  };
  
  const handleDestInputChange = (value) => {
    console.log('SearchInputs - dest input changed to:', value);
    setDestInput(value);
  };

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
    setOriginInput: handleOriginInputChange,
    originSelected,
    setOriginSelected,
    originOptions,
    setOriginOptions,
    showOriginOptions,
    setShowOriginOptions,
    // isOriginFocused,
    handleOriginFocus: (e) => {
      console.log('Origin focus triggered');
      setIsOriginFocused(true);
      setShowOriginOptions(true);
    },
    handleOriginBlur: (e) => {
      console.log('Origin blur triggered');
      // Don't blur if we're in mobile mode - let mobile overlay handle it
      if (window.innerWidth < 768) {
        return;
      }
      setTimeout(() => {
        setIsOriginFocused(false);
        setShowOriginOptions(false);
      }, 150);
    },
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
    setDestInput: handleDestInputChange,
    destSelected,
    setDestSelected,
    destOptions,
    setDestOptions,
    showDestOptions,
    setShowDestOptions,
    // isDestFocused,
    handleDestFocus: (e) => {
      console.log('Dest focus triggered');
      setIsDestFocused(true);
      setShowDestOptions(true);
    },
    handleDestBlur: (e) => {
      console.log('Dest blur triggered');
      // Don't blur if we're in mobile mode - let mobile overlay handle it
      if (window.innerWidth < 768) {
        return;
      }
      setTimeout(() => {
        setIsDestFocused(false);
        setShowDestOptions(false);
      }, 150);
    },
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
