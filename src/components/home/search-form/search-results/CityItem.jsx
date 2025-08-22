import {
  ChevronDownIcon,
  ChevronUpIcon,
  LocationIcon,
} from "../../../common/Icons";

import CheckboxInput from "./CheckboxInput";

const CityItem = ({
  city,
  isMultiSelect,
  isSelected,
  hasAirports,
  isExpanded,
  onItemClick,
  onToggleExpansion,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isMultiSelect) {
      onItemClick(city);
    } else {
      onItemClick(city);
    }
  };

  const handleChevronClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleExpansion();
  };

  const handleChevronMouseDown = (e) => {
    e.preventDefault(); // Prevent focus loss
    e.stopPropagation();
  };

  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    onItemClick(city);
  };

  return (
    <div className="flex items-center hover:bg-gray-hover">
      <button
        type="button"
        className="flex-1 flex items-center px-4 py-3 text-left"
        onClick={handleClick}
      >
        {isMultiSelect && (
          <CheckboxInput checked={isSelected} onChange={handleCheckboxChange} />
        )}

        <LocationIcon className="w-4 h-4 text-text-secondary mr-3" />

        <div className="flex-1">
          <div className="text-[15px] text-text-primary font-medium">
            {city.presentation?.title || city.presentation?.suggestionTitle}
          </div>
          <div className="text-[13px] text-text-secondary">
            {city.presentation?.subtitle}
          </div>
        </div>
      </button>

      {hasAirports && (
        <button
          type="button"
          className="px-2 py-3 hover:bg-gray-hover"
          onClick={handleChevronClick}
          onMouseDown={handleChevronMouseDown}
        >
          {isExpanded ? (
            <ChevronUpIcon className="w-4 h-4 text-text-secondary" />
          ) : (
            <ChevronDownIcon className="w-4 h-4 text-text-secondary" />
          )}
        </button>
      )}
    </div>
  );
};

export default CityItem;
