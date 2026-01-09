import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";
import { SEO_PAGES } from "@/lib/seo";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  return Object.values(SEO_PAGES).map((page) => ({
    url: `${base}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));
}
