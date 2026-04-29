import { MapPin, MessageCircle, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/919428734151?text=Hi%2C%20I%27m%20looking%20for%20a%20property%20in%20Gandhinagar.%20Can%20you%20help%3F";
const PHONE_URL = "tel:+919428734151";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      className="bg-primary text-primary-foreground"
      id="contact"
      data-ocid="footer.section"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-primary-foreground rounded-md px-2 py-1">
                <span className="text-primary font-display font-bold text-sm">
                  PPS
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-base leading-tight">
                  Patidar Property Solution
                </p>
              </div>
            </div>
            <p className="font-body text-sm opacity-80 mb-4 leading-relaxed">
              Fast, Clear &amp; Reliable Property Deals in Gandhinagar. No
              confusion, no delays — just straightforward service.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
                data-ocid="footer.facebook_link"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
                data-ocid="footer.instagram_link"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 opacity-90">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="font-body text-sm opacity-75 hover:opacity-100 transition-opacity"
                    data-ocid={`footer.link_${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 opacity-90">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 opacity-70" />
                <p className="font-body text-sm opacity-80 leading-relaxed">
                  Kudasan, Gandhinagar, Gujarat — 382421
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="opacity-70" />
                <a
                  href={PHONE_URL}
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity font-semibold"
                  data-ocid="footer.phone_link"
                >
                  +91 94287 34151
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="opacity-70" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity font-semibold"
                  data-ocid="footer.whatsapp_link"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-70">
          <p>© {year} Patidar Property Solution. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
