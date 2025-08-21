export function generateMockFlights({ origin, destination, passengers }) {
  const airlines = [
    "American Airlines",
    "Delta",
    "United",
    "Southwest",
    "JetBlue",
  ];

  const flights = [];

  for (let i = 0; i < 5; i++) {
    const basePrice = Math.floor(Math.random() * 500) + 200;
    const duration = Math.floor(Math.random() * 8) + 2;
    const stops = Math.random() > 0.6 ? 0 : Math.floor(Math.random() * 2) + 1;

    flights.push({
      id: `flight-${i}`,
      airline: airlines[Math.floor(Math.random() * airlines.length)],
      price: basePrice * passengers,
      duration: `${duration}h ${Math.floor(Math.random() * 60)}m`,
      stops: stops,
      departure: {
        time: `${Math.floor(Math.random() * 12) + 6}:${Math.floor(
          Math.random() * 60
        )
          .toString()
          .padStart(2, "0")} AM`,
        airport: origin,
      },
      arrival: {
        time: `${Math.floor(Math.random() * 12) + 6}:${Math.floor(
          Math.random() * 60
        )
          .toString()
          .padStart(2, "0")} PM`,
        airport: destination,
      },
    });
  }

  return flights;
}

export const mockAirportData = [
  {
    navigation: {
      entityId: "city_nyc",
      relevantFlightParams: { skyId: "NYC" },
      entityType: "CITY",
    },
    presentation: {
      suggestionTitle: "New York, NY",
      title: "New York",
      subtitle: "New York, United States",
    },
    airports: [
      {
        navigation: { entityId: "jfk", entityType: "AIRPORT" },
        presentation: {
          suggestionTitle: "John F. Kennedy International (JFK)",
        },
        distance: "12 miles",
      },
      {
        navigation: { entityId: "lga", entityType: "AIRPORT" },
        presentation: { suggestionTitle: "LaGuardia Airport (LGA)" },
        distance: "8 miles",
      },
    ],
  },
  {
    navigation: {
      entityId: "city_bos",
      relevantFlightParams: { skyId: "BOS" },
      entityType: "CITY",
    },
    presentation: {
      suggestionTitle: "Boston, MA",
      title: "Boston",
      subtitle: "Massachusetts, United States",
    },
    airports: [],
  },
  {
    navigation: {
      entityId: "lax",
      relevantFlightParams: { skyId: "LAX" },
      entityType: "AIRPORT",
    },
    presentation: {
      suggestionTitle: "Los Angeles International (LAX)",
      title: "Los Angeles",
      subtitle: "California, United States",
    },
    airports: [],
  },
];

export const mockFlightData = {
  data: {
    itineraries: [
      {
        id: "itinerary_1",
        legs: [
          {
            id: "leg_1",
            departure: "2025-09-01T08:00:00",
            arrival: "2025-09-01T11:00:00",
            durationInMinutes: 180,
            segments: [
              {
                marketingCarrier: { name: "Delta Airlines" },
                departure: { time: "2025-09-01T08:00:00" },
                arrival: { time: "2025-09-01T11:00:00" },
              },
            ],
          },
        ],
        price: { raw: 250.0 },
      },
      {
        id: "itinerary_2",
        legs: [
          {
            id: "leg_2",
            departure: "2025-09-01T09:00:00",
            arrival: "2025-09-01T13:00:00",
            durationInMinutes: 240,
            segments: [
              {
                marketingCarrier: { name: "United Airlines" },
                departure: { time: "2025-09-01T09:00:00" },
                arrival: { time: "2025-09-01T11:00:00" },
              },
              {
                marketingCarrier: { name: "United Airlines" },
                departure: { time: "2025-09-01T11:30:00" },
                arrival: { time: "2025-09-01T13:00:00" },
              },
            ],
          },
        ],
        price: { raw: 300.0 },
      },
    ],
    legs: {
      leg_1: {
        departure: "2025-09-01T08:00:00",
        arrival: "2025-09-01T11:00:00",
        durationInMinutes: 180,
        segments: [
          {
            marketingCarrier: { name: "Delta Airlines" },
            departure: { time: "2025-09-01T08:00:00" },
            arrival: { time: "2025-09-01T11:00:00" },
          },
        ],
      },
      leg_2: {
        departure: "2025-09-01T09:00:00",
        arrival: "2025-09-01T13:00:00",
        durationInMinutes: 240,
        segments: [
          {
            marketingCarrier: { name: "United Airlines" },
            departure: { time: "2025-09-01T09:00:00" },
            arrival: { time: "2025-09-01T11:00:00" },
          },
          {
            marketingCarrier: { name: "United Airlines" },
            departure: { time: "2025-09-01T11:30:00" },
            arrival: { time: "2025-09-01T13:00:00" },
          },
        ],
      },
    },
  },
};
