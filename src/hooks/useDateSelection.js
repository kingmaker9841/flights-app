import { useEffect, useRef, useState } from "react";

import { formatDateString } from "../utils/date-time";

export const useDateSelection = ({
  tripType,
  departDate,
  setDepartDate,
  returnDate,
  setReturnDate,
  onClose,
  isOpen,
}) => {
  const [selectingReturn, setSelectingReturn] = useState(false);
  const justClickedDate = useRef(false);

  // Reset selecting state when picker opens
  useEffect(() => {
    if (isOpen) {
      if (tripType === "roundtrip" && departDate && !returnDate) {
        setSelectingReturn(true);
      } else {
        setSelectingReturn(false);
      }
    }
  }, [isOpen, tripType, departDate, returnDate]);

  const handleDateClick = (day, month, year, event) => {
    event.stopPropagation();
    justClickedDate.current = true;

    const dateStr = formatDateString(year, month, day);

    if (tripType === "oneway") {
      setDepartDate(dateStr);
      onClose();
      return;
    }

    // Round trip logic
    if (!departDate || (departDate && returnDate)) {
      // First selection or reset
      setDepartDate(dateStr);
      setReturnDate("");
      setSelectingReturn(true);
    } else if (selectingReturn) {
      // Second selection
      if (dateStr >= departDate) {
        setReturnDate(dateStr);
        setSelectingReturn(false);
        onClose();
      } else {
        // If selected date is before departure, make it new departure
        setDepartDate(dateStr);
        setReturnDate("");
      }
    }
  };

  const resetDates = () => {
    setDepartDate("");
    setReturnDate("");
  };

  return {
    selectingReturn,
    justClickedDate,
    handleDateClick,
    resetDates,
  };
};
