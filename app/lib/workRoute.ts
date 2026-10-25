import type { Metadata } from "next";
import { allProjects, findProject } from "../data";
import { translations } from "../i18n/translations";

export type WorkParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: WorkParams): Promise<Metadata> {
  const found = findProject((await params).slug);
  if (!found) return {};
  const text = translations.en.work.items[found.project.slug];
  return { title: found.project.title, description: text.tagline };
}
