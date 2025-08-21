import CalendarMonth from "./CalendarMonth";
import { generateMonths } from "../../../../utils/date-time";

const MobileCalendarView = ({
  currentMonth,
  currentYear,
  onDateClick,
  departDate,
  returnDate,
}) => (
  <div
    className="flex-1 overflow-y-auto max-h-[calc(100vh-200px)]"
    style={{ WebkitOverflowScrolling: "touch" }}
  >
    {generateMonths().map((monthData, index) => (
      <div key={`${monthData.year}-${monthData.month}`} className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {monthData.fullName}
        </h3>
        <CalendarMonth
          monthOffset={index}
          overrideMonth={monthData.month}
          overrideYear={monthData.year}
          currentMonth={currentMonth}
          currentYear={currentYear}
          isMobile={true}
          onDateClick={onDateClick}
          departDate={departDate}
          returnDate={returnDate}
        />
      </div>
    ))}
  </div>
);

export default MobileCalendarView;
