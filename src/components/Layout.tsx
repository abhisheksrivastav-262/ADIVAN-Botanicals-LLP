import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS } from "../data/site";
import { cn } from "../lib/cn";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function BrandLockup({
  light = false,
  logoClassName = "h-11 sm:h-12 lg:h-[52px]",
  nameClassName = "text-lg sm:text-xl",
  subClassName = "text-[0.6rem] sm:text-[0.65rem]",
}: {
  light?: boolean;
  logoClassName?: string;
  nameClassName?: string;
  subClassName?: string;
}) {
  return (
    <Link
      to="/"
      className="flex min-w-0 items-center gap-2.5 sm:gap-3"
      aria-label="Adivan Botanicals LLP — Home"
    >
      <img
        src="/brand/adivan-logo.png"
        alt=""
        loading="eager"
        className={cn("w-auto shrink-0 rounded-md object-contain", logoClassName)}
      />
      <span className="min-w-0 leading-none whitespace-nowrap">
        <span
          className={cn(
            "block font-display font-semibold tracking-wide",
            light ? "text-cream" : "text-pine-950",
            nameClassName
          )}
        >
          ADIVAN
        </span>
        <span
          className={cn(
            "mt-1 block font-semibold tracking-[0.3em] uppercase",
            light ? "text-gold-200" : "text-pine-700",
            subClassName
          )}
        >
          Botanicals LLP
        </span>
      </span>
    </Link>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-ivory/90 shadow-[0_12px_32px_-16px_rgba(11,31,20,0.35)] backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <div className="flex min-w-0 flex-1 items-center lg:flex-none">
          <BrandLockup light={!scrolled} />
        </div>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <div key={l.label} className="group relative">
              <NavLink
                to={l.path}
                className={({ isActive }) =>
                  cn(
                    "link-underline py-2 text-[0.83rem] font-semibold tracking-wide",
                    !scrolled ? "text-cream" : "text-pine-950",
                    isActive && "active text-gold-600"
                  )
                }
              >
                {l.label}
              </NavLink>
              {l.children && (
                <div className="invisible absolute top-full left-1/2 w-60 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-pine-800/10 bg-cream shadow-[0_28px_60px_-20px_rgba(11,31,20,0.4)]">
                    {l.children.map((c) => (
                      <NavLink
                        key={c.path + c.label}
                        to={c.path}
                        className="block px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-pine-50 hover:text-pine-800"
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/products"
            className={cn(
              "rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300",
              scrolled
                ? "bg-pine-800 text-cream hover:bg-pine-900"
                : "bg-gold-500 text-pine-950 hover:bg-gold-400"
            )}
          >
            Explore Products
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur transition-colors lg:hidden",
            !scrolled && !open ? "border-cream/40 text-cream" : "border-pine-800/20 bg-cream text-pine-900"
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-ivory transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[80vh] overflow-y-auto opacity-100 shadow-2xl" : "max-h-0 opacity-0"
        )}
      >
        <nav className="space-y-1 px-5 pt-2 pb-6" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <div key={l.label} className="rounded-2xl">
              {l.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === l.label ? null : l.label)}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left font-display text-lg font-medium text-pine-950 hover:bg-pine-50"
                    aria-expanded={expanded === l.label}
                  >
                    {l.label}
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", expanded === l.label && "rotate-180")}
                    />
                  </button>
                  <div className={cn("grid transition-all duration-300", expanded === l.label ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden">
                      {l.children.map((c) => (
                        <NavLink
                          key={c.path + c.label}
                          to={c.path}
                          className="block rounded-xl px-8 py-2.5 text-sm font-medium text-ink-600 hover:bg-pine-50 hover:text-pine-800"
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  to={l.path}
                  className="block rounded-2xl px-4 py-3 font-display text-lg font-medium text-pine-950 hover:bg-pine-50"
                >
                  {l.label}
                </NavLink>
              )}
            </div>
          ))}
          <div className="flex gap-3 px-1 pt-4">
            <Link to="/products" className="flex-1 rounded-full bg-pine-800 px-6 py-3 text-center text-sm font-semibold text-cream">
              Explore Products
            </Link>
            <Link to="/contact" className="flex-1 rounded-full border border-pine-800/30 px-6 py-3 text-center text-sm font-semibold text-pine-800">
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-pine-950 text-pine-100">
      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <BrandLockup
              light
              logoClassName="h-14 lg:h-16"
              nameClassName="text-2xl lg:text-[1.7rem]"
              subClassName="text-[0.65rem] lg:text-xs"
            />
            <p className="mt-5 font-display text-lg text-gold-200 italic">{COMPANY.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-pine-100/80">{COMPANY.intro}</p>
          </div>
          <nav aria-label="Quick links">
            <h3 className="text-xs font-bold tracking-[0.24em] text-gold-200 uppercase">Quick Links</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["About Us", "/about"],
                ["Vision & Mission", "/vision-mission"],
                ["Quality", "/quality"],
                ["Manufacturing", "/manufacturing"],
                ["Distribution", "/distribution"],
                ["Founders", "/founders"],
                ["Growth Roadmap", "/roadmap"],
              ].map(([label, path]) => (
                <li key={path + label}>
                  <Link to={path} className="transition-colors hover:text-gold-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Products">
            <h3 className="text-xs font-bold tracking-[0.24em] text-gold-200 uppercase">Products</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["All Products", "/products"],
                ["Hair Care", "/hair-care"],
                ["Wellness Syrups", "/syrups"],
                ["Nutrition & Wellness", "/nutrition"],
                ["Partner With Us", "/manufacturing-partners"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={path + label}>
                  <Link to={path} className="transition-colors hover:text-gold-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-xs font-bold tracking-[0.24em] text-gold-200 uppercase">Reach Us</h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a href={COMPANY.phoneHref} className="flex items-start gap-3 hover:text-gold-200">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 break-all hover:text-gold-200">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{COMPANY.addressLines.join(" ")}</span>
              </li>
            </ul>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-5 py-2.5 text-sm font-semibold text-gold-200 transition-all hover:bg-gold-500 hover:text-pine-950"
            >
              WhatsApp Us <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-14 border-t border-cream/10 pt-6 text-xs leading-relaxed text-pine-100/60">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Product information on this website is
            general brand information — refer to the product pack for specific details. Nothing here is medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-ivory">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
