import { CalendarIcon } from "../../../../common/Icons";
import DateInputField from "./DateInputField";
import { adjustDate } from "../../../../../utils/date-time";

const DesktopDateInputs = ({
  tripType,
  departDate,
  returnDate,
  setDepartDate,
  setReturnDate,
  onDateClick,
  departHiddenRef,
  returnHiddenRef,
}) => (
  <div className="hidden md:block relative">
    <div className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center">
      <div className="pl-3">
        <CalendarIcon className="w-5 h-5 text-text-secondary" />
      </div>

      <DateInputField
        value={departDate}
        placeholder="Departure"
        onClick={onDateClick}
        hiddenRef={departHiddenRef}
        onHiddenChange={(e) => setDepartDate(e.target.value)}
        showControls={true}
        onPrevious={() => adjustDate(departDate, -1, setDepartDate)}
        onNext={() => adjustDate(departDate, 1, setDepartDate)}
      />

      {tripType === "roundtrip" && (
        <>
          <div className="w-px bg-gray-border h-6 mx-2"></div>
          <DateInputField
            value={returnDate}
            placeholder="Return"
            onClick={onDateClick}
            hiddenRef={returnHiddenRef}
            onHiddenChange={(e) => setReturnDate(e.target.value)}
            showControls={true}
            onPrevious={() => adjustDate(returnDate, -1, setReturnDate)}
            onNext={() => adjustDate(returnDate, 1, setReturnDate)}
          />
        </>
      )}
    </div>
  </div>
);

export default DesktopDateInputs;
