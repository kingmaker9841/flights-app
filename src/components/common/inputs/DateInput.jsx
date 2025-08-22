import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "../Icons";
import { addDays, formatDateToDayDateMonth } from "../../../utils/date-time";
import { cn } from "../../../utils/cn";

const DateInput = ({
  date,
  onDateChange,
  onDatePickerOpen,
  placeholder = "Select date",
  className = "",
  showNavigation = true,
}) => {
  const adjustDate = (direction) => {
    if (date) {
      onDateChange(addDays(date, direction === "prev" ? -1 : 1));
    }
  };

  return (
    <div
      className={cn(
        "rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center cursor-pointer",
        className
      )}
      onClick={onDatePickerOpen}
    >
      <div className="flex items-center px-3">
        <CalendarIcon />
      </div>
      <div className="flex-1 flex items-center px-2">
        <span className="text-[16px] text-text-input">
          {date ? formatDateToDayDateMonth(date) : placeholder}
        </span>
      </div>
      {showNavigation && (
        <div className="flex items-center pr-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              adjustDate("prev");
            }}
            className="w-8 h-8 rounded-full hover:bg-gray-bg flex items-center justify-center"
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              adjustDate("next");
            }}
            className="w-8 h-8 rounded-full hover:bg-gray-bg flex items-center justify-center ml-1"
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default DateInput;