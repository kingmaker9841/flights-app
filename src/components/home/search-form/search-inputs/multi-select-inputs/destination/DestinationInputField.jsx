import { LocationIcon } from "../../../../../common/Icons";
import SelectedItemChips from "../SelectedItemChips";
import { cn } from "../../../../../../utils/cn";

const DestinationInputField = ({
  value,
  onChange,
  onFocus,
  onBlur,
  inputRef,
  isMultiSelect,
  selectedItems,
  onRemoveItem,
  isFocused,
}) => {
  const getPlaceholder = () => {
    if (isMultiSelect && selectedItems?.length > 0) return "Where else?";
    return "Where to?";
  };

  const getDisplayValue = () => {
    if (!isMultiSelect) return value;

    if (isFocused) {
      return value; // Show the typing value when focused
    } else if (selectedItems?.length > 0) {
      return `${selectedItems.length} destination${
        selectedItems.length > 1 ? "s" : ""
      } selected`;
    }

    return "";
  };

  return (
    <>
      <LocationIcon className="w-5 h-5 mr-2 text-text-secondary flex-shrink-0 mt-2" />
      <div className={cn("flex-1 flex flex-col gap-1")}>
        {isFocused && isMultiSelect && selectedItems?.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            <SelectedItemChips
              selectedItems={selectedItems}
              onRemove={onRemoveItem}
            />
          </div>
        )}
        <input
          ref={inputRef}
          type="text"
          value={getDisplayValue()}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={getPlaceholder()}
          className={cn(
            `z-50 w-full text-[16px] placeholder-gray-light border-0 
          focus:outline-none bg-transparent text-text-input truncate py-1`
          )}
        />
      </div>
    </>
  );
};

export default DestinationInputField;
