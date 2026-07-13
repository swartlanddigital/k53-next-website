import Link from "next/link";
import Script from "next/script";
import {
  APP_URL,
  CTA,
  FAQList,
  Footer,
  Header,
  Phone,
  StoreButtons,
  asset,
  faqItems,
} from "./components";

const GOVERNMENT_SOURCE = "https://www.westerncape.gov.za/mobility/article/western-cape-launches-innovative-computerised-learners-licence-testing-system";
const IOL_SOURCE = "https://iol.co.za/news/2026-05-23-only-40-pass-south-africas-learners-licence-test-can-you/";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "#org", name: "K53 Next", url: "/" },
      { "@type": "WebSite", "@id": "#website", name: "K53 Next", url: "/", publisher: { "@id": "#org" } },
      {
        "@type": "SoftwareApplication",
        name: "K53 Next",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web, iOS, Android",
        url: APP_URL,
        description: "Screen-based K53 preparation for South Africa's computerised learner's licence test.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "ZAR" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.slice(0, 6).map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <main id="main">
        <section className="hero system-hero">
          <div className="road-line one" />
          <div className="road-line two" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="kicker"><span>💻</span> Built for the computerised test era</div>
              <h1>The test changed.<br />Your prep <em>should too.</em></h1>
              <p className="hero-lede">
                The new learner’s test is digital, randomised and screen-based. K53 Next trains you to read carefully,
                handle tricky wording and stay sharp under timed pressure.
              </p>
              <div className="hero-actions">
                <a className="button" href={APP_URL}>Practise on screen free ↗</a>
                <Link className="text-link" href="/computerised-learners-test">What changed? →</Link>
              </div>
              <div className="trust-row">
                <span>✓ 1,574 digital questions</span>
                <span>✓ Timed mock tests</span>
                <span>✓ Code A, B &amp; C</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="K53 Next screen-based practice">
              <span className="sticker sticker-lime">NEW<br /><small>TEST ERA</small></span>
              <span className="sticker sticker-mint">DON&apos;T<br />GUESS!</span>
              <Phone screen="/app-screens/practice.png" alt="K53 Next screen-based practice topics" tilt="tilt-left" />
              <Phone screen="/app-screens/mock-test.png" alt="K53 Next timed computerised mock tests" tilt="tilt-right" />
              <div className="float-sign"><img src={asset("/signs/two-way-traffic.webp")} alt="Two-way traffic warning sign" width="512" height="512" /></div>
            </div>
          </div>
        </section>

        <section className="news-ribbon">
          <div className="shell news-ribbon-inner">
            <b>THE NEW REALITY</b>
            <span>IOL reported a national learner-test pass rate of only 40% in May 2026.</span>
            <a href={IOL_SOURCE}>Read the report ↗</a>
          </div>
        </section>

        <section className="stats system-stats">
          <div className="shell stat-grid">
            <div><strong>40%</strong><span>reported national pass rate</span></div>
            <div><strong>1,574</strong><span>screen-based questions</span></div>
            <div><strong>172</strong><span>image questions</span></div>
            <div><strong>24/7</strong><span>digital practice</span></div>
          </div>
          <p className="stat-source shell">40% figure reported by IOL on 23 May 2026; it is not a K53 Next performance claim.</p>
        </section>

        <section className="section change-section" id="changed">
          <div className="shell">
            <div className="section-head">
              <div><span className="eyebrow">THE BOOKLET IS OUT</span><h2>Meet the computerised learner&apos;s test.</h2></div>
              <p>The Western Cape officially launched CLLT in May 2025, replacing the traditional manual booklet with secure digital testing.</p>
            </div>
            <div className="change-grid">
              <article><span>01</span><div className="change-icon">🖥️</div><h3>Screen-based</h3><p>Fully networked workstations and touchscreen kiosks replace the paper-style process.</p></article>
              <article><span>02</span><div className="change-icon">🔀</div><h3>Randomised</h3><p>Terminals generate randomised questions, so memorising a fixed sequence is not enough.</p></article>
              <article><span>03</span><div className="change-icon">👆</div><h3>Secure</h3><p>Fingerprint verification connects the test to NaTIS and strengthens result integrity.</p></article>
              <article><span>04</span><div className="change-icon">⚡</div><h3>Instant</h3><p>Digital processing delivers faster, automatically verified results.</p></article>
            </div>
            <div className="source-line">Source: <a href={GOVERNMENT_SOURCE}>Western Cape Mobility Department, 28 May 2025 ↗</a></div>
          </div>
        </section>

        <section className="section pressure-section">
          <div className="shell pressure-grid">
            <div>
              <span className="eyebrow">WHY PEOPLE GET CAUGHT</span>
              <h2>Knowing the rules is only half the battle.</h2>
              <p>IOL’s report highlights three recurring problems candidates describe: confusing wording, timed-test nerves and second-guessing answers they actually know.</p>
              <Link className="button" href="/computerised-learners-test">Get the new-test game plan →</Link>
            </div>
            <div className="pressure-cards">
              <article><b>“Wait—what are they asking?”</b><p>Practise differently worded questions, not only textbook sentences.</p></article>
              <article><b>Clock pressure</b><p>Use timed mock tests until the screen and countdown feel normal.</p></article>
              <article><b>Second-guessing</b><p>Review explanations so your answers are based on understanding, not luck.</p></article>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Computerised test preparation highlights">
          <div>SCREEN PRACTICE <b>✦</b> RANDOMISED QUESTIONS <b>✦</b> TIMED MOCKS <b>✦</b> ROAD SIGNS <b>✦</b> WEAK-AREA DRILLS <b>✦</b> CODE A · B · C <b>✦</b></div>
        </section>

        <section className="section app-tour">
          <div className="shell tour-grid">
            <div className="tour-phone">
              <Phone screen="/app-screens/practice.png" alt="K53 Next computerised learner test practice modes" />
              <span className="bubble bubble-one">Tricky wording? →<br /><b>Train for it.</b></span>
              <span className="bubble bubble-two">Weak section? →<br /><b>Drill it.</b></span>
            </div>
            <div>
              <span className="eyebrow">PRACTISE LIKE YOU&apos;LL TEST</span>
              <h2>Screen confidence before test-day pressure.</h2>
              <ul className="feature-list">
                <li><b>Digital question flow</b><span>Build the habit of reading and answering on screen.</span></li>
                <li><b>Randomised practice</b><span>Prepare for concepts appearing in unfamiliar combinations.</span></li>
                <li><b>Timed mock tests</b><span>Learn to stay calm while the clock is running.</span></li>
                <li><b>Mistake review</b><span>Understand why an answer was wrong before trying again.</span></li>
              </ul>
              <a className="button" href={APP_URL}>Start screen practice ↗</a>
            </div>
          </div>
        </section>

        <section className="section signs-section">
          <div className="shell signs-grid">
            <div>
              <span className="eyebrow">IMAGE QUESTIONS MATTER</span>
              <h2>See it.<br />Know it.<br /><em>Click it.</em></h2>
              <p>Computerised testing makes clear visual recognition essential. Practise road signs in square, screen-friendly cards before they appear in a randomised test.</p>
              <Link className="text-link light" href="/k53-road-signs">Practise K53 road signs →</Link>
            </div>
            <div className="sign-cards">
              <figure><img src={asset("/signs/railway-warning.webp")} alt="Railway crossing warning sign" width="512" height="512" /><figcaption>Warning signs</figcaption></figure>
              <figure><img src={asset("/signs/dead-end.webp")} alt="Dead end road sign" width="512" height="512" /><figcaption>Information signs</figcaption></figure>
              <figure><img src={asset("/signs/loose-stones.webp")} alt="Loose stones warning sign" width="512" height="512" /><figcaption>Hazard signs</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="section download" id="download">
          <div className="shell download-card">
            <div>
              <span className="eyebrow">THE DIGITAL TEST NEEDS DIGITAL PREP</span>
              <h2>Practise now.<br />Download soon.</h2>
              <p>The mobile web app is live today. App Store and Google Play versions are coming soon.</p>
              <StoreButtons />
            </div>
            <div className="download-art"><div className="qr-fake" aria-hidden="true"><span>▦</span><small>OPEN WEB APP</small></div><span className="scribble">START<br />HERE ↙</span></div>
          </div>
        </section>

        <section className="section faq-home">
          <div className="shell faq-grid">
            <div><span className="eyebrow">NEW TEST, QUICK ANSWERS</span><h2>Before you tap start...</h2><p>What the computerised format means for your preparation.</p><Link className="text-link" href="/faq">View all FAQs →</Link></div>
            <FAQList limit={6} />
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
      <Script id="schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
