import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/specialists", label: "Specialists" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Gabinet Zdrowia Psychicznego Anna Antoniewicz"
            width={56}
            height={56}
            className="h-14 w-auto"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-sm font-semibold text-primary">
              Gabinet Zdrowia Psychicznego
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Anna Antoniewicz
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="rounded-full px-5 shadow-sm">
          <Link to="/contact">Book Appointment</Link>
        </Button>
      </div>
    </header>
  );
}
