import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import type { Specialist } from "@/data/specialists";
import { telHref } from "@/data/specialists";

export function SpecialistCard({ s }: { s: Specialist }) {
  const accent =
    s.space === "mind"
      ? {
          ring: "ring-mind/40",
          role: "text-mind",
          border: "border-mind/20",
          btn: "bg-mind text-mind-foreground hover:bg-mind/90",
        }
      : {
          ring: "ring-body/45",
          role: "text-body",
          border: "border-body/25",
          btn: "bg-body text-body-foreground hover:bg-body/90",
        };

  return (
    <article
      className={`group flex flex-col items-center rounded-3xl border bg-surface p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${accent.border}`}
    >
      <Link
        to="/specialists/$slug"
        params={{ slug: s.slug }}
        className="flex flex-col items-center"
      >
        <div className={`h-32 w-32 overflow-hidden rounded-full ring-2 ${accent.ring}`}>
          <img
            src={s.image}
            alt={s.name}
            width={512}
            height={512}
            loading="lazy"
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <p
          className={`mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] ${accent.role}`}
        >
          {s.role}
        </p>
        <h3 className="mt-1 font-serif text-xl font-semibold">{s.name}</h3>
      </Link>

      <a
        href={telHref(s.phone)}
        className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition ${accent.btn}`}
      >
        <Phone className="h-4 w-4" />
        Zadzwoń i zarezerwuj miejsce
      </a>
      <a
        href={telHref(s.phone)}
        className="mt-2 text-xs font-medium text-muted-foreground hover:text-foreground"
      >
        {s.phone}
      </a>
    </article>
  );
}
