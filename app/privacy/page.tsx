import type { Metadata } from "next";
import { Footer, Header, PageHero } from "../components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy for the K53 Next app and website.",
  alternates: { canonical: "/privacy/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="THE FINE PRINT"
          title="Privacy, in plain language."
          lede="How K53 Next handles account information, study progress and website data."
        />
        <article className="content-page">
          <div className="shell narrow prose">
            <span className="legal-date">Effective 13 July 2026</span>

            <h2>About this policy</h2>
            <p>
              This policy applies to the K53 Next Android application, web
              application and marketing website (together, “K53 Next”). K53
              Fast is an independent educational service and is not affiliated
              with, endorsed by or operated by the South African government or
              any driving licence testing authority.
            </p>

            <h2>Information we collect</h2>
            <p>Depending on how you use K53 Next, we may process:</p>
            <ul>
              <li>
                <strong>Account information:</strong> your name, email address,
                account identifier and authentication information. If you use
                Google sign-in, Google supplies the basic account details needed
                to sign you in; K53 Next does not receive your Google password.
              </li>
              <li>
                <strong>Study and app activity:</strong> selected licence or
                vehicle preferences, quiz answers, results, progress, mistakes,
                bookmarks, streaks and feature interactions.
              </li>
              <li>
                <strong>Technical information:</strong> device and browser type,
                operating system, IP address, app version, timestamps, crash
                information, diagnostics and security logs.
              </li>
              <li>
                <strong>Information you choose to provide:</strong> messages or
                other details included in a support or privacy request.
              </li>
            </ul>

            <h2>How we use information</h2>
            <ul>
              <li>To create and secure your account and keep you signed in.</li>
              <li>
                To provide quizzes, mock tests, bookmarks and progress tracking
                across the Android and web apps.
              </li>
              <li>To operate, maintain, troubleshoot and improve K53 Next.</li>
              <li>To detect misuse, fraud and security threats.</li>
              <li>To respond to support, privacy and legal requests.</li>
              <li>To comply with applicable law.</li>
            </ul>

            <h2>Service providers and sharing</h2>
            <p>
              We do not sell your personal information. We use trusted service
              providers to host and operate K53 Next, authenticate users, store
              data and diagnose errors. These may include Base44/Wix and Google
              or Firebase services. They may process information only as needed
              to provide their services, protect the platform or comply with
              law. We may also disclose information where legally required or
              where necessary to protect users, K53 Next or the public.
            </p>

            <h2>Storage, security and international processing</h2>
            <p>
              Information is protected in transit using encryption and is
              subject to technical and organisational safeguards. No online
              system can guarantee absolute security. Our service providers may
              process information outside South Africa; where this occurs, we
              require appropriate protections consistent with applicable law.
            </p>

            <h2>Retention and account deletion</h2>
            <p>
              We keep account and study information while your account is active
              and for as long as reasonably needed to provide the service,
              resolve disputes, maintain security and meet legal obligations.
              You can request or start account deletion from the profile or
              settings area of the app. When an account is deleted, associated
              personal information is deleted or de-identified unless retention
              is required for security, legal or legitimate operational reasons.
              Backups may take a limited period to expire.
            </p>

            <h2>Your rights and choices</h2>
            <p>
              Subject to applicable law, including South Africa’s Protection of
              Personal Information Act (POPIA), you may ask to access, correct
              or delete your personal information, object to or restrict certain
              processing, or withdraw consent where processing relies on it. You
              may also complain to the Information Regulator of South Africa.
            </p>

            <h2>Children</h2>
            <p>
              K53 Next is intended for learner’s licence candidates aged 16 and
              older. It is not directed to children under 13, and we do not
              knowingly collect personal information from children under 13. If
              you believe a child has provided information contrary to this
              policy, please contact us so that we can investigate and delete it
              where appropriate.
            </p>

            <h2>Marketing website and external links</h2>
            <p>
              The marketing website works without an account. Its hosting and
              security systems may still process standard technical information
              such as IP address, browser type, requested pages and timestamps.
              Links to Google Play, Google sign-in or other third-party services
              are governed by those services’ own privacy terms.
            </p>

            <h2>Contact us</h2>
            <p>
              For privacy questions or requests, email{" "}
              <a href="mailto:info@swartlanddigital.co.za">
                info@swartlanddigital.co.za
              </a>
              .
            </p>

            <h2>Changes</h2>
            <p>
              We may update this policy when K53 Next, our service providers or
              legal requirements change. The effective date above will be
              updated when material changes are published.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
