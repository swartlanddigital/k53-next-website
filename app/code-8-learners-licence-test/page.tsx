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

const path = "/code-8-learners-licence-test/";
const faqs = [
  ["Is Code 8 the same as Code B for learner's licence practice?", "Code 8 is a common search term for light motor vehicle preparation. The official government service uses different learner's licence category wording, so confirm the exact vehicle class with your DLTC. K53 Next labels the light motor vehicle study path Code B."],
  ["What should I study for a Code 8 learner's licence test?", "Study road rules, road signs and light motor vehicle controls. Use topic practice first, then mixed and timed questions once you understand the foundations."],
  ["Can I practise Code 8 questions on my phone?", "Yes. K53 Next provides screen-based practice on the web app and an Android app on Google Play."],
] as [string, string][];

export const metadata: Metadata = {
  title: "Code 8 Learner's Licence Test Practice | Code B South Africa",
  description: "Prepare for the South African Code 8 learner's licence test with Code B light motor vehicle practice, road rules, road signs, vehicle controls and mock tests.",
  alternates: { canonical: path },
  openGraph: {
    title: "Code 8 learner's licence test practice",
    description: "A clear Code B study path for light motor vehicle learner's licence preparation.",
  },
};

export default function Page() {
  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="CODE 8 / CODE B" title="Prepare for the light motor vehicle learner&apos;s test." lede="Many South African learners search for a Code 8 learner&apos;s licence test. K53 Next gives that light motor vehicle preparation a clear Code B study path across rules, signs and vehicle controls.">
        <DownloadActions className="page-hero-actions" playClassName="button-secondary" webLabel="Practise Code B questions ↗" playLabel="Download K53 Next ↗" />
      </PageHero>
      <article className="content-page">
        <div className="shell narrow prose">
          <div className="callout"><b>Terminology note:</b> “Code 8” is a common learner search term. The national government service describes learner&apos;s licence categories using its own code wording. Confirm the class of vehicle and current requirements with your local DLTC before applying.</div>
          <h2>What to study for Code 8 / Code B</h2>
          <div className="resource-cards">
            <section className="resource-card"><h3>Road rules</h3><p>Practise right of way, speed, lane use, road markings, following distance and safe decisions for everyday road situations.</p></section>
            <section className="resource-card"><h3>Road signs</h3><p>Recognise warning, regulatory, information and temporary signs by their visual patterns and required response.</p></section>
            <section className="resource-card"><h3>Light motor vehicle controls</h3><p>Study the control and safety-check questions relevant to the light motor vehicle path, then review every mistake.</p></section>
            <section className="resource-card"><h3>Timed mock tests</h3><p>Move to mixed, screen-based practice when you can explain the answers and want to rehearse test pressure.</p></section>
          </div>
          <h2>Use a three-stage Code B routine</h2>
          <ol className="game-plan">
            <li><b>Learn.</b> Work through one topic without rushing and read the explanation after each question.</li>
            <li><b>Repair.</b> Keep a short list of rules, signs and controls that caused repeated errors.</li>
            <li><b>Rehearse.</b> Complete mixed and timed tests, then review the reasons behind each missed answer.</li>
          </ol>
          <p>The official learner&apos;s licence service says applicants should study road signs, motor vehicle controls and road rules before writing. Use that as the foundation, then adapt the practice to your vehicle category and local instructions.</p>
          <p><a className="text-link" href={GOVERNMENT_LEARNER_LICENCE_URL} target="_blank" rel="noreferrer">Confirm the official learner&apos;s licence categories and requirements ↗</a></p>
          <p>Need the detailed vehicle section? <Link className="text-link" href="/k53-vehicle-controls/">Open K53 vehicle-controls practice →</Link></p>
          <DownloadActions webLabel="Start Code B practice ↗" playLabel="Download on Google Play ↗" />
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
    <GuideSchema name="Code 8 Learner's Licence Test Practice" description="Code 8 and Code B light motor vehicle learner's licence preparation for South Africa." path={path} faqs={faqs} />
  </>;
}
