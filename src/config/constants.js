// RapidAPI Configuration
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

export const amadeusConfig = {
  baseUrl: import.meta.env.VITE_AMADEUS_BASE_URL,
  host: import.meta.env.VITE_AMADEUS_HOST,
  apiKey: import.meta.env.VITE_AMADEUS_API_KEY,
  secret: import.meta.env.VITE_AMADEUS_API_SECRET,
  grantType: "client_credentials",
  accessTokenUrl: "/v1/security/oauth2/token",
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

// Trip Types
export const TRIP_TYPES = {
  ONE_WAY: "oneway",
  ROUND_TRIP: "roundtrip",
  MULTI_CITY: "multicity",
};

// Cabin Classes
export const CABIN_CLASSES = {
  ECONOMY: "Economy",
  PREMIUM_ECONOMY: "Premium Economy",
  BUSINESS: "Business",
  FIRST: "First",
};

// Origin or Destination
export const ORIGIN_OR_DESTINATION = {
  ORIGIN: "origin",
  DESTINATION: "destination",
};

// Navigation Items
export const NAVIGATION_ITEMS = [
  {
    to: "/travel",
    label: "Travel",
    icon: "MapPinIcon",
    isActive: false,
  },
  {
    to: "/explore",
    label: "Explore",
    icon: "ExploreIcon",
    isActive: false,
  },
  {
    to: "/",
    label: "Flights",
    icon: "PlaneIcon",
    isActive: true,
  },
  {
    to: "/hotels",
    label: "Hotels",
    icon: "HotelIcon",
    isActive: false,
  },
  {
    to: "/vacation-rentals",
    label: "Holiday rentals",
    icon: "HouseIcon",
    isActive: false,
  },
];

// Placeholders
export const PLACEHOLDERS = {
  ORIGIN: "Where from?",
  DESTINATION: "Where to?",
  DATE: "Select date",
  GETTING_LOCATION: "Getting your location...",
  WHERE_ELSE: "Where else?",
};
