import { resolveAirportIdentifiers } from "../utils/airportUtils";
import { searchAirports } from "../api/airports";

export async function resolveAirportIdentifiersService(input) {
  const resolved = resolveAirportIdentifiers(input);
  if (resolved) return resolved;

  const results = await searchAirports(String(input));
  const first = results?.[0];

  return {
    skyId:
      first?.navigation?.relevantFlightParams?.skyId ||
      first?.skyId ||
      first?.navigation?.entityId ||
      "",
    entityId: first?.navigation?.entityId || first?.entityId || "",
    display: first?.presentation?.suggestionTitle || first?.name || input,
    code: first?.presentation?.id || first?.code || input,
  };
}
