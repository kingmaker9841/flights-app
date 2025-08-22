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
      {
        navigation: { entityId: "ewr", entityType: "AIRPORT" },
        presentation: { suggestionTitle: "Newark Liberty International (EWR)" },
        distance: "16 miles",
      },
    ],
  },
  {
    navigation: {
      entityId: "city_la",
      relevantFlightParams: { skyId: "LAX" },
      entityType: "CITY",
    },
    presentation: {
      suggestionTitle: "Los Angeles, CA",
      title: "Los Angeles",
      subtitle: "California, United States",
    },
    airports: [
      {
        navigation: { entityId: "lax", entityType: "AIRPORT" },
        presentation: {
          suggestionTitle: "Los Angeles International (LAX)",
        },
        distance: "0 miles",
      },
      {
        navigation: { entityId: "bur", entityType: "AIRPORT" },
        presentation: { suggestionTitle: "Hollywood Burbank Airport (BUR)" },
        distance: "18 miles",
      },
      {
        navigation: { entityId: "lgb", entityType: "AIRPORT" },
        presentation: { suggestionTitle: "Long Beach Airport (LGB)" },
        distance: "22 miles",
      },
    ],
  },
  {
    navigation: {
      entityId: "city_chi",
      relevantFlightParams: { skyId: "CHI" },
      entityType: "CITY",
    },
    presentation: {
      suggestionTitle: "Chicago, IL",
      title: "Chicago",
      subtitle: "Illinois, United States",
    },
    airports: [
      {
        navigation: { entityId: "ord", entityType: "AIRPORT" },
        presentation: {
          suggestionTitle: "O'Hare International Airport (ORD)",
        },
        distance: "17 miles",
      },
      {
        navigation: { entityId: "mdw", entityType: "AIRPORT" },
        presentation: { suggestionTitle: "Midway International Airport (MDW)" },
        distance: "10 miles",
      },
    ],
  },
  {
    navigation: {
      entityId: "city_mia",
      relevantFlightParams: { skyId: "MIA" },
      entityType: "CITY",
    },
    presentation: {
      suggestionTitle: "Miami, FL",
      title: "Miami",
      subtitle: "Florida, United States",
    },
    airports: [
      {
        navigation: { entityId: "mia", entityType: "AIRPORT" },
        presentation: {
          suggestionTitle: "Miami International Airport (MIA)",
        },
        distance: "0 miles",
      },
      {
        navigation: { entityId: "fll", entityType: "AIRPORT" },
        presentation: { suggestionTitle: "Fort Lauderdale-Hollywood International (FLL)" },
        distance: "21 miles",
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
    airports: [
      {
        navigation: { entityId: "bos", entityType: "AIRPORT" },
        presentation: {
          suggestionTitle: "Logan International Airport (BOS)",
        },
        distance: "0 miles",
      },
    ],
  },
  {
    navigation: {
      entityId: "city_sea",
      relevantFlightParams: { skyId: "SEA" },
      entityType: "CITY",
    },
    presentation: {
      suggestionTitle: "Seattle, WA",
      title: "Seattle",
      subtitle: "Washington, United States",
    },
    airports: [
      {
        navigation: { entityId: "sea", entityType: "AIRPORT" },
        presentation: {
          suggestionTitle: "Seattle-Tacoma International Airport (SEA)",
        },
        distance: "0 miles",
      },
    ],
  },
  {
    navigation: {
      entityId: "city_sf",
      relevantFlightParams: { skyId: "SFO" },
      entityType: "CITY",
    },
    presentation: {
      suggestionTitle: "San Francisco, CA",
      title: "San Francisco",
      subtitle: "California, United States",
    },
    airports: [
      {
        navigation: { entityId: "sfo", entityType: "AIRPORT" },
        presentation: {
          suggestionTitle: "San Francisco International Airport (SFO)",
        },
        distance: "0 miles",
      },
      {
        navigation: { entityId: "sjc", entityType: "AIRPORT" },
        presentation: { suggestionTitle: "Norman Y. Mineta San José International Airport (SJC)" },
        distance: "45 miles",
      },
      {
        navigation: { entityId: "oak", entityType: "AIRPORT" },
        presentation: { suggestionTitle: "Oakland International Airport (OAK)" },
        distance: "11 miles",
      },
    ],
  },
  {
    navigation: {
      entityId: "city_vegas",
      relevantFlightParams: { skyId: "LAS" },
      entityType: "CITY",
    },
    presentation: {
      suggestionTitle: "Las Vegas, NV",
      title: "Las Vegas",
      subtitle: "Nevada, United States",
    },
    airports: [
      {
        navigation: { entityId: "las", entityType: "AIRPORT" },
        presentation: {
          suggestionTitle: "Harry Reid International Airport (LAS)",
        },
        distance: "0 miles",
      },
    ],
  },
  {
    navigation: {
      entityId: "city_denver",
      relevantFlightParams: { skyId: "DEN" },
      entityType: "CITY",
    },
    presentation: {
      suggestionTitle: "Denver, CO",
      title: "Denver",
      subtitle: "Colorado, United States",
    },
    airports: [
      {
        navigation: { entityId: "den", entityType: "AIRPORT" },
        presentation: {
          suggestionTitle: "Denver International Airport (DEN)",
        },
        distance: "0 miles",
      },
    ],
  },
  {
    navigation: {
      entityId: "city_atlanta",
      relevantFlightParams: { skyId: "ATL" },
      entityType: "CITY",
    },
    presentation: {
      suggestionTitle: "Atlanta, GA",
      title: "Atlanta",
      subtitle: "Georgia, United States",
    },
    airports: [
      {
        navigation: { entityId: "atl", entityType: "AIRPORT" },
        presentation: {
          suggestionTitle: "Hartsfield-Jackson Atlanta International Airport (ATL)",
        },
        distance: "0 miles",
      },
    ],
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
