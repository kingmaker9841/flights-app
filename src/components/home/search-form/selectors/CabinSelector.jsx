import DropdownSelect from "../../../common/DropdownSelect";

const CABIN_OPTIONS = [
  { value: "Economy", label: "Economy" },
  { value: "Premium Economy", label: "Premium Economy" },
  { value: "Business", label: "Business" },
  { value: "First", label: "First" },
];

function CabinSelector({ cabin, setCabin }) {
  return (
    <DropdownSelect
      value={cabin}
      onChange={setCabin}
      options={CABIN_OPTIONS}
      triggerClassName="min-[390px]:px-3 px-2 max-w-[100px] min-[390px]:max-w-[120px] min-[520px]:max-w-none"
      dropdownPosition="right-0"
      minWidth="min-w-[220px]"
      aria-label="Select cabin class"
    />
  );
}

export default CabinSelector;
