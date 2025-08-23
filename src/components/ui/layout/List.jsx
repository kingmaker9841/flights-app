import { cn } from "../../../utils/cn";

const List = ({ children, className = "", ...props }) => {
  return (
    <div
      className={cn(
        "bg-white border border-gray-border rounded-lg shadow-sm overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const ListItem = ({
  children,
  onClick,
  hover = true,
  className = "",
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "px-4 py-3 border-b border-gray-border last:border-b-0",
        hover && "hover:bg-gray-hover cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

List.Item = ListItem;

export default List;