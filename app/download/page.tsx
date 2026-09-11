import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { APP_URL, CTA, Footer, GooglePlayMark, Header, PageHero, PLAY_STORE_URL, StoreButtons, asset } from "../components";

export const metadata: Metadata = {
  title: "Download K53 Next | K53 Learner's Licence App",
  description: "Download K53 Next on Android and prepare to write your South African learner's licence test with K53 questions, road signs, rules, vehicle controls and mock tests.",
  alternates: { canonical: "/download/" },
  openGraph: {
    title: "Download K53 Next before you write your learners",
    description: "Get the K53 Next Android app and practise for your South African learner's licence test.",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Download K53 Next learner's licence practice app" }],
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "Download K53 Next", item: "/download/" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "K53 Next",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Android",
        downloadUrl: PLAY_STORE_URL,
        installUrl: PLAY_STORE_URL,
        image: "/k53-next-logo.png",
        offers: { "@type": "Offer", price: "0", priceCurrency: "ZAR" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          ["Is K53 Next available on Android?", "Yes. K53 Next is available on Google Play for Android devices."],
          ["Can I use K53 Next before I write my learner's licence test?", "Yes. Use topic practice, image-based road-sign questions, mistake review and timed mock tests before you write."],
          ["Is K53 Next an official government test?", "No. K53 Next is an independent educational study tool and is not affiliated with a government department or licensing authority."],
        ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
      },
    ],
  };

  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="DOWNLOAD BEFORE YOU WRITE" title="Download K53 Next and prepare to write your learners." lede="Get focused South African learner's licence practice on Android, or start in your browser right now.">
        <a className="button" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /> Get it on Google Play ↗</a>
      </PageHero>
      <section className="section download download-page">
        <div className="shell download-card">
          <div>
            <span className="eyebrow">YOUR LEARNER&apos;S TEST STUDY APP</span>
            <h2>Everything you need before test day.</h2>
            <p>Practise 1,574 screen-based K53 questions across road rules, road signs and vehicle controls. Build confidence for Code A, Code B or Code C, then use timed mock tests before you write.</p>
            <StoreButtons />
            <p className="download-support">Prefer to start without installing? <a className="text-link" href={APP_URL}>Open the K53 Next web app ↗</a></p>
          </div>
          <div className="download-art"><a className="qr-link" href={PLAY_STORE_URL} target="_blank" rel="noreferrer" aria-label="Scan the QR code to download K53 Next from Google Play"><div className="qr-card"><img src={asset("/play-store-qr.png")} alt="QR code for downloading K53 Next on Google Play" width="640" height="640" /><span className="qr-card-label">SCAN TO DOWNLOAD</span><span className="qr-card-store">Google Play</span></div></a><span className="scribble">READY<br />TO WRITE ↙</span></div>
        </div>
      </section>
      <section className="section download-features">
        <div className="shell narrow prose">
          <span className="eyebrow">BUILT FOR LEARNER&apos;S LICENCE PREP</span>
          <h2>Practise the parts you will write.</h2>
          <p>When people search for a K53 learner&apos;s licence app, they are looking for a simple way to study the material that appears in the test. K53 Next keeps practice focused and screen-friendly so you can learn, review and return to your weak areas.</p>
          <div className="resource-cards">
            <section className="resource-card"><h3>Road rules</h3><p>Work through right of way, speed, road markings, following distance and safe driving decisions.</p></section>
            <section className="resource-card"><h3>Road signs</h3><p>Recognise warning, regulatory, information and temporary signs from clear image questions.</p></section>
            <section className="resource-card"><h3>Vehicle controls</h3><p>Revise the controls and checks for your motorcycle, light motor vehicle or heavy motor vehicle path.</p></section>
            <section className="resource-card"><h3>Timed mock tests</h3><p>Practise reading carefully and selecting answers on screen before the pressure of the real test.</p></section>
          </div>
          <h2>Make your next study session count.</h2>
          <p>Start with a quick drill, read the explanation behind each answer, then return to the questions you missed. When your accuracy is consistent, move to a mixed mock test.</p>
          <p><Link className="button" href="/k53-test">Open the K53 test study hub →</Link></p>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
    <Script id="download-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
