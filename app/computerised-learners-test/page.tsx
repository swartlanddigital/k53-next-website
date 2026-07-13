import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { APP_URL, CTA, Footer, Header, PageHero } from "../components";

const GOVERNMENT_SOURCE = "https://www.westerncape.gov.za/mobility/article/western-cape-launches-innovative-computerised-learners-licence-testing-system";
const IOL_SOURCE = "https://iol.co.za/news/2026-05-23-only-40-pass-south-africas-learners-licence-test-can-you/";

export const metadata: Metadata = {
  title: "New Computerised Learner's Licence Test South Africa",
  description: "Understand the new computerised learner's licence test, including randomised questions, touchscreen testing, pass-rate concerns and how to prepare with K53 Next.",
  alternates: { canonical: "/computerised-learners-test/" },
};

export default function ComputerisedTestPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to prepare for South Africa's new computerised learner's licence test",
    datePublished: "2026-07-12",
    dateModified: "2026-07-12",
    author: { "@type": "Organization", name: "K53 Next" },
    publisher: { "@type": "Organization", name: "K53 Next" },
    description: "A practical guide to CLLT screen-based testing, randomised questions, timed pressure and K53 preparation.",
  };

  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="THE NEW CLLT SYSTEM"
          title="The learner's test went digital. Here’s your new game plan."
          lede="What changed in the computerised learner’s licence test—and how to prepare for randomised questions, screen pressure and tricky wording."
        />
        <article className="content-page">
          <div className="shell content-grid">
            <nav className="side-nav" aria-label="On this page">
              <a href="#what">What changed</a>
              <a href="#western-cape">Western Cape rollout</a>
              <a href="#pass-rate">The 40% report</a>
              <a href="#prepare">How to prepare</a>
              <a href="#sources">Sources</a>
            </nav>
            <div className="prose">
              <div className="system-alert"><b>Quick answer</b><p>The computerised test is not simply the old booklet displayed on a monitor. It uses secure identity verification, randomised questions and automatic digital processing—so screen confidence and real understanding matter.</p></div>

              <h2 id="what">What changed in the computerised learner’s test?</h2>
              <p>The Computerised Learner’s Licence Testing system, commonly shortened to CLLT, replaces the manual booklet method with a secure digital test. The official Western Cape launch described fully networked workstations, touchscreen kiosks, fingerprint verification and questions generated in a randomised order.</p>
              <div className="resource-cards">
                <section className="resource-card"><h3>Digital interface</h3><p>You read and select answers on a screen instead of working through a printed booklet.</p></section>
                <section className="resource-card"><h3>Randomised questions</h3><p>The question mix is generated for the candidate, reducing the value of memorising a fixed sequence.</p></section>
                <section className="resource-card"><h3>Secure verification</h3><p>Fingerprint checks and NaTIS connectivity strengthen identity and result integrity.</p></section>
                <section className="resource-card"><h3>Faster results</h3><p>Answers are automatically verified and processed digitally.</p></section>
              </div>

              <h2 id="western-cape">What the Western Cape rollout means</h2>
              <p>The Western Cape Government officially launched CLLT at the Beaufort West Driving Licence Testing Centre on 26 May 2025. Its announcement said all Western Cape testing centres outside the metro had been equipped at that time, while discussions with the City of Cape Town about rollout were continuing.</p>
              <p>The system also supports on-screen, multi-language instructions for hearing-impaired applicants and uses an uninterrupted power supply to help testing continue during electricity outages.</p>
              <div className="callout"><b>Check your centre:</b> rollout and booking arrangements can differ by location. Confirm the current test format, documents, fees and appointment process directly with your chosen Driving Licence Testing Centre.</div>

              <h2 id="pass-rate">Why the reported 40% pass rate matters</h2>
              <p>IOL reported in May 2026 that the national learner’s licence pass rate had fallen from 68% to 40% since the digital system was rolled out in 2021. The report said candidates commonly described oddly phrased questions, detailed wording, timed pressure and second-guessing as major difficulties.</p>
              <p>The 40% figure is a media-reported national statistic—not a K53 Next user result and not a guarantee about any individual testing centre. It does, however, underline why simple memorisation is a weak strategy.</p>
              <div className="quote-card"><strong>New-test mindset</strong><p>Don’t only learn which option is correct. Learn why it is correct, how the same rule can be worded differently, and how to decide without panicking.</p></div>

              <h2 id="prepare">How to prepare for a screen-based test</h2>
              <ol className="game-plan">
                <li><b>Practise digitally.</b> Get comfortable reading every word on a screen and selecting an answer without rushing.</li>
                <li><b>Mix the question order.</b> Random practice forces you to recognise concepts instead of remembering a sequence.</li>
                <li><b>Train with a timer.</b> Use timed mock tests until the clock stops controlling your attention.</li>
                <li><b>Review the wording.</b> When you miss a question, identify the exact word or condition that changed the answer.</li>
                <li><b>Drill weak sections.</b> Separate road rules, signs and vehicle controls, then return to a mixed mock.</li>
                <li><b>Read before clicking.</b> A few calm seconds are cheaper than a rushed mistake.</li>
              </ol>
              <p><a className="button" href={APP_URL}>Start computerised K53 practice ↗</a></p>

              <h2 id="sources">Sources and transparency</h2>
              <div className="source-cards">
                <a href={GOVERNMENT_SOURCE}><b>Official system details</b><span>Western Cape Mobility Department — CLLT launch, 28 May 2025 ↗</span></a>
                <a href={IOL_SOURCE}><b>Pass-rate and candidate context</b><span>IOL — “Only 40% pass South Africa’s learner’s licence test”, 23 May 2026 ↗</span></a>
              </div>
              <p className="tiny-copy">K53 Next is an independent study tool. We are not affiliated with the Western Cape Government, RTMC, NaTIS or any licensing authority.</p>
              <p><Link className="text-link" href="/k53-practice-test">Next: build your K53 practice plan →</Link></p>
            </div>
          </div>
        </article>
        <CTA />
      </main>
      <Footer />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
