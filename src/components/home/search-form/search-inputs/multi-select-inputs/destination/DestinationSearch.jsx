import LocationInput from "../../../../../common/inputs/LocationInput";

export default function DestinationSearch({
  destInput,
  setDestInput,
  setDestSelected,
  destOptions,
  showDestOptions,
  setShowDestOptions,
  handleDestFocus,
  handleDestBlur,
  isDestMultiSelect,
  setIsDestMultiSelect,
  selectedDestItems,
  handleDestMultiSelect,
  destInputRef,
}) {
  return (
    <LocationInput
      type="destination"
      value={destInput}
      onChange={setDestInput}
      onSelect={setDestSelected}
      options={destOptions}
      showOptions={showDestOptions}
      setShowOptions={setShowDestOptions}
      onFocus={handleDestFocus}
      onBlur={handleDestBlur}
      isMultiSelect={isDestMultiSelect}
      setIsMultiSelect={setIsDestMultiSelect}
      selectedItems={selectedDestItems}
      onMultiSelect={handleDestMultiSelect}
      placeholder="Where to?"
      inputRef={destInputRef}
      expandOnFocus={true}
    />
  );
}