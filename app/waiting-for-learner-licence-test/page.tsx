import type { Metadata } from "next";
import Link from "next/link";
import {
  CTA,
  DownloadActions,
  Footer,
  GuideSchema,
  Header,
  PageHero,
} from "../components";

const path = "/waiting-for-learner-licence-test/";
const faqs = [
  ["What should I do while waiting for my learner's licence test date?", "Keep a small, repeatable routine: practise one topic, review mistakes and return to mixed questions as the date approaches. Use the time to build understanding instead of cramming."],
  ["How often should I practise while waiting?", "Choose a routine you can sustain. Several focused sessions each week are more useful than one exhausting session followed by a long break."],
  ["What if my appointment or test date changes?", "Keep the same study sequence and adjust the pace. Confirm any new booking details, documents and fees with the relevant official service or your local DLTC."],
] as [string, string][];

export const metadata: Metadata = {
  title: "Waiting for Your Learner's Licence Test? What to Study",
  description: "Waiting for a South African learner's licence test date? Use a practical routine for road rules, road signs, vehicle controls and screen-based practice.",
  alternates: { canonical: path },
  openGraph: {
    title: "Waiting for your learner's licence test date? Keep studying",
    description: "A flexible routine for staying ready while you wait for test day.",
  },
};

export default function Page() {
  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="WHILE YOU WAIT" title="Turn the waiting time into test-day confidence." lede="Whether your appointment is next week or next month, a calm study routine helps you keep the important ideas fresh without last-minute panic.">
        <DownloadActions className="page-hero-actions" playClassName="button-secondary" webLabel="Practise while you wait ↗" playLabel="Download K53 Next ↗" />
      </PageHero>
      <article className="content-page">
        <div className="shell narrow prose">
          <p className="lead-copy">Waiting for an appointment or test date can make it tempting to do nothing until the last few days. Use the time to build familiarity with the screen, understand the three study areas and keep a short list of mistakes you can revisit.</p>
          <h2>Choose your waiting-time routine</h2>
          <div className="resource-cards">
            <section className="resource-card"><h3>Less than 10 minutes</h3><p>Review a handful of mistakes, name a sign family or recall one vehicle-control purpose.</p></section>
            <section className="resource-card"><h3>15 to 30 minutes</h3><p>Complete one focused topic drill and read the explanations before moving on.</p></section>
            <section className="resource-card"><h3>30 to 45 minutes</h3><p>Combine a topic set with a short mixed set to check whether the idea transfers.</p></section>
            <section className="resource-card"><h3>Test date is close</h3><p>Use timed mocks, practise reading carefully and review your own mistake list rather than cramming everything.</p></section>
          </div>
          <h2>Keep all three areas moving</h2>
          <p>Rotate through road rules, road signs and motor vehicle controls. If one area feels easier, do not abandon it completely; use short review sets while giving more time to the weak area.</p>
          <ol className="game-plan">
            <li><b>Monday — rules.</b> Practise right of way, speed, lane use or road markings.</li>
            <li><b>Wednesday — signs.</b> Identify the sign family, meaning and correct driver response.</li>
            <li><b>Friday — controls.</b> Review the control or check, its purpose and the safe action.</li>
            <li><b>Weekend — mixed practice.</b> Complete a longer mixed set and write down the two topics to repair next week.</li>
          </ol>
          <div className="callout"><b>Do not chase a perfect practice score.</b> Look for consistent understanding, fewer repeated mistakes and the ability to answer when the wording or order changes.</div>
          <h2>Use the final month deliberately</h2>
          <p>If you have roughly four weeks, move from baseline to foundations, then mixed practice and finally timed rehearsal. The <Link className="text-link" href="/four-week-learner-licence-study-plan/">four-week learner&apos;s licence study plan</Link> gives you a day-by-day structure.</p>
          <p>For official documents, fees, booking and test-day requirements, use the information from your local Driving Licence Testing Centre and the official government service—not an old social post.</p>
          <DownloadActions webLabel="Open K53 Next practice ↗" playLabel="Download on Google Play ↗" />
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
    <GuideSchema name="Waiting for Your Learner's Licence Test" description="How to prepare while waiting for a South African learner's licence test date." path={path} faqs={faqs} />
  </>;
}
