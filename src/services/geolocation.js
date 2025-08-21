import { formatAirportForInput } from "../utils/airportUtils";
import { getNearByAirports } from "../api/airports";

/**
 * Get user's current geolocation
 * @returns {Promise<{lat: number, lng: number}>}
 */
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser"));
      return;
    }

    const options = {
      enableHighAccuracy: false, // Uses less accurate but faster location
      timeout: 5000,
      maximumAge: 300000,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        let errorMessage = "Unable to get location";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied by user";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out";
            break;
        }
        reject(new Error(errorMessage));
      },
      options
    );
  });
};

/**
 * Get nearest airport based on user's location
 * @returns {Promise<{airport: object, location: {lat: number, lng: number}} | null>}
 */
export const getNearestAirport = async () => {
  try {
    const location = await getCurrentLocation();

    const nearbyData = await getNearByAirports(location.lat, location.lng);

    if (nearbyData?.current) {
      return {
        airport: formatAirportForInput(nearbyData.current),
        location,
      };
    }

    return null;
  } catch (error) {
    console.error("Error getting nearest airport:", error);

    try {
      console.log("Trying fallback location (Kathmandu)...");
      const fallbackLocation = { lat: 27.7172, lng: 85.324 }; // Kathmandu coordinates
      const nearbyData = await getNearByAirports(
        fallbackLocation.lat,
        fallbackLocation.lng
      );

      if (nearbyData?.current) {
        return {
          airport: formatAirportForInput(nearbyData.current),
          location: fallbackLocation,
        };
      }
    } catch (fallbackError) {
      console.error("Fallback location also failed:", fallbackError);
    }

    throw error;
  }
};
