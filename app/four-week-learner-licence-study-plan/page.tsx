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

const path = "/four-week-learner-licence-study-plan/";
const faqs = [
  ["Can I prepare for my learner's licence test in four weeks?", "A month can give you a useful structure if you practise consistently. Begin with a baseline, study the three core areas, review mistakes and finish with timed mixed tests."],
  ["What should I study first for the learner's licence test?", "Start with a short mixed quiz to find your gaps, then rotate road rules, road signs and vehicle controls. Use explanations and return to the topics where your accuracy is lower."],
  ["How long should each study session be?", "A focused 30 to 45 minute session is easier to repeat than an occasional long cram session. Adjust the length around your school, work and appointment schedule."],
] as [string, string][];

export const metadata: Metadata = {
  title: "Four-Week Learner's Licence Study Plan South Africa | K53",
  description: "A practical four-week South African learner's licence study plan from appointment date to test day: road rules, road signs, vehicle controls and timed practice.",
  alternates: { canonical: path },
  openGraph: {
    title: "Your four-week learner's licence study plan",
    description: "Use the month between booking and test day to study deliberately instead of cramming.",
  },
};

export default function Page() {
  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="APPOINTMENT TO TEST DAY" title="A four-week learner&apos;s licence study plan." lede="If your test date is about a month away, use a simple rhythm: learn the idea, practise it on screen, review the mistake and then test yourself under time pressure.">
        <DownloadActions className="page-hero-actions" playClassName="button-secondary" webLabel="Start your baseline quiz ↗" playLabel="Download K53 Next ↗" />
      </PageHero>
      <article className="content-page">
        <div className="shell narrow prose">
          <p className="lead-copy">This is a study plan, not an official booking timetable. Confirm your documents, fees, appointment and test-day instructions with your local Driving Licence Testing Centre or the official government service.</p>
          <div className="callout"><b>Set the date first.</b> Once your appointment is confirmed, write the test date on your calendar and work backwards. The South African Government identifies road signs, motor vehicle controls and road rules as areas to study before the learner&apos;s licence test.</div>
          <h2>Use the same study rhythm each day</h2>
          <div className="resource-cards">
            <section className="resource-card"><h3>10 minutes — recall</h3><p>Review yesterday&apos;s mistakes or name the signs, rules or controls you struggled to remember.</p></section>
            <section className="resource-card"><h3>20 minutes — practise</h3><p>Complete one focused set in K53 Next and read the explanation behind every incorrect answer.</p></section>
            <section className="resource-card"><h3>10 minutes — repair</h3><p>Repeat only the weak topic. Do not hide the gap by endlessly starting a new random test.</p></section>
            <section className="resource-card"><h3>5 minutes — record</h3><p>Note the topic, question type and reason for the mistake so tomorrow&apos;s session has a clear starting point.</p></section>
          </div>
          <h2 id="weeks">The four-week plan</h2>
          <ol className="game-plan">
            <li><b>Week 1 — Find your starting point.</b> Take a mixed learner&apos;s licence practice test. Choose the vehicle path that matches your application, then separate your mistakes into road rules, road signs and vehicle controls. Finish the week by repeating the two weakest topics.</li>
            <li><b>Week 2 — Build the foundations.</b> Study one core area per day. Learn the meaning and safe response behind each answer rather than memorising a fixed order. Use image questions for signs and control-recognition practice for the vehicle section.</li>
            <li><b>Week 3 — Mix the questions.</b> Rotate topics inside the same session. Practise unfamiliar wording, revisit your mistake list and complete mixed sets without using category hints. The goal is to recognise the underlying rule when the question looks different.</li>
            <li><b>Week 4 — Rehearse test day.</b> Take timed mock tests on a screen, read each condition carefully and leave enough time to review errors. Keep the final day calm: revise your short mistake list instead of attempting a late-night cram.</li>
          </ol>
          <h2>What to do if you have less or more time</h2>
          <p>If your appointment is closer than four weeks, keep the order but combine the first two phases and prioritise the topics where your baseline score is lowest. If you have more time, repeat the cycle with fresh mixed sets and continue reviewing mistakes. Consistency matters more than a perfect calendar.</p>
          <h2>Study the three test areas</h2>
          <div className="resource-cards">
            <section className="resource-card"><h3>Road rules</h3><p>Work on right of way, speed, lane use, road markings, following distance and safe decisions.</p><Link className="text-link" href="/k53-learners-test/">Open the K53 learner&apos;s test guide →</Link></section>
            <section className="resource-card"><h3>Road signs</h3><p>Learn sign families by shape, colour, symbol and the action a driver should take.</p><Link className="text-link" href="/k53-road-signs/">Practise K53 road signs →</Link></section>
            <section className="resource-card"><h3>Vehicle controls</h3><p>Revise the controls and safety checks for your motorcycle, light motor vehicle or heavy vehicle study path.</p><Link className="text-link" href="/k53-vehicle-controls/">Study vehicle controls →</Link></section>
          </div>
          <p><a className="text-link" href={GOVERNMENT_LEARNER_LICENCE_URL} target="_blank" rel="noreferrer">Confirm the official learner&apos;s licence guidance ↗</a></p>
          <DownloadActions webLabel="Practise your four-week plan ↗" playLabel="Download the Android app ↗" />
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
    <GuideSchema name="Four-Week Learner's Licence Study Plan South Africa" description="A four-week study plan for the time between a learner's licence appointment and test day." path={path} faqs={faqs} />
  </>;
}
