import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = [
    "",
    "/k53-learners-test",
    "/k53-road-signs",
    "/learners-licence-app",
    "/k53-practice-test",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return paths.map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-07-12"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : (path === "/privacy" || path === "/terms") ? 0.3 : 0.8,
  }));
}
