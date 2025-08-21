import DatePickerFooter from "./DatePickerFooter";
import DesktopCalendarView from "./DesktopCalenderView";
import DesktopHeader from "./DesktopHeader";
import MobileCalendarView from "./MobileCalenderView";
import MobileHeader from "./MobileHeader";
import { useCalendarNavigation } from "../../../../hooks/useCalendarNavigation";
import { useClickOutside } from "./useClickOutside";
import { useDateSelection } from "../../../../hooks/useDateSelection";
import { usePickerPositioning } from "../../../../hooks/usePickerPositioning";
import { useRef } from "react";
import { useResponsive } from "../../../../hooks/useResponsive";

function CustomDatePicker({
  isOpen,
  onClose,
  departDate,
  setDepartDate,
  returnDate,
  setReturnDate,
  tripType,
  setTripType,
  searchFormRef,
}) {
  const pickerRef = useRef(null);
  const isMobile = useResponsive(768);

  const { currentMonth, currentYear, navigateMonth } = useCalendarNavigation();

  const { justClickedDate, handleDateClick, resetDates } = useDateSelection({
    tripType,
    departDate,
    setDepartDate,
    returnDate,
    setReturnDate,
    onClose,
    isOpen,
  });

  usePickerPositioning(isOpen, pickerRef, searchFormRef, isMobile);
  useClickOutside(pickerRef, onClose, justClickedDate, isOpen);

  if (!isOpen) return null;

  return (
    <div
      ref={pickerRef}
      className={`bg-white shadow-2xl border border-gray-200 ${
        isMobile ? "rounded-none" : "rounded-lg"
      }`}
    >
      {/* Headers */}
      {isMobile ? (
        <MobileHeader
          onClose={onClose}
          tripType={tripType}
          setTripType={setTripType}
          onResetDates={resetDates}
        />
      ) : (
        <DesktopHeader
          onClose={onClose}
          departDate={departDate}
          returnDate={returnDate}
          tripType={tripType}
        />
      )}

      {/* Calendar Content */}
      {isMobile ? (
        <MobileCalendarView
          currentMonth={currentMonth}
          currentYear={currentYear}
          onDateClick={handleDateClick}
          departDate={departDate}
          returnDate={returnDate}
        />
      ) : (
        <DesktopCalendarView
          currentMonth={currentMonth}
          currentYear={currentYear}
          onNavigate={navigateMonth}
          onDateClick={handleDateClick}
          departDate={departDate}
          returnDate={returnDate}
        />
      )}

      {/* Footer */}
      <DatePickerFooter onClose={onClose} />
    </div>
  );
}

export default CustomDatePicker;
