import logo from "@/assets/logo.png";

/**
 * Subtle, semi-transparent logo watermark. Pointer-events disabled so it
 * never blocks interactions. Drop it inside any `relative` container.
 */
export function BrandWatermark({
  className = "",
  size = 420,
  opacity = 0.06,
  position = "bottom-right",
}: {
  className?: string;
  size?: number;
  opacity?: number;
  position?: "bottom-right" | "center" | "bottom-left";
}) {
  const pos =
    position === "center"
      ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      : position === "bottom-left"
        ? "bottom-6 left-6"
        : "bottom-6 right-6";
  return (
    <img
      src={logo}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      style={{ width: size, height: size, opacity }}
      className={`pointer-events-none absolute -z-0 select-none ${pos} ${className}`}
    />
  );
}
