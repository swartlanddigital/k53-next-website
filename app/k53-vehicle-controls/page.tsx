import type { Metadata } from "next";
import Link from "next/link";
import {
  CTA,
  DownloadActions,
  Footer,
  GOVERNMENT_LEARNER_LICENCE_URL,
  GuideSchema,
  Header,
  PageHero,
} from "../components";

const path = "/k53-vehicle-controls/";
const faqs = [
  ["What are vehicle controls in the learner's licence test?", "Vehicle controls are the knowledge and recognition of the controls, checks and safe responses relevant to the vehicle category you are preparing for. Study them alongside road rules and road signs."],
  ["Does K53 Next include vehicle-control practice?", "Yes. K53 Next includes a vehicle-control study path alongside road rules, road signs, mistake review and timed mixed practice."],
  ["Should I study controls for my own vehicle only?", "Choose the path that matches the vehicle category on your application, then keep the shared road-rule and road-sign foundations strong."],
] as [string, string][];

export const metadata: Metadata = {
  title: "K53 Vehicle Controls Practice | Learner's Licence Test South Africa",
  description: "Practise K53 vehicle controls for your South African learner's licence test. Learn control purposes, safety checks and screen-based questions for your vehicle path.",
  alternates: { canonical: path },
  openGraph: {
    title: "K53 vehicle controls practice before your learner's test",
    description: "Build confidence with vehicle-control study alongside road rules and road signs.",
  },
};

export default function Page() {
  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="K53 VEHICLE CONTROLS" title="Know the control. Know the safe response." lede="Vehicle controls are one of the core areas to prepare before a South African learner&apos;s licence test. Learn what a control is for, when it matters and how the question may test your understanding.">
        <DownloadActions className="page-hero-actions" playClassName="button-secondary" webLabel="Practise vehicle controls ↗" playLabel="Download K53 Next ↗" />
      </PageHero>
      <article className="content-page">
        <div className="shell content-grid">
          <nav className="side-nav" aria-label="Vehicle controls sections"><a href="#method">Study method</a><a href="#paths">Choose your path</a><a href="#mistakes">Review mistakes</a><a href="#official">Official guidance</a></nav>
          <div className="prose">
            <p className="lead-copy">The government learner&apos;s licence service lists motor vehicle controls alongside road signs and road rules as areas applicants should study. K53 Next turns the controls section into focused practice instead of leaving it for the night before.</p>
            <h2 id="method">A practical way to learn controls</h2>
            <ol>
              <li><strong>Name the control.</strong> Recognise it in a clear image or question.</li>
              <li><strong>Explain its purpose.</strong> Say what the control helps the driver do.</li>
              <li><strong>Choose the safe response.</strong> Connect the control to the driving situation, not just the label.</li>
              <li><strong>Mix it later.</strong> Return to it after studying signs and rules so you can recall it without a category hint.</li>
            </ol>
            <h2 id="paths">Choose the vehicle path that matches your application</h2>
            <div className="resource-cards">
              <section className="resource-card"><h3>Motorcycle</h3><p>Prepare the relevant motorcycle controls while continuing to practise the shared road-rule and sign foundations.</p><Link className="text-link" href="/motorcycle-learners-licence-practice/">Open motorcycle practice →</Link></section>
              <section className="resource-card"><h3>Light motor vehicle</h3><p>Build a strong Code B study path for the light motor vehicle terminology many learners associate with Code 8.</p><Link className="text-link" href="/code-8-learners-licence-test/">Open Code 8 / Code B practice →</Link></section>
              <section className="resource-card"><h3>Heavy motor vehicle</h3><p>Study the vehicle-control material relevant to the heavier vehicle category commonly searched as Code 10.</p><Link className="text-link" href="/code-10-learners-licence-test/">Open Code 10 / Code C preparation →</Link></section>
            </div>
            <h2 id="mistakes">Use mistakes as a control checklist</h2>
            <p>When an answer is wrong, record what failed: did you confuse two controls, miss a safety condition, or read the question too quickly? Revisit that exact idea, then test it again in a mixed set. This creates a short personal checklist that is more useful than rereading every page equally.</p>
            <div className="callout"><b>Controls do not replace the other sections.</b> Continue rotating road rules and road signs because the learner&apos;s licence test covers the combined knowledge needed to use a vehicle safely.</div>
            <h2 id="official">Official study guidance</h2>
            <p><a className="text-link" href={GOVERNMENT_LEARNER_LICENCE_URL} target="_blank" rel="noreferrer">Read the South African Government learner&apos;s licence service ↗</a><br /><Link className="text-link" href="/official-learner-driver-manuals/">Download the official vehicle-controls manual →</Link></p>
            <DownloadActions webLabel="Start vehicle-control practice ↗" playLabel="Download the Android app ↗" />
          </div>
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
    <GuideSchema name="K53 Vehicle Controls Practice" description="A practical guide to studying vehicle controls for the South African learner's licence test." path={path} faqs={faqs} />
  </>;
}
