import { cn } from "../../../utils/cn";

const Card = ({
  children,
  className = "",
  padding = "md",
  shadow = "sm",
  ...props
}) => {
  const paddings = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  const shadows = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  return (
    <div
      className={cn(
        "bg-primary border border-gray-border rounded-lg",
        paddings[padding],
        shadows[shadow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
