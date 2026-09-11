import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const LAST_MODIFIED = new Date("2026-09-11T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = [
    "",
    "/computerised-learners-test/",
    "/k53-learners-test/",
    "/k53-test/",
    "/k53-road-signs/",
    "/learners-licence-app/",
    "/k53-practice-test/",
    "/download/",
    "/learner-licence-appointment/",
    "/faq/",
    "/support/",
    "/privacy/",
    "/terms/",
    "/delete-account/",
  ];

  return paths.map((path, index) => ({
    url: `${base}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : (["/privacy/", "/terms/", "/delete-account/"].includes(path)) ? 0.3 : 0.8,
  }));
}
