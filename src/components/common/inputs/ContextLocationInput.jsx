import { ORIGIN_OR_DESTINATION, PLACEHOLDERS } from "../../../config/constants";

import LocationInput from "./LocationInput";
import { searchAirports } from "../../../api/airports";
import { useAirportSearch } from "../../../hooks/useAirportSearch";
import { useEffect } from "react";
import { useMultiSelectHandlers } from "../../../hooks/useMultiSelectHandlers";
import { useQuery } from "@tanstack/react-query";
import { useSearchContext } from "../../../context/SearchContext";

const ContextLocationInput = ({ type, ...props }) => {
  const {
    // Origin state
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
    originInputRef,

    // Destination state
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
    destInputRef,

    // Loading state
    isLoadingLocation,
    locationError,
  } = useSearchContext();

  const isOrigin = type === ORIGIN_OR_DESTINATION.ORIGIN;

  // Select appropriate state based on type
  const input = isOrigin ? originInput : destInput;
  const setInput = isOrigin ? setOriginInput : setDestInput;
  const selected = isOrigin ? originSelected : destSelected;
  const setSelected = isOrigin ? setOriginSelected : setDestSelected;
  const options = isOrigin ? originOptions : destOptions;
  const setOptions = isOrigin ? setOriginOptions : setDestOptions;
  const showOptions = isOrigin ? showOriginOptions : showDestOptions;
  const setShowOptions = isOrigin ? setShowOriginOptions : setShowDestOptions;
  const selectedItems = isOrigin ? selectedOriginItems : selectedDestItems;
  const setSelectedItems = isOrigin
    ? setSelectedOriginItems
    : setSelectedDestItems;
  const isMultiSelect = isOrigin ? isOriginMultiSelect : isDestMultiSelect;
  const setIsMultiSelect = isOrigin
    ? setIsOriginMultiSelect
    : setIsDestMultiSelect;
  const isFocused = isOrigin ? isOriginFocused : isDestFocused;
  const setIsFocused = isOrigin ? setIsOriginFocused : setIsDestFocused;
  const inputRef = isOrigin ? originInputRef : destInputRef;

  // API queries
  const { refetch } = useQuery({
    queryKey: ["airports", input],
    queryFn: () => searchAirports(input),
    enabled: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  // Airport search hook
  useAirportSearch(
    input,
    selected,
    setOptions,
    setShowOptions,
    refetch,
    setSelected,
    isFocused
  );

  // Multi-select handlers
  const { createMultiSelectHandler, createInputDisplayUpdater } =
    useMultiSelectHandlers();

  const updateInputDisplay = createInputDisplayUpdater(selectedItems, setInput);
  const handleMultiSelect = createMultiSelectHandler(
    selectedItems,
    setSelectedItems,
    updateInputDisplay
  );

  // Update input display when multi-select changes
  useEffect(() => {
    if (isMultiSelect) updateInputDisplay();
  }, [selectedItems, isMultiSelect, updateInputDisplay]);

  // Focus handlers
  const handleFocus = () => {
    console.log(`${type} focus - options:`, options.length);
    setIsFocused(true);
    setShowOptions(true);
  };

  const handleBlur = () => {
    if (window.innerWidth < 768) return;
    setTimeout(() => {
      setIsFocused(false);
      setShowOptions(false);
    }, 150);
  };

  // Placeholder
  const getPlaceholder = () => {
    if (isOrigin) {
      if (isLoadingLocation) return PLACEHOLDERS.GETTING_LOCATION;
      if (locationError) return PLACEHOLDERS.ORIGIN;
      return PLACEHOLDERS.ORIGIN;
    }
    return PLACEHOLDERS.DESTINATION;
  };

  return (
    <LocationInput
      type={type}
      value={input}
      onChange={setInput}
      onSelect={setSelected}
      options={options}
      showOptions={showOptions}
      setShowOptions={setShowOptions}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isMultiSelect={isMultiSelect}
      setIsMultiSelect={setIsMultiSelect}
      selectedItems={selectedItems}
      onMultiSelect={handleMultiSelect}
      placeholder={getPlaceholder()}
      isLoading={isLoadingLocation && isOrigin}
      inputRef={inputRef}
      expandOnFocus={true}
      {...props}
    />
  );
};

export default ContextLocationInput;
