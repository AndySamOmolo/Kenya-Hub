import LanguageClientPage from "@/components/learn/LanguageClientPage";
import { getCourse, PUBLISHED_COURSES } from "@/data/courses/registry";
import type { Metadata } from "next";

export function generateStaticParams() {
  return PUBLISHED_COURSES.map(({ config }) => ({ language: config.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: string }>;
}): Promise<Metadata> {
  const { language } = await params;
  const course = getCourse(language);
  if (!course) return { title: "Language course not found | Kenya Hub" };

  return {
    title: `Learn ${course.config.name} | Kenya Hub`,
    description: course.config.description,
  };
}

export default async function LanguagePage({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language } = await params;
  return <LanguageClientPage languageId={language} />;
}
