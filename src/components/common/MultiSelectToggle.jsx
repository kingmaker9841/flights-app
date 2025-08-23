import { CheckIcon, PlusIcon } from "./Icons";
import { Toggle } from "../ui";
import { cn } from "../../utils/cn";

const MultiSelectToggle = ({
  isMultiSelect,
  onToggle,
  className = "",
  disabled,
  toggleRef,
}) => (
  <Toggle
    ref={toggleRef}
    pressed={isMultiSelect}
    onToggle={onToggle}
    onMouseDown={onToggle}
    disabled={disabled}
    icon={<PlusIcon className="w-4 h-4 text-text-secondary" />}
    pressedIcon={<CheckIcon className="w-4 h-4" />}
    size="sm"
    className={cn("ml-2 mt-1 p-1", className)}
    title="Multi-select mode"
  />
);

export default MultiSelectToggle;
