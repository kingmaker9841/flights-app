import ThemeDropdown from "./ThemeDropdown";
import ThemeToggleButton from "./ThemeToggleButton";
import { useDropdown } from "../../../../hooks/useDropdown";
import { useTheme } from "../../../../hooks/useTheme";

function ThemeSelector() {
  const { theme, setTheme, themes } = useTheme();
  const { isOpen, isAnimating, dropdownRef, toggleDropdown, closeDropdown } =
    useDropdown();

  const handleThemeSelect = (themeValue) => {
    setTheme(themeValue);
    closeDropdown();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <ThemeToggleButton onClick={toggleDropdown} />

      <ThemeDropdown
        isOpen={isOpen}
        isAnimating={isAnimating}
        themes={themes}
        currentTheme={theme}
        onThemeSelect={handleThemeSelect}
      />
    </div>
  );
}

export default ThemeSelector;
