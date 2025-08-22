import { CloseIcon } from "../../../../common/Icons";

const SelectedItemChips = ({ selectedItems, onRemove, className = "" }) => {
  if (!selectedItems || selectedItems.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {selectedItems.map((item) => (
        <div
          key={item.navigation?.entityId}
          className="inline-flex items-center bg-blue-50 text-primary text-xs px-2 py-1 rounded-full border border-blue-200 max-w-[120px]"
        >
          <span className="truncate">
            {item.presentation?.title || item.presentation?.suggestionTitle}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRemove(item);
            }}
            className="ml-1 hover:bg-blue-100 rounded-full p-0.5 flex-shrink-0"
            title="Remove"
          >
            <CloseIcon className="w-3 h-3" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedItemChips;
