import { NAVIGATION_ITEMS } from "../../../../../config/constants";
import NavigationLink from "./NavigationLink";

const Navigation = () => (
  <nav className="hidden min-[950px]:flex items-center space-x-1">
    {NAVIGATION_ITEMS.map((item) => (
      <NavigationLink
        key={item.to}
        to={item.to}
        label={item.label}
        icon={item.icon}
        isActive={item.isActive}
      />
    ))}
  </nav>
);

export default Navigation;
