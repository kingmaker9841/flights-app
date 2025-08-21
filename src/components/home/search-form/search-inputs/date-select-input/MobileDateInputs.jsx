import { CalendarIcon } from "../../../../common/Icons";
import DateInputField from "./DateInputField";
import { formatDateDisplay } from "../../../../../utils/date-time";

const MobileDateInputs = ({
  tripType,
  departDate,
  returnDate,
  onDateClick,
}) => (
  <div className="md:hidden">
    {tripType === "roundtrip" ? (
      <div className="relative">
        <div className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center">
          <div className="pl-3">
            <CalendarIcon className="w-5 h-5 text-text-secondary" />
          </div>
          <DateInputField
            value={departDate}
            placeholder="Departure"
            onClick={onDateClick}
          />
          <div className="w-px bg-gray-border h-6 mx-2"></div>
          <DateInputField
            value={returnDate}
            placeholder="Return"
            onClick={onDateClick}
          />
        </div>
      </div>
    ) : (
      <div className="relative">
        <div className="relative rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3">
          <CalendarIcon className="w-5 h-5 mr-2 text-text-secondary" />
          <input
            type="text"
            value={departDate ? formatDateDisplay(departDate) : "Departure"}
            readOnly
            placeholder="Departure"
            className="flex-1 text-[16px] border-0 focus:outline-none bg-transparent text-text-input cursor-pointer"
            onClick={onDateClick}
          />
        </div>
      </div>
    )}
  </div>
);

export default MobileDateInputs;
