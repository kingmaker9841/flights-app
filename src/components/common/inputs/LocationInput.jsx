import { CircleIcon, LocationIcon } from "../Icons";
import { useCallback, useRef, useState } from "react";

import AirportDropdown from "../../home/search-form/search-results/AirportDropdown";
import LoadingSpinner from "../LoadingSpinner";
import MobileLocationOverlay from "./MobileLocationOverlay";
import MultiSelectToggle from "../MultiSelectToggle";
import { ORIGIN_OR_DESTINATION } from "../../../config/constants";
import SelectedItemChips from "../SelectedItemChips";
import { cn } from "../../../utils/cn";
import { createPortal } from "react-dom";
import { useClickOutside } from "../../../hooks/useClickOutside";

const LocationInput = ({
  type = ORIGIN_OR_DESTINATION.ORIGIN, // "origin" or "destination"
  value,
  onChange,
  onSelect,
  options = [],
  showOptions,
  setShowOptions,
  onFocus,
  onBlur,
  isMultiSelect = false,
  setIsMultiSelect,
  selectedItems = [],
  onMultiSelect,
  placeholder,
  isLoading = false,
  className = "",
  inputRef,
  expandOnFocus = false, // For multicity, no expansion
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);
  const containerRef = useRef(null);

  const handleClickOutside = useCallback(() => {
    setShowOptions(false);
    setIsFocused(false);

    if (inputRef?.current) {
      inputRef.current.blur();
    }
  }, [inputRef, setShowOptions]);

  useClickOutside([containerRef], handleClickOutside, showOptions || isFocused);

  const handleInputChange = (e) => {
    onChange(e.target.value);
    onSelect?.(null);
  };

  const handleMobileInputClick = () => {
    if (window.innerWidth < 768) {
      setShowMobileOverlay(true);
      return;
    }
    // Desktop behavior - normal focus
    inputRef?.current?.focus();
  };

  const handleSingleSelect = (item) => {
    onSelect?.(item);
    onChange(
      item.presentation?.title || item.presentation?.suggestionTitle || ""
    );
    setShowOptions(false);
    setIsFocused(false);
    if (inputRef?.current) {
      inputRef.current.blur();
    }
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
      // Keep options visible when toggling multiselect
      setShowOptions(true);
    }
  };

  const getPlaceholder = () => {
    if (isLoading) return placeholder;
    if (isMultiSelect && selectedItems?.length > 0) {
      return type === ORIGIN_OR_DESTINATION.ORIGIN
        ? "Where else?"
        : "Where else?";
    }
    return (
      placeholder ||
      (type === ORIGIN_OR_DESTINATION.ORIGIN ? "Where from?" : "Where to?")
    );
  };

  const getDisplayValue = () => {
    if (!isMultiSelect) return value;

    if (isFocused) {
      return value;
    } else if (selectedItems?.length > 0) {
      const itemType =
        type === ORIGIN_OR_DESTINATION.ORIGIN
          ? "location"
          : ORIGIN_OR_DESTINATION.DESTINATION;
      return `${selectedItems.length} ${itemType}${
        selectedItems.length > 1 ? "s" : ""
      } selected`;
    }

    return "";
  };

  const Icon =
    type === ORIGIN_OR_DESTINATION.ORIGIN ? CircleIcon : LocationIcon;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div
        className={cn(
          `relative rounded-[8px] min-h-[48px] border border-gray-border 
          hover:border-gray-light shadow-sm bg-gray-bg flex items-start px-3 py-2 transition-all duration-200`,
          expandOnFocus && isFocused
            ? "shadow-[0_2px_8px_rgba(60,64,67,0.3)] ring-opacity-50 z-60 ring-1 ring-blue sm:w-[150%] w-[120%] rounded-br-none rounded-bl-none "
            : "w-[100%] -z-0"
        )}
      >
        <Icon className="w-5 h-5 mr-2 text-text-secondary flex-shrink-0 mt-2" />
        <div className={cn("flex-1 flex flex-col gap-1")}>
          {isFocused && isMultiSelect && selectedItems?.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              <SelectedItemChips
                selectedItems={selectedItems}
                onRemove={handleRemoveItem}
              />
            </div>
          )}
          <input
            ref={inputRef}
            type="text"
            value={getDisplayValue()}
            onChange={handleInputChange}
            onFocus={(e) => {
              if (window.innerWidth < 768) {
                e.target.blur();
                setShowMobileOverlay(true);
                setIsFocused(true); // Set focused for mobile overlay
                onFocus?.(e);
                return;
              }
              onFocus?.(e);
              setIsFocused(true);
            }}
            onClick={handleMobileInputClick}
            onBlur={(e) => {
              // Don't blur if mobile overlay is open
              if (showMobileOverlay) {
                return;
              }
              // Only blur if not clicking on dropdown elements
              setTimeout(() => {
                if (!containerRef.current?.contains(document.activeElement)) {
                  onBlur?.(e);
                  setIsFocused(false);
                  setShowOptions(false);
                }
              }, 100);
            }}
            placeholder={getPlaceholder()}
            disabled={isLoading}
            className={cn(
              `z-50 w-full text-[16px] placeholder-gray-light border-0 
              focus:outline-none bg-transparent text-text-input truncate py-1`,
              isLoading ? "cursor-wait" : ""
            )}
          />
        </div>

        <LoadingSpinner isLoading={isLoading} />
        {setIsMultiSelect && (
          <MultiSelectToggle
            isMultiSelect={isMultiSelect}
            onToggle={toggleMultiSelect}
            disabled={options.length === 0}
            toggleRef={toggleRef}
          />
        )}
      </div>

      {/* Desktop Dropdown */}
      {showOptions && (
        <div
          ref={dropdownRef}
          className={cn(
            `absolute left-0 top-full z-40 hidden md:block`,
            expandOnFocus && isFocused
              ? "sm:w-[150%] w-[120%] rounded-tr-none rounded-tl-none"
              : "right-0"
          )}
        >
          <AirportDropdown
            options={options}
            onSelect={handleOptionSelect}
            onClose={() => setShowOptions(false)}
            isMultiSelect={isMultiSelect}
            selectedItems={selectedItems}
            onMultiSelect={onMultiSelect}
            className={cn("rounded-tl-none rounded-tr-none")}
            isLoading={
              value && value.length > 0 && options.length === 0 && !isLoading
            }
          />
        </div>
      )}

      {/* Mobile Overlay - Rendered as Portal */}
      {showMobileOverlay &&
        createPortal(
          <MobileLocationOverlay
            isOpen={showMobileOverlay}
            onClose={() => {
              setShowMobileOverlay(false);
              setIsFocused(false);
              onBlur?.();
            }}
            type={type}
            value={value}
            onChange={onChange}
            onSelect={onSelect}
            options={options}
            showOptions={showOptions}
            setShowOptions={setShowOptions}
            isMultiSelect={isMultiSelect}
            setIsMultiSelect={setIsMultiSelect}
            selectedItems={selectedItems}
            onMultiSelect={onMultiSelect}
            placeholder={placeholder}
            isLoading={isLoading}
          />,
          document.body
        )}
    </div>
  );
};

export default LocationInput;
