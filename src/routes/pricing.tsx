import { createFileRoute } from "@tanstack/react-router";
import { specialists, telHref } from "@/data/specialists";
import { BrandWatermark } from "@/components/brand-watermark";
import { BrandHero } from "@/components/brand-hero";
import { Phone } from "lucide-react";

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
      <BrandHero
        eyebrow="Cennik"
        title="CENNIK USŁUG"
        subtitle="Zadzwoń bezpośrednio do specjalisty, aby umówić wizytę."
        height="short"
      />

      <section className="relative mx-auto max-w-5xl px-6 py-20">
        <BrandWatermark position="bottom-right" size={460} opacity={0.07} />
        <div className="relative z-10 space-y-8">
          {specialists.map((s) => {
            const accent =
              s.space === "mind"
                ? { role: "text-mind", btn: "bg-action text-action-foreground hover:bg-action/90", price: "text-mind" }
                : { role: "text-body", btn: "bg-action text-action-foreground hover:bg-action/90", price: "text-body" };
            return (
              <div
                key={s.slug}
                className="rounded-2xl border border-border/60 bg-surface p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-full ring-1 ring-border/60">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        style={{
                          objectPosition: s.imagePosition ?? "center",
                          transform: s.imageScale ? `scale(${s.imageScale})` : undefined,
                          transformOrigin: s.imageTransformOrigin ?? s.imagePosition ?? "center",
                        }}
                      />
                    </div>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wider ${accent.role}`}>
                        {s.role}
                      </p>
                      <h2 className="font-serif text-xl font-semibold">{s.name}</h2>
                    </div>
                  </div>
                  <a
                    href={telHref(s.phone)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition ${accent.btn}`}
                  >
                    <Phone className="h-4 w-4" />
                    {s.phone}
                  </a>
                </div>
                <div className="mt-5 divide-y divide-border/60">
                  {s.pricing.map((p) => (
                    <div key={p.name} className="flex items-center justify-between py-3">
                      <div>
                        <p className="whitespace-pre-line font-medium">{p.name}</p>
                        <p className="whitespace-pre-line text-xs text-muted-foreground">{p.duration}</p>
                      </div>
                      <p className={`font-serif text-lg font-semibold ${accent.price}`}>{p.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
