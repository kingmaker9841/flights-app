import HamburgerButton from "./HamburgerButton";
import LogoSection from "./LogoSection";
import Navigation from "./navigation-items-section/Navigation";

const LeftSection = () => (
  <div className="flex items-center space-x-6">
    <HamburgerButton />
    <LogoSection />
    <Navigation />
  </div>
);

export default LeftSection;
