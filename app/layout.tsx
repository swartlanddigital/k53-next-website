import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "K53 Fast | South Africa's Colourful Learner App", template: "%s | K53 Fast" },
  description: "Practise K53 learner's licence questions, road signs, road rules and vehicle controls for South Africa with smart drills and mock tests.",
  applicationName: "K53 Fast",
  keywords: ["K53","K53 learners test","learner app","learners licence app South Africa","K53 practice questions","K53 road signs","Code A","Code B","Code C"],
  openGraph: { type:"website", locale:"en_ZA", siteName:"K53 Fast", title:"K53 Fast — Learn it. Nail it. Drive.", description:"A colourful K53 learner app with 1,574 practice questions, image-based road signs and mock tests.", images:[{url:"/og.png",width:1732,height:909,alt:"K53 Fast — Learn it. Nail it. Drive."}] },
  twitter: { card:"summary_large_image", title:"K53 Fast — Learn it. Nail it. Drive.", description:"Practise K53 questions, road signs and mock tests for South Africa.", images:["/og.png"] },
  robots: { index:true, follow:true },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en-ZA"><body><a className="skip" href="#main">Skip to content</a>{children}</body></html>;
}
