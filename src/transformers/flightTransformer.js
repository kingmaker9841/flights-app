import { formatTimeHHMM } from "../utils/date-time";

export function normalizeFlights(apiData, originLabel, destinationLabel) {
  const itineraries =
    (apiData && apiData.data && apiData.data.itineraries) ||
    apiData?.itineraries ||
    [];
  const legsMap =
    (apiData && apiData.data && apiData.data.legs) || apiData?.legs || {};

  const flights = [];

  for (const itinerary of itineraries) {
    const legRefs = itinerary.legs || itinerary?.legIds || [];
    let firstLeg = null;

    if (Array.isArray(legRefs)) {
      if (typeof legRefs[0] === "string") {
        firstLeg = legsMap ? legsMap[legRefs[0]] : null;
      } else {
        firstLeg = legRefs[0] || null;
      }
    }

    const segments = firstLeg?.segments || [];
    const marketingCarrier =
      segments?.[0]?.marketingCarrier || firstLeg?.carriers?.marketing?.[0];

    const airlineName =
      marketingCarrier?.name ||
      marketingCarrier?.displayName ||
      marketingCarrier ||
      "Airline";

    const priceAmount = extractPrice(itinerary, apiData);
    const departureTime = extractDepartureTime(firstLeg, segments);
    const arrivalTime = extractArrivalTime(firstLeg, segments);
    const durationMin =
      firstLeg?.durationInMinutes ||
      firstLeg?.duration ||
      itinerary?.durationInMinutes;

    const stops = Math.max(0, (segments?.length || 1) - 1);

    flights.push({
      id: itinerary?.id || firstLeg?.id || Math.random().toString(36).slice(2),
      airline: airlineName,
      price: priceAmount || 0,
      duration: durationMin
        ? `${Math.floor(durationMin / 60)}h ${durationMin % 60}m`
        : "",
      stops,
      departure: {
        time: formatTimeHHMM(departureTime),
        airport: originLabel,
      },
      arrival: {
        time: formatTimeHHMM(arrivalTime),
        airport: destinationLabel,
      },
    });
  }

  return flights;
}

function extractPrice(itinerary, apiData) {
  let priceAmount = 0;

  if (itinerary && itinerary.price) {
    if (typeof itinerary.price.raw === "number") {
      priceAmount = itinerary.price.raw;
    } else if (typeof itinerary.price.amount === "number") {
      priceAmount = itinerary.price.amount;
    } else if (typeof itinerary.price.formatted === "string") {
      const numericValue = Number(
        String(itinerary.price.formatted).replace(/[^\d.]/g, "")
      );
      if (!Number.isNaN(numericValue)) priceAmount = numericValue;
    }
  }

  // Fallback to context price
  if (
    !priceAmount &&
    apiData &&
    apiData.data &&
    apiData.data.context &&
    typeof apiData.data.context.price === "number"
  ) {
    priceAmount = apiData.data.context.price;
  }

  return priceAmount;
}

function extractDepartureTime(firstLeg, segments) {
  return (
    firstLeg?.departure ||
    firstLeg?.departureTime ||
    segments?.[0]?.departure?.time ||
    segments?.[0]?.departureTime
  );
}

function extractArrivalTime(firstLeg, segments) {
  return (
    firstLeg?.arrival ||
    firstLeg?.arrivalTime ||
    segments?.[segments.length - 1]?.arrival?.time ||
    segments?.[segments.length - 1]?.arrivalTime
  );
}
