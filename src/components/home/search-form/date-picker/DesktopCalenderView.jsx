import CalendarMonth from "./CalendarMonth";

const DesktopCalendarView = ({
  currentMonth,
  currentYear,
  onNavigate,
  onDateClick,
  departDate,
  returnDate,
}) => (
  <div className="flex">
    <CalendarMonth
      monthOffset={0}
      currentMonth={currentMonth}
      currentYear={currentYear}
      isMobile={false}
      onNavigate={onNavigate}
      onDateClick={onDateClick}
      departDate={departDate}
      returnDate={returnDate}
    />
    <CalendarMonth
      monthOffset={1}
      currentMonth={currentMonth}
      currentYear={currentYear}
      isMobile={false}
      onDateClick={onDateClick}
      departDate={departDate}
      returnDate={returnDate}
    />
  </div>
);

export default DesktopCalendarView;
