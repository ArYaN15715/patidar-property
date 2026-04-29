import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ravi M.",
    location: "Kudasan",
    rating: 5,
    text: "Found a 2BHK on rent within 3 days. Jayesh bhai showed me exactly what I asked for. No runaround, no wasted visits.",
  },
  {
    name: "Priya S.",
    location: "Gandhinagar",
    rating: 5,
    text: "Bought my first shop through Patidar Property. Clear deal, no hidden charges. Would recommend to anyone looking for commercial space.",
  },
  {
    name: "Mehul T.",
    location: "Sector 12",
    rating: 4,
    text: "Quick response. I told my requirements in the morning and got 3 matching options by evening. Very practical service.",
  },
  {
    name: "Hetal P.",
    location: "Kudasan",
    rating: 5,
    text: "Rented out my flat within 2 weeks. They handled all the paperwork and tenant verification. Straightforward and honest.",
  },
];

function StarRow({ count, animate }: { count: number; animate?: boolean }) {
  const keys = ["s1", "s2", "s3", "s4", "s5"];
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {keys.map((k, i) =>
        animate ? (
          <motion.span
            key={k}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.05 }}
          >
            <Star
              size={14}
              fill={i < count ? "currentColor" : "none"}
              className={
                i < count ? "text-yellow-400" : "text-muted-foreground/40"
              }
              aria-hidden="true"
            />
          </motion.span>
        ) : (
          <Star
            key={k}
            size={14}
            fill={i < count ? "currentColor" : "none"}
            className={
              i < count ? "text-yellow-400" : "text-muted-foreground/40"
            }
            aria-hidden="true"
          />
        ),
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 bg-card" data-ocid="testimonials.section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
            What Our Clients Say
          </h2>
          <p className="font-body text-muted-foreground text-sm sm:text-base">
            Real feedback from people who found their property through us.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll */}
        <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="snap-start shrink-0 w-[82vw] bg-background rounded-xl border border-border p-5 shadow-sm"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <Quote
                size={20}
                className="text-primary/30 mb-3"
                aria-hidden="true"
              />
              <StarRow count={t.rating} />
              <p className="font-body text-sm text-foreground mt-3 mb-4 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: "oklch(0.92 0.04 240)",
                    color: "oklch(0.45 0.15 240)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
              className="bg-background rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <Quote
                size={20}
                className="text-primary/30 mb-3"
                aria-hidden="true"
              />
              <StarRow count={t.rating} animate />
              <p className="font-body text-sm text-foreground mt-3 mb-4 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: "oklch(0.92 0.04 240)",
                    color: "oklch(0.45 0.15 240)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
