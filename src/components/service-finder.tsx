import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Brain, HeartHandshake, Flower2, Users, MessageCircle, Stethoscope, ScanSearch, Fingerprint, Baby, Music2, Compass, ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { homeServices, type HomeService } from "@/data/services";
import { getSpecialist, telHref } from "@/data/specialists";

const serviceIcons = {
  pary: HeartHandshake, psychoterapia: Brain, joga: Flower2, kregi: Users,
  psycholog: MessageCircle, psychiatra: Stethoscope, adhd: ScanSearch,
  osobowosc: Fingerprint, dzieci: Baby, taniec: Music2, coaching: Compass,
};

export function ServiceFinder() {
  const [selected, setSelected] = useState<HomeService | null>(null);

  return (
    <section aria-labelledby="services-heading" className="border-y border-border/60 bg-surface-soft py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="services-heading" className="text-center font-serif text-3xl font-semibold tracking-normal text-brand-navy md:text-4xl">
          Czego potrzebujesz?
        </h2>
        <div className="mt-10 grid grid-cols-2 justify-items-center gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {homeServices.map((service) => {
            const Icon = serviceIcons[service.id];
            const className = `group relative flex aspect-square h-auto w-full max-w-44 flex-col gap-3 whitespace-normal rounded-full border p-5 text-center text-sm font-semibold leading-snug shadow-none motion-safe:transition-transform motion-safe:hover:-translate-y-1 [&_svg]:size-8 ${service.space === "body" ? "border-body/25 bg-body-soft text-body hover:bg-body hover:text-body-foreground" : "border-mind/25 bg-surface text-brand-navy hover:border-mind hover:bg-mind-soft hover:text-mind"}`;
            const content = <><Icon aria-hidden="true" strokeWidth={1.5} /><span>{service.label}</span></>;
            const [slug] = service.slugs;
            return service.slugs.length === 1 ? (
              <Button key={service.id} asChild variant="outline" className={className}>
                <Link to="/specjalisci/$slug" params={{ slug }}>{content}</Link>
              </Button>
            ) : (
              <Button key={service.id} variant="outline" className={className} onClick={() => setSelected(service)} aria-haspopup="dialog">
                {content}
              </Button>
            );
          })}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent aria-describedby={undefined} className="max-h-[85dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-lg p-6">
          <DialogTitle className="pr-6 font-serif text-2xl leading-snug tracking-normal text-brand-navy">{selected?.label}</DialogTitle>
          <div className="divide-y divide-border">
            {selected?.slugs.map((slug) => {
              const specialist = getSpecialist(slug);
              if (!specialist) return null;
              return (
                <div key={slug} className="flex gap-4 py-5">
                  <Link to="/specjalisci/$slug" params={{ slug }} className="shrink-0" onClick={() => setSelected(null)}>
                    <div className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-border">
                      <img src={specialist.image} alt={specialist.name} className="h-full w-full object-cover" style={{ objectPosition: specialist.imagePosition ?? "center", transform: specialist.imageScale ? `scale(${specialist.imageScale})` : undefined, transformOrigin: specialist.imageTransformOrigin ?? specialist.imagePosition ?? "center" }} />
                    </div>
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Button asChild variant="link" className="h-auto justify-start whitespace-normal p-0 text-left font-serif text-lg text-brand-navy">
                      <Link to="/specjalisci/$slug" params={{ slug }} onClick={() => setSelected(null)}>{specialist.name}<ArrowUpRight aria-hidden="true" /></Link>
                    </Button>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button asChild size="sm" className="rounded-full bg-action text-action-foreground hover:bg-action/90">
                        <a href={telHref(specialist.phone)}><Phone aria-hidden="true" />{specialist.phone}</a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="rounded-full">
                        <Link to="/pricing" hash={slug} onClick={() => setSelected(null)}>Cennik</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {selected?.id === "pary" && (
            <Button asChild variant="outline" className="whitespace-normal">
              <Link to="/terapia-par" onClick={() => setSelected(null)}>Terapia par i małżeństw <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}