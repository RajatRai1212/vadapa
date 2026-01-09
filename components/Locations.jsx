import { MapPin, Clock, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";
import { LOCATIONS } from "@/data/locations";
import { BRAND } from "@/lib/brand";

export default function Locations() {
  return (
    <Section
      eyebrow="Locations"
      title="Today 1 outlet. Tomorrow many."
      subtitle="Designed to scale for franchise growth—same taste, same SOPs, same brand."
    >
      <SectionReveal>
        <div className="grid gap-5 lg:grid-cols-2">
          {LOCATIONS.map((l) => (
            <div key={l.id} className="rounded-2xl border border-brand-border bg-brand-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{l.city} — {l.area}</div>
                {l.isActive ? (
                  <span className="rounded-full bg-brand-chutney/15 text-brand-chutney border border-brand-chutney/20 px-3 py-1 text-xs font-semibold">
                    Open
                  </span>
                ) : (
                  <span className="rounded-full bg-brand-card text-brand-muted border border-brand-border px-3 py-1 text-xs font-semibold">
                    Coming soon
                  </span>
                )}
              </div>
              <div className="mt-4 grid gap-2 text-sm text-brand-muted">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-brand-saffron" />
                  <span>{l.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 text-brand-saffron" />
                  <span>{l.hours}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 text-brand-saffron" />
                  <a className="hover:text-brand-text" href={`tel:${l.phone}`}>{l.phone}</a>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-brand-card/70 px-4 py-2.5 text-sm font-semibold hover:bg-brand-card"
                  href={BRAND.mapsUrl}
                >
                  View on Maps
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-brand-saffron px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:brightness-110"
                  href="/franchise"
                >
                  Add a location (Franchise)
                </a>
              </div>

              <p className="mt-3 text-xs text-brand-subtle">
                Store details and photos are updated regularly.
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </Section>
  );
}
