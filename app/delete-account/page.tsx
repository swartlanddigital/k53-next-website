import { siteMetadata } from "../seo";
import type { Metadata } from "next";
import { Footer, Header, PageHero } from "../components";

export const metadata: Metadata = siteMetadata({
  title: "Delete Your Account",
  description: "Instructions for deleting a K53 Next account and its associated data.",
  alternates: { canonical: "/delete-account/" },
});

export default function Page() {
  return <><Header/><main id="main"><PageHero eyebrow="YOUR DATA, YOUR CHOICE" title="Delete your K53 Next account." lede="You can remove your account and associated study data from inside the app or by contacting support."/><article className="content-page"><div className="shell narrow prose">
    <span className="legal-date">Updated 11 November 2026</span>
    <h2>Delete your account in the app</h2><ol><li>Sign in to the native K53 Next Android app.</li><li>Open Settings, then Account.</li><li>Select Delete account. If requested, sign in again to verify it is you.</li><li>Read the confirmation and confirm permanent deletion.</li></ol>
    <p>The current Android and installable web apps use the same Firebase account. Deleting that account affects both. If you only use the iPhone web app, use the verified email request below. A previous Base44 web account remains separate and has its own deletion controls.</p>
    <h2>Request deletion by email</h2><p>If you cannot sign in, email <a href="mailto:info@swartlanddigital.co.za?subject=K53%20Next%20account%20deletion">info@swartlanddigital.co.za</a> from the address connected to your K53 Next account. Use the subject “K53 Next account deletion”. We may ask you to verify account ownership before processing the request.</p>
    <h2>What is deleted</h2><p>Deletion removes or de-identifies the personal information and study data associated with your account, including your profile, quiz history, progress, mistakes, bookmarks and preferences.</p>
    <p>For the native Android app, deletion also removes the Firebase sign-in account, cloud device-progress records, Premium entitlement and the app&apos;s purchase-verification records. It does not remove Google Play&apos;s independent transaction records or automatically refund a purchase. A temporary deletion-completion record is marked to expire after 24 hours; automatic cleanup may complete later. Separate, previous Base44 web accounts are not deleted by the Android action. To stop this device’s optional web notifications, use Turn off notifications from the bell; device subscriptions are separate from Firebase accounts.</p>
    <h2>What may be retained</h2><p>Limited records may be retained where reasonably necessary for fraud prevention, security, dispute resolution or legal compliance. De-identified information that can no longer identify you may be retained. Encrypted backups may take a limited period to expire.</p>
    <h2>Timing</h2><p>We aim to complete verified deletion requests without undue delay and within the time required by applicable law. Account deletion is permanent and deleted study progress cannot be restored.</p>
  </div></article></main><Footer/></>;
}
