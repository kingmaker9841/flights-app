import { ChevronLeftIcon, ChevronRightIcon } from "../../../common/Icons";

import { MONTHS } from "../../../../config/constants";

const CalendarNavigation = ({ month, year, onNavigate }) => (
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-base font-medium text-gray-900">
      {MONTHS.map((m) => m.slice(0, 3))[month]} {year}
    </h3>
    <div className="flex items-center">
      <button
        onClick={() => onNavigate("prev")}
        className="p-1 rounded-full hover-bg-gray"
      >
        <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
      </button>
      <button
        onClick={() => onNavigate("next")}
        className="p-1 rounded-full hover-bg-gray ml-1"
      >
        <ChevronRightIcon className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  </div>
);

export default CalendarNavigation;
