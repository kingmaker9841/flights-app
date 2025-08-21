import DateInputs from "./date-select-input/DateInputs";
import DestinationSearch from "./multi-select-inputs/destination/DestinationSearch";
import OriginSearch from "./multi-select-inputs/origin/OriginSearch";

const MobileLayout = ({ originProps, destinationProps, dateProps }) => (
  <div className="md:hidden space-y-3">
    <div className="grid grid-cols-2 gap-3">
      <OriginSearch {...originProps} />
      <DestinationSearch {...destinationProps} />
    </div>
    <DateInputs {...dateProps} />
  </div>
);

export default MobileLayout;
