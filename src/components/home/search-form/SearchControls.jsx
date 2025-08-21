import CabinSelector from "./selectors/CabinSelector";
import PassengerSelector from "./selectors/passenger-selector/PassengerSelector";
import TripTypeSelector from "./selectors/TripTypeSelector";

const SearchControls = ({
  tripType,
  setTripType,
  adults,
  setAdults,
  children,
  setChildren,
  infantsSeat,
  setInfantsSeat,
  infantsLap,
  setInfantsLap,
  cabin,
  setCabin,
}) => {
  return (
    <div className="px-4 md:px-5 py-3">
      <div className="flex items-center gap-3 text-[14px]">
        <TripTypeSelector tripType={tripType} setTripType={setTripType} />
        <PassengerSelector
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
          infantsSeat={infantsSeat}
          setInfantsSeat={setInfantsSeat}
          infantsLap={infantsLap}
          setInfantsLap={setInfantsLap}
        />
        <div className="hidden min-[400px]:block">
          <CabinSelector cabin={cabin} setCabin={setCabin} />
        </div>
      </div>
      <div className="block min-[400px]:hidden mt-3">
        <CabinSelector cabin={cabin} setCabin={setCabin} />
      </div>
    </div>
  );
};

export default SearchControls;
