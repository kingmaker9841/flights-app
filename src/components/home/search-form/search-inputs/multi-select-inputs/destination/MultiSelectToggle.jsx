import { CheckIcon, PlusIcon } from "../../../../../common/Icons";

import { cn } from "../../../../../../utils/cn";

const MultiSelectToggle = ({
  isMultiSelect,
  onToggle,
  className = "",
  disabled,
  toggleRef,
}) => (
  <button
    type="button"
    onClick={onToggle}
    disabled={disabled}
    ref={toggleRef}
    className={cn(
      `ml-2 p-1 rounded transition-all duration-200 ${
        isMultiSelect
          ? "bg-blue text-white hover:bg-blue-hover"
          : "hover:bg-gray-hover"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`
    )}
    title="Multi-select mode"
  >
    {isMultiSelect ? (
      <CheckIcon className="w-4 h-4" />
    ) : (
      <PlusIcon className="w-4 h-4 text-text-secondary" />
    )}
  </button>
);

export default MultiSelectToggle;
