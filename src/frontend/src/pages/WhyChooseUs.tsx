import { MapPin, MessageSquareText, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    description:
      "No hidden details, no false promises. We tell you exactly what a property offers and what it doesn't. You won't be surprised after visiting.",
  },
  {
    icon: Zap,
    title: "Fast Response Time",
    description:
      "We respond on WhatsApp within minutes during business hours. No waiting 2 days to hear back. Quick options, quick visit, quick decision.",
  },
  {
    icon: MapPin,
    title: "Local Market Knowledge",
    description:
      "We operate only in Kudasan and Gandhinagar. We know which buildings are well-maintained, which areas have parking issues, and what fair pricing looks like.",
  },
  {
    icon: ShieldCheck,
    title: "Practical Property Options",
    description:
      "We don't show you properties outside your budget or type. We listen to your requirement and share only relevant options — saving your time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-background" data-ocid="why_us.section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
            Why Choose Patidar Property Solution?
          </h2>
          <p className="font-body text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            {
              "We're not the biggest broker in Gandhinagar. But we're reliable, direct, and we don't waste your time."
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="group bg-card rounded-xl shadow-sm p-6 flex gap-4 border border-border transition-shadow hover:shadow-md"
              style={{ borderLeft: "4px solid oklch(0.45 0.15 240)" }}
              data-ocid={`why_us.item.${i + 1}`}
            >
              <div
                className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "oklch(0.92 0.04 240)",
                  color: "oklch(0.45 0.15 240)",
                }}
              >
                <reason.icon size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-foreground mb-1.5">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
