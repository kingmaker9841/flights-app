import ThemeDropdownHeader from "./ThemeDropdownHeader";
import ThemeOption from "./ThemeOption";

const ThemeDropdown = ({
  isOpen,
  isAnimating,
  themes,
  currentTheme,
  onThemeSelect,
}) => {
  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`absolute right-0 z-30 mt-2 elevation-menu min-w-[200px] ${
        isAnimating ? "dropdown-exit" : "dropdown-enter"
      }`}
      role="menu"
      aria-label="Theme selection menu"
    >
      <ThemeDropdownHeader />

      <div className="py-1" role="group">
        {themes.map((themeOption) => (
          <ThemeOption
            key={themeOption.value}
            themeOption={themeOption}
            isSelected={currentTheme === themeOption.value}
            onSelect={onThemeSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeDropdown;
