import { CloseIcon } from "../../../common/Icons";
import DateDisplay from "./DateDisplay";

const DesktopHeader = ({ onClose, departDate, returnDate, tripType }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-6">
        <DateDisplay
          label="Departure"
          date={departDate}
          isSelected={true}
          placeholder="Select date"
        />

        {tripType === "roundtrip" && (
          <DateDisplay
            label="Return"
            date={returnDate}
            isSelected={false}
            placeholder="Select date"
          />
        )}
      </div>

      <button onClick={onClose} className="p-1 rounded-full hover-bg-gray">
        <CloseIcon className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  );
};

export default DesktopHeader;
