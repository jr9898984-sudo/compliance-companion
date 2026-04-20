import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/knowledge", label: "Knowledge Hub" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container-edge flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-navy-deep flex items-center justify-center">
            <span className="font-display text-gold text-xl font-bold">V</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold text-navy-deep tracking-tight">
              Vencore Nexus
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              HR &amp; Legal Solutions
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              data-active={pathname === item.to}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-primary !py-3 !px-5 !text-xs">
          Get a Consultation
        </Link>

        <button
          className="lg:hidden text-navy-deep"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-edge py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="nav-link text-base"
                data-active={pathname === item.to}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">
              Get a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
