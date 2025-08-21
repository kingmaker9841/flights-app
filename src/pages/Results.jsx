import { useLocation, Link } from "react-router";
import { useState } from "react";

function Results() {
  const location = useLocation();
  const { results } = location.state || { results: [] };
  const [sortBy, setSortBy] = useState("price");

  const sortedResults = [...results].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return a.price - b.price;
      case "duration":
        return parseInt(a.duration) - parseInt(b.duration);
      case "departure":
        return a.departure.time.localeCompare(b.departure.time);
      default:
        return 0;
    }
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header with search summary */}
      <div className="border-b border-[--color-gray-border] px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-[--color-blue] hover:underline flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to search</span>
            </Link>

            <div className="text-sm text-[--color-text-secondary]">
              {results.length} flights found
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white border border-[--color-gray-border] rounded-lg p-4">
              <h3 className="font-medium text-[--color-text-primary] mb-4">
                Sort by
              </h3>
              <div className="space-y-2">
                {[
                  { value: "price", label: "Price (lowest first)" },
                  { value: "duration", label: "Duration (shortest first)" },
                  { value: "departure", label: "Departure time" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="sortBy"
                      value={option.value}
                      checked={sortBy === option.value}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-4 h-4 text-[--color-blue] border-gray-300 focus:ring-[--color-blue]"
                    />
                    <span className="ml-2 text-sm text-[--color-text-primary]">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>

              <hr className="my-4 border-[--color-gray-border]" />

              <h3 className="font-medium text-[--color-text-primary] mb-4">
                Stops
              </h3>
              <div className="space-y-2">
                {[
                  { value: "any", label: "Any number of stops" },
                  { value: "nonstop", label: "Nonstop only" },
                  { value: "1stop", label: "1 stop or fewer" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[--color-blue] border-gray-300 rounded focus:ring-[--color-blue]"
                    />
                    <span className="ml-2 text-sm text-[--color-text-primary]">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="flex-1">
            <div className="space-y-4">
              {sortedResults.map((flight) => (
                <div
                  key={flight.id}
                  className="bg-white border border-[--color-gray-border] rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    {/* Flight Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-8">
                        {/* Airline */}
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium">
                              {flight.airline
                                .split(" ")
                                .map((w) => w[0])
                                .join("")}
                            </span>
                          </div>
                          <span className="text-sm text-[--color-text-secondary]">
                            {flight.airline}
                          </span>
                        </div>

                        {/* Times and Duration */}
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-lg font-medium text-[--color-text-primary]">
                              {flight.departure.time}
                            </div>
                            <div className="text-sm text-[--color-text-secondary]">
                              {flight.departure.airport}
                            </div>
                          </div>

                          <div className="flex-1 px-4">
                            <div className="text-center text-sm text-[--color-text-secondary] mb-1">
                              {flight.duration}
                            </div>
                            <div className="relative">
                              <div className="h-px bg-[--color-gray-border]"></div>
                              {flight.stops > 0 && (
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                                  <div className="w-2 h-2 bg-[--color-gray-border] rounded-full"></div>
                                </div>
                              )}
                            </div>
                            <div className="text-center text-xs text-[--color-text-secondary] mt-1">
                              {flight.stops === 0
                                ? "Nonstop"
                                : `${flight.stops} stop${
                                    flight.stops > 1 ? "s" : ""
                                  }`}
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-lg font-medium text-[--color-text-primary]">
                              {flight.arrival.time}
                            </div>
                            <div className="text-sm text-[--color-text-secondary]">
                              {flight.arrival.airport}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price and Select */}
                    <div className="text-right ml-8">
                      <div className="text-2xl font-medium text-[--color-text-primary] mb-2">
                        ${flight.price}
                      </div>
                      <button className="bg-[--color-blue] hover:bg-[--color-blue-hover] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {results.length === 0 && (
              <div className="text-center py-12">
                <div className="text-[--color-text-secondary] mb-4">
                  No flights found
                </div>
                <Link to="/" className="text-[--color-blue] hover:underline">
                  Try a different search
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
