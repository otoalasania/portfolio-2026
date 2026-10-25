import type { Metadata } from "next";
import { SITE_URL, pageTitle, profile } from "../data";
import { translations } from "../i18n/translations";

const { role, bioShort } = translations.en.profile;

export const siteTitle = `${profile.name} — ${role}`;
const siteDescription = bioShort;

const openGraphBase = {
  type: "website" as const,
  siteName: profile.name,
  locale: "en_US",
  alternateLocale: ["es_ES"],
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: siteTitle, template: pageTitle("%s") },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: { ...openGraphBase, url: "/", title: siteTitle, description: siteDescription },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription },
};

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const fullTitle = pageTitle(title);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...openGraphBase, url: path, title: fullTitle, description },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
