import { MinusIcon, PlusIcon } from "../../../../common/Icons";

const PassengerCounter = ({ label, hint, value, onChange, min = 0 }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <div className="text-text-primary">{label}</div>
        {hint && <div className="text-xs text-text-secondary">{hint}</div>}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className={`w-10 h-10 rounded-[8px] border border-gray-border grid place-items-center ${
            value === min ? "opacity-60" : "hover:bg-gray-bg"
          }`}
          disabled={value === min}
          aria-label={`Decrease ${label.toLowerCase()}`}
        >
          <MinusIcon />
        </button>
        <span
          className="w-6 text-center"
          aria-label={`${value} ${label.toLowerCase()}`}
        >
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="w-10 h-10 rounded-[8px] border border-gray-border hover:bg-gray-bg grid place-items-center"
          aria-label={`Increase ${label.toLowerCase()}`}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default PassengerCounter;
