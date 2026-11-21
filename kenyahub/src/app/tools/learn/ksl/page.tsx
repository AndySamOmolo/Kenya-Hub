import type { Metadata } from "next";
import KslSignStudio from "@/components/learn/KslSignStudio";

export const metadata: Metadata = {
  title: "Learn Kenyan Sign Language (KSL · xki) — Interactive Sign Studio | KenyaHub",
  description:
    "Interactive Kenyan Sign Language (KSL) starter course with skeletal sign playback, visual sign-recognition quiz, fingerspelling A–Z, and Maseno University CC-BY-4.0 pose integration.",
};

export default function KslCoursePage() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary font-[family-name:var(--font-outfit)]">
          Kenyan Sign Language (KSL) Interactive Starter Course
        </h1>
        <p className="text-sm text-text-secondary max-w-3xl leading-relaxed">
          Learn essential Kenyan Sign Language (ISO 639-3: <code className="font-mono text-gold">xki</code>) signs with
          an articulated skeletal sign viewer, slow-motion controls, visual recognition quizzes, manual fingerspelling
          from A to Z, and live motion-capture poses extracted from Maseno University&apos;s open-access{" "}
          <a
            href="https://zenodo.org/records/14338329"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            KSL Pose Dataset (CC-BY-4.0)
          </a>
          .
        </p>
      </header>

      <KslSignStudio />
    </main>
  );
}
