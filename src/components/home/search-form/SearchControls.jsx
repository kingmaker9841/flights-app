import CabinSelector from "./selectors/CabinSelector";
import PassengerSelector from "./selectors/passenger-selector/PassengerSelector";
import TripTypeSelector from "./selectors/TripTypeSelector";

const SearchControls = () => {
  return (
    <div className="px-4 md:px-5 py-3">
      <div className="flex items-center gap-3 text-[14px]">
        <TripTypeSelector />
        <PassengerSelector />
        <div className="hidden min-[400px]:block">
          <CabinSelector />
        </div>
      </div>
      <div className="block min-[400px]:hidden mt-3">
        <CabinSelector />
      </div>
    </div>
  );
};

export default SearchControls;
