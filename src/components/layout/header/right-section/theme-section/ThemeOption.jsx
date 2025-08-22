import { CheckIcon } from "../../../../common/Icons";

const ThemeOption = ({ themeOption, isSelected, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(themeOption.value)}
      className={`w-full text-left px-4 py-3 hover:bg-gray-bg flex items-center justify-between ${
        isSelected ? "text-blue bg-blue-focus-bg" : "text-text-primary"
      }`}
      aria-pressed={isSelected}
    >
      <span className="text-sm">{themeOption.label}</span>
      {isSelected && <CheckIcon aria-hidden="true" />}
    </button>
  );
};

export default ThemeOption;
