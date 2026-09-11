import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished K53 Next homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="en-ZA">/i);
  assert.match(html, /<title>K53 Next \| K53 Learner&#x27;s Licence App South Africa/i);
  assert.match(html, /1,574 learner&#x27;s licence questions/);
  assert.match(html, /Write your learners/);
  assert.match(html, /Android is live on Google Play/);
  assert.match(html, /play\.google\.com\/store\/apps\/details\?id=/);
  assert.match(html, /play-store-qr\.png/);
  assert.match(html, /learner-licence-appointment/);
  assert.match(html, /westerncape\.gov\.za/);
  assert.match(html, /iol\.co\.za/);
  assert.match(html, /Independent study tool/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /property="og:image" content="http:\/\/localhost:3000\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders every crawlable content route with unique metadata", async () => {
  const routes = [
    ["/computerised-learners-test", "New Computerised Learner&#x27;s Licence Test South Africa"],
    ["/k53-learners-test", "K53 Learner&#x27;s Licence Test Practice"],
    ["/k53-road-signs", "K53 Road Signs"],
    ["/learners-licence-app", "K53 Learner&#x27;s Licence App"],
    ["/k53-practice-test", "Free K53 Learner&#x27;s Licence Practice Test"],
    ["/k53-test", "K53 Test"],
    ["/download", "Download K53 Next"],
    ["/learner-licence-appointment", "Learner&#x27;s Licence Appointment"],
    ["/faq", "K53 Learner&#x27;s Licence Test FAQ"],
    ["/support", "Support"],
    ["/privacy", "Privacy Policy"],
    ["/terms", "Terms of Service"],
    ["/delete-account", "Delete Your Account"],
  ];

  for (const [pathname, title] of routes) {
    const response = await render(`${pathname}/`);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>${title}`), pathname);
    assert.match(html, /<meta name="description" content="[^"]+"/i, pathname);
    assert.match(html, new RegExp(`rel="canonical" href="http://localhost:3000${pathname.replaceAll("/", "\\/")}\\/"`), pathname);
    assert.match(html, /<main id="main">/i, pathname);
    assert.match(html, /<h1/i, pathname);
  }
});

test("ships the required marketing and search assets", async () => {
  const required = [
    "public/og.png",
    "public/app-screens/practice.png",
    "public/app-screens/mock-test.png",
    "public/signs/railway-warning.webp",
    "public/signs/dead-end.webp",
    "public/signs/two-way-traffic.webp",
    "public/signs/loose-stones.webp",
    "public/play-store-qr.png",
    "public/llms.txt",
    "public/07420f44ae6b3746a69864e8e04e5a8d03ecb92e0bf334cbc820e3ce71108bf6.txt",
    "public/CNAME",
  ];
  await Promise.all(required.map((path) => access(new URL(path, root))));
  const [layout, page, css] = await Promise.all([
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);
  assert.match(layout, /en-ZA/);
  assert.match(layout, /\/og\.png/);
  assert.match(page, /SoftwareApplication/);
  assert.match(page, /FAQPage/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
});

test("publishes AI discovery controls for the major search crawlers", async () => {
  const robots = await readFile(new URL("app/robots.ts", root), "utf8");
  const llms = await readFile(new URL("public/llms.txt", root), "utf8");
  assert.match(robots, /OAI-SearchBot/);
  assert.match(robots, /Claude-SearchBot/);
  assert.match(robots, /PerplexityBot/);
  assert.match(robots, /Google-Extended/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(llms, /K53 Next/);
  assert.match(llms, /learner-licence-appointment/);
  assert.match(llms, /Google Play listing/);
});
