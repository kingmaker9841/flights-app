import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  CloseIcon,
  LocationIcon,
} from "../../common/Icons";
import { addDays, formatDateToDayDateMonth } from "../../../utils/date-time";

const MulticityLeg = ({
  leg,
  index,
  legs,
  setLegs,
  removingLegIndex,
  onRemoveLeg,
  onDatePickerOpen,
}) => {
  const updateLeg = (field, value) => {
    const updatedLegs = [...legs];
    updatedLegs[index] = { ...updatedLegs[index], [field]: value };
    setLegs(updatedLegs);
  };

  const adjustDate = (direction) => {
    const updatedLegs = [...legs];
    updatedLegs[index] = {
      ...updatedLegs[index],
      date: addDays(updatedLegs[index].date, direction === "prev" ? -1 : 1),
    };
    setLegs(updatedLegs);
  };

  return (
    <div
      className={`transition-all duration-300 leg-row ${
        removingLegIndex === index
          ? "opacity-0 transform scale-95 leg-row-removing"
          : "opacity-100 transform scale-100"
      }`}
    >
      {/* Mobile: 2 rows layout */}
      <div className="md:hidden space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3">
            <CircleIcon className="mr-2" />
            <input
              value={leg.from || ""}
              onChange={(e) => updateLeg("from", e.target.value)}
              placeholder="Where from?"
              className="flex-1 text-ellipsis text-[16px] border-0 focus:outline-none bg-transparent text-text-input"
            />
          </div>
          <div className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3">
            <LocationIcon className="mr-2" />
            <input
              value={leg.to || ""}
              onChange={(e) => updateLeg("to", e.target.value)}
              placeholder="Where to?"
              className="flex-1 text-[16px] border-0 focus:outline-none bg-transparent text-text-input text-ellipsis"
            />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-3 items-center">
          <div
            className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center cursor-pointer"
            onClick={onDatePickerOpen}
          >
            <div className="flex items-center px-3">
              <CalendarIcon />
            </div>
            <div className="flex-1 flex items-center px-2">
              <span className="text-[16px] text-text-input">
                {leg.date ? formatDateToDayDateMonth(leg.date) : "Thu 4 Sept"}
              </span>
            </div>
            <div className="flex items-center pr-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  adjustDate("prev");
                }}
                className="w-8 h-8 rounded-full hover:bg-gray-bg flex items-center justify-center"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  adjustDate("next");
                }}
                className="w-8 h-8 rounded-full hover:bg-gray-bg flex items-center justify-center ml-1"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>

          {legs.length > 1 && (
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveLeg(index);
                }}
                className="w-10 h-10 rounded-full hover:bg-gray-bg flex items-center justify-center z-40"
                aria-label="Remove flight"
              >
                <CloseIcon />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop: 3 columns layout */}
      <div className="hidden md:grid grid-cols-3 gap-3">
        <div className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3">
          <CircleIcon className="mr-2" />
          <input
            value={leg.from || ""}
            onChange={(e) => updateLeg("from", e.target.value)}
            placeholder="Where from?"
            className="flex-1 text-ellipsis text-[16px] border-0 focus:outline-none bg-transparent text-text-input"
          />
        </div>
        <div className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3">
          <LocationIcon className="mr-2" />
          <input
            value={leg.to || ""}
            onChange={(e) => updateLeg("to", e.target.value)}
            placeholder="Where to?"
            className="flex-1 text-ellipsis text-[16px] border-0 focus:outline-none bg-transparent text-text-input"
          />
        </div>
        <div
          className="rounded-[8px] h-[48px] border border-gray-border hover:border-gray-light shadow-sm bg-gray-bg flex items-center cursor-pointer"
          onClick={onDatePickerOpen}
        >
          <div className="flex items-center px-3">
            <CalendarIcon />
          </div>
          <div className="flex-1 flex items-center px-2">
            <span className="text-[16px] text-text-input">
              {leg.date ? formatDateToDayDateMonth(leg.date) : "Thu 4 Sept"}
            </span>
          </div>
          <div className="flex items-center pr-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                adjustDate("prev");
              }}
              className="w-8 h-8 rounded-full hover:bg-gray-bg flex items-center justify-center"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                adjustDate("next");
              }}
              className="w-8 h-8 rounded-full hover:bg-gray-bg flex items-center justify-center ml-1"
            >
              <ChevronRightIcon />
            </button>
          </div>
          {legs.length > 1 && (
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveLeg(index);
                }}
                className="w-10 h-10 rounded-full hover:bg-gray-bg flex items-center justify-center z-40"
                aria-label="Remove flight"
              >
                <CloseIcon
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M18 6L6 18M6 6l12 12"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MulticityLeg;
