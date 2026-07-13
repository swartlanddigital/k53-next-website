import Link from "next/link";

export const APP_URL = "https://cunning-pass-k53-fast.base44.app";
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (path: string) => `${BASE_PATH}${path}`;

export function Logo() {
  return <Link className="logo" href="/" aria-label="K53 Next home"><img className="logo-image" src={asset("/k53-next-logo.png")} alt="" width="1254" height="1254" /></Link>;
}

export function Header() {
  return <header className="site-header"><div className="shell nav-wrap"><Logo /><nav aria-label="Main navigation"><Link href="/computerised-learners-test">New test</Link><Link href="/k53-learners-test">Learner test</Link><Link href="/k53-road-signs">Road signs</Link><Link href="/k53-practice-test">Practice</Link></nav><a className="button button-small" href={APP_URL}>Practise free <span aria-hidden="true">↗</span></a></div></header>;
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid"><div><Logo/><p>Built for South Africa’s new computerised learner’s licence testing era.</p></div><div><h2>Study</h2><Link href="/computerised-learners-test">New computerised test</Link><Link href="/k53-learners-test">K53 learner test</Link><Link href="/k53-road-signs">K53 road signs</Link><Link href="/k53-practice-test">Practice tests</Link></div><div><h2>Help & legal</h2><Link href="/faq">Frequently asked questions</Link><Link href="/support">Support</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link><Link href="/delete-account">Delete account</Link></div><div><h2>Start now</h2><a href={APP_URL}>Open the web app ↗</a><p className="tiny">iOS and Android apps coming soon.</p></div></div><div className="shell footer-note"><span>© 2026 K53 Next</span><span>Independent study tool. Not affiliated with the South African government or a licensing authority.</span></div></footer>;
}

export function StoreButtons() {
  return <div className="store-row" aria-label="Download options"><a className="store-card live" href={APP_URL}><span className="store-icon">↗</span><span><small>USE IT NOW</small><b>Open Web App</b></span></a><div className="store-card muted" aria-label="Apple App Store coming soon"><span className="store-icon">●</span><span><small>COMING SOON ON THE</small><b>App Store</b></span></div><div className="store-card muted" aria-label="Google Play coming soon"><span className="store-icon">▶</span><span><small>COMING SOON ON</small><b>Google Play</b></span></div></div>;
}

export function Phone({screen, alt, tilt=""}:{screen:string;alt:string;tilt?:string}) {
  return <div className={`phone ${tilt}`}><div className="phone-top"/><div className="screen-crop"><img src={asset(screen)} alt={alt} width="2544" height="930" /></div></div>;
}

export function PageHero({eyebrow,title,lede,children}:{eyebrow:string;title:string;lede:string;children?:React.ReactNode}) {
 return <section className="inner-hero"><div className="shell narrow"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{lede}</p>{children}</div></section>;
}

export function CTA() {
  return <section className="cta"><div className="shell cta-card"><div><span className="eyebrow dark">READY WHEN YOU ARE</span><h2>Turn “I hope” into “I know.”</h2><p>Start with a quick drill today. Your next correct answer is one tap away.</p></div><a className="button button-dark" href={APP_URL}>Start practising free ↗</a></div></section>;
}

export const faqItems = [
  ["What is the new computerised learner's licence test?","The Computerised Learner’s Licence Testing system replaces the manual booklet method with secure digital testing. In the Western Cape rollout, terminals use fingerprint verification, randomised questions and instant digital processing."],
  ["Why should I practise on a screen?","Screen-based practice helps you get comfortable reading carefully, choosing answers digitally and staying focused in a timed environment—the same skills candidates report struggling with in the computerised test."],
  ["What is the K53 learner's licence test?","It is the theory test used in South Africa to check your knowledge of road rules, road signs and vehicle controls before you can receive a learner's licence."],
  ["Can I practise K53 questions for free?","Yes. K53 Next's web app lets you start practising from your phone or computer. Choose a topic, review mistakes and try timed mock tests."],
  ["Does K53 Next cover Code A, B and C?","Yes. The question bank supports motorcycle, light motor vehicle and heavy motor vehicle study paths, commonly referred to as Code A, B and C."],
  ["Is this an official government app?","No. K53 Next is an independent study tool and is not affiliated with the South African government, a driving licence testing centre or a licensing authority."],
  ["Are the App Store and Google Play versions available?","Not yet. The iOS and Android versions are marked Coming soon. You can use the full web app now in your mobile browser."],
  ["Will using this app guarantee that I pass?","No study tool can guarantee a result. K53 Next helps you practise consistently, identify weak areas and become more confident before your test."],
];

export function FAQList({limit}:{limit?:number}) {
  return <div className="faq-list">{faqItems.slice(0,limit).map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>;
}
