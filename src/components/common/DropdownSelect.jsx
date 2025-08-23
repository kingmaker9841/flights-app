import { Select } from "../ui";
import { cn } from "../../utils/cn";

const DropdownSelect = ({
  value,
  onChange,
  options,
  renderTrigger,
  triggerClassName = "",
  dropdownClassName = "",
  dropdownPosition = "left-0",
  minWidth = "min-w-[200px]",
  ...props
}) => {
  const position = dropdownPosition.includes("right") ? "bottom-right" : "bottom-left";

  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      renderTrigger={renderTrigger}
      position={position}
      className={cn("h-9 px-3", triggerClassName)}
      dropdownClassName={cn(minWidth, dropdownClassName)}
      {...props}
    />
  );
};

export default DropdownSelect;
