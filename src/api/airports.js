import {
  mockNearbyAirportsResponse,
  mockSearchAirportsResponse,
} from "./mockAirports";

import { rapidApiConfig } from "../config/constants";

// Set to true to use mock data for testing
const USE_MOCK_DATA = false;

const { baseUrl, searchAirport, apiKey, host } = rapidApiConfig;

export async function searchAirports(query) {
  if (USE_MOCK_DATA) {
    console.log("🔄 Mock: Searching airports for query:", query);
    await new Promise((resolve) => setTimeout(resolve, 800));
    const results = mockSearchAirportsResponse.filter(
      (item) =>
        item.presentation.suggestionTitle
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        item.presentation.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log("✅ Mock: Found", results.length, "results for:", query);
    return results;
  }

  const url = new URL(searchAirport, baseUrl);
  url.searchParams.append("query", query);
  url.searchParams.append("locale", "en-US");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": host,
    },
  });

  if (!response.ok) throw new Error("Airport search failed");
  const data = await response.json();
  return Array.isArray(data?.data) ? data.data : [];
}

export async function getNearByAirports(lat, lng) {
  if (USE_MOCK_DATA) {
    console.log(
      `🔄 Mock: Getting nearby airports for lat: ${lat}, lng: ${lng}`
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("✅ Mock: Returning nearby airports data");
    return mockNearbyAirportsResponse.data;
  }

  const url = new URL(rapidApiConfig.getNearByAirports, baseUrl);
  url.searchParams.set("lat", String(lat));
  url.searchParams.set("lng", String(lng));
  url.searchParams.set("locale", "en-US");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": host,
    },
  });

  if (!response.ok) throw new Error("Nearby airports failed");
  const data = await response.json();
  return data?.data || {};
}
