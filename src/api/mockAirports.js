// Mock API responses for testing
export const mockNearbyAirportsResponse = {
  "status": true,
  "timestamp": 1755844521586,
  "data": {
    "current": {
      "skyId": "KTM",
      "entityId": "95673458",
      "presentation": {
        "title": "Kathmandu",
        "suggestionTitle": "Kathmandu (KTM)",
        "subtitle": "Nepal"
      },
      "navigation": {
        "entityId": "95673458",
        "entityType": "AIRPORT",
        "localizedName": "Kathmandu",
        "relevantFlightParams": {
          "skyId": "KTM",
          "entityId": "95673458",
          "flightPlaceType": "AIRPORT",
          "localizedName": "Kathmandu"
        }
      }
    },
    "nearby": [
      {
        "presentation": {
          "title": "Indira Gandhi International",
          "suggestionTitle": "Indira Gandhi International (DEL)",
          "subtitle": "India"
        },
        "navigation": {
          "entityId": "95673498",
          "entityType": "AIRPORT",
          "localizedName": "Indira Gandhi International",
          "relevantFlightParams": {
            "skyId": "DEL",
            "entityId": "95673498",
            "flightPlaceType": "AIRPORT",
            "localizedName": "Indira Gandhi International"
          }
        }
      },
      {
        "presentation": {
          "title": "Mumbai",
          "suggestionTitle": "Mumbai (BOM)",
          "subtitle": "India"
        },
        "navigation": {
          "entityId": "95673320",
          "entityType": "AIRPORT",
          "localizedName": "Mumbai",
          "relevantFlightParams": {
            "skyId": "BOM",
            "entityId": "95673320",
            "flightPlaceType": "AIRPORT",
            "localizedName": "Mumbai"
          }
        }
      },
      {
        "presentation": {
          "title": "Patna",
          "suggestionTitle": "Patna (PAT)",
          "subtitle": "India"
        },
        "navigation": {
          "entityId": "95673441",
          "entityType": "AIRPORT",
          "localizedName": "Patna",
          "relevantFlightParams": {
            "skyId": "PAT",
            "entityId": "95673441",
            "flightPlaceType": "AIRPORT",
            "localizedName": "Patna"
          }
        }
      },
      {
        "presentation": {
          "title": "Kolkata",
          "suggestionTitle": "Kolkata (CCU)",
          "subtitle": "India"
        },
        "navigation": {
          "entityId": "128668366",
          "entityType": "AIRPORT",
          "localizedName": "Kolkata",
          "relevantFlightParams": {
            "skyId": "CCU",
            "entityId": "128668366",
            "flightPlaceType": "AIRPORT",
            "localizedName": "Kolkata"
          }
        }
      },
      {
        "presentation": {
          "title": "Bengaluru",
          "suggestionTitle": "Bengaluru (BLR)",
          "subtitle": "India"
        },
        "navigation": {
          "entityId": "95673351",
          "entityType": "AIRPORT",
          "localizedName": "Bengaluru",
          "relevantFlightParams": {
            "skyId": "BLR",
            "entityId": "95673351",
            "flightPlaceType": "AIRPORT",
            "localizedName": "Bengaluru"
          }
        }
      }
    ],
    "recent": []
  }
};

export const mockSearchAirportsResponse = [
  {
    "navigation": {
      "entityId": "city_ktm",
      "relevantFlightParams": { "skyId": "KTM" },
      "entityType": "CITY"
    },
    "presentation": {
      "suggestionTitle": "Kathmandu, Nepal",
      "title": "Kathmandu",
      "subtitle": "Nepal"
    }
  },
  {
    "navigation": {
      "entityId": "city_nyc",
      "relevantFlightParams": { "skyId": "NYC" },
      "entityType": "CITY"
    },
    "presentation": {
      "suggestionTitle": "New York, NY",
      "title": "New York",
      "subtitle": "New York, United States"
    }
  },
  {
    "navigation": {
      "entityId": "city_london",
      "relevantFlightParams": { "skyId": "LON" },
      "entityType": "CITY"
    },
    "presentation": {
      "suggestionTitle": "London, UK",
      "title": "London",
      "subtitle": "United Kingdom"
    }
  },
  {
    "navigation": {
      "entityId": "city_paris",
      "relevantFlightParams": { "skyId": "PAR" },
      "entityType": "CITY"
    },
    "presentation": {
      "suggestionTitle": "Paris, France",
      "title": "Paris",
      "subtitle": "France"
    }
  },
  {
    "navigation": {
      "entityId": "country_france",
      "relevantFlightParams": { "skyId": "FR" },
      "entityType": "COUNTRY"
    },
    "presentation": {
      "suggestionTitle": "France",
      "title": "France",
      "subtitle": "Country"
    }
  },
  {
    "navigation": {
      "entityId": "country_india",
      "relevantFlightParams": { "skyId": "IN" },
      "entityType": "COUNTRY"
    },
    "presentation": {
      "suggestionTitle": "India",
      "title": "India",
      "subtitle": "Country"
    }
  },
  {
    "navigation": {
      "entityId": "country_china",
      "relevantFlightParams": { "skyId": "CN" },
      "entityType": "COUNTRY"
    },
    "presentation": {
      "suggestionTitle": "China",
      "title": "China",
      "subtitle": "Country"
    }
  },
  {
    "navigation": {
      "entityId": "city_tokyo",
      "relevantFlightParams": { "skyId": "TYO" },
      "entityType": "CITY"
    },
    "presentation": {
      "suggestionTitle": "Tokyo, Japan",
      "title": "Tokyo",
      "subtitle": "Japan"
    }
  }
];