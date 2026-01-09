import Image from "next/image";
import { BRAND } from "@/lib/brand";
import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";

export default function DeliveryCTA() {
  const hasSwiggy = Boolean(BRAND.swiggyUrl);
  const hasZomato = Boolean(BRAND.zomatoUrl);
  const hasDeliveryPlatforms = hasSwiggy || hasZomato;

  return (
    <Section
      eyebrow="Delivery"
      title="Order in 2 taps"
      subtitle="Hot vadas. Kadak chai. Delivered across Mohali/Chandigarh."
    >
      <SectionReveal>
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-brand-border bg-brand-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
            <div className="text-xl font-semibold">
              {hasDeliveryPlatforms ? "Available on Swiggy & Zomato" : "Delivery and pickup options"}
            </div>
            <p className="mt-2 text-sm text-brand-muted">
              {hasDeliveryPlatforms
                ? "Quick delivery + packaging designed to keep crunch intact."
                : "Call or WhatsApp to place a quick order for pickup or delivery."}
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              {hasSwiggy && (
                <Button as="a" href={BRAND.swiggyUrl} variant="secondary">
                  <Image src="/logos/swiggy.svg" alt="Swiggy" width={18} height={18} />
                  Swiggy
                </Button>
              )}
              {hasZomato && (
                <Button as="a" href={BRAND.zomatoUrl} variant="secondary">
                  <Image src="/logos/zomato.svg" alt="Zomato" width={18} height={18} />
                  Zomato
                </Button>
              )}
              <Button as="a" href={`tel:${BRAND.phone}`} variant="primary">
                Call to Order
              </Button>
            </div>

            <p className="mt-4 text-xs text-brand-subtle">
              Delivery availability depends on your area and platform coverage.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-card/70 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
            <div className="text-sm uppercase tracking-wide text-brand-saffron/90">
              Pro tip
            </div>
            <div className="mt-2 text-lg font-semibold">
              “Vada Pav + Cutting Chai” hits different.
            </div>
            <p className="mt-2 text-sm text-brand-muted">
              If it’s your first time, start with the Classic. If you love spice, go Fiery Garlic.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-brand-muted">
              <div>• Balanced chutneys (sweet + spicy)</div>
              <div>• Crunchy chura for texture</div>
              <div>• Fresh, hot vadas</div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
}
