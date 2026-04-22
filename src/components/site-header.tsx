import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/umysl", label: "Przestrzeń umysłu" },
  { to: "/cialo", label: "Przestrzeń ciała" },
  { to: "/specialists", label: "Specjaliści" },
  { to: "/pricing", label: "Cennik" },
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

        <nav className="hidden items-center gap-6 lg:flex">
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

        <Button asChild className="rounded-full px-5 shadow-sm">
          <Link to="/contact">Umów wizytę</Link>
        </Button>
      </div>
    </header>
  );
}
