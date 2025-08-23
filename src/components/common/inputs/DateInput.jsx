import FeatureDateInput from "../../features/date/DateInput";

// Wrapper component for backward compatibility
const DateInput = (props) => {
  return <FeatureDateInput {...props} />;
};

export default DateInput;