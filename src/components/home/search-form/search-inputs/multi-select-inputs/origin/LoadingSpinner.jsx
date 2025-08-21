import { SpinnerIcon } from "../../../../../common/Icons";

const LoadingSpinner = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
      <SpinnerIcon className="w-4 h-4 text-text-secondary animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
