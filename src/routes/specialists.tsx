import { createFileRoute, Link } from "@tanstack/react-router";
import { mindSpecialists, bodySpecialists, type Specialist } from "@/data/specialists";
import { Brain, Flower2 } from "lucide-react";

export const Route = createFileRoute("/specialists")({
  head: () => ({
    meta: [
      { title: "Specjaliści — PoZdrowienie" },
      {
        name: "description",
        content:
          "Zespół PoZdrowienia: psycholodzy, psychiatra, psychoterapeuci, seksuolog, instruktorka jogi i terapeutka tańcem.",
      },
      { property: "og:title", content: "Specjaliści PoZdrowienia" },
      {
        property: "og:description",
        content: "Poznaj nasz zespół — przestrzeń umysłu i przestrzeń ciała.",
      },
    ],
  }),
  component: SpecialistsPage,
});

function SpecialistsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-navy">
          NASZ TEAM
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
          Specjaliści PoZdrowienia
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Multidyscyplinarny zespół oddany Twojemu dobrostanowi.
        </p>
      </div>

      <div className="mt-16">
        <SectionHeader
          icon={<Brain className="h-5 w-5" />}
          title="Przestrzeń umysłu"
          accent="mind"
        />
        <Grid items={mindSpecialists} accent="mind" />
      </div>

      <div className="mt-20">
        <SectionHeader
          icon={<Flower2 className="h-5 w-5" />}
          title="Przestrzeń ciała"
          accent="body"
        />
        <Grid items={bodySpecialists} accent="body" />
      </div>
    </section>
  );
}

function SectionHeader({
  icon,
  title,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  accent: "mind" | "body";
}) {
  const colorClass = accent === "mind" ? "text-mind bg-mind/10" : "text-body bg-body/10";
  const titleClass = accent === "mind" ? "text-mind" : "text-body";
  return (
    <div className="flex items-center gap-3">
      <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${colorClass}`}>
        {icon}
      </span>
      <h2 className={`font-serif text-2xl font-semibold ${titleClass}`}>{title}</h2>
    </div>
  );
}

function Grid({ items, accent }: { items: Specialist[]; accent: "mind" | "body" }) {
  const ring = accent === "mind" ? "ring-mind/30" : "ring-body/40";
  const roleColor = accent === "mind" ? "text-mind" : "text-body";
  const border = accent === "mind" ? "border-mind/20" : "border-body/25";
  return (
    <div className="mt-6 grid gap-8 md:grid-cols-2">
      {items.map((s) => (
        <Link
          key={s.slug}
          to="/specialists/$slug"
          params={{ slug: s.slug }}
          className={`group flex items-center gap-6 rounded-3xl border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${border}`}
        >
          <div className={`h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ${ring}`}>
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
            <p className={`text-xs font-semibold uppercase tracking-wider ${roleColor}`}>
              {s.role}
            </p>
            <h3 className="mt-1 font-serif text-2xl font-semibold">{s.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.about}</p>
            <span className={`mt-3 inline-block text-sm font-medium group-hover:underline ${roleColor}`}>
              Zobacz profil →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
