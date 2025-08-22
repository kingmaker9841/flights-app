import { formatDateDisplay } from "../../../../utils/date-time";

const DateDisplay = ({ label, date, isSelected }) => {
  const formattedDate = formatDateDisplay(date);
  const hasDate = formattedDate && formattedDate.trim() !== "";
  
  return (
    <div className="text-center">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
        {label}
      </div>
      <div
        className={`text-sm font-medium cursor-pointer px-3 py-1 rounded border ${
          isSelected ? "text-blue border-blue" : hasDate ? "text-gray-700 border-gray-300" : "text-gray-400 border-gray-200"
        }`}
      >
        {hasDate ? formattedDate : "Select date"}
      </div>
    </div>
  );
};

export default DateDisplay;
