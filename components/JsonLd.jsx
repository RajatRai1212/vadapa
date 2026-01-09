import { BRAND } from "@/lib/brand";
import { getFaqs, getPageSeo } from "@/lib/seo";

export default function JsonLd({ pageKey = "home" }) {
  const page = getPageSeo(pageKey);
  const faqs = getFaqs(pageKey);
  const baseUrl = BRAND.siteUrl.replace(/\/$/, "");
  const pageUrl = `${baseUrl}${page.path}`;

  const sameAs = [BRAND.instagramUrl].filter(Boolean);

  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Restaurant"],
    "@id": `${baseUrl}#organization`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: baseUrl,
    logo: `${baseUrl}${BRAND.logoPath}`,
    image: `${baseUrl}/images/hero.png`,
    description: BRAND.description,
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.addressLine,
      addressLocality: BRAND.locationCity,
      addressRegion: BRAND.locationRegion,
      addressCountry: "IN"
    },
    areaServed: BRAND.serviceArea,
    priceRange: BRAND.localBusiness.priceRange,
    servesCuisine: BRAND.localBusiness.cuisine,
    openingHours: BRAND.openingHours,
    hasMap: BRAND.mapsUrl,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BRAND.localBusiness.geo.lat,
      longitude: BRAND.localBusiness.geo.lng
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BRAND.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"]
      }
    ],
    sameAs
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    name: BRAND.name,
    url: baseUrl,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${baseUrl}#organization`
    }
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl
      },
      ...(page.path === "/"
        ? []
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: page.label,
              item: pageUrl
            }
          ])
    ]
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: page.title,
    description: page.description,
    url: pageUrl,
    isPartOf: {
      "@id": `${baseUrl}#website`
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/hero.png`
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`
    },
    inLanguage: "en-IN"
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }
      : null;

  const schemas = [organization, website, webPage, breadcrumb, faqSchema].filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${pageKey}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
