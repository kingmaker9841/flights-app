import { mockAirportData } from "../utils/mockData";
import { rapidApiConfig } from "../config/constants";

const { baseUrl, searchAirport, apiKey, host } = rapidApiConfig;

export async function searchAirports(query) {
  console.log("Using mock airport data for query:", query);
  return mockAirportData.filter((item) =>
    item.presentation.suggestionTitle
      .toLowerCase()
      .includes(query.toLowerCase())
  );
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
  console.log("Using mock nearby airport data for lat:", lat, "lng:", lng);
  return { current: mockAirportData[0] };
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
