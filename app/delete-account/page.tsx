import type { Metadata } from "next";
import { Footer, Header, PageHero } from "../components";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "Instructions for deleting a K53 Fast account and its associated data.",
  alternates: { canonical: "/delete-account/" },
};

export default function Page() {
  return <><Header/><main id="main"><PageHero eyebrow="YOUR DATA, YOUR CHOICE" title="Delete your K53 Fast account." lede="You can remove your account and associated study data from inside the app or by contacting support."/><article className="content-page"><div className="shell narrow prose">
    <span className="legal-date">Updated 13 July 2026</span>
    <h2>Delete your account in the app</h2><ol><li>Sign in to K53 Fast.</li><li>Open your Profile or Settings.</li><li>Select the account-deletion option.</li><li>Read the confirmation and confirm permanent deletion.</li></ol>
    <h2>Request deletion by email</h2><p>If you cannot sign in, email <a href="mailto:info@swartlanddigital.co.za?subject=K53%20Fast%20account%20deletion">info@swartlanddigital.co.za</a> from the address connected to your K53 Fast account. Use the subject “K53 Fast account deletion”. We may ask you to verify account ownership before processing the request.</p>
    <h2>What is deleted</h2><p>Deletion removes or de-identifies the personal information and study data associated with your account, including your profile, quiz history, progress, mistakes, bookmarks and preferences.</p>
    <h2>What may be retained</h2><p>Limited records may be retained where reasonably necessary for fraud prevention, security, dispute resolution or legal compliance. De-identified information that can no longer identify you may be retained. Encrypted backups may take a limited period to expire.</p>
    <h2>Timing</h2><p>We aim to complete verified deletion requests without undue delay and within the time required by applicable law. Account deletion is permanent and deleted study progress cannot be restored.</p>
  </div></article></main><Footer/></>;
}
