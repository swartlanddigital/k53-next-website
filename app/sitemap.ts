import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Keep this factual: the public site and its canonical domain were refreshed on
// this date. Google uses lastmod as a recrawl hint, so stale or automatically
// changing timestamps are both less useful than the real release date.
const LAST_MODIFIED = new Date("2026-09-24T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = [
    "",
    "/computerised-learners-test/",
    "/k53-learners-test/",
    "/k53-test/",
    "/k53-road-signs/",
    "/k53-vehicle-controls/",
    "/learners-licence-app/",
    "/k53-practice-test/",
    "/learner-licence-test-questions/",
    "/download/",
    "/learner-licence-appointment/",
    "/learner-licence-appointment-documents/",
    "/after-booking-learner-licence-test/",
    "/waiting-for-learner-licence-test/",
    "/four-week-learner-licence-study-plan/",
    "/code-8-learners-licence-test/",
    "/code-10-learners-licence-test/",
    "/motorcycle-learners-licence-practice/",
    "/official-learner-driver-manuals/",
    "/faq/",
    "/support/",
    "/privacy/",
    "/terms/",
    "/delete-account/",
  ];

  return paths.map((path, index) => ({
    // The homepage canonical includes a trailing slash. Publishing the exact
    // same URL in the sitemap avoids making crawlers normalise two variants.
    url: path ? `${base}${path}` : `${base}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : (["/privacy/", "/terms/", "/delete-account/"].includes(path)) ? 0.3 : 0.8,
  }));
}
