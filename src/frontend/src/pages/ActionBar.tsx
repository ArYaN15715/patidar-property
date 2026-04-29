import type { PropertyCategory } from "../types";

interface ActionBarProps {
  activeCategory?: PropertyCategory;
  onFilter?: (category: PropertyCategory) => void;
}

const actions: { label: string; category: PropertyCategory; emoji: string }[] =
  [
    { label: "Rent Property", category: "rent", emoji: "🏠" },
    { label: "Buy Property", category: "buy", emoji: "🏡" },
    { label: "Shop / Office", category: "commercial", emoji: "🏢" },
    { label: "Sell Property", category: "all", emoji: "📋" },
  ];

export default function ActionBar({
  activeCategory = "all",
  onFilter,
}: ActionBarProps) {
  const handleClick = (category: PropertyCategory) => {
    if (category === "all") {
      // "Sell Property" scrolls to footer/contact
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (onFilter) onFilter(category);
    document
      .querySelector("#properties")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="sticky z-40 border-b border-border shadow-sm"
      style={{
        top: "60px",
        background: "var(--color-muted, oklch(0.94 0.01 230))",
      }}
      data-ocid="action_bar.section"
    >
      <div className="max-w-6xl mx-auto px-0 sm:px-4">
        {/* Mobile: horizontal scroll strip */}
        <div className="flex sm:hidden overflow-x-auto gap-2 px-3 py-3 no-scrollbar">
          {actions.map((action) => {
            const isActive =
              action.category !== "all" && activeCategory === action.category;
            return (
              <button
                type="button"
                key={action.category + action.label}
                onClick={() => handleClick(action.category)}
                className="flex items-center gap-2 shrink-0 rounded-lg px-4 font-semibold text-sm border transition-colors duration-200"
                style={{
                  minHeight: "44px",
                  background: isActive ? "oklch(0.45 0.15 240)" : "#fff",
                  color: isActive ? "#fff" : "oklch(0.45 0.15 240)",
                  borderColor: "oklch(0.45 0.15 240)",
                }}
                aria-pressed={isActive}
                data-ocid={`action_bar.${action.category}_button`}
              >
                <span aria-hidden="true">{action.emoji}</span>
                {action.label}
              </button>
            );
          })}
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden sm:grid grid-cols-4">
          {actions.map((action) => {
            const isActive =
              action.category !== "all" && activeCategory === action.category;
            return (
              <button
                type="button"
                key={action.category + action.label}
                onClick={() => handleClick(action.category)}
                className="flex flex-row items-center justify-center gap-2 py-4 px-3 font-semibold text-sm border-r border-border last:border-0 transition-colors duration-200"
                style={{
                  minHeight: "56px",
                  background: isActive ? "oklch(0.45 0.15 240)" : "transparent",
                  color: isActive ? "#fff" : "oklch(0.15 0.015 230)",
                }}
                aria-pressed={isActive}
                data-ocid={`action_bar.${action.category}_button`}
              >
                <span className="text-lg" aria-hidden="true">
                  {action.emoji}
                </span>
                <span>{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
