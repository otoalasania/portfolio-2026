import { SITE_URL, profile } from "./data";
import { translations } from "./i18n/translations";
import { renderOgCard } from "./lib/ogCard";
import { siteTitle } from "./lib/seo";

export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const { profile: copy, footer } = translations.en;
  return renderOgCard({
    label: "Portfolio",
    title: profile.name,
    subtitle: `${copy.role} at ${profile.company.name}`,
    footer: [new URL(SITE_URL).host, footer.location],
    badge: true,
  });
}
