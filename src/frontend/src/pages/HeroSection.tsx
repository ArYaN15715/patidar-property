import {
  ChevronDown,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const WHATSAPP_URL =
  "https://wa.me/919428734151?text=Hi%2C%20I%27m%20looking%20for%20a%20property%20in%20Gandhinagar.%20Can%20you%20help%3F";
const PHONE_URL = "tel:+919428734151";

const BADGES = [
  { icon: ShieldCheck, label: "Local Expert" },
  { icon: Zap, label: "Clear Communication" },
  { icon: MapPin, label: "Verified Listings" },
];

export default function HeroSection() {
  const scrollToProperties = () => {
    document
      .querySelector("#properties")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh", paddingTop: "60px" }}
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80)",
        }}
        aria-hidden="true"
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,20,60,0.72) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Breathing animated overlay — very subtle, 8s loop */}
      <div
        className="absolute inset-0 animate-hero-breathe"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(30,90,168,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 py-12 text-center">
        {/* Headline — no animation, above the fold */}
        <h1
          className="font-display font-bold leading-tight mb-5"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", color: "#fff" }}
        >
          Find the Right Property in Gandhinagar{" "}
          <span style={{ color: "#7ECFF5" }}>
            &#8212; Fast &amp; Without Confusion
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-body text-base sm:text-lg mb-6 max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.87)" }}
        >
          Clear deals, genuine listings, and quick responses for rent, buy, and
          commercial spaces.
        </p>

        {/* Phone number */}
        <p
          className="font-body font-semibold text-base sm:text-lg mb-8"
          style={{ color: "rgba(255,255,255,0.92)" }}
        >
          +91 94287 34151 &mdash; Jayesh Patel
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-semibold text-base rounded-lg shadow-lg hover:opacity-90 transition-opacity touch-safe px-7 animate-shimmer-glow"
            style={{
              backgroundColor: "#25D366",
              color: "#fff",
              minHeight: "52px",
            }}
            data-ocid="hero.whatsapp_cta"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Chat on WhatsApp
          </a>
          <a
            href={PHONE_URL}
            className="flex items-center justify-center gap-2 font-semibold text-base rounded-lg shadow-md hover:bg-white/10 transition-colors touch-safe px-7"
            style={{
              border: "2px solid #fff",
              color: "#fff",
              minHeight: "52px",
            }}
            data-ocid="hero.call_cta"
          >
            <Phone size={20} aria-hidden="true" />
            Call Now
          </a>
        </div>

        {/* Trust badges — staggered slide-up after hero text */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {BADGES.map(({ icon: Icon, label }, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.2 + i * 0.1,
              }}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.28)",
                color: "#fff",
              }}
            >
              <Icon size={13} aria-hidden="true" />
              {label}
            </motion.span>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={scrollToProperties}
          className="inline-flex flex-col items-center gap-1 transition-opacity hover:opacity-90"
          style={{
            color: "rgba(255,255,255,0.65)",
            animation: "scroll-bounce 2s ease-in-out infinite",
          }}
          aria-label="Scroll to view properties"
          data-ocid="hero.view_properties_link"
        >
          <span
            className="text-xs font-medium tracking-wide uppercase"
            style={{ letterSpacing: "0.08em" }}
          >
            View Properties
          </span>
          <ChevronDown size={22} aria-hidden="true" />
        </button>
      </div>

      <style>{`
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.65; }
          50% { transform: translateY(5px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
