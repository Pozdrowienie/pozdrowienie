/**
 * Decorative wavy divider in brand pink + mint, inspired by the PoZdrowienie
 * brand sheet. Place at the top or bottom of a section.
 */
export function BrandWaves({
  flip = false,
  className = "",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="block h-[80px] w-full md:h-[120px]"
      >
        <defs>
          <linearGradient id="bw-mint" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#bfe0d4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7fc3b1" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="bw-pink" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f9c5d2" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ef9bb0" stopOpacity="0.65" />
          </linearGradient>
        </defs>
        {/* Mint left half */}
        <path
          d="M0,80 C180,20 380,120 720,70 L720,140 L0,140 Z"
          fill="url(#bw-mint)"
        />
        <path
          d="M0,100 C200,60 420,130 720,90 L720,140 L0,140 Z"
          fill="#7fc3b1"
          opacity="0.35"
        />
        {/* Pink right half */}
        <path
          d="M720,70 C1060,120 1260,20 1440,80 L1440,140 L720,140 Z"
          fill="url(#bw-pink)"
        />
        <path
          d="M720,90 C1020,130 1240,60 1440,100 L1440,140 L720,140 Z"
          fill="#ef9bb0"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
