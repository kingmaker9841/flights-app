import CityGroup from "./CityGroup";
import LoadingIndicator from "./LoadingIndicator";
import NoResultsMessage from "./NoResultsMessage";
import { cn } from "../../../../utils/cn";
import { useAirportGrouping } from "../../../../hooks/useAirportGrouping";
import { SearchResultsProvider, useSearchResultsContext } from "../../../../context/SearchResultsContext";

function AirportDropdownContent({
  options = [],
  onSelect,
  onClose,
  onMultiSelect,
  isMultiSelect: parentIsMultiSelect = false,
  selectedItems: parentSelectedItems = [],
  className = "",
  isLoading = false,
  ref,
}) {
  const {
    expandedCities,
    toggleCityExpansion,
    isItemSelected,
    handleItemSelection,
  } = useSearchResultsContext();
  
  // Use parent state for multiselect
  const isMultiSelect = parentIsMultiSelect;
  const selectedItems = parentSelectedItems;
  
  const groupedOptions = useAirportGrouping(options);
  
  const handleItemClick = (item) => {
    if (isMultiSelect) {
      onMultiSelect?.(item);
    } else {
      onSelect?.(item);
      onClose?.();
    }
  };
  
  // Override isItemSelected to use parent selectedItems
  const checkIsItemSelected = (item) => {
    return selectedItems.some(selected => 
      selected.navigation?.entityId === item.navigation?.entityId
    );
  };

  return (
    <div
      className={cn(
        `bg-gray-bg border border-gray-border rounded-lg shadow-lg max-h-80 overflow-auto dropdown-enter ${className}`
      )}
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      ref={ref}
    >
      {/* Loading indicator */}
      {isLoading && options.length === 0 && <LoadingIndicator />}

      {/* Results */}
      {Object.entries(groupedOptions).map(([cityKey, { city, airports }]) => (
        <CityGroup
          key={city.navigation?.entityId || cityKey}
          cityKey={cityKey}
          city={city}
          airports={airports}
          onItemClick={handleItemClick}
          isMultiSelect={isMultiSelect}
          selectedItems={selectedItems}
          checkIsItemSelected={checkIsItemSelected}
        />
      ))}

      {/* No results message */}
      {!isLoading && options.length === 0 && <NoResultsMessage />}
    </div>
  );
}

function AirportDropdown(props) {
  return (
    <SearchResultsProvider>
      <AirportDropdownContent {...props} />
    </SearchResultsProvider>
  );
}

export default AirportDropdown;
