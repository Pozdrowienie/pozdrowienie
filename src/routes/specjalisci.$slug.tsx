import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone, GraduationCap, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandHero } from "@/components/brand-hero";
import { getSpecialist, telHref, type Specialist } from "@/data/specialists";

export const Route = createFileRoute("/specjalisci/$slug")({
  loader: ({ params }): { specialist: Specialist } => {
    const specialist = getSpecialist(params.slug);
    if (!specialist) throw notFound();
    return { specialist };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.specialist.name} — ${loaderData.specialist.role} | PoZdrowienie` },
          { name: "description", content: loaderData.specialist.about.slice(0, 155) },
          { property: "og:title", content: `${loaderData.specialist.name} — ${loaderData.specialist.role}` },
          { property: "og:description", content: loaderData.specialist.about.slice(0, 155) },
          { property: "og:image", content: loaderData.specialist.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-md py-20 text-center">
      <h1 className="text-3xl font-semibold">Nie znaleziono specjalisty</h1>
      <Button asChild className="mt-6 rounded-full">
        <Link to="/specialists">Wróć do listy specjalistów</Link>
      </Button>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-md py-20 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: SpecialistProfile,
});

function SpecialistProfile() {
  const { specialist: s } = Route.useLoaderData() as { specialist: Specialist };

  const accent =
    s.space === "mind"
      ? {
          ring: "ring-mind/40",
          role: "text-mind",
          border: "border-mind/25",
          btn: "bg-mind text-mind-foreground hover:bg-mind/90",
          soft: "bg-mind-soft",
          dot: "bg-mind",
        }
      : {
          ring: "ring-body/45",
          role: "text-body",
          border: "border-body/25",
          btn: "bg-body text-body-foreground hover:bg-body/90",
          soft: "bg-body-soft",
          dot: "bg-body",
        };

  return (
    <>
      <BrandHero eyebrow="Specjalista" title={s.name} subtitle={s.role} height="short" />

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <Button
          asChild
          variant="ghost"
          className="mb-8 -ml-3 rounded-full text-muted-foreground hover:text-brand-navy"
        >
          <Link to="/specialists">
            <ArrowLeft className="mr-2 h-4 w-4" /> Wróć do listy specjalistów
          </Link>
        </Button>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
          {/* Left: large circular photo + CTA */}
          <div className="lg:sticky lg:top-28">
            <div className="flex flex-col items-center text-center">
              <div
                className={`h-64 w-64 overflow-hidden rounded-full border-4 border-surface shadow-xl ring-4 md:h-72 md:w-72 ${accent.ring}`}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover"
                  style={{
                    objectPosition: s.imagePosition ?? "center",
                    transform: s.imageScale ? `scale(${s.imageScale})` : undefined,
                    transformOrigin: s.imageTransformOrigin ?? s.imagePosition ?? "center",
                  }}
                />
              </div>
              <p className={`mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] ${accent.role}`}>
                {s.role}
              </p>
              <h1 className="mt-2 font-serif text-2xl font-semibold text-brand-navy md:text-3xl">
                {s.name}
              </h1>
            </div>

            {/* CTA card */}
            <div
              className={`mt-8 rounded-3xl border ${accent.border} ${accent.soft} p-6 text-center shadow-sm`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy/80">
                {s.space === "mind" ? "Zadzwoń i umów wizytę" : "Zadzwoń i zarezerwuj miejsce"}
              </p>
              <a
                href={telHref(s.phone)}
                className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-sm transition ${accent.btn}`}
              >
                <Phone className="h-4 w-4" />
                {s.phone}
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Specjalista osobiście odbiera telefon i ustala dogodny termin.
              </p>
              <Link
                to="/pricing"
                className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border ${accent.border} bg-surface px-6 py-2.5 text-sm font-semibold text-brand-navy transition hover:bg-surface/70`}
              >
                Zobacz Cennik
              </Link>
            </div>
          </div>

          {/* Right: about + placeholder sections */}
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-brand-navy">O mnie</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                {s.about.split("\n\n").map((para, i) => (
                  <p key={i} className="whitespace-pre-line">{para}</p>
                ))}
              </div>
            </div>

            <PlaceholderSection
              icon={GraduationCap}
              accent={accent}
              title="Wykształcenie"
              placeholder="Tu znajdzie się informacja o wykształceniu specjalisty — uczelnie, kierunki, tytuły naukowe i zawodowe."
            />

            <PlaceholderSection
              icon={BookOpen}
              accent={accent}
              title="Ukończone kursy"
              placeholder="Lista ukończonych kursów, szkoleń i certyfikatów uzupełniających kwalifikacje zawodowe."
            />

            <div>
              <div className="flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent.btn}`}>
                  <Sparkles className="h-4 w-4" />
                </span>
                <h2 className="font-serif text-2xl font-semibold text-brand-navy">Specjalizacja</h2>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {s.specializations.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 rounded-xl border ${accent.border} bg-surface px-4 py-3 text-sm`}
                  >
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Dodatkowe obszary specjalizacji oraz szczegółowy zakres pracy uzupełnimy
                wkrótce.
              </p>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-brand-navy">Cennik</h2>
              <div className={`mt-4 divide-y divide-border/60 rounded-2xl border ${accent.border} bg-surface`}>
                {s.pricing.map((p) => (
                  <div key={p.name} className="flex items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="font-medium">{p.name}</p>
                      {p.duration && (
                        <p className="text-xs text-muted-foreground">{p.duration}</p>
                      )}
                    </div>
                    <p className={`font-serif text-lg font-semibold ${accent.role}`}>
                      {p.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/specialists">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Wróć do listy specjalistów
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PlaceholderSection({
  icon: Icon,
  title,
  placeholder,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  placeholder: string;
  accent: { btn: string; border: string };
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent.btn}`}>
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="font-serif text-2xl font-semibold text-brand-navy">{title}</h2>
      </div>
      <div
        className={`mt-4 rounded-2xl border border-dashed ${accent.border} bg-surface/60 px-5 py-6 text-sm italic text-muted-foreground`}
      >
        {placeholder}
      </div>
    </div>
  );
}
