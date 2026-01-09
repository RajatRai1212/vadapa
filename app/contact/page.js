import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import { buildMetadata, getFaqs } from "@/lib/seo";

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata("contact");
}

export default function ContactPage() {
  const faqs = getFaqs("contact");

  return (
    <>
      <JsonLd pageKey="contact" />
      <PageHeader
        eyebrow="Contact"
        title="Reach City Vada Pav and Chai"
        subtitle="We reply quickly during business hours. WhatsApp is the fastest."
      />
      <ContactCard />
      <ContactForm />
      <FAQ
        title="Contact FAQs"
        subtitle="Answers for orders, hours, and support."
        items={faqs}
      />
    </>
  );
}
