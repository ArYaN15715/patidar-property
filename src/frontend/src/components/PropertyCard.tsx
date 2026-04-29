import { MapPin, Maximize2, MessageCircle } from "lucide-react";
import type { Property } from "../types";

interface PropertyCardProps {
  property: Property;
  index: number;
  onSelect: () => void;
}

const CATEGORY_BADGE: Record<
  string,
  { label: string; bg: string; color: string }
> = {
  rent: { label: "For Rent", bg: "#e8f5e9", color: "#2e7d32" },
  buy: { label: "For Sale", bg: "#e3f2fd", color: "#1565c0" },
  commercial: { label: "Commercial", bg: "#fff3e0", color: "#e65100" },
};

const EXTRA_BADGE: Record<string, { bg: string; color: string }> = {
  Popular: { bg: "oklch(0.65 0.18 150)", color: "#fff" },
  New: { bg: "oklch(0.45 0.15 240)", color: "#fff" },
  Commercial: { bg: "#e65100", color: "#fff" },
};

export default function PropertyCard({
  property,
  index,
  onSelect,
}: PropertyCardProps) {
  const waUrl = `https://wa.me/919428734151?text=${encodeURIComponent(property.whatsappMessage)}`;
  const catBadge = CATEGORY_BADGE[property.category];

  return (
    <div
      className="card-hover overflow-hidden flex flex-col group/card transition-all duration-300 hover:scale-[1.02] hover:shadow-elevated"
      data-ocid={`listings.item.${index}`}
    >
      {/* Clickable top section — image + details */}
      <button
        type="button"
        onClick={onSelect}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-t-lg"
        aria-label={`View details for ${property.title}`}
        data-ocid={`listings.view_details.${index}`}
      >
        {/* Image 4:3 with overflow clip for enquire slide-up */}
        <div
          className="relative overflow-hidden"
          style={{ paddingTop: "75%", position: "relative" }}
        >
          <div className="absolute inset-0">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-400"
              loading="lazy"
            />
            {/* Hover overlay for enquire button */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center pb-3 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out pointer-events-none">
              <span
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle size={13} aria-hidden="true" />
                Quick Enquire
              </span>
            </div>

            {/* Category pill — top left */}
            {catBadge && (
              <span
                className="absolute top-2.5 left-2.5 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: catBadge.bg, color: catBadge.color }}
              >
                {catBadge.label}
              </span>
            )}
            {/* Extra badge (Popular / New) — top right */}
            {property.badge && property.badge !== "Commercial" && (
              <span
                className="absolute top-2.5 right-2.5 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background:
                    EXTRA_BADGE[property.badge]?.bg ?? "oklch(0.45 0.15 240)",
                  color: EXTRA_BADGE[property.badge]?.color ?? "#fff",
                }}
              >
                {property.badge}
              </span>
            )}
          </div>
        </div>

        {/* Card body */}
        <div className="p-4 pb-3">
          {/* Price + title */}
          <p
            className="font-display font-bold text-lg mb-0.5"
            style={{ color: "oklch(0.45 0.15 240)" }}
          >
            {property.price}
          </p>
          <h3 className="font-display font-bold text-sm text-foreground line-clamp-2 leading-snug mb-1">
            {property.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-3">{property.type}</p>

          {/* Location + area */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1 min-w-0">
              <MapPin size={11} aria-hidden="true" />
              <span className="truncate">{property.location}</span>
            </span>
            <span className="flex items-center gap-1">
              <Maximize2 size={11} aria-hidden="true" />
              {property.area}
            </span>
          </div>

          {/* Description — 2 lines max */}
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {property.description}
          </p>
        </div>
      </button>

      {/* CTA bar */}
      <div className="mt-auto px-4 pb-4 pt-2 flex gap-2 border-t border-border">
        <button
          type="button"
          onClick={onSelect}
          className="flex-1 py-2.5 rounded-md border font-semibold text-sm transition-colors touch-safe hover:bg-primary hover:text-primary-foreground"
          style={{
            borderColor: "oklch(0.45 0.15 240)",
            color: "oklch(0.45 0.15 240)",
            background: "transparent",
            minHeight: "44px",
          }}
          data-ocid={`listings.view_details_btn.${index}`}
        >
          View Details
        </button>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 flex-1 py-2.5 rounded-md text-white text-sm font-semibold hover:opacity-90 transition-opacity touch-safe"
          style={{ backgroundColor: "#25D366", minHeight: "44px" }}
          data-ocid={`listings.enquire.${index}`}
        >
          <MessageCircle size={15} aria-hidden="true" />
          Enquire
        </a>
      </div>
    </div>
  );
}
