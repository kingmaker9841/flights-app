import { cn } from "../../utils/cn";

// ExploreIcon,
// HotelIcon,
// HouseIcon,
// MapPinIcon,
// PlaneIcon,

export const MapPinIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

export const PlaneIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

export const TrainIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V7h5v3zm2 0V7h5v3h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

export const CircleIcon = ({
  className,
  size,
  color,
  strokeWidth = 2,
  "aria-label": ariaLabel = "Circle",
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    strokeWidth={strokeWidth}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <circle cx="12" cy="12" r="5" />
  </svg>
);

export const ChevronUpIcon = ({
  className,
  size,
  color,
  strokeWidth = 2,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-4 h-4", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    strokeWidth={strokeWidth}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6" />
  </svg>
);

export const ChevronLeftIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Previous",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-4 h-4 text-text-secondary", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

export const ChevronRightIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Next",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-4 h-4 text-text-secondary", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export const ChevronDownIcon = ({
  className,
  size,
  color,
  strokeWidth = 2,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-4 h-4", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    strokeWidth={strokeWidth}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

export const CloseIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Close",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5 text-text-secondary", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const PlusIcon = ({
  className,
  size,
  color,
  strokeWidth = 2,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    strokeWidth={strokeWidth}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
  </svg>
);

export const SearchIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Search",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5", className)}
    fill={color || "currentColor"}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

export const CalendarIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
);

export const SwapIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5", className)}
    fill={color || "currentColor"}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
  </svg>
);

export const BackArrowIcon = ({
  className = "w-5 h-5",
  color = "currentColor",
  ...props
}) => (
  <svg className={className} fill={color} viewBox="0 0 24 24" {...props}>
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
);

export const CheckIcon = ({
  className,
  size,
  color,
  strokeWidth = 2,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-4 h-4", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    strokeWidth={strokeWidth}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const SpinnerIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Loading",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("animate-spin w-4 h-4", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role="img"
    {...props}
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke={color || "currentColor"}
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill={color || "currentColor"}
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const HamburgerIcon = ({
  className,
  size,
  color,
  strokeWidth = 2,
  "aria-label": ariaLabel = "Menu",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-6 h-6 text-text-secondary", className)}
    fill="none"
    stroke={color || "currentColor"}
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export const GoogleLogoIcon = ({
  className,
  size,
  "aria-label": ariaLabel = "Google",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-6 h-6", className)}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path
      fill="#4285f4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34a853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#fbbc05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#ea4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

export const ExploreIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5 text-blue", className)}
    fill={color || "currentColor"}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" />
  </svg>
);

export const HotelIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5 text-blue", className)}
    fill={color || "currentColor"}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
  </svg>
);

export const HouseIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden = true,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5 text-blue", className)}
    fill={color || "currentColor"}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
  </svg>
);

export const AppsIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Google apps",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5 text-text-secondary", className)}
    fill={color || "currentColor"}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
  </svg>
);

export const LocationIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Location",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5 text-text-secondary", className)}
    viewBox="0 0 24 24"
    fill={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

export const MoonIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Theme",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5 text-text-secondary", className)}
    fill="none"
    stroke={color || "currentColor"}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

export const OneWayIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "One way",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5 text-gray flex-shrink-0", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 12h14m0 0l-4-4m4 4l-4 4"
    />
  </svg>
);

export const RoundTripIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Round trip",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5 text-gray flex-shrink-0", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 8h12m0 0l-4-4m4 4l-4 4M20 16H8m0 0l4 4m-4-4l4-4"
    />
  </svg>
);

export const MultiCityIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Multi-city",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-5 h-5 text-gray flex-shrink-0", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <g strokeDasharray="3 3">
      <path strokeWidth="2" strokeLinecap="round" d="M3 7h10" />
      <path strokeWidth="2" strokeLinecap="round" d="M11 12h10" />
      <path strokeWidth="2" strokeLinecap="round" d="M5 17h12" />
    </g>
  </svg>
);

export const PersonIcon = ({
  className,
  size,
  color,
  "aria-label": ariaLabel = "Passengers",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <svg
    className={cn("w-4 h-4 text-text-secondary", className)}
    viewBox="0 0 24 24"
    fill={color || "currentColor"}
    width={size}
    height={size}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    focusable={false}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export const MinusIcon = ({
  className,
  "aria-label": ariaLabel = "Decrease",
  "aria-hidden": ariaHidden = false,
  ...props
}) => (
  <span
    className={cn("text-lg leading-none", className)}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    role={ariaLabel ? "img" : undefined}
    {...props}
  >
    −
  </span>
);
