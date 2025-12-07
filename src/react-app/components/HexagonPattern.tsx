interface HexagonPatternProps {
  id?: string;
  opacity?: number;
}

const HexagonPattern = ({ id = 'hexagons', opacity = 0.08 }: HexagonPatternProps) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        maskImage: 'radial-gradient(ellipse 90% 80% at center, transparent 0%, black 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at center, transparent 0%, black 100%)'
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={id} width="60" height="104" patternUnits="userSpaceOnUse">
            <path d="M30 2 L55 17 L55 47 L30 62 L5 47 L5 17 Z" fill="none" stroke="white" strokeWidth="1" />
            <path d="M60 54 L85 69 L85 99 L60 114 L35 99 L35 69 Z" fill="none" stroke="white" strokeWidth="1" />
            <path d="M0 54 L25 69 L25 99 L0 114 L-25 99 L-25 69 Z" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
};

export default HexagonPattern;
