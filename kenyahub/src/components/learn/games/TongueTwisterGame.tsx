/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Flame, RotateCcw, Sparkles, Trophy } from "lucide-react";
import { luoTongueTwisters } from "@/data/courses/luo/tongue-twisters";
import {
  playKeyTapSfx,
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle, cleanQuizGloss } from "./shared";

interface TwisterItem {
  languageId: string;
  text: string;
  english: string;
  phoneticFocus: string;
}

const PAN_KENYAN_TWISTERS: TwisterItem[] = [
  ...luoTongueTwisters.map((t) => ({
    languageId: "luo",
    text: t.luo,
    english: t.english.replace(/\s*\(Practicing[^)]*\)\.?\s*$/i, ""),
    phoneticFocus: "Dholuo dental/alveolar contrasts (t/th, d/dh) & velar nasal ng'",
  })),
  {
    languageId: "swahili",
    text: "Katakata kiti cha kukalia kivulini",
    english: "Cut up the wooden chair for sitting in the shade.",
    phoneticFocus: "Kiswahili voiceless velar k- and palatal ch- alliteration",
  },
  {
    languageId: "swahili",
    text: "Wale watu saba walisema wataenda sokoni sasa",
    english: "Those seven people said they will go to the market now.",
    phoneticFocus: "Kiswahili labial-velar glide w- and alveolar sibilant s-",
  },
  {
    languageId: "kikuyu",
    text: "Kana ka Nikora kona kora kora",
    english: "When Nicholas's child sees a frog, the frog flees.",
    phoneticFocus: "Gĩkũyũ Diminutive Class 12 ka- prefix & tapped r",
  },
  {
    languageId: "kikuyu",
    text: "Mũndũ mũrũme mũkũrũ arĩ mũgũnda mũnene",
    english: "The elder man has a large cultivated garden.",
    phoneticFocus: "Gĩkũyũ open-mid vowel ũ [o] & prenasalized stops nd/ng",
  },
  {
    languageId: "luhya",
    text: "Omwana wa mama amala amatsi muli inzu",
    english: "Mother's child finished the water inside the house.",
    phoneticFocus: "Luluhya bilabial nasals m- and affricate ts-",
  },
  {
    languageId: "kalenjin",
    text: "Chepkondok che mengechen che miitei timin",
    english: "The little birds that are inside the forest.",
    phoneticFocus: "Kalenjin palatal ch- and long vowel -ee-",
  },
  {
    languageId: "kamba",
    text: "Kaana ka kaseo nĩendaa kahora mũtĩnĩ",
    english: "The good little child walks gently by the tree.",
    phoneticFocus: "Kĩkamba Class 12 ka- concord and open vowels ĩ/ũ",
  },
  {
    languageId: "somali",
    text: "Shimbiraha quruxda badan baa geedka dul fadhiya",
    english: "The beautiful birds are sitting atop the tree.",
    phoneticFocus: "Af-Soomaali uvular stop q- and retroflex d-",
  },
  {
    languageId: "maasai",
    text: "E-ton ol-moruo o-ibor te-boo en-kaji",
    english: "The white-haired elder sits outside the homestead house.",
    phoneticFocus: "Maa gender prefixes ol- (masc.) and en- (fem.)",
  },
];

export function TongueTwisterGame({
  languageId = "swahili",
  languageName,
  onAwardXp,
  onUpdateGameStats,
}: GameProps) {
  const [round, setRound] = useState(0);
  const [sessionSeed, setSessionSeed] = useState(0);
  const [score, setScore] = useState(0);
  const [tiles, setTiles] = useState<string[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [solved, setSolved] = useState<boolean | null>(null);
  const [sessionDone, setSessionDone] = useState(false);

  const deck = useMemo(() => {
    const langSpecific = PAN_KENYAN_TWISTERS.filter(
      (t) => t.languageId === languageId
    );
    const others = PAN_KENYAN_TWISTERS.filter(
      (t) => t.languageId !== languageId
    );
    return [...langSpecific, ...shuffle(others)].slice(0, 5);
  }, [languageId, sessionSeed]);

  const current = deck[round];
  const expectedWords = useMemo(
    () =>
      current
        ? current.text
            .replace(/[.!?]+$/g, "")
            .trim()
            .split(/\s+/)
        : [],
    [current]
  );

  const initRound = useCallback(() => {
    if (!current) return;
    const words = current.text
      .replace(/[.!?]+$/g, "")
      .trim()
      .split(/\s+/);
    setTiles(shuffle(words));
    setSelected([]);
    setSolved(null);
  }, [current]);

  useEffect(() => {
    initRound();
  }, [initRound]);

  const handleTap = (idx: number) => {
    if (solved !== null || selected.includes(idx)) return;
    playKeyTapSfx();
    const next = [...selected, idx];
    setSelected(next);

    if (next.length === tiles.length) {
      const attempt = next.map((i) => tiles[i]).join(" ").toLowerCase();
      const target = expectedWords.join(" ").toLowerCase();
      if (attempt === target) {
        playCorrectSfx();
        setSolved(true);
        setScore((s) => s + 25);
        onAwardXp?.(25, false);
      } else {
        playWrongSfx();
        setSolved(false);
        setTimeout(() => {
          setSelected([]);
          setSolved(null);
        }, 600);
      }
    }
  };

  if (sessionDone) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="🗣️" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          Kikokotoo Tongue-Twister Sprint Complete!
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          You mastered {deck.length} rapid articulation drills ({score} pts).
        </p>
        <button
          type="button"
          onClick={() => {
            setRound(0);
    setSessionSeed((s) => s + 1);
            setScore(0);
            setSessionDone(false);
          }}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" /> Practice Again
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
          Twister {round + 1} of {deck.length}
        </span>
      </div>

      <div className="mb-4 rounded-2xl border border-border bg-bg-card p-5 text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/30 px-3 py-0.5 text-[0.6875rem] font-semibold text-gold">
          <Sparkles className="h-3 w-3" /> {current.phoneticFocus}
        </span>
        <p className="text-xs text-text-muted">
          Assemble &amp; say aloud 3 times fast ({languageName} / Kenyan Phonetics):
        </p>
        <p className="text-base font-bold text-text-primary">
          &ldquo;{cleanQuizGloss(current.english) || current.english}&rdquo;
        </p>
      </div>

      <div
        className={`mb-4 flex min-h-[4rem] flex-wrap items-center justify-center gap-2 rounded-xl border-2 border-dashed p-3.5 ${
          solved === true
            ? "border-kenya-green bg-kenya-green/10"
            : solved === false
            ? "border-red-400 bg-red-400/10 animate-shake"
            : "border-border bg-bg-card/50"
        }`}
      >
        {selected.length > 0 ? (
          selected.map((tileIdx, pos) => (
            <button
              key={pos}
              type="button"
              disabled={solved === true}
              onClick={() =>
                setSelected((prev) => prev.filter((_, i) => i !== pos))
              }
              className="rounded-lg border border-gold/40 bg-gold/15 px-3 py-1.5 text-sm font-bold text-gold cursor-pointer"
            >
              {tiles[tileIdx]}
            </button>
          ))
        ) : (
          <p className="text-xs italic text-text-muted">
            Tap the alliterating words below in sequence...
          </p>
        )}
      </div>

      {solved !== true && (
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {tiles.map((w, idx) => {
            const used = selected.includes(idx);
            return (
              <button
                key={idx}
                type="button"
                disabled={used}
                onClick={() => handleTap(idx)}
                className={`rounded-xl border-2 px-3.5 py-2 text-sm font-bold transition-all cursor-pointer ${
                  used
                    ? "border-border/20 bg-bg-elevated/30 text-text-muted/25 cursor-not-allowed"
                    : "border-border bg-bg-card text-text-primary hover:border-gold/50 active:scale-95"
                }`}
              >
                {w}
              </button>
            );
          })}
        </div>
      )}

      {solved === true && (
        <div className="rounded-xl border border-kenya-green/40 bg-kenya-green/10 p-4 text-center space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-sm font-bold text-kenya-green-light">
            <Flame className="h-4 w-4 text-orange-400" /> Say it 3x aloud:{" "}
            <span className="text-gold">&ldquo;{current.text}&rdquo;</span>
          </div>
          <button
            type="button"
            onClick={() => {
              if (round + 1 >= deck.length) {
                playCelebrationSfx();
                setSessionDone(true);
                onAwardXp?.(0, true);
                onUpdateGameStats?.((prev) => ({ ...prev, twisterBest: Math.max(prev.twisterBest || 0, score) }));
              } else {
                setRound((r) => r + 1);
              }
            }}
            className="w-full rounded-xl bg-gold py-2.5 text-sm font-bold text-kenya-black hover:brightness-110 transition-all cursor-pointer"
          >
            {round + 1 >= deck.length ? "Finish Sprint →" : "Next Tongue Twister →"}
          </button>
        </div>
      )}
    </div>
  );
}
