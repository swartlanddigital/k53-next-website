import Link from "next/link";
import Script from "next/script";

export const APP_URL = "https://cunning-pass-k53-fast.base44.app";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.base69e9f3638e3e914a5f9614b0.app";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://k53next.swartlanddigital.co.za";
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (path: string) => `${BASE_PATH}${path}`;
export const GOOGLE_PLAY_ICON = "/play-store/google-play-icon.png";
export const GOVERNMENT_LEARNER_LICENCE_URL = "https://www.gov.za/services/driving-licence/apply-learners-licence";
export const WESTERN_CAPE_LEARNER_LICENCE_URL = "https://www.westerncape.gov.za/service/learners-licence";
export const LL1_FORM_URL = "https://www.natis.gov.za/index.php/downloads/forms/road-traffic-related-forms?download=30%3Aapplication-for-learner-s-licence-form-ll1";
export const NATIS_URL = "https://online.natis.gov.za/#/";
export const OFFICIAL_MANUALS = [
  { title: "Rules of the Road", label: "Section 1", description: "Official South African learner-driver guidance on road rules, duties, traffic behaviour and road safety.", href: "/manuals/rules-of-the-road-v100-jun-2012.pdf" },
  { title: "Road Traffic Signs", label: "Section 2", description: "The official road-traffic-sign manual for learning sign families, meanings and driver responses.", href: "/manuals/road-traffic-signs-v100-jun-2012.pdf" },
  { title: "Vehicle Controls", label: "Section 3", description: "Official learner-driver guidance on vehicle components, controls and motorcycle controls.", href: "/manuals/vehicle-controls-v100-jun-2012.pdf" },
] as const;

export function Logo() {
  return <Link className="logo" href="/" aria-label="K53 Next home"><img className="logo-image" src={asset("/k53-next-logo.png")} alt="" width="1254" height="1254" /></Link>;
}

export function GooglePlayMark() {
  return <span className="google-play-mark" aria-hidden="true"><img src={asset(GOOGLE_PLAY_ICON)} alt="" width="520" height="572" /></span>;
}

export function GooglePlayButton({children="Get it on Google Play ↗", className=""}:{children?:React.ReactNode;className?:string}) {
  return <a className={`button play-button ${className}`.trim()} href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /><span>{children}</span></a>;
}

export function Header() {
  return <header className="site-header"><div className="shell nav-wrap"><Logo /><nav aria-label="Main navigation"><Link href="/computerised-learners-test">New test</Link><Link href="/k53-learners-test">Learner test</Link><Link href="/k53-test">K53 test</Link><Link href="/k53-road-signs">Road signs</Link><Link href="/learner-licence-appointment">Appointment plan</Link><Link href="/k53-practice-test">Practice</Link></nav><div className="header-actions"><a className="button button-small button-web" href={APP_URL}>Practice on the web app <span aria-hidden="true">↗</span></a><a className="button button-small play-header-button" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /><span><small>GET IT ON</small><b>Google Play</b></span></a></div></div></header>;
}

export function Footer() {
  return <><footer className="footer"><div className="shell footer-grid"><div><Logo/><p>Built for South Africa’s new computerised learner’s licence testing era.</p></div><div><h2>Study</h2><Link href="/computerised-learners-test">New computerised test</Link><Link href="/k53-learners-test">K53 learner test</Link><Link href="/k53-test">K53 test study hub</Link><Link href="/k53-road-signs">K53 road signs</Link><Link href="/k53-vehicle-controls">Vehicle controls</Link><Link href="/k53-practice-test">Practice tests</Link><Link href="/learner-licence-test-questions">Test questions</Link><Link href="/learner-licence-appointment-documents">Appointment documents</Link><Link href="/four-week-learner-licence-study-plan">Four-week study plan</Link></div><div><h2>Help & legal</h2><Link href="/learner-licence-appointment">Appointment guide</Link><Link href="/official-learner-driver-manuals">Official manuals</Link><Link href="/faq">Frequently asked questions</Link><Link href="/support">Support</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link><Link href="/delete-account">Delete account</Link></div><div><h2>Start now</h2><a href={APP_URL}>Open the web app ↗</a><a className="footer-play-link" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /><span>Download now on Google Play <span aria-hidden="true">↗</span></span></a><p className="tiny">Android is live on Google Play. iOS is coming soon.</p><div className="payment-trust" aria-label="Payment options accepted"><span className="payment-trust-label">Payment options accepted</span><div className="payment-badges"><img className="payment-logo payment-yoco" src={asset("/payment/yoco.png")} alt="Yoco" width={599} height={365} /><img className="payment-logo payment-cards" src={asset("/payment/cards-wallets.webp")} alt="Visa, Mastercard, American Express and Apple Pay" width={1200} height={352} /></div></div></div></div><div className="shell footer-note"><span>© 2026 K53 Next</span><span>Independent study tool. Not affiliated with the South African government or a licensing authority.</span></div></footer><div className="mobile-download-bar" aria-label="Download K53 Next"><span className="mobile-download-copy"><b>Ready to write your learners?</b><small>Get K53 Next on Android</small></span><a className="mobile-download-button" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /><span>Download</span><span aria-hidden="true">↗</span></a></div></>;
}

export function StoreButtons() {
  return <div className="store-row" aria-label="Download options"><a className="store-card live" href={APP_URL}><span className="store-icon">↗</span><span><small>USE IT NOW</small><b>Open Web App</b></span></a><div className="store-card muted" aria-label="Apple App Store coming soon"><span className="store-icon">●</span><span><small>COMING SOON ON THE</small><b>App Store</b></span></div><a className="store-card live play-store-card" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark /><span><small>DOWNLOAD NOW ON</small><b>Google Play</b></span></a></div>;
}

export function Phone({screen, alt, tilt=""}:{screen:string;alt:string;tilt?:string}) {
  return <div className={`phone ${tilt}`}><div className="phone-top"/><div className="screen-crop"><img src={asset(screen)} alt={alt} width="2544" height="930" /></div></div>;
}

export function PageHero({eyebrow,title,lede,children}:{eyebrow:string;title:string;lede:string;children?:React.ReactNode}) {
 return <section className="inner-hero"><div className="shell narrow"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{lede}</p>{children}</div></section>;
}

export function DownloadActions({className="",playClassName="",webLabel="Practice on the web app ↗",playLabel="Download K53 Next on Google Play ↗"}:{className?:string;playClassName?:string;webLabel?:string;playLabel?:string}) {
  return <div className={`section-actions ${className}`.trim()}><a className="button" href={APP_URL}>{webLabel}</a><GooglePlayButton className={playClassName}>{playLabel}</GooglePlayButton></div>;
}

export function OfficialManuals({heading="Official learner-driver manuals",intro="Use the original South African Department of Transport manuals alongside K53 Next practice. The free PDFs below are provided for study and keep the original Department of Transport copyright notice.",className=""}:{heading?:string;intro?:string;className?:string}) {
  return <section className={`official-manuals-section ${className}`.trim()} id="official-manuals"><div className="section-head"><div><span className="eyebrow">OFFICIAL STUDY SOURCES</span><h2>{heading}</h2></div><p>{intro}</p></div><div className="official-manuals-grid">{OFFICIAL_MANUALS.map((manual)=><article className="official-manual-card" key={manual.href}><span className="manual-label">{manual.label}</span><h3>{manual.title}</h3><p>{manual.description}</p><a className="button manual-download" href={manual.href} download>Download free PDF ↗</a></article>)}</div><p className="manuals-note">These files are free to download for study and are not sold or altered. They are dated June 2012 and include their own Department of Transport copyright notice. Keep that notice intact, and use current official government or DLTC guidance for booking, fees and test-day requirements.</p></section>;
}

type GuideFaq = [string, string];

export function GuideSchema({name,description,path,faqs=[]}:{name:string;description:string;path:string;faqs?:GuideFaq[]}) {
  const url = `${SITE_URL}${path.endsWith("/") ? path : `${path}/`}`;
  const graph: Record<string, unknown>[] = [
    {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${SITE_URL}/`},{"@type":"ListItem",position:2,name,item:url}]},
    {"@type":"Article","@id":`${url}#article`,headline:name,description,mainEntityOfPage:url,inLanguage:"en-ZA",dateModified:"2026-09-11",author:{"@type":"Organization",name:"K53 Next",url:SITE_URL},publisher:{"@type":"Organization",name:"K53 Next",url:SITE_URL}},
  ];
  if (faqs.length) graph.push({"@type":"FAQPage",mainEntity:faqs.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))});
  return <Script id={`guide-schema-${path.replace(/[^a-z0-9]/gi,"-")}`} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph})}}/>;
}

export function CTA() {
  return <section className="cta"><div className="shell cta-card"><div><span className="eyebrow dark">READY TO WRITE YOUR LEARNERS?</span><h2>Turn “I hope” into “I know.”</h2><p>Practise the questions, signs and controls before you book or write your learner&apos;s licence test.</p></div><div className="cta-actions"><a className="button button-dark" href={APP_URL}>Practice on the web app ↗</a><GooglePlayButton className="button-outline-dark" /></div></div></section>;
}

export const faqItems = [
  ["What is the new computerised learner's licence test?","The Computerised Learner’s Licence Testing system replaces the manual booklet method with secure digital testing. In the Western Cape rollout, terminals use fingerprint verification, randomised questions and instant digital processing."],
  ["Why should I practise on a screen?","Screen-based practice helps you get comfortable reading carefully, choosing answers digitally and staying focused in a timed environment—the same skills candidates report struggling with in the computerised test."],
  ["What is the K53 learner's licence test?","It is the theory test used in South Africa to check your knowledge of road rules, road signs and vehicle controls before you can receive a learner's licence."],
  ["Can I practise for my learner's licence test for free?","Yes. K53 Next's web app lets you start practising from your phone or computer. Choose road rules, road signs or vehicle controls, review mistakes and try timed mock tests before you write."],
  ["Does K53 Next cover Code A, B and C?","Yes. The question bank supports motorcycle, light motor vehicle and heavy motor vehicle study paths, commonly referred to as Code A, B and C."],
  ["Is this an official government app?","No. K53 Next is an independent study tool and is not affiliated with the South African government, a driving licence testing centre or a licensing authority."],
  ["Can I use K53 Next before I write my learners?","Yes. Use K53 Next to prepare for your South African learner's licence test with screen-based questions, topic practice, mistake review and timed mock tests. It is an independent study tool, not an official test or government service."],
  ["Are the App Store and Google Play versions available?","The Android version is live on Google Play now. The iOS version is still coming soon, and you can use the full web app in your mobile browser."],
  ["Will using this app guarantee that I pass?","No study tool can guarantee a result. K53 Next helps you practise consistently, identify weak areas and become more confident before your test."],
];

export function FAQList({limit}:{limit?:number}) {
  return <div className="faq-list">{faqItems.slice(0,limit).map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>;
}
