import { ArrowLeftIcon, CheckIcon, PlusIcon } from "../Icons";
import { useEffect, useRef } from "react";

import AirportDropdown from "../../home/search-form/search-results/AirportDropdown";
import SelectedItemChips from "../../home/search-form/search-inputs/multi-select-inputs/SelectedItemChips";
import { cn } from "../../../utils/cn";

const MobileLocationOverlay = ({
  isOpen,
  onClose,
  type = "origin",
  value,
  onChange,
  onSelect,
  options = [],
  showOptions,
  setShowOptions,
  isMultiSelect = false,
  setIsMultiSelect,
  selectedItems = [],
  onMultiSelect,
  placeholder,
  isLoading = false,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Focus input when overlay opens
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    // Prevent body scroll when overlay is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    onChange(e.target.value);
    onSelect?.(null);
    // Show options when user types
    if (e.target.value.length > 0) {
      setShowOptions?.(true);
    }
  };

  const handleSingleSelect = (item) => {
    onSelect?.(item);
    onChange(
      item.presentation?.title || item.presentation?.suggestionTitle || ""
    );
    onClose();
  };

  const handleOptionSelect = (item) => {
    if (isMultiSelect) {
      onMultiSelect?.(item);
    } else {
      handleSingleSelect(item);
    }
  };

  const handleRemoveItem = (item) => {
    onMultiSelect?.(item);
  };

  const toggleMultiSelect = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (options.length > 0) {
      setIsMultiSelect?.(!isMultiSelect);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-primary md:hidden overflow-hidden">
      {/* Header with Back Button and Input */}
      <div className="flex items-center p-4 border-b border-gray-border bg-primary">
        <button
          type="button"
          onClick={onClose}
          className="p-2 -ml-2 mr-2 rounded-full hover:bg-gray-hover flex-shrink-0"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>

        <div className="flex-1 flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder={
              placeholder || (type === "origin" ? "Where from?" : "Where to?")
            }
            disabled={isLoading}
            className={cn(
              "flex-1 text-lg p-3 border-0 bg-transparent",
              "focus:outline-none placeholder-gray-light text-text-input",
              isLoading ? "cursor-wait" : ""
            )}
          />

          {setIsMultiSelect && (
            <button
              type="button"
              onClick={toggleMultiSelect}
              className={cn(
                "ml-2 p-2 rounded-full transition-all duration-200 flex-shrink-0",
                isMultiSelect
                  ? "bg-blue text-primary hover:bg-blue-hover"
                  : "hover:bg-gray-hover"
              )}
            >
              {isMultiSelect ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                <PlusIcon className="w-5 h-5 text-text-secondary" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Selected Items */}
      {isMultiSelect && selectedItems?.length > 0 && (
        <div className="px-4 py-2 bg-gray-bg border-b border-gray-border">
          <SelectedItemChips
            selectedItems={selectedItems}
            onRemove={handleRemoveItem}
          />
        </div>
      )}

      {/* Results */}
      <div className="flex-1 overflow-y-auto bg-primary">
        {(showOptions || options.length > 0) && (
          <AirportDropdown
            options={options}
            onSelect={handleOptionSelect}
            onClose={onClose}
            isMultiSelect={isMultiSelect}
            selectedItems={selectedItems}
            onMultiSelect={onMultiSelect}
            className="border-0 rounded-none shadow-none max-h-none bg-primary"
            isLoading={
              value && value.length > 0 && options.length === 0 && !isLoading
            }
          />
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center p-8 bg-primary">
            <div className="text-gray-light">Searching...</div>
          </div>
        )}

        {/* No Results */}
        {!isLoading && value && value.length > 0 && options.length === 0 && (
          <div className="flex items-center justify-center p-8 bg-primary">
            <div className="text-gray-light">No results found</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileLocationOverlay;
