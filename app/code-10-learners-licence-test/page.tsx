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

const path = "/code-10-learners-licence-test/";
const faqs = [
  ["Is Code 10 the same as Code C for learner's licence preparation?", "Code 10 is a common search term for heavier vehicle preparation. The official government service uses its own learner's licence category wording, so confirm the exact vehicle class with your DLTC. K53 Next labels the heavy motor vehicle study path Code C."],
  ["What should I study for a Code 10 learner's licence test?", "Study road rules, road signs and the vehicle-control material relevant to the heavier vehicle path. Then use mixed and timed practice to check that the knowledge transfers between topics."],
  ["Can I use the same road-sign practice for Code 10?", "Road-sign and road-rule foundations are shared areas of learner's licence preparation. Combine them with the vehicle-control path relevant to your application."],
] as [string, string][];

export const metadata: Metadata = {
  title: "Code 10 Learner's Licence Test Preparation | Code C South Africa",
  description: "Prepare for the South African Code 10 learner's licence test with Code C heavy motor vehicle practice, road rules, road signs, vehicle controls and mock tests.",
  alternates: { canonical: path },
  openGraph: {
    title: "Code 10 learner's licence test preparation",
    description: "A focused Code C study path for heavy motor vehicle learner's licence preparation.",
  },
};

export default function Page() {
  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="CODE 10 / CODE C" title="Prepare for the heavy motor vehicle learner&apos;s test." lede="If you are searching for Code 10 learner&apos;s licence preparation, start with the fundamentals and then choose the heavy motor vehicle study path that matches your application.">
        <DownloadActions className="page-hero-actions" playClassName="button-secondary" webLabel="Practise Code C questions ↗" playLabel="Download K53 Next ↗" />
      </PageHero>
      <article className="content-page">
        <div className="shell narrow prose">
          <div className="callout"><b>Terminology note:</b> “Code 10” is a common search term. The national government service describes learner&apos;s licence categories using official code wording and vehicle mass thresholds. Confirm the correct class and current requirements with your local DLTC.</div>
          <h2>Build your Code 10 / Code C preparation</h2>
          <div className="resource-cards">
            <section className="resource-card"><h3>Road rules</h3><p>Strengthen the decisions that apply across South African roads: right of way, speed, lane use, markings and following distance.</p></section>
            <section className="resource-card"><h3>Road signs</h3><p>Practise recognising signs quickly by shape, colour, symbol and the action required from the driver.</p></section>
            <section className="resource-card"><h3>Heavy vehicle controls</h3><p>Focus on the controls, checks and safety responses relevant to your heavy motor vehicle study path.</p></section>
            <section className="resource-card"><h3>Mixed mock tests</h3><p>Once you understand the topics, practise randomised, screen-based sessions and review your mistakes.</p></section>
          </div>
          <h2>Do not study only the vehicle section</h2>
          <p>A heavier vehicle path still requires the wider learner&apos;s licence foundation. Keep road rules and road signs in the rotation, then spend extra time on the control questions where your understanding is weakest.</p>
          <ol className="game-plan">
            <li><b>Baseline.</b> Take a mixed set and separate errors into rules, signs, controls and reading mistakes.</li>
            <li><b>Foundation.</b> Study the heavy vehicle controls and revisit the road-rule concepts behind each error.</li>
            <li><b>Transfer.</b> Mix categories so you can answer without a topic label telling you what to expect.</li>
            <li><b>Rehearsal.</b> Use timed mock tests and review the explanation, not just the final percentage.</li>
          </ol>
          <p><a className="text-link" href={GOVERNMENT_LEARNER_LICENCE_URL} target="_blank" rel="noreferrer">Read the official learner&apos;s licence category guidance ↗</a></p>
          <p>For focused study, continue to the <Link className="text-link" href="/k53-vehicle-controls/">K53 vehicle-controls guide</Link> or the <Link className="text-link" href="/learner-licence-test-questions/">learner&apos;s licence questions guide</Link>.</p>
          <DownloadActions webLabel="Start Code C practice ↗" playLabel="Download on Google Play ↗" />
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
    <GuideSchema name="Code 10 Learner's Licence Test Preparation" description="Code 10 and Code C heavy motor vehicle learner's licence preparation for South Africa." path={path} faqs={faqs} />
  </>;
}
