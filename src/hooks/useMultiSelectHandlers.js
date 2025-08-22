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
    // Don't update input display when items are selected in multi-select mode
    // The chips will show the selected items instead
    if (selectedItems.length === 0) {
      setInput("");
    }
  };

  return {
    createMultiSelectHandler,
    createInputDisplayUpdater,
  };
};
