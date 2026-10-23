import LanguageClientPage from "@/components/learn/LanguageClientPage";
import { getCourse, COURSE_REGISTRY } from "@/data/courses/registry";
import type { Metadata } from "next";

export function generateStaticParams() {
  return Object.values(COURSE_REGISTRY).map(({ config }) => ({ language: config.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: string }>;
}): Promise<Metadata> {
  const { language } = await params;
  const course = getCourse(language);
  if (!course) {
    return {
      title: "Language Course Not Found | KenyaHub",
      robots: { index: false, follow: true },
    };
  }

  const canonicalUrl = `https://kenyahub.me/tools/learn/${course.config.id}/`;
  const title = `Learn ${course.config.name} (${course.config.nativeName}) — Free Interactive Course`;

  return {
    title,
    description: course.config.description,
    keywords: [
      `learn ${course.config.name}`,
      `${course.config.nativeName} lessons`,
      `${course.config.name} vocabulary and grammar`,
      "learn Kenyan languages online",
    ],
    openGraph: {
      title: `${title} | KenyaHub`,
      description: course.config.description,
      type: "website",
      locale: "en_KE",
      siteName: "KenyaHub",
      url: canonicalUrl,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | KenyaHub`,
      description: course.config.description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function LanguagePage({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language } = await params;
  const course = getCourse(language);

  const courseSchema = course
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        name: `Learn ${course.config.name} (${course.config.nativeName})`,
        description: course.config.description,
        provider: {
          "@type": "Organization",
          name: "KenyaHub",
          sameAs: "https://kenyahub.me",
        },
        isAccessibleForFree: true,
        inLanguage: "en-KE",
      }
    : null;

  return (
    <>
      {courseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      )}
      <LanguageClientPage languageId={language} />
    </>
  );
}
