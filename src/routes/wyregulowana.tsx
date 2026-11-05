import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, CalendarDays, MapPin, Backpack, Wind, Wallet, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSpecialist, telHref } from "@/data/specialists";

const title = "Warsztat „Wyregulowana” dla kobiet — PoZdrowienie Bolesławiec";
const description =
  "Warsztat rozwojowy dla kobiet w Bolesławcu: regulacja układu nerwowego, oddech, aromaterapia i dźwięki gongu. Wybrane piątki, 18:30–20:00, 200 zł.";

export const Route = createFileRoute("/wyregulowana")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pozdrowienie.com.pl/wyregulowana" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.pozdrowienie.com.pl/wyregulowana" }],
  }),
  component: WyregulowanaPage,
});

const learn = [
  "Resetować i ładować układ nerwowy, zanim wskaźnik energii spadnie do zera.",
  "Zrozumieć sygnały z ciała, które ostrzegają przed wybuchem, stresem i napięciem.",
  "Odzyskać kontakt ze swoimi potrzebami, które zbyt często lądują na samym końcu listy.",
  "Poszerzać swoje okno tolerancji na stres, by reagować z poziomu spokoju, a nie automatycznego napięcia.",
];

const leaders = [
  { slug: "joanna-wolar", role: "psychoterapeutka, certyfikowana nauczycielka Hatha Jogi RYT 2000" },
  { slug: "anna-antoniewicz", role: "psycholog, psychoterapeutka w procesie szkolenia, trenerka mindfulness" },
];

function WyregulowanaPage() {
  const anna = getSpecialist("anna-antoniewicz");
  const facts = [
    { icon: CalendarDays, label: "Kiedy?", text: "W wybrane piątki, 18:30 – 20:00" },
    { icon: MapPin, label: "Gdzie?", text: "PoZdrowienie, ul. Jeleniogórska 5, Bolesławiec" },
    { icon: Backpack, label: "Czego potrzebujesz?", text: "Kocyk i woda – jeśli nie masz maty, udostępnimy swoją." },
    { icon: Wind, label: "Czego możesz się spodziewać?", text: "Lekkich ćwiczeń psychosomatycznych i oddechowych regulujących układ nerwowy, relaksacji przy dźwiękach gongu i dzwonków koshi, aromaterapii oraz warsztatu rozwojowego prowadzonego przez psychoterapeutkę i psycholożkę." },
    { icon: Wallet, label: "Cena", text: "200 zł" },
  ];
  return (
    <div className="mx-auto max-w-4xl px-5 py-12 md:px-6 md:py-16">
      <header className="border-b border-border pb-10">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-mind">
          <Sparkles className="size-5" /> Warsztat rozwojowy dla kobiet w Bolesławcu
        </div>
        <h1 className="font-serif text-4xl font-semibold tracking-normal text-brand-navy md:text-5xl">„Wyregulowana”</h1>
        <p className="mt-6 font-serif text-xl italic leading-relaxed text-brand-navy">
          Nie chodzi o to, aby nie odczuwać stresu czy trudnych emocji, ale o to by poszerzać przestrzeń w sobie i sięgać po zasoby do tego, aby radzić sobie z trudnościami.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Jeśli czujesz, że codzienność Cię przytłacza, jesteś w ciągłym biegu, a Twoje ciało wysyła sygnały alarmowe – jesteś w dobrym miejscu.
        </p>
      </header>

      <section className="py-10">
        <p className="leading-relaxed">
          Pracujemy z kobietami, które czują zmęczenie, przebodźcowanie i szukają drogi powrotu do wewnętrznej równowagi. Na naszych warsztatach, przy herbacie i w atmosferze pełnej akceptacji, uczymy jak:
        </p>
        <ul className="mt-6 space-y-4">
          {learn.map((t) => (
            <li key={t} className="flex gap-3 leading-relaxed">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-mind" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-6 leading-relaxed">
          Nasze spotkania to połączenie merytorycznej wiedzy psychologicznej z głębokim relaksem somatycznym (aromaterapia, techniki oddechowe, dźwięki gongu). Nie daję kolejnych zadań do odrobienia – daję przestrzeń, byś mogła w końcu po prostu BYĆ.
        </p>
      </section>

      <section aria-label="Informacje praktyczne" className="grid gap-4 border-t border-border py-10 sm:grid-cols-2">
        {facts.map(({ icon: Icon, label, text }) => (
          <div key={label} className="rounded-lg border border-border bg-surface p-5">
            <div className="flex items-center gap-2 font-semibold text-brand-navy"><Icon className="size-5 text-mind" />{label}</div>
            <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-border py-10">
        <h2 className="font-serif text-2xl font-semibold text-brand-navy">Prowadzące warsztat „Wyregulowana”</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {leaders.map(({ slug, role }) => {
            const p = getSpecialist(slug);
            if (!p) return null;
            return (
              <Link key={slug} to="/specjalisci/$slug" params={{ slug }} className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4 hover:border-primary">
                <span className="size-24 shrink-0 overflow-hidden rounded-full bg-surface-soft ring-1 ring-border">
                  <img src={p.image} alt={p.name.trim()} loading="lazy" className="size-full object-cover" style={{ objectPosition: p.imagePosition ?? "center", transform: p.imageScale ? `scale(${p.imageScale})` : undefined, transformOrigin: p.imageTransformOrigin ?? p.imagePosition ?? "center" }} />
                </span>
                <span>
                  <span className="block font-serif text-lg font-semibold text-foreground">{p.name.trim()}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{role}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {anna && (
        <section className="rounded-lg bg-secondary p-6 text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-navy">Zarezerwuj miejsce</h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-action text-action-foreground hover:bg-action/90">
              <a href={telHref(anna.phone)} aria-label={`Zadzwoń i zarezerwuj miejsce: ${anna.phone}`}><Phone />{anna.phone}</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/grafik">Grafik<ArrowUpRight /></Link>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
