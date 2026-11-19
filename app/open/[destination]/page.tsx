import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer, GooglePlayButton, Header } from "../../components";
import { APP_URL } from "../../site-config";

const destinations = [
  {
    slug: "android",
    title: "Open K53 Next",
    description: "Practise for your South African learner’s licence on Android or in your browser.",
    webUrl: APP_URL,
    webLabel: "Open the web app",
  },
  {
    slug: "practice",
    title: "K53 practice",
    description: "Study road rules, signs and vehicle controls at your own pace.",
    webUrl: "/k53-practice-test/",
    webLabel: "Try practice in your browser",
  },
  {
    slug: "road-signs",
    title: "Study K53 road signs",
    description: "Learn how to recognise South African road signs and what each one means.",
    webUrl: "/k53-road-signs/",
    webLabel: "Read the road signs guide",
  },
  {
    slug: "mock-test",
    title: "K53 mock tests",
    description: "Choose a timed practice test and review the topics you need to study.",
    webUrl: "/k53-practice-test/",
    webLabel: "Open the practice test guide",
  },
];

type Props = { params: Promise<{ destination: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ destination: slug }));
}

async function readDestination(params: Props["params"]) {
  const { destination } = await params;
  const result = destinations.find(({ slug }) => slug === destination);
  if (!result) notFound();
  return result;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, title, description } = await readDestination(params);
  return { title, description, alternates: { canonical: `/open/${slug}/` }, robots: { index: false, follow: true } };
}

export default async function AppLinkFallbackPage({ params }: Props) {
  const { title, description, webUrl, webLabel } = await readDestination(params);
  return (
    <>
      <Header />
      <main id="main">
        <section className="inner-hero">
          <div className="shell narrow">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="section-actions">
              <GooglePlayButton>Install on Google Play</GooglePlayButton>
              <Link className="button" href={webUrl}>{webLabel}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
