import { createFileRoute } from "@tanstack/react-router";
import { BrandWatermark } from "@/components/brand-watermark";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Gabinet Zdrowia Psychicznego" },
      { name: "description", content: "Learn about our clinic's mission, values and approach to mental health care." },
      { property: "og:title", content: "About Us — Gabinet Zdrowia Psychicznego" },
      { property: "og:description", content: "Mental health clinic in Bolesławiec built on empathy, ethics and evidence." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 py-20">
      <BrandWatermark position="bottom-right" size={420} opacity={0.07} />
      <span className="relative text-xs font-medium uppercase tracking-[0.25em] text-primary">About Us</span>
      <h1 className="mt-3 text-4xl font-semibold md:text-5xl">A clinic built on care</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Gabinet Zdrowia Psychicznego Anna Antoniewicz is a private mental health practice
        in Bolesławiec offering integrated psychiatric, psychological, therapeutic and
        sexological care. We believe mental health deserves the same attention, dignity
        and competence as any other branch of medicine.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Our specialists collaborate closely so that each client receives a coherent,
        personalised plan — whether that means a single consultation or long-term support.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-surface p-6">
          <h3 className="font-serif text-xl font-semibold text-primary">Our Mission</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            To make modern, evidence-based mental health care accessible in a warm,
            destigmatising environment.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-surface p-6">
          <h3 className="font-serif text-xl font-semibold text-primary">Our Values</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Empathy, confidentiality, scientific rigor and respect for every patient's story.
          </p>
        </div>
      </div>
    </section>
  );
}
