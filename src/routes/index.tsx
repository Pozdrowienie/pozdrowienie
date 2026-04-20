import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { specialists } from "@/data/specialists";
import hero from "@/assets/hero.jpg";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PoZdrowienie — Terapia Społeczność Rozwój" },
      {
        name: "description",
        content:
          "PoZdrowienie w Bolesławcu — holistyczne podejście do zdrowia psychicznego. Terapia, rozwój i społeczność.",
      },
      { property: "og:title", content: "PoZdrowienie" },
      { property: "og:description", content: "PoZdrowienie — Terapia Społeczność Rozwój" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:items-center lg:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5" /> ZDROWIE PSYCHICZNE | BOLESŁAWIEC
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
              PoZdrowienie <br />
              <span className="text-primary">Terapia Społecznośc Rozwój</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              PoZdrowienie w Bolesławcu jest miejscem, które powstało z potrzeby równowagi i
              holistycznego spojrzenia na zdrowie. W PoZdrowieniu dbamy o przestrzeń ciała i
              umysłu, tutaj ruch spotyka się ze spokojem, a umysł otrzymuje profesjonalne
              wsparcie w drodze do równowagi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/specialists">Poznaj specjalistów</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <Link to="/contact">Kontakt</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl" />
            <img
              src={hero}
              alt="Calm therapy office"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Empathetic Care", text: "Every visit begins with listening — without judgment, at your pace." },
            { icon: ShieldCheck, title: "Confidential & Safe", text: "A discreet space governed by medical ethics and privacy." },
            { icon: Sparkles, title: "Evidence-Based", text: "Treatments grounded in current clinical research and practice." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-surface p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialists */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            NASZ TEAM
          </span>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Specjaliści PoZdrowienia</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {specialists.map((s) => (
            <Link
              key={s.slug}
              to="/specialists/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/30 to-accent/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-surface shadow-lg ring-1 ring-border/60 transition-transform group-hover:-translate-y-1">
                  <img
                    src={s.image}
                    alt={s.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-primary">
                {s.role}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{s.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground shadow-xl md:px-16">
          <h2 className="text-3xl font-semibold md:text-4xl">Umów wizytę</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full px-8">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
