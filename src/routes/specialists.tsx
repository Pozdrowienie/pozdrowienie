import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useRef, useEffect } from "react";
import {
  specialists,
  categoryMeta,
  type SpecialistCategory,
} from "@/data/specialists";
import { BrandWatermark } from "@/components/brand-watermark";
import { CategoryCircles } from "@/components/category-circles";
import { SpecialistCard } from "@/components/specialist-card";
import { BrandWaves } from "@/components/brand-waves";

export const Route = createFileRoute("/specialists")({
  head: () => ({
    meta: [
      { title: "Specjaliści — PoZdrowienie" },
      {
        name: "description",
        content:
          "Zespół PoZdrowienia: psycholodzy, psychiatra, psychoterapeuta, joga, taniec intuicyjny i coaching. Zadzwoń i umów wizytę bezpośrednio.",
      },
      { property: "og:title", content: "Specjaliści PoZdrowienia" },
      {
        property: "og:description",
        content: "Poznaj nasz zespół — przestrzeń umysłu i przestrzeń ciała.",
      },
      { property: "og:url", content: "https://www.pozdrowienie.com.pl/specialists" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.pozdrowienie.com.pl/specialists" }],
  }),
  component: SpecialistsPage,
});

function SpecialistsPage() {
  const [active, setActive] = useState<SpecialistCategory | "all">("all");
  const listRef = useRef<HTMLDivElement | null>(null);
  const firstRender = useRef(true);

  const filtered = useMemo(() => {
    const list =
      active === "all"
        ? specialists
        : specialists.filter(
            (s) => s.category === active || s.extraCategories?.includes(active),
          );
    if (active !== "joga") return list;
    // W kółku „Joga" nauczycielki stoją obok siebie: Joanna tuż za Anią Marciniak.
    const anchor = list.findIndex((s) => s.slug === "anna-marciniak");
    const joanna = list.findIndex((s) => s.slug === "joanna-wolar");
    if (anchor === -1 || joanna === -1 || joanna === anchor + 1) return list;
    const out = [...list];
    const [moved] = out.splice(joanna, 1);
    out.splice(out.findIndex((s) => s.slug === "anna-marciniak") + 1, 0, moved);
    return out;
  }, [active]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [active]);

  const heading =
    active === "all" ? "Poznaj naszych specjalistów" : categoryMeta[active].label;

  return (
    <>
      <BrandWaves className="-mb-px" />

      <section className="relative mx-auto max-w-6xl px-6 pt-10 pb-6">
        <BrandWatermark position="bottom-right" size={500} opacity={0.05} />
        <div className="relative text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-navy">
            NASZ TEAM
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
            Specjaliści PoZdrowienia
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Wybierz kategorię, aby zobaczyć specjalistów.&nbsp;<br />
            Z każdym możesz umówić się bezpośrednio telefonicznie.
          </p>
        </div>

        <div className="mt-12">
          <CategoryCircles active={active} onSelect={setActive} />
        </div>
      </section>

      <section
        ref={listRef}
        className="relative mx-auto max-w-6xl scroll-mt-24 px-6 pb-20 pt-10"
      >
        <h2 className="mb-8 text-center font-serif text-2xl font-semibold md:text-3xl">
          {heading}
        </h2>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Brak specjalistów w tej kategorii.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <SpecialistCard key={s.slug} s={s} />
            ))}
          </div>
        )}
      </section>

      <BrandWaves flip />
    </>
  );
}
