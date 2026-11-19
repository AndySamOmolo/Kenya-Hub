/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useCallback, useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  PartyPopper,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Flame,
  Lightbulb,
  RotateCcw,
  Layers,
  Heart,
  Shield,
  Volume2,
} from "lucide-react";
import ToolShell, { type RichGuideEntry } from "@/components/tools/ToolShell";
import ToolAccessTracker from "@/components/tools/ToolAccessTracker";
import { playLanguageAudio, hasVerifiedAudio } from "@/lib/language-audio";
import SkillTree from "@/components/learn/SkillTree";
import CustomSelect from "@/components/ui/CustomSelect";
import SearchInput from "@/components/ui/SearchInput";
import type {
  CourseSkill,
  CourseUnit,
  WordPair,
  UserProgress,
  LessonResult,
} from "@/data/courses/types";
import { ACHIEVEMENTS } from "@/data/courses/types";
import {
  createDefaultProgress,
  loadProgress,
  saveProgress,
  applyLessonResult,
  awardActivityXp,
  getDueReviews,
} from "@/lib/learn-progress";
import { TOOLS } from "@/lib/tools-registry";
import type { Tool } from "@/lib/types";
import { getCourse, PUBLISHED_COURSES } from "@/data/courses/registry";
import { getSourcesForLanguage, DICT_META_MAP, type Dictionary } from "@/data/language-sources";
import { loadDictionary, DICT_CACHE } from "@/lib/dictionary-loader";
import { playCorrectSfx, playBadgeUnlockSfx } from "@/lib/game-sfx";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LessonPlayer = dynamic(() => import("@/components/learn/LessonPlayer"), {
  loading: () => (
    <div className="py-12 text-center text-sm text-text-muted animate-pulse">
      Loading interactive lesson...
    </div>
  ),
});

const GamesHub = dynamic(() => import("@/components/learn/GamesHub"), {
  loading: () => (
    <div className="py-12 text-center text-sm text-text-muted animate-pulse">
      Loading language games...
    </div>
  ),
});

const GrammarView = dynamic(() => import("@/components/learn/GrammarView"), {
  loading: () => (
    <div className="py-12 text-center text-sm text-text-muted animate-pulse">
      Loading grammar reference...
    </div>
  ),
});

const ProverbsView = dynamic(() => import("@/components/learn/ProverbsView"), {
  loading: () => (
    <div className="py-12 text-center text-sm text-text-muted animate-pulse">
      Loading proverbs &amp; oral wisdom...
    </div>
  ),
});

const LEARN_TOOL = TOOLS.find((t) => t.slug === "learn")!;
const MODULES_PAGE_SIZE = 8;

type PageView = "lessons" | "flashcards" | "modules" | "games" | "playing" | "grammar" | "proverbs";

function resetLanguageProgress(languageId: string): UserProgress {
  const fresh = createDefaultProgress(languageId);
  saveProgress(fresh);
  return fresh;
}

function formatLanguageHeader(name: string, nativeName: string): string {
  const cleanName = name.trim();
  const cleanNative = (nativeName || "").trim();
  if (!cleanNative || cleanName.toLowerCase().includes(cleanNative.toLowerCase())) {
    return cleanName;
  }
  return `${cleanName} (${cleanNative})`;
}

export default function LanguageClientPage({ languageId }: { languageId: string }) {
  const course = getCourse(languageId);
  const router = useRouter();

  const [progress, setProgress] = useState<UserProgress>(() =>
    createDefaultProgress(languageId)
  );
  const [view, setView] = useState<PageView>("lessons");
  const [moduleSearch, setModuleSearch] = useState("");
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<string>("all");
  const [modulesPage, setModulesPage] = useState(1);

  // Interactive 3D Flashcard Deck state
  const [flashcardSkillId, setFlashcardSkillId] = useState<string>("all");
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);
  const [flashcardXpPop, setFlashcardXpPop] = useState<boolean>(false);
  const [fcTouchStartX, setFcTouchStartX] = useState<number | null>(null);
  const [loadedDict, setLoadedDict] = useState<Dictionary | null>(
    () => DICT_CACHE[languageId] || null
  );

  useEffect(() => {
    let active = true;
    if (DICT_CACHE[languageId]) {
      setLoadedDict(DICT_CACHE[languageId]);
    } else {
      loadDictionary(languageId).then((d) => {
        if (active && d) setLoadedDict(d);
      });
    }
    return () => {
      active = false;
    };
  }, [languageId]);

  const [activeLesson, setActiveLesson] = useState<{
    skill: CourseSkill;
    level: number;
    reviewItems: ReturnType<typeof getDueReviews>;
    reviewOnly: boolean;
    nextDictCursor?: number;
  } | null>(null);
  const [showCompletionToast, setShowCompletionToast] = useState<string | null>(
    null
  );

  const checkAndNotifyNewAchievements = useCallback(
    (prevAchievements: string[], nextAchievements: string[]) => {
      const prevSet = new Set(prevAchievements);
      const newlyUnlocked = nextAchievements.filter((id) => !prevSet.has(id));
      if (newlyUnlocked.length > 0) {
        const ach = ACHIEVEMENTS.find((a) => a.id === newlyUnlocked[0]);
        if (ach) {
          playBadgeUnlockSfx();
          setShowCompletionToast(`Unlocked Badge: ${ach.name}! (+${ach.xpReward} XP)`);
          setTimeout(() => setShowCompletionToast(null), 4200);
        }
      }
    },
    []
  );

  const handleUpdateProgress = useCallback(
    (updater: (prev: UserProgress) => UserProgress) => {
      setProgress((prev) => {
        const updated = updater(prev);
        saveProgress(updated);
        checkAndNotifyNewAchievements(prev.achievements, updated.achievements);
        return updated;
      });
    },
    [checkAndNotifyNewAchievements]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prev = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.documentElement.style.scrollBehavior = prev;
      });
    }
  }, [languageId]);

  useEffect(() => {
    if (!course) return;
    const loaded = loadProgress(languageId);
    setProgress(loaded);
  }, [languageId, course]);

  const dictUnit: CourseUnit | null = useMemo(() => {
    if (!loadedDict) return null;
    const courseWordSet = new Set<string>();
    if (course) {
      course.units.forEach((u) =>
        u.skills.forEach((sk) =>
          sk.words.forEach((w) =>
            courseWordSet.add(`${w.target.toLowerCase().trim()}::${w.source.toLowerCase().trim()}`)
          )
        )
      );
    }

    const skills: CourseSkill[] = [];
    for (const cat of loadedDict.categories) {
      if (!cat.entries || cat.entries.length === 0) continue;
      const words: WordPair[] = [];
      for (const e of cat.entries) {
        const t = e.translation.trim();
        const s = e.english.trim();
        if (!t || !s) continue;
        const key = `${t.toLowerCase()}::${s.toLowerCase()}`;
        if (courseWordSet.has(key)) continue;
        words.push({
          target: t,
          source: s,
          pronunciation: e.pronunciation || undefined,
          example: e.context || undefined,
          audioFile: e.audioFile || undefined,
        });
      }
      if (words.length === 0) continue;
      skills.push({
        id: `dict-cat-${cat.id}`,
        title: `Dictionary: ${cat.name}`,
        icon: cat.icon || "📖",
        description: `Complete ${loadedDict.languageName} dictionary entries for ${cat.name.toLowerCase()} (${words.length.toLocaleString()} verified entries).`,
        tips: `Practice and search ${words.length.toLocaleString()} verified ${loadedDict.languageName} dictionary entries in the ${cat.name} category.`,
        words,
        sentences: [],
      });
    }

    if (skills.length === 0) return null;
    return {
      id: `dict-unit-${languageId}`,
      unitNumber: (course?.units.length || 0) + 1,
      title: `${loadedDict.languageName} Complete Dictionary (${loadedDict.categories.reduce((acc, c) => acc + c.entries.length, 0).toLocaleString()} Entries)`,
      description: `All verified ${loadedDict.languageName} dictionary categories integrated for flashcards, vocabulary search, interactive practice, and mini-games.`,
      icon: "BookOpen",
      color: "#D4A017",
      skills,
    };
  }, [loadedDict, course, languageId]);

  const combinedUnits: CourseUnit[] = useMemo(() => {
    if (!course) return [];
    return dictUnit ? [...course.units, dictUnit] : course.units;
  }, [course, dictUnit]);

  const allSkillsFlat = useMemo(() => {
    if (!course) return [];
    const list: { unitId: string; unitTitle: string; skill: CourseSkill }[] = [];
    combinedUnits.forEach((unit) => {
      unit.skills.forEach((skill) => {
        list.push({ unitId: unit.id, unitTitle: unit.title, skill });
      });
    });
    return list;
  }, [course, combinedUnits]);

  const flashcardDeck = useMemo(() => {
    if (flashcardSkillId === "all") {
      return allSkillsFlat
        .flatMap((s) =>
          s.skill.words.map((w) => ({ ...w, skillTitle: s.skill.title }))
        )
        .slice(0, 300);
    }
    const found = allSkillsFlat.find((s) => s.skill.id === flashcardSkillId);
    if (!found) return [];
    return found.skill.words
      .slice(0, 300)
      .map((w) => ({ ...w, skillTitle: found.skill.title }));
  }, [allSkillsFlat, flashcardSkillId]);

  const currentFlashcard =
    flashcardDeck[flashcardIndex] || flashcardDeck[0] || null;

  useEffect(() => {
    if (view !== "flashcards" || flashcardDeck.length === 0) return;
    const onKeyDown = (e: KeyboardEvent) => {
      const active = document.activeElement as HTMLElement | null;
      if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.tagName === "SELECT")) {
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setFlashcardIndex((i) => Math.min(flashcardDeck.length - 1, i + 1));
        setIsCardFlipped(false);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setFlashcardIndex((i) => Math.max(0, i - 1));
        setIsCardFlipped(false);
      } else if (e.key === " ") {
        e.preventDefault();
        setIsCardFlipped((f) => !f);
      } else if (e.key === "1") {
        e.preventDefault();
        setFlashcardIndex((i) => (i + 1) % Math.max(1, flashcardDeck.length));
        setIsCardFlipped(false);
      } else if (e.key === "2") {
        e.preventDefault();
        playCorrectSfx();
        handleUpdateProgress((prev) => awardActivityXp(prev, 2, false));
        setFlashcardXpPop(true);
        setTimeout(() => setFlashcardXpPop(false), 650);
        setFlashcardIndex((i) => (i + 1) % Math.max(1, flashcardDeck.length));
        setIsCardFlipped(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [view, flashcardDeck.length, handleUpdateProgress]);

  const filteredModules = useMemo(() => {
    const q = moduleSearch.trim().toLowerCase();
    return allSkillsFlat.filter((item) => {
      if (selectedUnitFilter !== "all" && item.unitId !== selectedUnitFilter) {
        return false;
      }
      if (!q) return true;
      if (
        item.skill.title.toLowerCase().includes(q) ||
        item.skill.description.toLowerCase().includes(q) ||
        item.unitTitle.toLowerCase().includes(q)
      ) {
        return true;
      }
      return item.skill.words.some(
        (w) =>
          w.target.toLowerCase().includes(q) ||
          w.source.toLowerCase().includes(q)
      );
    });
  }, [allSkillsFlat, moduleSearch, selectedUnitFilter]);

  useEffect(() => {
    setModulesPage(1);
  }, [moduleSearch, selectedUnitFilter, languageId]);

  const visibleModules = useMemo(
    () => filteredModules.slice(0, modulesPage * MODULES_PAGE_SIZE),
    [filteredModules, modulesPage]
  );

  const advanceDictCursor = useCallback(
    (prog: UserProgress, skillId: string, nextCursor: number): UserProgress => ({
      ...prog,
      dictCursors: { ...(prog.dictCursors || {}), [skillId]: nextCursor },
    }),
    []
  );

  const handleStartLesson = useCallback(
    (skillId: string, level: number) => {
      if (!course) return;
      const found = allSkillsFlat.find((s) => s.skill.id === skillId);
      if (!found) return;
      const due = getDueReviews(progress);
      let lessonSkill = found.skill;
      let nextDictCursor: number | undefined;
      if (lessonSkill.words.length > 14) {
        const batchSize = 12;
        const maxStart = Math.max(0, lessonSkill.words.length - batchSize);
        const savedCursor = progress.dictCursors?.[skillId];
        const offset =
          savedCursor !== undefined
            ? Math.min(maxStart, savedCursor)
            : ((level - 1) * batchSize) % Math.max(1, maxStart + 1);
        nextDictCursor = offset + batchSize <= maxStart ? offset + batchSize : 0;
        lessonSkill = {
          ...lessonSkill,
          words: lessonSkill.words.slice(offset, offset + batchSize),
        };
      }
      setActiveLesson({
        skill: lessonSkill,
        level,
        reviewItems: due.slice(0, 3),
        reviewOnly: false,
        nextDictCursor,
      });
      setView("playing");
    },
    [course, allSkillsFlat, progress]
  );

  const handleStartReview = useCallback(() => {
    if (!course) return;
    const due = getDueReviews(progress);
    if (due.length === 0) return;
    const fallbackSkill = course.units[0]?.skills[0];
    if (!fallbackSkill) return;
    setActiveLesson({
      skill: fallbackSkill,
      level: 1,
      reviewItems: due.slice(0, 10),
      reviewOnly: true,
    });
    setView("playing");
  }, [course, progress]);

  const handleToggleUnlockAll = useCallback(() => {
    setProgress((prev) => {
      const updated: UserProgress = {
        ...prev,
        unlockAll: !prev.unlockAll,
      };
      saveProgress(updated);
      return updated;
    });
  }, []);

  const handleResetProgress = useCallback(() => {
    if (!course) return;
    if (
      typeof window !== "undefined" &&
      window.confirm(
        `Reset all your ${course.config.name} course progress, XP, and skill levels? This cannot be undone.`
      )
    ) {
      const fresh = resetLanguageProgress(course.config.id);
      setProgress(fresh);
      setShowCompletionToast(`${course.config.name} progress has been reset.`);
      setTimeout(() => setShowCompletionToast(null), 3000);
    }
  }, [course]);

  const handleLessonComplete = useCallback(
    (result: LessonResult) => {
      const prevAchievements = [...progress.achievements];
      const baseProg =
        activeLesson?.nextDictCursor !== undefined && !result.reviewOnly
          ? advanceDictCursor(progress, result.skillId, activeLesson.nextDictCursor)
          : progress;
      const updated = applyLessonResult(baseProg, result);
      saveProgress(updated);
      setProgress(updated);
      checkAndNotifyNewAchievements(prevAchievements, updated.achievements);
    },
    [progress, activeLesson, advanceDictCursor, checkAndNotifyNewAchievements]
  );

  const handleQuitLesson = useCallback(() => {
    setActiveLesson(null);
    setView("lessons");
  }, []);

  if (!course) {
    return (
      <div
        data-error-page="true"
        className="mx-auto max-w-2xl px-4 py-16 text-center"
      >
        <h1 className="text-xl font-bold text-text-primary">
          Course Not Found
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          The requested Kenyan language course could not be loaded.
        </p>
        <Link
          href="/tools/learn/"
          className="mt-4 inline-block rounded-xl bg-gold px-5 py-2.5 text-xs font-bold text-black"
        >
          Back to Language Hub
        </Link>
      </div>
    );
  }

  const hasGrammar = Boolean(
    course.grammarSections && course.grammarSections.length > 0
  );

  const dictMeta = DICT_META_MAP[course.config.id];
  const courseWordsCount = course.units.reduce(
    (sum, u) => sum + u.skills.reduce((s, sk) => s + sk.words.length, 0),
    0
  );
  const totalWords = Math.max(
    courseWordsCount,
    combinedUnits.reduce(
      (sum, u) => sum + u.skills.reduce((s, sk) => s + sk.words.length, 0),
      0
    ),
    dictMeta?.totalEntries || 0
  );
  const totalSkills = course.units.reduce((sum, u) => sum + u.skills.length, 0);
  const sources = getSourcesForLanguage(course.config.id);
  const langHeading = formatLanguageHeader(course.config.name, course.config.nativeName);

  const courseTool: Tool = {
    ...LEARN_TOOL,
    title: `Learn ${langHeading} — Free Interactive Course`,
    shortTitle: `Learn ${course.config.name}`,
    description: course.config.description,
    dataSource: `Verified ${course.config.name} Linguistic Corpus & Lexicons`,
  };

  const courseFaq = [
    {
      question: `How is the ${langHeading} course structured on KenyaHub?`,
      answer: `The ${course.config.name} course is organized into ${course.units.length} structured ${course.units.length === 1 ? "unit" : "units"} and ${totalSkills} skill ${totalSkills === 1 ? "module" : "modules"} teaching ${totalWords.toLocaleString()}+ verified vocabulary items, sentence patterns, grammar paradigms, and cultural proverbs. Learners progress from foundational greetings and numerals to verb conjugations, kinship, and oral literature.`,
    },
    {
      question: `Where is ${course.config.name} spoken in Kenya and which language family does it belong to?`,
      answer: `${langHeading} is a ${course.config.family} language spoken by approximately ${course.config.speakers} speakers across ${course.config.counties.join(", ")} in Kenya.`,
    },
    {
      question: `What primary linguistic sources are used for the ${course.config.name} lessons and grammar reference?`,
      answer:
        sources.length > 0
          ? `The ${course.config.name} curriculum is compiled from verified public-domain monographs and open lexical datasets, including ${sources.map((s) => `${s.title} (${s.published})`).join("; ")}.`
          : `The ${course.config.name} curriculum is compiled from verified Kenyan linguistic monographs and open lexical corpora.`,
    },
    {
      question: `Is the ${course.config.name} language course completely free to use?`,
      answer: `Yes. All ${totalSkills} ${course.config.name} skill modules, vocabulary flashcards, grammar reference chapters, cultural proverbs, and mini-games are 100% free with no account registration required. Progress is saved automatically in your browser.`,
    },
  ];

  const sampleWords = course.units
    .flatMap((u) => u.skills.flatMap((sk) => sk.words))
    .filter((w) => w.target && w.source)
    .slice(0, 5);
  const grammarTitles = (course.grammarSections || [])
    .slice(0, 4)
    .map((g) => g.title)
    .join("; ");
  const unitNames = course.units
    .slice(0, 6)
    .map((u) => u.title.replace(/^Unit \d+:\s*/i, ""))
    .join(", ");

  const courseGuideOverride: RichGuideEntry = {
    notesTitle: `Linguistic Guide, Curriculum & Methodology: ${langHeading}`,
    overview: [
      `${langHeading} is a ${course.config.family} language spoken by approximately ${course.config.speakers} speakers across ${course.config.counties.join(", ")} in Kenya. ${course.config.description}`,
      `This interactive ${course.config.name} course is structured into ${course.units.length} thematic units (${unitNames}) and ${totalSkills} skill modules covering ${totalWords.toLocaleString()}+ verified vocabulary items, sentence patterns, and cultural idioms${grammarTitles ? `, alongside reference grammar chapters on ${grammarTitles}` : ""}.`,
      sources.length > 0
        ? `Primary Linguistic Provenance: Vocabulary, orthography, and grammatical paradigms in this ${course.config.name} curriculum are compiled and cross-verified from ${sources.map((s) => `${s.title} (${s.published})`).join("; ")}.`
        : `All ${course.config.name} lessons, spaced-repetition reviews, flashcards, and mini-games execute 100% locally in your browser with automatic progress persistence.`,
    ],
    howItWorks: [
      `Select a ${course.config.name} skill node on the Skill Path to study vocabulary teaching cards with phonetic guides and contextual examples before starting the interactive quiz.`,
      `Complete 5 progressive crown levels per ${course.config.name} module—combining multiple-choice recognition, sentence-tile construction, fill-in-the-blank cloze prompts, and active ${course.config.nativeName} typing with diacritic-aware grading.`,
      `Practice due items in the Spaced Repetition System (SRS) review queue, which schedules missed ${course.config.name} words across 5 expanding Leitner intervals (10 minutes to 14 days).`,
      `Switch to the All Vocab & Dictionary tab, 3D Flashcards, Grammar Reference, Proverbs & Wisdom, or Mini-Games Hub to explore all ${totalWords.toLocaleString()}+ ${course.config.name} entries.`,
    ],
    workedExample: {
      title: `Core ${langHeading} Vocabulary & Structural Sample`,
      scenario: `Foundational ${course.config.name} expressions and lexical pairs from the opening modules of the ${course.config.nativeName} curriculum:`,
      steps:
        sampleWords.length > 0
          ? sampleWords.map(
              (w) =>
                `${w.target} → "${w.source}"${w.pronunciation ? ` [${w.pronunciation}]` : ""}${w.example ? ` — ${w.example}` : ""}`
            )
          : [
              `Language Family: ${course.config.family}`,
              `Primary Counties: ${course.config.counties.join(", ")}`,
              `Verified Vocabulary & Dictionary Corpus: ${totalWords.toLocaleString()}+ entries`,
            ],
      takeaway: `Consistent daily practice (50 XP/day goal) across ${course.config.name} skill modules and spaced-repetition reviews builds lasting reading and conversational recall.`,
    },
    complianceTips: [
      `Pay close attention to ${course.config.name} vowel length, diacritics, and prefixes—if you type an unaccented form, the grading engine accepts it with an "Almost exact" orthography reminder.`,
      `Use the "Unlock All" toggle on the Skill Path if you already speak basic ${course.config.name} and want to jump directly to advanced grammar or dictionary categories.`,
      `Review the Grammar Reference and Proverbs & Wisdom tabs alongside vocabulary modules to understand how ${course.config.name} morphology and oral idioms operate in context.`,
    ],
    notes: sources.map(
      (s) => `${s.title} (${s.published}) — ${s.contribution || s.coverageNote || "Verified primary linguistic reference."}`
    ),
    faq: courseFaq,
  };

  return (
    <ToolShell
      tool={courseTool}
      faq={courseFaq}
      guideOverride={courseGuideOverride}
      breadcrumbSuffix={[
        {
          label: course.config.name,
          href: `/tools/learn/${course.config.id}/`,
        },
      ]}
      hideHeader={view === "playing"}
      hideFooter={view === "playing"}
      hideSource
    >
      <ToolAccessTracker tool={courseTool} {...({ slug: "learn" } as Record<string, string>)} />
      {/* Top Bar: Compact Language Dropdown on Left + XP, Hearts, Shield & Streak on Right */}
      {view !== "playing" && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link
              href="/tools/learn/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light transition-colors shrink-0"
              aria-label="All Languages"
              title="All Languages"
            >
              <ChevronLeft className="h-4 w-4" />
            </Link>
            <CustomSelect
              value={course.config.id}
              onValueChange={(val) => router.push(`/tools/learn/${val}/`)}
              options={PUBLISHED_COURSES.map((c) => ({
                value: c.config.id,
                label: c.config.name,
              }))}
              className="w-44 sm:w-52 text-xs sm:text-sm"
            />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold shrink-0 flex-wrap">
            <span
              className="inline-flex items-center gap-1 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-1.5 text-red-400 font-bold"
              title="Active Hearts (refills 1 heart every 30 min)"
            >
              <Heart className="h-3.5 w-3.5 fill-red-400" />
              {progress.hearts}
            </span>
            {progress.streakFreezes > 0 && (
              <span
                className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-1.5 text-sky-400 font-bold"
                title={`${progress.streakFreezes} Streak Shield active (protects 1 missed day)`}
              >
                <Shield className="h-3.5 w-3.5" />
                {progress.streakFreezes}
              </span>
            )}
            <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-gold font-bold">
              {progress.xp} XP
            </span>
            {progress.streak > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-1.5 text-orange-400 font-bold">
                <Flame className="h-3.5 w-3.5" />
                {progress.streak}d
              </span>
            )}
            {(progress.xp > 0 || progress.lessonsCompleted > 0) && (
              <button
                type="button"
                onClick={handleResetProgress}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-card hover:border-red-400/50 hover:text-red-400 px-2.5 py-1.5 text-text-muted transition-colors cursor-pointer"
                title={`Reset ${course.config.name} progress`}
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Progress</span>
              </button>
            )}
          </div>
        </div>
      )}

      {showCompletionToast && (
        <div className="fixed inset-x-0 top-20 z-50 flex justify-center px-4 animate-in fade-in slide-in-from-top-3 duration-300">
          <div className="rounded-xl border border-gold/40 bg-bg-card px-5 py-3 shadow-lg shadow-gold/10">
            <p className="text-sm font-semibold text-gold flex items-center gap-1.5">
              <PartyPopper className="w-4 h-4 text-gold shrink-0" /> {showCompletionToast}
            </p>
          </div>
        </div>
      )}

      {/* Horizontal Scrolling Pill Tabs */}
      {view !== "playing" && (
        <ExpandablePillRow className="mb-5">
          {[
            { id: "lessons" as const, label: "Skill Path" },
            { id: "flashcards" as const, label: `Flashcards (${totalWords.toLocaleString()})` },
            { id: "modules" as const, label: `All Vocab & Dictionary (${totalWords.toLocaleString()})` },
            { id: "games" as const, label: "Mini-Games (14)" },
            ...(hasGrammar ? [{ id: "grammar" as const, label: "Grammar" }] : []),
            { id: "proverbs" as const, label: "Proverbs & Wisdom" },
          ].map((tab) => {
            const active = view === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setView(tab.id)}
                role="tab"
                aria-selected={active}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                  active
                    ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                    : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </ExpandablePillRow>
      )}

      {view === "playing" && activeLesson ? (
        <div data-adsense-pause="true">
          <LessonPlayer
            skill={activeLesson.skill}
            level={activeLesson.level}
            progress={progress}
            languageName={course.config.name}
            onComplete={handleLessonComplete}
            onQuit={handleQuitLesson}
            reviewItems={activeLesson.reviewItems}
            reviewOnly={activeLesson.reviewOnly}
          />
        </div>
      ) : view === "flashcards" ? (
        /* ── Interactive 3D Flashcards Deck View (No Audio Buttons) ── */
        <div data-adsense-pause="true" className="mx-auto max-w-2xl space-y-5 pb-8">
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
                <Layers className="w-5 h-5 text-gold" />
                <span>{course.config.name} Interactive Flashcards</span>
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                Tap the card to flip between {course.config.name} and English meanings.
              </p>
            </div>
            <CustomSelect
              value={flashcardSkillId}
              onValueChange={(val) => {
                setFlashcardSkillId(val);
                setFlashcardIndex(0);
                setIsCardFlipped(false);
              }}
              options={[
                { value: "all", label: `All Modules (${totalWords} words)` },
                ...allSkillsFlat.map((s) => ({
                  value: s.skill.id,
                  label: `${s.skill.title} (${s.skill.words.length})`,
                })),
              ]}
              className="w-full sm:w-64 text-xs sm:text-sm"
            />
          </div>

          {currentFlashcard && (
            <div className="space-y-4">
              {/* Deck Progress Bar */}
              <div className="h-1.5 w-full rounded-full bg-bg-elevated overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold to-kenya-green transition-all duration-300"
                  style={{ width: `${Math.min(100, ((flashcardIndex + 1) / Math.max(1, flashcardDeck.length)) * 100)}%` }}
                />
              </div>

              <div
                onClick={() => setIsCardFlipped((f) => !f)}
                onTouchStart={(e) => {
                  if (e.touches.length === 1) setFcTouchStartX(e.touches[0].clientX);
                }}
                onTouchEnd={(e) => {
                  if (fcTouchStartX === null || e.changedTouches.length === 0) return;
                  const dx = e.changedTouches[0].clientX - fcTouchStartX;
                  setFcTouchStartX(null);
                  if (Math.abs(dx) > 48) {
                    if (dx < 0 && flashcardIndex < flashcardDeck.length - 1) {
                      setFlashcardIndex((i) => i + 1);
                      setIsCardFlipped(false);
                    } else if (dx > 0 && flashcardIndex > 0) {
                      setFlashcardIndex((i) => i - 1);
                      setIsCardFlipped(false);
                    }
                  }
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsCardFlipped((f) => !f);
                  }
                }}
                className={`group relative min-h-[250px] sm:min-h-[280px] rounded-3xl border-2 bg-gradient-to-br from-bg-card via-bg-card to-bg-elevated p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-gold/65 hover:-translate-y-0.5 active:scale-[0.99] shadow-lg select-none ${
                  isCardFlipped ? "border-kenya-green/50 animate-flip-in" : "border-gold/35"
                }`}
              >
                {flashcardXpPop && (
                  <span className="pointer-events-none absolute top-4 right-5 rounded-full bg-kenya-green px-3 py-1 text-xs font-extrabold text-white shadow-lg animate-bounce-in z-20">
                    +2 XP! ⚡
                  </span>
                )}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-text-muted">
                  <span className="rounded-2xl bg-bg-elevated border border-border px-3 py-1 font-semibold text-gold max-w-full break-words">
                    {currentFlashcard.skillTitle}
                  </span>
                  <span>
                    Card {flashcardIndex + 1} of {flashcardDeck.length}
                  </span>
                </div>

                <div className="my-6 text-center space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    {isCardFlipped ? "English Meaning" : course.config.name}
                  </p>
                  <p className="text-2xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-gold break-words">
                    {isCardFlipped ? currentFlashcard.source : currentFlashcard.target}
                  </p>
                  {!isCardFlipped && currentFlashcard.pronunciation && (
                    <p className="text-sm text-sky-light italic">
                      [{currentFlashcard.pronunciation}]
                    </p>
                  )}
                  {isCardFlipped && currentFlashcard.example && (
                    <p className="text-sm text-text-secondary mt-3 pt-3 border-t border-border/60 max-w-md mx-auto">
                      Example: <strong className="text-text-primary">{currentFlashcard.example}</strong>
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-center text-xs text-text-secondary pt-2 border-t border-border/40 font-medium">
                  Tap card to flip ↻
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setFlashcardIndex((i) => (i + 1) % Math.max(1, flashcardDeck.length));
                    setIsCardFlipped(false);
                  }}
                  className="flex-1 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2.5 text-xs sm:text-sm font-bold text-amber-400 hover:bg-amber-500/20 transition-colors cursor-pointer"
                >
                  Still Learning ↻
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playCorrectSfx();
                    handleUpdateProgress((prev) => awardActivityXp(prev, 2, false));
                    setFlashcardXpPop(true);
                    setTimeout(() => setFlashcardXpPop(false), 650);
                    setFlashcardIndex((i) => (i + 1) % Math.max(1, flashcardDeck.length));
                    setIsCardFlipped(false);
                  }}
                  className="flex-1 rounded-xl border border-kenya-green/50 bg-kenya-green/15 px-4 py-2.5 text-xs sm:text-sm font-bold text-kenya-green-light hover:bg-kenya-green/25 transition-colors cursor-pointer"
                >
                  Got It (+2 XP) ✓
                </button>
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={flashcardIndex === 0}
                  onClick={() => {
                    setFlashcardIndex((i) => Math.max(0, i - 1));
                    setIsCardFlipped(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-bg-card px-4 py-2.5 text-xs sm:text-sm font-semibold text-text-primary disabled:opacity-40 hover:border-gold/40 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const rand = Math.floor(Math.random() * flashcardDeck.length);
                    setFlashcardIndex(rand);
                    setIsCardFlipped(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-bg-elevated px-4 py-2.5 text-xs sm:text-sm font-semibold text-gold hover:border-gold/40 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Shuffle Card
                </button>

                <button
                  type="button"
                  disabled={flashcardIndex >= flashcardDeck.length - 1}
                  onClick={() => {
                    setFlashcardIndex((i) =>
                      Math.min(flashcardDeck.length - 1, i + 1)
                    );
                    setIsCardFlipped(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gold px-5 py-2.5 text-xs sm:text-sm font-bold text-kenya-black disabled:opacity-40 hover:brightness-110 transition-all cursor-pointer"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : view === "modules" ? (
        <div data-adsense-pause={filteredModules.length === 0 ? "true" : undefined} className="mx-auto max-w-3xl space-y-5 pb-8">
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 space-y-3.5">
            <div>
              <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                All {course.config.name} Modules &amp; Vocabulary ({filteredModules.length})
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                Browse every module, grammar note, and vocabulary word table, or launch any lesson directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <SearchInput
                value={moduleSearch}
                onChange={(e) => setModuleSearch(e.target.value)}
                onClear={() => setModuleSearch("")}
                placeholder={`Search ${course.config.name} or English words...`}
                className="flex-1 text-sm"
              />
              <CustomSelect
                value={selectedUnitFilter}
                onValueChange={(val) => setSelectedUnitFilter(val)}
                options={[
                  { value: "all", label: `All Units & Dictionary (${combinedUnits.length})` },
                  ...combinedUnits.map((u, idx) => ({
                    value: u.id,
                    label: `Unit ${idx + 1}: ${u.title.replace(/^Unit \d+:\s*/i, "")}`,
                  })),
                ]}
                className="w-full sm:w-64 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-4">
            {visibleModules.map(({ unitTitle, skill }) => {
              const skillLevel = progress.skillLevels[skill.id] || 0;
              return (
                <div
                  key={skill.id}
                  className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 space-y-4"
                >
                  <div className="space-y-2 border-b border-border pb-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gold">
                        {unitTitle}
                      </span>
                      <button
                        onClick={() =>
                          handleStartLesson(skill.id, Math.min(skillLevel + 1, 5))
                        }
                        className="rounded-xl bg-gold px-4 py-2 text-xs font-bold text-kenya-black hover:brightness-110 transition-all shrink-0 cursor-pointer"
                      >
                        Practice ({skill.words.length} words) →
                      </button>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-text-primary leading-snug">
                      {skill.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {skill.tips && (
                    <details className="group rounded-xl bg-gold/5 border border-gold/20 px-3.5 py-2.5 text-xs sm:text-sm text-text-secondary">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-gold">
                        <span className="inline-flex items-center gap-2 min-w-0 flex-1">
                          <Lightbulb className="h-4 w-4 shrink-0 text-gold" />
                          <span>Grammar &amp; Lesson Notes</span>
                        </span>
                        <ChevronDown className="h-4 w-4 text-text-muted transition-transform group-open:rotate-180 shrink-0" />
                      </summary>
                      <div className="mt-2.5 border-t border-gold/15 pt-2.5 leading-relaxed whitespace-pre-line">
                        {skill.tips}
                      </div>
                    </details>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(moduleSearch.trim()
                      ? skill.words.filter(
                          (w) =>
                            w.target.toLowerCase().includes(moduleSearch.trim().toLowerCase()) ||
                            w.source.toLowerCase().includes(moduleSearch.trim().toLowerCase())
                        )
                      : skill.words
                    )
                      .slice(0, 60)
                      .map((w, wIdx) => (
                      <div
                        key={wIdx}
                        className="rounded-xl bg-bg-elevated/60 border border-border/60 p-3.5 flex flex-col justify-between gap-1"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0 flex-1">
                            <span className="text-sm font-bold text-gold break-words">
                              {w.target}
                            </span>
                            {hasVerifiedAudio({ translation: w.target, audioFile: w.audioFile || w.audio }) && (
                              <button
                                type="button"
                                onClick={() =>
                                  playLanguageAudio(
                                    {
                                      english: w.source,
                                      translation: w.target,
                                      pronunciation: w.pronunciation,
                                      audioFile: w.audioFile || w.audio,
                                    },
                                    course.config.id
                                  )
                                }
                                className="inline-flex items-center justify-center rounded-md p-1 text-sky hover:bg-sky/10 transition-colors shrink-0 cursor-pointer"
                                title={`Play verified ${course.config.name} recording`}
                                aria-label={`Play verified ${course.config.name} recording for ${w.target}`}
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-text-primary text-right break-words max-w-[55%]">
                            {w.source}
                          </span>
                        </div>
                        {w.pronunciation && (
                          <span className="text-xs text-sky-light">
                            [{w.pronunciation}]
                          </span>
                        )}
                        {w.example && (
                          <span className="text-xs text-text-muted italic mt-1">
                            {w.example}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredModules.length > visibleModules.length && (
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setModulesPage((p) => p + 1)}
                  className="px-5 py-2.5 rounded-xl bg-bg-card border border-border hover:border-gold/40 text-xs sm:text-sm font-bold text-text-primary cursor-pointer transition-all"
                >
                  Load More Modules ({filteredModules.length - visibleModules.length} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      ) : view === "games" ? (
        <div data-adsense-pause="true">
          <GamesHub
            units={combinedUnits}
            courseUnits={course.units}
            languageName={course.config.name}
            languageId={course.config.id}
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onAwardXp={(xp, sessionComplete = true) => {
              handleUpdateProgress((prev) => awardActivityXp(prev, xp, sessionComplete));
            }}
            onBack={() => setView("lessons")}
          />
        </div>
      ) : view === "grammar" && course.grammarSections ? (
        <GrammarView
          sections={course.grammarSections}
          languageName={course.config.name}
        />
      ) : view === "proverbs" ? (
        <ProverbsView lockedLanguageId={course.config.id} />
      ) : (
        <SkillTree
          units={combinedUnits}
          progress={progress}
          config={course.config}
          onStartLesson={handleStartLesson}
          onStartReview={handleStartReview}
          onToggleUnlockAll={handleToggleUnlockAll}
          onGoBack={() => {
            window.location.href = "/tools/learn/";
          }}
        />
      )}

      {/* Always-Indexable Core Vocabulary & Expressions Reference Table for Search Engines */}
      {view !== "playing" && sampleWords.length > 0 && (
        <section className="mt-8 bg-bg-card border border-border rounded-2xl p-4 sm:p-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              {langHeading} Core Vocabulary &amp; Expressions Reference Table
            </h2>
            <Link
              href={`/tools/kenyan-translator/?lang=${course.config.id}`}
              className="text-xs font-semibold text-gold hover:underline"
            >
              Open Full {course.config.name} Dictionary ({totalWords.toLocaleString()}+ Entries) →
            </Link>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>{course.config.name} ({course.config.nativeName})</th>
                  <th>English Meaning</th>
                  <th>Pronunciation / Usage Context</th>
                </tr>
              </thead>
              <tbody>
                {course.units
                  .flatMap((u) => u.skills.flatMap((sk) => sk.words))
                  .filter((w) => w.target && w.source)
                  .slice(0, 16)
                  .map((w, idx) => (
                    <tr key={idx}>
                      <td className="font-bold text-gold">{w.target}</td>
                      <td className="font-medium text-text-primary">{w.source}</td>
                      <td className="text-xs text-text-secondary">
                        {w.pronunciation ? `[${w.pronunciation}] ` : ""}
                        {w.example || course.config.family}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </ToolShell>
  );
}
