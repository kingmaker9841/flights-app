import { createContext, useContext, useState } from "react";

const SearchResultsContext = createContext();

export const useSearchResultsContext = () => {
  const context = useContext(SearchResultsContext);
  if (!context) {
    throw new Error("useSearchResultsContext must be used within SearchResultsProvider");
  }
  return context;
};

export const SearchResultsProvider = ({ children }) => {
  const [expandedCities, setExpandedCities] = useState(new Set());
  const [selectedItems, setSelectedItems] = useState([]);
  const [isMultiSelect, setIsMultiSelect] = useState(false);

  const toggleCityExpansion = (cityKey) => {
    setExpandedCities(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cityKey)) {
        newSet.delete(cityKey);
      } else {
        newSet.add(cityKey);
      }
      return newSet;
    });
  };

  const isItemSelected = (item) => {
    return selectedItems.some(selected => 
      selected.navigation?.entityId === item.navigation?.entityId
    );
  };

  const handleItemSelection = (item, onSelect, onClose, onMultiSelect) => {
    if (isMultiSelect) {
      onMultiSelect?.(item);
    } else {
      onSelect?.(item);
      onClose?.();
    }
  };

  const value = {
    expandedCities,
    toggleCityExpansion,
    selectedItems,
    setSelectedItems,
    isMultiSelect,
    setIsMultiSelect,
    isItemSelected,
    handleItemSelection,
  };

  return (
    <SearchResultsContext.Provider value={value}>
      {children}
    </SearchResultsContext.Provider>
  );
};