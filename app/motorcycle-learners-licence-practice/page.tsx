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

const path = "/motorcycle-learners-licence-practice/";
const faqs = [
  ["What age can I apply for a motorcycle learner's licence?", "The South African Government service lists different age thresholds for motorcycle categories and engine sizes. Check the current official guidance and confirm the category with your DLTC before applying."],
  ["What should I study for a motorcycle learner's licence?", "Study road rules, road signs and motorcycle-relevant vehicle controls. Then use mixed practice so the shared road knowledge remains strong."],
  ["Does K53 Next support motorcycle learner's licence practice?", "Yes. K53 Next includes a motorcycle study path alongside road rules, road signs, mistake review and timed mock tests."],
] as [string, string][];

export const metadata: Metadata = {
  title: "Motorcycle Learner's Licence Practice South Africa | Code A",
  description: "Practise for a South African motorcycle learner's licence with Code A and A1 study, road signs, road rules, vehicle controls and timed mock tests.",
  alternates: { canonical: path },
  openGraph: {
    title: "Motorcycle learner's licence practice",
    description: "Prepare for the motorcycle learner's licence theory test with a focused K53 study path.",
  },
};

export default function Page() {
  return <>
    <Header />
    <main id="main">
      <PageHero eyebrow="MOTORCYCLE / CODE A" title="Practise for your motorcycle learner&apos;s licence." lede="Build the road knowledge, sign recognition and motorcycle-control understanding you need before the learner&apos;s licence test. Choose the official vehicle category that matches your application.">
        <DownloadActions className="page-hero-actions" playClassName="button-secondary" webLabel="Practise motorcycle questions ↗" playLabel="Download K53 Next ↗" />
      </PageHero>
      <article className="content-page">
        <div className="shell narrow prose">
          <div className="callout"><b>Check the category and age rule.</b> The official government service lists motorcycle, tricycle and quadricycle categories and different age requirements depending on the vehicle and engine size. Confirm the current rule with the official service and your DLTC.</div>
          <h2>What to study for a motorcycle learner&apos;s licence</h2>
          <div className="resource-cards">
            <section className="resource-card"><h3>Road rules</h3><p>Practise the rules and safe decisions that apply to every road user, then pay attention to situations that are especially important for a vulnerable road user.</p></section>
            <section className="resource-card"><h3>Road signs</h3><p>Build quick recognition by sign family, shape, colour and meaning before mixing signs into broader tests.</p></section>
            <section className="resource-card"><h3>Motorcycle controls</h3><p>Study the control and safety-check questions relevant to the motorcycle path, and explain what each control is for.</p></section>
            <section className="resource-card"><h3>Screen-based practice</h3><p>Use randomised, timed questions so the digital flow feels familiar when you write.</p></section>
          </div>
          <h2>Make your practice visual and deliberate</h2>
          <ol className="game-plan">
            <li><b>See it.</b> Identify the sign, control or road situation without guessing from the answer length.</li>
            <li><b>Explain it.</b> Say what the rule means and what the rider should do.</li>
            <li><b>Review it.</b> Read the explanation when you are wrong and repeat the idea later in a mixed set.</li>
            <li><b>Rehearse it.</b> Use a timed mock only after the topic foundations are becoming consistent.</li>
          </ol>
          <p><a className="text-link" href={GOVERNMENT_LEARNER_LICENCE_URL} target="_blank" rel="noreferrer">Check the official motorcycle learner&apos;s licence categories and requirements ↗</a></p>
          <p>Need more sign preparation? <Link className="text-link" href="/k53-road-signs/">Open K53 road-signs practice →</Link></p>
          <DownloadActions webLabel="Start motorcycle practice ↗" playLabel="Download on Google Play ↗" />
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
    <GuideSchema name="Motorcycle Learner's Licence Practice South Africa" description="Motorcycle learner's licence theory practice for Code A and A1 study paths in South Africa." path={path} faqs={faqs} />
  </>;
}
