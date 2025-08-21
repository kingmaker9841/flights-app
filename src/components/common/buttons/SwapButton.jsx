import { SwapIcon } from "../Icons"; // Import the new SwapIcon

export default function SwapButton({ swap }) {
  return (
    <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-20">
      <button
        type="button"
        onClick={swap}
        className="w-10 h-10 bg-gray-bg border border-gray-border rounded-full flex items-center justify-center hover:bg-gray-hover transition-colors duration-200"
        aria-label="Swap origin and destination"
      >
        <SwapIcon className="w-5 h-5 text-text-secondary" />
      </button>
    </div>
  );
}
