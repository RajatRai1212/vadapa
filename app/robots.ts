import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

export const revalidate = 86400;

export default function robots(): MetadataRoute.Robots {
  const base = BRAND.siteUrl.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api"]
      }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}
