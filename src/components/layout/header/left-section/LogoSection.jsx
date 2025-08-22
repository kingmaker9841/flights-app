import { GoogleLogoIcon } from "../../../common/Icons";
import { Link } from "react-router";

const LogoSection = () => (
  <Link to="/" className="flex items-center space-x-2">
    <GoogleLogoIcon />
    <span className="text-xl text-text-primary font-normal hidden min-[380px]:block">
      Google
    </span>
  </Link>
);

export default LogoSection;
