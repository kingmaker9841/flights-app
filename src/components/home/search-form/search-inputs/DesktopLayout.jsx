import DateInputs from "./date-select-input/DateInputs";
import DestinationSearch from "./multi-select-inputs/destination/DestinationSearch";
import OriginSearch from "./multi-select-inputs/origin/OriginSearch";
import SwapButton from "../../../common/buttons/SwapButton";
import { cn } from "../../../../utils/cn";

const DesktopLayout = ({
  originProps,
  destinationProps,
  dateProps,
  isOriginFocused,
  swapLocations,
}) => (
  <div className="hidden md:grid grid-cols-[1fr_1fr_1.4fr] gap-3 overflow-visible">
    <div
      className={cn("relative", {
        "overflow-visible z-50": isOriginFocused,
      })}
    >
      <OriginSearch {...originProps} />
      <SwapButton swap={swapLocations} />
    </div>
    <DestinationSearch {...destinationProps} />
    <DateInputs {...dateProps} />
  </div>
);

export default DesktopLayout;
