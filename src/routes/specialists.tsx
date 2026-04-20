import { createFileRoute, Link } from "@tanstack/react-router";
import { specialists } from "@/data/specialists";

export const Route = createFileRoute("/specialists")({
  head: () => ({
    meta: [
      { title: "Our Specialists — Gabinet Zdrowia Psychicznego" },
      { name: "description", content: "Meet our team of psychiatrists, psychologists, psychotherapists and sexologists." },
      { property: "og:title", content: "Our Specialists" },
      { property: "og:description", content: "Meet the team behind Gabinet Zdrowia Psychicznego." },
    ],
  }),
  component: SpecialistsPage,
});

function SpecialistsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Our Team</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Our Specialists</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A multidisciplinary team committed to your wellbeing.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {specialists.map((s) => (
          <Link
            key={s.slug}
            to="/specialists/$slug"
            params={{ slug: s.slug }}
            className="group flex items-center gap-6 rounded-3xl border border-border/60 bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full ring-1 ring-border/60">
              <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-primary">{s.role}</p>
              <h2 className="mt-1 font-serif text-2xl font-semibold">{s.name}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.about}</p>
              <span className="mt-3 inline-block text-sm font-medium text-primary group-hover:underline">
                View profile →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
