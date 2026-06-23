import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Link from "@/components/AppLink";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onLocationChange = () => {
      setPathname(window.location.pathname);
      setOpen(false);
    };

    window.addEventListener("popstate", onLocationChange);
    window.addEventListener("app:navigate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("app:navigate", onLocationChange);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          <Link to="/" className="flex items-center group">
            <div className="leading-tight">
              <div className="font-display text-xl font-extrabold text-gradient-brand">
                Royal Foods
              </div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Institutional Catering
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    active ? "text-primary font-semibold" : "text-foreground/80"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 transition"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-soft hover:brightness-110 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-[600px]" : "max-h-0"}`}
      >
        <div className="px-4 pb-4 space-y-1 bg-white border-t border-border">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`block rounded-lg px-3 py-3 text-base font-medium hover:bg-muted ${
                (n.to === "/" ? pathname === "/" : pathname.startsWith(n.to))
                  ? "bg-gradient-soft text-primary font-semibold"
                  : ""
              }`}
            >
              {n.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-4 py-2.5 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
