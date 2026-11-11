import type { Metadata, Viewport } from "next";

import { SITE_URL, ROOT_TITLE, ROOT_DESCRIPTION } from "./site-config";
import { siteMetadata } from "./seo";
import "./globals.css";
export const viewport: Viewport = { themeColor: "#000822", width: "device-width", initialScale: 1, viewportFit: "cover" };
export const metadata: Metadata = siteMetadata({
  metadataBase: new URL(`${SITE_URL}/`), title: { default: ROOT_TITLE, template: "%s | K53 Next" }, description: ROOT_DESCRIPTION,
  applicationName: "K53 Next", authors: [{ name: "K53 Next" }], creator: "K53 Next", publisher: "Swartland Digital", category: "education",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }, alternates: { canonical: "/" },
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const graph = [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "K53 Next", url: `${SITE_URL}/`, logo: `${SITE_URL}/k53-next-logo-256.webp`, email: "info@swartlanddigital.co.za" },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "K53 Next", url: `${SITE_URL}/`, description: ROOT_DESCRIPTION, inLanguage: "en-ZA", publisher: { "@id": `${SITE_URL}/#organization` } },
  ];
  return <html lang="en-ZA"><head><link rel="preload" href="/fonts/roboto-latin-500-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/><meta name="google-adsense-account" content="ca-pub-4812260666501703"/><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4812260666501703" crossOrigin="anonymous"/></head><body><a className="skip" href="#main">Skip to content</a>{children}<script id="site-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph})}}/></body></html>;
}
