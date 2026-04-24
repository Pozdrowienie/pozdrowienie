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

      {/* Bold flowing mint + pink "wywijaski" — soft filled hills like the brand sheet */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] w-full"
      >
        <defs>
          <linearGradient id="hero-mint-fill" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#7fc3b1" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#bfe0d4" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="hero-mint-fill-2" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#a8d6c5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#cfe7dd" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="hero-pink-fill" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#ef9bb0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fadbe2" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="hero-pink-fill-2" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#f4b3c4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fde7ee" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Mint hill — back layer */}
        <path
          d="M-40,600 L-40,360 C180,260 420,420 760,340 L760,600 Z"
          fill="url(#hero-mint-fill-2)"
        />
        {/* Mint hill — front layer */}
        <path
          d="M-40,600 L-40,440 C200,360 440,500 780,420 L780,600 Z"
          fill="url(#hero-mint-fill)"
        />

        {/* Pink hill — back layer */}
        <path
          d="M1480,600 L1480,360 C1240,260 1000,420 660,340 L660,600 Z"
          fill="url(#hero-pink-fill-2)"
        />
        {/* Pink hill — front layer */}
        <path
          d="M1480,600 L1480,440 C1240,360 1000,500 680,420 L680,600 Z"
          fill="url(#hero-pink-fill)"
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
