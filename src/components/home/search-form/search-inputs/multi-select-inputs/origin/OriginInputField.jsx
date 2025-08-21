import { CircleIcon } from "../../../../../common/Icons";
import { cn } from "../../../../../../utils/cn";

const OriginInputField = ({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  isLoading,
  inputRef,
}) => (
  <>
    <CircleIcon className="w-5 h-5 mr-2 text-text-secondary" />
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={isLoading}
      className={cn(`z-50 flex-1 text-[16px] placeholder-gray-light border-0 
      focus:outline-none bg-transparent text-text-input truncate ${
        isLoading ? "cursor-wait" : ""
      }`)}
    />
  </>
);

export default OriginInputField;
