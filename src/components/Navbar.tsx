import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";

const NAV_LINKS = [
  { label: "Rooms", to: "/rooms" },
  { label: "Shops", to: "/shops" },
  { label: "Gallery", to: "/gallery" },
  { label: "Location", to: "/#location" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const whatsappLink = generateWhatsAppLink();
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-gradient-to-b from-black/35 to-transparent"
          : open
            ? "bg-ivory shadow-sm"
            : "bg-ivory/95 shadow-sm backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex flex-col leading-tight">
          <span
            className={cn(
              "text-lg font-extrabold tracking-tight transition-colors",
              !transparent ? "text-charcoal" : "text-white"
            )}
          >
            SKI TOWERS
          </span>
          <span
            className={cn(
              "text-[11px] font-medium uppercase tracking-[0.2em] transition-colors",
              !transparent ? "text-accent" : "text-white/80"
            )}
          >
            Erode
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                !transparent ? "text-charcoal-soft" : "text-white/90"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          {isWhatsAppConfigured ? (
            <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" size="md">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
          ) : (
            <Button href="/contact" size="md">
              Contact Us
            </Button>
          )}
        </div>

        <button
          type="button"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
            !transparent ? "text-charcoal" : "text-white"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-ivory transition-[max-height,opacity] duration-300 ease-out md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 pb-5 pt-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="rounded-lg px-3 py-3 text-base font-medium text-charcoal-soft transition-colors hover:bg-ivory-soft hover:text-accent"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-2">
            {isWhatsAppConfigured ? (
              <Button
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                size="md"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Button>
            ) : (
              <Button href="/contact" className="w-full" size="md">
                Contact Us
              </Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
