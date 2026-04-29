import { ClipboardList, Eye, Handshake, LayoutList } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell Us Your Requirement",
    description:
      "Send us a quick WhatsApp message or call. Tell us what type of property you need, your budget, and preferred area. Takes 2 minutes.",
  },
  {
    icon: LayoutList,
    step: "02",
    title: "Get Quick Options",
    description:
      "We share 2-4 matching properties fast — with photos, price, and key details. No spam. Only what fits your need.",
  },
  {
    icon: Eye,
    step: "03",
    title: "Visit the Property",
    description:
      "We arrange a site visit at your convenience. We come with you if needed. No pressure, no rush.",
  },
  {
    icon: Handshake,
    step: "04",
    title: "Close the Deal",
    description:
      "Once you finalize, we help with paperwork, token amount, and handover. Clear process, no surprises.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-16 bg-muted/30" data-ocid="how_we_work.section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
            How We Work
          </h2>
          <p className="font-body text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Simple, fast, and straightforward. No complicated process.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px pointer-events-none"
            style={{ background: "oklch(0.88 0.04 240)" }}
            aria-hidden="true"
          >
            <motion.span
              className="block h-full origin-left"
              style={{ background: "oklch(0.55 0.12 240)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center p-5 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
              data-ocid={`how_we_work.item.${i + 1}`}
            >
              {/* Step number circle with ring-pulse on view */}
              <motion.div
                className="relative w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm z-10"
                style={{ background: "oklch(0.45 0.15 240)", color: "#fff" }}
                initial={{ scale: 0.85 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: i * 0.1 + 0.2,
                }}
              >
                {/* Ring pulse — plays once on entry */}
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ border: "2px solid oklch(0.45 0.15 240)" }}
                  initial={{ scale: 1, opacity: 0.6 }}
                  whileInView={{ scale: 1.55, opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: i * 0.1 + 0.35,
                  }}
                  aria-hidden="true"
                />
                <step.icon size={24} aria-hidden="true" />
              </motion.div>

              {/* Step label */}
              <span
                className="text-xs font-bold mb-1 uppercase"
                style={{
                  color: "oklch(0.55 0.1 240)",
                  letterSpacing: "0.08em",
                }}
              >
                Step {step.step}
              </span>
              <h3 className="font-display font-bold text-base text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA below steps */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <a
            href="https://wa.me/919428734151?text=Hi%2C%20I%27m%20ready%20to%20start.%20Can%20you%20help%20me%20find%20a%20property%20in%20Gandhinagar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white shadow-md hover:opacity-90 transition-opacity touch-safe"
            style={{ backgroundColor: "#25D366", minHeight: "52px" }}
            data-ocid="how_we_work.start_cta"
          >
            Start with a WhatsApp Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
