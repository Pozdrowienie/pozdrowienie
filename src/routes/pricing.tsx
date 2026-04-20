import { createFileRoute } from "@tanstack/react-router";
import { specialists } from "@/data/specialists";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Gabinet Zdrowia Psychicznego" },
      { name: "description", content: "Transparent pricing for psychiatric, psychological, therapy and sexology consultations." },
      { property: "og:title", content: "Pricing — Gabinet Zdrowia Psychicznego" },
      { property: "og:description", content: "Transparent consultation pricing." },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Pricing</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Transparent, simple pricing</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          All consultations are by appointment. Payment by card, transfer or cash.
        </p>
      </div>

      <div className="mt-14 space-y-8">
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
  );
}
