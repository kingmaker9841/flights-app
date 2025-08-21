import { useCallback, useEffect } from "react";

export const useClickOutside = (refs, onClose, isOpen) => {
  const handleClickOutside = useCallback(
    (event) => {
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );
      if (isOutside) {
        console.log("Outside click, closing");
        onClose();
      }
    },
    [onClose, refs]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);
};
