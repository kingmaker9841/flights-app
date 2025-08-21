export const useAirportGrouping = (options) => {
  const groupedOptions = options.reduce((acc, option) => {
    const cityName =
      option.presentation?.title ||
      option.presentation?.suggestionTitle ||
      "Unknown";
    const isAirport = option.navigation?.entityType === "AIRPORT";

    if (isAirport) {
      const cityKey = cityName.split(" ")[0];
      if (!acc[cityKey]) {
        acc[cityKey] = {
          city: {
            presentation: {
              title: cityKey,
              subtitle: option.presentation?.subtitle || "",
            },
            navigation: {
              entityType: "CITY",
              entityId: `city_${cityKey.toLowerCase()}`,
            },
          },
          airports: [],
        };
      }
      acc[cityKey].airports.push(option);
    } else {
      const cityKey = option.navigation?.entityId || cityName;
      if (!acc[cityKey]) {
        acc[cityKey] = {
          city: option,
          airports: option.airports || [],
        };
      }
    }

    return acc;
  }, {});

  return groupedOptions;
};
