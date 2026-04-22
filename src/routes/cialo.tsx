import { createFileRoute, Link } from "@tanstack/react-router";
import { bodySpecialists } from "@/data/specialists";
import { BrandWatermark } from "@/components/brand-watermark";
import { Flower2 } from "lucide-react";

export const Route = createFileRoute("/cialo")({
  head: () => ({
    meta: [
      { title: "Przestrzeń ciała — PoZdrowienie" },
      {
        name: "description",
        content:
          "Hatha Joga i Terapia Tańcem i Ruchem w Bolesławcu. Praca z ciałem, oddechem i ekspresją w PoZdrowieniu.",
      },
      { property: "og:title", content: "Przestrzeń ciała — PoZdrowienie" },
      {
        property: "og:description",
        content: "Hatha Joga i Terapia Tańcem i Ruchem — uważność i ekspresja przez ciało.",
      },
    ],
  }),
  component: BodyPage,
});

function BodyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-body-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-body text-body-foreground shadow-md">
            <Flower2 className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold text-body md:text-5xl">
            Przestrzeń ciała
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Hatha Joga i Terapia Tańcem i Ruchem. Świadomy ruch, oddech i ekspresja jako
            droga do uważności, ugruntowania i radości.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <BrandWatermark position="bottom-right" size={440} opacity={0.06} />
        <div className="relative grid gap-8 md:grid-cols-2">
          {bodySpecialists.map((s) => (
            <Link
              key={s.slug}
              to="/specialists/$slug"
              params={{ slug: s.slug }}
              className="group flex items-center gap-6 rounded-3xl border border-body/25 bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-body/40">
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
                <p className="text-xs font-semibold uppercase tracking-wider text-body">
                  {s.role}
                </p>
                <h2 className="mt-1 font-serif text-2xl font-semibold">{s.name}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.about}</p>
                <span className="mt-3 inline-block text-sm font-medium text-body group-hover:underline">
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
