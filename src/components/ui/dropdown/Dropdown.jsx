import { cn } from "../../../utils/cn";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useRef } from "react";

const Dropdown = ({
  trigger,
  children,
  isOpen,
  onClose,
  position = "bottom-left",
  className = "",
  triggerClassName = "",
}) => {
  const containerRef = useRef(null);
  
  useClickOutside([containerRef], onClose, isOpen);

  const positions = {
    "bottom-left": "top-full left-0",
    "bottom-right": "top-full right-0",
    "top-left": "bottom-full left-0",
    "top-right": "bottom-full right-0",
  };

  return (
    <div ref={containerRef} className="relative">
      <div className={cn(triggerClassName)}>{trigger}</div>
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 mt-1 bg-white border border-gray-border rounded-lg shadow-lg",
            "animate-in fade-in-0 zoom-in-95 duration-100",
            positions[position],
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;