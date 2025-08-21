import { SpinnerIcon } from "../../../common/Icons";

const LoadingIndicator = () => (
  <div className="px-4 py-3 text-text-secondary text-center flex items-center justify-center">
    <SpinnerIcon className="mr-2 w-4 h-4" />
    Searching airports...
  </div>
);

export default LoadingIndicator;
