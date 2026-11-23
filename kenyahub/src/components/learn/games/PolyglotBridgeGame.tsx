/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useMemo, useState } from "react";
import { Globe2, RotateCcw, Trophy } from "lucide-react";
import {
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle, cleanQuizGloss, pickBalancedDistractors } from "./shared";

interface CognateRow {
  concept: string;
  family: string;
  entries: { lang: string; word: string }[];
  question: string;
  correctAnswer: string;
  distractors: string[];
  linguisticNote: string;
}

const KENYAN_COGNATE_BANK: CognateRow[] = [
  {
    concept: "Water",
    family: "Bantu / Nilotic / Cushitic",
    entries: [
      { lang: "Kiswahili", word: "maji" },
      { lang: "Gĩkũyũ", word: "maĩ" },
      { lang: "Kĩkamba", word: "maanzĩ" },
      { lang: "Dholuo", word: "pi" },
      { lang: "Af-Soomaali", word: "biyo" },
    ],
    question: "Which Gĩkũyũ & Kĩkamba pair shares the Proto-Bantu *ma-njɪ root with Swahili 'maji' (Water)?",
    correctAnswer: "maĩ (Gĩkũyũ) & maanzĩ (Kĩkamba)",
    distractors: [
      "pi (Dholuo) & beek (Kalenjin)",
      "biyo (Somali) & bishaan (Borana)",
      "ng'akipi (Turkana) & akipi (Ateso)",
    ],
    linguisticNote:
      "Bantu Class 6 liquid nouns preserve the ancient *ma- prefix across Swahili (maji), Gĩkũyũ (maĩ), Kĩkamba (maanzĩ), Luluhya (amatsi), and Ekegusii (amache).",
  },
  {
    concept: "People / Humanity",
    family: "Bantu Class 1/2",
    entries: [
      { lang: "Kiswahili", word: "mtu / watu" },
      { lang: "Gĩkũyũ", word: "mũndũ / andũ" },
      { lang: "Luluhya", word: "omundu / abandu" },
      { lang: "Ekegusii", word: "omonto / abanto" },
    ],
    question: "What does the shared Bantu root -ndu / -ntu / -tu signify across Swahili, Gĩkũyũ, Luluhya, and Ekegusii?",
    correctAnswer: "Person or human being",
    distractors: [
      "Flowing river or stream",
      "Cattle kraal or homestead",
      "Mountain peak or ridge",
    ],
    linguisticNote:
      "The Proto-Bantu root *-ntʊ̀ ('person') appears across all Kenyan Bantu languages: mtu (Swahili), mũndũ (Gĩkũyũ/Kĩkamba/Kĩembu), omundu (Luhya), and omonto (Ekegusii).",
  },
  {
    concept: "Cattle / Cow",
    family: "Eastern Nilotic (Maa) & Highland Nilotic",
    entries: [
      { lang: "Maa (Maasai)", word: "en-kiteng' / in-kishu" },
      { lang: "Samburu", word: "nkiteng' / nkishu" },
      { lang: "Ilchamus", word: "nkiteng' / nkishu" },
      { lang: "Kalenjin", word: "teta / tuga" },
    ],
    question: "Which three Kenyan Maa languages share the cognate 'kiteng' / kishu' for Cow / Cattle?",
    correctAnswer: "Maasai, Samburu & Ilchamus",
    distractors: [
      "Somali, Borana & Rendille",
      "Dholuo, Luluhya & Ekegusii",
      "Kipokomo, Mijikenda & Kidaw'ida",
    ],
    linguisticNote:
      "Maasai, Samburu (Sampur), and Ilchamus form the closely related Maa branch of Eastern Nilotic, sharing feminine prefix en-/n- and plural in-/n-.",
  },
  {
    concept: "Two Eyes",
    family: "Cushitic & Nilotic & Bantu",
    entries: [
      { lang: "Af-Soomaali", word: "il / indho" },
      { lang: "Borana Oromo", word: "ija" },
      { lang: "Af-Rendille", word: "il / indo" },
      { lang: "Daasanach", word: "ʔíl" },
    ],
    question: "Across Lowland East Cushitic languages of Northern Kenya (Somali, Borana, Rendille, Daasanach), what does the root 'il / ija / indo' mean?",
    correctAnswer: "Eye / Eyes",
    distractors: [
      "Camel / Herd of camels",
      "Morning star / Dawn",
      "Iron spear / Shield",
    ],
    linguisticNote:
      "Somali (il/indho), Rendille (il/indo), Borana (ija), and Daasanach (ʔíl) preserve the Afroasiatic Lowland East Cushitic root for 'eye'.",
  },
  {
    concept: "Three (Numeral 3)",
    family: "Pan-Bantu Numeral Cognates",
    entries: [
      { lang: "Kiswahili", word: "-tatu" },
      { lang: "Gĩkũyũ", word: "igĩrĩ / ithatũ" },
      { lang: "Kĩkamba", word: "itatũ" },
      { lang: "Mijikenda", word: "hahu" },
    ],
    question: "In Coastal Mijikenda & Kipokomo, Proto-Bantu *t (as in Swahili 'tatu', three) regularly shifts to which sound in 'hahu'?",
    correctAnswer: "Voiceless glottal 'h'",
    distractors: [
      "Labial click 'c'",
      "Alveolar trill 'rr'",
      "Velar nasal 'ng''",
    ],
    linguisticNote:
      "A hallmark sound law of Mijikenda and Kipokomo is lenition of Proto-Bantu *t to h: *tatu ('three') → hahu, and *m-ti ('tree') → muhi.",
  },
  {
    concept: "Milk",
    family: "Nilotic & Cushitic Pastoral Lexicon",
    entries: [
      { lang: "Dholuo", word: "chak" },
      { lang: "Kalenjin", word: "chego" },
      { lang: "Pökoot", word: "chepo" },
      { lang: "Ateso", word: "akile" },
      { lang: "Ng'aturkana", word: "ng'akile" },
    ],
    question: "Which pair of Kenyan languages shares the Eastern Nilotic Ateker root '-kile' for Milk?",
    correctAnswer: "Ng'aturkana (ng'akile) & Ateso (akile)",
    distractors: [
      "Dholuo (chak) & Kalenjin (chego)",
      "Kiswahili (maziwa) & Gĩkũyũ (iria)",
      "Af-Soomaali (caano) & Borana (aannan)",
    ],
    linguisticNote:
      "Turkana and Ateso belong to the Ateker (Teso-Turkana) cluster of Eastern Nilotic, while Dholuo (chak) and Kalenjin/Pökoot (chego/chepo) share a Western/Southern Nilotic dairy root.",
  },
];

export function PolyglotBridgeGame({ onAwardXp, onUpdateGameStats }: GameProps) {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [sessionSeed, setSessionSeed] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);

  const deck = useMemo(
    () => shuffle(KENYAN_COGNATE_BANK),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sessionSeed]
  );

  const current = deck[round];
  const cleanCorrect = current ? current.correctAnswer || current.correctAnswer : "";
  const options = useMemo(() => {
    if (!current) return [];
    const balanced = pickBalancedDistractors(cleanCorrect, current.distractors, 3);
    return shuffle([cleanCorrect, ...(balanced.length === 3 ? balanced : current.distractors.map((d) => cleanQuizGloss(d) || d))]);
  }, [current, cleanCorrect]);

  const handlePick = (opt: string) => {
    if (picked !== null || !current) return;
    setPicked(opt);
    const isRight = opt === cleanCorrect;
    if (isRight) {
      playCorrectSfx();
      setScore((s) => s + 25);
      onAwardXp?.(25, false);
    } else {
      playWrongSfx();
    }
  };

  const handleNext = () => {
    setPicked(null);
    if (round + 1 >= deck.length) {
      playCelebrationSfx();
      setSessionDone(true);
      onAwardXp?.(0, true);
      onUpdateGameStats?.((prev) => ({ ...prev, polyglotBest: Math.max(prev.polyglotBest || 0, score) }));
    } else {
      setRound((r) => r + 1);
    }
  };

  if (sessionDone) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="🌍" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          Polyglot Cognate Bridge Complete!
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          You compared Bantu, Nilotic, and Cushitic roots across Kenya ({score} pts).
        </p>
        <button
          type="button"
          onClick={() => {
            setRound(0);
            setScore(0);
            setPicked(null);
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

  if (!current) return null;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs font-semibold text-text-muted">
          Bridge {round + 1} of {deck.length}
        </span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/30 px-3 py-0.5 text-[0.6875rem] font-bold text-gold">
            <Globe2 className="h-3.5 w-3.5" /> Concept: {picked !== null ? current.concept : "???"}
          </span>
          <span className="text-xs text-text-muted">{current.family}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          {current.entries.map((e, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/70 bg-bg-elevated/60 px-3 py-2 text-center"
            >
              <div className="text-[0.65rem] text-text-muted font-medium">{e.lang}</div>
              <div className="text-sm font-bold text-gold mt-0.5">{e.word}</div>
            </div>
          ))}
        </div>

        <p className="text-sm sm:text-base font-bold text-text-primary pt-2 text-center">
          {current.question}
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt, idx) => {
          let style = "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (picked !== null) {
            if (opt === cleanCorrect) {
              style = "border-kenya-green bg-kenya-green/15 text-kenya-green-light font-bold";
            } else if (picked === opt) {
              style = "border-red-400 bg-red-400/10 text-red-400";
            }
          }
          return (
            <button
              key={idx}
              type="button"
              disabled={picked !== null}
              onClick={() => handlePick(opt)}
              className={`rounded-xl border-2 p-4 text-left text-sm font-semibold transition-all cursor-pointer ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 p-4 space-y-3">
          <p className="text-xs text-text-secondary leading-relaxed">
            <strong className="text-gold">Comparative Linguistics Note:</strong>{" "}
            {current.linguisticNote}
          </p>
          <button
            type="button"
            onClick={handleNext}
            className="w-full rounded-xl bg-gold py-2.5 text-sm font-bold text-kenya-black hover:brightness-110 transition-all cursor-pointer"
          >
            {round + 1 >= deck.length ? "Finish Bridge →" : "Next Cognate Bridge →"}
          </button>
        </div>
      )}
    </div>
  );
}
