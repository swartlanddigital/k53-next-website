import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { APP_URL, CTA, Footer, GooglePlayMark, Header, PageHero, PLAY_STORE_URL } from "../components";

export const metadata: Metadata = {
  title: "K53 Test | Learner's Licence Practice South Africa",
  description: "Prepare for your South African K53 learner's licence test with free practice questions, road signs, rules of the road, vehicle controls and timed mock tests.",
  alternates: { canonical: "/k53-test/" },
  openGraph: {
    title: "K53 Test | Prepare to write your learner's licence",
    description: "A practical K53 test study hub for South African learner's licence candidates writing Code A, Code B or Code C.",
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
          { "@type": "ListItem", position: 2, name: "K53 Test", item: "/k53-test/" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          ["What is the K53 learner's licence test?", "It is the South African theory test covering road rules, road signs and vehicle controls before a learner's licence is issued."],
          ["How should I prepare to write my learners?", "Study one section at a time, review explanations for incorrect answers, practise visual road signs and finish with timed mixed mock tests."],
          ["Does K53 Next cover Code A, Code B and Code C?", "Yes. K53 Next supports motorcycle, light motor vehicle and heavy motor vehicle study paths."],
        ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
      },
    ],
  };

  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="K53 TEST STUDY HUB" title="Prepare to write your learner&apos;s licence test." lede="Learn the K53 topics, practise the questions and get comfortable with the new computerised test format before test day.">
        <div className="hero-actions page-hero-actions"><a className="button" href={APP_URL}>Practice on the web app ↗</a><a className="button button-secondary" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /> Get it on Google Play ↗</a></div>
      </PageHero>
      <section className="content-page">
        <div className="shell content-grid">
          <nav className="side-nav" aria-label="K53 test sections"><a href="#what-is-k53">What is K53?</a><a href="#study-sections">Study sections</a><a href="#write-ready">Write-ready plan</a><a href="#codes">Vehicle codes</a></nav>
          <div className="prose">
            <p className="lead-copy">Searching for a <strong>K53 test</strong> usually means you are getting ready to write your learner&apos;s licence. K53 Next turns that preparation into practical screen-based sessions for South African road rules, road signs and vehicle controls.</p>
            <h2 id="what-is-k53">What is the K53 learner&apos;s licence test?</h2>
            <p>The K53 learner&apos;s licence test checks whether you understand the rules and responsibilities needed to use South African roads safely. Your study normally covers three areas: rules of the road, road signs and vehicle controls. The new computerised format makes careful reading and screen confidence part of preparation too.</p>
            <div className="callout"><b>Important:</b> K53 Next is an independent educational study tool. It is not the official test, does not issue licences and is not affiliated with the South African government or a licensing authority.</div>
            <h2 id="study-sections">What to study before you write your learners</h2>
            <div className="resource-cards"><section className="resource-card"><h3>Rules of the road</h3><p>Practise speed limits, intersections, right of way, road markings, lane use and safe following behaviour.</p><Link className="text-link" href="/k53-learners-test">Study the learner&apos;s test guide →</Link></section><section className="resource-card"><h3>K53 road signs</h3><p>Learn what sign shapes, colours and symbols communicate, then test yourself with image-based questions.</p><Link className="text-link" href="/k53-road-signs">Open the road-signs guide →</Link></section><section className="resource-card"><h3>Vehicle controls</h3><p>Revise the controls, checks and safety knowledge for the vehicle category you plan to drive.</p><Link className="text-link" href="/k53-practice-test">Choose a practice mode →</Link></section><section className="resource-card"><h3>Computerised mock tests</h3><p>Use mixed, timed practice to build the calm reading and decision-making habits needed on a screen.</p><Link className="text-link" href="/computerised-learners-test">Understand the new test →</Link></section></div>
            <h2 id="write-ready">A write-ready K53 study plan</h2>
            <ol className="game-plan"><li><b>Start with a short mixed quiz.</b> Find out which section needs the most attention.</li><li><b>Practise one topic at a time.</b> Learn the reasoning instead of memorising a fixed answer order.</li><li><b>Review every mistake.</b> Read the explanation and retry the concept later.</li><li><b>Train with images.</b> Make road-sign recognition automatic before you face randomised questions.</li><li><b>Use timed mock tests.</b> Practise reading carefully while the clock is running.</li><li><b>Keep going until your score is consistent.</b> A single good result is not the same as readiness.</li></ol>
            <div className="callout"><b>Already booked your test?</b> Follow the <Link className="text-link" href="/learner-licence-appointment">four-week learner&apos;s licence study plan →</Link> and use your test date as a clear preparation deadline.</div>
            <h2 id="codes">Code A, Code B and Code C</h2>
            <p>Your vehicle category changes the controls you need to know. Code A is associated with motorcycles, Code B with light motor vehicles and Code C with heavier vehicles. The shared road-rule and road-sign foundations still matter for every learner&apos;s licence path.</p>
            <p><a className="button" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /> Download K53 Next on Google Play ↗</a></p>
          </div>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
    <Script id="k53-test-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
