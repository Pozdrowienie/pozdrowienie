import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getSpecialist, type Specialist } from "@/data/specialists";
import { SpecialistDetail } from "@/components/specialist-detail";

const DOM = "https://www.pozdrowienie.com.pl";
const flat = (t: string) => t.replace(/\s*\n\s*/g, " · ");
const cut = (t: string, n = 155) =>
  t.length <= n ? t : t.slice(0, t.lastIndexOf(" ", n)).trimEnd() + "…";

export const Route = createFileRoute("/specjalisci/$slug")({
  loader: ({ params }): { specialist: Specialist } => {
    const specialist = getSpecialist(params.slug);
    if (!specialist) throw notFound();
    return { specialist };
  },
  head: ({ params, loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.specialist.name} — ${flat(loaderData.specialist.role)} | PoZdrowienie`,
          },
          { name: "description", content: cut(loaderData.specialist.about) },
          {
            property: "og:title",
            content: `${loaderData.specialist.name} — ${flat(loaderData.specialist.role)}`,
          },
          { property: "og:description", content: cut(loaderData.specialist.about) },
          {
            property: "og:url",
            content: `${DOM}/specjalisci/${params.slug}`,
          },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
    links: [{ rel: "canonical", href: `${DOM}/specjalisci/${params.slug}` }],
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
