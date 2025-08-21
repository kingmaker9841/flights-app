import { cn } from "../../../../../../utils/cn";

const DropdownContainer = ({ show, isFocused, children, ref }) => {
  if (!show) return null;

  return (
    <div
      ref={ref}
      className={cn(
        `absolute left-0 top-full z-40 ${
          isFocused ? "w-[150%] rounded-tr-none rounded-tl-none" : "right-0"
        }`
      )}
    >
      {children}
    </div>
  );
};

export default DropdownContainer;
