import type { Metadata } from "next";
import KslSignStudio from "@/components/learn/KslSignStudio";
import { OPEN_CORPUS_INDEX } from "@/lib/open-corpus";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kenyahub.me/tools/learn/ksl/",
    languages: {
      "en-KE": "https://kenyahub.me/tools/learn/ksl/",
      en: "https://kenyahub.me/tools/learn/ksl/",
      "x-default": "https://kenyahub.me/tools/learn/ksl/",
    },
  },
  openGraph: {
    title: "Kenyan Sign Language (KSL) Video Course & Dictionary | KenyaHub",
    description:
      "Learn Kenyan Sign Language (KSL) free with 2,340+ real sign videos, 5 structured units, interactive video quizzes, A–Z fingerspelling, and Deaf culture grammar guides.",
    url: "https://kenyahub.me/tools/learn/ksl/",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    images: [{ url: "https://kenyahub.me/og-image.png", width: 1200, height: 630, alt: "Kenyan Sign Language Video Course on KenyaHub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenyan Sign Language (KSL) Video Course & Dictionary",
    description:
      "Free KSL video course with 2,340+ real sign videos, 5 units, quizzes, fingerspelling, and grammar notes.",
    images: ["https://kenyahub.me/og-image.png"],
  },
  title: "Learn Kenyan Sign Language (KSL) — Interactive Sign Studio",
  description:
    "Interactive Kenyan Sign Language (KSL) starter course with skeletal sign playback, visual sign-recognition quiz, fingerspelling A–Z, and Maseno University sign language video library.",
};

export default function KslCoursePage() {
  const kslData = OPEN_CORPUS_INDEX.ksl;
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary font-[family-name:var(--font-outfit)]">
          Kenyan Sign Language (KSL) Interactive Starter Course
        </h1>
        <p className="text-sm text-text-secondary max-w-3xl leading-relaxed">
          Learn essential Kenyan Sign Language (KSL) signs with
          an articulated skeletal sign viewer, slow-motion controls, visual recognition quizzes, manual fingerspelling
          from A to Z, and live motion-capture poses extracted from Maseno University&apos;s open-access{" "}
          <a
            href="https://zenodo.org/records/14338329"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Maseno University Sign Library
          </a>
          .
        </p>
      </header>

      <KslSignStudio
        initialVideos={kslData?.videos ?? []}
        storybooks={kslData?.storybooks ?? []}
      />
    </div>
  );
}
