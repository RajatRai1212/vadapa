import MenuGrid from "@/components/MenuGrid";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import { buildMetadata, getFaqs } from "@/lib/seo";

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata("menu");
}

export default function MenuPage() {
  const faqs = getFaqs("menu");

  return (
    <>
      <JsonLd pageKey="menu" />
      <PageHeader
        eyebrow="Menu"
        title="Mumbai street-food staples, done right"
        subtitle="Classic Vada Pav, cutting chai, and comforting snacks — built for everyday cravings."
      />
      <MenuGrid />
      <FAQ
        title="Menu FAQs"
        subtitle="Helpful answers about spice, delivery, and popular picks."
        items={faqs}
      />
    </>
  );
}
