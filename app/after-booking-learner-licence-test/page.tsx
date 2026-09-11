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

const path = "/after-booking-learner-licence-test/";
const faqs = [
  ["What should I study after booking my learner's licence test?", "Start with road rules, road signs and vehicle controls. Use a baseline quiz to decide which area needs the most attention, then practise consistently until your results become stable."],
  ["Should I study the questions in a fixed order?", "No. Learn the concept first, then use randomised and mixed practice so you can recognise it when the wording or answer order changes."],
  ["What if my test date is still far away?", "Use the extra time to build understanding and review mistakes. Keep timed mock tests for later, when you have covered the main topics."],
] as [string, string][];

export const metadata: Metadata = {
  title: "What to Study After Booking Your Learner's Licence Test",
  description: "Booked your South African learner's licence test? Learn what to study first, how to use practice questions and how to build towards timed mock tests.",
  alternates: { canonical: path },
  openGraph: {
    title: "What to study after booking your learner's test",
    description: "A practical next-step guide for the weeks between booking and test day.",
  },
};

export default function Page() {
  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="BOOKED? NOW STUDY WITH A PLAN" title="What to study after booking your learner&apos;s test." lede="A booking date gives your preparation a deadline. Start with the three areas the official guidance expects, then let your mistakes decide what you study next.">
        <DownloadActions className="page-hero-actions" playClassName="button-secondary" webLabel="Find your weak areas ↗" playLabel="Download K53 Next ↗" />
      </PageHero>
      <article className="content-page">
        <div className="shell content-grid">
          <nav className="side-nav" aria-label="After-booking study sections"><a href="#first">Start here</a><a href="#topics">Three areas</a><a href="#routine">Build a routine</a><a href="#mock-tests">Add timed practice</a></nav>
          <div className="prose">
            <p className="lead-copy">Do not begin by trying to memorise every question. First find out how the material is organised, then use practice to expose gaps. The official South African learner&apos;s licence guidance says applicants should study road signs, motor vehicle controls and road rules before writing.</p>
            <h2 id="first">Your first study session after booking</h2>
            <ol>
              <li>Write down your test date and the vehicle category you are applying for.</li>
              <li>Take a short mixed practice set without looking up answers.</li>
              <li>Sort every mistake into rules, signs, controls or reading error.</li>
              <li>Choose one weak area for your next session instead of repeating the same random test.</li>
            </ol>
            <div className="callout"><b>Use your result as a map, not a verdict.</b> A first score tells you where to start. It does not guarantee or predict the official test result.</div>
            <h2 id="topics">The three areas to study</h2>
            <div className="resource-cards">
              <section className="resource-card"><h3>Road rules</h3><p>Study right of way, speed, lane use, road markings, following distance and safe decisions. Always ask what the driver should do next.</p><Link className="text-link" href="/k53-learners-test/">Learn the K53 learner&apos;s test sections →</Link></section>
              <section className="resource-card"><h3>Road signs</h3><p>Learn signs as families. Recognise the shape and colour first, identify the symbol, then state the safe response.</p><Link className="text-link" href="/k53-road-signs/">Open road-signs practice →</Link></section>
              <section className="resource-card"><h3>Vehicle controls</h3><p>Revise the controls, checks and responses relevant to the vehicle class you will study. Use image questions to strengthen recognition.</p><Link className="text-link" href="/k53-vehicle-controls/">Open vehicle-controls practice →</Link></section>
            </div>
            <h2 id="routine">Build a repeatable study routine</h2>
            <p>Choose a small daily or near-daily block you can actually keep. Start with yesterday&apos;s mistakes, complete a focused question set, read the explanations and write down one topic to revisit. Short, deliberate sessions make it easier to remember what you learned than a single cram session.</p>
            <div className="resource-cards">
              <section className="resource-card"><h3>Have 15 minutes?</h3><p>Review five mistakes or practise one sign family.</p></section>
              <section className="resource-card"><h3>Have 30 minutes?</h3><p>Complete a topic drill and repeat the questions you missed.</p></section>
              <section className="resource-card"><h3>Have 45 minutes?</h3><p>Study one topic, then finish with a short mixed set.</p></section>
              <section className="resource-card"><h3>Have a month?</h3><p>Follow the <Link className="text-link" href="/four-week-learner-licence-study-plan/">four-week study plan</Link> from baseline to timed practice.</p></section>
            </div>
            <h2 id="mock-tests">When to start timed mock tests</h2>
            <p>Use untimed topic practice while you are still learning. Add timed mixed tests once you understand the main material and want to practise reading carefully under pressure. After each mock, review the reason behind every missed answer and return to that topic.</p>
            <p><a className="text-link" href={GOVERNMENT_LEARNER_LICENCE_URL} target="_blank" rel="noreferrer">Read the official learner&apos;s licence guidance ↗</a></p>
            <DownloadActions webLabel="Start a focused study session ↗" playLabel="Download on Google Play ↗" />
          </div>
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
    <GuideSchema name="What to Study After Booking Your Learner's Licence Test" description="A practical study sequence for the time after booking a South African learner's licence test." path={path} faqs={faqs} />
  </>;
}
