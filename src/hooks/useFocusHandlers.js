import { useRef } from "react";

export const useFocusHandlers = (
  cachedOptions,
  setOptions,
  setShowOptions,
  setIsFocused
) => {
  const inputRef = useRef(null);

  const handleFocus = async (currentOptions = []) => {
    setIsFocused(true);
    setShowOptions(true);
    // Only set cached options if there are no current options (nearby airports)
    if (cachedOptions && cachedOptions.length > 0 && currentOptions.length === 0) {
      setOptions(cachedOptions);
    }
  };

  return { handleFocus, inputRef };
};
