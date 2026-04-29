import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/919428734151?text=Hi%2C%20I%27m%20looking%20for%20a%20property%20in%20Gandhinagar.%20Can%20you%20help%3F";
const PHONE_URL = "tel:+919428734151";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300"
      style={{
        height: "60px",
        backgroundColor: scrolled
          ? "oklch(var(--card))"
          : "oklch(var(--card) / 0.85)",
        backdropFilter: scrolled ? "none" : "blur(8px)",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.10)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between gap-3">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2 shrink-0"
          data-ocid="header.logo"
        >
          <div className="bg-primary rounded-md px-2 py-1">
            <span className="text-primary-foreground font-display font-bold text-sm leading-tight">
              PPS
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display font-bold text-foreground text-sm leading-tight">
              Patidar Property
            </p>
            <p className="font-body text-muted-foreground text-xs leading-tight">
              Solution, Gandhinagar
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="nav-link font-body text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              data-ocid={`header.nav_${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 touch-safe px-3 py-2 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", minHeight: "40px" }}
            data-ocid="header.whatsapp_button"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href={PHONE_URL}
            className="flex items-center gap-1.5 touch-safe px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ minHeight: "40px" }}
            data-ocid="header.call_button"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-ocid="header.menu_toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-card border-t border-border shadow-md"
          data-ocid="header.mobile_menu"
        >
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="font-body text-base font-medium text-foreground hover:text-primary py-3 border-b border-border last:border-0 transition-colors"
                data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
