import { rapidApiConfig } from "../config/constants";

const { baseUrl, searchFlightsV2, searchIncomplete, apiKey, host } =
  rapidApiConfig;

export async function searchFlightsAPI({
  originSkyId,
  destinationSkyId,
  originEntityId,
  destinationEntityId,
  departDate,
  returnDate,
  passengers,
  cabin,
}) {
  const url = new URL(searchFlightsV2, baseUrl);
  const cabinParam = cabin?.toLowerCase().replace(/\s+/g, "") || "economy";

  const queryParams = {
    originSkyId,
    destinationSkyId,
    originEntityId,
    destinationEntityId,
    date: departDate,
    fromDate: departDate,
    returnDate: returnDate || "",
    toDate: returnDate || "",
    adults: String(passengers || 1),
    children: "0",
    cabinClass: cabinParam,
    currency: "USD",
    market: "US",
    countryCode: "US",
    locale: "en-US",
  };

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": host,
    },
  });

  if (!response.ok) throw new Error("Flight search error");
  return response.json();
}

export async function pollFlightSearch(searchId) {
  const pollUrl = new URL(searchIncomplete, baseUrl);
  pollUrl.searchParams.set("searchId", searchId);

  const response = await fetch(pollUrl, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": host,
    },
  });

  if (!response.ok) throw new Error("Flight polling failed");
  return response.json();
}
