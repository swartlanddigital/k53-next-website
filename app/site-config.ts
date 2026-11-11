export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://k53next.co.za").replace(/\/$/, "");
export const APP_URL = "https://app.k53next.co.za";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.base69e9f3638e3e914a5f9614b0.app";
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const QUESTION_COUNT = "1,600+";
export const SOCIAL_IMAGE = "/social/k53-next-android-iphone.jpg";
export const ROOT_TITLE = "K53 Next | K53 Practice for Android and iPhone";
export const ROOT_DESCRIPTION = "Prepare for your South African learner’s licence with road rules, signs and mock tests. Get K53 Next on Android or install the iPhone web app.";
export const appSchemas = [
  { "@type": "MobileApplication", "@id": `${SITE_URL}/#android-app`, name: "K53 Next", applicationCategory: "EducationalApplication", operatingSystem: "Android", url: PLAY_STORE_URL, downloadUrl: PLAY_STORE_URL, installUrl: PLAY_STORE_URL, image: `${SITE_URL}/k53-next-logo-256.webp`, inLanguage: "en-ZA", description: "Independent South African K53 learner’s licence practice on Android.", offers: { "@type": "Offer", price: "0", priceCurrency: "ZAR", url: PLAY_STORE_URL }, publisher: { "@id": `${SITE_URL}/#organization` } },
  { "@type": "WebApplication", "@id": `${SITE_URL}/#web-app`, name: "K53 Next Web App", applicationCategory: "EducationalApplication", operatingSystem: "iOS, Android, Windows, macOS", browserRequirements: "Requires JavaScript and a modern browser. iPhone notifications require a Home Screen installation on iOS 16.4 or later.", url: APP_URL, installUrl: APP_URL, image: `${SITE_URL}/k53-next-logo-256.webp`, inLanguage: "en-ZA", description: "Installable K53 practice for iPhone, with topic practice, mock tests and optional study notifications.", offers: { "@type": "Offer", price: "0", priceCurrency: "ZAR", url: APP_URL }, publisher: { "@id": `${SITE_URL}/#organization` } },
];
