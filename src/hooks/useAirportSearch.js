import { useDebounce } from "./useDebounce";
import { useEffect } from "react";

export const useAirportSearch = (
  input,
  selected,
  setOptions,
  setShowOptions,
  refetch,
  setSelected,
  isFocused = true
) => {
  const debouncedSearch = useDebounce(async () => {
    try {
      const { data } = await refetch();
      if (data) {
        setOptions(data);
        setShowOptions(true);
      } else {
        setOptions([]);
      }
    } catch (e) {
      console.error("Airport search error:", e);
      setOptions([]);
    }
  }, 250);

  useEffect(() => {
    // Don't search if no input or input is not focused
    if (!input || !input.trim() || !isFocused) {
      return;
    }

    // Don't search if input matches selected item
    if (
      selected &&
      (selected.presentation?.title === input ||
        selected.presentation?.suggestionTitle === input)
    ) {
      return;
    }

    // Clear selected if input doesn't match and start searching
    if (
      selected &&
      selected.presentation?.title !== input &&
      selected.presentation?.suggestionTitle !== input
    ) {
      setSelected(null);
    }

    debouncedSearch();
  }, [input, selected, debouncedSearch, setSelected, isFocused]);
};
