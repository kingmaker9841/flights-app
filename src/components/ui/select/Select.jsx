import { CheckIcon, ChevronDownIcon } from "../../common/Icons";

import { Button } from "../index";
import { cn } from "../../../utils/cn";
import { useDropdown } from "../../../hooks/useDropdown";

const Select = ({
  value,
  onChange,
  options = [],
  placeholder = "Select...",
  renderTrigger,
  className = "",
  dropdownClassName = "",
  position = "bottom-left",
  disabled = false,
}) => {
  const { isOpen, isAnimating, dropdownRef, toggleDropdown } = useDropdown();

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    toggleDropdown();
  };

  const positions = {
    "bottom-left": "top-full left-0",
    "bottom-right": "top-full right-0",
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        onClick={toggleDropdown}
        disabled={disabled}
        className={cn(
          "justify-between w-full border-0 hover:bg-gray-bg",
          isOpen && "bg-blue-focus-bg",
          className
        )}
      >
        {renderTrigger ? (
          renderTrigger(value, isOpen)
        ) : (
          <>
            <span className="truncate">
              {options.find((opt) => opt.value === value)?.label || placeholder}
            </span>
            <ChevronDownIcon
              className={cn("transition-transform", isOpen && "rotate-180")}
            />
          </>
        )}
      </Button>

      {(isOpen || isAnimating) && (
        <div
          className={cn(
            "absolute z-50 mt-2 bg-primary border border-gray-border rounded-lg shadow-lg min-w-full elevation-menu",
            "animate-in fade-in-0 zoom-in-95 duration-100",
            positions[position],
            isAnimating && "animate-out fade-out-0 zoom-out-95",
            dropdownClassName
          )}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={cn(
                "w-full text-left px-3 py-2 hover:bg-gray-hover flex items-center first:rounded-t-lg last:rounded-b-lg",
                value === option.value && "bg-blue-focus-bg text-blue"
              )}
            >
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                {value === option.value && <CheckIcon className="w-3 h-3" />}
              </div>
              <span className="truncate">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
