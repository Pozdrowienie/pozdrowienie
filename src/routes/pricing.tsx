import { createFileRoute } from "@tanstack/react-router";
import { specialists } from "@/data/specialists";
import building from "@/assets/building.png";
import logo from "@/assets/logo.png";
import { BrandWatermark } from "@/components/brand-watermark";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Cennik usług — PoZdrowienie" },
      { name: "description", content: "Przejrzysty cennik konsultacji psychiatrycznych, psychologicznych, terapii i jogi w PoZdrowieniu." },
      { property: "og:title", content: "Cennik usług — PoZdrowienie" },
      { property: "og:description", content: "Przejrzysty cennik konsultacji w PoZdrowieniu." },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      {/* Subpage hero with building + logo */}
      <section className="relative isolate w-full overflow-hidden text-white">
        <img
          src={building}
          alt="PoZdrowienie — budynek"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/70 via-brand-navy/45 to-brand-navy/75" />
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center">
          <img
            src={logo}
            alt="PoZdrowienie"
            width={120}
            height={120}
            className="h-24 w-24 rounded-full bg-white/90 p-2 shadow-xl ring-2 ring-white/60"
          />
          <span className="mt-6 inline-block rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] backdrop-blur">
            Cennik
          </span>
          <h1 className="mt-4 font-serif text-4xl font-semibold drop-shadow md:text-6xl">
            CENNIK USŁUG
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Wszystkie konsultacje odbywają się po wcześniejszym umówieniu. Płatność kartą,
            przelewem lub gotówką.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-20">
        <BrandWatermark position="bottom-right" size={460} opacity={0.07} />
        <div className="relative z-10 space-y-8">
          {specialists.map((s) => (
            <div key={s.slug} className="rounded-2xl border border-border/60 bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full ring-1 ring-border/60">
                  <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">{s.role}</p>
                  <h2 className="font-serif text-xl font-semibold">{s.name}</h2>
                </div>
              </div>
              <div className="mt-5 divide-y divide-border/60">
                {s.pricing.map((p) => (
                  <div key={p.name} className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.duration}</p>
                    </div>
                    <p className="font-serif text-lg font-semibold text-primary">{p.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
