import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getSpecialist, type Specialist } from "@/data/specialists";
import { SpecialistDetail } from "@/components/specialist-detail";

export const Route = createFileRoute("/specialists/$slug")({
  loader: ({ params }): { specialist: Specialist } => {
    const specialist = getSpecialist(params.slug);
    if (!specialist) throw notFound();
    return { specialist };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.specialist.name} — ${loaderData.specialist.role} | PoZdrowienie` },
          { name: "description", content: loaderData.specialist.about.slice(0, 155) },
          { property: "og:title", content: `${loaderData.specialist.name} — ${loaderData.specialist.role}` },
          { property: "og:description", content: loaderData.specialist.about.slice(0, 155) },
          { property: "og:image", content: loaderData.specialist.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-md py-20 text-center">
      <h1 className="text-3xl font-semibold">Nie znaleziono specjalisty</h1>
      <Button asChild className="mt-6 rounded-full">
        <Link to="/specialists">Wróć do listy specjalistów</Link>
      </Button>
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
  const { specialist } = Route.useLoaderData();
  return <SpecialistDetail specialist={specialist} />;
}
