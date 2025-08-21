import { BackArrowIcon } from "../../../common/Icons";

const MobileHeader = ({ onClose, tripType, setTripType, onResetDates }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200">
    <button
      onClick={onClose}
      className="flex items-center text-blue font-medium"
    >
      <BackArrowIcon className="w-5 h-5 mr-2" />
      Back
    </button>

    {tripType !== "multicity" && (
      <div className="flex items-center space-x-4">
        <select
          value={tripType}
          onChange={(e) => {
            setTripType(e.target.value);
            onClose();
          }}
          className="text-sm border border-gray-300 rounded px-2 py-1"
        >
          <option value="roundtrip">Round trip</option>
          <option value="oneway">One way</option>
        </select>

        <button
          onClick={onResetDates}
          className="text-sm text-blue font-medium"
        >
          Reset
        </button>
      </div>
    )}
  </div>
);

export default MobileHeader;
