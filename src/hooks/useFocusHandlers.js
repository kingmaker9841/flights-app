import { useClickOutside } from "./useClickOutside";
import { useRef } from "react";

export const useFocusHandlers = (
  cachedOptions,
  setOptions,
  setShowOptions,
  setIsFocused,
  input,
  refetch
) => {
  const inputRef = useRef(null);

  const handleFocus = async () => {
    setIsFocused(true);
    setShowOptions(true);
    if (cachedOptions && cachedOptions.length > 0) {
      setOptions(cachedOptions);
    } else if (input) {
      setOptions([]);
      try {
        const { data } = await refetch();
        if (data) setOptions(data);
      } catch (e) {
        console.error("Refetch error on focus:", e);
        setOptions([]);
      }
    }
  };

  useClickOutside(
    [inputRef],
    () => {
      setIsFocused(false);
      setShowOptions(false);
    },
    true
  );

  return { handleFocus, inputRef };
};
