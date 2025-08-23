import AirportItem from "./AirportItem";
import CityItem from "./CityItem";
import { useSearchResultsContext } from "../../../../context/SearchResultsContext";

const CityGroup = ({
  cityKey,
  city,
  airports,
  onItemClick,
  isMultiSelect,
  selectedItems,
  checkIsItemSelected,
}) => {
  const {
    expandedCities,
    toggleCityExpansion,
  } = useSearchResultsContext();
  
  const cityId = city.navigation?.entityId || cityKey;
  const isExpanded = expandedCities.has(cityId);
  const hasAirports = airports.length > 0;

  return (
    <div className="border-b border-gray-border last:border-b-0">
      <CityItem
        city={city}
        isMultiSelect={isMultiSelect}
        isSelected={checkIsItemSelected(city)}
        hasAirports={hasAirports}
        isExpanded={isExpanded}
        onItemClick={onItemClick}
        onToggleExpansion={() => toggleCityExpansion(cityId)}
      />

      {hasAirports && isExpanded && (
        <div className="bg-gray-bg">
          {airports.map((airport) => (
            <AirportItem
              key={
                airport.navigation?.entityId ||
                airport.presentation?.suggestionTitle
              }
              airport={airport}
              isMultiSelect={isMultiSelect}
              isSelected={checkIsItemSelected(airport)}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CityGroup;
