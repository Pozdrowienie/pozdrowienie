import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { mindSpecialists, bodySpecialists } from "@/data/specialists";
import { BrandHero } from "@/components/brand-hero";
import { Brain, Flower2, Heart, ShieldCheck, Sparkles, Tags } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PoZdrowienie — Terapia · Społeczność · Rozwój" },
      {
        name: "description",
        content:
          "PoZdrowienie w Bolesławcu — holistyczne podejście do zdrowia psychicznego i fizycznego. Terapia, joga, taniec, rozwój.",
      },
      { property: "og:title", content: "PoZdrowienie" },
      { property: "og:description", content: "Terapia · Społeczność · Rozwój — Bolesławiec" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <BrandHero
        eyebrow="Zdrowie psychiczne | Bolesławiec"
        title="PoZdrowienie"
        subtitle="Terapia · Społeczność · Rozwój"
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-lg leading-relaxed text-muted-foreground">
          PoZdrowienie w Bolesławcu jest miejscem, które powstało z potrzeby równowagi i
          holistycznego spojrzenia na zdrowie. Dbamy o przestrzeń ciała i umysłu — ruch
          spotyka się ze spokojem, a umysł otrzymuje profesjonalne wsparcie w drodze do
          równowagi.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-7">
            <Link to="/specialists">Poznaj specjalistów</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-body px-8 text-body-foreground shadow-md hover:bg-body/90"
          >
            <Link to="/pricing" className="gap-2">
              <Tags className="h-5 w-5" /> Zobacz cennik
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7">
            <Link to="/contact">Kontakt</Link>
          </Button>
        </div>
      </section>

      {/* Dwie przestrzenie */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-navy">
            DWIE PRZESTRZENIE
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
            Umysł i ciało w jednej harmonii
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            to="/umysl"
            className="group relative overflow-hidden rounded-3xl border border-mind/20 bg-mind-soft p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-10"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-mind/10 blur-2xl transition-opacity group-hover:opacity-80" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mind text-mind-foreground shadow-md">
                <Brain className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-mind md:text-3xl">
                Przestrzeń umysłu
              </h3>
              <p className="mt-3 text-muted-foreground">
                To bezpieczna przestrzeń, w której przy profesjonalnym wsparciu psychologa, psychoterapeuty i psychiatry uporządkujesz trudne myśli oraz emocje. Pomagamy zrozumieć siebie na nowo, wyciszyć wewnętrzny chaos i bezpiecznie powrócić do życiowej równowagi.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mind group-hover:underline">
                Poznaj specjalistów →
              </span>
            </div>
          </Link>

          <Link
            to="/cialo"
            className="group relative overflow-hidden rounded-3xl border border-body/25 bg-body-soft p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-10"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-body/15 blur-2xl transition-opacity group-hover:opacity-80" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-body text-body-foreground shadow-md">
                <Flower2 className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-body md:text-3xl">
                Przestrzeń ciała
              </h3>
              <p className="mt-3 text-muted-foreground">
                To strefa świadomej pracy somatycznej, gdzie poprzez Hatha Jogę, Terapię Tańcemi ruchem, oraz relaksację uwolnisz nagromadzone napięcia. Uczymy, jak na nowo zaufać swojemu organizmowi, zredukować codzienny stres i głęboko zregenerować przebodźcowany układ nerwowy.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-body group-hover:underline">
                Zajęcia i specjaliści →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Wartości */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Empatia", text: "Każda wizyta zaczyna się od wysłuchania — bez oceniania, w Twoim tempie." },
            { icon: ShieldCheck, title: "Dyskrecja i bezpieczeństwo", text: "Przestrzeń oparta na etyce zawodowej i poszanowaniu prywatności." },
            { icon: Sparkles, title: "Holistycznie", text: "Łączymy profesjonalne metody pracy z umysłem i ciałem." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-surface p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specjaliści */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-navy">
            NASZ TEAM
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
            Specjaliści PoZdrowienia
          </h2>
        </div>

        {/* Umysł */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-mind" />
            <h3 className="font-serif text-xl font-semibold text-mind">Przestrzeń umysłu</h3>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {mindSpecialists.map((s) => (
              <SpecialistCard key={s.slug} s={s} accent="mind" />
            ))}
          </div>
        </div>

        {/* Ciało */}
        <div className="mt-16">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-body" />
            <h3 className="font-serif text-xl font-semibold text-body">Przestrzeń ciała</h3>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {bodySpecialists.map((s) => (
              <SpecialistCard key={s.slug} s={s} accent="body" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl bg-brand-navy px-8 py-14 text-center text-primary-foreground shadow-xl md:px-16">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">Zadzwoń do specjalisty</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Każdy specjalista PoZdrowienia odbiera telefon i osobiście umawia wizyty —
            bez formularzy i pośredników.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link to="/specialists">Zobacz numery do specjalistów</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-action px-8 text-action-foreground shadow-lg hover:bg-action/90"
            >
              <Link to="/pricing" className="gap-2">
                <Tags className="h-5 w-5" /> Zobacz cennik
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function SpecialistCard({
  s,
  accent,
}: {
  s: {
    slug: string;
    name: string;
    role: string;
    image: string;
    imagePosition?: string;
    imageScale?: number;
    imageTransformOrigin?: string;
  };
  accent: "mind" | "body";
}) {
  const ringClass = accent === "mind" ? "ring-mind/30" : "ring-body/40";
  const roleClass = accent === "mind" ? "text-mind" : "text-body";
  return (
    <Link
      to="/specjalisci/$slug"
      params={{ slug: s.slug }}
      className="group flex cursor-pointer flex-col items-center text-center"
    >
      <div className="relative">
        <div
          className={`absolute -inset-2 rounded-full opacity-0 blur-xl transition-opacity group-hover:opacity-100 ${
            accent === "mind" ? "bg-mind/40" : "bg-body/40"
          }`}
        />
        <div
          className={`relative h-36 w-36 overflow-hidden rounded-full border-4 border-surface shadow-lg ring-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-xl group-hover:ring-4 ${ringClass}`}
        >
          <img
            src={s.image}
            alt={s.name}
            width={768}
            height={768}
            loading="lazy"
            className="h-full w-full object-cover"
            style={{
              objectPosition: s.imagePosition ?? "center",
              transform: s.imageScale ? `scale(${s.imageScale})` : undefined,
              transformOrigin: s.imageTransformOrigin ?? s.imagePosition ?? "center",
            }}
          />
        </div>
      </div>
      <p className={`mt-4 text-xs font-medium uppercase tracking-wider ${roleClass}`}>
        {s.role}
      </p>
      <h3 className="mt-1 font-serif text-base font-semibold">{s.name}</h3>
    </Link>
  );
}
