import { ChevronDownIcon, PersonIcon } from "../../../../common/Icons";

import PassengerDropdown from "./PassengerDropdown";
import { useDropdown } from "../../../../../hooks/useDropdown";
import { useMemo } from "react";
import { useSearchContext } from "../../../../../context/SearchContext";

function PassengerSelector() {
  const { passengers } = useSearchContext();
  const { isOpen, isAnimating, dropdownRef, toggleDropdown } = useDropdown();

  const passengerText = useMemo(() => {
    return `${passengers}`;
  }, [passengers]);

  return (
    <div className="relative z-90" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`h-9 px-3 rounded-[6px] flex items-center gap-2 hover:bg-gray-bg ${
          isOpen ? "bg-blue-focus-bg" : ""
        }`}
        aria-label="Select passengers"
      >
        <PersonIcon />
        <span>{passengerText}</span>
        <ChevronDownIcon className={isOpen ? "rotate-180" : "rotate-0"} />
      </button>

      <PassengerDropdown
        isOpen={isOpen}
        isAnimating={isAnimating}
        onClose={toggleDropdown}
      />
    </div>
  );
}

export default PassengerSelector;
