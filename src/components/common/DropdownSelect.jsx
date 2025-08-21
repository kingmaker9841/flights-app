import { CheckIcon, ChevronDownIcon } from "./Icons";

import { cn } from "../../utils/cn";
import { useDropdown } from "../../hooks/useDropdown";

const DropdownSelect = ({
  value,
  onChange,
  options,
  renderTrigger,
  triggerClassName = "",
  dropdownClassName = "",
  dropdownPosition = "left-0",
  minWidth = "min-w-[200px]",
  zIndex = "z-20",
  ...props
}) => {
  const { isOpen, isAnimating, dropdownRef, toggleDropdown } = useDropdown();

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    toggleDropdown();
  };

  return (
    <div className="relative z-80" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={cn(
          `h-9 px-3 rounded-[6px] flex items-center gap-2 hover:bg-gray-bg ${
            isOpen ? "bg-blue-focus-bg" : ""
          } ${triggerClassName}`
        )}
        {...props}
      >
        {renderTrigger ? (
          renderTrigger(value, isOpen)
        ) : (
          <>
            <span className="truncate flex-1 min-w-0">{value}</span>
            <ChevronDownIcon className={isOpen ? "rotate-180" : "rotate-0"} />
          </>
        )}
      </button>

      {(isOpen || isAnimating) && (
        <div
          className={cn(
            `absolute ${dropdownPosition} ${zIndex} mt-2 elevation-menu ${minWidth} max-w-[calc(100vw-2rem)] ${
              isAnimating ? "dropdown-exit" : "dropdown-enter"
            } ${dropdownClassName}`
          )}
        >
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={cn(
                `w-full text-left px-4 py-2 hover:bg-gray-bg flex items-center ${
                  value === option.value ? "text-blue bg-blue-focus-bg" : ""
                }`
              )}
            >
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                {value === option.value && <CheckIcon />}
              </div>
              <span className="truncate">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
