import AirportDropdown from "../../../search-results/AirportDropdown";
import DropdownContainer from "./DropdownContainer";
import InputContainer from "./InputContainer";
import LoadingSpinner from "./LoadingSpinner";
import MultiSelectToggle from "./MultiSelectToggle";
import OriginInputField from "./OriginInputField";
import { cn } from "../../../../../../utils/cn";
import { useClickOutside } from "../../../../../../hooks/useClickOutside";
import { useRef } from "react";

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
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  useClickOutside(
    [dropdownRef, toggleRef],
    () => setShowOriginOptions(false),
    showOriginOptions
  );

  useClickOutside(
    [dropdownRef, toggleRef, originInputRef],
    () => {
      console.log("Closing dropdown");
      setShowOriginOptions(false);
    },
    showOriginOptions
  );

  const handleInputChange = (e) => {
    setOriginInput(e.target.value);
    setOriginSelected(null);
  };

  const handleSingleSelect = (item) => {
    setOriginSelected(item);
    setOriginInput(
      item.presentation?.title || item.presentation?.suggestionTitle || ""
    );
    setShowOriginOptions(false);
  };

  const handleOptionSelect = (item) => {
    if (isOriginMultiSelect) {
      handleOriginMultiSelect(item);
    } else {
      handleSingleSelect(item);
    }
  };

  const toggleMultiSelect = () => {
    if (originOptions.length > 0) {
      setIsOriginMultiSelect(!isOriginMultiSelect);
    }
  };

  return (
    <div className="relative">
      <InputContainer>
        <OriginInputField
          inputRef={originInputRef}
          value={originInput}
          onChange={handleInputChange}
          onFocus={handleOriginFocus}
          onBlur={handleOriginBlur}
          placeholder={getOriginPlaceholder()}
          isLoading={isLoadingLocation}
        />
        <LoadingSpinner isLoading={isLoadingLocation} />
        <MultiSelectToggle
          isMultiSelect={isOriginMultiSelect}
          onToggle={toggleMultiSelect}
          disabled={originOptions.length === 0}
          toggleRef={toggleRef}
        />
      </InputContainer>

      <DropdownContainer show={showOriginOptions} ref={dropdownRef}>
        <AirportDropdown
          options={originOptions}
          onSelect={handleOptionSelect}
          onClose={() => setShowOriginOptions(false)}
          isMultiSelect={isOriginMultiSelect}
          selectedItems={selectedOriginItems}
          onMultiSelect={handleOriginMultiSelect}
          className={cn("rounded-tl-none rounded-tr-none")}
          isLoading={originInput && originOptions.length === 0}
        />
      </DropdownContainer>
    </div>
  );
}
