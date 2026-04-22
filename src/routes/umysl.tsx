import { createFileRoute } from "@tanstack/react-router";
import { mindSpecialists } from "@/data/specialists";
import { BrandWatermark } from "@/components/brand-watermark";
import { SpecialistCard } from "@/components/specialist-card";
import { BrandWaves } from "@/components/brand-waves";
import { Brain } from "lucide-react";

export const Route = createFileRoute("/umysl")({
  head: () => ({
    meta: [
      { title: "Przestrzeń umysłu — PoZdrowienie" },
      {
        name: "description",
        content:
          "Psycholog, psychiatra, psychoterapia w Bolesławcu. Profesjonalne wsparcie zdrowia psychicznego w PoZdrowieniu.",
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
            Psycholog, psychiatra, psychoterapia. Bezpieczna, dyskretna przestrzeń
            wsparcia dla Twojego zdrowia psychicznego.
          </p>
        </div>
      </section>

      <BrandWaves />

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <BrandWatermark position="bottom-right" size={440} opacity={0.06} />
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mindSpecialists.map((s) => (
            <SpecialistCard key={s.slug} s={s} />
          ))}
        </div>
      </section>
    </>
  );
}
