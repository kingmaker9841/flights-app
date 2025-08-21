import { useDebounce } from "./useDebounce";
import { useEffect } from "react";

// export const useAirportSearch = (
//   input,
//   selected,
//   setOptions,
//   setShowOptions,
//   refetch
// ) => {
//   const debouncedSearch = useDebounce(async () => {
//     try {
//       const { data } = await refetch();
//       if (data) {
//         setOptions(data);
//         setShowOptions(true);
//       }
//     } catch (e) {
//       console.error("Airport search error:", e);
//     }
//   }, 250);

//   useEffect(() => {
//     if (!input || selected?.presentation?.suggestionTitle === input) return;
//     debouncedSearch();
//   }, [input, selected, setOptions, setShowOptions, refetch, debouncedSearch]);
// };

export const useAirportSearch = (
  input,
  selected,
  setOptions,
  setShowOptions,
  refetch,
  setSelected
) => {
  const debouncedSearch = useDebounce(async () => {
    try {
      const { data } = await refetch();
      console.log("Refetch completed, data:", data);
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
    if (input && selected && selected.presentation?.title !== input) {
      setSelected(null);
    }
    if (!input || selected?.presentation?.title === input) return;
    console.log("useAirportSearch triggered for input:", input);
    debouncedSearch();
  }, [input, selected, debouncedSearch, setSelected]);
};
