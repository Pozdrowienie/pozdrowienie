import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-primary">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                ul. Jeleniogórska 5, 59-700 Bolesławiec
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-primary">
              Linki
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/specialists" className="text-muted-foreground hover:text-primary">Specialists</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-primary">
              Godziny otwarcia
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Pon– Pt: 9:00 – 20:00
              </li>
              <li className="ml-6"></li>
              <li className="ml-6"></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
          <iframe
            title="Clinic location in Bolesławiec"
            src="https://www.google.com/maps?q=Boles%C5%82awiec%2C+Poland&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gabinet Zdrowia Psychicznego Anna Antoniewicz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
