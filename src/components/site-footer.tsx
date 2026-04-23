import { Link } from "@tanstack/react-router";
import { MapPin, Clock, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <Link to="/" className="mb-10 flex items-center gap-3">
          <img
            src={logo}
            alt="PoZdrowienie"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover shadow-sm ring-1 ring-brand-navy/15"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-semibold text-brand-navy">
              PoZdrowienie
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-brand-navy/70">
              Terapia · Społeczność · Rozwój
            </span>
          </span>
        </Link>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-brand-navy">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-navy" />
                ul. Jeleniogórska 5, 59-700 Bolesławiec
              </li>
            </ul>
            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-wider text-brand-navy/80">
                Znajdź nas
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    aria-label="Facebook PoZdrowienie"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand-navy"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                      <Facebook className="h-4 w-4" />
                    </span>
                    PoZdrowienie
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Instagram pozdrowienie_boleslawiec"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-body"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-body/15 text-body">
                      <Instagram className="h-4 w-4" />
                    </span>
                    pozdrowienie_boleslawiec
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-brand-navy">
              Linki
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-brand-navy">Home</Link></li>
              <li><Link to="/umysl" className="text-muted-foreground hover:text-mind">Przestrzeń umysłu</Link></li>
              <li><Link to="/cialo" className="text-muted-foreground hover:text-body">Przestrzeń ciała</Link></li>
              <li><Link to="/specialists" className="text-muted-foreground hover:text-brand-navy">Specjaliści</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-brand-navy">Cennik</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-brand-navy">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-brand-navy">
              Godziny otwarcia
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-navy" />{"\n\n"}Pon– Pt: 9:00 – 20:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
          <iframe
            title="Lokalizacja PoZdrowienie — Bolesławiec"
            src="https://www.google.com/maps?q=Jeleniog%C3%B3rska+5%2C+59-700+Boles%C5%82awiec&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PoZdrowienie. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
