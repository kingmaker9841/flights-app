import ContextLocationInput from "../../../common/inputs/ContextLocationInput";
import DateInputs from "./date-select-input/DateInputs";
import { ORIGIN_OR_DESTINATION } from "../../../../config/constants";
import SwapButton from "../../../common/buttons/SwapButton";
import { cn } from "../../../../utils/cn";
import { useSearchContext } from "../../../../context/SearchContext";

const DesktopLayout = ({ dateProps }) => {
  const { isOriginFocused } = useSearchContext();

  return (
    <div className="hidden md:grid grid-cols-[1fr_1fr_1.4fr] gap-3 overflow-visible">
      <div
        className={cn("relative", {
          "overflow-visible z-50": isOriginFocused,
        })}
      >
        <ContextLocationInput type={ORIGIN_OR_DESTINATION.ORIGIN} />
        <SwapButton />
      </div>
      <ContextLocationInput type={ORIGIN_OR_DESTINATION.DESTINATION} />
      <DateInputs {...dateProps} />
    </div>
  );
};

export default DesktopLayout;
