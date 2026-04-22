import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSpecialist, telHref, type Specialist } from "@/data/specialists";

export const Route = createFileRoute("/specialists/$slug")({
  loader: ({ params }): { specialist: Specialist } => {
    const specialist = getSpecialist(params.slug);
    if (!specialist) throw notFound();
    return { specialist };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.specialist.name} — ${loaderData.specialist.role}` },
          { name: "description", content: loaderData.specialist.about.slice(0, 155) },
          { property: "og:title", content: `${loaderData.specialist.name} — ${loaderData.specialist.role}` },
          { property: "og:description", content: loaderData.specialist.about.slice(0, 155) },
          { property: "og:image", content: loaderData.specialist.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-md py-20 text-center">
      <h1 className="text-3xl font-semibold">Specialist not found</h1>
      <Button asChild className="mt-6 rounded-full"><Link to="/specialists">Back to team</Link></Button>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-md py-20 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: SpecialistProfile,
});

function SpecialistProfile() {
  const { specialist } = Route.useLoaderData() as { specialist: Specialist };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Button asChild variant="ghost" className="mb-8 -ml-3 rounded-full text-muted-foreground hover:text-primary">
        <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
      </Button>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_1.4fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-border/60">
            <img
              src={specialist.image}
              alt={specialist.name}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">{specialist.role}</p>
            <h1 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">{specialist.name}</h1>
          </div>
          <a
            href={telHref(specialist.phone)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            Zadzwoń: {specialist.phone}
          </a>
        </div>

        <div>
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4 rounded-full bg-secondary/60 p-1">
              <TabsTrigger value="about" className="rounded-full">About</TabsTrigger>
              <TabsTrigger value="specializations" className="rounded-full">Specializations</TabsTrigger>
              <TabsTrigger value="methods" className="rounded-full">Methods</TabsTrigger>
              <TabsTrigger value="pricing" className="rounded-full">Pricing</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-8">
              <h2 className="font-serif text-2xl font-semibold text-primary">About Me</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{specialist.about}</p>
            </TabsContent>

            <TabsContent value="specializations" className="mt-8">
              <h2 className="font-serif text-2xl font-semibold text-primary">Specializations</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {specialist.specializations.map((s) => (
                  <li key={s} className="rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm">{s}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="methods" className="mt-8">
              <h2 className="font-serif text-2xl font-semibold text-primary">Working Methods</h2>
              <ul className="mt-4 space-y-3">
                {specialist.methods.map((m) => (
                  <li key={m} className="flex gap-3 rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm">
                    <span className="text-primary">•</span> {m}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="pricing" className="mt-8">
              <h2 className="font-serif text-2xl font-semibold text-primary">Pricing</h2>
              <div className="mt-4 divide-y divide-border/60 rounded-2xl border border-border/60 bg-surface">
                {specialist.pricing.map((p) => (
                  <div key={p.name} className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.duration}</p>
                    </div>
                    <p className="font-serif text-lg font-semibold text-primary">{p.price}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
