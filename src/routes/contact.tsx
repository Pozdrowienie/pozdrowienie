import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandWatermark } from "@/components/brand-watermark";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — Gabinet Zdrowia Psychicznego" },
      { name: "description", content: "Book an appointment or contact our mental health clinic in Bolesławiec." },
      { property: "og:title", content: "Contact & Book Appointment" },
      { property: "og:description", content: "Reach our team — we're here to help." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <BrandWatermark position="bottom-right" size={460} opacity={0.07} />
      <div className="relative text-center">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Contact</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Book an Appointment</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Send us a message and we'll get back to you within one business day.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <InfoRow
            icon={MapPin}
            title="Adres"
            lines={["ul. Jeleniogórska 5", "59-700 Bolesławiec", "obok Szpitala św. Łukasza"]}
          />
          <InfoRow icon={Phone} title="Telefon" lines={["+48 600 000 000"]} />
          <InfoRow icon={Mail} title="Email" lines={["kontakt@gabinet-antoniewicz.pl"]} />
          <InfoRow icon={Clock} title="Godziny otwarcia" lines={["Pon – Pt: 9:00 – 20:00"]} />
          <Button asChild size="lg" className="w-full rounded-full">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Jeleniog%C3%B3rska+5%2C+59-700+Boles%C5%82awiec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="mr-2 h-4 w-4" />
              Wyznacz trasę dojazdu
            </a>
          </Button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
          <iframe
            title="Trasa dojazdu — ul. Jeleniogórska 5, Bolesławiec"
            src="https://www.google.com/maps?q=Jeleniog%C3%B3rska+5%2C+59-700+Boles%C5%82awiec&output=embed"
            width="100%"
            height="520"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[520px] w-full"
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border/60 bg-surface p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-foreground">{l}</p>
        ))}
      </div>
    </div>
  );
}
