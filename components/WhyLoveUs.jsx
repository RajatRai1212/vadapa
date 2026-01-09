import { ShieldCheck, Sparkles, BadgeIndianRupee, Soup } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";

export default function WhyLoveUs() {
  const points = [
    {
      icon: <Soup className="h-5 w-5 text-brand-saffron" />,
      title: "Freshness you can taste",
      desc: "Vadas and chura made fresh for that hot, crispy bite — not soggy, not stale."
    },
    {
      icon: <Sparkles className="h-5 w-5 text-brand-saffron" />,
      title: "Signature flavour balance",
      desc: "Spicy + sweet chutneys, fiery garlic powder, and crunchy textures done right."
    },
    {
      icon: <BadgeIndianRupee className="h-5 w-5 text-brand-saffron" />,
      title: "Pocket-friendly, premium vibe",
      desc: "You get that street-food comfort without compromising on hygiene or presentation."
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-brand-saffron" />,
      title: "Consistency (the franchise gold)",
      desc: "Simple SKUs and repeatable prep = reliable taste across outlets and teams."
    }
  ];

  return (
    <Section
      eyebrow="Why People Love Us"
      title="Not just snacks — a proper Mumbai experience"
      subtitle="We’re building a brand people trust: clean, consistent, and crazy-craveable."
    >
      <SectionReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-brand-border bg-brand-card/70 p-5 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-center gap-2">
                {p.icon}
                <div className="font-semibold">{p.title}</div>
              </div>
              <p className="mt-2 text-sm text-brand-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </Section>
  );
}
