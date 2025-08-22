import { useCallback, useEffect } from "react";

export const useClickOutside = (refs, onClose, isOpen) => {
  const handleClickOutside = useCallback(
    (event) => {
      if (!isOpen) return;

      // Don't close if clicking on interactive elements within dropdown
      const interactiveElements = [
        'input[type="checkbox"]',
        'button[title="Multi-select mode"]',
        'button[type="button"]',
        ".dropdown-enter",
        ".airport-item",
        ".checkbox-input",
        ".multi-select-toggle",
      ];

      if (
        interactiveElements.some((selector) => event.target.closest(selector))
      ) {
        return;
      }

      // Don't close if clicking inside any of the referenced elements
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );

      if (isOutside) {
        onClose(event);
      }
    },
    [onClose, refs, isOpen]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside, true);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside, true);
    }
  }, [refs, onClose, isOpen, handleClickOutside]);
};
