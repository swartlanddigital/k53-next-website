import type { Metadata } from "next";
import Link from "next/link";
import {
  CTA,
  DownloadActions,
  Footer,
  GuideSchema,
  Header,
  OfficialManuals,
  PageHero,
} from "../components";

const path = "/official-learner-driver-manuals/";
const faqs = [
  ["Where can I download the official learner-driver manuals?", "K53 Next links directly to the three learner-driver manuals hosted by the South African NaTIS website: Rules of the Road, Road Traffic Signs and Vehicle Controls."],
  ["Are these manuals the official learner's licence test?", "No. They are official study manuals and K53 Next is an independent practice tool. Use your DLTC and current government guidance for applications, bookings, fees and test-day instructions."],
  ["Are the manuals current?", "The linked manuals are version 1.00 dated June 2012. Check current official sources because procedures, fees and requirements can change."],
] as [string, string][];

export const metadata: Metadata = {
  title: "Official Learner Driver Manuals South Africa | Download PDFs",
  description: "Download the official South African learner-driver manuals for Rules of the Road, Road Traffic Signs and Vehicle Controls from the NaTIS source links.",
  alternates: { canonical: path },
  openGraph: {
    title: "Official South African learner-driver manuals",
    description: "Find the official Rules of the Road, Road Traffic Signs and Vehicle Controls PDF manuals before you write your learner's licence test.",
  },
};

export default function Page() {
  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="OFFICIAL STUDY SOURCES" title="Download the learner-driver manuals." lede="Find the three official South African Department of Transport learner-driver manuals in one place. Each button downloads a free copy of the original study manual for your preparation.">
        <DownloadActions className="page-hero-actions" playClassName="button-secondary" webLabel="Practise with K53 Next ↗" playLabel="Download K53 Next ↗" />
      </PageHero>
      <OfficialManuals />
      <section className="content-page">
        <div className="shell narrow prose">
          <h2>How to use the manuals with K53 Next</h2>
          <p>Use the manuals for the source material, then use K53 Next to turn that material into active recall. Read a section, practise related questions, review the explanation behind every mistake and return to the manual when you need to clarify a concept.</p>
          <div className="resource-cards">
            <section className="resource-card"><h3>Rules of the Road</h3><p>Pair the official rules manual with road-rule questions and mixed learner&apos;s licence practice.</p><Link className="text-link" href="/k53-learners-test/">Study the K53 learner&apos;s test →</Link></section>
            <section className="resource-card"><h3>Road Traffic Signs</h3><p>Use the official sign manual, then practise recognition by shape, colour, meaning and response.</p><Link className="text-link" href="/k53-road-signs/">Practise road signs →</Link></section>
            <section className="resource-card"><h3>Vehicle Controls</h3><p>Read the control descriptions, choose your vehicle path and test your recognition on screen.</p><Link className="text-link" href="/k53-vehicle-controls/">Practise vehicle controls →</Link></section>
          </div>
          <div className="callout"><b>Important:</b> The linked files are official study manuals dated June 2012 and include their own Department of Transport copyright notice. K53 Next does not claim government affiliation. Confirm current appointment documents, fees and test-day rules with the relevant official service.</div>
          <DownloadActions webLabel="Start practising from the manuals ↗" playLabel="Download on Google Play ↗" />
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
    <GuideSchema name="Official Learner Driver Manuals South Africa" description="Official South African learner-driver manual links for Rules of the Road, Road Traffic Signs and Vehicle Controls." path={path} faqs={faqs} />
  </>;
}
