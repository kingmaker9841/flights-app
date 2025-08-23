import { cn } from "../../../utils/cn";

const Input = ({
  label,
  error,
  icon,
  iconPosition = "left",
  className = "",
  containerClassName = "",
  ...props
}) => {
  return (
    <div className={cn("space-y-1", containerClassName)}>
      {label && (
        <label className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && iconPosition === "left" && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
            {icon}
          </div>
        )}
        <input
          className={cn(
            "w-full px-3 py-2 border border-gray-border rounded-lg",
            "focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent",
            "placeholder-gray-light text-text-input bg-gray-bg",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            icon && iconPosition === "left" && "pl-10",
            icon && iconPosition === "right" && "pr-10",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {icon && iconPosition === "right" && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;