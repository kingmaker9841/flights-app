import { cn } from "../../../utils/cn";

const Checkbox = ({
  checked = false,
  onChange,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={cn(
        "w-4 h-4 text-blue bg-gray-bg border-gray-border rounded",
        "focus:ring-blue focus:ring-2 focus:ring-offset-0",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
};

export default Checkbox;