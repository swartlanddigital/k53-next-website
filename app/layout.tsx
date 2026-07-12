import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "K53 Fast | Prepare for the New Computerised Learner's Test", template: "%s | K53 Fast" },
  description: "Prepare for South Africa's new computerised learner's licence test with screen-based K53 practice, randomised questions, road signs and timed mock tests.",
  applicationName: "K53 Fast",
  keywords: ["computerised learners licence test","new learners licence test South Africa","CLLT","K53","K53 learners test","learner app","learners licence app South Africa","K53 practice questions","K53 road signs","Code A","Code B","Code C"],
  openGraph: { type:"website", locale:"en_ZA", siteName:"K53 Fast", title:"The learner's test changed. Your prep should too.", description:"Prepare for the new computerised learner's licence test with 1,574 screen-based K53 questions, image-based signs and timed mock tests.", images:[{url:"/og.png",width:1732,height:909,alt:"K53 Fast — The test changed. Your prep should too."}] },
  twitter: { card:"summary_large_image", title:"Prepare for the new computerised learner's test", description:"Screen-based K53 practice for South Africa's new testing era.", images:["/og.png"] },
  robots: { index:true, follow:true },
  alternates: { canonical: "/" },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en-ZA"><body><a className="skip" href="#main">Skip to content</a>{children}</body></html>;
}
