import { Sparkles, BadgeIndianRupee, Clock, Store } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";

const highlights = [
  {
    icon: <BadgeIndianRupee className="h-5 w-5 text-brand-saffron" />,
    title: "High repeat value",
    desc: "Vada pav + chai is a daily habit product. Strong repeat orders and add-on upsells."
  },
  {
    icon: <Clock className="h-5 w-5 text-brand-saffron" />,
    title: "Fast, simple ops",
    desc: "Limited SKUs, predictable prep, and a workflow built for speed."
  },
  {
    icon: <Store className="h-5 w-5 text-brand-saffron" />,
    title: "Compact footprint",
    desc: "Designed for small spaces, quick setup, and low staffing requirements."
  },
  {
    icon: <Sparkles className="h-5 w-5 text-brand-saffron" />,
    title: "Brand-led experience",
    desc: "Premium look, hygiene-first ops, and delivery-friendly packaging."
  }
];

export default function FranchiseSections() {
  return (
    <Section
      eyebrow="Franchise"
      title="A premium street-food brand built to scale"
      subtitle="Low complexity, high repeat demand, and a brand customers trust."
    >
      <SectionReveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-border bg-brand-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
            <div className="text-lg font-semibold">Why this franchise works</div>
            <p className="mt-2 text-sm text-brand-muted">
              Built for speed, consistency, and delivery — without losing the Mumbai bite.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-xl border border-brand-border bg-brand-card/70 p-4">
                  <div className="flex items-center gap-2">
                    {h.icon}
                    <div className="font-semibold">{h.title}</div>
                  </div>
                  <p className="mt-2 text-sm text-brand-muted">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-card/70 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
            <div className="text-lg font-semibold">What you get</div>
            <div className="mt-3 grid gap-2 text-sm text-brand-muted">
              <div>• Brand identity, store design guidance, and signage system</div>
              <div>• Recipe SOPs + prep workflows for consistent taste</div>
              <div>• Menu strategy built for margins and fast service</div>
              <div>• Launch playbook: ops, staffing, and marketing checklist</div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                as="a"
                href="/franchise-brochure.pdf"
                variant="primary"
                target="_blank"
                rel="noreferrer"
              >
                Download brochure
              </Button>
              <Button as="a" href="#franchise-form" variant="secondary">
                Start enquiry
              </Button>
            </div>

            <p className="mt-4 text-xs text-brand-subtle">
              Investment details are shared after your enquiry.
            </p>
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
}
