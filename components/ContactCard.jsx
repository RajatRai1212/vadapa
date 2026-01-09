import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import { BRAND } from "@/lib/brand";

export default function ContactCard() {
  return (
    <Section
      eyebrow="Contact"
      title="Visit, call, or message us"
      subtitle="We serve Mohali/Chandigarh. For franchise, use the dedicated page for faster response."
    >
      <SectionReveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-border bg-brand-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
            <address className="not-italic grid gap-3 text-sm text-brand-muted">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-saffron" />
                <span>{BRAND.addressLine}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-brand-saffron" />
                <span>{BRAND.hours}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-brand-saffron" />
                <a className="hover:text-brand-text" href={`tel:${BRAND.phone}`}>{BRAND.phone}</a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-brand-saffron" />
                <a className="hover:text-brand-text" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </div>
            </address>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button as="a" href={BRAND.mapsUrl} variant="secondary">
                Open in Maps
              </Button>
              <Button as="a" href="/franchise" variant="primary">
                Franchise Enquiry
              </Button>
            </div>

            <p className="mt-4 text-xs text-brand-subtle">
              Map embed needs an API key; use “Open in Maps” button as default.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-card/70 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
            <div className="text-lg font-semibold">Quick note</div>
            <p className="mt-2 text-sm text-brand-muted">
              Want bulk orders for office/party or want to list a new location? Message us on WhatsApp —
              it’s the fastest.
            </p>
            <a
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-brand-chutney px-5 py-3 text-sm font-semibold text-white shadow-soft hover:brightness-110"
              href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
                "Hi! I want to place a bulk order / ask a question."
              )}`}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
}
