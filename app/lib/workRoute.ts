import type { Metadata } from "next";
import { allProjects, findProject } from "../data";
import { translations } from "../i18n/translations";

// Shared by app/work/[slug] (full page) and app/@modal/(.)work/[slug] (intercepted sheet)

export type WorkParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

// Server-rendered metadata can't see the client-side locale, so it uses English
export async function generateMetadata({ params }: WorkParams): Promise<Metadata> {
  const found = findProject((await params).slug);
  if (!found) return {};
  const text = translations.en.work.items[found.project.slug];
  return { title: text.title, description: text.summary };
}
