export const rapidApiConfig = {
  baseUrl: import.meta.env.VITE_RAPID_API_BASE_URL,
  host: import.meta.env.VITE_RAPID_API_HOST,
  apiKey: import.meta.env.VITE_RAPID_API_KEY,
  getNearByAirports: "/api/v1/flights/getNearByAirports",
  searchAirport: "/api/v1/flights/searchAirport",
  searchFlightsV2: "/api/v2/flights/searchFlights",
  searchFlightsV1: "/api/v1/flights/searchFlights",
  searchIncomplete: "/api/v2/flights/searchIncomplete",
  getFlightDetails: "/api/v1/flights/getFlightDetails",
  getPriceCalendar: "/api/v1/flights/getPriceCalendar",
  searchFlightsMultiStops: "/api/v1/flights/searchFlightsMultiStops",
  searchFlightsWebComplete: "/api/v1/flights/searchFlightEverywhereDetails",
};

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
