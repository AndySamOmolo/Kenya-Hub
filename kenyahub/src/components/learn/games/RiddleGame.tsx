/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useMemo, useState } from "react";
import { Trophy } from "lucide-react";
import { type GameProps } from "./shared";

interface RiddleItem {
  riddle: string;
  translation: string;
  answer: string;
  origin: string;
}

const TRADITIONAL_RIDDLES_BY_LANGUAGE: Record<string, RiddleItem[]> = {
  swahili: [
    { riddle: "Nyumba yangu haina mlango", translation: "My house has no door", answer: "Yai (An egg)", origin: "Swahili — Kitendawili" },
    { riddle: "Hutembea na mguu mmoja", translation: "It stands and walks on a single leg", answer: "Uyoga (A mushroom)", origin: "Swahili — Kitendawili" },
    { riddle: "Nikikata siachi alama", translation: "When I cut it, I leave no mark behind", answer: "Maji (Water)", origin: "Swahili — Kitendawili" },
    { riddle: "Kila niendapo ananifuata", translation: "Wherever I go, it follows me", answer: "Kivuli (My shadow)", origin: "Swahili — Kitendawili" },
    { riddle: "Hana miguu lakini anakimbia", translation: "It has no legs, yet it runs continuously", answer: "Mto (A river)", origin: "Swahili — Kitendawili" },
    { riddle: "Askari wangu wote wamevaa kofia nyeupe", translation: "All my soldiers wear white caps", answer: "Meno (Teeth)", origin: "Swahili — Kitendawili" },
  ],
  luo: [
    { riddle: "Oda ma onge dhoot", translation: "My house that has no door", answer: "Tong' gweno (An egg)", origin: "Dholuo — Ngero" },
    { riddle: "Nyarwa ma dhi tedo to ok duog dala", translation: "Our daughter who goes on a journey and never turns back home", answer: "Pi aora (River water)", origin: "Dholuo — Ngero" },
    { riddle: "Jodongo ariyo ma dak machiegni to ok ginenre", translation: "Two elders who live side by side but never see each other", answer: "Wang' (The two eyes)", origin: "Dholuo — Ngero" },
    { riddle: "Law Nyasaye ma oumo piny duto", translation: "God's garment that covers the whole earth", answer: "Polo gi mudho (Sky & nightfall)", origin: "Dholuo — Ngero" },
    { riddle: "Chiemo ma chiek e i lowo", translation: "Food that ripens beneath the soil", answer: "Rabuon (Sweet potatoes)", origin: "Dholuo — Ngero" },
  ],
  luhya: [
    { riddle: "Ndi ne bakhasi bange bali ne bisombo boosi", translation: "I have my wives who all wear hair tufts", answer: "Kamaemba (Sorghum heads)", origin: "Lubukusu — Kencorpus Kiminaayi" },
    { riddle: "Omukhana ali ewenywe karunga chimbele", translation: "The girl at your home pays bridewealth in front", answer: "Chikhanu (Simsim / sesame pods)", origin: "Lubukusu — Kencorpus Kiminaayi" },
    { riddle: "Papa abirire khuno omurochake", translation: "Father passed by here hunched over", answer: "Sinywa (A bee)", origin: "Lubukusu — Kencorpus Kiminaayi" },
    { riddle: "Tauti mwisamba", translation: "David on the hillside", answer: "Enda musitweya (A louse in the hair)", origin: "Lubukusu — Kencorpus Kiminaayi" },
    { riddle: "Ndi ne khafu yase ekenda nesala", translation: "I have my cow that walks while giving birth", answer: "Lisiemo (Grinding / planting stone)", origin: "Lubukusu — Kencorpus Kiminaayi" },
    { riddle: "Kwagani na guga ne likoti limwamu", translation: "We met grandfather wearing a black coat", answer: "Lugiita (A louse)", origin: "Lulogooli — Project Tafsiri v2.0" },
  ],
  kikuyu: [
    { riddle: "Mũندũ ũtathiaga na ndarĩ mũciĩ", translation: "What hangs down without walking away?", answer: "Marigũ (Bananas)", origin: "Gĩkũyũ — Ndai / Guso" },
    { riddle: "Aanake mathiĩ, athuri matigwo", translation: "The young men depart, the elders remain behind", answer: "Mũhu na mahiga ma riiko (Ashes & three hearthstones)", origin: "Gĩkũyũ — Routledge 1910" },
    { riddle: "Kĩrĩa kĩambatanagia kĩrĩma na kĩrĩma", translation: "What travels from hill to hill?", answer: "Kũgũrũ (The foot)", origin: "Gĩkũyũ — Routledge 1910" },
    { riddle: "Nyũmba yakwa ndĩrĩ mũromo", translation: "My house has no doorway", answer: "Itumbĩ (An egg)", origin: "Gĩkũyũ — Ndai" },
  ],
  maasai: [
    { riddle: "A-ata in-gishu ainei naa-nyokioo pokira, ne-ton ol-kiteng orok te-polos", translation: "My cattle are all red, and a dark bullock stands in their midst", answer: "Il-ala o en-gineji (Teeth & tongue)", origin: "Maasai — Hollis 1905 'L-oyeti" },
    { riddle: "En-gaji nabo na-ata il-turrur aare", translation: "One house with two passages", answer: "En-gume (The nose)", origin: "Maasai — Hollis 1905 'L-oyeti" },
    { riddle: "E-ton ol-moruo te-boo ne-iput il-kilani en-gaji", translation: "The elder sits outside while his cloak fills the house", answer: "En-gima o e-puruo (Fire & smoke)", origin: "Maasai — Hollis 1905 'L-oyeti" },
  ],
  pokot: [
    { riddle: "Rel-e' ti'-chu lopai, pirir kirokit", translation: "All my cattle are white, and the bull is red", answer: "Kelat ngô ñgaliep (Teeth & tongue)", origin: "Pökoot — Beech 1911 Tiangoi" },
    { riddle: "Kô-p-chii nya-ma-tiñget-nye kôkat", translation: "A little hut that has no door", answer: "Rotin (An egg)", origin: "Pökoot — Beech 1911 Tiangoi" },
    { riddle: "Kô-p-chii ki-soch ket okoñgô", translation: "A hut propped up by a single pole", answer: "Wôton (A mushroom)", origin: "Pökoot — Beech 1911 Tiangoi" },
    { riddle: "Tuku-chu cha-chang, m-o-nget-an-nye a-iyit", translation: "My things are many; I cannot count them", answer: "Kokel (The stars)", origin: "Pökoot — Beech 1911 Tiangoi" },
  ],
  kamba: [
    { riddle: "Nyũmba yakwa ndĩ na mũomo", translation: "My house has no door", answer: "Ĩtumbĩ (An egg)", origin: "Kĩkamba — Ndai (Lindblom 1920 & Kikamba Corpus)" },
    { riddle: "Kĩla vandũ nĩendaa nĩkũatĩĩaa", translation: "Wherever I walk, it follows me closely", answer: "Kyuu (A shadow)", origin: "Kĩkamba — Ndai" },
    { riddle: "Mũũnda wakwa wĩ mbemba syĩ nzaũ nũndũ wa ũtukũ", translation: "My field is full of white maize only at night", answer: "Ndata sya matunĩ (Stars in the night sky)", origin: "Kĩkamba — Ndai" },
  ],
  kalenjin: [
    { riddle: "Kootap chepkondok che ma tinyei kurget", translation: "A little house that has no door", answer: "Mayiat (An egg)", origin: "Kalenjin — Tangochik (Hollis 1909 & ThinkKenya)" },
    { riddle: "Kirukik che eechen che miitei timin", translation: "Two bulls fighting in the forest", answer: "Kipkelenyik (Grinding stones)", origin: "Kalenjin — Tangochik" },
    { riddle: "Teta ne wendi ama weeksei", translation: "A cow that goes forth and never turns back", answer: "Beekab ainet (River water)", origin: "Kalenjin — Tangochik" },
  ],
  kisii: [
    { riddle: "Enka yane ebate mioro", translation: "My house has no doorway", answer: "Egetumbi (An egg)", origin: "Ekegusii — Ebitandawili" },
    { riddle: "Omonto okogenda binto atari n'amagoro", translation: "One who travels far without legs", answer: "Amache y'oroche (River water)", origin: "Ekegusii — Ebitandawili" },
  ],
  meru: [
    { riddle: "Nyũmba yakwa ĩtĩrĩ mũromo", translation: "My house has no doorway", answer: "Ĩtumbĩ (An egg)", origin: "Kĩmĩĩrũ — Ndaĩ (Thiomi & Champion 1912)" },
    { riddle: "Kathũrĩ gakũrũ gaitũ gatũũraga mũtitũ", translation: "Our little elder who always lives in the forest", answer: "Njũkĩ (A honeybee)", origin: "Kĩmĩĩrũ — Ndaĩ" },
  ],
  somali: [
    { riddle: "Aqalkaygu albaab ma laha", translation: "My house has no door", answer: "Ukun / Beed (An egg)", origin: "Somali — Halxiraale (Kirk 1903 & Thiomi)" },
    { riddle: "Mar walba oo aan socdo wuu i raacaa", translation: "Whenever I walk, it accompanies me", answer: "Hooska (A shadow)", origin: "Somali — Halxiraale" },
  ],
  borana: [
    { riddle: "Manni kiyya balbala hin qabu", translation: "My house has no door", answer: "Hanqaaquu / Buuphaa (An egg)", origin: "Borana — Hibboo (SMOL & Krapf 1840)" },
    { riddle: "Loon kiyya adii qofa, kormi diimaa gidduu dhaabbata", translation: "All my cattle are white, and a red bull stands in their midst", answer: "Ilkaan fi arraba (Teeth and tongue)", origin: "Borana — Hibboo" },
  ],
  mijikenda: [
    { riddle: "Nyumba yangu k'aina muryango", translation: "My house has no doorway", answer: "Iji (An egg)", origin: "Mijikenda — Chondoni (Krapf & Rebmann 1887)" },
    { riddle: "Nenda kuno na kuno sioni mwisho", translation: "I walk this way and that way and see no end", answer: "Njira (A road / path)", origin: "Mijikenda — Chondoni" },
  ],
  taita: [
    { riddle: "Nyumba yangu ndina mjango", translation: "My house has no door", answer: "Igi (An egg)", origin: "Kidaw'ida — Ndai (ThinkKenya & Wray 1894)" },
    { riddle: "Mndu ugendaga bila maghu", translation: "A traveler who walks without feet", answer: "Machi ga mto (River water)", origin: "Kidaw'ida — Ndai" },
  ],
  turkana: [
    { riddle: "Akai kang' emam ekidor", translation: "My house has no gate", answer: "Abulon (An egg)", origin: "Ng'aturkana — Barton 1921 & SIL Bloom" },
    { riddle: "Ng'atuk kang' akwang'ak bon, emong' erenga kidiama", translation: "All my cattle are white, with a red ox in the middle", answer: "Ng'ikyela ka ang'ajep (Teeth & tongue)", origin: "Ng'aturkana — Ateker Riddle" },
  ],
  teso: [
    { riddle: "Etogo ka emamei ekek", translation: "My house has no door", answer: "Abeele (An egg)", origin: "Ateso — Sunbird SALT & Kitching 1915" },
    { riddle: "Aicerit na elotari komamei akejen", translation: "That which journeys far without legs", answer: "Akipi (River water)", origin: "Ateso — Proverbial Riddle" },
  ],
};

export function RiddleGame({ allWords, languageName }: GameProps) {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const riddlesPool = useMemo(() => {
    const langKey = (languageName || "").toLowerCase();
    let matchedKey = "";
    for (const k of Object.keys(TRADITIONAL_RIDDLES_BY_LANGUAGE)) {
      if (langKey.includes(k) || (k === "luo" && langKey.includes("dholuo")) || (k === "kikuyu" && langKey.includes("gĩkũyũ"))) {
        matchedKey = k;
        break;
      }
    }

    const baseRiddles: RiddleItem[] = matchedKey
      ? [...TRADITIONAL_RIDDLES_BY_LANGUAGE[matchedKey]]
      : Object.values(TRADITIONAL_RIDDLES_BY_LANGUAGE).flat();

    // Also build interactive vocabulary clues from the course's own words
    const cleanWords = (allWords || []).filter(
      (w) => w.target && w.source && w.target.length <= 40 && w.source.length <= 50
    );
    const wordClues: RiddleItem[] = cleanWords.slice(0, 12).map((w) => ({
      riddle: w.target,
      translation: `Which ${languageName || "Kenyan"} meaning matches this term?`,
      answer: `${w.source} (${w.target})`,
      origin: `${languageName || "Course"} Vocabulary Riddle`,
    }));

    return [...baseRiddles, ...wordClues];
  }, [allWords, languageName]);

  const currentRiddle = riddlesPool[round % riddlesPool.length];
  const options = useMemo(() => {
    const distractors = riddlesPool
      .filter((r) => r.answer !== currentRiddle.answer)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((r) => r.answer);
    return [currentRiddle.answer, ...distractors].sort(() => Math.random() - 0.5);
  }, [currentRiddle, riddlesPool]);

  const handlePick = (ans: string) => {
    if (feedback !== null) return;
    const isRight = ans === currentRiddle.answer;
    setFeedback(ans);
    if (isRight) setScore((s) => s + 20);
    setTimeout(() => {
      setFeedback(null);
      setRound((r) => r + 1);
    }, 800);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs text-text-muted">Round {round + 1}</span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-6 text-center">
        <p className="text-xs text-gold font-medium mb-1.5">{currentRiddle.origin}</p>
        <p className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-bold text-text-primary mb-2">
          &ldquo;{currentRiddle.riddle}&rdquo;
        </p>
        <p className="text-xs text-text-secondary italic">{currentRiddle.translation}</p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt) => {
          let btnStyle = "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (feedback !== null) {
            if (opt === currentRiddle.answer) {
              btnStyle = "border-kenya-green bg-kenya-green/10 text-kenya-green font-bold";
            } else if (feedback === opt) {
              btnStyle = "border-red-400 bg-red-400/10 text-red-400";
            }
          }
          return (
            <button
              key={opt}
              disabled={feedback !== null}
              onClick={() => handlePick(opt)}
              className={`rounded-xl border-2 p-4 text-left text-sm font-medium transition-all active:scale-[0.98] ${btnStyle}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
