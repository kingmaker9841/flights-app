import CheckboxInput from "./CheckboxInput";
import { PlaneIcon } from "../../../common/Icons";

const AirportItem = ({ airport, isMultiSelect, isSelected, onItemClick }) => {
  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    onItemClick(airport);
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onItemClick(airport);
  };

  return (
    <button
      type="button"
      className="w-full flex items-center px-4 py-3 pl-8 text-left hover:bg-gray-hover"
      onClick={handleClick}
    >
      {isMultiSelect && (
        <CheckboxInput checked={isSelected} onChange={handleCheckboxChange} />
      )}

      <PlaneIcon className="w-4 h-4 text-text-secondary mr-3" />

      <div className="flex-1">
        <div className="text-[14px] text-text-primary">
          {airport.presentation?.suggestionTitle || airport.presentation?.title}
        </div>
        {airport.distance && (
          <div className="text-[12px] text-text-secondary">
            {airport.distance} to destination
          </div>
        )}
      </div>
    </button>
  );
};

export default AirportItem;
