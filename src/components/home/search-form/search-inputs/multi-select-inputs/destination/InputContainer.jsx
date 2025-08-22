const InputContainer = ({ isDestFocused, children }) => (
  <div
    className={`relative rounded-[8px] min-h-[48px] border border-gray-border 
    hover:border-gray-light shadow-sm bg-gray-bg flex items-start px-3 py-2 transition-all duration-200 ${
      isDestFocused
        ? "shadow-[0_2px_8px_rgba(60,64,67,0.3)] ring-1 sm:w-[150%] w-[120%] z-60 ring-blue rounded-br-none rounded-bl-none ring-opacity-50"
        : ""
    }`}
  >
    {children}
  </div>
);

export default InputContainer;
