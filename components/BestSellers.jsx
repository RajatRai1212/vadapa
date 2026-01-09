import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";
import Chip from "@/components/ui/Chip";
import { MENU_ITEMS } from "@/data/menu";

const spiceTone = {
  hot: "hot",
  medium: "medium",
  mild: "mild"
};

export default function BestSellers() {
  const items = MENU_ITEMS.filter((item) =>
    (item.tags || []).some((tag) => ["Best Seller", "Signature", "Fan Favourite"].includes(tag))
  ).slice(0, 6);

  return (
    <Section
      eyebrow="Best Sellers"
      title="The crowd favorites that drive repeat orders"
      subtitle="Top picks for first-timers and regulars."
    >
      <SectionReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-brand-border bg-brand-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="mt-1 text-sm text-brand-muted">{item.description}</div>
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
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-brand-muted">Starting at</div>
                <div className="text-lg font-semibold">₹{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </Section>
  );
}
