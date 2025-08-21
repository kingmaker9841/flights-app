import {
  formatDateString,
  isDateInRange,
  isDateSelected,
} from "../../../../utils/date-time";

const DayButton = ({
  day,
  month,
  year,
  isMobile,
  //   isCurrentMonth,
  isToday,
  onDateClick,
  departDate,
  returnDate,
}) => {
  const dateStr = formatDateString(year, month, day);
  const isSelected = isDateSelected(dateStr, departDate, returnDate);
  const isInRange = isDateInRange(dateStr, departDate, returnDate);
  const isPast = new Date(dateStr) < new Date().setHours(0, 0, 0, 0);

  const getButtonClasses = () => {
    const baseClasses = `rounded-full text-sm transition-all duration-200 flex items-center justify-center ${
      isMobile ? "w-10 h-10" : "w-8 h-8"
    }`;

    if (isPast) {
      return `${baseClasses} text-gray-300 cursor-not-allowed`;
    }
    if (isSelected) {
      return `${baseClasses} bg-blue text-white font-medium`;
    }
    if (isInRange) {
      return `${baseClasses} bg-blue-100 text-blue`;
    }
    if (isToday) {
      return `${baseClasses} bg-gray-hover text-blue font-medium`;
    }
    return `${baseClasses} text-gray-700 hover-bg-gray`;
  };

  return (
    <button
      onMouseDown={(e) => !isPast && onDateClick(day, month, year, e)}
      disabled={isPast}
      className={getButtonClasses()}
    >
      {day}
    </button>
  );
};

export default DayButton;
