import AppsMenuButton from "./AppsMenuButton";
import ProfileAvatar from "./profile-section/ProfileAvatar";
import ThemeSelector from "./theme-section/ThemeSelector";

const RightSection = () => (
  <div className="flex items-center space-x-2">
    <ThemeSelector />
    <AppsMenuButton />
    <ProfileAvatar />
  </div>
);

export default RightSection;
