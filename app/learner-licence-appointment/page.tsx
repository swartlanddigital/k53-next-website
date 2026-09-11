import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { APP_URL, CTA, Footer, GooglePlayMark, Header, PageHero, PLAY_STORE_URL, SITE_URL } from "../components";

const GOVERNMENT_BOOKING_URL = "https://www.gov.za/services/driving-licence/apply-learners-licence";
const WESTERN_CAPE_BOOKING_URL = "https://www.westerncape.gov.za/service/learners-licence";
const NATIS_URL = "https://online.natis.gov.za/#/";

export const metadata: Metadata = {
  title: "Learner's Licence Appointment South Africa | 4-Week Study Plan",
  description: "Booked your South African learner's licence appointment? Use the weeks before your test date to study road rules, road signs and vehicle controls with K53 Next.",
  alternates: { canonical: "/learner-licence-appointment/" },
  openGraph: {
    title: "Booked your learner's licence appointment? Start your study plan",
    description: "A practical four-week K53 study plan for the time between booking your learner's licence test and test day.",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Learner's Licence Appointment", item: `${SITE_URL}/learner-licence-appointment/` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          ["What should I study before my learner's licence test?", "Study road rules, road signs and motor vehicle controls, then practise mixed and timed questions before test day."],
          ["How long should I study after booking my learner's licence appointment?", "Your available time depends on the appointment date. If you have about four weeks, use a weekly plan that moves from learning to mistake review and timed mock tests."],
          ["Where do I confirm the booking requirements?", "Confirm current documents, fees, age rules and booking steps with your local Driving Licence Testing Centre or the relevant official government service page."],
        ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
      },
    ],
  };

  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="BOOKED OR PLANNING TO BOOK?" title="Turn your learner&apos;s licence appointment into a study deadline." lede="If your test date is several weeks away, use that time deliberately. Build knowledge first, then practise until the screen and the questions feel familiar.">
        <div className="hero-actions page-hero-actions"><a className="button" href={APP_URL}>Practice on the web app ↗</a><a className="button button-secondary" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /> Get it on Google Play ↗</a></div>
      </PageHero>
      <section className="content-page">
        <div className="shell content-grid">
          <nav className="side-nav" aria-label="Appointment and study plan sections"><a href="#booking">Before you book</a><a href="#four-weeks">Four-week plan</a><a href="#topics">What to study</a><a href="#official">Official resources</a></nav>
          <div className="prose">
            <p className="lead-copy">Many people start searching for a <strong>learner&apos;s licence appointment</strong> before they feel ready to write. That is useful: once you know your test date, you can plan each study week instead of trying to learn everything the night before.</p>
            <h2 id="booking">Before you book your learner&apos;s licence test</h2>
            <p>Booking steps, available dates, fees and required documents can differ by province and testing centre. Confirm the current process with the official service that applies to you. The South African Government says applicants should book and confirm a date at a Driving Licence Testing Centre, while some provincial services also publish online booking routes.</p>
            <div className="resource-cards"><a className="resource-card" href={GOVERNMENT_BOOKING_URL} target="_blank" rel="noreferrer"><h3>South African Government</h3><p>General learner&apos;s licence application steps, documents and age information.</p><span className="text-link">Check the official requirements ↗</span></a><a className="resource-card" href={WESTERN_CAPE_BOOKING_URL} target="_blank" rel="noreferrer"><h3>Western Cape service guide</h3><p>Provincial booking information, documents, test preparation and appointment guidance.</p><span className="text-link">View the provincial guide ↗</span></a></div>
            <div className="callout"><b>Do not rely on an old checklist.</b> Bring the documents and fees confirmed by your local centre, and check the appointment receipt carefully. Requirements and availability can change.</div>
            <h2 id="four-weeks">A four-week plan from appointment to test day</h2>
            <p>If your appointment gives you roughly a month before you write, use the weeks like this. If you have more or less time, stretch or compress the same sequence.</p>
            <ol className="game-plan"><li><b>Week 1 — Find your gaps.</b> Take a short mixed K53 practice test, choose your Code A, B or C path, and list the topics that cost you marks.</li><li><b>Week 2 — Build the foundations.</b> Study road rules, road signs and vehicle controls separately. Read why answers are correct instead of memorising a fixed order.</li><li><b>Week 3 — Mix the pressure.</b> Use image questions, randomised sets and mistake review. Return to weak sections until your results become consistent.</li><li><b>Week 4 — Rehearse test day.</b> Take timed mock tests on a screen, read every condition carefully and review mistakes without cramming new material the night before.</li></ol>
            <h2 id="topics">What to study before you write your learners</h2>
            <p>Official South African guidance identifies road signs, motor vehicle controls and road rules as core learner&apos;s licence study areas. K53 Next gives each area its own practice path and then brings them together in mixed mock tests.</p>
            <div className="resource-cards"><section className="resource-card"><h3>Road rules</h3><p>Intersections, speed, lane use, road markings, following distance and safe decisions.</p><Link className="text-link" href="/k53-learners-test">Open the K53 learner&apos;s test guide →</Link></section><section className="resource-card"><h3>Road signs</h3><p>Recognise signs quickly by shape, colour, symbol and the action they require.</p><Link className="text-link" href="/k53-road-signs">Practise K53 road signs →</Link></section><section className="resource-card"><h3>Vehicle controls</h3><p>Revise the controls and checks relevant to the vehicle code on your application.</p><Link className="text-link" href="/k53-practice-test">Choose your practice mode →</Link></section><section className="resource-card"><h3>Computerised test habits</h3><p>Get used to reading on screen, selecting carefully and staying calm while time is running.</p><Link className="text-link" href="/computerised-learners-test">Understand the new test →</Link></section></div>
            <h2 id="official">Official booking resources</h2>
            <p>Use K53 Next for study, but use official government or local DLTC channels for bookings, current fees, documents and test-day rules.</p>
            <p><a className="text-link" href={NATIS_URL} target="_blank" rel="noreferrer">Open the NaTIS online portal ↗</a></p>
            <p><a className="button" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /> Download K53 Next on Google Play ↗</a></p>
          </div>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
    <Script id="appointment-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
