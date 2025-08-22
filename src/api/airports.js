import { rapidApiConfig } from "../config/constants";

const { baseUrl, searchAirport, apiKey, host } = rapidApiConfig;

export async function searchAirports(query) {
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
