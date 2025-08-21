import AirportDropdown from "../../../search-results/AirportDropdown";
import DestinationInputField from "./DestinationInputField";
import DropdownContainer from "./DropdownContainer";
import InputContainer from "./InputContainer";
import MultiSelectToggle from "./MultiSelectToggle";
import { cn } from "../../../../../../utils/cn";
import { useClickOutside } from "../../../../../../hooks/useClickOutside";
import { useRef } from "react";

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
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  useClickOutside(
    [dropdownRef, toggleRef, destInputRef],
    () => setShowDestOptions(false),
    showDestOptions
  );

  const handleInputChange = (e) => {
    setDestInput(e.target.value);
    setDestSelected(null);
  };

  const handleSingleSelect = (item) => {
    setDestSelected(item);
    setDestInput(
      item.presentation?.title || item.presentation?.suggestionTitle || ""
    );
    setShowDestOptions(false);
  };

  const handleOptionSelect = (item) => {
    if (isDestMultiSelect) {
      handleDestMultiSelect(item);
    } else {
      handleSingleSelect(item);
    }
  };

  const toggleMultiSelect = () => {
    if (destOptions.length > 0) {
      setIsDestMultiSelect(!isDestMultiSelect);
    }
  };

  return (
    <div className="relative">
      <InputContainer>
        <DestinationInputField
          value={destInput}
          onChange={handleInputChange}
          onFocus={handleDestFocus}
          onBlur={handleDestBlur}
          inputRef={destInputRef}
        />
        <MultiSelectToggle
          isMultiSelect={isDestMultiSelect}
          onToggle={toggleMultiSelect}
          disabled={destOptions.length === 0}
          toggleRef={toggleRef}
        />
      </InputContainer>

      <DropdownContainer show={showDestOptions} ref={dropdownRef}>
        <AirportDropdown
          options={destOptions}
          onSelect={handleOptionSelect}
          onClose={() => setShowDestOptions(false)}
          isMultiSelect={isDestMultiSelect}
          selectedItems={selectedDestItems}
          className={cn("rounded-tl-none rounded-tr-none")}
          isLoading={destInput && destOptions.length === 0}
        />
      </DropdownContainer>
    </div>
  );
}
