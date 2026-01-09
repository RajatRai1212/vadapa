import FranchiseSections from "@/components/FranchiseSections";
import FranchiseForm from "@/components/FranchiseForm";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import { buildMetadata, getFaqs } from "@/lib/seo";

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata("franchise");
}

export default function FranchisePage() {
  const faqs = getFaqs("franchise");

  return (
    <>
      <JsonLd pageKey="franchise" />
      <PageHeader
        eyebrow="Franchise"
        title="A street-food franchise built for repeat demand"
        subtitle="Operationally simple, delivery-ready, and designed for scalable growth."
      />
      <FranchiseSections />
      <FranchiseForm />
      <FAQ
        title="Franchise FAQs"
        subtitle="Key questions we receive from potential partners."
        items={faqs}
      />
    </>
  );
}
