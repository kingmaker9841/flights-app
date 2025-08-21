import { cn } from "../../../../../../utils/cn";

const InputContainer = ({ isOriginFocused, children }) => (
  <div
    className={cn(`relative rounded-[8px] h-[48px] border border-gray-border 
    hover:border-gray-light shadow-sm bg-gray-bg flex items-center px-3 transition-all duration-200 ${
      isOriginFocused
        ? "shadow-[0_2px_8px_rgba(60,64,67,0.3)]  ring-opacity-50  z-60 ring-1 ring-blue w-[150%] rounded-br-none rounded-bl-none"
        : ""
    }`)}
  >
    {children}
  </div>
);

export default InputContainer;
