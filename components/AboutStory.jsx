import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";

export default function AboutStory() {
  return (
    <Section
      eyebrow="About"
      title="Mumbai street food authenticity, built with discipline"
      subtitle="We’re obsessed with the details: fresh vadas, crunchy chura, balanced chutneys, and consistent taste."
    >
      <SectionReveal>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl border border-brand-border bg-brand-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
            <h2 className="text-2xl font-semibold">Our story</h2>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed">
              City Vada Pav and Chai started with one goal: bring the real Mumbai bite to Mohali —
              not a “vada burger”, not watered-down spice — the real deal.
            </p>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed">
              The secret isn’t just the vada. It’s the full experience: chutneys, garlic powder,
              crunch, temperature, speed — and the consistency that makes people trust you.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-brand-muted">
              <div className="rounded-xl border border-brand-border bg-brand-card/70 p-4">
                <div className="font-semibold text-brand-text">Quality promise</div>
                <div className="mt-1">Fresh batches. Hot service. Clean setup.</div>
              </div>
              <div className="rounded-xl border border-brand-border bg-brand-card/70 p-4">
                <div className="font-semibold text-brand-text">Brand vibe</div>
                <div className="mt-1">Street-style comfort, premium presentation.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-card/70 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
            <Image
              src="/images/about.png"
              alt="About City Vada Pav and Chai"
              width={900}
              height={700}
              className="rounded-2xl border border-brand-border bg-brand-card"
            />
            <div className="mt-3 text-xs text-brand-subtle">
              A glimpse into our brand style, packaging, and hygiene-first service.
            </div>
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
}
