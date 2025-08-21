export function resolveAirportIdentifiers(input) {
  if (input && typeof input === "object") {
    const relevant =
      input.navigation?.relevantFlightParams ||
      input.relevantFlightParams ||
      input;

    return {
      skyId: relevant?.skyId || input.skyId || "",
      entityId:
        relevant?.entityId ||
        input.entityId ||
        input.navigation?.entityId ||
        "",
      display:
        input.presentation?.title ||
        input.presentation?.suggestionTitle ||
        input.name ||
        input.code ||
        "",
      code: input.presentation?.id || input.code || relevant?.skyId || "",
    };
  }

  return null;
}

export function formatAirportForInput(airportData) {
  if (!airportData) return null;

  const { presentation, navigation } = airportData;

  return {
    presentation: {
      title: presentation?.title || "",
      suggestionTitle:
        presentation?.suggestionTitle || presentation?.title || "",
      subtitle: presentation?.subtitle || "",
    },
    navigation: {
      entityId: navigation?.entityId || "",
      entityType: navigation?.entityType || "AIRPORT",
      localizedName: navigation?.localizedName || "",
      relevantFlightParams: navigation?.relevantFlightParams || {},
    },
  };
}
