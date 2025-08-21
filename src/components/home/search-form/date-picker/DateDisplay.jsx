import { formatDateDisplay } from "../../../../utils/date-time";

const DateDisplay = ({ label, date, isSelected }) => {
  return (
    <div className="text-center">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
        {label}
      </div>
      <div
        className={`text-sm font-medium cursor-pointer px-3 py-1 rounded border ${
          isSelected ? "text-blue border-blue" : "text-gray-700 border-gray-300"
        }`}
      >
        {formatDateDisplay(date)}
      </div>
    </div>
  );
};

export default DateDisplay;
