import ContextLocationInput from "../../../common/inputs/ContextLocationInput";
import DateInputs from "./date-select-input/DateInputs";
import { ORIGIN_OR_DESTINATION } from "../../../../config/constants";

const MobileLayout = ({ dateProps }) => (
  <div className="md:hidden space-y-3">
    <div className="grid grid-cols-2 gap-3">
      <ContextLocationInput type={ORIGIN_OR_DESTINATION.ORIGIN} />
      <ContextLocationInput type={ORIGIN_OR_DESTINATION.DESTINATION} />
    </div>
    <DateInputs {...dateProps} />
  </div>
);

export default MobileLayout;
