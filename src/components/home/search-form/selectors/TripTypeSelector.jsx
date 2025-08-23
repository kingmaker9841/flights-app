import {
  ChevronDownIcon,
  MultiCityIcon,
  OneWayIcon,
  RoundTripIcon,
} from "../../../common/Icons";

import DropdownSelect from "../../../common/DropdownSelect";
import { useSearchContext } from "../../../../context/SearchContext";

const TRIP_TYPE_OPTIONS = [
  { value: "roundtrip", label: "Round trip" },
  { value: "oneway", label: "One way" },
  { value: "multicity", label: "Multi-city" },
];

const TripTypeIcon = ({ tripType }) => {
  switch (tripType) {
    case "oneway":
      return <OneWayIcon />;
    case "roundtrip":
      return <RoundTripIcon />;
    case "multicity":
      return <MultiCityIcon />;
    default:
      return <RoundTripIcon />;
  }
};

function TripTypeSelector() {
  const { tripType, setTripType } = useSearchContext();
  const renderTrigger = (value, isOpen) => (
    <>
      <TripTypeIcon tripType={value} />
      <span className="truncate flex-1 min-w-0">
        {value === "roundtrip"
          ? "Round trip"
          : value === "oneway"
          ? "One way"
          : "Multi-city"}
      </span>
      <ChevronDownIcon className={isOpen ? "rotate-180" : "rotate-0"} />
    </>
  );

  return (
    <DropdownSelect
      value={tripType}
      onChange={setTripType}
      options={TRIP_TYPE_OPTIONS}
      renderTrigger={renderTrigger}
      triggerClassName="min-w-0 max-w-[120px]"
      dropdownPosition="left-0"
      minWidth="min-w-[200px]"
      aria-label="Select trip type"
    />
  );
}

export default TripTypeSelector;
