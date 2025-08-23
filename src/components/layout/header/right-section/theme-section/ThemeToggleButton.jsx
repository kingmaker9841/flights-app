import { MoonIcon } from "../../../../common/Icons";
import { Button } from "../../../../ui";

const ThemeToggleButton = ({ onClick }) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="p-2 rounded-full"
      title="Choose theme"
      aria-label="Open theme selector"
    >
      <MoonIcon />
    </Button>
  );
};

export default ThemeToggleButton;
