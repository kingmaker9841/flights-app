import { SwapIcon } from "../Icons";
import { useSearchContext } from "../../../context/SearchContext";
import Button from "../../ui/button/Button";

export default function SwapButton() {
  const { swapLocations } = useSearchContext();
  
  return (
    <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-20">
      <Button
        variant="secondary"
        size="sm"
        onClick={swapLocations}
        className="w-10 h-10 p-0 rounded-full"
        aria-label="Swap origin and destination"
      >
        <SwapIcon className="w-5 h-5 text-text-secondary" />
      </Button>
    </div>
  );
}
