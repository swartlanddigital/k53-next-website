import Link from "next/link";


import { APP_URL, PLAY_STORE_URL, SITE_URL, BASE_PATH } from "./site-config";
export { APP_URL, PLAY_STORE_URL, SITE_URL, BASE_PATH } from "./site-config";
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

export function Icon({name="arrow"}:{name?:string}) {
 const shapes:Record<string,React.ReactNode>={phone:<><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 19h2"/></>,arrow:<path d="M5 12h14m-5-5 5 5-5 5"/>,book:<><path d="M12 6v15M3 4h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z"/></>,check:<><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,signs:<><path d="m12 3 9 9-9 9-9-9Z"/><path d="M9 14V9h6m-3-3 3 3-3 3"/></>,progress:<path d="M4 18V6m0 12h16M8 14l4-5 4 2 4-6"/>,bell:<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>,menu:<path d="M4 6h16M4 12h16M4 18h16"/>};
 return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name]||shapes.arrow}</svg>;
}
export function Logo(){return <Link className="logo" href="/" aria-label="K53 Next home"><img src={asset("/k53-next-logo-256.webp")} alt="" width="42" height="42"/><span>K53 Next</span></Link>}
export function GooglePlayMark(){return <span className="google-play-mark" aria-hidden="true"><img src={asset(GOOGLE_PLAY_ICON)} alt="" width="20" height="22"/></span>}
export function GooglePlayButton({children="Get it on Google Play",className=""}:{children?:React.ReactNode;className?:string}){return <a className={`button button-android play-button ${className}`} href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark/><span>{children}</span></a>}
export function IPhoneButton({className="",children="Open iPhone web app"}:{className?:string;children?:React.ReactNode}){return <a className={`button button-iphone ${className}`} href={APP_URL}><Icon name="phone"/><span>{children}</span></a>}
const navigation=[["Practice","/k53-practice-test/"],["Road signs","/k53-road-signs/"],["Study guides","/k53-test/"],["Download","/download/"]];
export function Header(){return <header className="site-header"><div className="shell nav-wrap"><Logo/><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><div className="header-actions"><Link className="header-platform" href="/iphone/"><Icon name="phone"/><span>iPhone</span></Link><a className="header-platform" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark/><span>Android</span></a></div><details className="mobile-menu"><summary aria-label="Open navigation"><Icon name="menu"/></summary><nav aria-label="Mobile navigation">{navigation.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link href="/iphone/">Install on iPhone</Link></nav></details></div></header>}
export function Footer(){return <><footer className="footer"><div className="shell footer-grid"><div className="footer-brand"><Logo/><p>Independent learner’s licence practice. Built for your next step.</p><p className="tiny">Road rules, signs and controls for South Africa.</p></div><div><h2>Get K53 Next</h2><Link href="/iphone/">iPhone web app</Link><a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">Android on Google Play</a><a href={APP_URL}>Open in your browser</a><Link href="/download/">All installation options</Link><Link href="/learners-licence-app/">Explore the app</Link></div><div><h2>Study</h2><Link href="/k53-practice-test/">K53 practice tests</Link><Link href="/k53-road-signs/">Road signs</Link><Link href="/k53-vehicle-controls/">Vehicle controls</Link><Link href="/k53-test/">Study guides</Link><Link href="/k53-learners-test/">Learner’s test guide</Link><Link href="/learner-licence-test-questions/">Test questions</Link><Link href="/computerised-learners-test/">Computerised testing</Link></div><div><h2>Help and resources</h2><Link href="/learner-licence-appointment/">Booking your test</Link><Link href="/learner-licence-appointment-documents/">Appointment documents</Link><Link href="/four-week-learner-licence-study-plan/">Four-week study plan</Link><Link href="/official-learner-driver-manuals/">Official manuals</Link><Link href="/faq/">Frequently asked questions</Link><Link href="/support/">Contact support</Link></div></div><div className="shell footer-note"><p>© 2026 K53 Next · Swartland Digital<br/>Independent study tool. Not affiliated with the South African government or a licensing authority.</p><div><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/delete-account/">Delete account</Link></div></div></footer><nav className="mobile-download-bar" aria-label="Get K53 Next"><a href={APP_URL}><Icon name="phone"/><span>iPhone web app</span></a><a href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><GooglePlayMark/><span>Android app</span></a></nav></>}
export function StoreButtons(){return <div className="store-row" aria-label="Get the app"><IPhoneButton/><GooglePlayButton/></div>}
export function Phone({screen,alt,tilt="",priority=false}:{screen:string;alt:string;tilt?:string;priority?:boolean}){return <div className={`phone ${tilt}`}><div className="phone-top"/><div className="screen-crop"><img src={asset(screen)} alt={alt} width="390" height="844" loading={priority?"eager":"lazy"} fetchPriority={priority?"high":"auto"}/></div></div>}

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
  return <script id={`guide-schema-${path.replace(/[^a-z0-9]/gi,"-")}`} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph})}}/>;
}

export function CTA(){return <section className="cta"><div className="shell cta-card"><div><span className="eyebrow">YOUR NEXT STEP</span><h2>A little practice.<br/>More confidence.</h2><p>Choose Android or the iPhone web app and start your next study session.</p></div><div className="cta-actions"><StoreButtons/><a className="text-link" href={APP_URL}>Or practise in your browser <Icon/></a></div></div></section>}
export const faqItems=[
 ["Can I use K53 Next on Android and iPhone?","Yes. Get the Android app from Google Play. On iPhone, open app.k53next.co.za in Safari, choose Share and Add to Home Screen, then open the K53 Next icon."],
 ["Is K53 Next free to use?","Free practice is available, with daily limits. Purchased Premium adds unlimited practice and removes adverts. The Android Google Play checkout shows the current purchase terms; new purchases in the iPhone web app are not yet enabled."],
 ["What can I study?","Practise road rules, road signs and vehicle controls. Choose motorcycle, light motor vehicle or heavy motor vehicle study paths, labelled Code A, B and C in the app."],
 ["Can I study offline?","The Android app includes its study content. In the web app, keep the first visit online while the study material downloads. Core questions and pictures can then be used offline. Sign-in, cloud sync, updates and notifications need an internet connection."],
 ["Will my progress work on both platforms?","Sign in with the same K53 Next account and sign-in method to sync progress between the current Android app and web app. Existing verified Android Premium is recognised by the web app. Guest progress stays on its own device; older Base44 web accounts remain separate."],
 ["Can the iPhone web app send study reminders?","Yes, after you install it on your Home Screen and allow notifications on that device. Tap the bell to choose daily study reminders, their South African delivery time, and app updates separately. iPhone web notifications need iOS 16.4 or later."],
 ["Is this an official government app?","K53 Next is an independent educational study tool. It is not affiliated with the South African government or a licensing authority. Practice results do not predict or guarantee an official test result."],
 ["Where do I book my learner’s licence test?","Book through the applicable official service or Driving Licence Testing Centre for your area. Our appointment guide and document checklist link to official sources."],
];

export function FAQList({limit}:{limit?:number}) {
  return <div className="faq-list">{faqItems.slice(0,limit).map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>;
}
