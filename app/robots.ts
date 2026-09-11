import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["Googlebot", "Google-Extended"], allow: "/" },
      { userAgent: ["OAI-SearchBot", "OAI-AdsBot", "GPTBot", "ChatGPT-User"], allow: "/" },
      { userAgent: ["ClaudeBot", "Claude-SearchBot", "Claude-User"], allow: "/" },
      { userAgent: ["PerplexityBot", "Perplexity-User"], allow: "/" },
      { userAgent: ["Bingbot", "Amazonbot", "Bytespider", "cohere-ai"], allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
