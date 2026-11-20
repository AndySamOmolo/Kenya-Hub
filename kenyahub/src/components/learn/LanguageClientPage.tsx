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
  Lightbulb,
  RotateCcw,
  Layers,
  Volume2,
} from "lucide-react";
import ToolShell, { type RichGuideEntry } from "@/components/tools/ToolShell";
import { playLanguageAudio, hasVerifiedAudio } from "@/lib/language-audio";
import SkillTree from "@/components/learn/SkillTree";
import GamesHub from "@/components/learn/GamesHub";
import GrammarView from "@/components/learn/GrammarView";
import ProverbsView from "@/components/learn/ProverbsView";
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
    <div className="min-h-[85vh] flex items-center justify-center py-12 text-center text-sm text-text-muted animate-pulse">
      Loading interactive lesson...
    </div>
  ),
});

function setFocusModeSync(active: boolean) {
  if (typeof document === "undefined") return;
  if (active) {
    document.body.dataset.khFocusMode = "true";
    document.documentElement.classList.add("kh-focus-mode");
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = prev;
    });
  } else {
    delete document.body.dataset.khFocusMode;
    document.documentElement.classList.remove("kh-focus-mode");
  }
}

const LEARN_TOOL = TOOLS.find((t) => t.slug === "learn")!;
const MODULES_PAGE_SIZE = 8;
const REF_TABLE_PAGE_SIZE = 25;

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
  const [refTablePage, setRefTablePage] = useState(1);

  useEffect(() => {
    setRefTablePage(1);
  }, [languageId]);

  useEffect(() => {
    // Warm-prefetch LessonPlayer chunk so clicking Start Lesson renders without delay
    import("@/components/learn/LessonPlayer").catch(() => {});
  }, []);

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

  useEffect(() => {
    if (view === "playing") {
      setFocusModeSync(true);
    } else {
      setFocusModeSync(false);
    }
    return () => {
      setFocusModeSync(false);
    };
  }, [view]);

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
      try { localStorage.setItem("kenyahub_last_visited_lang", languageId); } catch {}
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
    const meta = DICT_META_MAP[languageId];
    if (!meta) return null;
    const validMetaCats = meta.categories.filter((c) => c.count > 0);
    if (validMetaCats.length === 0) return null;

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

    const loadedCatMap = new Map(
      (loadedDict?.categories || []).map((c) => [c.id, c])
    );

    const skills: CourseSkill[] = validMetaCats.map((catMeta) => {
      const loadedCat = loadedCatMap.get(catMeta.id);
      const dedupedWords: WordPair[] = [];
      const allCatWords: WordPair[] = [];
      if (loadedCat?.entries) {
        for (const e of loadedCat.entries) {
          const t = e.translation.trim();
          const s = e.english.trim();
          if (!t || !s) continue;
          const pair: WordPair = {
            target: t,
            source: s,
            pronunciation: e.pronunciation || undefined,
            example: e.context || undefined,
            audioFile: e.audioFile || undefined,
          };
          allCatWords.push(pair);
          const key = `${t.toLowerCase()}::${s.toLowerCase()}`;
          if (!courseWordSet.has(key)) {
            dedupedWords.push(pair);
          }
        }
      }
      const words = dedupedWords.length > 0 ? dedupedWords : allCatWords;
      const countLabel = catMeta.count.toLocaleString("en-KE");
      return {
        id: `dict-cat-${catMeta.id}`,
        title: `Dictionary: ${catMeta.name}`,
        icon: catMeta.icon || "📖",
        description: `Complete ${meta.languageName} dictionary entries for ${catMeta.name.toLowerCase()} (${countLabel} verified entries).`,
        tips: `Practice and search ${countLabel} verified ${meta.languageName} dictionary entries in the ${catMeta.name} category.`,
        words,
        sentences: [],
      };
    });

    return {
      id: `dict-unit-${languageId}`,
      unitNumber: (course?.units.length || 0) + 1,
      title: `${meta.languageName} Complete Dictionary (${meta.totalEntries.toLocaleString("en-KE")} Entries)`,
      description: `All verified ${meta.languageName} dictionary categories integrated for flashcards, vocabulary search, interactive practice, and mini-games.`,
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
      setFocusModeSync(true);
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
    setFocusModeSync(true);
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
    setFocusModeSync(false);
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
  // Single canonical counts (identical on SSR and client hydration — zero flicker)
  const totalWords = Math.max(courseWordsCount, dictMeta?.totalEntries || 0);
  const totalUnits = combinedUnits.length;
  const totalSkills = combinedUnits.reduce((sum, u) => sum + u.skills.length, 0);
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
      answer: `The ${course.config.name} course is organized into ${totalUnits} structured ${totalUnits === 1 ? "unit" : "units"} and ${totalSkills} skill ${totalSkills === 1 ? "module" : "modules"} teaching ${totalWords.toLocaleString("en-KE")}+ verified vocabulary items, sentence patterns, grammar paradigms, and cultural proverbs. Learners progress from foundational greetings and numerals to verb conjugations, kinship, and oral literature.`,
    },
    {
      question: `Where is ${course.config.name} spoken in Kenya and which language family does it belong to?`,
      answer: `${langHeading} is a ${course.config.family} language spoken by approximately ${course.config.speakers} speakers across ${course.config.counties.join(", ")} in Kenya.`,
    },
    {
      question: `What primary linguistic sources are used for the ${course.config.name} lessons and grammar reference?`,
      answer:
        sources.length > 0
          ? `The ${course.config.name} curriculum is compiled from ${sources.length} verified public-domain monographs and open lexical datasets, including ${sources.slice(0, 4).map((s) => `${s.title} (${s.published})`).join("; ")}.`
          : `The ${course.config.name} curriculum is compiled from verified Kenyan linguistic monographs and open lexical corpora.`,
    },
    {
      question: `Is the ${course.config.name} language course completely free to use?`,
      answer: `Yes. All ${totalSkills} ${course.config.name} skill modules, vocabulary flashcards, grammar reference chapters, cultural proverbs, and mini-games are 100% free with no account registration required. Progress is saved automatically in your browser.`,
    },
  ];

  const dedupedCourseWords = (() => {
    const seen = new Set<string>();
    const list: WordPair[] = [];
    for (const u of course.units) {
      for (const sk of u.skills) {
        for (const w of sk.words) {
          if (!w.target || !w.source) continue;
          const key = `${w.target.trim().toLowerCase()}::${w.source.trim().toLowerCase()}`;
          if (seen.has(key)) continue;
          seen.add(key);
          list.push(w);
        }
      }
    }
    return list;
  })();

  const totalRefTablePages = Math.max(1, Math.ceil(dedupedCourseWords.length / REF_TABLE_PAGE_SIZE));
  const safeRefTablePage = Math.min(refTablePage, totalRefTablePages);
  const paginatedRefWords = dedupedCourseWords.slice(
    (safeRefTablePage - 1) * REF_TABLE_PAGE_SIZE,
    safeRefTablePage * REF_TABLE_PAGE_SIZE
  );

  const grammarTitles = (course.grammarSections || [])
    .slice(0, 4)
    .map((g) => g.title)
    .join("; ");
  const unitNames = course.units
    .slice(0, 6)
    .map((u) => u.title.replace(/^Unit \d+:\s*/i, ""))
    .join(", ");

  // Suppress calculator-specific ToolShell headings (Step-by-Step Calculation, Statutory Compliance)
  // and uncollapsed bibliography wall; render language-learning study guide & collapsed <details> bibliography below.
  const courseGuideOverride: RichGuideEntry = {
    notesTitle: `About the ${langHeading} Curriculum`,
    overview: [
      `${langHeading} belongs to the ${course.config.family} language family and is spoken by approximately ${course.config.speakers} people across ${course.config.counties.join(", ")} in Kenya.`,
      `This interactive course covers ${totalUnits} structured units (${unitNames}) and ${totalSkills} skill modules spanning ${totalWords.toLocaleString("en-KE")}+ verified vocabulary entries, sentence patterns, and cultural idioms${grammarTitles ? `, alongside grammar reference chapters on ${grammarTitles}` : ""}.`,
    ],
    howItWorks: [],
    complianceTips: [],
    notes: [],
    faq: courseFaq,
  };

  return (
    <ToolShell
      tool={courseTool}
      faq={courseFaq}
      guideOverride={courseGuideOverride}
      breadcrumbParentLabel="Learn"
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
      {/* Top Bar: Compact Language Switcher (Single Stats Strip lives inside SkillTree to avoid double display) */}
      {view !== "playing" && (
        <div className="mb-2.5 sm:mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Link
              href="/tools/learn/"
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light transition-colors shrink-0"
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
              className="w-40 sm:w-52 text-xs sm:text-sm"
            />
          </div>

          {(progress.xp > 0 || progress.lessonsCompleted > 0) && (
            <button
              type="button"
              onClick={handleResetProgress}
              className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-transparent hover:border-red-400/50 hover:text-red-400 px-2.5 py-1 text-[11px] text-text-muted transition-colors cursor-pointer shrink-0 micro-badge"
              title={`Reset ${course.config.name} progress`}
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset</span>
            </button>
          )}
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
        <ExpandablePillRow className="mb-3 sm:mb-5 [&>button]:!h-7 [&>button]:!w-7 sm:[&>button]:!h-8 sm:[&>button]:!w-8 [&>button]:rounded-full [&_.expandable-pill-row]:px-1 [&_.expandable-pill-row]:scroll-pl-1">
          {[
            { id: "lessons" as const, label: "Skill Path" },
            { id: "flashcards" as const, label: `Flashcards (${totalWords.toLocaleString("en-KE")})` },
            { id: "modules" as const, label: `All Vocab & Dictionary (${totalWords.toLocaleString("en-KE")})` },
            { id: "games" as const, label: "Mini-Games (12)" },
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
                className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 sm:px-4 sm:py-1.5 min-h-[32px] sm:min-h-[38px] inline-flex items-center text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
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
                { value: "all", label: `All Modules (${totalWords.toLocaleString()} words)` },
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
                  {!isCardFlipped &&
                    hasVerifiedAudio({
                      translation: currentFlashcard.target,
                      audioFile: currentFlashcard.audioFile || currentFlashcard.audio,
                    }) && (
                      <div className="pt-1 flex justify-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            playLanguageAudio(
                              {
                                english: currentFlashcard.source,
                                translation: currentFlashcard.target,
                                pronunciation: currentFlashcard.pronunciation,
                                audioFile: currentFlashcard.audioFile || currentFlashcard.audio,
                              },
                              course.config.id
                            );
                          }}
                          className="inline-flex items-center gap-1.5 rounded-full border border-sky/40 bg-sky/10 px-3.5 py-1.5 text-xs font-semibold text-sky hover:bg-sky/20 transition-colors cursor-pointer"
                          title={`Play verified ${course.config.name} recording`}
                          aria-label={`Play verified ${course.config.name} recording for ${currentFlashcard.target}`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Listen</span>
                        </button>
                      </div>
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
                  <RotateCcw className="w-3.5 h-3.5" /> Shuffle
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
                placeholder="Search words or meanings..."
                className="flex-1 !h-9 sm:!h-11 text-sm"
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

      {/* Paginated Core Vocabulary & Expressions Reference Table (lessons view only — avoids double display on modules tab) */}
      {view === "lessons" && paginatedRefWords.length > 0 && (
        <section className="mt-8 bg-bg-card border border-border rounded-2xl p-4 sm:p-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                {langHeading} Core Vocabulary &amp; Expressions Reference Table
              </h2>
              <p className="text-xs text-text-muted mt-0.5">
                Showing {((safeRefTablePage - 1) * REF_TABLE_PAGE_SIZE + 1).toLocaleString("en-KE")}–
                {Math.min(safeRefTablePage * REF_TABLE_PAGE_SIZE, dedupedCourseWords.length).toLocaleString("en-KE")} of{" "}
                {dedupedCourseWords.length.toLocaleString("en-KE")} course entries
              </p>
            </div>
            <Link
              href={`/tools/kenyan-translator/?lang=${course.config.id}`}
              className="text-xs font-semibold text-gold hover:underline"
            >
              Open Full {course.config.name} Dictionary ({totalWords.toLocaleString("en-KE")}+ Entries) →
            </Link>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>{langHeading}</th>
                  <th>English Meaning</th>
                  <th>Pronunciation / Usage Context</th>
                </tr>
              </thead>
              <tbody>
                {paginatedRefWords.map((w, idx) => {
                  const contextParts = [
                    w.pronunciation?.trim() ? `[${w.pronunciation.trim()}]` : "",
                    w.example?.trim() || "",
                  ].filter(Boolean);
                  return (
                    <tr key={`${w.target}-${idx}`}>
                      <td className="font-bold text-gold">{w.target}</td>
                      <td className="font-medium text-text-primary">{w.source}</td>
                      <td className="text-xs text-text-secondary">
                        {contextParts.join(" ")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {totalRefTablePages > 1 && (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/60">
              <span className="text-xs text-text-muted">
                Page <strong className="text-text-primary">{safeRefTablePage}</strong> of{" "}
                <strong className="text-text-primary">{totalRefTablePages}</strong>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={safeRefTablePage <= 1}
                  onClick={() => setRefTablePage((p) => Math.max(1, p - 1))}
                  className="inline-flex items-center gap-1 rounded-xl border border-border bg-bg-elevated px-3 py-1.5 min-h-[36px] text-xs font-semibold text-text-secondary hover:text-gold disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" /> Previous
                </button>
                <button
                  type="button"
                  disabled={safeRefTablePage >= totalRefTablePages}
                  onClick={() => setRefTablePage((p) => Math.min(totalRefTablePages, p + 1))}
                  className="inline-flex items-center gap-1 rounded-xl border border-border bg-bg-elevated px-3 py-1.5 min-h-[36px] text-xs font-semibold text-text-secondary hover:text-gold disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Next <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Language-Learning Study Guide & Collapsed Academic Bibliography (replaces calculator headings & uncollapsed bibliography wall) */}
      {view !== "playing" && (
        <section className="mt-6 bg-bg-card border border-border rounded-2xl p-4 sm:p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2.5">
              <h2 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                How to Study {course.config.name}
              </h2>
              <ol className="space-y-2 text-xs sm:text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold/15 text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span className="leading-relaxed">Select a skill module on the Skill Path to study teaching cards with phonetic guides before starting the interactive quiz.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold/15 text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span className="leading-relaxed">Complete 5 crown levels per module combining recognition, sentence tiles, fill-in-the-blank prompts, and diacritic-aware typing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold/15 text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span className="leading-relaxed">Reinforce recall with the Spaced Repetition (SRS) queue, 3D Flashcards, Grammar Reference, Proverbs &amp; Wisdom, and 12 Mini-Games.</span>
                </li>
              </ol>
            </div>

            <div className="space-y-2.5">
              <h2 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-kenya-green-light">
                Orthography &amp; Practice Tips
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-kenya-green-light font-bold shrink-0">✓</span>
                  <span className="leading-relaxed">Pay close attention to {course.config.name} vowel length, diacritics, and prefixes — unaccented answers are accepted with an orthography reminder.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kenya-green-light font-bold shrink-0">✓</span>
                  <span className="leading-relaxed">Use the &ldquo;Unlock All Lessons&rdquo; toggle on the Skill Path if you already speak basic {course.config.name} and want to jump straight to advanced modules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kenya-green-light font-bold shrink-0">✓</span>
                  <span className="leading-relaxed">Pair vocabulary drills with the Grammar and Proverbs &amp; Wisdom tabs to see how {course.config.name} morphology works in everyday speech.</span>
                </li>
              </ul>
            </div>
          </div>

          {sources.length > 0 && (
            <details className="group rounded-xl border border-border bg-bg-elevated/50 px-4 py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs sm:text-sm font-bold text-text-primary hover:text-gold transition-colors">
                <span>
                  Academic Bibliography &amp; Primary Linguistic Sources ({sources.length})
                </span>
                <ChevronDown className="h-4 w-4 text-text-muted transition-transform group-open:rotate-180 shrink-0" />
              </summary>
              <ul className="mt-3 space-y-2.5 border-t border-border/60 pt-3 text-xs sm:text-sm text-text-secondary">
                {sources.map((s) => (
                  <li key={s.id} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-gold font-bold shrink-0">•</span>
                    <span>
                      <strong className="text-text-primary">{s.title}</strong> ({s.published}) —{" "}
                      {s.coverageNote || s.contribution || "Verified primary linguistic reference."}
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </section>
      )}
    </ToolShell>
  );
}
