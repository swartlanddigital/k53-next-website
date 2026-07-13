import type { Metadata } from "next";
import { Footer, Header, PageHero } from "../components";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the K53 Next terms of service and educational disclaimer.",
  alternates: { canonical: "/terms/" },
};

export default function Page() {
  return <><Header/><main id="main"><PageHero eyebrow="USE IT WELL" title="Clear terms. No surprise turns." lede="The rules for using the K53 Next app, website and study resources."/><article className="content-page"><div className="shell narrow prose">
    <span className="legal-date">Effective 13 July 2026</span>
    <h2>Agreement</h2><p>These Terms of Service apply to the K53 Next Android application, web application and marketing website. By creating an account or using K53 Next, you agree to these terms and our Privacy Policy. If you do not agree, do not use the service.</p>
    <h2>Educational purpose and independent status</h2><p>K53 Next is an independent educational study tool. It is not affiliated with, endorsed by or operated by the South African government, a Driving Licence Testing Centre or any licensing authority. K53 Next does not issue licences, accept test bookings or act on behalf of a licensing authority.</p>
    <h2>No pass guarantee</h2><p>Practice results, readiness indicators and study suggestions do not guarantee that you will pass an official learner’s licence test. Laws, test procedures and official requirements can change. You remain responsible for confirming current information with the relevant authority and for your own test preparation and conduct.</p>
    <h2>Your account</h2><p>You must provide accurate information, keep your sign-in details secure and notify us if you believe your account has been used without permission. You are responsible for activity performed through your account. One person may not impersonate another or create accounts to disrupt or misuse the service.</p>
    <h2>Acceptable use</h2><p>You may use K53 Next for lawful personal study. You may not:</p><ul><li>Disrupt, overload, damage or bypass the service or its security.</li><li>Use automated tools to scrape, copy or extract the question bank.</li><li>Reproduce, sell, sublicense or commercially distribute K53 Next content without written permission.</li><li>Upload malicious code or use the service for unlawful activity.</li><li>Reverse engineer the service except where applicable law expressly permits it.</li></ul>
    <h2>Content and intellectual property</h2><p>K53 Next and its original software, branding, layouts, question-bank compilation, explanations and other content are protected by applicable intellectual-property laws. These terms give you a limited, personal, non-exclusive and revocable right to use the service; they do not transfer ownership to you.</p>
    <h2>Availability and changes</h2><p>We may maintain, update, add to, suspend or discontinue parts of K53 Next. We work to keep the service useful and available but do not promise uninterrupted or error-free operation. We may correct content or reset features where reasonably necessary for security, maintenance or data integrity.</p>
    <h2>Suspension and termination</h2><p>You may stop using K53 Next and request account deletion at any time. We may restrict or terminate access where you materially breach these terms, create security or legal risk, or misuse the service. Provisions that by their nature should continue after termination will survive.</p>
    <h2>Third-party services</h2><p>K53 Next relies on third-party hosting, authentication, app-store and infrastructure services. Those services may have their own terms. We are not responsible for third-party services outside our control.</p>
    <h2>Disclaimer and limitation of liability</h2><p>K53 Next is provided on an “as is” and “as available” basis to the extent permitted by law. We do not warrant that every question, explanation or readiness estimate will always be complete, current or free from error. To the extent permitted by law, K53 Next will not be liable for indirect, incidental or consequential loss arising from use of, inability to use or reliance on the service. Nothing in these terms excludes rights or liability that cannot legally be excluded, including rights under applicable consumer law.</p>
    <h2>Governing law</h2><p>These terms are governed by the laws of the Republic of South Africa. Courts with jurisdiction in South Africa may hear disputes, subject to any mandatory consumer-protection process that applies.</p>
    <h2>Contact and changes</h2><p>Questions about these terms can be sent to <a href="mailto:info@swartlanddigital.co.za">info@swartlanddigital.co.za</a>. We may update these terms when the service or law changes. The effective date above will show the latest published version.</p>
  </div></article></main><Footer/></>;
}
