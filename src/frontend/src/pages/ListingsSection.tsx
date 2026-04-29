import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import PropertyDetailModal from "../components/PropertyDetailModal";
import { properties } from "../data/properties";
import type { PropertyCategory } from "../types";
import type { Property } from "../types";
import ActionBar from "./ActionBar";

const CATEGORIES: { label: string; value: PropertyCategory }[] = [
  { label: "All", value: "all" },
  { label: "For Rent", value: "rent" },
  { label: "For Sale", value: "buy" },
  { label: "Commercial", value: "commercial" },
];

export default function ListingsSection() {
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>("all");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );

  const filtered =
    activeCategory === "all"
      ? properties
      : properties.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ActionBar sits above listings — passes filter state down */}
      <ActionBar activeCategory={activeCategory} onFilter={setActiveCategory} />

      <section
        id="properties"
        className="py-14 bg-muted/30"
        data-ocid="listings.section"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-8 text-center sm:text-left">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
              Featured Properties
            </h2>
            <p className="font-body text-muted-foreground text-sm sm:text-base">
              Browse available properties in Kudasan &amp; Gandhinagar
            </p>
          </div>

          {/* Filter tabs */}
          <div
            className="flex gap-2 flex-wrap mb-8"
            role="tablist"
            aria-label="Property category filter"
          >
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat.value}
                role="tab"
                aria-selected={activeCategory === cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className="px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 touch-safe"
                style={{
                  minHeight: "40px",
                  background:
                    activeCategory === cat.value
                      ? "oklch(0.45 0.15 240)"
                      : "#fff",
                  color:
                    activeCategory === cat.value
                      ? "#fff"
                      : "oklch(0.45 0.15 240)",
                  borderColor: "oklch(0.45 0.15 240)",
                }}
                data-ocid={`listings.filter_${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="listings.grid"
            >
              {filtered.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={index + 1}
                  onSelect={() => setSelectedProperty(property)}
                />
              ))}
            </div>
          ) : (
            <div
              className="py-16 text-center rounded-xl border border-border bg-card"
              data-ocid="listings.empty_state"
            >
              <p className="text-4xl mb-4" aria-hidden="true">
                🏠
              </p>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                No Properties Found
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                We don&#39;t have matching listings right now. Contact us — we
                may have unlisted options.
              </p>
              <a
                href="https://wa.me/919428734151?text=Hi%2C%20I%27m%20looking%20for%20a%20property%20but%20didn%27t%20find%20what%20I%20need.%20Can%20you%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm text-white hover:opacity-90 transition-opacity touch-safe"
                style={{ backgroundColor: "#25D366" }}
              >
                Ask on WhatsApp
              </a>
            </div>
          )}
        </div>

        {/* Detail Modal */}
        {selectedProperty && (
          <PropertyDetailModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </section>
    </>
  );
}
