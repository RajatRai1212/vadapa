import AboutStory from "@/components/AboutStory";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import { buildMetadata, getFaqs } from "@/lib/seo";

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata("about");
}

export default function AboutPage() {
  const faqs = getFaqs("about");

  return (
    <>
      <JsonLd pageKey="about" />
      <PageHeader
        eyebrow="About"
        title="The story behind City Vada Pav and Chai"
        subtitle="Authentic Mumbai street food, served with premium hygiene and consistent flavor."
      />
      <AboutStory />
      <FAQ
        title="About the brand"
        subtitle="A few things customers and partners ask us most."
        items={faqs}
      />
    </>
  );
}
