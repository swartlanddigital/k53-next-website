import type { Metadata } from "next";
import Link from "next/link";
import {
  CTA,
  DownloadActions,
  Footer,
  GOVERNMENT_LEARNER_LICENCE_URL,
  GuideSchema,
  Header,
  LL1_FORM_URL,
  NATIS_URL,
  PageHero,
  WESTERN_CAPE_LEARNER_LICENCE_URL,
} from "../components";

const path = "/learner-licence-appointment-documents/";
const faqs = [
  ["What documents do I need for a learner's licence appointment?", "The South African Government lists an identity document, two identical black-and-white ID photographs, a booking fee and proof of postal and residential address. Confirm the current checklist with your local DLTC before you go."],
  ["Do I need the LL1 form before my appointment?", "The LL1 application form is available at the Driving Licence Testing Centre and through eNatis. Check whether your centre wants you to complete anything before arriving."],
  ["What must I take on learner's licence test day?", "The official government service says to take your booking receipt and identity document on the day of the test. Confirm any local instructions with your testing centre."],
] as [string, string][];

export const metadata: Metadata = {
  title: "Learner's Licence Appointment Documents South Africa | What to Bring",
  description: "A practical South African learner's licence appointment document checklist: ID, photographs, address proof, LL1, fees, eye test and test-day documents.",
  alternates: { canonical: path },
  openGraph: {
    title: "What to take to your learner's licence appointment",
    description: "Check the documents and preparation steps before visiting your Driving Licence Testing Centre.",
  },
};

export default function Page() {
  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="BEFORE YOU BOOK" title="Take the right documents to your learner&apos;s licence appointment." lede="Use this practical checklist before you visit a Driving Licence Testing Centre. Provincial and centre requirements can change, so confirm the latest instructions before you leave home.">
        <DownloadActions className="page-hero-actions" playClassName="button-secondary" webLabel="Practise while you prepare ↗" playLabel="Download K53 Next ↗" />
      </PageHero>
      <article className="content-page">
        <div className="shell content-grid">
          <nav className="side-nav" aria-label="Appointment documents sections"><a href="#checklist">Appointment checklist</a><a href="#forms">Forms and eye test</a><a href="#test-day">Test day</a><a href="#official">Official sources</a></nav>
          <div className="prose">
            <p className="lead-copy">The official checklist is more important than any social-media post or old PDF. Start with the national guidance, then confirm the exact process, fee and photo requirement with the DLTC where you will apply.</p>
            <h2 id="checklist">Learner&apos;s licence appointment checklist</h2>
            <p>The South African Government currently lists these items for the application and booking process:</p>
            <ul>
              <li><strong>Your identity document.</strong> Take the original document or the form of identification your centre accepts.</li>
              <li><strong>Two identical black-and-white ID photographs.</strong> Confirm the number and format with the DLTC before having them taken.</li>
              <li><strong>The booking fee.</strong> The amount is set locally, so contact the licensing office for the current fee.</li>
              <li><strong>Proof of postal and residential address.</strong> If the utility bill is not in your name, ask the bill holder about the required affidavit and attach the utility bill.</li>
              <li><strong>Address confirmation for an informal settlement.</strong> The government service says a letter with an official date stamp from the ward councillor may be required.</li>
            </ul>
            <div className="callout"><b>Do not rely on an old checklist.</b> Requirements, fees, appointment availability and photo rules can differ by centre. Save the official page and call your local DLTC before your appointment.</div>
            <h2 id="forms">LL1 form and eye test</h2>
            <p>Complete the Application for Learner&apos;s Licence form, known as LL1. The form is available at the testing centre and through the official eNatis forms area. If you are 65 or older, the government service also lists the MC medical certificate form.</p>
            <p>You will have an eye test at the testing centre, or you may be able to submit an eye-test form completed by a qualified optometrist. Confirm the accepted format before making an appointment with an optometrist.</p>
            <h2 id="test-day">What to take on test day</h2>
            <p>Keep your booking receipt somewhere safe as soon as your date is confirmed. The national guidance lists the booking receipt and your ID for the day of the learner&apos;s licence test. Arrive early enough to follow your centre&apos;s check-in and verification process.</p>
            <p>While you wait for the appointment or test date, study the three core areas: road rules, road signs and motor vehicle controls. Start with a baseline quiz and use your mistakes to decide what to revise first.</p>
            <div className="source-cards" id="official">
              <a href={GOVERNMENT_LEARNER_LICENCE_URL} target="_blank" rel="noreferrer"><strong>South African Government</strong><span>National learner&apos;s licence application steps, documents, forms, test-day information and contacts.</span><span className="text-link">Check the current requirements ↗</span></a>
              <a href={WESTERN_CAPE_LEARNER_LICENCE_URL} target="_blank" rel="noreferrer"><strong>Western Cape learner&apos;s licence service</strong><span>Provincial information about applying, booking and preparing for a learner&apos;s licence.</span><span className="text-link">Open the provincial guide ↗</span></a>
              <a href={LL1_FORM_URL} target="_blank" rel="noreferrer"><strong>Official LL1 form</strong><span>Download the Application for Learner&apos;s Licence form from the eNatis forms area.</span><span className="text-link">View the LL1 form ↗</span></a>
              <a href={NATIS_URL} target="_blank" rel="noreferrer"><strong>eNatis portal</strong><span>Use the official portal where your province or service directs you to book or manage a transaction.</span><span className="text-link">Open eNatis ↗</span></a>
            </div>
            <h2>Use the waiting time to prepare</h2>
            <p>Once your documents and appointment are sorted, do not leave studying until the final week. Follow the <Link className="text-link" href="/four-week-learner-licence-study-plan/">four-week learner&apos;s licence study plan</Link>, practise the <Link className="text-link" href="/k53-vehicle-controls/">vehicle controls</Link> and use K53 Next to review the questions you miss.</p>
            <DownloadActions webLabel="Start practising on the web app ↗" playLabel="Download on Google Play ↗" />
          </div>
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
    <GuideSchema name="Learner's Licence Appointment Documents South Africa" description="What to bring to a South African learner's licence appointment, with links to official requirements and the LL1 form." path={path} faqs={faqs} />
  </>;
}
