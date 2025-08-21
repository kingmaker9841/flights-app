import { formatAirportForInput } from "../utils/airportUtils";
import { getNearestAirport } from "../services/geolocation";
import { useState } from "react";

export const useNearestAirport = (originInput, originSelected) => {
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  const loadNearestAirport = async (setOriginSelected, setOriginInput) => {
    if (originInput || originSelected) return;

    setIsLoadingLocation(true);
    setLocationError(null);

    try {
      const result = await getNearestAirport();
      if (result?.airport) {
        const formattedAirport = formatAirportForInput(result.airport);
        if (formattedAirport) {
          setOriginSelected(formattedAirport);
          setOriginInput(formattedAirport.presentation.title);
        }
      }
    } catch (error) {
      console.warn("Could not get nearest airport:", error.message);
      setLocationError(error.message);
    } finally {
      setIsLoadingLocation(false);
    }
  };

  return { isLoadingLocation, locationError, loadNearestAirport };
};
