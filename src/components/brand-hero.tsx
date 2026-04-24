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

      {/* Layered organic hills — mint left, pink right (matches brand sheet) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] w-full"
      >
        <defs>
          {/* Mint — three tonal stops, vertical for soft top fade */}
          <linearGradient id="hero-mint-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bfe0d4" stopOpacity="0" />
            <stop offset="60%" stopColor="#a8d2c3" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7fb8a4" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="hero-mint-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cfe7dd" stopOpacity="0" />
            <stop offset="55%" stopColor="#b8dccd" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8ec3b1" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="hero-mint-c" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d6ebe2" stopOpacity="0" />
            <stop offset="100%" stopColor="#a8d2c3" stopOpacity="0.45" />
          </linearGradient>

          {/* Pink — three tonal stops */}
          <linearGradient id="hero-pink-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fadbe2" stopOpacity="0" />
            <stop offset="55%" stopColor="#f4b3c4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e892a8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hero-pink-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde7ee" stopOpacity="0" />
            <stop offset="55%" stopColor="#f6c2d0" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ef9bb0" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="hero-pink-c" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fdeef2" stopOpacity="0" />
            <stop offset="100%" stopColor="#f4b3c4" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* MINT LEFT — back hill (tall, broad) */}
        <path
          d="M-40,320 L-40,150 C140,90 320,170 520,140 C620,125 700,160 760,180 L760,320 Z"
          fill="url(#hero-mint-c)"
        />
        {/* MINT — mid hill */}
        <path
          d="M-40,320 L-40,200 C160,140 340,210 540,190 C640,180 720,210 760,225 L760,320 Z"
          fill="url(#hero-mint-b)"
        />
        {/* MINT — front hill (darker, lower) */}
        <path
          d="M-40,320 L-40,235 C180,185 360,250 560,235 C660,228 730,245 760,255 L760,320 Z"
          fill="url(#hero-mint-a)"
        />

        {/* PINK RIGHT — back hill */}
        <path
          d="M1480,320 L1480,140 C1300,80 1100,170 900,140 C800,125 720,160 680,180 L680,320 Z"
          fill="url(#hero-pink-c)"
        />
        {/* PINK — mid hill */}
        <path
          d="M1480,320 L1480,195 C1280,135 1080,205 880,190 C780,180 710,210 680,225 L680,320 Z"
          fill="url(#hero-pink-b)"
        />
        {/* PINK — front hill */}
        <path
          d="M1480,320 L1480,230 C1260,180 1080,245 880,235 C780,228 710,245 680,255 L680,320 Z"
          fill="url(#hero-pink-a)"
        />
      </svg>

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
