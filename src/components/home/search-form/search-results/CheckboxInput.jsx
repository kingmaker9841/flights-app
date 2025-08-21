const CheckboxInput = ({ checked, onChange, className = "" }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={onChange}
    className={`mr-3 h-4 w-4 text-blue rounded border-gray-border ${className}`}
  />
);

export default CheckboxInput;
