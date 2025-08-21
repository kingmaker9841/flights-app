import {
  AppsIcon,
  ExploreIcon,
  GoogleLogoIcon,
  HamburgerIcon,
  HotelIcon,
  HouseIcon,
  MapPinIcon,
  PlaneIcon,
} from "../common/Icons";
import { Link, Outlet } from "react-router";

import Footer from "./footer/Footer";
import ThemeSelector from "./header/theme-section/ThemeSelector";

const NAVIGATION_ITEMS = [
  {
    to: "/travel",
    label: "Travel",
    icon: MapPinIcon,
    isActive: false,
  },
  {
    to: "/explore",
    label: "Explore",
    icon: ExploreIcon,
    isActive: false,
  },
  {
    to: "/",
    label: "Flights",
    icon: PlaneIcon,
    isActive: true,
  },
  {
    to: "/hotels",
    label: "Hotels",
    icon: HotelIcon,
    isActive: false,
  },
  {
    to: "/vacation-rentals",
    label: "Holiday rentals",
    icon: HouseIcon,
    isActive: false,
  },
];

// Header sub-components
const HamburgerButton = () => (
  <button className="p-2 rounded-full hover:bg-gray-bg">
    <HamburgerIcon />
  </button>
);

const LogoSection = () => (
  <Link to="/" className="flex items-center space-x-2">
    <GoogleLogoIcon />
    <span className="text-xl text-text-primary font-normal hidden min-[380px]:block">
      Google
    </span>
  </Link>
);

const NavigationLink = ({ to, label, icon: Icon, isActive }) => {
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

const AppsMenuButton = () => (
  <button className="p-2 rounded-full hover:bg-gray-hover" title="Google apps">
    <AppsIcon />
  </button>
);

const ProfileAvatar = () => (
  <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-medium cursor-pointer hover:shadow-md transition-shadow">
    A
  </div>
);

const LeftSection = () => (
  <div className="flex items-center space-x-6">
    <HamburgerButton />
    <LogoSection />
    <Navigation />
  </div>
);

const RightSection = () => (
  <div className="flex items-center space-x-2">
    <ThemeSelector />
    <AppsMenuButton />
    <ProfileAvatar />
  </div>
);

const Header = () => (
  <header className="bg-gray-bg border-b border-gray-border">
    <div className="flex items-center justify-between px-6 py-3">
      <LeftSection />
      <RightSection />
    </div>
  </header>
);

const MainContent = () => (
  <main className="flex-grow">
    <Outlet />
  </main>
);

// Main DefaultLayout component
function DefaultLayout() {
  return (
    <div className="min-h-screen bg-gray-bg flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
