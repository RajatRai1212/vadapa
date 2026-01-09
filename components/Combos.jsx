import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";
import Chip from "@/components/ui/Chip";
import { COMBOS } from "@/data/combos";

export default function Combos() {
  return (
    <Section
      eyebrow="Combos"
      title="Fast decisions. Big satisfaction."
      subtitle="Designed for walk-ins and delivery — high-margin pairings that feel like a steal."
    >
      <SectionReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMBOS.map((c) => (
            <div key={c.id} className="rounded-2xl border border-brand-border bg-brand-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
              <div className="text-lg font-semibold">{c.name}</div>
              <div className="mt-1 text-sm text-brand-muted">{c.description}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(c.tags || []).map((t) => (
                  <Chip key={t} tone="medium">{t}</Chip>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-brand-muted">Combo price</div>
                <div className="text-lg font-semibold">₹{c.price}</div>
              </div>
              <div className="mt-3 text-xs text-brand-subtle">
                Combos are curated for fast decisions and great value.
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </Section>
  );
}
