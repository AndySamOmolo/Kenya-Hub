import { notFound } from "next/navigation";
import LanguageClientPage from "@/components/learn/LanguageClientPage";
import { getCourse, PUBLISHED_COURSES } from "@/data/courses/registry";
import { DICT_META_MAP } from "@/data/language-sources";
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
  const dictMeta = DICT_META_MAP[course.config.id];
  const courseWords = course.units.reduce(
    (sum, unit) => sum + unit.skills.reduce((s, sk) => s + sk.words.length, 0),
    0
  );
  const totalWords = Math.max(courseWords, dictMeta?.totalEntries || 0);
  const hasDictUnit = Boolean(dictMeta && dictMeta.categories.some((c) => c.count > 0));
  const totalUnits = course.units.length + (hasDictUnit ? 1 : 0);
  const description = `${course.config.description} Explore ${totalUnits} units and ${totalWords.toLocaleString("en-KE")}+ ${displayLang} vocabulary entries, grammar notes, common phrases, flashcards, and cultural proverbs free on KenyaHub.`;

  return {
    title,
    description,
    keywords: [
      `learn ${course.config.name} online`,
      `${course.config.name} language course`,
      `${course.config.nativeName} lessons`,
      `${course.config.name} vocabulary and grammar`,
      `${course.config.name} to English dictionary`,
      `common ${course.config.name} phrases`,
      `${course.config.name} proverbs and idioms`,
      `${course.config.name} flashcards`,
      "learn Kenyan languages online",
      ...course.config.counties.slice(0, 3).map((county) => `${course.config.name} ${county} Kenya`),
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
      description,
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
      description,
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
    about: {
      "@type": "Language",
      name: course.config.name,
      alternateName: course.config.nativeName,
    },
    teaches: `${displayLang} vocabulary, grammar, everyday phrases, and cultural proverbs`,
    ...(course.config.counties.length > 0
      ? {
          spatialCoverage: {
            "@type": "Place",
            name: `${course.config.counties.join(", ")}, Kenya`,
          },
        }
      : {}),
    isAccessibleForFree: true,
    inLanguage: "en-KE",
    educationalLevel: "Beginner to Intermediate",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT10H",
    },
    syllabusSections: course.units.map((unit) => ({
      "@type": "Syllabus",
      name: unit.title,
      description: unit.description,
    })),
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
