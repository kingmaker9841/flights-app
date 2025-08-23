import MulticityLeg from "./MulticityLeg";
import { useSearchContext } from "../../../context/SearchContext";

const MulticitySection = ({ onRemoveLeg }) => {
  const { legs, addMulticityLeg } = useSearchContext();

  return (
    <div className="space-y-4">
      {legs.map((leg, idx) => (
        <MulticityLeg key={idx} index={idx} onRemoveLeg={onRemoveLeg} />
      ))}

      <div className="mt-4 transition-all duration-300 ease-out">
        <button
          type="button"
          onClick={addMulticityLeg}
          className="bg-blue hover:bg-blue-hover text-white px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-95"
        >
          Add flight
        </button>
      </div>
    </div>
  );
};

export default MulticitySection;
