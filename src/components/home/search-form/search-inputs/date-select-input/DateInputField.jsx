import DateAdjustButton from "./DateAdjustButton";
import { formatDateDisplay } from "../../../../../utils/date-time";

const DateInputField = ({
  value,
  placeholder,
  onClick,
  hiddenRef,
  onHiddenChange,
  showControls = false,
  onPrevious,
  onNext,
}) => (
  <div className="flex-1 flex items-center relative">
    <input
      type="text"
      value={formatDateDisplay(value)}
      readOnly
      placeholder={placeholder}
      className="w-full px-3 py-2 text-[16px] border-0 focus:outline-none bg-transparent text-text-input cursor-pointer"
      onClick={onClick}
    />
    {hiddenRef && (
      <input
        ref={hiddenRef}
        type="date"
        value={value || ""}
        onChange={onHiddenChange}
        className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        style={{ zIndex: -1 }}
      />
    )}
    {showControls && value && (
      <div className="flex items-center relative pr-3" style={{ zIndex: 10 }}>
        <DateAdjustButton onClick={onPrevious} direction="prev" />
        <DateAdjustButton onClick={onNext} direction="next" />
      </div>
    )}
    {showControls && !value && (
      <div className="flex items-center relative" style={{ zIndex: 10 }}>
        <DateAdjustButton onClick={onPrevious} direction="prev" />
        <DateAdjustButton onClick={onNext} direction="next" />
      </div>
    )}
  </div>
);

export default DateInputField;
