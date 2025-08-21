export const useItemSelection = (
  isMultiSelect,
  selectedItems,
  onSelect,
  onClose,
  onMultiSelect
) => {
  const handleItemClick = (item) => {
    if (isMultiSelect) {
      onMultiSelect?.(item);
    } else {
      onSelect?.(item);
      onClose?.();
    }
  };

  const isItemSelected = (item) => {
    if (!isMultiSelect) return false;
    return selectedItems.some(
      (selected) => selected.navigation?.entityId === item.navigation?.entityId
    );
  };

  return {
    handleItemClick,
    isItemSelected,
  };
};
