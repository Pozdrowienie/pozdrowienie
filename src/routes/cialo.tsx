import { createFileRoute } from "@tanstack/react-router";
import { bodySpecialists } from "@/data/specialists";
import { BrandWatermark } from "@/components/brand-watermark";
import { SpecialistCard } from "@/components/specialist-card";
import { BrandWaves } from "@/components/brand-waves";
import { Flower2 } from "lucide-react";

export const Route = createFileRoute("/cialo")({
  head: () => ({
    meta: [
      { title: "Przestrzeń ciała — PoZdrowienie" },
      {
        name: "description",
        content:
          "Hatha Joga i Taniec Intuicyjny w Bolesławcu. Praca z ciałem, oddechem i ekspresją w PoZdrowieniu.",
      },
      { property: "og:title", content: "Przestrzeń ciała — PoZdrowienie" },
      {
        property: "og:description",
        content: "Hatha Joga i Taniec Intuicyjny — uważność i ekspresja przez ciało.",
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
            Hatha Joga i Taniec Intuicyjny. Świadomy ruch, oddech i ekspresja jako droga
            do uważności, ugruntowania i radości.
          </p>
        </div>
      </section>

      <BrandWaves />

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <BrandWatermark position="bottom-right" size={440} opacity={0.06} />
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bodySpecialists.map((s) => (
            <SpecialistCard key={s.slug} s={s} />
          ))}
        </div>
      </section>
    </>
  );
}
