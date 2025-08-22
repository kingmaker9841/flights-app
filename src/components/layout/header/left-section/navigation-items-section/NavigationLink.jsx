import {
  ExploreIcon,
  HotelIcon,
  HouseIcon,
  MapPinIcon,
  PlaneIcon,
} from "../../../../common/Icons";

import { Link } from "react-router";

const iconMap = {
  MapPinIcon,
  ExploreIcon,
  PlaneIcon,
  HotelIcon,
  HouseIcon,
};

const NavigationLink = ({ to, label, icon, isActive }) => {
  const Icon = iconMap[icon];
  const baseClasses =
    "flex items-center space-x-2 px-3 py-2 rounded-3xl border border-gray-border";
  const activeClasses = isActive
    ? "text-text-blue bg-blue-focus-bg"
    : "hover:bg-gray-bg";

  return (
    <Link to={to} className={`${baseClasses} ${activeClasses}`}>
      <Icon className={isActive ? "w-5 h-5" : undefined} />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

export default NavigationLink;
