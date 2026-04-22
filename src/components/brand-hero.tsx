import building from "@/assets/building.png";

/**
 * Full-width brand hero: building photo + organic pink/green wave overlays
 * + clean white text. Inspired by the PoZdrowienie brand sheet.
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
      ? "min-h-[60vh] md:min-h-[72vh]"
      : "min-h-[40vh] md:min-h-[48vh]";
  return (
    <section
      className={`relative isolate w-full overflow-hidden ${h} flex items-center justify-center text-center text-white`}
    >
      {/* Building image */}
      <img
        src={building}
        alt="PoZdrowienie — budynek w Bolesławcu"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      {/* Soft dark wash for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/55 via-brand-navy/35 to-brand-navy/65" />

      {/* Organic curved waves (pink + green) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full -z-10"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bh-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ef4f7a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f9a8b8" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="bh-green" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0e7c66" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#7fc3b1" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Pink wave — bottom right sweep */}
        <path
          d="M1440,820 C1180,720 1100,520 1260,360 C1380,240 1460,180 1500,80 L1500,820 Z"
          fill="url(#bh-pink)"
        />
        <path
          d="M1440,820 C1220,760 1080,640 1180,520 C1260,420 1340,400 1440,360 L1500,820 Z"
          fill="#ec4d77"
          opacity="0.35"
        />

        {/* Green wave — left sweep */}
        <path
          d="M-60,820 C120,720 220,560 120,400 C40,280 -60,200 -60,80 L-60,820 Z"
          fill="url(#bh-green)"
        />
        <path
          d="M-60,820 C140,760 260,660 200,540 C160,460 60,440 -60,400 L-60,820 Z"
          fill="#0e7c66"
          opacity="0.30"
        />
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 py-20">
        {eyebrow && (
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] drop-shadow-md md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl font-serif text-xl text-white/95 drop-shadow md:text-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
