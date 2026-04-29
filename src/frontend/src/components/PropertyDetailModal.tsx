import {
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Layers,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  Sofa,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Property } from "../types";

interface PropertyDetailModalProps {
  property: Property;
  onClose: () => void;
}

const CATEGORY_LABEL: Record<string, string> = {
  rent: "For Rent",
  buy: "For Sale",
  commercial: "Commercial",
};

export default function PropertyDetailModal({
  property,
  onClose,
}: PropertyDetailModalProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const waUrl = `https://wa.me/919428734151?text=${encodeURIComponent(property.whatsappMessage)}`;

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Focus dialog on mount
  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  const prevImg = () =>
    setImgIndex(
      (i) => (i - 1 + property.images.length) % property.images.length,
    );
  const nextImg = () => setImgIndex((i) => (i + 1) % property.images.length);

  const specs = [
    { Icon: MapPin, label: "Location", value: property.location },
    { Icon: Maximize2, label: "Area", value: property.area },
    { Icon: Compass, label: "Facing", value: property.facing },
    { Icon: Layers, label: "Floor", value: property.floor },
    { Icon: Car, label: "Parking", value: property.parking },
    { Icon: Sofa, label: "Furnishing", value: property.furnishing },
  ].filter(({ value }) => value && value !== "NA");

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-end sm:items-center justify-center"
      style={{ background: "rgba(0,0,0,0.6)" }}
      data-ocid="property_detail.dialog"
    >
      {/* Backdrop click-to-close */}
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Close property detail"
        tabIndex={-1}
        data-ocid="property_detail.backdrop"
      />

      <dialog
        ref={dialogRef}
        open
        className="relative bg-card w-full sm:max-w-2xl overflow-y-auto shadow-2xl m-0 p-0 border-0 flex flex-col sm:[border-radius:16px]"
        style={{
          maxHeight: "95svh",
          borderRadius: "16px 16px 0 0",
        }}
        aria-label={property.title}
      >
        {/* Image carousel */}
        <div
          className="relative bg-muted overflow-hidden shrink-0"
          style={{ height: "220px" }}
        >
          <img
            src={property.images[imgIndex]}
            alt={`${property.title} \u2014 view ${imgIndex + 1} of ${property.images.length}`}
            className="w-full h-full object-cover transition-opacity duration-200"
          />

          {/* Prev / Next */}
          {property.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImg}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 hover:opacity-90 transition-opacity"
                style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
                aria-label="Previous image"
                data-ocid="property_detail.prev_image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={nextImg}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 hover:opacity-90 transition-opacity"
                style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
                aria-label="Next image"
                data-ocid="property_detail.next_image"
              >
                <ChevronRight size={18} />
              </button>
              {/* Dot indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {property.images.map((img, i) => (
                  <button
                    type="button"
                    key={`dot-${img.slice(-20)}`}
                    onClick={() => setImgIndex(i)}
                    className="w-2 h-2 rounded-full transition-colors"
                    style={{
                      background:
                        i === imgIndex ? "#fff" : "rgba(255,255,255,0.45)",
                    }}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Category badge */}
          <span
            className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: "oklch(0.45 0.15 240)", color: "#fff" }}
          >
            {CATEGORY_LABEL[property.category] ?? property.category}
          </span>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 rounded-full p-1.5 hover:opacity-90 transition-opacity"
            style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
            aria-label="Close"
            data-ocid="property_detail.close_button"
          >
            <X size={18} />
          </button>
        </div>

        {/* Thumbnail strip */}
        {property.images.length > 1 && (
          <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar bg-muted/40 border-b border-border shrink-0">
            {property.images.map((img, i) => (
              <button
                type="button"
                key={`thumb-${img.slice(-20)}`}
                onClick={() => setImgIndex(i)}
                className="shrink-0 rounded overflow-hidden transition-opacity"
                style={{
                  width: "56px",
                  height: "42px",
                  opacity: i === imgIndex ? 1 : 0.55,
                  outline:
                    i === imgIndex ? "2px solid oklch(0.45 0.15 240)" : "none",
                  outlineOffset: "2px",
                }}
                aria-label={`Thumbnail ${i + 1}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 p-5">
          {/* Title + price */}
          <div className="flex items-start justify-between gap-3 mb-1">
            <h2 className="font-display font-bold text-xl text-foreground leading-snug flex-1">
              {property.title}
            </h2>
            <p
              className="font-bold text-xl shrink-0"
              style={{ color: "oklch(0.45 0.15 240)" }}
            >
              {property.price}
            </p>
          </div>
          <p className="text-sm text-muted-foreground mb-5">{property.type}</p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
            {specs.map(({ Icon, label, value }) => (
              <div key={label} className="bg-muted rounded-lg p-3">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-0.5">
                  <Icon size={12} aria-hidden="true" />
                  <span>{label}</span>
                </div>
                <p className="font-semibold text-sm text-foreground leading-tight">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-5">
            <h3 className="font-display font-bold text-base mb-2">
              About This Property
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="mb-5">
            <h3 className="font-display font-bold text-base mb-3">
              Amenities &amp; Features
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
              {property.amenities.map((amenity) => (
                <li
                  key={amenity}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle2
                    size={15}
                    className="text-primary shrink-0"
                    aria-hidden="true"
                  />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} aria-hidden="true" />
            <span>Kudasan, Gandhinagar, Gujarat</span>
          </div>
        </div>

        {/* Sticky CTA bar */}
        <div
          className="shrink-0 flex gap-3 px-5 py-4 border-t border-border"
          style={{ background: "var(--color-card, oklch(1.0 0.004 230))" }}
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-lg text-white font-semibold text-base hover:opacity-90 transition-opacity touch-safe"
            style={{ backgroundColor: "#25D366" }}
            data-ocid="property_detail.whatsapp_button"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Enquire on WhatsApp
          </a>
          <a
            href="tel:+919428734151"
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-white font-semibold text-base hover:opacity-90 transition-opacity touch-safe"
            style={{ background: "oklch(0.45 0.15 240)" }}
            data-ocid="property_detail.call_button"
          >
            <Phone size={18} aria-hidden="true" />
            Call
          </a>
        </div>
      </dialog>
    </div>
  );
}
