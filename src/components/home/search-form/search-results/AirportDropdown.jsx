import CityGroup from "./CityGroup";
import LoadingIndicator from "./LoadingIndicator";
import NoResultsMessage from "./NoResultsMessage";
import { cn } from "../../../../utils/cn";
import { useAirportGrouping } from "../../../../hooks/useAirportGrouping";
import { useExpandedCities } from "../../../../hooks/useExpandedCities";
import { useItemSelection } from "../../../../hooks/useItemSelection";

function AirportDropdown({
  options = [],
  onSelect,
  onClose,
  isMultiSelect = true,
  selectedItems = [],
  onMultiSelect,
  className = "",
  isLoading = false,
  ref,
}) {
  const { expandedCities, toggleCityExpansion } = useExpandedCities();
  const groupedOptions = useAirportGrouping(options);
  const { handleItemClick, isItemSelected } = useItemSelection(
    isMultiSelect,
    selectedItems,
    onSelect,
    onClose,
    onMultiSelect
  );

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
          isMultiSelect={isMultiSelect}
          selectedItems={selectedItems}
          expandedCities={expandedCities}
          onItemClick={handleItemClick}
          onToggleExpansion={toggleCityExpansion}
          isItemSelected={isItemSelected}
        />
      ))}

      {/* No results message */}
      {!isLoading && options.length === 0 && <NoResultsMessage />}
    </div>
  );
}

export default AirportDropdown;
