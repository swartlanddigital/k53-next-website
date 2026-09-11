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

const path = "/learner-licence-test-questions/";
const faqs = [
  ["Where can I practise learner's licence test questions in South Africa?", "K53 Next provides screen-based practice for road rules, road signs and vehicle controls, with mistake review and timed mock tests before you write."],
  ["Are K53 Next questions the official learner's licence test questions?", "No. K53 Next is an independent study tool. Its questions are for practice and are not a government test, leaked paper or guarantee of the questions you will receive."],
  ["How should I use learner's licence practice questions?", "Answer without guessing, read the explanation, record the topic behind each mistake and return to it later in a mixed set. Understanding beats memorising a fixed answer order."],
] as [string, string][];

export const metadata: Metadata = {
  title: "Learner's Licence Test Questions South Africa | K53 Practice",
  description: "Practise South African learner's licence test questions for road rules, road signs and vehicle controls with K53 Next, mistake review and timed mock tests.",
  alternates: { canonical: path },
  openGraph: {
    title: "Learner's licence test questions for South Africa",
    description: "Use K53 practice questions to learn the idea, review mistakes and prepare for the computerised test.",
  },
};

export default function Page() {
  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="K53 PRACTICE QUESTIONS" title="Practise the question. Understand the rule." lede="South African learner&apos;s licence practice works best when you learn why an answer is right, not only which option appeared last time. K53 Next gives you focused, mixed and timed ways to practise on screen.">
        <DownloadActions className="page-hero-actions" playClassName="button-secondary" webLabel="Try practice questions ↗" playLabel="Download K53 Next ↗" />
      </PageHero>
      <article className="content-page">
        <div className="shell narrow prose">
          <div className="callout"><b>Practice is not the official test.</b> K53 Next is an independent educational study tool. Use official government or DLTC channels for booking, current requirements and test-day instructions.</div>
          <h2>How to use learner&apos;s licence questions</h2>
          <ol className="game-plan">
            <li><b>Answer before checking.</b> Read the whole question and choose the safest answer you understand.</li>
            <li><b>Read the explanation.</b> Identify the rule, sign meaning or control purpose behind the answer.</li>
            <li><b>Label the mistake.</b> Mark whether it was knowledge, visual recognition, wording or rushing.</li>
            <li><b>Repeat later.</b> Return to the same concept in a new mixed set so you learn the idea, not the sequence.</li>
          </ol>
          <h2>Practise all three sections</h2>
          <div className="resource-cards">
            <section className="resource-card"><h3>Road rules questions</h3><p>Build decision-making around right of way, speed, lane use, road markings and following distance.</p><Link className="text-link" href="/k53-learners-test/">Study the K53 learner&apos;s test →</Link></section>
            <section className="resource-card"><h3>Road-sign questions</h3><p>Train visual recognition by sign family, shape, colour, symbol and driver response.</p><Link className="text-link" href="/k53-road-signs/">Practise K53 road signs →</Link></section>
            <section className="resource-card"><h3>Vehicle-control questions</h3><p>Learn the controls and checks relevant to your motorcycle, light motor vehicle or heavy vehicle path.</p><Link className="text-link" href="/k53-vehicle-controls/">Practise vehicle controls →</Link></section>
            <section className="resource-card"><h3>Timed mock tests</h3><p>Rehearse screen-based reading and mixed questions after you have studied the foundations.</p><Link className="text-link" href="/k53-practice-test/">Open the practice-test guide →</Link></section>
          </div>
          <h2>Questions for the new computerised test</h2>
          <p>Screen practice helps you get used to reading carefully, selecting an answer and staying focused while the question set changes. It does not turn the official test into a fixed sequence: use randomised practice, review mistakes and prepare to recognise the concept in unfamiliar wording.</p>
          <p><a className="text-link" href={GOVERNMENT_LEARNER_LICENCE_URL} target="_blank" rel="noreferrer">Read the official learner&apos;s licence study guidance ↗</a></p>
          <DownloadActions webLabel="Start free practice questions ↗" playLabel="Download on Google Play ↗" />
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
    <GuideSchema name="Learner's Licence Test Questions South Africa" description="How to use K53 practice questions for road rules, road signs and vehicle controls before the South African learner's licence test." path={path} faqs={faqs} />
  </>;
}
