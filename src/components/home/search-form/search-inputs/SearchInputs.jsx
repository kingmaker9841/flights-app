import { useEffect, useRef } from "react";

import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import { searchAirports } from "../../../../api/airports";
import { useAirportSearch } from "../../../../hooks/useAirportSearch";
import { useMultiSelectHandlers } from "../../../../hooks/useMultiSelectHandlers";
import { useQuery } from "@tanstack/react-query";
import { useSearchContext } from "../../../../context/SearchContext";

function SearchInputs() {
  const {
    originInput,
    setOriginInput,
    originSelected,
    setOriginSelected,
    originOptions,
    setOriginOptions,
    setShowOriginOptions,
    destInput,
    setDestInput,
    destSelected,
    setDestSelected,
    destOptions,
    setDestOptions,
    setShowDestOptions,

    isLoadingLocation,
    locationError,
    selectedOriginItems,
    setSelectedOriginItems,
    selectedDestItems,
    setSelectedDestItems,
    isOriginMultiSelect,
    isDestMultiSelect,
    isOriginFocused,
    setIsOriginFocused,
    isDestFocused,
    setIsDestFocused,
  } = useSearchContext();
  // Refs
  const departHiddenRef = useRef(null);
  const returnHiddenRef = useRef(null);

  const { data: cachedOriginOptions, refetch: refetchOrigin } = useQuery({
    queryKey: ["airports", originInput],
    queryFn: () => searchAirports(originInput),
    enabled: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const { refetch: refetchDest } = useQuery({
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
  const handleOriginFocus = () => {
    console.log("Origin focus - options:", originOptions.length);
    setIsOriginFocused(true);
    setShowOriginOptions(true);
  };

  const handleDestFocus = () => {
    console.log("Dest focus - options:", destOptions.length);
    setIsDestFocused(true);
    setShowDestOptions(true);
  };

  const handleOriginBlur = () => {
    if (window.innerWidth < 768) return;
    setTimeout(() => {
      setIsOriginFocused(false);
      setShowOriginOptions(false);
    }, 150);
  };

  const handleDestBlur = () => {
    if (window.innerWidth < 768) return;
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

  // Update input displays when multi-select changes
  useEffect(() => {
    if (isOriginMultiSelect) updateOriginInputDisplay();
  }, [selectedOriginItems, isOriginMultiSelect, updateOriginInputDisplay]);

  useEffect(() => {
    if (isDestMultiSelect) updateDestInputDisplay();
  }, [selectedDestItems, isDestMultiSelect, updateDestInputDisplay]);

  // Placeholder for origin input
  const getOriginPlaceholder = () => {
    if (isLoadingLocation) return "Getting your location...";
    if (locationError) return "Where from?";
    return "Where from?";
  };

  const originProps = {
    handleOriginFocus,
    handleOriginBlur,
    handleOriginMultiSelect,
    getOriginPlaceholder,
    cachedOriginOptions,
    refetchOrigin,
  };

  const destinationProps = {
    handleDestFocus,
    handleDestBlur,
    handleDestMultiSelect,
  };

  const dateProps = {
    departHiddenRef,
    returnHiddenRef,
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
      />
    </div>
  );
}

export default SearchInputs;
