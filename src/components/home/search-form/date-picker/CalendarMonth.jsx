import CalendarGrid from "./CalendarGrid";
import CalendarNavigation from "./CalendarNavigation";

const CalendarMonth = ({
  monthOffset = 0,
  overrideMonth = null,
  overrideYear = null,
  currentMonth,
  currentYear,
  isMobile,
  onNavigate,
  onDateClick,
  departDate,
  returnDate,
}) => {
  const month =
    overrideMonth !== null ? overrideMonth : (currentMonth + monthOffset) % 12;
  const year =
    overrideYear !== null
      ? overrideYear
      : currentYear + Math.floor((currentMonth + monthOffset) / 12);

  return (
    <div className={`flex-1 ${!isMobile ? "p-4" : ""}`}>
      {!isMobile && (
        <CalendarNavigation
          month={month}
          year={year}
          onNavigate={monthOffset === 0 ? onNavigate : null}
        />
      )}

      <CalendarGrid
        month={month}
        year={year}
        isMobile={isMobile}
        onDateClick={onDateClick}
        departDate={departDate}
        returnDate={returnDate}
      />
    </div>
  );
};

export default CalendarMonth;
