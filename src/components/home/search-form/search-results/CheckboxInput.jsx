import { Checkbox } from "../../../ui";

const CheckboxInput = ({ checked, onChange, className = "" }) => {
  const handleChange = (e) => {
    e.stopPropagation();
    onChange(e);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      onClick={handleClick}
      className={`mr-3 ${className}`}
    />
  );
};

export default CheckboxInput;
