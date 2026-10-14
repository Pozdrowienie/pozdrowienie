import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Clock, CalendarRange, Users, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSpecialist, telHref } from "@/data/specialists";

const description =
  "Terapia par i małżeństw w PoZdrowieniu w Bolesławcu — prowadzi ją zespół psychoterapeutów Karolina Ferensowicz i Marek Pisarski. Sesje 70-minutowe, koterapia, konsultacja pary 320 zł.";

export const Route = createFileRoute("/terapia-par")({
  head: () => ({
    meta: [
      { title: "Terapia par i małżeństw — PoZdrowienie Bolesławiec" },
      { name: "description", content: description },
      { property: "og:title", content: "Terapia par i małżeństw — PoZdrowienie Bolesławiec" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pozdrowienie.com.pl/terapia-par" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.pozdrowienie.com.pl/terapia-par" }],
  }),
  component: TerapiaParPage,
});

function TerapiaParPage() {
  const team = ["karolina-ferensowicz", "marek-pisarski"]
    .map((slug) => getSpecialist(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 md:px-6 md:py-16">
      <header className="border-b border-border pb-10">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-mind">
          <HeartHandshake className="size-5" /> PoZdrowienie · Bolesławiec
        </div>
        <h1 className="font-serif text-4xl font-semibold tracking-normal text-brand-navy md:text-5xl">
          Terapia par i małżeństw
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          W terapii par zawsze uczestniczą obie osoby. To kluczowe, ponieważ nie pracujemy nad
          modyfikacją jednej osoby, lecz nad tym, co dzieje się między Wami — nad Waszym sposobem
          komunikacji, wzajemnymi reakcjami i metodami rozwiązywania konfliktów.
        </p>
      </header>

      <section aria-label="Organizacja spotkań" className="py-10">
        <h2 className="font-serif text-2xl font-semibold text-brand-navy">
          Organizacja spotkań w pigułce
        </h2>
        <ul className="mt-6 space-y-5">
          <li className="flex gap-4">
            <Clock className="mt-1 size-5 shrink-0 text-mind" />
            <p className="leading-relaxed">
              <span className="font-semibold text-foreground">Czas trwania sesji: 70 minut</span> — to
              optymalny czas, który pozwala spokojnie poruszyć trudniejsze tematy i nie przerywać
              ważnej rozmowy w połowie.
            </p>
          </li>
          <li className="flex gap-4">
            <CalendarRange className="mt-1 size-5 shrink-0 text-mind" />
            <p className="leading-relaxed">
              <span className="font-semibold text-foreground">Częstotliwość:</span> najczęściej
              spotkania odbywają się co tydzień lub co dwa tygodnie.
            </p>
          </li>
          <li className="flex gap-4">
            <Users className="mt-1 size-5 shrink-0 text-mind" />
            <p className="leading-relaxed">
              <span className="font-semibold text-foreground">Długość procesu:</span> liczbę sesji
              omawiamy na bieżąco. Terapia par nie ma z góry narzuconych ram czasowych — dopasowujemy
              ją do Waszych indywidualnych potrzeb.
            </p>
          </li>
        </ul>
      </section>

      <section aria-label="Koterapia" className="border-t border-border py-10">
        <h2 className="font-serif text-2xl font-semibold text-brand-navy">
          Koterapia — praca z dwojgiem terapeutów
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Koterapia to zaawansowana forma wsparcia, w której w sesji uczestniczy dwoje terapeutów
          jednocześnie.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Taka forma pracy terapeutycznej pozwala lepiej dostrzec dynamikę związku, uchwycić ukryte
          niuanse rozmowy i zadbać o to, by każda osoba czuła się w pełni usłyszana.
        </p>
      </section>

      <section aria-label="Pierwsza konsultacja par" className="border-t border-border py-10">
        <h2 className="font-serif text-2xl font-semibold text-brand-navy">
          Pierwsza konsultacja par — jak wygląda pierwsze spotkanie?
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          To spotkanie, które służy wzajemnemu poznaniu i zdefiniowaniu problemu. Zapytamy Was o to,
          co Was do nas sprowadza, jak wygląda Wasza relacja oraz czego oczekujecie od spotkań.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          W dyskusji biorą udział obie osoby — każde z Was ma gwarancję bezpiecznej przestrzeni, by
          opowiedzieć o sytuacji ze swojej strony i zostać w pełni wysłuchanym.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Po konsultacji wspólnie podejmiemy decyzję o dalszych krokach i formie dalszej pracy.
        </p>
      </section>

      <section aria-label="Cennik" className="border-t border-border py-10">
        <div className="rounded-2xl border border-border/60 bg-surface p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-mind">Cennik</p>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="font-medium">Konsultacja pary</p>
              <p className="text-xs text-muted-foreground">70 min</p>
            </div>
            <p className="font-serif text-lg font-semibold text-mind">320 zł</p>
          </div>
          <Button asChild variant="ghost" size="sm" className="mt-4">
            <Link to="/pricing" hash="karolina-ferensowicz">
              Pełny cennik <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>

      <section aria-label="Zespół prowadzący" className="border-t border-border py-10">
        <h2 className="font-serif text-2xl font-semibold text-brand-navy">
          Terapię par w PoZdrowieniu prowadzi doświadczony zespół psychoterapeutów
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {team.map((person) => (
            <div key={person.slug} className="rounded-2xl border border-border/60 bg-surface p-5 shadow-sm">
              <Link
                to="/specjalisci/$slug"
                params={{ slug: person.slug }}
                className="flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary"
              >
                <span className="size-12 shrink-0 overflow-hidden rounded-full bg-surface-soft ring-1 ring-border">
                  <img
                    src={person.image}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover"
                    style={{
                      objectPosition: person.imagePosition ?? "center",
                      transform: person.imageScale ? `scale(${person.imageScale})` : undefined,
                      transformOrigin: person.imageTransformOrigin ?? person.imagePosition ?? "center",
                    }}
                  />
                </span>
                {person.name.trim()}
              </Link>
              <Button asChild size="sm" className="mt-4 bg-action text-action-foreground hover:bg-action/90">
                <a href={telHref(person.phone)} aria-label={`Zadzwoń: ${person.name.trim()}, ${person.phone}`}>
                  <Phone />
                  {person.phone}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
