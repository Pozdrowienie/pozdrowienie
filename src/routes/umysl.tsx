import { createFileRoute, Link } from "@tanstack/react-router";
import { mindSpecialists } from "@/data/specialists";
import { BrandWatermark } from "@/components/brand-watermark";
import { Brain } from "lucide-react";

export const Route = createFileRoute("/umysl")({
  head: () => ({
    meta: [
      { title: "Przestrzeń umysłu — PoZdrowienie" },
      {
        name: "description",
        content:
          "Psycholog, psychiatra, psychoterapia i seksuologia w Bolesławcu. Profesjonalne wsparcie zdrowia psychicznego w PoZdrowieniu.",
      },
      { property: "og:title", content: "Przestrzeń umysłu — PoZdrowienie" },
      {
        property: "og:description",
        content: "Psycholog, psychiatra, psychoterapia — wsparcie zdrowia psychicznego w Bolesławcu.",
      },
    ],
  }),
  component: MindPage,
});

function MindPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mind-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-mind text-mind-foreground shadow-md">
            <Brain className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold text-mind md:text-5xl">
            Przestrzeń umysłu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Psycholog, psychiatra, psychoterapia i seksuologia. Bezpieczna, dyskretna
            przestrzeń wsparcia dla Twojego zdrowia psychicznego.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <BrandWatermark position="bottom-right" size={440} opacity={0.06} />
        <div className="relative grid gap-8 md:grid-cols-2">
          {mindSpecialists.map((s) => (
            <Link
              key={s.slug}
              to="/specialists/$slug"
              params={{ slug: s.slug }}
              className="group flex items-center gap-6 rounded-3xl border border-mind/20 bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-mind/30">
                <img
                  src={s.image}
                  alt={s.name}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-mind">
                  {s.role}
                </p>
                <h2 className="mt-1 font-serif text-2xl font-semibold">{s.name}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.about}</p>
                <span className="mt-3 inline-block text-sm font-medium text-mind group-hover:underline">
                  Zobacz profil →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
