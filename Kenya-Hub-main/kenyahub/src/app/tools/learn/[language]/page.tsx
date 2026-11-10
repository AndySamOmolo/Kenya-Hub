import { notFound } from "next/navigation";
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
  if (!course || !course.ready) {
    return {
      title: "Language Course Not Found",
      robots: { index: false, follow: true },
    };
  }

  const canonicalUrl = `https://kenyahub.me/tools/learn/${course.config.id}/`;
  const displayLang = course.config.name.toLowerCase().includes(course.config.nativeName.toLowerCase())
    ? course.config.name
    : `${course.config.name} (${course.config.nativeName})`;
  const title = `Learn ${displayLang} Online — Free Interactive Kenyan Language Course, Phrases & Dictionary`;

  return {
    title,
    description: `${course.config.description} Practice ${displayLang} vocabulary, grammar notes, common phrases, and cultural proverbs free on KenyaHub.`,
    keywords: [
      `learn ${course.config.name} online`,
      `${course.config.nativeName} lessons`,
      `${course.config.name} vocabulary and grammar`,
      `${course.config.name} to English dictionary`,
      `common ${course.config.name} phrases`,
      "learn Kenyan languages online",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${title} | KenyaHub`,
      description: course.config.description,
      type: "website",
      locale: "en_KE",
      siteName: "KenyaHub",
      url: canonicalUrl,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${title} — KenyaHub`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | KenyaHub`,
      description: course.config.description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-KE": canonicalUrl,
        en: canonicalUrl,
        "x-default": canonicalUrl,
      },
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

  if (!course || !course.ready) {
    notFound();
  }

  const displayLang = course.config.name.toLowerCase().includes(course.config.nativeName.toLowerCase())
    ? course.config.name
    : `${course.config.name} (${course.config.nativeName})`;
  const canonicalUrl = `https://kenyahub.me/tools/learn/${course.config.id}/`;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `Learn ${displayLang}`,
    description: course.config.description,
    url: canonicalUrl,
    provider: {
      "@type": "Organization",
      name: "KenyaHub",
      sameAs: "https://kenyahub.me",
    },
    isAccessibleForFree: true,
    inLanguage: "en-KE",
    educationalLevel: "Beginner to Intermediate",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT10H",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <LanguageClientPage languageId={language} />
    </>
  );
}
