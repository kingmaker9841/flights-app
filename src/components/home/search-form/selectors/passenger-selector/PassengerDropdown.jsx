import PassengerCounter from "./PassengerCounter";

const PassengerDropdown = ({
  isOpen,
  isAnimating,
  adults,
  setAdults,
  children,
  setChildren,
  infantsSeat,
  setInfantsSeat,
  infantsLap,
  setInfantsLap,
  onClose,
}) => {
  if (!isOpen && !isAnimating) return null;

  const passengers = [
    {
      key: "adults",
      label: "Adults",
      hint: "",
      value: adults,
      onChange: setAdults,
      min: 1,
    },
    {
      key: "children",
      label: "Children",
      hint: "Aged 2–11",
      value: children,
      onChange: setChildren,
      min: 0,
    },
    {
      key: "infantsSeat",
      label: "Infants",
      hint: "In seat",
      value: infantsSeat,
      onChange: setInfantsSeat,
      min: 0,
    },
    {
      key: "infantsLap",
      label: "Infants",
      hint: "On lap",
      value: infantsLap,
      onChange: setInfantsLap,
      min: 0,
    },
  ];

  return (
    <div
      className={`absolute z-30 mt-2 elevation-menu w-[260px] min-[400px]:w-[320px] max-w-[calc(100vw-1rem)] right-0 min-[400px]:left-0 p-3 min-[400px]:p-4 ${
        isAnimating ? "dropdown-exit" : "dropdown-enter"
      }`}
      role="dialog"
      aria-label="Select passengers"
    >
      {passengers.map((passenger) => (
        <PassengerCounter
          key={passenger.key}
          label={passenger.label}
          hint={passenger.hint}
          value={passenger.value}
          onChange={passenger.onChange}
          min={passenger.min}
        />
      ))}

      <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-border text-blue">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="button" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
};

export default PassengerDropdown;
