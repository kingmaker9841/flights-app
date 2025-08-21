export const HeroWaves = ({ className = "w-full h-full", ...props }) => (
  <svg
    viewBox="0 0 800 400"
    className={className}
    preserveAspectRatio="none"
    {...props}
  >
    <g fill="#E3ECFF">
      <path d="M0,280 L120,200 L240,260 L420,180 L640,260 L800,200 L800,400 L0,400 Z" />
    </g>
    <g fill="#CFE0FF">
      <path d="M0,310 L160,240 L280,300 L460,220 L680,300 L800,260 L800,400 L0,400 Z" />
    </g>
    <g fill="#B9D0FF">
      <path d="M0,340 L200,280 L320,330 L520,260 L740,320 L800,300 L800,400 L0,400 Z" />
    </g>
  </svg>
);
