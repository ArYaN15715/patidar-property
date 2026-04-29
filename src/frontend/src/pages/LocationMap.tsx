import { ExternalLink, MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <section
      className="py-16 bg-background"
      id="location"
      data-ocid="location_map.section"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
            Find Us in Kudasan, Gandhinagar
          </h2>
          <p className="font-body text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Come visit us or just drop us a message — we're easy to find.
          </p>
        </div>

        {/* Map container */}
        <div
          className="rounded-xl overflow-hidden border border-border shadow-md"
          style={{ minHeight: "280px" }}
        >
          <iframe
            title="Patidar Property Solution — Kudasan, Gandhinagar"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.6200%2C23.2200%2C72.6600%2C23.2600&layer=mapnik&marker=23.2400%2C72.6400"
            width="100%"
            loading="lazy"
            className="block w-full"
            style={{ height: "clamp(280px, 40vw, 420px)", border: "none" }}
            allowFullScreen
            aria-label="Map showing Kudasan, Gandhinagar, Gujarat"
            data-ocid="location_map.iframe"
          />
        </div>

        {/* Address + CTA row */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
          <div className="flex items-center gap-3 text-foreground">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{
                background: "oklch(0.92 0.06 240)",
                color: "oklch(0.45 0.15 240)",
              }}
            >
              <MapPin size={18} aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-sm leading-tight">
                Patidar Property Solution
              </p>
              <p className="text-xs text-muted-foreground">
                Kudasan, Gandhinagar, Gujarat 382421
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Kudasan+Gandhinagar+Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 font-semibold text-sm text-primary-foreground hover:opacity-90 transition-smooth"
            style={{ background: "oklch(0.45 0.15 240)" }}
            data-ocid="location_map.directions_button"
          >
            <ExternalLink size={15} aria-hidden="true" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
