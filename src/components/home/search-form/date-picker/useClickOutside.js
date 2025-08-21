import { useCallback, useEffect } from "react";

export const useClickOutside = (ref, onClose, justClickedDate, isOpen) => {
  const handleClickOutside = useCallback(
    (event) => {
      // Prevent closing if we just clicked a date
      if (justClickedDate.current) {
        justClickedDate.current = false;
        return;
      }

      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose, ref, justClickedDate]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);
};
