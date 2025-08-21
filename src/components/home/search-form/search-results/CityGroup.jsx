import AirportItem from "./AirportItem";
import CityItem from "./CityItem";

const CityGroup = ({
  cityKey,
  city,
  airports,
  isMultiSelect,
  //   selectedItems,
  expandedCities,
  onItemClick,
  onToggleExpansion,
  isItemSelected,
}) => {
  const cityId = city.navigation?.entityId || cityKey;
  const isExpanded = expandedCities.has(cityId);
  const hasAirports = airports.length > 0;

  return (
    <div className="border-b border-gray-border last:border-b-0">
      <CityItem
        city={city}
        isMultiSelect={isMultiSelect}
        isSelected={isItemSelected(city)}
        hasAirports={hasAirports}
        isExpanded={isExpanded}
        onItemClick={onItemClick}
        onToggleExpansion={() => onToggleExpansion(cityId)}
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
              isSelected={isItemSelected(airport)}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CityGroup;
