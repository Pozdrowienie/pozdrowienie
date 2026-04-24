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

      {/* Bold flowing mint + pink "wywijaski" — thick organic ribbons */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] w-full"
      >
        <defs>
          <linearGradient id="hero-mint" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7fc3b1" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#bfe0d4" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="hero-mint-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a8d6c5" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7fc3b1" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="hero-pink" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f9c5d2" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ef9bb0" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="hero-pink-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ef9bb0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f4b3c4" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Left mint — thick bold ribbons */}
        <path
          d="M-80,480 C180,360 380,560 720,420"
          fill="none"
          stroke="url(#hero-mint)"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path
          d="M-80,560 C220,500 440,620 720,500"
          fill="none"
          stroke="url(#hero-mint-2)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M-80,420 C160,300 360,500 700,360"
          fill="none"
          stroke="#7fc3b1"
          strokeOpacity="0.45"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Right pink — thick bold ribbons */}
        <path
          d="M720,420 C1040,560 1240,360 1520,500"
          fill="none"
          stroke="url(#hero-pink)"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path
          d="M720,500 C1020,620 1260,480 1520,580"
          fill="none"
          stroke="url(#hero-pink-2)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M700,360 C1040,500 1260,300 1520,440"
          fill="none"
          stroke="#ef9bb0"
          strokeOpacity="0.5"
          strokeWidth="6"
          strokeLinecap="round"
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
