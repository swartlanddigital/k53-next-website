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
            <span className="legal-date">Effective 21 September 2026</span>

            <h2>About this policy</h2>
            <p>
              This policy applies to the K53 Next Android application, web
              application and marketing website (together, “K53 Next”). K53
              Next is an independent educational service and is not affiliated
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
                in the version of K53 Next you use. The native Android app and
                the Base44 web app use separate account and payment systems.
                Your account, study progress and Premium access are not
                automatically shared between them.
              </li>
              <li>To operate, maintain, troubleshoot and improve K53 Next.</li>
              <li>To detect misuse, fraud and security threats.</li>
              <li>To respond to support, privacy and legal requests.</li>
              <li>To comply with applicable law.</li>
            </ul>

            <h2>Native Android accounts and progress</h2>
            <p>
              The native Android app uses Google Firebase for sign-in, account
              management, cloud study progress and Premium access verification.
              Google sign-in supplies your basic account details; K53 Next does
              not receive your Google password. You can also use email and
              password sign-in. Guest study progress is saved on your device.
              Signing in enables progress to be stored for your account and
              synchronised between native Android devices.
            </p>

            <h2>Android Premium payments</h2>
            <p>
              Google Play processes Premium payments made in the native Android
              app. K53 Next receives purchase identifiers and purchase status
              information needed to verify your purchase, activate or restore
              Premium, acknowledge successful purchases, and respond to
              cancellations, refunds and reversals. We associate the purchase
              with the K53 Next account used at checkout and send Google Play
              an obscured account identifier for verification. Our app and
              Firebase payment server do not receive your full payment-card
              number or card security code.
            </p>
            <p>
              The web app continues to use its existing Base44 and Yoco payment
              system. A web purchase does not automatically unlock native
              Android Premium, and an Android purchase does not automatically
              unlock web Premium.
            </p>

            <h2>Advertising in the native Android app</h2>
            <p>
              The free native Android app uses Google AdMob. When the
              advertising SDK runs, Google may collect and share device or
              other identifiers, including advertising and app-set identifiers,
              IP addresses from which approximate location can be inferred,
              app and advertising interactions, and diagnostic information.
              This information supports advertising, performance measurement,
              analytics, and fraud prevention. The app does not request precise
              device location for advertising.
            </p>
            <p>
              Consent and privacy choices are presented where applicable. You
              can review available advertising privacy choices in the app and
              use Android&apos;s advertising-ID controls. Premium removes adverts
              from the app. Removing adverts does not delete information
              previously processed by Google.
            </p>
            <p>
              For further information, see Google&apos;s{" "}
              <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
              and <a href="https://policies.google.com/technologies/ads">advertising information</a>.
            </p>

            <h2>Service providers and sharing</h2>
            <p>
              We do not sell your personal information. The native Android app
              uses Google Firebase for authentication, cloud storage, security
              and purchase verification, Google Play for payments, and Google
              AdMob for advertising as described above. The web app uses its
              existing Base44/Wix and Yoco services. Providers process
              information according to their roles and applicable terms and
              privacy policies. Advertising data may be shared with Google and
              its advertising partners. We may also disclose information where
              legally required or where necessary to protect users, K53 Next
              or the public.
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
            <p>
              Deleting a native Android account removes its Firebase account,
              cloud study data, Premium entitlement and our associated
              purchase-verification records. A temporary deletion-completion
              record supports reliable cleanup; it is marked to expire after
              24 hours, with removal occurring through the provider&apos;s
              automatic cleanup process. Google Play retains its own
              transaction records under its policies. Account deletion does
              not itself request or issue a refund. Native Android account
              deletion does not delete a separate web account. Guest data can
              be removed through Android&apos;s app-storage controls or by
              uninstalling the app.
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
            <p>
              The marketing website uses Google AdSense to display advertising.
              Google and its advertising partners may use cookies or similar
              technologies to show ads, measure their performance and prevent
              fraud. Depending on your location and privacy choices, ads may be
              personalised or non-personalised. You can manage available choices
              through any consent notice shown on the website and through your
              browser settings. See Google&apos;s{" "}
              <a href="https://policies.google.com/technologies/ads">advertising information</a>{" "}
              for more details.
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
