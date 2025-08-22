import LeftSection from "./left-section/LeftSection";
import RightSection from "./right-section/RightSection";

const Header = () => (
  <header className="bg-gray-bg border-b border-gray-border">
    <div className="flex items-center justify-between px-6 py-3">
      <LeftSection />
      <RightSection />
    </div>
  </header>
);

export default Header;
