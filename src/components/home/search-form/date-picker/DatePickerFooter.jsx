const DatePickerFooter = ({ onClose }) => (
  <div className="flex items-center justify-end p-4 border-t border-gray-200">
    <button
      onClick={onClose}
      className="px-6 py-2 bg-blue text-white rounded-full text-sm font-medium hover:bg-blue-hover transition-colors duration-200"
    >
      Done
    </button>
  </div>
);

export default DatePickerFooter;
