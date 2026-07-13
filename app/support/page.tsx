import type { Metadata } from "next";
import { APP_URL, Footer, Header, PageHero } from "../components";

export const metadata: Metadata = {
  title: "Support",
  description: "Get support for the K53 Fast learner’s licence study app.",
  alternates: { canonical: "/support/" },
};

export default function Page() {
  return <><Header/><main id="main"><PageHero eyebrow="WE’RE HERE TO HELP" title="K53 Fast support." lede="Help with signing in, study progress, questions, account deletion and technical issues."/><article className="content-page"><div className="shell narrow prose">
    <h2>Contact support</h2><p>Email <a href="mailto:info@swartlanddigital.co.za?subject=K53%20Fast%20support">info@swartlanddigital.co.za</a> with a short description of the problem. Include the device you are using and, if relevant, the page or question where it happened. Do not send your password.</p>
    <h2>Before you contact us</h2><ul><li>Check that you have an active internet connection.</li><li>Close and reopen the app, then try again.</li><li>Install the latest available app update.</li><li>Try the <a href={APP_URL}>K53 Fast web app</a> if the Android app is temporarily unavailable.</li></ul>
    <h2>Account and privacy requests</h2><p>See our <a href="/delete-account/">account-deletion instructions</a> or <a href="/privacy/">Privacy Policy</a> for data and privacy requests.</p>
    <h2>Official testing enquiries</h2><p>K53 Fast is an independent study tool. For bookings, licence applications, fees or official test rules, contact the relevant Driving Licence Testing Centre or provincial licensing authority.</p>
  </div></article></main><Footer/></>;
}
