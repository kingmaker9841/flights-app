const CheckboxInput = ({ checked, onChange, className = "" }) => {
  const handleChange = (e) => {
    e.stopPropagation();
    onChange(e);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      onClick={handleClick}
      className={`mr-3 h-4 w-4 text-blue rounded border-gray-border ${className}`}
    />
  );
};

export default CheckboxInput;
