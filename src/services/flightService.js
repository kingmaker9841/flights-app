// import { pollFlightSearch, searchFlightsAPI } from "../api/flights";

// import { generateMockFlights } from "../utils/mockData";

import { mockFlightData } from "../utils/mockData";
import { normalizeFlights } from "../transformers/flightTransformer";
import { resolveAirportIdentifiersService } from "./airportService";

// import { rapidApiConfig } from "../config/constants";

// const { apiKey, baseUrl, host } = rapidApiConfig;

export async function searchFlights({
  origin,
  destination,
  //   departDate,
  //   returnDate,
  //   passengers,
  //   cabin,
}) {
  console.log("Using mock flight data for:", { origin, destination });
  const [originResolved, destResolved] = await Promise.all([
    resolveAirportIdentifiersService(origin),
    resolveAirportIdentifiersService(destination),
  ]);

  return normalizeFlights(
    mockFlightData,
    originResolved.display,
    destResolved.display
  );
  //   if (!apiKey || !baseUrl || !host) {
  //     return generateMockFlights({
  //       origin,
  //       destination,
  //       departDate,
  //       returnDate,
  //       passengers,
  //       cabin,
  //     });
  //   }

  //   const [originResolved, destResolved] = await Promise.all([
  //     resolveAirportIdentifiersService(origin),
  //     resolveAirportIdentifiersService(destination),
  //   ]);

  //   const data = await searchFlightsAPI({
  //     originSkyId: originResolved.skyId,
  //     destinationSkyId: destResolved.skyId,
  //     originEntityId: originResolved.entityId,
  //     destinationEntityId: destResolved.entityId,
  //     departDate,
  //     returnDate,
  //     passengers,
  //     cabin,
  //   });

  //   if (!Array.isArray(data?.data?.itineraries) && data?.searchId) {
  //     try {
  //       const pollData = await pollFlightSearch(data.searchId);
  //       return normalizeFlights(
  //         pollData,
  //         originResolved.display,
  //         destResolved.display
  //       );
  //     } catch (error) {
  //       console.warn("searchIncomplete polling failed", error);
  //     }
  //   }

  //   return normalizeFlights(data, originResolved.display, destResolved.display);
}
