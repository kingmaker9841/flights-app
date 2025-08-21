export const useMultiSelectHandlers = () => {
  const createMultiSelectHandler =
    (selectedItems, setSelectedItems, updateInputDisplay) => (item) => {
      const isSelected = selectedItems.some(
        (s) => s.navigation?.entityId === item.navigation?.entityId
      );

      if (isSelected) {
        setSelectedItems((prev) =>
          prev.filter(
            (s) => s.navigation?.entityId !== item.navigation?.entityId
          )
        );
      } else {
        setSelectedItems((prev) => [...prev, item]);
      }
      updateInputDisplay();
    };

  const createInputDisplayUpdater = (selectedItems, setInput) => () => {
    if (selectedItems.length === 0) {
      setInput("");
    } else if (selectedItems.length === 1) {
      setInput(
        selectedItems[0].presentation?.title ||
          selectedItems[0].presentation?.suggestionTitle ||
          ""
      );
    } else {
      setInput(`${selectedItems.length} airports selected`);
    }
  };

  return {
    createMultiSelectHandler,
    createInputDisplayUpdater,
  };
};
