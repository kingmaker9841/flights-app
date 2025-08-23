import { Button } from "../index";
import { cn } from "../../../utils/cn";

const Toggle = ({
  pressed = false,
  onToggle,
  children,
  icon,
  pressedIcon,
  variant = "ghost",
  size = "sm",
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <Button
      variant={pressed ? "primary" : variant}
      size={size}
      onClick={onToggle}
      disabled={disabled}
      className={cn(
        "transition-all duration-200",
        pressed && "shadow-sm",
        className
      )}
      {...props}
    >
      {pressed && pressedIcon ? pressedIcon : icon}
      {children}
    </Button>
  );
};

export default Toggle;