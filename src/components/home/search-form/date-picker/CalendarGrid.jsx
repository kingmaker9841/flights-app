import {
  getDaysInMonth,
  getFirstDayOfMonth,
} from "../../../../utils/date-time";

import { DAYS } from "../../../../config/constants";
import DayButton from "./DayButton";

const CalendarGrid = ({
  month,
  year,
  isMobile,
  onDateClick,
  departDate,
  returnDate,
}) => {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const today = new Date();
  const isCurrentMonth =
    month === today.getMonth() && year === today.getFullYear();

  const days = [];

  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <DayButton
        key={day}
        day={day}
        month={month}
        year={year}
        isMobile={isMobile}
        isCurrentMonth={isCurrentMonth}
        isToday={isCurrentMonth && day === today.getDate()}
        onDateClick={onDateClick}
        departDate={departDate}
        returnDate={returnDate}
      />
    );
  }

  const day = DAYS.map((d) => d.slice(0, 1));

  return (
    <div className={`flex-1 ${!isMobile ? "p-4" : ""}`}>
      {/* Days header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {day.map((day, i) => (
          <div
            key={`${day}-${i}`}
            className={`flex items-center justify-center text-xs font-medium text-gray-500 ${
              isMobile ? "w-10 h-8" : "w-8 h-6"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">{days}</div>
    </div>
  );
};

export default CalendarGrid;
