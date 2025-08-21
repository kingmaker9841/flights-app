import MulticityLeg from "./MulticityLeg";

const MulticitySection = ({
  legs,
  setLegs,
  removingLegIndex,
  onRemoveLeg,
  onDatePickerOpen,
}) => {
  const addLeg = () => {
    setLegs([...legs, { from: "", to: "", date: "" }]);
  };

  return (
    <div className="space-y-4">
      {legs.map((leg, idx) => (
        <MulticityLeg
          key={idx}
          leg={leg}
          index={idx}
          legs={legs}
          setLegs={setLegs}
          removingLegIndex={removingLegIndex}
          onRemoveLeg={onRemoveLeg}
          onDatePickerOpen={onDatePickerOpen}
        />
      ))}

      <div className="mt-4 transition-all duration-300 ease-out">
        <button
          type="button"
          onClick={addLeg}
          className="bg-blue hover:bg-blue-hover text-white px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-95"
        >
          Add flight
        </button>
      </div>
    </div>
  );
};

export default MulticitySection;
