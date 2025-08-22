import { useRef } from "react";

export const useFocusHandlers = (
  cachedOptions,
  setOptions,
  setShowOptions,
  setIsFocused
) => {
  const inputRef = useRef(null);

  const handleFocus = async () => {
    setIsFocused(true);
    setShowOptions(true);
    if (cachedOptions && cachedOptions.length > 0) {
      setOptions(cachedOptions);
    }
  };

  return { handleFocus, inputRef };
};
