import { BRAND } from "@/lib/brand";
import { FAQS } from "@/data/faqs";

const baseUrl = BRAND.siteUrl.replace(/\/$/, "");

export const SEO_PAGES = /** @type {const} */ ({
  home: {
    key: "home",
    path: "/",
    label: "Home",
    title: "Mumbai-style Vada Pav & Cutting Chai in Mohali",
    description:
      "City Vada Pav and Chai serves authentic Mumbai-style vada pav, chura, poha, misal pav, and hot cutting chai in Mohali/Chandigarh. Franchise enquiries open.",
    keywords: [
      "vada pav Mohali",
      "cutting chai Mohali",
      "Mumbai street food Mohali",
      "City Vada Pav and Chai",
      "franchise vada pav"
    ],
    priority: 1,
    changeFrequency: "weekly"
  },
  menu: {
    key: "menu",
    path: "/menu",
    label: "Menu",
    title: "Menu — Vada Pav, Chai & Mumbai Street Food",
    description:
      "Explore the City Vada Pav and Chai menu: Vada Pav, Chura Pav, Poha, Misal Pav, Pav Bhaji, and cutting chai.",
    keywords: [
      "vada pav menu",
      "chai menu",
      "Mumbai snacks",
      "street food menu"
    ],
    priority: 0.8,
    changeFrequency: "weekly"
  },
  franchise: {
    key: "franchise",
    path: "/franchise",
    label: "Franchise",
    title: "Franchise — City Vada Pav and Chai",
    description:
      "Partner with City Vada Pav and Chai for a franchise built on repeat demand, delivery performance, and operational simplicity.",
    keywords: [
      "vada pav franchise",
      "food franchise Mohali",
      "street food franchise"
    ],
    priority: 0.8,
    changeFrequency: "weekly"
  },
  about: {
    key: "about",
    path: "/about",
    label: "About",
    title: "About — City Vada Pav and Chai",
    description:
      "Discover the story behind City Vada Pav and Chai — authentic Mumbai street food, premium hygiene, and consistent flavor.",
    keywords: [
      "about City Vada Pav and Chai",
      "Mumbai street food brand",
      "authentic vada pav"
    ],
    priority: 0.7,
    changeFrequency: "monthly"
  },
  contact: {
    key: "contact",
    path: "/contact",
    label: "Contact",
    title: "Contact — City Vada Pav and Chai",
    description:
      "Contact City Vada Pav and Chai in Mohali for address, hours, phone, and enquiries.",
    keywords: [
      "contact City Vada Pav and Chai",
      "vada pav Mohali contact",
      "food brand contact"
    ],
    priority: 0.6,
    changeFrequency: "monthly"
  }
});

export function getPageSeo(key) {
  return SEO_PAGES[key] || SEO_PAGES.home;
}

export function getFaqs(key) {
  return FAQS[key] || [];
}

export function buildMetadata(key) {
  const page = getPageSeo(key);
  const url = `${baseUrl}${page.path}`;
  const image = "/images/hero.png";

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: BRAND.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${BRAND.name} hero`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image]
    },
    authors: [{ name: BRAND.name, url: BRAND.siteUrl }],
    category: "Food & Beverage",
    keywords: page.keywords,
    other: {
      "geo.region": "IN-PB",
      "geo.placename": "Mohali",
      "geo.position": `${BRAND.localBusiness.geo.lat};${BRAND.localBusiness.geo.lng}`,
      ICBM: `${BRAND.localBusiness.geo.lat}, ${BRAND.localBusiness.geo.lng}`
    }
  };
}
