import type { MetadataRoute } from "next";
import { SITE_URL, CITIES } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = "2026-06-25";
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/home-value", priority: 0.9 },
    ...CITIES.map((c) => ({ path: `/sell-your-home-${c.slug}-mi`, priority: 0.8 })),
    { path: "/seller-guarantee", priority: 0.7 },
    { path: "/how-i-sell-your-home", priority: 0.7 },
    { path: "/realtor-commission-michigan", priority: 0.7 },
    { path: "/how-long-to-sell-house-michigan", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6 })),
    { path: "/areas", priority: 0.6 },
    { path: "/reviews", priority: 0.6 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
  ];

  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
