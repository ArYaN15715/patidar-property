import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919428734151?text=Hi%2C%20I%27m%20looking%20for%20a%20property%20in%20Gandhinagar.%20Can%20you%20help%3F";

export default function WhatsAppCTA() {
  return (
    <section
      className="py-16 text-center"
      style={{ background: "oklch(0.45 0.15 240)" }}
      data-ocid="whatsapp_cta.section"
    >
      <div className="max-w-xl mx-auto px-4">
        {/* Urgency tag */}
        <span
          className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest"
          style={{
            background: "rgba(255,255,255,0.18)",
            color: "#fff",
            letterSpacing: "0.1em",
          }}
        >
          Quick Response Guaranteed
        </span>

        <h2
          className="font-display font-bold text-2xl sm:text-3xl mb-3 leading-tight"
          style={{ color: "#fff" }}
        >
          Looking for Property?
        </h2>
        <p
          className="font-display font-semibold text-xl sm:text-2xl mb-3"
          style={{ color: "rgba(255,255,255,0.92)" }}
        >
          Get Options in Minutes.
        </p>
        <p
          className="font-body text-sm sm:text-base mb-8"
          style={{ color: "rgba(255,255,255,0.76)" }}
        >
          Quick replies. No unnecessary delays. Just tell us what you need.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg hover:opacity-90 transition-opacity touch-safe"
            style={{ backgroundColor: "#25D366", minHeight: "56px" }}
            data-ocid="whatsapp_cta.chat_button"
          >
            <MessageCircle size={22} aria-hidden="true" />
            Chat Now on WhatsApp
          </a>
          <a
            href="tel:+919428734151"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-base shadow-md hover:bg-white/15 transition-colors touch-safe"
            style={{
              border: "2px solid rgba(255,255,255,0.6)",
              color: "#fff",
              minHeight: "56px",
            }}
            data-ocid="whatsapp_cta.call_button"
          >
            <Phone size={20} aria-hidden="true" />
            Call Now
          </a>
        </div>

        <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
          Jayesh Patel &middot; +91 94287 34151 &middot; Kudasan, Gandhinagar
        </p>
      </div>
    </section>
  );
}
