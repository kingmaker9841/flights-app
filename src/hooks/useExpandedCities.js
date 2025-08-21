import { useState } from "react";

export const useExpandedCities = () => {
  const [expandedCities, setExpandedCities] = useState(new Set());

  const toggleCityExpansion = (cityId) => {
    const newExpanded = new Set(expandedCities);
    if (newExpanded.has(cityId)) {
      newExpanded.delete(cityId);
    } else {
      newExpanded.add(cityId);
    }
    setExpandedCities(newExpanded);
  };

  const isCityExpanded = (cityId) => expandedCities.has(cityId);

  return {
    expandedCities,
    toggleCityExpansion,
    isCityExpanded,
  };
};
