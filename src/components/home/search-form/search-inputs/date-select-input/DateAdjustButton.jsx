import { ChevronLeftIcon, ChevronRightIcon } from "../../../../common/Icons";

const DateAdjustButton = ({ onClick, direction, className = "" }) => {
  const IconComponent =
    direction === "prev" ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-1 hover:bg-gray-hover rounded ${className}`}
    >
      <IconComponent className="w-4 h-4 text-text-secondary" />
    </button>
  );
};

export default DateAdjustButton;
