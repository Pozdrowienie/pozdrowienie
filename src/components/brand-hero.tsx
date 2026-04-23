import building from "@/assets/building-sketch.png";

/**
 * Brand hero — crisp white background with a delicate pink radial blush
 * and softly floating mint + pink wavy lines. Line-art building sits
 * cleanly in the white space. Navy serif text.
 */
export function BrandHero({
  eyebrow,
  title,
  subtitle,
  height = "tall",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  height?: "tall" | "short";
}) {
  const h =
    height === "tall"
      ? "min-h-[60vh] md:min-h-[68vh]"
      : "min-h-[40vh] md:min-h-[46vh]";
  return (
    <section
      className={`relative isolate w-full overflow-hidden bg-white ${h}`}
    >
      {/* Soft pink radial blush from bottom corners — background texture only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 0% 100%, color-mix(in oklab, var(--blush) 85%, transparent) 0%, transparent 60%), radial-gradient(ellipse 70% 55% at 100% 100%, color-mix(in oklab, var(--blush) 70%, transparent) 0%, transparent 60%), radial-gradient(ellipse 90% 50% at 50% 0%, #ffffff 0%, transparent 70%)",
        }}
      />

      {/* Floating mint + pink wavy lines — bottom corners, very light */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] w-full"
      >
        <defs>
          <linearGradient id="hero-mint" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#bfe0d4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7fc3b1" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="hero-pink" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f9c5d2" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ef9bb0" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {/* Left mint ribbons */}
        <path
          d="M-50,520 C220,420 380,560 700,470"
          fill="none"
          stroke="url(#hero-mint)"
          strokeWidth="2.5"
        />
        <path
          d="M-50,560 C260,470 420,590 720,510"
          fill="none"
          stroke="#7fc3b1"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        {/* Right pink ribbons */}
        <path
          d="M740,500 C1020,580 1240,440 1500,540"
          fill="none"
          stroke="url(#hero-pink)"
          strokeWidth="2.5"
        />
        <path
          d="M760,540 C1040,610 1260,490 1500,580"
          fill="none"
          stroke="#ef9bb0"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />
      </svg>

      {/* Line-art building — desktop right side, mobile faint backdrop */}
      <img
        src={building}
        alt="PoZdrowienie — budynek w Bolesławcu"
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[58%] select-none object-contain object-right opacity-85 mix-blend-multiply md:block"
      />
      <img
        src={building}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-bottom opacity-15 mix-blend-multiply md:hidden"
      />

      <div className="relative mx-auto flex max-w-6xl items-center px-6 py-20 md:py-28">
        <div className="max-w-xl text-brand-navy">
          {eyebrow && (
            <span className="inline-block rounded-full bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-navy shadow-sm ring-1 ring-brand-navy/10 backdrop-blur">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-brand-navy md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 font-serif text-xl text-brand-navy/85 md:text-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
