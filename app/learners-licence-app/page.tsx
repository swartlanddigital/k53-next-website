import type { Metadata } from "next";
import Script from "next/script";
import { APP_URL, CTA, Footer, GooglePlayMark, Header, PageHero, Phone, PLAY_STORE_URL, SITE_URL, StoreButtons } from "../components";

export const metadata: Metadata = {
  title: "K53 Learner's Licence App | Download South Africa",
  description: "Download K53 Next, a South African learner's licence app with 1,574 K53 questions, road-sign images, road rules, vehicle controls and timed mock tests.",
  alternates: { canonical: "/learners-licence-app/" },
  openGraph: {
    title: "K53 Learner's Licence App | Download K53 Next",
    description: "Practise for your South African learner's licence test on the web or get K53 Next on Google Play.",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "K53 Next learner's licence app for South Africa" }],
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "K53 Learner's Licence App", item: `${SITE_URL}/learners-licence-app/` },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/learners-licence-app/#app`,
        name: "K53 Next",
        alternateName: "K53 Learner's Licence App",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Android",
        url: `${SITE_URL}/learners-licence-app/`,
        downloadUrl: PLAY_STORE_URL,
        installUrl: PLAY_STORE_URL,
        sameAs: [PLAY_STORE_URL],
        image: `${SITE_URL}/k53-next-logo.png`,
        description: "South African K53 learner's licence practice with road rules, road signs, vehicle controls and timed mock tests.",
        featureList: ["1,574 K53 questions", "Road rules, road signs and vehicle controls", "Timed mock tests", "Code A, Code B and Code C practice"],
        potentialAction: { "@type": "DownloadAction", target: { "@type": "EntryPoint", urlTemplate: PLAY_STORE_URL, actionPlatform: ["https://schema.org/AndroidPlatform"] } },
        offers: { "@type": "Offer", url: PLAY_STORE_URL, price: "0", priceCurrency: "ZAR", availability: "https://schema.org/InStock" },
      },
    ],
  };

  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="THE K53 LEARNER APP" title="Your K53 study plan, in your pocket." lede="Practise on the web now, or download the Android app from Google Play.">
        <div className="hero-actions page-hero-actions"><a className="button" href={APP_URL}>Practice on the web app ↗</a><a className="button button-secondary" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /> Get it on Google Play ↗</a></div>
      </PageHero>
      <article className="content-page"><div className="shell tour-grid"><div className="tour-phone"><Phone screen="/app-screens/practice.png" alt="K53 Next learner app practice screen" /><span className="bubble bubble-one"><b>1,574 questions</b></span><span className="bubble bubble-two"><b>Code A · B · C</b></span></div><div className="prose"><h2>Built for real study days</h2><p>K53 Next turns the question bank into short, useful practice sessions. Choose a topic when you have five minutes, return to your mistakes later, or run a timed mock test when you are ready for exam pressure.</p><ul><li>Road rules, road signs and vehicle controls</li><li>Image-based questions with clear, square visuals</li><li>Mixed practice and category drills</li><li>Weak-area and mistake review modes</li><li>Bookmarks, accuracy and readiness tracking</li></ul><StoreButtons /><div className="callout"><b>Store status:</b> The Android app is live on Google Play now. The App Store version is coming soon, and the web app is available today in your mobile browser.</div><p><a className="button" href={APP_URL}>Practice on the web app ↗</a></p></div></div></article>
      <CTA />
    </main>
    <Footer />
    <Script id="app-page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
