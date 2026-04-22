import building from "@/assets/building-sketch.png";

/**
 * Brand hero — light pastel-pink background with a delicate line-art
 * illustration of the PoZdrowienie building. Navy serif text.
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
    <section className={`relative isolate w-full overflow-hidden bg-blush ${h}`}>
      {/* Line-art building — soft, airy, right-aligned on desktop */}
      <img
        src={building}
        alt="PoZdrowienie — budynek w Bolesławcu"
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[58%] select-none object-contain object-right opacity-90 md:block"
      />
      {/* On mobile the sketch sits softly behind the text */}
      <img
        src={building}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-bottom opacity-25 md:hidden"
      />

      <div className="relative mx-auto flex max-w-6xl items-center px-6 py-20 md:py-28">
        <div className="max-w-xl text-brand-navy">
          {eyebrow && (
            <span className="inline-block rounded-full bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-navy backdrop-blur">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
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
