import { notFound } from "next/navigation";
import { SITE_URL, findProject, pageTitle, profile } from "../../data";
import { translations } from "../../i18n/translations";
import { renderOgCard } from "../../lib/ogCard";
import type { WorkParams } from "../../lib/workRoute";

export { generateStaticParams } from "../../lib/workRoute";

export const alt = pageTitle("Project");
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProjectOpenGraphImage({ params }: WorkParams) {
  const found = findProject((await params).slug);
  if (!found) notFound();
  const { project } = found;
  return renderOgCard({
    label: `Project · ${project.period}`,
    title: project.title,
    subtitle: translations.en.work.items[project.slug].tagline,
    footer: [profile.name, new URL(SITE_URL).host],
  });
}
