import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";
import Chip from "@/components/ui/Chip";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/menu";

const spiceTone = {
  hot: "hot",
  medium: "medium",
  mild: "mild"
};

export default function MenuGrid() {
  return (
    <Section
      eyebrow="Menu"
      title="Mumbai street staples, done right"
      subtitle="Simple, fast, and built for repeat cravings."
    >
      <SectionReveal>
        <div className="grid gap-8">
          {MENU_CATEGORIES.map((cat) => {
            const items = MENU_ITEMS.filter((item) => item.category === cat.key);
            if (!items.length) return null;

            return (
              <div key={cat.key}>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{cat.label}</h3>
                  <span className="text-xs text-brand-subtle">{items.length} items</span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-brand-border bg-brand-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-soft"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-lg font-semibold">{item.name}</div>
                          <div className="mt-1 text-sm text-brand-muted">{item.description}</div>
                        </div>
                        <div className="text-lg font-semibold">₹{item.price}</div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {(item.tags || []).map((tag) => (
                          <Chip key={tag} tone="neutral">
                            {tag}
                          </Chip>
                        ))}
                        {item.spiceLevel && (
                          <Chip tone={spiceTone[item.spiceLevel] || "neutral"}>
                            {item.spiceLevel} spice
                          </Chip>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionReveal>
    </Section>
  );
}
