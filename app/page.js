import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import WhyLoveUs from "@/components/WhyLoveUs";
import Combos from "@/components/Combos";
import DeliveryCTA from "@/components/DeliveryCTA";
import Testimonials from "@/components/Testimonials";
import PressLogos from "@/components/PressLogos";
import Locations from "@/components/Locations";
import JsonLd from "@/components/JsonLd";
import { BRAND } from "@/lib/brand";
import FAQ from "@/components/FAQ";
import { buildMetadata, getFaqs } from "@/lib/seo";

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata("home");
}

export default function HomePage() {
  const faqs = getFaqs("home");

  return (
    <>
      <JsonLd pageKey="home" />
      <Hero />
      <PressLogos />
      <BestSellers />
      <WhyLoveUs />
      <Combos />
      <DeliveryCTA />
      <Testimonials />
      <Locations />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-border bg-brand-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-wide text-brand-saffron/90">
                  Franchise Expansion
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                  Built for repeat demand. Built for simple operations.
                </h2>
                <p className="mt-3 text-brand-muted max-w-2xl">
                  If you want a premium street-food brand with high repeat customers,
                  low kitchen complexity, and strong delivery potential — let’s talk.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-brand-saffron px-5 py-3 text-sm font-semibold text-white shadow-soft hover:brightness-110"
                  href="/franchise"
                >
                  Franchise Enquiry
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-brand-card/70 px-5 py-3 text-sm font-semibold text-brand-text hover:bg-brand-card"
                  href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
                    "Hi! I want franchise details for City Vada Pav and Chai."
                  )}`}
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ
        title="Quick answers"
        subtitle="Answers to the most common questions about our food, delivery, and franchise model."
        items={faqs}
      />
    </>
  );
}
