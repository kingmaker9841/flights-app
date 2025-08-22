import LocationInput from "../../../../../common/inputs/LocationInput";

export default function OriginSearch({
  originInput,
  setOriginInput,
  setOriginSelected,
  originOptions,
  showOriginOptions,
  setShowOriginOptions,
  handleOriginBlur,
  isOriginMultiSelect,
  setIsOriginMultiSelect,
  selectedOriginItems,
  handleOriginMultiSelect,
  isLoadingLocation,
  getOriginPlaceholder,
  originInputRef,
  handleOriginFocus,
}) {
  return (
    <LocationInput
      type="origin"
      value={originInput}
      onChange={setOriginInput}
      onSelect={setOriginSelected}
      options={originOptions}
      showOptions={showOriginOptions}
      setShowOptions={setShowOriginOptions}
      onFocus={handleOriginFocus}
      onBlur={handleOriginBlur}
      isMultiSelect={isOriginMultiSelect}
      setIsMultiSelect={setIsOriginMultiSelect}
      selectedItems={selectedOriginItems}
      onMultiSelect={handleOriginMultiSelect}
      placeholder={getOriginPlaceholder()}
      isLoading={isLoadingLocation}
      inputRef={originInputRef}
      expandOnFocus={true}
    />
  );
}