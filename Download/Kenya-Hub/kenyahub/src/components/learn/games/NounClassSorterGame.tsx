/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useMemo, useState } from "react";
import { Layers, RotateCcw, Trophy } from "lucide-react";
import {
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle, cleanQuizGloss, isValidQuizPair } from "./shared";

interface BucketDef {
  id: string;
  label: string;
  sublabel: string;
}

interface SortItem {
  target: string;
  source: string;
  bucketId: string;
  explanation: string;
}

const BANTU_IDS = new Set([
  "swahili",
  "kikuyu",
  "luhya",
  "kamba",
  "kisii",
  "meru",
  "embu",
  "mijikenda",
  "taita",
  "taveta",
  "pokomo",
]);

const CUSHITIC_IDS = new Set(["somali", "borana", "rendille", "daasanach"]);

export function NounClassSorterGame({
  allWords,
  languageName,
  languageId = "swahili",
  onAwardXp,
  onUpdateGameStats,
}: GameProps) {
  const SESSION_ROUNDS = 10;
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [pickedBucket, setPickedBucket] = useState<string | null>(null);
  const [sessionSeed, setSessionSeed] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);

  const familyType = BANTU_IDS.has(languageId)
    ? "bantu"
    : CUSHITIC_IDS.has(languageId)
    ? "cushitic"
    : "nilotic";

  const buckets = useMemo<BucketDef[]>(() => {
    if (familyType === "bantu") {
      return [
        { id: "people", label: "Class 1/2: People & Kin", sublabel: "M-/Wa-, Mũ-/A-, Omu-/Aba-" },
        { id: "trees", label: "Class 3/4: Nature & Body", sublabel: "M-/Mi-, Mũ-/Mĩ-, Omu-/Emi-" },
        { id: "things", label: "Class 7/8: Objects & Tools", sublabel: "Ki-/Vi-, Kĩ-/I-, Eki-/Ebi-" },
        { id: "actions", label: "Verbs & Actions", sublabel: "Ku-/Kũ-/Khu- & Imperatives" },
      ];
    }
    if (familyType === "cushitic") {
      return [
        { id: "kin", label: "People & Kinship", sublabel: "Family, elders & community roles" },
        { id: "pastoral", label: "Livestock & Ecology", sublabel: "Camels, cattle, water & sky" },
        { id: "objects", label: "Homestead & Numerals", sublabel: "Tools, dwellings & numbers" },
        { id: "actions", label: "Verbs & Actions", sublabel: "Motion, speech & daily actions" },
      ];
    }
    return [
      { id: "masc", label: "People, Warriors & Kin", sublabel: "Ol- / Ja- / Kip- / Kinship" },
      { id: "fem", label: "Animals, Nature & Places", sublabel: "En- / Chep- / Ng'a- / Ecology" },
      { id: "objects", label: "Homestead & Numbers", sublabel: "Tools, vessels & numerals" },
      { id: "actions", label: "Verbs & Actions", sublabel: "Action roots & states" },
    ];
  }, [familyType]);

  const sortItems = useMemo<SortItem[]>(() => {
    const items: SortItem[] = [];
    for (const w of shuffle(allWords)) {
      if (!isValidQuizPair(w.target, w.source)) continue;
      const cleanSrc = cleanQuizGloss(w.source);
      const s = cleanSrc.toLowerCase();
      const t = cleanQuizGloss(w.target);
      if (!t || !s) continue;

      if (/^to\s+[a-z]/i.test(s)) {
        items.push({
          target: t,
          source: cleanSrc,
          bucketId: "actions",
          explanation: `"${t}" (${cleanSrc}) is an action verb/infinitive form.`,
        });
        continue;
      }

      if (
        /\b(mother|father|child|elder|person|man|woman|brother|sister|friend|warrior|chief|guest|boy|girl|husband|wife|son|daughter)\b/i.test(
          s
        )
      ) {
        const bId =
          familyType === "bantu" ? "people" : familyType === "cushitic" ? "kin" : "masc";
        items.push({
          target: t,
          source: cleanSrc,
          bucketId: bId,
          explanation: `"${t}" (${cleanSrc}) belongs to the human/kinship noun class.`,
        });
        continue;
      }

      if (
        /\b(tree|river|mountain|fire|water|sun|moon|rain|wind|cloud|star|cow|goat|sheep|camel|lion|bird|fish|snake|dog|milk|grass|forest)\b/i.test(
          s
        )
      ) {
        const bId =
          familyType === "bantu"
            ? "trees"
            : familyType === "cushitic"
            ? "pastoral"
            : "fem";
        items.push({
          target: t,
          source: cleanSrc,
          bucketId: bId,
          explanation: `"${t}" (${cleanSrc}) belongs to the nature, ecology & livestock class.`,
        });
        continue;
      }

      if (
        /\b(house|door|pot|knife|spear|stool|basket|chair|book|food|shoe|cloth|one|two|three|four|five|ten)\b/i.test(
          s
        )
      ) {
        const bId = familyType === "bantu" ? "things" : "objects";
        items.push({
          target: t,
          source: cleanSrc,
          bucketId: bId,
          explanation: `"${t}" (${cleanSrc}) belongs to the artifacts, homestead & numerals class.`,
        });
      }
    }
    return shuffle(items).slice(0, SESSION_ROUNDS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allWords, familyType, sessionSeed]);

  const current = sortItems[round];

  const handleSelectBucket = (bucketId: string) => {
    if (pickedBucket !== null || !current) return;
    setPickedBucket(bucketId);
    const isRight = bucketId === current.bucketId;
    if (isRight) {
      playCorrectSfx();
      setScore((s) => s + 20);
      onAwardXp?.(20, false);
    } else {
      playWrongSfx();
    }

    setTimeout(() => {
      setPickedBucket(null);
      if (round + 1 >= sortItems.length) {
        playCelebrationSfx();
        setSessionDone(true);
        onAwardXp?.(0, true);
        onUpdateGameStats?.((prev) => ({ ...prev, nounClassBest: Math.max(prev.nounClassBest || 0, score + (isRight ? 20 : 0)) }));
      } else {
        setRound((r) => r + 1);
      }
    }, 1050);
  };

  if (sortItems.length === 0) {
    return (
      <p className="text-center text-sm text-text-muted py-8">
        Not enough categorized nouns/verbs in this scope. Switch the Vocabulary Scope above to Course or All Dictionary.
      </p>
    );
  }

  if (sessionDone) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="🗂️" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          Morphology &amp; Class Sorter Complete!
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          You classified {sortItems.length} {languageName} words ({score} pts).
        </p>
        <button
          type="button"
          onClick={() => {
            setRound(0);
            setScore(0);
            setPickedBucket(null);
            setSessionDone(false);
            setSessionSeed((s) => s + 1);
          }}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" /> Play Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs font-semibold text-text-muted">
          Item {round + 1} of {sortItems.length}
        </span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-6 text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/30 px-3 py-0.5 text-[0.6875rem] font-semibold text-gold">
          <Layers className="h-3 w-3" />{" "}
          {familyType === "bantu"
            ? `${languageName} Bantu Noun Class Sorter`
            : familyType === "cushitic"
            ? `${languageName} Cushitic Domain & Gender Sorter`
            : `${languageName} Nilotic Morphology Sorter`}
        </span>
        <p className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-gold">
          {current.target}
        </p>
        <p className="text-sm font-medium text-text-secondary">
          Meaning: &ldquo;{current.source}&rdquo;
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {buckets.map((b) => {
          let style = "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (pickedBucket !== null) {
            if (b.id === current.bucketId) {
              style = "border-kenya-green bg-kenya-green/15 text-kenya-green-light font-bold";
            } else if (pickedBucket === b.id) {
              style = "border-red-400 bg-red-400/10 text-red-400";
            }
          }
          return (
            <button
              key={b.id}
              type="button"
              disabled={pickedBucket !== null}
              onClick={() => handleSelectBucket(b.id)}
              className={`rounded-xl border-2 p-4 text-left transition-all cursor-pointer ${style}`}
            >
              <div className="text-sm font-bold">{b.label}</div>
              <div className="text-xs text-text-muted mt-0.5">{b.sublabel}</div>
            </button>
          );
        })}
      </div>

      {pickedBucket !== null && (
        <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 p-3 text-center text-xs text-gold font-medium">
          {current.explanation}
        </div>
      )}
    </div>
  );
}
