import type { Metadata } from "next";
import { ROOT_DESCRIPTION, ROOT_TITLE, SITE_URL, SOCIAL_IMAGE } from "./site-config";
export function siteMetadata(value: Metadata): Metadata {
  const canonical = typeof value.alternates?.canonical === "string" ? value.alternates.canonical : "/";
  const url = new URL(canonical, `${SITE_URL}/`);
  if (!url.pathname.endsWith("/") && !/\.[a-z0-9]+$/i.test(url.pathname)) url.pathname += "/";
  url.search = ""; url.hash = "";
  const label = typeof value.title === "string" ? value.title : value.title && "absolute" in value.title ? value.title.absolute : ROOT_TITLE;
  const title = label.includes("K53 Next") ? label : `${label} | K53 Next`;
  const description = value.description || ROOT_DESCRIPTION;
  const image = { url: SOCIAL_IMAGE, width: 1200, height: 630, alt: "K53 Next learner’s licence practice on Android and the iPhone web app" };
  const pageTitle = typeof value.title === "string" || (value.title && "absolute" in value.title) ? { absolute: title } : value.title;
  return { ...value, title: pageTitle, alternates: { ...value.alternates, canonical: url.href }, openGraph: { type: "website", locale: "en_ZA", siteName: "K53 Next", ...value.openGraph, title, description, url: url.href, images: [image] }, twitter: { card: "summary_large_image", ...value.twitter, title, description, images: [SOCIAL_IMAGE] } };
}
