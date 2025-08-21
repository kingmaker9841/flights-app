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
      console.log("Toggling selection:", city.navigation?.entityId);
      onItemClick(city);
    } else if (hasAirports) {
      console.log("Expanding city:", city.navigation?.entityId);
      onToggleExpansion();
    } else {
      console.log("Selecting city:", city.navigation?.entityId);
      onItemClick(city);
    }
  };

  const handleChevronMouseDown = (e) => {
    e.preventDefault(); // Prevent focus loss
    e.stopPropagation();
  };

  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    onItemClick(city);
    console.log("Checkbox clicked, selecting:", city.navigation?.entityId);
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

        {hasAirports && (
          <div className="ml-2" onMouseDown={handleChevronMouseDown}>
            {isExpanded ? (
              <ChevronUpIcon className="w-4 h-4 text-text-secondary" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 text-text-secondary" />
            )}
          </div>
        )}
      </button>
    </div>
  );
};

export default CityItem;
