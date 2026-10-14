import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/umysl", label: "Przestrzeń umysłu" },
  { to: "/cialo", label: "Przestrzeń ciała" },
  { to: "/specialists", label: "Specjaliści" },
  { to: "/pricing", label: "Cennik" },
  { to: "/terapia-par", label: "Terapia par" },
  { to: "/grafik", label: "Grafik" },
  { to: "/contact", label: "Kontakt" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="PoZdrowienie"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-cover shadow-sm ring-1 ring-brand-navy/15"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-xl font-semibold text-brand-navy">
              PoZdrowienie
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-brand-navy/70">
              Terapia · Społeczność · Rozwój
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-brand-navy"
              activeProps={{ className: "text-brand-navy font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm" className="text-brand-navy xl:hidden">
          <Link to="/grafik"><CalendarDays />Grafik</Link>
        </Button>
        <Link
          to="/specialists"
          className="rounded-full bg-brand-navy px-3 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition hover:bg-brand-navy/90 sm:px-5 sm:text-sm"
        >
          Zadzwoń do specjalisty
        </Link>
        </div>
      </div>
    </header>
  );
}
