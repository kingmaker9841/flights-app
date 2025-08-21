import { MoonIcon } from "../../../common/Icons";

const ThemeToggleButton = ({ onClick }) => {
  return (
    <button
      className="p-2 rounded-full hover:bg-gray-bg"
      title="Choose theme"
      onClick={onClick}
      aria-label="Open theme selector"
    >
      <MoonIcon />
    </button>
  );
};

export default ThemeToggleButton;
