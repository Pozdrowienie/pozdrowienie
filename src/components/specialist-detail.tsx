import { Link } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { ArrowLeft, BookOpen, GraduationCap, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandHero } from "@/components/brand-hero";
import { BrandWaves } from "@/components/brand-waves";
import { telHref, type Specialist } from "@/data/specialists";

export function SpecialistDetail({ specialist: s }: { specialist: Specialist }) {
  const accent =
    s.space === "mind"
      ? {
          ring: "ring-mind/40",
          role: "text-mind",
          border: "border-mind/25",
          soft: "bg-mind-soft",
          dot: "bg-mind",
          icon: "bg-mind text-mind-foreground",
        }
      : {
          ring: "ring-body/45",
          role: "text-body",
          border: "border-body/25",
          soft: "bg-body-soft",
          dot: "bg-body",
          icon: "bg-body text-body-foreground",
        };

  const education = s.education?.length ? s.education : [s.role];
  const courses = s.courses?.length ? s.courses : s.methods;

  return (
    <>
      <BrandHero eyebrow="Specjalista" title={s.name} subtitle={s.role} height="short" />
      <BrandWaves className="-mt-px" />

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
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
          <aside className="lg:sticky lg:top-28">
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
              <p className="mt-2 font-serif text-2xl font-semibold text-brand-navy md:text-3xl">
                {s.name}
              </p>
            </div>

            <div className={`mt-8 rounded-3xl border ${accent.border} ${accent.soft} p-6 text-center shadow-sm`}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy/80">
                {s.space === "mind" ? "Zadzwoń i umów wizytę" : "Zadzwoń i zarezerwuj miejsce"}
              </p>
              <a
                href={telHref(s.phone)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-action px-6 py-4 text-base font-semibold text-action-foreground shadow-lg transition hover:bg-action/90"
              >
                <Phone className="h-5 w-5" />
                {s.phone}
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Specjalista osobiście odbiera telefon i ustala dogodny termin.
              </p>
            </div>
          </aside>

          <div className="space-y-10">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-brand-navy">O mnie</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                {s.about.split("\n\n").map((para) => (
                  <p key={para} className="whitespace-pre-line">{para}</p>
                ))}
              </div>
            </section>

            <InfoSection icon={GraduationCap} accent={accent} title="Wykształcenie" items={education} />
            <BrandWaves className="-my-2" />
            <InfoSection icon={BookOpen} accent={accent} title="Ukończone kursy" items={courses} />

            <section>
              <div className="flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent.icon}`}>
                  <Sparkles className="h-4 w-4" />
                </span>
                <h2 className="font-serif text-2xl font-semibold text-brand-navy">Specjalizacja</h2>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {s.specializations.map((item) => (
                  <li key={item} className={`flex items-start gap-3 rounded-xl border ${accent.border} bg-surface px-4 py-3 text-sm`}>
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-brand-navy">Cennik</h2>
              <div className={`mt-4 divide-y divide-border/60 rounded-2xl border ${accent.border} bg-surface`}>
                {s.pricing.map((p) => (
                  <div key={p.name} className="flex items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="font-medium">{p.name}</p>
                      {p.duration && <p className="text-xs text-muted-foreground">{p.duration}</p>}
                    </div>
                    <p className={`font-serif text-lg font-semibold ${accent.role}`}>{p.price}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 z-40 border-t border-border/70 bg-background/95 px-4 py-3 shadow-2xl backdrop-blur md:hidden">
        <a
          href={telHref(s.phone)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-action px-6 py-4 text-base font-semibold text-action-foreground shadow-lg transition hover:bg-action/90"
        >
          <Phone className="h-5 w-5" /> Zadzwoń: {s.phone}
        </a>
      </div>
    </>
  );
}

function InfoSection({
  icon: Icon,
  title,
  items,
  accent,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  items: string[];
  accent: { icon: string; border: string; dot: string };
}) {
  return (
    <section>
      <div className="flex items-center gap-3">
        <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent.icon}`}>
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="font-serif text-2xl font-semibold text-brand-navy">{title}</h2>
      </div>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className={`flex items-start gap-3 rounded-xl border ${accent.border} bg-surface px-4 py-3 text-sm`}>
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
