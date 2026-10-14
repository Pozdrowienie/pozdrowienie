import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ArrowUpRight, Phone, Leaf, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSpecialist, telHref } from "@/data/specialists";
import { weeklySchedule, type ScheduleEntry } from "@/data/schedule";

const description = "Grafik PoZdrowienia w Bolesławcu: dni przyjęć psychologa, psychoterapeuty i psychiatry, joga, taniec intuicyjny i męskie kręgi. Telefony i cennik.";

export const Route = createFileRoute("/grafik")({
  head: () => ({
    meta: [
      { title: "Grafik przyjęć i zajęć — PoZdrowienie Bolesławiec" },
      { name: "description", content: description },
      { property: "og:title", content: "Grafik przyjęć i zajęć — PoZdrowienie Bolesławiec" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pozdrowienie.com.pl/grafik" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.pozdrowienie.com.pl/grafik" }],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
      <header className="border-b border-border pb-8">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-mind">
          <CalendarDays className="size-5" /> PoZdrowienie · Bolesławiec
        </div>
        <h1 className="font-serif text-4xl font-semibold tracking-normal text-brand-navy md:text-5xl">Grafik</h1>
        <p className="mt-4 text-lg text-muted-foreground">Przyjęcia specjalistów i zajęcia w tygodniu</p>
        <p className="mt-2 text-sm text-muted-foreground">Godziny i dostępność terminów ustalisz bezpośrednio z osobą prowadzącą.</p>
        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <span className="flex items-center gap-2 text-mind"><Brain className="size-4" />Przestrzeń umysłu</span>
          <span className="flex items-center gap-2 text-body"><Leaf className="size-4" />Przestrzeń ciała</span>
        </div>
      </header>
      {weeklySchedule.map(({ day, entries }, index) => (
        <section key={day} aria-label={day} className="grid gap-6 border-b border-border py-8 md:grid-cols-[190px_1fr] md:gap-10 md:py-10">
          <div className="flex items-center gap-3 md:items-start">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-mind" aria-hidden="true">0{index + 1}</span>
            <h2 className="pt-1 font-serif text-2xl font-semibold tracking-normal text-brand-navy">{day}</h2>
          </div>
          <div className="grid items-start gap-4 sm:grid-cols-2">
            {entries.map((entry) => <ScheduleCard key={`${day}-${entry.service}`} entry={entry} />)}
          </div>
        </section>
      ))}
    </div>
  );
}

function ScheduleCard({ entry }: { entry: ScheduleEntry }) {
  const people = entry.specialists.flatMap((slug) => {
    const person = getSpecialist(slug);
    return person ? [person] : [];
  });
  const isBody = entry.space === "body";
  return (
    <article className={`min-w-0 rounded-lg border border-border border-t-4 bg-surface p-5 ${isBody ? "border-t-body" : "border-t-mind"}`}>
      <h3 className={`font-serif text-xl font-semibold tracking-normal ${isBody ? "text-body" : "text-mind"}`}>{entry.service}</h3>
      {entry.note && <p className="mt-2 text-sm text-muted-foreground">{entry.note}</p>}
      <div className="mt-5 space-y-5">
        {people.map((person) => (
          <div key={person.slug}>
            <Link to="/specjalisci/$slug" params={{ slug: person.slug }} className="flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary">
              <span className="size-12 shrink-0 overflow-hidden rounded-full bg-surface-soft ring-1 ring-border">
                <img src={person.image} alt="" loading="lazy" className="size-full object-cover" style={{ objectPosition: person.imagePosition ?? "center", transform: person.imageScale ? `scale(${person.imageScale})` : undefined, transformOrigin: person.imageTransformOrigin ?? person.imagePosition ?? "center" }} />
              </span>
              <span>{person.name.trim()}</span>
            </Link>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Button asChild size="sm" className="bg-action text-action-foreground hover:bg-action/90">
                <a href={telHref(person.phone)} aria-label={`Zadzwoń: ${person.name.trim()}, ${person.phone}`}><Phone />{person.phone}</a>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link to="/pricing" hash={person.slug} aria-label={`Cennik: ${person.name.trim()}`}>Cennik<ArrowUpRight /></Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}