import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const playStoreUrl = "https://play.google.com/store/apps/details?id=com.base69e9f3638e3e914a5f9614b0.app";
const androidPackage = "com.base69e9f3638e3e914a5f9614b0.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "K53 Next | K53 Learner's Licence App South Africa", template: "%s | K53 Next" },
  description: "Download K53 Next for South Africa's learner's licence test. Practise 1,574 screen-based K53 questions, road signs, rules, vehicle controls and timed mock tests.",
  applicationName: "K53 Next",
  authors: [{ name: "K53 Next" }],
  creator: "K53 Next",
  publisher: "Swartland Digital",
  category: "education",
  keywords: ["K53 learner's licence app","K53 learners licence test South Africa","free K53 practice test","computerised learners licence test","new learners licence test South Africa","CLLT","K53 questions and answers","K53 road signs","rules of the road test","vehicle controls test","Code A","Code B","Code C"],
  openGraph: { type:"website", locale:"en_ZA", siteName:"K53 Next", url:siteUrl, title:"K53 Learner's Licence Practice for South Africa", description:"Download K53 Next and prepare for the new computerised learner's licence test with screen-based questions, road signs and timed mock tests.", images:[{url:"/og.png",width:1732,height:909,alt:"K53 Next — K53 learner's licence practice for South Africa"}] },
  twitter: { card:"summary_large_image", title:"Prepare for the new computerised learner's test", description:"Screen-based K53 practice for South Africa's new testing era.", images:["/og.png"] },
  robots: { index:true, follow:true, googleBot:{ index:true, follow:true, "max-image-preview":"large", "max-snippet":-1, "max-video-preview":-1 } },
  alternates: { canonical: "/" },
  other: {
    "al:android:package": androidPackage,
    "al:android:app_name": "K53 Next",
    "al:android:url": playStoreUrl,
    "google-play-app": `app-id=${androidPackage}`,
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  const schema = {"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":`${siteUrl}/#organization`,name:"K53 Next",url:siteUrl,logo:`${siteUrl}/k53-next-logo.png`,brand:{"@type":"Brand",name:"K53 Next"}},{"@type":"WebSite","@id":`${siteUrl}/#website`,url:siteUrl,name:"K53 Next",description:"K53 learner's licence practice for South Africa.",inLanguage:"en-ZA",publisher:{"@id":`${siteUrl}/#organization`}},{"@type":"SoftwareApplication","@id":`${siteUrl}/#app`,name:"K53 Next",alternateName:["K53 Next Learner's Licence App","K53 Learner's Licence App"],applicationCategory:"EducationalApplication",operatingSystem:"Android",url:`${siteUrl}/learners-licence-app/`,downloadUrl:playStoreUrl,installUrl:playStoreUrl,sameAs:[playStoreUrl],image:`${siteUrl}/k53-next-logo.png`,description:"Screen-based K53 learner's licence practice for South Africa's computerised test.",featureList:["1,574 K53 questions","Road rules, road signs and vehicle controls","Timed mock tests","Code A, Code B and Code C practice"],potentialAction:{"@type":"DownloadAction",target:{"@type":"EntryPoint",urlTemplate:playStoreUrl,actionPlatform:["https://schema.org/AndroidPlatform"]}},offers:{"@type":"Offer",url:playStoreUrl,price:"0",priceCurrency:"ZAR",availability:"https://schema.org/InStock"}}]};
  return <html lang="en-ZA"><head><meta name="google-adsense-account" content="ca-pub-4812260666501703" /><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4812260666501703" crossOrigin="anonymous" /></head><body><a className="skip" href="#main">Skip to content</a>{children}<Script id="site-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
