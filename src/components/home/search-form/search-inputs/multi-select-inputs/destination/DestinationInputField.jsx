import { LocationIcon } from "../../../../../common/Icons";

const DestinationInputField = ({
  value,
  onChange,
  onFocus,
  onBlur,
  inputRef,
}) => (
  <>
    <LocationIcon className="w-5 h-5 mr-2 text-text-secondary" />
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder="Where to?"
      className="flex-1 text-[16px] placeholder-gray-light border-0 focus:outline-none bg-transparent text-text-input truncate"
    />
  </>
);

export default DestinationInputField;
