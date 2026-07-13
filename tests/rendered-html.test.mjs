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
  assert.match(html, /<title>K53 Next \| Prepare for the New Computerised/i);
  assert.match(html, /The test changed/);
  assert.match(html, /1,574 digital questions/);
  assert.match(html, /Practise on screen free/);
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
    ["/k53-learners-test", "K53 Computerised Learner"],
    ["/k53-road-signs", "K53 Road Signs"],
    ["/learners-licence-app", "Learner&#x27;s Licence App"],
    ["/k53-practice-test", "Free K53 Practice Test"],
    ["/faq", "K53 Learner App Frequently Asked Questions"],
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
