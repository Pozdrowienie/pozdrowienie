import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
          <InfoRow icon={MapPin} title="Address" lines={["ul. Kubika 4", "59-700 Bolesławiec, Poland"]} />
          <InfoRow icon={Phone} title="Phone" lines={["+48 600 000 000"]} />
          <InfoRow icon={Mail} title="Email" lines={["kontakt@gabinet-antoniewicz.pl"]} />
          <InfoRow icon={Clock} title="Opening hours" lines={["Mon – Fri: 9:00 – 19:00", "Sat: 9:00 – 14:00"]} />
        </div>

        <form
          className="space-y-5 rounded-3xl border border-border/60 bg-surface p-8 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! We will contact you shortly.");
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" required placeholder="+48 ..." />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="you@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} placeholder="Which specialist would you like to see, and when works best?" />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-full">
            Send Request
          </Button>
        </form>
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
