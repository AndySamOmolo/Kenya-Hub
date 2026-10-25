// ============================================================
// Dholuo (Luo) Language Configuration & Course Adapter
// ============================================================

import type { Exercise, LanguageConfig, CourseUnit, CourseSkill, GrammarSection } from '../types';
import { luoProverbs } from './proverbs';
import { luoRiddles } from './riddles';
import { luoTongueTwisters } from './tongue-twisters';

export const LUO_CONFIG: LanguageConfig = {
  id: 'luo',
  name: 'Dholuo',
  nativeName: 'Dholuo',
  family: 'Nilotic',
  counties: ['Kisumu', 'Siaya', 'Homa Bay', 'Migori'],
  speakers: '5.8M',
  speechLocale: '',
  description: 'A River-Lake Nilotic language spoken in the Lake Victoria basin of Western Kenya.',
  color: '#D4A843',
};

/**
 * ============================================================================
 * COMPLETE DHOLUO (NILOTIC KAVIRONDO) LANGUAGE COURSE
 * ============================================================================
 * Source Text: "A Handbook of the Kavirondo Language"
 * Authors: Some Fathers of St. Joseph's Society (Mill-Hill, London)
 * Published: Kisumu / Printed at the Caxton Printing & Publishing Works, Nairobi (1920/1921)
 *
 * This TypeScript module provides a complete, strongly-typed curriculum for
 * learning Dholuo (Luo), covering phonology, noun morphology, the construct
 * possessive system, adjectives, numerals, pronouns, verb conjugation across
 * all moods and tenses, syntax, situational dialogues, exercises, and
 * programmatic morphological helper functions.
 */

export type PartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "numeral"
  | "pronoun"
  | "adverb"
  | "preposition"
  | "conjunction"
  | "interjection"
  | "salutation"
  | "proper_noun";

export interface ExampleSentence {
  luo: string;
  english: string;
  literalTranslation?: string;
  grammarNote?: string;
}

export interface GrammarRule {
  id: string;
  title: string;
  explanation: string;
  subRules?: string[];
  exceptions?: string[];
  examples: ExampleSentence[];
  sourcePages: number[];
}

export interface MorphologyTransformation {
  category: string;
  patternDescription: string;
  singularOrBaseEnding: string;
  transformedEnding: string;
  examples: Array<{
    baseForm: string;
    baseMeaning: string;
    transformedForm: string;
    transformedMeaning: string;
  }>;
  exceptions?: Array<{
    baseForm: string;
    baseMeaning: string;
    transformedForm: string;
    note?: string;
  }>;
}

export interface ConjugationRow {
  person: "1s" | "2s" | "3s" | "1p" | "2p" | "3p";
  pronounLabel: string;
  affirmative: string[];
  negative?: string[];
  englishAffirmative: string;
  englishNegative?: string;
}

export interface VerbParadigm {
  tenseOrMood: string;
  formationRule: string;
  usageNotes: string[];
  rows: ConjugationRow[];
  examples: ExampleSentence[];
  sourcePages: number[];
}

export interface Lesson {
  lessonId: string;
  title: string;
  summary: string;
  sourcePages: number[];
  grammarRules: GrammarRule[];
  morphologyTables?: MorphologyTransformation[];
  verbParadigms?: VerbParadigm[];
  keyVocabulary: Array<{
    luo: string;
    english: string;
    partOfSpeech: PartOfSpeech;
    notes?: string;
  }>;
}

export interface DialogueSection {
  sectionId: string;
  title: string;
  contextDescription: string;
  sourcePages: number[];
  exchanges: Array<{
    english: string;
    luo: string;
    notes?: string;
  }>;
}

export interface CourseExerciseItem {
  promptEnglish: string;
  solutionLuo: string;
  grammarFocus: string;
  explanation?: string;
}

export interface CourseExerciseSet {
  exerciseId: string;
  title: string;
  focusTopics: string[];
  sourcePages: number[];
  fullOriginalPromptText: string;
  guidedItems: CourseExerciseItem[];
}

export interface CourseModule {
  moduleId: string;
  moduleNumber: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface LuoLanguageCourse {
  courseTitle: string;
  languageName: string;
  isoCode: string;
  dialectRegion: string;
  historicalSource: {
    title: string;
    authors: string;
    locationAndDate: string;
    dedication: string;
    relatedNiloticLanguages: string[];
  };
  modules: CourseModule[];
  phrasebookSections: DialogueSection[];
  exercises: CourseExerciseSet[];
}

// ============================================================================
// COURSE MODULES 1 - 8 (COMPLETE GRAMMAR & MORPHOLOGY CURRICULUM)
// ============================================================================

export const COURSE_MODULES: CourseModule[] = [
  // --------------------------------------------------------------------------
  // MODULE 1: ALPHABET, PHONOLOGY, STRESS & ORTHOGRAPHY (Pages 1 - 4)
  // --------------------------------------------------------------------------
  {
    moduleId: "mod-1-phonology-orthography",
    moduleNumber: 1,
    title: "Alphabet, Phonology, Stress & Orthography",
    description:
      "Master the consonant and vowel inventory of Dholuo (Nilotic Kavirondo), including dental vs. alveolar stops, nasal compounds (Mb, Nd, Ng, Ng', Ny), vowel quality, penultimate vs. final-consonant stress, and vowel elision in connected speech.",
    lessons: [
      {
        lessonId: "les-1-1-alphabet-consonants",
        title: "The Consonants and Nasal Compounds",
        summary:
          "Dholuo distinguishes 17 single/digraph consonants and 5 special prenasalized or nasal consonants (Mb, Nd, Ng, Ng', Ny) that must be pronounced without adding an initial vowel.",
        sourcePages: [1, 2],
        grammarRules: [
          {
            id: "rule-consonants-standard",
            title: "Standard Consonants and Dental Digraphs (Dh, Th)",
            explanation:
              "Standard consonants B, Ch (as in Kiswahili), D, F, G (always hard as in 'gab'), H, J (as in Kiswahili), K, L, M, N, P, R, S, T are complemented by interdental digraphs 'Dh' (voiced, as in 'though') and 'Th' (voiceless, as in 'thatch').",
            examples: [
              { luo: "Bam", english: "to be crooked" },
              { luo: "Chak", english: "milk" },
              { luo: "Dhiyo", english: "to go", grammarNote: "Dh as in 'though'" },
              { luo: "Puodho", english: "garden" },
              { luo: "Thedho", english: "to forge", grammarNote: "Th as in 'thatch'" },
              { luo: "Thieth", english: "a cure" }
            ],
            sourcePages: [1]
          },
          {
            id: "rule-consonants-nasals",
            title: "Double and Nasal Consonants (Mb, Nd, Ng, Ng', Ny)",
            explanation:
              "At the beginning of a word, Mb, Nd, Ng', and Ny are pronounced as single sounds without an epenthetic initial vowel. Crucially, 'Ng' (without apostrophe) represents the double sound [ŋg] as in English 'finger', whereas 'Ng'' (with apostrophe) is the pure velar nasal [ŋ] as in 'song'.",
            subRules: [
              "Mb: One prenasalized bilabial sound at the start of a word.",
              "Nd: One prenasalized alveolar sound at the start of a word (e.g., Ndawa: tobacco).",
              "Ng: Double sound (Ng' + g), pronounced like 'ng' in 'finger' (e.g., Ngege: carp).",
              "Ng': Distinct velar nasal, like 'ng' in 'song' (e.g., Ng'owo: figtree, Bang': after).",
              "Ny: Palatal nasal pronounced as one sound (e.g., Nyako: girl, Piny: country)."
            ],
            examples: [
              { luo: "Ndawa", english: "tobacco" },
              { luo: "Ndemo", english: "tweezers" },
              { luo: "Ngege", english: "carp (tilapia)" },
              { luo: "Ng'owo", english: "a figtree" },
              { luo: "Nyako", english: "girl" },
              { luo: "Piny", english: "country" }
            ],
            sourcePages: [1, 2]
          }
        ],
        keyVocabulary: [
          { luo: "Chak", english: "milk", partOfSpeech: "noun" },
          { luo: "Wacho", english: "to speak", partOfSpeech: "verb" },
          { luo: "Tedo", english: "to cook", partOfSpeech: "verb" },
          { luo: "Dhiyo", english: "to go", partOfSpeech: "verb" },
          { luo: "Puodho", english: "garden", partOfSpeech: "noun" },
          { luo: "Kelo", english: "to bring", partOfSpeech: "verb" },
          { luo: "Lamo", english: "to worship, adore", partOfSpeech: "verb" },
          { luo: "Min", english: "mother", partOfSpeech: "noun" },
          { luo: "Limo", english: "to visit", partOfSpeech: "verb" },
          { luo: "Nego", english: "to kill", partOfSpeech: "verb" },
          { luo: "Neno", english: "to see", partOfSpeech: "verb" },
          { luo: "Moso", english: "to greet", partOfSpeech: "verb" },
          { luo: "Tado", english: "roof", partOfSpeech: "noun" },
          { luo: "Rito", english: "to watch", partOfSpeech: "verb" }
        ]
      },
      {
        lessonId: "les-1-2-vowels-stress-elision",
        title: "Vowels, Semi-Vowels, Stress, and Elision",
        summary:
          "Learn Dholuo vowel qualities, the dual behavior of Y and W, word-stress placement, syllable division, and vowel elision in natural speech.",
        sourcePages: [2, 3, 4],
        grammarRules: [
          {
            id: "rule-vowels-semivowels",
            title: "Vowel Qualities and Semi-Vowels (Y, W)",
            explanation:
              "Each of the five vowel letters (A, E, I, O, U) represents multiple open/close qualities (e.g., A as in 'father' vs. 'fat'; E as in 'lake', 'hen', or French 'père'; O as in 'coach', 'song', or 'law'). 'Y' before a consonant acts as a semi-vowel resembling 'i' (Yweyo: to sweep), but before a vowel is a pure consonant (Yako: to rob). 'W' is a semi-vowel with a preceding 'u' glide in words like 'Yweyo' (to breathe), and a pure consonant in 'Wacho' (to speak).",
            examples: [
              { luo: "Mako", english: "to hold" },
              { luo: "Kal", english: "wimbi (finger millet)" },
              { luo: "Lemo", english: "to pray" },
              { luo: "Lendo", english: "to clean" },
              { luo: "Ler", english: "to be clean" },
              { luo: "Kwongo", english: "to begin" },
              { luo: "Loko", english: "to change" },
              { luo: "Yweyo", english: "to sweep / to breathe" },
              { luo: "Yako", english: "to rob" }
            ],
            sourcePages: [2, 3]
          },
          {
            id: "rule-stress-and-lengthening",
            title: "Accent (Stress) and Emphatic Lengthening",
            explanation:
              "1. In words ending with a vowel, the accent is on the penultimate syllable and remains fixed on that syllable even when plural or demonstrative suffixes are added (Pála -> Pélinigo). 2. In words ending in a consonant, the accent falls on the last syllable (Manyakachiéng'). 3. Vowels may be drawn out to great length for emphasis.",
            examples: [
              { luo: "Pála -> Pélinigo", english: "knife -> those knives" },
              { luo: "Manyakachieng'", english: "eternal" },
              { luo: "A-a-a-a-uchiel", english: "six (emphatic)" },
              { luo: "Cho-o-o-o-n", english: "formerly, early (emphatic)" }
            ],
            sourcePages: [3]
          },
          {
            id: "rule-elision-and-variants",
            title: "Vowel Elision and Consonant Variations in Writing",
            explanation:
              "In conversation, the final vowel of a word generally drops before the initial vowel of the following word. Specifically, the 'a' of 'Ka', 'Da', and 'Ma' drops before a vowel or 'w', and the final 'i' of 'Di', 'Gi', 'Kodi', and 'Ki' drops before a vowel. Dialectally, 'h' often interchanges with 'f' (Hulo/Fulo), 'p' with 'f' (Podi/Fodi), initial 'i' with 'y' (Im/Yim), and initial 'o' may drop (Oyieyo/Yieyo).",
            examples: [
              { luo: "Ng'at(o) achiel obir(o) oma", english: "One man comes to fetch me" },
              { luo: "K'wagero ot", english: "When we build a house (Ka + wagero)" },
              { luo: "D'atiyo", english: "If I work (Da + atiyo)" },
              { luo: "Pod'onindo", english: "He is still asleep (Podi + onindo)" },
              { luo: "Podik'abiro", english: "I have not come yet (Podi + ki + abiro)" }
            ],
            sourcePages: [3, 4]
          }
        ],
        keyVocabulary: [
          { luo: "Pala", english: "knife", partOfSpeech: "noun" },
          { luo: "Kendo", english: "fireplace", partOfSpeech: "noun" },
          { luo: "Bembore", english: "to be tired", partOfSpeech: "verb" },
          { luo: "Dongo", english: "to grow", partOfSpeech: "verb" },
          { luo: "Hulo", english: "to inform (variant: Fulo)", partOfSpeech: "verb" },
          { luo: "Lihudu", english: "rainbow (variant: Lifudu)", partOfSpeech: "noun" },
          { luo: "Oyieyo", english: "rat (variant: Yieyo)", partOfSpeech: "noun" }
        ]
      }
    ]
  },
  // --------------------------------------------------------------------------
  // MODULE 2: THE NOUN — CLASSES, GENDER, NUMBER & DIMINUTIVES (Pages 5 - 12)
  // --------------------------------------------------------------------------
  {
    moduleId: "mod-2-nouns-gender-plurals",
    moduleNumber: 2,
    title: "The Noun: Classes, Gender, Number & Diminutives",
    description:
      "Understand Dholuo noun classification, personal naming conventions ('O-' vs. 'A-'), lexical and adjectival gender marking, the comprehensive system of plural formation (including stem consonant mutations and irregular plurals), and diminutives.",
    lessons: [
      {
        lessonId: "les-2-1-noun-classes-gender-diminutives",
        title: "Noun Classes, Proper Names, Gender, and Diminutives",
        summary:
          "Dholuo has no grammatical gender or definite article; instead it uses distinct lexical items, gender modifiers (Madichwo/Madhako, Mathwon/Si), and diminutive prefixes (Nya-/Nyi-).",
        sourcePages: [5, 6, 12],
        grammarRules: [
          {
            id: "rule-proper-nouns-gender",
            title: "Proper Names and Gender Expressions",
            explanation:
              "Proper names prefix 'O-' for men (e.g., Okelo, Opiyo, Otieno) and 'A-' for women (e.g., Amolo), unless a child is named after someone of the opposite sex. Biological sex is expressed through distinct words (Dhano/Dhako, Ruath/Dwasi) or by adding 'Madichwo / Mawoyi' (male person), 'Madhako / Manyako' (female person), 'Mathwon' (male animal), and 'Si / Masi' (female domestic animal).",
            examples: [
              { luo: "Nyathi manyako", english: "a female child" },
              { luo: "Gweno mathwon", english: "a cock (rooster)" },
              { luo: "Gweno masi", english: "a hen" }
            ],
            sourcePages: [5, 6]
          },
          {
            id: "rule-diminutives",
            title: "Diminutives (Nya- / Nyi- and Matin)",
            explanation:
              "Diminutives are formed by prefixing 'Nya-' to the singular noun and 'Nyi-' to the plural noun, or by adding 'matin' (small) or 'nyathi' (child of).",
            examples: [
              { luo: "Guok -> Nyaguok (pl. Guogi -> Nyiguogi)", english: "dog -> pup (pl. dogs -> pups)" },
              { luo: "Ruath -> Nyaruath (pl. Ruedhi -> Nyiruedhi)", english: "bull -> bull-calf (pl. bulls -> bull-calves)" },
              { luo: "Paka matin / Nyathi paka", english: "a kitten" }
            ],
            sourcePages: [12]
          }
        ],
        keyVocabulary: [
          { luo: "Dhano", english: "man, human being (pl. Jo)", partOfSpeech: "noun" },
          { luo: "Dhako", english: "woman, wife (pl. Mon)", partOfSpeech: "noun" },
          { luo: "Woyi", english: "boy, son (pl. Yawoyi)", partOfSpeech: "noun" },
          { luo: "Nyako", english: "girl (pl. Nyiri)", partOfSpeech: "noun" },
          { luo: "Ruath", english: "bull (pl. Ruedhi)", partOfSpeech: "noun" },
          { luo: "Dwasi", english: "cow (pl. Dwesini)", partOfSpeech: "noun" },
          { luo: "Roya", english: "heifer (pl. Roye)", partOfSpeech: "noun" },
          { luo: "Nyaroya", english: "calf", partOfSpeech: "noun" },
          { luo: "Nyuok", english: "he-goat", partOfSpeech: "noun" },
          { luo: "Sewini", english: "she-goat", partOfSpeech: "noun" }
        ]
      },
      {
        lessonId: "les-2-2-plural-formation",
        title: "Plural Formation Rules, Stem Mutations & Irregular Plurals",
        summary:
          "Dholuo pluralization involves penultimate vowel raising (a -> e), the '-ini' plural suffix, consonant grade mutations (l->nde, ch->ye, t->de, th->dhe, do->te, dho->the, r->che, k->ge, g->ke, w/b->pe, ny->nje), agent/patient 'jo-' plurals, and core irregular plurals.",
        sourcePages: [6, 7, 8, 9, 10, 11, 12],
        grammarRules: [
          {
            id: "rule-plural-vowel-harmony",
            title: "Penultimate 'a' -> 'e' and Final 'e' -> 'i'",
            explanation:
              "As a general phonological rule in Dholuo plurals, an 'a' in the penultimate syllable changes to 'e' (Pala -> Pelini), and final '-e' often raises to '-i' after a soft syllable (Ondiek -> Ondiegi, Ruoth -> Ruodhi, Ot -> Udi).",
            examples: [
              { luo: "Pala -> Pelini", english: "knife -> knives" },
              { luo: "Ondiek -> Ondiegi", english: "hyaena -> hyaenas" },
              { luo: "Ruoth -> Ruodhi", english: "chief -> chiefs" }
            ],
            sourcePages: [6]
          },
          {
            id: "rule-plural-special-classes",
            title: "Agents/Patients (Jo-), Ra- -> Ro- Plurals, Compounds, and Uncountables",
            explanation:
              "1. Agent/patient nouns change 'Ja-' or 'Ng'ama-' to 'Jo-' (Jatich -> Jotich, Ng'amofuwo -> Jomofuwo). 2. Words starting with 'Ra-' often change 'Ra-' to 'Ro-' in addition to suffix changes (Rang'ol -> Rong'onde, Ragwar -> Rogwerini). 3. In compound nouns, only the second element pluralizes (Dapi -> Depige). 4. Diseases (Ang'iew, Nundu, Nyalolwe), generic insects (Biye, Dede), abstract nouns (Hera, Rieko), and 'kar-' place nouns (Karnindo) have no plural.",
            examples: [
              { luo: "Jatich -> Jotich", english: "workman -> workmen" },
              { luo: "Rang'ol -> Rong'onde", english: "lame person -> lame persons" },
              { luo: "Dapi -> Depige", english: "water pot -> water pots" },
              { luo: "Chuny ji / Kit ji", english: "the souls / the characters (abstract nouns + ji)" }
            ],
            sourcePages: [7, 10, 11]
          }
        ],
        morphologyTables: [
          {
            category: "Class I: The '-ini' Plural",
            patternDescription:
              "The most common plural suffix '-ini' (with penultimate a -> e) applies to words ending in l+vowel, -a, s+vowel, double consonant+vowel, and many words ending in g/h/k/r/d/p/y + vowel.",
            singularOrBaseEnding: "-V / -a / -si",
            transformedEnding: "-ini",
            examples: [
              { baseForm: "Obwolo", baseMeaning: "mushroom", transformedForm: "Obwolini", transformedMeaning: "mushrooms" },
              { baseForm: "Siala", baseMeaning: "siala tree", transformedForm: "Sielini", transformedMeaning: "siala trees" },
              { baseForm: "Adita", baseMeaning: "basket", transformedForm: "Aditini", transformedMeaning: "baskets" },
              { baseForm: "Kwesi", baseMeaning: "pipe", transformedForm: "Kwesini", transformedMeaning: "pipes" },
              { baseForm: "Dwasi", baseMeaning: "cow", transformedForm: "Dwesini", transformedMeaning: "cows" },
              { baseForm: "Dindo", baseMeaning: "spear", transformedForm: "Dindini", transformedMeaning: "spears" },
              { baseForm: "Tado", baseMeaning: "roof", transformedForm: "Tedini (or Tete)", transformedMeaning: "roofs" }
            ],
            exceptions: [
              { baseForm: "Adhola", baseMeaning: "sore, wound", transformedForm: "Adhonde" },
              { baseForm: "Dala", baseMeaning: "village", transformedForm: "Mier" },
              { baseForm: "Bura", baseMeaning: "commandment, case", transformedForm: "Buche" },
              { baseForm: "Omuga", baseMeaning: "rhino", transformedForm: "Omuke" },
              { baseForm: "Ajuoga", baseMeaning: "witchdoctor", transformedForm: "Ajuoge (or Ajuoke)" }
            ]
          },
          {
            category: "Class III: Stem Consonant Mutation Plurals",
            patternDescription:
              "Nouns not taking '-ini' mutate their final stem consonant and add '-e' (or '-i').",
            singularOrBaseEnding: "-l, -ch, -n(V), -m(V), -p, -ng', -t/-th, -do/-dho, -r(V), -k, -gV, -yV, -w(V), -bV, -ny, -a",
            transformedEnding: "-nde, -ye, -nde, -mbe, -pe, -nge, -de/-dhe, -te/-the, -che, -ge, -ke, -che, -pe, -pe, -nje, -e",
            examples: [
              { baseForm: "Kul", baseMeaning: "kraal", transformedForm: "Kunde", transformedMeaning: "kraals (l -> nde)" },
              { baseForm: "Wich", baseMeaning: "head", transformedForm: "Wiye", transformedMeaning: "heads (ch -> ye)" },
              { baseForm: "Kwach", baseMeaning: "leopard", transformedForm: "Kweye", transformedMeaning: "leopards (ch -> ye)" },
              { baseForm: "Pien", baseMeaning: "hide", transformedForm: "Piende", transformedMeaning: "hides (n -> nde)" },
              { baseForm: "Sigana", baseMeaning: "story", transformedForm: "Sigende", transformedMeaning: "stories (na -> nde)" },
              { baseForm: "Olemo", baseMeaning: "fruit", transformedForm: "Olembe", transformedMeaning: "fruits (mo -> mbe)" },
              { baseForm: "Osiep", baseMeaning: "friend", transformedForm: "Osiepe", transformedMeaning: "friends (p -> pe)" },
              { baseForm: "Wang'", baseMeaning: "face/eye", transformedForm: "Wenge", transformedMeaning: "faces/eyes (ng' -> nge)" },
              { baseForm: "Got", baseMeaning: "mountain", transformedForm: "Gode", transformedMeaning: "mountains (t -> de)" },
              { baseForm: "Luth", baseMeaning: "stick", transformedForm: "Ludhe", transformedMeaning: "sticks (th -> dhe)" },
              { baseForm: "Lwedo", baseMeaning: "hand", transformedForm: "Lwete", transformedMeaning: "hands (do -> te)" },
              { baseForm: "Puodho", baseMeaning: "garden", transformedForm: "Puothe", transformedMeaning: "gardens (dho -> the)" },
              { baseForm: "Bur", baseMeaning: "hole", transformedForm: "Buche", transformedMeaning: "holes (r -> che)" },
              { baseForm: "Akuru", baseMeaning: "pigeon", transformedForm: "Akuche", transformedMeaning: "pigeons (ru -> che)" },
              { baseForm: "Dak", baseMeaning: "pot", transformedForm: "Dege", transformedMeaning: "pots (k -> ge)" },
              { baseForm: "Guok", baseMeaning: "dog", transformedForm: "Guogi", transformedMeaning: "dogs (k -> gi)" },
              { baseForm: "Chogo", baseMeaning: "bone", transformedForm: "Choke", transformedMeaning: "bones (go -> ke)" },
              { baseForm: "Apwoyo", baseMeaning: "rabbit", transformedForm: "Apwoche", transformedMeaning: "rabbits (yo -> che)" },
              { baseForm: "Jowi", baseMeaning: "buffalo", transformedForm: "Jope", transformedMeaning: "buffaloes (wi -> pe)" },
              { baseForm: "Kitabu", baseMeaning: "book", transformedForm: "Kitepe", transformedMeaning: "books (bu -> pe)" },
              { baseForm: "Piny", baseMeaning: "country", transformedForm: "Pinje", transformedMeaning: "countries (ny -> nje)" },
              { baseForm: "Aora", baseMeaning: "river", transformedForm: "Aore", transformedMeaning: "rivers (a -> e)" }
            ],
            exceptions: [
              { baseForm: "Ot", baseMeaning: "house", transformedForm: "Udi" },
              { baseForm: "Kwer", baseMeaning: "hoe", transformedForm: "Kwe" },
              { baseForm: "Wer", baseMeaning: "hymn/song", transformedForm: "Wende" },
              { baseForm: "Lak", baseMeaning: "tooth", transformedForm: "Leke" },
              { baseForm: "Dhiang'", baseMeaning: "cattle/cow", transformedForm: "Dhok" },
              { baseForm: "Diel", baseMeaning: "goat", transformedForm: "Diek" },
              { baseForm: "Chieng'", baseMeaning: "day", transformedForm: "Ndalo" },
              { baseForm: "Yie", baseMeaning: "canoe", transformedForm: "Yiedhi" },
              { baseForm: "Sulwe", baseMeaning: "star", transformedForm: "Sulini" }
            ]
          }
        ],
        keyVocabulary: [
          { luo: "Ot", english: "house (pl. Udi)", partOfSpeech: "noun" },
          { luo: "Dhiang'", english: "cow, cattle (pl. Dhok)", partOfSpeech: "noun" },
          { luo: "Diel", english: "goat (pl. Diek)", partOfSpeech: "noun" },
          { luo: "Gweno", english: "fowl (pl. Gwen)", partOfSpeech: "noun" },
          { luo: "Ng'ato", english: "person (pl. Ji)", partOfSpeech: "noun" },
          { luo: "Gi", english: "thing (pl. Gik)", partOfSpeech: "noun" }
        ]
      }
    ]
  },
  // --------------------------------------------------------------------------
  // MODULE 3: CASES & THE POSSESSIVE SYSTEM (Pages 12 - 17)
  // --------------------------------------------------------------------------
  {
    moduleId: "mod-3-possessive-system",
    moduleNumber: 3,
    title: "Cases & The Possessive System (Simple & Construct Possessive)",
    description:
      "Master the two ways of expressing possession in Dholuo: the Simple Possessive (using 'mar'/'mag' or direct juxtaposition) and the idiomatic Construct Possessive (where the possessed noun mutates its final consonant).",
    lessons: [
      {
        lessonId: "les-3-1-simple-possessive",
        title: "Cases and the Simple Possessive",
        summary:
          "Dholuo distinguishes Nominative, Accusative, Dative (with 'ni'), and Possessive. The Simple Possessive uses 'mar' (singular) and 'mag' (plural), or omits the preposition after specific noun classes.",
        sourcePages: [12, 13, 14],
        grammarRules: [
          {
            id: "rule-simple-possessive",
            title: "Simple Possessive with 'mar' / 'mag' and Zero-Preposition",
            explanation:
              "The preposition 'mar' is used when the possessed noun is singular, and 'mag' when the possessed noun is plural (Kom mar won -> Kombe mag won). The preposition may be omitted after: (a) words ending in a vowel preceded by a double consonant (except dh), (b) nouns forming their plural in '-ini', (c) nouns ending in -m, -n, -p, and -r (except Lep -> Lew guok), and (d) verbal nouns ending in -ch.",
            examples: [
              { luo: "Kwesi mar Petrus / Kwesi Petrus", english: "Peter's pipe" },
              { luo: "Kombe mag won", english: "Father's chairs" },
              { luo: "Misumba ruoth", english: "the slave of the chief" },
              { luo: "Kom wora", english: "my father's chair" },
              { luo: "Pien dhiang'", english: "a cow's hide" },
              { luo: "Wach Nyasaye", english: "God's word" }
            ],
            sourcePages: [13, 14]
          }
        ],
        keyVocabulary: [
          { luo: "Mar", english: "of (singular possessed noun)", partOfSpeech: "preposition" },
          { luo: "Mag", english: "of (plural possessed noun)", partOfSpeech: "preposition" },
          { luo: "Kom", english: "chair (pl. Kombe)", partOfSpeech: "noun" },
          { luo: "Lep", english: "tongue (construct: Lew)", partOfSpeech: "noun" }
        ]
      },
      {
        lessonId: "les-3-2-construct-possessive",
        title: "The Construct Possessive (Regular & Irregular)",
        summary:
          "The Construct Possessive is the most idiomatic way to express the genitive in Dholuo. The possessed noun (ruling the genitive) undergoes a stem-final consonant mutation matching the base of its plural or possessive suffix form.",
        sourcePages: [14, 15, 16, 17],
        grammarRules: [
          {
            id: "rule-construct-possessive-general",
            title: "Formation of the Construct Possessive",
            explanation:
              "In the Construct Case, the noun ruling the genitive changes its ending. A helpful beginner's rule of thumb is to take the plural form of the noun and drop its final vowel (e.g., Bul -> pl. bunde -> Construct: Bund Opiyo, 'Opiyo's drum'). When the possessed noun itself is plural, it drops its final plural vowel (e.g., Kombe -> Komb wora, 'my father's chairs').",
            subRules: [
              "(a) -l, -lV, -nV -> -nd(i) (Bel -> Bendi Kisii; Sigana -> Sigandi nyako). Exceptions changing to -ch: Agulu -> Aguch, Abila -> Abich, Agola -> Agoch, Obwolo -> Obwoch, Ndalo -> Ndach.",
              "(b) -VyV and -rV -> -ch (Apwoyo -> Apwoch Petrus; Ngaye -> Ngach yie; Chiro -> Chich Mwa).",
              "(c) -d/-dh <-> -t/-th (Tado -> Tat ot; Puodho -> Puothi bel; Got -> Godi Nandi; Ruoth -> Ruodhi Polo).",
              "(d) -mV -> -mb (Remo -> Remb ruath; Chiemo -> Chiemb guok).",
              "(e) -w(V) -> -p (Ndawa -> Ndap Nandi; Exception: Law -> Law Maria).",
              "(f) -k <-> -g (Lok -> Log le; Buk -> Bug theth; Puga -> Puk Okelo; Kogono -> Kok lwedo). Exceptions dropping -k: Chak -> Cha dhiang', Dhok -> Dho Luo.",
              "(g) -ng' -> hard -ng (Gweng' -> Gweng Amolo).",
              "(h) Non-verbal nouns in -ch drop -ch (Kwach -> Kwa Kamagambo; Mach -> Ma kwesi; Kich [orphan] -> Ki ng'ane)."
            ],
            examples: [
              { luo: "Tat ot", english: "the roof of the house (from Tado)" },
              { luo: "Remb ruath", english: "the blood of a bull (from Remo)" },
              { luo: "Cha dhiang'", english: "the milk of a cow (from Chak)" },
              { luo: "Dho Luo", english: "the language of the Luo (from Dhok)" },
              { luo: "Bund Opiyo", english: "Opiyo's drum (from Bul)" }
            ],
            sourcePages: [14, 15, 16, 17]
          }
        ],
        morphologyTables: [
          {
            category: "Irregular Construct Possessives",
            patternDescription: "High-frequency kinship, human, and domestic nouns have irregular construct forms.",
            singularOrBaseEnding: "Various",
            transformedEnding: "Irregular Construct Stem",
            examples: [
              { baseForm: "Chwo", baseMeaning: "husband", transformedForm: "Chwor Maria", transformedMeaning: "Maria's husband" },
              { baseForm: "Dhako", baseMeaning: "wife", transformedForm: "Chi Petrus", transformedMeaning: "Peter's wife" },
              { baseForm: "Woyi", baseMeaning: "son", transformedForm: "Wodi Nyasaye", transformedMeaning: "God's son" },
              { baseForm: "Yawoyi", baseMeaning: "sons", transformedForm: "Yawoti Jacob", transformedMeaning: "Jacob's sons" },
              { baseForm: "Nyako", baseMeaning: "girl / daughter", transformedForm: "Nyar Seme", transformedMeaning: "a girl from Seme" },
              { baseForm: "Nyiri", baseMeaning: "girls / daughters", transformedForm: "Nyi Gem", transformedMeaning: "the girls from Gem" },
              { baseForm: "Dhiang'", baseMeaning: "cow", transformedForm: "Dher Min", transformedMeaning: "the cow of the mother" },
              { baseForm: "Pacho", baseMeaning: "village", transformedForm: "Par Otieno", transformedMeaning: "Otieno's village" },
              { baseForm: "Yo", baseMeaning: "road", transformedForm: "Yor Kibos", transformedMeaning: "the road to Kibos" },
              { baseForm: "Mo", baseMeaning: "fat / oil", transformedForm: "Mor dhiang' / Mor kich", transformedMeaning: "butter (cow's fat) / honey (bee's fat)" },
              { baseForm: "Yier", baseMeaning: "hair", transformedForm: "Yie wich", transformedMeaning: "the hair of the head" },
              { baseForm: "Mon", baseMeaning: "women", transformedForm: "Mondi Kisumu", transformedMeaning: "the women of Kisumu" }
            ]
          }
        ],
        keyVocabulary: [
          { luo: "Agulu", english: "cooking pot (construct: Aguch)", partOfSpeech: "noun" },
          { luo: "Remo", english: "blood (construct: Remb)", partOfSpeech: "noun" },
          { luo: "Chiemo", english: "food (construct: Chiemb)", partOfSpeech: "noun" },
          { luo: "Bul", english: "drum (construct: Bund)", partOfSpeech: "noun" },
          { luo: "Pacho", english: "village, home (construct: Par)", partOfSpeech: "noun" }
        ]
      }
    ]
  },
  // --------------------------------------------------------------------------
  // MODULES 4 - 5: ADJECTIVES, NUMERALS & PRONOUNS (Pages 17 - 35, 85 - 92)
  // --------------------------------------------------------------------------
  {
    moduleId: "mod-4-adjectives-numerals",
    moduleNumber: 4,
    title: "Adjectives, Numerals & Degrees of Comparison",
    description:
      "Learn qualitative, quantitative, and demonstrative adjectives, attributive vs. predicative usage, plural adjective inflections, gender-specific color terms, cardinal/ordinal/adverbial numbers, and comparative verbs.",
    lessons: [
      {
        lessonId: "les-4-1-adjectives-syntax-morphology",
        title: "Adjective Classes, Attributive vs. Predicative Use & Color Gender",
        summary:
          "Attributive adjectives follow the noun and take the prefix 'ma-' (except 'duto/dundo'). When used predicatively, 'ma-' is dropped. Core adjectives inflect for plural, and color adjectives distinguish masculine and feminine forms.",
        sourcePages: [17, 18, 19, 85, 86, 87, 88],
        grammarRules: [
          {
            id: "rule-adj-attributive-predicative",
            title: "Attributive ('ma-') vs. Predicative Adjectives & Word Order",
            explanation:
              "1. Attributive adjectives always follow the noun and begin with 'ma-' (Dhano maber - a good man), except 'duto/dundo' (Udi duto - all houses). 2. When used predicatively, 'ma-' is dropped (Wang'yo rach - the road is bad). 3. When both a qualitative and quantitative adjective modify the same noun, the qualitative precedes the quantitative (Pelini madongo ariyo - two big knives). 4. Indefinite 'moro/moko' stands between the noun and its qualifying adjective (Pala moro matin - a small knife).",
            examples: [
              { luo: "Dhano maber", english: "A good man (attributive)" },
              { luo: "Wang'yo rach", english: "The road is bad (predicative)" },
              { luo: "Udi duto", english: "All houses" },
              { luo: "Pelini madongo ariyo", english: "Two big knives" },
              { luo: "Pala moro matin", english: "A small knife" }
            ],
            sourcePages: [18, 86]
          },
          {
            id: "rule-adj-plural-and-colors",
            title: "Plural Adjective Inflections, Reduplication & Gendered Color Terms",
            explanation:
              "A select set of core adjectives change form in the plural (Maber -> Mabeyo, Marach -> Maricho, Mabor -> Maboyo, Maduong' -> Madongo, Matin -> Matindo, Madit -> Madito, Marachar -> Marachere, Marating' -> Maratinge, Maduk -> Maduge). Colour adjectives have distinct masculine ('mara-') and feminine ('madi-/ma-') forms: White = marachar (m) / madibo (f); Black = marating' (m) / madichol (f); Chocolate brown = silwal (m) / malando (f). Reduplicating the final syllable means 'slightly / fairly' (Ng'ato maberber - a fairly good man; matintin - very little). Emphasized predicative adjectives repeat with 'to', 'ni', or 'mi' (Tek to tek - It is difficult; Ber ni ber - It is all right).",
            examples: [
              { luo: "Ng'ato maberber", english: "A fairly good man" },
              { luo: "Mia matintin", english: "Give me just a little" },
              { luo: "Tek to tek", english: "It is very difficult" },
              { luo: "Yo otimo chuodho / Yo motimo chuodho", english: "The road is muddy / A muddy road" }
            ],
            sourcePages: [18, 19, 85, 86, 87]
          }
        ],
        keyVocabulary: [
          { luo: "Maber", english: "good (pl. Mabeyo)", partOfSpeech: "adjective" },
          { luo: "Marach", english: "bad (pl. Maricho)", partOfSpeech: "adjective" },
          { luo: "Maduong'", english: "great, big (pl. Madongo)", partOfSpeech: "adjective" },
          { luo: "Matin", english: "small, little (pl. Matindo)", partOfSpeech: "adjective" },
          { luo: "Mabor", english: "high, tall, far (pl. Maboyo)", partOfSpeech: "adjective" },
          { luo: "Mapek", english: "heavy", partOfSpeech: "adjective" },
          { luo: "Marachar", english: "white (m; pl. Marachere; fem: Madibo)", partOfSpeech: "adjective" },
          { luo: "Marating'", english: "black (m; pl. Maratinge; fem: Madichol)", partOfSpeech: "adjective" }
        ]
      },
      {
        lessonId: "les-4-2-numerals-comparison",
        title: "Cardinal, Ordinal & Adverbial Numerals and Comparison",
        summary:
          "Count from 1 to 1,000 in Dholuo, form ordinals with 'mar' (and 'mokwongo'), form adverbial frequency numbers with 'di-/nyadi-', and express comparative/superlative degrees using 'loyo', 'hingo', and 'yombo'.",
        sourcePages: [19, 20, 21, 22],
        grammarRules: [
          {
            id: "rule-numerals-system",
            title: "Cardinal, Ordinal, and Adverbial Numerals",
            explanation:
              "1. Cardinals 1-10: Achiel (1), Ariyo (2), Adek (3), Ang'wen (4), Abich (5), Auchiel (6), Abiriyo (7), Aboro (8), Ongachiel / Achiko / Abung'wen (9), Apar (10). 2. Teens (11-19) use 'Apar gi [unit]' with elision of 'i' before 'a' (Apar g'achiel = 11, Apar gi ongachiel = 19) or 'gi wiye' for odd units (Apar gi wiy(e) adek = 13). 3. Tens use 'Piero' (Pier ariyo = 20, Pier adek = 30, Pier apar or Mia = 100, Alfu / Gana = 1000). 'Dak' or 'gumo' after 'apar' means 'ten and no more'. 4. Ordinals prefix 'Mar' (Marachiel / Mokwongo = first, Mar ariyo = second). 5. Adverbial numerals prefix 'di-' or 'nyadi-' (dichiel = once, diriyo/nyadiriyo = twice, nyadiongachiel = nine times) or use 'ndalo' (ndalo adek = thrice).",
            examples: [
              { luo: "Amiyi florin apar dak", english: "I give you ten florins (and no more)" },
              { luo: "Abiro miyi florin apar gi wiy(e) adek", english: "I'll give you thirteen florins" },
              { luo: "Namadho kwesi dichiel kende", english: "I only smoked one pipe (lit. smoked pipe once only)" },
              { luo: "Ogoya ndalo adek", english: "He beats me thrice" }
            ],
            sourcePages: [19, 20, 21]
          },
          {
            id: "rule-comparison-of-adjectives",
            title: "Comparison of Adjectives (Loyo, Hingo, Yombo, Kadho, Hewo)",
            explanation:
              "Dholuo adjectives do not inflect for comparative or superlative; instead, verbs meaning 'to surpass' are used: 'Loyo' (general surpass), 'Hingo / Hinyo / Hewo' (weight, heaviness, size, strength), and 'Kadho / Yombo' (speed or height). Alternatively, two positive clauses are contrasted with 'to' (Joannes bor, to Jakobus chiek = John is taller than James).",
            examples: [
              { luo: "Oriek -> Oloya gi rieko -> Oloyo ji duto gi rieko", english: "He is wise -> He is wiser than I am -> He is the wisest" },
              { luo: "Sandukuni ohingo macha", english: "This box is heavier than that one" },
              { luo: "Iyomba", english: "You are taller than I am" },
              { luo: "Gari oyombo nyumbu (gi ng'wech)", english: "A train is quicker than a mule" },
              { luo: "Odwa ohingowa vs. Wahingo odwa", english: "Our house is too large for us vs. We are too many for our house" }
            ],
            sourcePages: [21, 22]
          }
        ],
        keyVocabulary: [
          { luo: "Achiel", english: "one", partOfSpeech: "numeral" },
          { luo: "Ariyo", english: "two", partOfSpeech: "numeral" },
          { luo: "Adek", english: "three", partOfSpeech: "numeral" },
          { luo: "Ang'wen", english: "four", partOfSpeech: "numeral" },
          { luo: "Abich", english: "five", partOfSpeech: "numeral" },
          { luo: "Auchiel", english: "six", partOfSpeech: "numeral" },
          { luo: "Abiriyo", english: "seven", partOfSpeech: "numeral" },
          { luo: "Aboro", english: "eight", partOfSpeech: "numeral" },
          { luo: "Ongachiel", english: "nine (also Achiko, Abung'wen)", partOfSpeech: "numeral" },
          { luo: "Apar", english: "ten", partOfSpeech: "numeral" },
          { luo: "Mokwongo", english: "first", partOfSpeech: "adjective" },
          { luo: "Loyo", english: "to surpass", partOfSpeech: "verb" }
        ]
      }
    ]
  },
  {
    moduleId: "mod-5-pronouns",
    moduleNumber: 5,
    title: "The Seven Pronoun Classes & Possessive Suffixes",
    description:
      "Master Personal (Isolated and Inseparable), Reflexive, Possessive (Adjective Suffixes I & II and Substantives), Demonstrative, Relative, Interrogative, Indefinite, and Distributive Pronouns.",
    lessons: [
      {
        lessonId: "les-5-1-personal-reflexive-possessive-pronouns",
        title: "Personal, Reflexive, and Possessive Pronouns",
        summary:
          "Learn the separable pronouns (An, In, En, Wan, Un, Gin), inseparable verb prefixes/suffixes (a-, i-, o-, wa-, u-, gi-), reflexive inflections (Awon, Kenda), and the two possessive suffix series (-a/-i/-e vs. -na/-ni/-ne).",
        sourcePages: [22, 23, 24, 25, 26, 27, 28, 29, 30, 88, 89],
        grammarRules: [
          {
            id: "rule-personal-reflexive-pronouns",
            title: "Personal (Isolated & Inseparable) and Reflexive Pronouns",
            explanation:
              "1. Isolated pronouns: An (I), In (Thou), En (He/She/It), Wan (We), Un (You pl.), Gin (They). Used when the verb is understood, or for emphasis. Reduplicated forms: Anaana (simply myself), Inaina, Enaena, Wanawana, Unauna, Ginagina. 2. Inseparable pronouns attach to the verb as subject prefixes or object suffixes: A- / -a (1s), I- / -i (2s), O- / -e or -go (3s), Wa- / -wa (1p), U- / -u (2p), Gi- / -gi (3p). 3. Reflexive meanings use the reflexive verb (-re/-ra) reinforced by 'Won' (Awon, Iwon, Owon, Wawegi, Uwegi, Giwegi) or 'Kende' (Kenda, Kendi, Kende, Kendwa, Kendu, Kendigi - 'alone/by oneself').",
            examples: [
              { luo: "Oheroa vs. Aheroe (or Aherogo)", english: "He loves me vs. I love him" },
              { luo: "Aherora awon vs. Ahero awon", english: "I like myself vs. I myself like" },
              { luo: "Adhi kenda", english: "I go myself (alone)" },
              { luo: "Un ji ariyo / Wan ji adek", english: "Two of you / Three of us" }
            ],
            sourcePages: [22, 23, 24, 88]
          },
          {
            id: "rule-possessive-pronouns",
            title: "Possessive Pronoun Suffixes (Series I & II), Plural '-e-', and Substantives",
            explanation:
              "Possessive pronoun adjectives are suffixed to the noun: Series I (-a, -i, -e, -wa, -u, -gi) attaches to nouns that undergo stem consonant mutations (parallel to Construct Possessive, e.g., Pala -> Panda, Got -> Goda, Luth -> Ludha, Lwedo -> Lweta, Chogo -> Choka, Kwach -> Kwaya, Remo -> Remba). Series II (-na, -ni, -ne, -wa, -u, -gi) attaches to verbal nouns (Timna, Lekna), reflexive nouns (Lwokruokna), nouns ending in -si/-sa (Kwesina), double-consonant stems (Lwandana, Adundona; except Bunga, Runga), and k/h/p/t+vowel or -p stems (Sokona, Aditana, Osiepna). Plural possessed nouns insert an unaccentuated '-e-' before Series II when needed to distinguish from singular (Athecha = my arrow vs. Athechena = my arrows; Puothu = your garden vs. Puotheu = your gardens). Substantive ('mine, yours') uses Mara, Mari, Mare, Marwa, Maru, Margi (singular item) and Maga/Meka, Magi/Meki, Mage/Meke, Mawa/Magwa/Mekwa, Mau/Magu/Meku, Maggi/Mekigi (plural items).",
            examples: [
              { luo: "Odini mara, to ere maru?", english: "This house is mine, where is yours?" },
              { luo: "Wora, Woru, Won mare, Wonwa, Wonu, Wongi", english: "My, thy, his, our, your, their father" },
              { luo: "Mama, Meru, Min mare, Minwa, Minu, Mingi", english: "My, thy, his, our, your, their mother" },
              { luo: "Omera / Nyamera", english: "My brother / My sister" }
            ],
            sourcePages: [24, 25, 26, 27, 28, 29, 30]
          }
        ],
        keyVocabulary: [
          { luo: "Wora", english: "my father (thy father: Woru)", partOfSpeech: "noun" },
          { luo: "Mama", english: "my mother (thy mother: Meru)", partOfSpeech: "noun" },
          { luo: "Omera", english: "my brother / friend (thy brother: Omeru)", partOfSpeech: "noun" },
          { luo: "Nyamera", english: "my sister / lady friend (thy sister: Nyameru)", partOfSpeech: "noun" },
          { luo: "Gira", english: "my thing (pl. Giga / Gika)", partOfSpeech: "noun" }
        ]
      },
      {
        lessonId: "les-5-2-demonstrative-relative-interrogative-indefinite",
        title: "Demonstrative, Relative, Interrogative, Indefinite & Distributive Pronouns",
        summary:
          "Master demonstrative suffixes (-ni, -no, -gi, -go, -cha, chande), the relative pronoun (ma / m' / mo), interrogatives (Ng'a, Ang'o, Mane), and distributive expressions.",
        sourcePages: [30, 31, 32, 33, 34, 35, 89, 90, 91, 92],
        grammarRules: [
          {
            id: "rule-demonstrative-pronouns",
            title: "Demonstrative Suffixes and Substantives",
            explanation:
              "1. Demonstrative adjective suffixes attach to the end of the noun (after any possessive suffix or qualifying adjective, or even to the verb of a relative clause): -ni / -ma (this), -no / -cha (that), -gi (these), -go (those), and 'chande' (that one spoken of before, now absent). Before -ni/-no, final t/th/k often voice to d/dh/g (Got -> Godini, Opuk -> Opugono). 2. Demonstrative substantives: Ma/Mani (this), Mano (that), Magi (these), Mago (those), Macha (that yonder), Jali/Jal (this man), Jalo (that man), Joka (those men). 'The same' is rendered by 'nogo' (sing.) and 'gogo' (pl.).",
            examples: [
              { luo: "Pandani", english: "This my knife (Pala + -a + -ni)" },
              { luo: "Got maborcha", english: "That high mountain" },
              { luo: "Guok m'uwothogono", english: "That dog you walk with (suffix -no on verb)" },
              { luo: "Ng'ato nogo / Ndalo gogogo", english: "The same man / The self same days" }
            ],
            sourcePages: [30, 31, 32, 89, 90]
          },
          {
            id: "rule-relative-interrogative-distributive",
            title: "Relative (Ma / Mo), Interrogative (Ng'a / Ang'o), and Distributive Constructions",
            explanation:
              "1. Relative pronoun 'Ma' drops 'a' before a, i, o, w (Ng'ato m'ineno - the man whom you see; Ot m'wagero - the house we build). In 3rd person, 'ma-' expresses an ongoing action (Ng'ato matho - the man who is dying), while 'mo-' expresses a state or simple fact (Ng'ato motho ni dini - the man that dies for the faith). 2. Interrogatives: Ng'a (who? pl. Ng'a gini), Ang'o (what?), Mane (which? pl. Mage), Manade (of what sort?). 'Ng'a' is used for persons' names (Nyingi ng'a? - What is your name?), while 'Ang'o' after a construct noun asks the species/name of things (En yadh ang'o? - What is the name of this tree?). 3. Distributive ('every/each') uses 'ka' between repeated nouns (Dwe ka dwe - every month; Ng'ato ka ng'ato - everyone) or repeats the whole clause.",
            examples: [
              { luo: "Nyingi ng'a?", english: "What is your name?" },
              { luo: "En yadh ang'o? / En aoch ang'o?", english: "What is the name of this tree? / What is the name of this river?" },
              { luo: "Dwe ka dwe", english: "Every month" },
              { luo: "Ng'ato ka ng'ato mond'okel florin", english: "Let every one bring a florin" }
            ],
            sourcePages: [32, 33, 34, 35, 90, 91, 92]
          }
        ],
        keyVocabulary: [
          { luo: "Ng'a", english: "who? (pl. Ng'a gini)", partOfSpeech: "pronoun" },
          { luo: "Ang'o", english: "what?", partOfSpeech: "pronoun" },
          { luo: "Mane", english: "which? (pl. Mage)", partOfSpeech: "pronoun" },
          { luo: "Moro", english: "some, another, a certain (pl. Moko)", partOfSpeech: "pronoun" },
          { luo: "Machielo", english: "the other", partOfSpeech: "pronoun" }
        ]
      }
    ]
  }
,
  // --------------------------------------------------------------------------
  // MODULES 6 - 7: THE VERB SYSTEM, VOICE & VALENCY (Pages 35 - 62, 81 - 101)
  // --------------------------------------------------------------------------
  {
    moduleId: "mod-6-verb-conjugation-tenses-moods",
    moduleNumber: 6,
    title: "The Verb System: Root Extraction, Moods, Tenses & Negation",
    description:
      "Master Dholuo verb structure, root formation, the five moods (Infinitive, Indicative, Imperative, Subjunctive, Conditional), primary and secondary tenses, narrative conjunctions, and negative conjugation.",
    lessons: [
      {
        lessonId: "les-6-1-verb-roots-present-past-perfect",
        title: "Verb Structure, Roots, Present, Past & Perfect Tenses",
        summary:
          "Most Dholuo verbs end in '-o' (e.g., Hero, Gedo), with exceptions ending in '-i/-e' (Dagi, Yiye), a single vowel (A, I, O), or a consonant (Dak, Ywak, Twak, Mer). Learn how to extract the verb root and conjugate the Present, Past, and Perfect tenses.",
        sourcePages: [35, 36, 37, 38, 39, 40, 41, 42, 43],
        grammarRules: [
          {
            id: "rule-verb-root-extraction",
            title: "Extracting the Verb Root",
            explanation:
              "1. Single-vowel verbs (A, I, O) and verbs ending in a consonant (Dak, Ywak, Mer) or a vowel other than '-o' (Dagi, Yiye) keep their infinitive as the root. 2. Verbs ending in '-yo' preceded by a vowel drop '-yo' (Miyo -> Mi, Tiyo -> Ti). 3. All other verbs ending in '-o' drop '-o' (Kelo -> Kel, Yanyo -> Yany). Exceptions: Biro (to come) -> Bi; Neno (to see) -> Ne (whereas Neno 'to watch' -> Nen).",
            examples: [
              { luo: "Miyo -> Mi; Tiyo -> Ti", english: "to give -> mi; to work -> ti" },
              { luo: "Kelo -> Kel; Hero -> Her", english: "to bring -> kel; to love -> her" },
              { luo: "Biro -> Bi; Neno -> Ne", english: "to come -> bi; to see -> ne" }
            ],
            sourcePages: [35, 43]
          },
          {
            id: "rule-present-past-perfect-tenses",
            title: "Present Indefinite/Imperfect, Immediate Future ('Biro'), Past ('Ne'), and Perfect ('-se-')",
            explanation:
              "1. Present Indefinite prefixes A-, I-, O-, Wa-, U-, Gi- to the infinitive (Ahero, Ihero, Ohero...). In the Present Imperfect (progressive), the 3rd person prefix 'o-' / 'gi-' is dropped when the subject immediately precedes (Wendo biro - the visitor is coming; Koth chwe - it is raining). 2. Immediate Future ('about to / going to') uses 'Biro' in the present + infinitive (Abiro gedo ka - I am going to build here). 3. Past Indefinite prefixes 'Ne' (contracted to Na-, Ni-, No-, Newa-, Nu-, Negi-). After time adverbs (Yande, Chon, Nene, Nyoro, Nyocha) or narrative conjunctions (mi / miti), the present form is used. 'Nyoro' (yesterday) and 'Nyocha' also prefix 'Nyo-'/'Nyoro-' to the verb (Nyabiro nyoro). 4. Present Perfect inserts '-se-' or '-seko-' (Asehero - I have loved, implying the state still holds) or uses 'tieko' (Atieko biro), 'A' (A abiro - I have just come), 'Koro', 'Nende', or 'Nyaka'. Past Perfect combines 'Ne' + '-se-' (Nasehero - I had loved).",
            examples: [
              { luo: "Wendo obiro vs. Wendo biro", english: "The visitor has come vs. The visitor is coming" },
              { luo: "Abiro miyi", english: "I will give it to you immediately" },
              { luo: "Miti gidonjo pacho, gitedo kuon gi ring'o", english: "Then they entered the village and boiled matama and meat" },
              { luo: "Asedak Winam higini adek vs. Nadak Winam higini adek", english: "I have lived in Kisumu 3 years (still there) vs. I lived in Kisumu 3 years (no longer there)" }
            ],
            sourcePages: [36, 37, 38, 39, 40, 41, 42]
          }
        ],
        verbParadigms: [
          {
            tenseOrMood: "Indicative — Present Indefinite",
            formationRule: "Inseparable subject prefix (A-, I-, O-, Wa-, U-, Gi-) + Infinitive (Negative: Ok- / Dak- prefix)",
            usageNotes: [
              "Expresses present action, recent past (a few hours ago), or future when fixed by a time word (Kiny wadhi)."
            ],
            rows: [
              { person: "1s", pronounLabel: "An", affirmative: ["Ahero"], negative: ["Okahero", "Ok ahero", "Dakahero"], englishAffirmative: "I love", englishNegative: "I do not love" },
              { person: "2s", pronounLabel: "In", affirmative: ["Ihero"], negative: ["Okihero"], englishAffirmative: "Thou lovest", englishNegative: "Thou dost not love" },
              { person: "3s", pronounLabel: "En", affirmative: ["Ohero"], negative: ["Okohero"], englishAffirmative: "He/She/It loves", englishNegative: "He/She/It does not love" },
              { person: "1p", pronounLabel: "Wan", affirmative: ["Wahero"], negative: ["Okwahero"], englishAffirmative: "We love", englishNegative: "We do not love" },
              { person: "2p", pronounLabel: "Un", affirmative: ["Uhero"], negative: ["Okuhero"], englishAffirmative: "You love", englishNegative: "You do not love" },
              { person: "3p", pronounLabel: "Gin", affirmative: ["Gihero"], negative: ["Okigihero"], englishAffirmative: "They love", englishNegative: "They do not love" }
            ],
            examples: [{ luo: "Aheri ahinya", english: "I like you very much" }],
            sourcePages: [36, 37, 51, 52]
          },
          {
            tenseOrMood: "Indicative — Past Indefinite & Present Perfect",
            formationRule: "Past: Ne + Present (contracted Na-, Ni-, No-, Newa-, Nu-, Negi-). Present Perfect: Prefix + -se- + Infinitive.",
            usageNotes: [
              "In negative past, 'ok' may follow 'ne' (Ne okahero) or precede the contracted verb (Ok nahero). In negative statements, the final '-o' of the verb often drops when an object or modifier follows."
            ],
            rows: [
              { person: "1s", pronounLabel: "An", affirmative: ["Nahero", "Ne ahero", "Asehero"], negative: ["Ne okahero", "Ok nahero", "Okasehero"], englishAffirmative: "I loved / I have loved", englishNegative: "I did not love / have not loved" },
              { person: "2s", pronounLabel: "In", affirmative: ["Nihero", "Ne ihero", "Isehero"], negative: ["Ne okihero", "Okisehero"], englishAffirmative: "Thou lovedst / hast loved", englishNegative: "Thou didst not love / hast not loved" },
              { person: "3s", pronounLabel: "En", affirmative: ["Nohero", "Ne ohero", "Osehero"], negative: ["Ne okohero", "Okosehero"], englishAffirmative: "He loved / has loved", englishNegative: "He did not love / has not loved" },
              { person: "1p", pronounLabel: "Wan", affirmative: ["Newahero", "Ne wahero", "Wasehero"], negative: ["Ne okwahero", "Okwasehero"], englishAffirmative: "We loved / have loved", englishNegative: "We did not love / have not loved" },
              { person: "2p", pronounLabel: "Un", affirmative: ["Nuhero", "Ne uhero", "Usehero"], negative: ["Ne okuhero", "Okusehero"], englishAffirmative: "You loved / have loved", englishNegative: "You did not love / have not loved" },
              { person: "3p", pronounLabel: "Gin", affirmative: ["Negihero", "Ne gihero", "Gisehero"], negative: ["Ne okigihero", "Okigisehero"], englishAffirmative: "They loved / have loved", englishNegative: "They did not love / have not loved" }
            ],
            examples: [{ luo: "Kane obiro, nobet piny, nochiemo", english: "When he came, he sat down and ate" }],
            sourcePages: [38, 41, 52]
          }
        ],
        keyVocabulary: [
          { luo: "Hero", english: "to love", partOfSpeech: "verb" },
          { luo: "Biro", english: "to come", partOfSpeech: "verb" },
          { luo: "Tieko", english: "to finish", partOfSpeech: "verb" },
          { luo: "Nwang'o", english: "to find, meet (also Yudo)", partOfSpeech: "verb" }
        ]
      },
      {
        lessonId: "les-6-2-future-imperative-subjunctive-conditional",
        title: "Future, Imperative, Subjunctive, Participles, Conditionals & Secondary Tenses",
        summary:
          "Conjugate the Future tense (with consonant mutation k -> gi and epenthetic -i), Imperative (singular root vs. plural -uru), Subjunctive (with mondo, onego, dak, kik), Participles (with ka), Conditionals (ka, da/dang', dine), and Secondary Tenses (podi / poki).",
        sourcePages: [43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54],
        grammarRules: [
          {
            id: "rule-future-imperative-subjunctive-stem",
            title: "Stem Changes in Future, Imperative & Subjunctive (k -> gi and Epenthetic -i)",
            explanation:
              "In the Future, Imperative, and Subjunctive moods (all built on the Verb Root): 1. Verbs ending in '-k' change 'k' into 'gi' (Duogo/Duok -> Noduogi 'he will return', Duogi ka 'come back here'; Ywak -> Unu ywagi 'you shall weep'). 2. Verbs ending in a double consonant always take a final unaccentuated '-i' (Pidho -> Kiny nopidhi rabuon; Bedo -> Bedi ka). 3. Verbs ending in -r, -n, -m, -w, -l never take '-i' (Ginikow ng'atno).",
            examples: [
              { luo: "Noduogi / Duogi ka", english: "He will return / Come back here" },
              { luo: "Kiny nopidhi rabuon", english: "To-morrow he will plant potatoes" },
              { luo: "Bedi ka / Beduru ka", english: "Sit down here (sing. / pl.)" }
            ],
            sourcePages: [43, 44, 45, 46, 48]
          },
          {
            id: "rule-moods-and-conditionals",
            title: "Imperative, Subjunctive, Participles, Conditionals & Secondary Tenses",
            explanation:
              "1. Imperative: Singular = root (+ optional polite '-e', e.g., Kechwae 'have mercy on us', Miae chiemo 'give me some food'); Plural = root + '-uru' (Heruru). When two imperatives follow, the second is in the subjunctive (Bi, ine - Come and see; Dhiuru, upuonji - Go and teach). Negative imperative uses 'Kik / Kiki' + subjunctive (Kik idhi - Do not go; Kik ineki - Do not kill). 2. Subjunctive: Pronominal prefix + root (Aher, Iher, Oher, Waher, Uher, Giher). Used for wishes (Pinyi obi), after 'mondo/nimondo' (in order that), 'di' (lest), 'onego' (must), 'owinjore/oromo' (ought), polite requests with 'dak' (Dak ibi lima?), and 'let us' with '-uru' (Wadhiuru - Let us go). 3. Participles use 'ka' + Present or Present Perfect (Anwang'o dhako ka rego - I found a woman grinding). 4. Conditionals: Present uses 'Ka' or 'Da/Dang''; Past contrafactual uses 'Dine' + subjunctive in protasis and 'da/dang'/dine' in apodosis (Dine opuonjre chon, d'ong'eyo kawono - If he had studied before, he would know it now). 5. Secondary Tenses: 'Podi/Pod' = still (Pod otiyo - he is still working); 'Poki / Podi ki / Podi ok' = not yet (Pok'obiro - he has not come yet).",
            examples: [
              { luo: "Bi, ine / Dhiuru, upuonji", english: "Come and see / Go (pl.) and teach" },
              { luo: "Wadhiuru / Wanegeuru", english: "Let us go / Let us kill him" },
              { luo: "Dak imia ndawa?", english: "Won't you give me some tobacco? (polite)" },
              { luo: "Dine wawuogi chon, da wadonjo saa auchiel", english: "If we had left earlier, we should have reached at mid-day" },
              { luo: "Pok'obiro / Podi ok obiro", english: "He has not come yet" }
            ],
            sourcePages: [46, 47, 48, 49, 50, 51, 53, 54]
          }
        ],
        verbParadigms: [
          {
            tenseOrMood: "Future & Subjunctive Moods",
            formationRule: "Future: (Pronoun) + na-/ni-/no-/wana-/unu-/gini- + Root (Negative: Ok / Oka / Okan). Subjunctive: Pronoun prefix + Root (Negative: Kik / Kiki).",
            usageNotes: [
              "Near future (same day) adds 'Bin' or 'Wang'' before the future verb (Wang' wanadhi - we shall go soon). Indefinite future within a few days uses 'Chieng' moro' (Chieng' moro nabi); distant indefinite future uses 'Wang'ini'."
            ],
            rows: [
              { person: "1s", pronounLabel: "An", affirmative: ["Naher", "Anaher", "Aher (Subj.)"], negative: ["Okanaher", "Ok naher", "Kik aher (Subj.)"], englishAffirmative: "I shall love / That I love", englishNegative: "I shall not love / That I love not" },
              { person: "2s", pronounLabel: "In", affirmative: ["Niher", "Iniher", "Iher (Subj.)"], negative: ["Okaniher", "Ok niher", "Kik iher (Subj.)"], englishAffirmative: "Thou wilt love / That thou love", englishNegative: "Thou wilt not love / Do not love" },
              { person: "3s", pronounLabel: "En", affirmative: ["Noher", "Oher (Subj.)"], negative: ["Okanoher", "Ok noher", "Kik oher (Subj.)"], englishAffirmative: "He will love / That he love", englishNegative: "He will not love / That he love not" },
              { person: "1p", pronounLabel: "Wan", affirmative: ["Wanaher", "Waher (Subj.)"], negative: ["Okwanaher", "Ok wanaher", "Kik waher (Subj.)"], englishAffirmative: "We shall love / That we love", englishNegative: "We shall not love / That we love not" },
              { person: "2p", pronounLabel: "Un", affirmative: ["Unuher", "Nuher", "Uher (Subj.)"], negative: ["Okanuher", "Ok unuher", "Kik uher (Subj.)"], englishAffirmative: "You will love / That you love", englishNegative: "You will not love / Do not love (pl.)" },
              { person: "3p", pronounLabel: "Gin", affirmative: ["Giniher", "Giher (Subj.)"], negative: ["Okaginiher", "Okiginiher", "Kik giher (Subj.)"], englishAffirmative: "They will love / That they love", englishNegative: "They will not love / That they love not" }
            ],
            examples: [
              { luo: "Bin nucham ang'o?", english: "What are you going to eat by and by?" },
              { luo: "Onego obi", english: "He must come" }
            ],
            sourcePages: [43, 44, 47, 50, 51, 53]
          }
        ],
        keyVocabulary: [
          { luo: "Onego", english: "must (+ subjunctive)", partOfSpeech: "verb" },
          { luo: "Mondo", english: "in order that (+ subjunctive)", partOfSpeech: "conjunction" },
          { luo: "Kik", english: "do not / lest (+ subjunctive)", partOfSpeech: "adverb" },
          { luo: "Podi", english: "still, not yet", partOfSpeech: "adverb" }
        ]
      }
    ]
  },
  {
    moduleId: "mod-7-voice-defective-verbs-valency",
    moduleNumber: 7,
    title: "Passive, Reflexive, Reciprocal, Reduplicated & Defective Verbs, and Valency Apophony",
    description:
      "Master the Passive voice, Reflexive and Reciprocal verbs (-re), Reduplicated verbs (a-...-a), Defective verbs ('to be', 'to have', 'to be without', 'to suffice'), Causatives, and Transitive-to-Intransitive vowel/consonant mutations.",
    lessons: [
      {
        lessonId: "les-7-1-passive-reflexive-reciprocal-reduplicated",
        title: "Passive Voice, Reflexive, Reciprocal & Reduplicated Verbs",
        summary:
          "Dholuo prefers active constructions whenever the agent is named, but forms agentless passives with 'o-' or ongoing/impersonal 'i-', reflexives/reciprocals with '-re' (-ra/-ri/-re/-re/-ru/-re), and 'simply/merely' reduplications with 'a-[root]-a'.",
        sourcePages: [54, 55, 56, 57, 58],
        grammarRules: [
          {
            id: "rule-passive-voice",
            title: "Formation and Restrictions of the Passive Voice",
            explanation:
              "1. Completed/state passive prefixes impersonal 'o-' to the verb root (Chiemo okel - The food has been brought; Ohera, Oheri, Ohere, Oherwa, Oheru, Ohergi - I am loved, etc.). 2. Ongoing or impersonal passive prefixes 'i-' to the active stem (Iluongi - Thou art being called; Ikelo - It is being brought; Iwacho bende - It is also said). 3. CRITICAL SYNTAX RULE: If the agent (doer) of the action is mentioned, the passive CANNOT be used in Dholuo; the sentence must be turned into the active voice (The house was built by Peter -> Petrus nogero ot).",
            examples: [
              { luo: "Chiemo okel vs. Ikelo chiemo", english: "The food has been brought vs. Food is being brought" },
              { luo: "Ot noger vs. Petrus nogero ot", english: "The house was built vs. The house was built by Peter" }
            ],
            sourcePages: [54, 55, 56]
          },
          {
            id: "rule-reflexive-reciprocal-reduplicated",
            title: "Reflexive (-re), Reciprocal, and Reduplicated (a-...-a) Verb Forms",
            explanation:
              "1. Reflexive verbs suffix '-re' to the infinitive, inflecting in the singular and 2nd person plural as: 1s -ra (Aherora), 2s -ri (Iherori), 3s -re (Oherore), 1p -re (Waherore), 2p -ru or -re (Uheroru), 3p -re (Giherore). Verbs in '-oyo' have double reflexives (Goyo -> Goyore or Gore; Pwoyo -> Pwoyore or Pwore); verbs in other Vowel + '-yo' drop '-yo' before '-re' (Tweyo -> Twere, Bayo -> Bare, Ng'iyo -> Ng'ire). Many English intransitives are reflexive in Dholuo: Lwokore (bathe), Lokore (turn), Chokore (assemble), Losore/Ikore (prepare), Puonjore (learn/practise), Rwakore (dress), Gonyore (undress), Kulore (bend). 2. Reciprocal ('each other') uses the plural reflexive (Waherore - we love one another; Negiwacho kendigi - they said to one another). 3. Reduplicated form ('simply/merely') places 'a-...-a' around the verb stem after the conjugated verb (Odak adaka - He simply lives; Oheri ahera - He simply loves you; Tiuru atiya - Simply work).",
            examples: [
              { luo: "Alwokora pile", english: "I have a bath every day" },
              { luo: "Ritreuru!", english: "Take care of yourselves!" },
              { luo: "Waherore", english: "We love one another" },
              { luo: "Olwokore alwoka / Ogore agoya", english: "He is simply bathing / He simply fell" }
            ],
            sourcePages: [56, 57, 58]
          }
        ],
        keyVocabulary: [
          { luo: "Lwokore", english: "to bathe, wash oneself", partOfSpeech: "verb" },
          { luo: "Puonjore", english: "to learn, study, practise", partOfSpeech: "verb" },
          { luo: "Chokore", english: "to assemble, gather", partOfSpeech: "verb" },
          { luo: "Rwakore", english: "to dress oneself", partOfSpeech: "verb" },
          { luo: "Gore", english: "to fall down, beat oneself (also Goyore)", partOfSpeech: "verb" }
        ]
      },
      {
        lessonId: "les-7-2-defective-verbs-valency-syntax",
        title: "Defective Verbs ('To Be', 'To Have', 'To Lack') & Transitive/Intransitive Mutations",
        summary:
          "Master the defective verbs (Bedo/Bet, En, -tiye, Bet gi / Gi, Aonge, Oroma), causative 'miyo', and the systematic vowel/consonant shifts that turn transitive verbs into intransitives.",
        sourcePages: [59, 60, 61, 62, 81, 82, 83, 84, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101],
        grammarRules: [
          {
            id: "rule-defective-verbs",
            title: "'To Be' (Bedo/Bet, En, -tiye), 'To Have' (Gi), 'To Be Without' (Aonge) & 'To Suffice' (Oroma)",
            explanation:
              "1. 'To be': (a) Full verb Bedo / Bet (Abedo/Abet, Past: Nabet, Future: Nabedi, Subj: Abedi); (b) Isolated pronoun in present (An, In, En, Wan, Un, Gin; Past: Ne wan) or copula 'e' (Ma e ringra - This is my body); (c) Locative '-tiye' ('to be present here': Antiye, Intiye, Nitiye, Wantiye, Untiye, Gintiye). 2. 'To have': Expressed as 'to be with' using 'Abet gi' or 'An gi / In gi' (Past: Nabet gi / Ne wan gi). When no object follows, 'gi' becomes 'go' or 'godo' (Un gi pesa? Ee, wango / wangodo). 3. 'To be without / lack': Aonge, Ionge, Oonge, Waonge, Uonge, Gionge (Past: Naonge, Nionge...). If the object precedes, '-go' is suffixed (Pesa aongego). 4. 'To have sufficient': Oroma, Oromi, Orome, Oromowa, Oromou, Oromogi.",
            examples: [
              { luo: "Un gi pesa? Ee, wango (or wangodo)", english: "Have you money? Yes, we have" },
              { luo: "Aonge pesa / Pesa aongego", english: "I have no money" },
              { luo: "Kite romo / Oroma", english: "There is enough stone / I have sufficient" }
            ],
            sourcePages: [59, 60, 61]
          },
          {
            id: "rule-valency-apophony-and-syntax",
            title: "Transitive <-> Intransitive Stem Mutations and Object/Subject Syntax",
            explanation:
              "1. Transitive verbs form intransitives by mutating the stem vowel ('a' -> 'e') and final consonant: -mo -> -mo (Ramo -> Remo), -ro -> -ro (Baro -> Bero), -yo -> -cho/-che (Kwayo -> Kwecho, Gweyo -> Gwecho, Puoyo -> Puocho, Goyo -> Gocho), -wo -> -po (Kawo -> Kepo, Luwo -> Lupo, Chiwo -> Chipo), -go -> -k (Ng'ogo -> Ng'ok, Bwogo -> Bwok), -do/-dho -> -to/-tho (Modo -> Moto, Madho -> Metho, Kedo -> Ket). 2. Plural Subjects: A verb predicating something of a plural subject stands in the 3rd person SINGULAR (Yedhe nogore piny - The trees fell down); if multiple verbs follow a plural subject, the first is singular and subsequent verbs take 'gi-' (Ondiegi moko nomwomo chiel, negikawo nyaroya). 3. Indirect Objects precede direct objects and take 'ni' (Fundi, losna mesa), except double-object verbs Miyo (give), Holo (borrow), Chiko (promise), Puonjo (teach), Kwayo (ask), Nyiso (show), Penjo (ask), Mayo (rob) (Woru nomiya ludhi - Your father gave me your stick).",
            examples: [
              { luo: "Madho -> Metho; Luwo rech -> Lupo; Kawo -> Kepo", english: "to drink (tr. -> intr.); to catch fish -> fishing; to take (tr. -> intr.)" },
              { luo: "Yedhe nogore piny", english: "The trees fell down (singular verb with plural noun subject)" },
              { luo: "Woru nomiya ludhi", english: "Your father gave me your stick" },
              { luo: "Nyasaye emanochweyo polo gi piny", english: "It is God who created heaven and earth (subject emphasis with ema-)" }
            ],
            sourcePages: [92, 93, 94, 95, 96, 97, 98]
          }
        ],
        keyVocabulary: [
          { luo: "Bedo", english: "to be, sit, stay (also Bet)", partOfSpeech: "verb" },
          { luo: "Aonge", english: "I have not, I am without", partOfSpeech: "verb" },
          { luo: "Oroma", english: "I have enough / it suffices me", partOfSpeech: "verb" },
          { luo: "Madho", english: "to drink, smoke (intr. Metho)", partOfSpeech: "verb" },
          { luo: "Kwalo", english: "to steal (intr. Kwelo; agent: Jakuo)", partOfSpeech: "verb" }
        ]
      }
    ]
  }
,
  // --------------------------------------------------------------------------
  // MODULE 8: ADVERBS, PREPOSITIONS, CONJUNCTIONS & SALUTATIONS (Pages 62 - 80)
  // --------------------------------------------------------------------------
  {
  moduleId: "mod-8-adverbs-prepositions-conjunctions-salutations",
  moduleNumber: 8,
  title: "Adverbs, Traditional Time Phrases, Prepositions, Conjunctions & Salutations",
  description:
    "Master Dholuo adverbs of degree, time, place, manner, and cause, traditional pastoral time-of-day expressions, verbal idioms for 'again/first/usually', prepositions, conjunctions, interjections, and cultural salutations.",
  lessons: [
    {
      lessonId: "les-8-1-adverbs-time-place-manner-idioms",
      title: "Adverbs of Degree, Time, Place, Manner & Verbal Idioms",
      summary:
        "Learn how Dholuo expresses degree (ahinya, ruok, gilala, chuth), time (nyoro, nyocha, kiny, orucha) and traditional daily time milestones, place questions in '-e' vs. answers in '-o' (kanye -> kanyo), locative verb suffixes (-e / -iye), and verbal idioms (chako, kwongo, thoro/hinyo).",
      sourcePages: [62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72],
      grammarRules: [
        {
          id: "rule-adverbs-time-and-traditional-clock",
          title: "Adverbs of Time and Traditional Luo Time-of-Day Expressions",
          explanation:
            "Key relative days: Nyocha (day before yesterday), Nyoro (yesterday), Nende / Tinende / Tinde (today), Kawono / Koro (now / just now), Kiny (tomorrow), Orucha (day after tomorrow). Traditional time phrases reflect the pastoral and natural cycle: Kogwen (at cock's crow), Ka piny oru / oyawore (at dawn), Ka chieng' opilore (at sunrise), Onyango (around 8 a.m.), Odiechieng' (daytime/midday), Tekre mon (between 2 and 3 p.m.), Kar donjo dhok (about 5 p.m., when cattle return), Kar nyiedho dhok (about 5:30 p.m., milking time), Ang'ich welo (past 6 p.m., cool of evening), Odhiambo mar oliktik (about 6:30 p.m., bat time), Ka piny oyuso / ochido (at dusk), Otieno (at night), Odiewor (at midnight).",
          examples: [
            { luo: "Kiny wanamondi okinyi mang'ich", english: "To-morrow morning we will leave very early" },
            { luo: "Orucha wanadhi Winam", english: "The day after to-morrow we will go to Kisumu" },
            { luo: "Ondiegi wotho otieno", english: "Hyaenas walk at night" }
          ],
          sourcePages: [63, 64, 65, 66]
        },
        {
          id: "rule-adverbs-place-and-verbal-idioms",
          title: "Place Adverbs (-e vs. -o), Locative Suffixes (-e / -iye) & Verbal Idioms",
          explanation:
            "1. Place interrogatives end in '-e' while their demonstrative answers end in '-o': Kanye / Kune / Kure / Ere (where?) -> Kanyo / Kuno / Kuro / Ero (there); Koni (this side) -> Kono (that side). 2. When 'ka / ku' (where) heads a relative clause, the verb takes a locative suffix: '-e' after a vowel (Ka m'adhiye - whither I go), or '-iye' after a consonant (Akia ku m'odakiye - I don't know where he lives). '-iye' also translates 'in it / on it' (Obetiye - He is sitting on it; Kik udonjiye - Don't enter into it). 3. English adverbs 'again', 'first/before', and 'usually' are rendered by auxiliary verbs: Chako ('again' + present/subjunctive: Nochako obiro - He came again), Kwongo ('first/before' + infinitive: Jale nokwongo biro - He came here first), and Hinyo / Thoro ('usually' + infinitive: Githoro dhi tich - They usually go to work).",
          examples: [
            { luo: "Idak kanye? -> Nadak kuno", english: "Where do you live? -> I lived there" },
            { luo: "Ka m'adhiye, un okunyal biroe", english: "Whither I go, you cannot come" },
            { luo: "Nochako obiro / Okanachak atim", english: "He came again / I will not do it again" },
            { luo: "Wahinyo wacho / Githoro dhi tich", english: "We usually say / They usually go to work" }
          ],
          sourcePages: [66, 67, 68, 69, 72]
        }
      ],
      keyVocabulary: [
        { luo: "Ahinya", english: "very, exceedingly (also Ruok, Gilala)", partOfSpeech: "adverb" },
        { luo: "Piyo", english: "quickly (also Piyopiyo)", partOfSpeech: "adverb" },
        { luo: "Mos", english: "slowly, carefully (also Mosmos)", partOfSpeech: "adverb" },
        { luo: "Adieri", english: "truly, really (also Adier, Putuputu)", partOfSpeech: "adverb" },
        { luo: "Nono", english: "gratis, for nothing, in vain, empty", partOfSpeech: "adverb" },
        { luo: "Kiny", english: "tomorrow", partOfSpeech: "adverb" },
        { luo: "Nyoro", english: "yesterday", partOfSpeech: "adverb" }
      ]
    },
    {
      lessonId: "les-8-2-prepositions-conjunctions-interjections-salutations",
      title: "Prepositions, Conjunctions, Interjections & Traditional Salutations",
      summary:
        "Learn Dholuo prepositions (gi/kodi, e/ei, kuom, ni, ir, but, nyim, pier, bwo, loka), conjunctions (kendo vs. gi, ni vs. niya, mondo, nimar/nikech, momiyo/momono), interjections, and daily greetings.",
      sourcePages: [73, 74, 75, 76, 77, 78, 79, 80],
      grammarRules: [
        {
          id: "rule-prepositions-conjunctions",
          title: "Prepositions and Conjunctions ('Kendo' vs. 'Gi', 'Ni' vs. 'Niya', 'Momiyo' vs. 'Momono')",
          explanation:
            "1. 'Gi' connects nouns (Bel gi kal - matama and wimbi; Min gi nyathine - the mother and her child), whereas 'Kendo' connects verbs or clauses (Negibiro kendo negidhi) or nouns already governed by 'gi' (gi ludhe kendo gi runge). 'With it' is rendered by 'go', 'godo', or 'kode' (Ne okabirogo - I did not come with it). 2. Prepositions Bang' (after), Kuom (among/from), Nyim (in front of), But (near), Pier (behind), Ir (to) take inseparable personal suffixes (Nochung' buta - He stood near me; Nobiro ira - He came to me). 3. 'Ka' expresses 'at the place of' (Adhi k'Amimo) or 'for the purpose of fetching' (Abiro ka yath - I am coming for medicine; Adhi ka rech - I am going for fish). 4. Indirect speech is introduced by 'ni' (Nowachone ni...), whereas direct speech is introduced by 'niya' (Nowachone niya, Ng'a manogoyi?). 5. 'Momiyo / Emanomiyo' means 'therefore', while 'Momono' means 'therefore ... not / which prevents' (Adwaro dhi Kisumu, momona dhi ka tho).",
          examples: [
            { luo: "Nobiro gi (or kodi) tong'", english: "He came with a spear" },
            { luo: "Nochung' e dier ng'eya vs. Nochung' e pier ot", english: "He stood behind me vs. He stood behind the house" },
            { luo: "Omiya kuom rech", english: "He gives me some of the fish (partitive kuom)" },
            { luo: "Nowachone niya, Ng'a manogoyi?", english: "He said to her, 'Who beat you?'" }
          ],
          sourcePages: [73, 74, 75, 76, 77, 78]
        },
        {
          id: "rule-salutations-and-interjections",
          title: "Traditional Salutations and Expressive Interjections",
          explanation:
            "Standard peace greetings include 'Misawa!', 'Okwe!', 'Oboch!', 'Osasore!', 'Wakia!', and 'Oyangore!', intensified with 'ruok', 'ahinya', or 'matek' (Misawa ruok!). Men/friends address each other as 'Omera' (lit. my brother) and women/female friends as 'Nyamera' (lit. my sister). Morning inquiry: 'Inindo nade?' -> 'Anindo maber'. Daytime inquiry: 'Iriyo nade?' -> 'Ariyo maber'. Health inquiry: 'Ingima?' -> 'Angima', or 'Ringri ber?' -> 'Ringra ber'. Asking for news: 'Ka m'iaye luwo (or wacho) ang'o?' or 'Dala wacho ang'o?' -> 'Oling'' (No news / all quiet). Parting: 'Inindi' (Good-bye / sleep well) and 'Nyasaye riti' (May God protect you). Expressive completeness particles 'te' and 'pep' reinforce 'duto' (Orumo duto te; Dhok notho duto pep).",
          examples: [
            { luo: "Omera, misawa (amosi)! — Misawa ruok!", english: "My friend, peace! — Great peace!" },
            { luo: "Inindo nade? — Anindo maber, to in?", english: "How are you (morning)? — I am well, and you?" },
            { luo: "Iriyo nade? — Ariyo maber.", english: "How are you (during the day)? — I am all right." },
            { luo: "Ringra ber, to wiya bara matintin.", english: "I am all right except for a slight headache." },
            { luo: "Inindi! Nyasaye riti.", english: "Good-bye! May God protect you." }
          ],
          sourcePages: [78, 79, 80]
        }
      ],
      keyVocabulary: [
        { luo: "Misawa", english: "Peace! Hello! Good morning/evening! (also Okwe)", partOfSpeech: "salutation" },
        { luo: "Erokamano", english: "Thank you, well done", partOfSpeech: "interjection" },
        { luo: "Inindi", english: "Good-bye!", partOfSpeech: "salutation" },
        { luo: "Kendo", english: "and (connecting verbs/clauses), again", partOfSpeech: "conjunction" },
        { luo: "Nimar", english: "because, for (also Nikech, Wira)", partOfSpeech: "conjunction" }
      ]
    }
  ]
  }
];

// ============================================================================
// PHRASEBOOK SECTIONS (SECTIONS I - V, PAGES 102 - 117)
// ============================================================================

export const PHRASEBOOK_SECTIONS: DialogueSection[] = [
  {
    sectionId: "pb-1-usual",
    title: "I. Usual Everyday Expressions & Weather",
    contextDescription: "Essential greetings, polite requests, comprehension checks, personal introductions, and weather expressions.",
    sourcePages: [102, 103, 104],
    exchanges: [
      { english: "How do you do?", luo: "Iriyo nade? Inindo nade?" },
      { english: "I am well.", luo: "Ariyo maber. Anindo maber." },
      { english: "Good-morning. / Good-evening.", luo: "Misawa. Okwe." },
      { english: "Good-bye!", luo: "Inindi!" },
      { english: "What's the news of the day?", luo: "Dala (or: Pacho) wacho ang'o?" },
      { english: "No news.", luo: "Dala oling'. (or) Oling' aling'a." },
      { english: "May I come in?", luo: "Adonji e ot koso?" },
      { english: "Come in.", luo: "Donjiye." },
      { english: "Who is there? / Who are you?", luo: "In ng'a?" },
      { english: "Sit down.", luo: "Bedi piny." },
      { english: "Have you something to say?", luo: "In gi wach moro? Wachni moro nitiye?" },
      { english: "Do you want to speak to me?", luo: "Idwaro wacho koda?" },
      { english: "What do you want?", luo: "Idwaro ang'o?" },
      { english: "I am busy now.", luo: "An gi tich mang'eny kawono (or: Tichna ng'eny kawono.)" },
      { english: "Come again at a convenient time.", luo: "K'ineno kar wang'i, iduogi." },
      { english: "Wait a little!", luo: "Ter mos! Rit monde!" },
      { english: "Tell me what you want.", luo: "Wachna gi m'idwaro." },
      { english: "I do not understand.", luo: "Okawinjo maber." },
      { english: "Do you understand?", luo: "Iwinjo?" },
      { english: "I must go now.", luo: "Koro onego adhi." },
      { english: "I do not know.", luo: "Akia." },
      { english: "I will not.", luo: "Adagi, Akwer, Okadwar." },
      { english: "Speak slowly.", luo: "Wach mos. We ruyo." },
      { english: "Answer me.", luo: "Duokina wach." },
      { english: "Make haste.", luo: "Ret piyo." },
      { english: "Be careful, take care.", luo: "Wothimos. Maki mos. Kaw mos." },
      { english: "What is your name?", luo: "Nyingi ng'a?" },
      { english: "What tribe/place do you belong to?", luo: "I jakanye?" },
      { english: "Where do you come from?", luo: "Ia kanye?" },
      { english: "Where are you going to?", luo: "Idhi kanye?" },
      { english: "I have forgotten.", luo: "Wiya owil." },
      { english: "You have made a mistake.", luo: "Ibayo wachno." },
      { english: "Silence! Keep quiet!", luo: "Ling! we wach!" },
      { english: "That will do! That is enough!", luo: "Oromo." },
      { english: "Never mind!", luo: "Ber, oromo. Onge gimoro." },
      { english: "It is false!", luo: "Mano miriambo." },
      { english: "Are you sure?", luo: "Ing'eyo maber?" },
      { english: "It is true.", luo: "Adieri." },
      { english: "Let me pass.", luo: "Barna. Leng'rina." },
      { english: "What time is it?", luo: "Sa adi?" },
      { english: "It is cloudy.", luo: "Polo otimo luoch." },
      { english: "It is clearing up.", luo: "Luoch oyawore." },
      { english: "The sun is hot.", luo: "Chieng' kech." },
      { english: "It is raining.", luo: "Koth chwe." },
      { english: "The rain is over.", luo: "Koth ochok." },
      { english: "I do not understand Kavirondo (Dholuo) well.", luo: "Dholuo okawinjo maber." }
    ]
  },
  {
    sectionId: "pb-2-household-meals",
    title: "II. Household, Cooking, Market & Daily Tasks",
    contextDescription: "Conversations regarding meals, kitchen tasks, market shopping, laundry, and household management.",
    sourcePages: [104, 105, 106, 107],
    exchanges: [
      { english: "Tell the cook.", luo: "Wach ni jatedo." },
      { english: "I want something to eat.", luo: "Adwaro chiemo." },
      { english: "Bring some hot water.", luo: "Kel pi maliet." },
      { english: "Put the water on the fire.", luo: "Ket pi e kendo. Mur pi." },
      { english: "Wash those plates.", luo: "Lwok sendegi." },
      { english: "That cup is not clean.", luo: "Kikombo ok ler." },
      { english: "Wipe the spoon carefully.", luo: "Ywe kijiko mos." },
      { english: "Light the lamp.", luo: "Mok taya." },
      { english: "There is no oil in it.", luo: "Mo orumo." },
      { english: "Lay the table.", luo: "Pedhi mesa. Ndiki mesa." },
      { english: "The water is not boiling.", luo: "Pi pok'oyienyo." },
      { english: "Boil some eggs.", luo: "Tedi tong'gwen moko." },
      { english: "Fetch the teapot.", luo: "Om binika mar chai." },
      { english: "Ring the bell.", luo: "Go okot." },
      { english: "At what time do you have your meals?", luo: "Pile ichiemo sa adi?" },
      { english: "A little coffee when I get up.", luo: "Adwaro kahawa matin k'achiew." },
      { english: "Breakfast is at eight o'clock.", luo: "Wagago sa ariyo." },
      { english: "Go and buy in the market.", luo: "Dhi ng'iew e chiro." },
      { english: "Get me some fish.", luo: "Dhi omna rech." },
      { english: "What sort of meat is to be had?", luo: "Ring'o manade mantiye e chiro?" },
      { english: "There is beef every day.", luo: "Ring dhiang' emabetiye pilepile." },
      { english: "Sometimes mutton and goat.", luo: "Ndalo moko ring rombo gi diel nitiye." },
      { english: "There is plenty of fowl.", luo: "Gwen nitiye mang'eny." },
      { english: "Are there any vegetables?", luo: "Mboga bende nitiye?" },
      { english: "Make my bed properly.", luo: "Pedhina kitandana maber." },
      { english: "Close the door.", luo: "Chiegi dhoot." },
      { english: "Give me the keys.", luo: "Mia funguo." },
      { english: "Wash these clothes.", luo: "Lwok lepegi." },
      { english: "Have you washed yourself?", luo: "Iselwokori?" },
      { english: "I have a bath every day.", luo: "Alwokora pile." }
    ]
  },
  {
    sectionId: "pb-3-village-health",
    title: "III. Visiting a Village, Agriculture & Medical Care",
    contextDescription: "Visiting a village chief, inquiring about population, cattle, crops, local brewing, and treating illnesses or injuries.",
    sourcePages: [107, 108, 109, 112],
    exchanges: [
      { english: "Do not be afraid. I come to visit the people.", luo: "Kik iluor. Abiro neno jo dalani." },
      { english: "Are you well? — I am quite well.", luo: "Ringri ber? — Ee, ringra ber." },
      { english: "Are you the chief of this village?", luo: "In ruoth mar dalani?" },
      { english: "Where is the chief? — He is at home.", luo: "Ruoth ni kanye? — En dalane." },
      { english: "How many people? / How many houses?", luo: "Jo dalani gin adi? / Udi gin adi?" },
      { english: "Have you a good number of cattle?", luo: "In gi dhok mang'eny?" },
      { english: "Are the people quiet?", luo: "Pacho okwe?" },
      { english: "May I get something to drink?", luo: "Mia gimoro, amadhi." },
      { english: "This is not clear water.", luo: "Pi oduore, oklew." },
      { english: "Do you get the water from the river?", luo: "Iumbo pi aora?" },
      { english: "What sort of food do you eat?", luo: "Ichamo chiemo manade?" },
      { english: "Plenty of sweet potatoes.", luo: "Robuon emachamo mang'eny." },
      { english: "Are there any beans? And meal and Indian corn?", luo: "Oganda nitiye? Gi mogo gi banda?" },
      { english: "Is the sugar-cane very sweet?", luo: "Niyang' mit ahinya?" },
      { english: "Where do you get the honey?", luo: "Mor kich inwang'o kanye?" },
      { english: "Is there anybody sick? What is the matter with him?", luo: "Nitiye ng'ato matuwo? Otuwo ang'o?" },
      { english: "I have pains all over my body.", luo: "Ringra duto rama." },
      { english: "I cannot take any food.", luo: "Chiemo duto tinde otama." },
      { english: "I have fever. / I have diarrhoea. / I have dysentery.", luo: "Midusi maka. / Adiewo. / Adiewo remo." },
      { english: "I cannot sleep during the night.", luo: "Nindo otama otieno." },
      { english: "My arm is broken.", luo: "Bada otur." },
      { english: "Put on this ointment. Tie it up with this bandage.", luo: "Wiriye yadhini. Itwe gi nangani." },
      { english: "Do not stretch your arm for six days.", luo: "Kik irie badi ndalo auchiel." }
    ]
  },
  {
    sectionId: "pb-4-working-cultivation",
    title: "IV. Working, Farming & Cultivation",
    contextDescription: "Hiring workmen, discussing cultivation, planting and harvesting sweet potatoes, and farm tools.",
    sourcePages: [109, 110, 111],
    exchanges: [
      { english: "Do you want work? Do you know how to work?", luo: "Idwaro tich? Ing'eyo tich?" },
      { english: "Do you understand cultivation?", luo: "Ing'eyo pur?" },
      { english: "Do you know how to cut trees?", luo: "Ing'eyo tong'o yien?" },
      { english: "I know a little.", luo: "Ang'eyo matintin." },
      { english: "Are you a strong man?", luo: "In ng'ato matek?" },
      { english: "You can rest a little in the middle of the day.", luo: "Unyalo yweyo matin odiechieng'." },
      { english: "Come along to the garden.", luo: "Ero, bi, wadhi puodho." },
      { english: "Take a hoe. Dig from here to there.", luo: "Maki kwer. Pur nyaka a kaeni nyaka chopi kacha." },
      { english: "Put the grass aside.", luo: "Ket lum tenge." },
      { english: "Bring the banana. Cut it properly.", luo: "Kel rabolono. Tong' maber." },
      { english: "Take the potatoes to the garden.", luo: "Ter rabuon e puodho." },
      { english: "This man works well.", luo: "Ng'atni otiyo maber." },
      { english: "Go and plant there.", luo: "Dhi pidhi kacha." },
      { english: "Take out (dig up) the potatoes. Take care not to cut them.", luo: "Kuny rabuon. Kuny mos, kik ipudhigi." },
      { english: "Put them in these bags.", luo: "Rwakigi e kiropegi." },
      { english: "Make haste, it will rain. Send it home before the rain.", luo: "Reti, wang' koth nochwe. Ter dala ka koth podi." },
      { english: "You will be paid to-morrow.", luo: "Kiny nunwang' musachu." }
    ]
  },
  {
    sectionId: "pb-5-caravan-safari",
    title: "V. In Caravan, Travel & Safari",
    contextDescription: "Organizing a journey, crossing rivers, pitching camp, finding guides, and trading for supplies.",
    sourcePages: [111, 112, 113, 114, 115, 116, 117],
    exchanges: [
      { english: "We shall start to-morrow.", luo: "Kiny wanadhi safar." },
      { english: "Have you all the loads ready?", luo: "Isetweyo gikmoko duto?" },
      { english: "Some of the loads are too heavy.", luo: "Musike moko pek." },
      { english: "Beat the drum.", luo: "Go bul." },
      { english: "I have no rope.", luo: "Aonge tol." },
      { english: "Carry this box upright.", luo: "Sandugini iting' tir." },
      { english: "Is the tea ready? — I have finished, take it away.", luo: "Chai chiek? — Atieko, kaw oko." },
      { english: "Take this tent down.", luo: "Pudhi hema." },
      { english: "Count the loads. All ready then.", luo: "Kwan musike duto. Girumo giduto." },
      { english: "Halt, we will rest here.", luo: "Weuru, waywe kaeni." },
      { english: "What time shall we reach camp?", luo: "Wanachopi kampi karang'o?" },
      { english: "What is this place called?", luo: "Kaeni iluongo n'ang'o?" },
      { english: "Is this river deep? Can we wade across?", luo: "Aorani tut? D'wanyal yoro?" },
      { english: "Are there crocodiles?", luo: "Nyang' nitiye?" },
      { english: "Here we are.", luo: "Wasechopo, yaye." },
      { english: "Where is my tent? Bring it here and pitch it.", luo: "Hemba ere? Kel kani, igur." },
      { english: "Go and look for some clean water.", luo: "Dhi, dwar pi malew." },
      { english: "I want a guide to show me the road.", luo: "Adwaro ng'ato, onyisa yo." },
      { english: "I am tired. I shall go to bed.", luo: "Aol. Adhi nindo." },
      { english: "Which is the best road to go by? This road is blocked.", luo: "Yo maber ere? Yorni odinore." },
      { english: "Go carefully. Let us lead.", luo: "Wothi mos. Watel." },
      { english: "This is a fine country.", luo: "Pinyni ber." },
      { english: "Is food dear or cheap?", luo: "Chiemo tek koso ber?" },
      { english: "Do they sell sheep? How much a goat?", luo: "Nitiye rombe m'ing'iewo? Diek ing'iewo nade?" }
    ]
  }
];

// ============================================================================
// EXERCISES I - VIII WITH MODEL SOLUTIONS (PAGES 118 - 123)
// ============================================================================

export const COURSE_EXERCISES: CourseExerciseSet[] = [
  {
    exerciseId: "ex-1",
    title: "Exercise I: Nouns, Plurals, Construct Possessives, Adjectives & Numerals",
    focusTopics: ["Plural formation", "Simple & Construct Possessive", "Qualitative & Quantitative Adjectives", "Ordinals & Diminutives"],
    sourcePages: [118],
    fullOriginalPromptText:
      "A broad bedstead. A small canoe. Beautiful baskets. Tall trees. Bad herdsmen. A good chief. Fierce watchmen. New chairs. An old book. A thick chain. A beautiful child. Clean children. Bad servants. The children of the chief. The chair of the man. The pipes of the woman. Three large poles of the house. Ten good workmen and five lazy porters. The house of the chief. Three long handles. The arm of the sick man. Large villages and fields. Five times. The twelfth cow. The first boy. Ten empty water-jars. The cooking-pot of the girl. The old house of the sick girls. The villages of the new headmen. Three looking-glasses and fifteen umbrellas. The lids of the cooking-pots. The high hills and deep rivers. The sixth hut and the ninth spear of the chief. Dirty cooking-pots of the chief. The small grinding stone. The grandchild of the chief. Three young heifers. Five young bulls.",
    guidedItems: [
      { promptEnglish: "A small canoe.", solutionLuo: "Yie moro matin (or Yie matin)", grammarFocus: "Noun + Indefinite + Qualitative Adjective" },
      { promptEnglish: "Beautiful baskets.", solutionLuo: "Aditini mabeyo", grammarFocus: "-ini plural + plural adjective (maber -> mabeyo)" },
      { promptEnglish: "Tall trees.", solutionLuo: "Yedhe maboyo (or Yien maboyo)", grammarFocus: "Plural noun + plural adjective (mabor -> maboyo)" },
      { promptEnglish: "A good chief.", solutionLuo: "Ruoth maber", grammarFocus: "Singular noun + attributive adjective" },
      { promptEnglish: "The children of the chief.", solutionLuo: "Nyithindi ruoth", grammarFocus: "Plural Construct Possessive" },
      { promptEnglish: "The chair of the man.", solutionLuo: "Kom dhano (or Kom mar dhano)", grammarFocus: "Simple Possessive after -m" },
      { promptEnglish: "The house of the chief.", solutionLuo: "Od ruoth", grammarFocus: "Construct Possessive (Ot -> Od)" },
      { promptEnglish: "Five times.", solutionLuo: "Dibich (or Nyadibich / Ndalo abich)", grammarFocus: "Adverbial numeral" },
      { promptEnglish: "The twelfth cow.", solutionLuo: "Dhiang' mar apar g'ariyo", grammarFocus: "Ordinal numeral with mar" },
      { promptEnglish: "The first boy.", solutionLuo: "Woyi mokwongo (or Woyi marachiel)", grammarFocus: "Ordinal 'mokwongo'" },
      { promptEnglish: "The cooking-pot of the girl.", solutionLuo: "Aguch nyako", grammarFocus: "Construct Possessive exception (Agulu -> Aguch)" },
      { promptEnglish: "The high hills and deep rivers.", solutionLuo: "Gode maboyo gi aore matut", grammarFocus: "Plural nouns + adjectives joined by gi" },
      { promptEnglish: "The grandchild of the chief.", solutionLuo: "Nyakwar ruoth", grammarFocus: "Kinship construct possessive" },
      { promptEnglish: "Five young bulls.", solutionLuo: "Nyiruedhi abich", grammarFocus: "Plural diminutive (Nyi- + ruedhi) + cardinal number" }
    ]
  },
  {
    exerciseId: "ex-2",
    title: "Exercise II: Personal, Reflexive, Possessive, Demonstrative, Relative & Interrogative Pronouns",
    focusTopics: ["Subject/Object Pronouns", "Reflexive awon/giwegi", "Possessive suffixes & substantives", "Demonstratives & Relatives"],
    sourcePages: [118, 119],
    fullOriginalPromptText:
      "I carry a load. We like him. You (pl.) watch us. They come to visit us. You (sing.) fetch a knife. I myself can carry the chair. They themselves make the baskets. My basket is strong. The handle of your knife. The hem of your cloth. My feet and (pl.) arms. His pipe and your (sing.) tobacco. His mother and our father. That canoe is strong. Those bulls are fierce. This hoe is broken. This cow. No, that one over yonder. My cloth is clean, yours (pl.) dirty. My house is on the other side of the river, theirs on this side. The cow, which I sell, is young. It is I, who built the house of my father. I like the pipe, which you smoke. Who calls me? What do you want? I want to borrow your ox. Where are you going? What kind of food do you like? How many boats of the fishermen? Some boys learn well, others badly. All workmen want their pay. God is everywhere and knows everything. I require many eggs but few hens. Are there any cents, no, there are none? Where do you (pl.) keep them? Who works in my garden?",
    guidedItems: [
      { promptEnglish: "I carry a load.", solutionLuo: "Ating'o musigo.", grammarFocus: "1s Present Indefinite" },
      { promptEnglish: "We like him.", solutionLuo: "Waheroe (or Waherogo).", grammarFocus: "3s object suffix -e / -go" },
      { promptEnglish: "I myself can carry the chair.", solutionLuo: "An awon anyalo ting'o kom.", grammarFocus: "Emphatic reflexive 'awon'" },
      { promptEnglish: "The handle of your knife.", solutionLuo: "Log pandi.", grammarFocus: "Construct Possessive (Lok -> Log) + 2s possessive (Pala -> Pandi)" },
      { promptEnglish: "His mother and our father.", solutionLuo: "Min mare gi wonwa.", grammarFocus: "Irregular kinship possessives" },
      { promptEnglish: "My cloth is clean, yours (pl.) dirty.", solutionLuo: "Lawa ler, to maru chido.", grammarFocus: "Possessive suffix vs. Possessive substantive (maru)" },
      { promptEnglish: "It is I, who built the house of my father.", solutionLuo: "An emanagero od wora.", grammarFocus: "Cleft subject emphasis (An ema-)" },
      { promptEnglish: "I like the pipe, which you smoke.", solutionLuo: "Ahero kwesi m'imadho.", grammarFocus: "Relative pronoun ma -> m' before i-" },
      { promptEnglish: "Who calls me? What do you want?", solutionLuo: "Ng'a m'oluonga? Ang'o m'idwaro?", grammarFocus: "Interrogative pronouns + relative ma" },
      { promptEnglish: "God is everywhere and knows everything.", solutionLuo: "Nyasaye ni kwonde duto kendo ong'eyo gikmoko duto.", grammarFocus: "Locative ni + kwonde duto + kendo" }
    ]
  },
  {
    exerciseId: "ex-3",
    title: "Exercise III: Adverbs of Time, Place, Manner, Prepositions & Conjunctions",
    focusTopics: ["Time adverbs (orucha, kogwen, odiewor)", "Place adverbs & prepositions", "Accompaniment (kenda vs. kodi)"],
    sourcePages: [119],
    fullOriginalPromptText:
      "The day after to-morrow, I shall go on safari. Just now I cannot come to see you. At cock-crow the porters will start. From Nairobi to Kisumu is very far—You can give it to me presently. On account of that wild bull I run away. My chair is outside, yours (pl.) inside. Our garden is near the river on this side. Why do you come here? Because I like to see your nice house. How do you do? What is your health like in these days? (Thank you), I am alright now, but the other day I was sick. I find this knife on the side of the road. Where? Over yonder. When? Just now. Is it yours? No (but) my friend's, I know it well. Thieves steal often at midnight, but seldom during the day. Alright, I come presently. There lives an old woman at the foot of that hill and a blind man on the top of it. After the storm I shall go for a walk. Where will you be going? I like to go along the side of the river. Alright, are you going alone? No, together with my sister.",
    guidedItems: [
      { promptEnglish: "The day after to-morrow, I shall go on safari.", solutionLuo: "Orucha nadhi safar.", grammarFocus: "Time adverb 'orucha' + 1s Future" },
      { promptEnglish: "At cock-crow the porters will start.", solutionLuo: "Kogwen joting' nowuogi.", grammarFocus: "Traditional time phrase 'kogwen' + singular verb after plural noun" },
      { promptEnglish: "My chair is outside, yours (pl.) inside.", solutionLuo: "Koma ni oko, to maru ni iye.", grammarFocus: "Adverbs of place 'oko' vs. 'iye'" },
      { promptEnglish: "Our garden is near the river on this side.", solutionLuo: "Puodhwa ni but aora lokani.", grammarFocus: "Preposition 'but' + 'lokani'" },
      { promptEnglish: "Are you going alone? No, together with my sister.", solutionLuo: "Idhi kendi? Oyo, wadhi kodi nyamera (or kanyakachiel gi nyamera).", grammarFocus: "Reflexive 'kendi' vs. 'kodi / kanyakachiel gi'" }
    ]
  },
  {
    exerciseId: "ex-4",
    title: "Exercise IV: Degrees of Comparison (Loyo, Hingo, Yombo)",
    focusTopics: ["Comparative & superlative circumlocutions", "Expressing 'too' with hingo/loyo/tamo"],
    sourcePages: [120],
    fullOriginalPromptText:
      "Where do you live? Over yonder. Is it further than my place? A heifer is much dearer than a bull. A Nilotic Kavirondo likes his cattle better than his wife and his children. Which hill is higher, this one or that one? That one is steeper. There are too many stones on that hill, the soil on this one is better. When can you (sing.) finish this work, the day after to-morrow? No, that is too soon—This garden is much larger than ours but yours (sing.) is the largest. This pole is too heavy, one man cannot carry it. The goodness of God surpasses the wickedness of men. From Kisumu to Mumias is very far, a man sleeps once or twice on the road. Do not run ahead of me. The plates are put too high for me—He is too sick to walk.",
    guidedItems: [
      { promptEnglish: "A heifer is much dearer than a bull.", solutionLuo: "Roya tek moloyo ruath.", grammarFocus: "Comparative with 'moloyo'" },
      { promptEnglish: "This garden is much larger than ours, but yours (sing.) is the largest.", solutionLuo: "Puodhoni ohingo marwa gi duong', to mari oloyo duto.", grammarFocus: "Comparative 'hingo' and superlative 'oloyo duto'" },
      { promptEnglish: "The goodness of God surpasses the wickedness of men.", solutionLuo: "Ber mar Nyasaye oloyo richo mar ji.", grammarFocus: "Abstract nouns + 'loyo'" },
      { promptEnglish: "From Kisumu to Mumias is very far, a man sleeps once or twice on the road.", solutionLuo: "Nyaka a Kisumu nyaka chopi Mumias bor ahinya, ng'ato nindo dichiel kata diriyo e yo.", grammarFocus: "'Nyaka a ... nyaka chopi' + adverbial numerals" },
      { promptEnglish: "The plates are put too high for me.", solutionLuo: "Sende oketi malo, ohinga (or oloya).", grammarFocus: "Idiomatic 'too high for me' with 'ohinga / oloya'" }
    ]
  },
  {
    exerciseId: "ex-5",
    title: "Exercise V: Affirmative Verb Tenses, Imperatives, Subjunctives & Conditionals",
    focusTopics: ["Present, Past, Perfect, Future", "Purpose clauses with mondo", "Present & Past Conditionals"],
    sourcePages: [120, 121],
    fullOriginalPromptText:
      "Thou wilt come here. He has annoyed me. I answered the chief. The children are playing. Four boys have killed the goat. We shall bathe. The Europeans passed. The cook boiled the water and the boy prepared the table. The porters are carrying the loads. The people have chosen their Chief. The workmen will build a house. I am going to beat you. When are you coming, in order to buy cattle? Where have they brought the boat? Let us help the sick man. If you go, I shall beat you. The tall trees fell. The Chief has killed a bull. Every Kavirondo likes meat very much. How many workmen are you wanting, in order that you may begin to build your house? Ten workmen can finish the house in one month. To climb a hill is difficult. If you had asked me cloth, I would have given you. If you obey your father and mother, they will love you.",
    guidedItems: [
      { promptEnglish: "Thou wilt come here.", solutionLuo: "Nibi ka.", grammarFocus: "2s Future" },
      { promptEnglish: "I answered the chief.", solutionLuo: "Naduoko ni ruoth wach.", grammarFocus: "1s Past Indefinite + dative 'ni'" },
      { promptEnglish: "Four boys have killed the goat.", solutionLuo: "Yawoyi ang'wen osenego diel.", grammarFocus: "Present Perfect (-se-) with singular verb after plural noun subject" },
      { promptEnglish: "We shall bathe.", solutionLuo: "Wanalwokre.", grammarFocus: "1p Future Reflexive" },
      { promptEnglish: "To climb a hill is difficult.", solutionLuo: "Idho got tek.", grammarFocus: "Infinitive as subject + predicative adjective" },
      { promptEnglish: "If you had asked me cloth, I would have given you.", solutionLuo: "Dine ikwaya law, dine amiyi.", grammarFocus: "Past contrafactual conditional with 'dine'" }
    ]
  },
  {
    exerciseId: "ex-6",
    title: "Exercise VI: Negative Conjugation, 'Not Yet' Tense & Negative Conditionals",
    focusTopics: ["Negative Present, Past, Future", "Negative Imperative/Subjunctive (kik)", "'Not yet' (poki / podi ok)"],
    sourcePages: [121],
    fullOriginalPromptText:
      "I shall not go to Kisumu to-day. Yesterday you did not bring my pipe. Why did you not plant Simsim? Because it has not rained enough yet. The road is too bad, therefore I cannot ride my bicycle. Do not allow the work-people to be idle. May I beat them if they don't work well. Yes, but do not tell it to me. Why have you not cleaned my bicycle as yet? I was not able to find time as yet. If you do not work better you will get a beating. If the boys be not careful, they will break the plates. If you had not got out of the way, you would have been killed. Please give me some tobacco? No I will not give it to you, because you did not finish your work well. Some people like the Natives very much, others do not like them. I cannot be on guard day and night. If it does not rain soon, famine will kill many people. Though the rain has not stopped as yet we shall play football. Don't tell so many lies—they will not save you. If you had told the truth, you would not have been punished.",
    guidedItems: [
      { promptEnglish: "I shall not go to Kisumu to-day.", solutionLuo: "Okanadhi Kisumu tinende.", grammarFocus: "1s Negative Future (Okanadhi)" },
      { promptEnglish: "Yesterday you did not bring my pipe.", solutionLuo: "Nyoro ok nikel kwesina.", grammarFocus: "2s Negative Past (drops final -o of kelo)" },
      { promptEnglish: "Because it has not rained enough yet.", solutionLuo: "Nimar koth pok'ochwe maromo.", grammarFocus: "'Not yet' tense (pok')" },
      { promptEnglish: "The road is too bad, therefore I cannot ride my bicycle.", solutionLuo: "Yo rach ahinya, momona ringo gi ndigana.", grammarFocus: "Negative consequence conjunction 'momono'" },
      { promptEnglish: "Don't tell so many lies—they will not save you.", solutionLuo: "Kik iriambo mang'eny kamano—ok ginikwoi.", grammarFocus: "Negative imperative 'Kik' + Negative 3p Future" }
    ]
  },
  {
    exerciseId: "ex-7",
    title: "Exercise VII: Passive vs. Active Voice & Indirect Objects",
    focusTopics: ["Completed passive (o-)", "Ongoing passive (i-)", "Converting English agentive passives into Dholuo active voice"],
    sourcePages: [122],
    fullOriginalPromptText:
      "The heifer has been sold. The huts have been put on fire. I am called. Why have you been punished? When was the chief put in prison. The children are loved by their mother. Is the food ready? It is being brought. Where is the cook? He has been called. The child is being nursed by its mother. The man who serves God is being loved by Him. A good child prays for his father and mother. The Nilotic Kavirondo offer sacrifice to the sun. Our Lord appeared many times to his disciples after His Resurrection. Bring this pipe to your master. The chief gives you this young bull. I will also send a present to the chief. Have you informed the chief that we are approaching (donjo) his village. Yes, he has been called already. Where are my boots? They are being polished. Who has told him to work for me? This man is in prison for stealing cows. Where is the milk? It has been brought but is being boiled. Who has told the work people that they may go near the house? Get out of the way for the bicycle. The bicycle is broken. Where is it? It is being brought.",
    guidedItems: [
      { promptEnglish: "The heifer has been sold.", solutionLuo: "Roya oseng'iew.", grammarFocus: "Agentless Present Perfect Passive" },
      { promptEnglish: "I am called.", solutionLuo: "Oluonga (or Iluonga - I am being called).", grammarFocus: "Passive with personal pronoun suffix" },
      { promptEnglish: "The children are loved by their mother.", solutionLuo: "Min mare ohero nyithinde.", grammarFocus: "Active voice required when agent ('by their mother') is expressed" },
      { promptEnglish: "Is the food ready? It is being brought.", solutionLuo: "Chiemo chiek? Ikelo.", grammarFocus: "Ongoing impersonal passive 'Ikelo'" },
      { promptEnglish: "Where is the milk? It has been brought but is being boiled.", solutionLuo: "Chak ere? Osekel, to itedo.", grammarFocus: "Contrast between completed passive (Osekel) and ongoing passive (itedo)" },
      { promptEnglish: "Get out of the way for the bicycle.", solutionLuo: "Bar ni ndiga (or Leng'ri ni ndiga).", grammarFocus: "Prepositional verb 'baro ni / leng'ore ni'" }
    ]
  },
  {
    exerciseId: "ex-8",
    title: "Exercise VIII (labelled VII in original): Defective Verbs, Reflexives, Reciprocals & Modals",
    focusTopics: ["To be (bedo/bet, en)", "To have (bet gi / gi)", "To lack (aonge)", "Reflexives & Reciprocals", "Modals (onego, owinjore)"],
    sourcePages: [122, 123],
    fullOriginalPromptText:
      "He is. You were. We are. They shall be. That they be. Thou art. I was. They were fools. Thou art a glutton. We shall be near the river. I had a beautiful knife. The Kavirondo have many cows. We shall have ten rupees. Thou hast one goat only. The old man had three children, but now he has only one. A good boy washes himself every day. A cat and a dog do not love one another. Thou shalt love thy neighbour as thyself. The natives often praise themselves only. The man fell from the tree. The murderer tried to hang himself. Tell (sing.) the children to be quiet. If you want to learn, listen to my words. You simply do nothing. You don't pay attention. It is difficult to learn the Kavirondo language by yourself. You ought to beat the boys, if they will not listen. We must observe God's commandments. A child must obey his parents. In order to learn the Kavirondo language you ought to talk often to the natives. We shall be without work unless we look for it ourselves. When is your master at home, I want to see him? Some boys salute Europeans in order to attract the latter's attention.",
    guidedItems: [
      { promptEnglish: "He is. You were. We are. They shall be. That they be.", solutionLuo: "Obet (or En). Nubet (or Ne un). Wabet (or Wan). Ginibedi. Gibedi.", grammarFocus: "Conjugation of 'Bedo / Bet'" },
      { promptEnglish: "I had a beautiful knife.", solutionLuo: "Nabet gi pala maber (or Ne an gi pala maber).", grammarFocus: "Past tense of 'to have' (Nabet gi)" },
      { promptEnglish: "A good boy washes himself every day.", solutionLuo: "Woyi maber lwokore pilepile.", grammarFocus: "Reflexive verb 'lwokore'" },
      { promptEnglish: "A cat and a dog do not love one another.", solutionLuo: "Paka gi guok ok giherore.", grammarFocus: "Reciprocal verb 'herore'" },
      { promptEnglish: "The man fell from the tree.", solutionLuo: "Ng'ato nogore piny e yath.", grammarFocus: "Reflexive idiom 'gore piny' (to fall down)" },
      { promptEnglish: "We must observe God's commandments.", solutionLuo: "Onego warit buche mag Nyasaye.", grammarFocus: "Modal 'onego' + Subjunctive" },
      { promptEnglish: "In order to learn the Kavirondo language you ought to talk often to the natives.", solutionLuo: "Mondo ipuonjri Dholuo, owinjore iwoyo pile gi Joluo.", grammarFocus: "'Mondo' + Subjunctive and 'owinjore' (ought)" }
    ]
  }
];

// ============================================================================
// PROGRAMMATIC MORPHOLOGICAL HELPER FUNCTIONS
// ============================================================================

/**
 * Extracts the grammatical root of a Dholuo verb according to Page 43 rules.
 */
export function extractVerbRoot(infinitive: string): string {
  const clean = infinitive.trim();
  const lower = clean.toLowerCase();

  // Explicit exceptions (Page 43)
  if (lower === "biro") return clean.slice(0, -2); // "Bi"
  if (lower === "neno") return clean.slice(0, -2); // "Ne" (to see)

  // Rule (a) & (b): Single vowel, consonant-final, or vowel other than 'o'
  if (clean.length === 1 || !lower.endsWith("o")) {
    return clean;
  }

  // Rule (c): Ends in 'yo' preceded by a vowel -> drop 'yo'
  if (lower.endsWith("yo") && clean.length > 2) {
    const charBeforeYo = lower[lower.length - 3];
    if (["a", "e", "i", "o", "u"].includes(charBeforeYo)) {
      return clean.slice(0, -2);
    }
  }

  // Rule (d): Standard '-o' verb -> drop '-o'
  return clean.slice(0, -1);
}

/**
 * Generates the full affirmative and negative conjugation table for a regular
 * Dholuo verb across Present, Past, Present Perfect, Past Perfect, Future,
 * Subjunctive, and Imperative.
 */
export function conjugateVerb(infinitive: string): Record<string, Record<string, string>> {
  const inf = infinitive.trim().toLowerCase();
  const root = extractVerbRoot(inf);
  const futureStem = root.endsWith("k") ? root.slice(0, -1) + "gi" : root;

  return {
    infinitive: { affirmative: inf },
    imperative: {
      singularAffirmative: futureStem,
      pluralAffirmative: `${futureStem}uru`,
      singularNegative: `kik i${futureStem}`,
      pluralNegative: `kik u${futureStem}`
    },
    presentIndefinite: {
      "1s": `a${inf}`,
      "2s": `i${inf}`,
      "3s": `o${inf}`,
      "1p": `wa${inf}`,
      "2p": `u${inf}`,
      "3p": `gi${inf}`,
      "1s_neg": `ok a${inf}`,
      "2s_neg": `ok i${inf}`,
      "3s_neg": `ok o${inf}`,
      "1p_neg": `ok wa${inf}`,
      "2p_neg": `ok u${inf}`,
      "3p_neg": `ok gi${inf}`
    },
    pastIndefinite: {
      "1s": `na${inf}`,
      "2s": `ni${inf}`,
      "3s": `no${inf}`,
      "1p": `newa${inf}`,
      "2p": `nu${inf}`,
      "3p": `negi${inf}`,
      "1s_neg": `ne ok a${inf}`,
      "2s_neg": `ne ok i${inf}`,
      "3s_neg": `ne ok o${inf}`,
      "1p_neg": `ne ok wa${inf}`,
      "2p_neg": `ne ok u${inf}`,
      "3p_neg": `ne ok gi${inf}`
    },
    presentPerfect: {
      "1s": `ase${inf}`,
      "2s": `ise${inf}`,
      "3s": `ose${inf}`,
      "1p": `wase${inf}`,
      "2p": `use${inf}`,
      "3p": `gise${inf}`
    },
    pastPerfect: {
      "1s": `nase${inf}`,
      "2s": `nise${inf}`,
      "3s": `nose${inf}`,
      "1p": `newase${inf}`,
      "2p": `neuse${inf}`,
      "3p": `negise${inf}`
    },
    future: {
      "1s": `na${futureStem}`,
      "2s": `ni${futureStem}`,
      "3s": `no${futureStem}`,
      "1p": `wana${futureStem}`,
      "2p": `unu${futureStem}`,
      "3p": `gini${futureStem}`,
      "1s_neg": `okanaher`.replace("her", futureStem),
      "2s_neg": `okani${futureStem}`,
      "3s_neg": `okano${futureStem}`,
      "1p_neg": `okwana${futureStem}`,
      "2p_neg": `okanu${futureStem}`,
      "3p_neg": `okagini${futureStem}`
    },
    subjunctive: {
      "1s": `a${futureStem}`,
      "2s": `i${futureStem}`,
      "3s": `o${futureStem}`,
      "1p": `wa${futureStem}`,
      "2p": `u${futureStem}`,
      "3p": `gi${futureStem}`
    }
  };
}

// ============================================================================
// EXPORT COMPLETE COURSE OBJECT
// ============================================================================

export const LUO_COURSE: LuoLanguageCourse = {
  courseTitle: "Dholuo (Nilotic Kavirondo) Comprehensive Grammar, Morphology & Phraseology Course",
  languageName: "Dholuo (Luo)",
  isoCode: "luo",
  dialectRegion: "Kavirondo / Victoria Nyanza (Kisumu, Gem, Seme, Uyoma, Sakwa, Kajulu, Ugenya, Trans-Yala)",
  historicalSource: {
    title: "A Handbook of the Kavirondo Language (Containing the Grammar and Phraseology)",
    authors: "Some Fathers of St. Joseph's Society (Mill-Hill, London)",
    locationAndDate: "Kisumu, Feast of the Immaculate Conception, 1920 (Printed Nairobi, 1921)",
    dedication: "To The Right Rev. J. Biermans, D.D., Vicar Apostolic of the Upper Nile (1896–1921)",
    relatedNiloticLanguages: ["Gang' (Acholi)", "Alur", "Kumam", "Miro (Lango)", "Padhola"]
  },
  modules: COURSE_MODULES,
  phrasebookSections: PHRASEBOOK_SECTIONS,
  exercises: COURSE_EXERCISES
};


// ============================================================================
// GRAMMAR REFERENCE SECTIONS (FOR WEB & MOBILE GRAMMAR TAB)
// ============================================================================

export const LUO_GRAMMAR_SECTIONS: GrammarSection[] = COURSE_MODULES.flatMap((mod) =>
  mod.lessons.map((lesson) => {
    const contentLines: string[] = [];

    for (const rule of lesson.grammarRules) {
      contentLines.push(`**${rule.title}** (pp. ${rule.sourcePages.join(', ')})`);
      contentLines.push(rule.explanation);
      if (rule.subRules && rule.subRules.length > 0) {
        for (const sub of rule.subRules) {
          contentLines.push(`- ${sub}`);
        }
      }
      if (rule.exceptions && rule.exceptions.length > 0) {
        for (const exc of rule.exceptions) {
          contentLines.push(`- *Exception*: ${exc}`);
        }
      }
      contentLines.push('');
    }

    if (lesson.morphologyTables && lesson.morphologyTables.length > 0) {
      for (const table of lesson.morphologyTables) {
        contentLines.push(`**${table.category}** (${table.singularOrBaseEnding} → ${table.transformedEnding})`);
        contentLines.push(table.patternDescription);
        for (const ex of table.examples) {
          contentLines.push(`- *${ex.baseForm}* (${ex.baseMeaning}) → **${ex.transformedForm}** (${ex.transformedMeaning})`);
        }
        if (table.exceptions && table.exceptions.length > 0) {
          for (const exc of table.exceptions) {
            contentLines.push(`- *Irregular*: *${exc.baseForm}* (${exc.baseMeaning}) → **${exc.transformedForm}**${exc.note ? ` (${exc.note})` : ''}`);
          }
        }
        contentLines.push('');
      }
    }

    if (lesson.verbParadigms && lesson.verbParadigms.length > 0) {
      for (const vp of lesson.verbParadigms) {
        contentLines.push(`**${vp.tenseOrMood}**`);
        contentLines.push(`*Formation*: ${vp.formationRule}`);
        for (const note of vp.usageNotes) {
          contentLines.push(`- ${note}`);
        }
        for (const row of vp.rows) {
          const aff = row.affirmative.join(' / ');
          const neg = row.negative ? ` | Neg: *${row.negative.join(' / ')}*` : '';
          contentLines.push(`- **${row.pronounLabel}** (${row.person}): *${aff}* — ${row.englishAffirmative}${neg}`);
        }
        contentLines.push('');
      }
    }

    const examples = [
      ...lesson.grammarRules.flatMap((r) =>
        r.examples.map((ex) => ({
          luo: ex.luo,
          english: ex.english,
          explanation: ex.grammarNote || r.title,
        }))
      ),
      ...(lesson.verbParadigms || []).flatMap((vp) =>
        vp.examples.map((ex) => ({
          luo: ex.luo,
          english: ex.english,
          explanation: vp.tenseOrMood,
        }))
      ),
    ];

    return {
      id: lesson.lessonId,
      title: `Module ${mod.moduleNumber} • ${lesson.title}`,
      summary: lesson.summary,
      content: contentLines.join('\n').trim(),
      examples,
    };
  })
);

// ============================================================================
// SKILL TREE ADAPTER: MAPS MODULES, PHRASEBOOK & EXERCISES TO LUO_UNITS
// ============================================================================

const MODULE_ICONS: Record<string, string> = {
  'mod-1-phonology-orthography': 'Volume2',
  'mod-2-nouns-gender-plurals': 'BookOpen',
  'mod-3-possessive-system': 'Key',
  'mod-4-adjectives-numerals': 'Hash',
  'mod-5-pronouns': 'Users',
  'mod-6-verb-conjugation-tenses-moods': 'RefreshCw',
  'mod-7-voice-defective-verbs-valency': 'GitBranch',
  'mod-8-adverbs-prepositions-conjunctions-salutations': 'Compass',
};

const LESSON_ICONS: Record<string, string> = {
  'les-1-1-alphabet-consonants': 'Volume2',
  'les-1-2-vowels-stress-elision': 'Mic',
  'les-2-1-noun-classes-gender-diminutives': 'UserCheck',
  'les-2-2-plural-formation': 'Layers',
  'les-3-1-simple-possessive': 'Link',
  'les-3-2-construct-possessive': 'Key',
  'les-4-1-adjectives-syntax-morphology': 'Palette',
  'les-4-2-numerals-comparison': 'Hash',
  'les-5-1-personal-reflexive-possessive-pronouns': 'Users',
  'les-5-2-demonstrative-relative-interrogative-indefinite': 'HelpCircle',
  'les-6-1-verb-roots-present-past-perfect': 'Play',
  'les-6-2-future-imperative-subjunctive-conditional': 'FastForward',
  'les-7-1-passive-reflexive-reciprocal-reduplicated': 'Repeat',
  'les-7-2-defective-verbs-valency-syntax': 'Sliders',
  'les-8-1-adverbs-time-place-manner-idioms': 'Clock',
  'les-8-2-prepositions-conjunctions-interjections-salutations': 'MessageCircle',
};

const PHRASEBOOK_ICONS: Record<string, string> = {
  'pb-1-usual': 'MessageSquare',
  'pb-2-household-meals': 'Home',
  'pb-3-village-health': 'Heart',
  'pb-4-working-cultivation': 'Sprout',
  'pb-5-caravan-safari': 'Map',
};

const SUPPLEMENTAL_LESSON_SENTENCES: Record<string, { target: string; source: string }[]> = {
  'les-1-1-alphabet-consonants': [
    { target: 'Dholuo onge herufi c, j, q, v, x, z mag dho ngere.', source: 'Dholuo has no English letters c, j, q, v, x, z.' },
    { target: 'Wawacho dholuo maber.', source: 'We speak Dholuo well.' },
    { target: 'Soma wechegi maber.', source: 'Read these words well.' },
    { target: 'Japuonj somo bugene.', source: 'The teacher reads his books.' },
  ],
  'les-1-2-vowels-stress-elision': [
    { target: "Ng'ato achiel obiro oma.", source: 'One man comes to fetch me.' },
    { target: 'Ka wagero ot maber.', source: 'When we build a good house.' },
    { target: 'Podi onindo e ot.', source: 'He is still asleep in the house.' },
    { target: 'Jatedo tedi chiemo.', source: 'The cook cooks food.' },
  ],
  'les-2-1-noun-classes-gender-diminutives': [
    { target: 'Dhano maber obiro.', source: 'A good person came.' },
    { target: 'Nyako dhi ka.', source: 'The girl goes here.' },
    { target: 'Woyi dwaro kuon.', source: 'The boy wants food.' },
    { target: 'Otieno nonyuol gotieno.', source: 'Otieno was born at night.' },
    { target: 'Akinyi nonyuol gokinyi.', source: 'Akinyi was born in the morning.' },
  ],
  'les-2-2-plural-formation': [
    { target: 'Guogi duto ringo.', source: 'All the dogs are running.' },
    { target: 'Dhok ni e laro.', source: 'The cattle are in the yard.' },
    { target: 'Nyithindo nindo.', source: 'The children are sleeping.' },
    { target: 'Gweno chamo kal.', source: 'The chicken eats millet.' },
  ],
  'les-3-1-simple-possessive': [
    { target: 'Kwesi mar Petrus ni ka.', source: "Peter's pipe is here." },
    { target: 'Kombe mag won ni malo.', source: "Father's chairs are up there." },
    { target: 'Min gi won ohero nyathi.', source: 'Mother and father love the child.' },
  ],
  'les-3-2-construct-possessive': [
    { target: 'Oda ni but aora.', source: 'My house is near the river.' },
    { target: 'Jo dala duto nindo.', source: 'All the home people are sleeping.' },
    { target: 'Dayo tedi kuon maber.', source: 'Grandmother cooks good ugali.' },
  ],
  'les-4-1-adjectives-syntax-morphology': [
    { target: "Dhano maber ohero ng'wono.", source: 'A good person loves kindness.' },
    { target: "Dhiang' marachar ni e puodho.", source: 'The white cow is in the field.' },
    { target: "Ruath marating' maduong'.", source: 'The black bull is large.' },
  ],
  'les-4-2-numerals-comparison': [
    { target: 'An gi ji ariyo.', source: 'I have two people.' },
    { target: 'Kel kombe adek.', source: 'Bring three chairs.' },
    { target: "Ng'at achiel obiro.", source: 'One person came.' },
  ],
  'les-5-1-personal-reflexive-possessive-pronouns': [
    { target: 'An adhi e chiro.', source: 'I am going to the market.' },
    { target: 'Wan wahero pacho.', source: 'We love home.' },
    { target: 'An awuon aloso oda.', source: 'I myself built my house.' },
    { target: 'En kende odak kanyo.', source: 'He lives there alone.' },
  ],
  'les-5-2-demonstrative-relative-interrogative-indefinite': [
    { target: 'Ot ma en mara.', source: 'This house is mine.' },
    { target: 'Ji macha dhi chiro.', source: 'Those people are going to the market.' },
    { target: "Nyingi ng'a?", source: 'What is your name?' },
    { target: 'Idhi kanye?', source: 'Where are you going?' },
  ],
  'les-6-1-verb-roots-present-past-perfect': [
    { target: 'Ahero kwesi mara.', source: 'I love my pipe.' },
    { target: 'Nahero chiemo maber.', source: 'I loved good food.' },
    { target: 'Asehero wuoth ahinya.', source: 'I have loved the journey very much.' },
    { target: 'Negisehero somo buge.', source: 'They had loved reading books.' },
  ],
  'les-6-2-future-imperative-subjunctive-conditional': [
    { target: 'Wanaher pacho marwa.', source: 'We shall love our home.' },
    { target: 'Giniher timbe mabeyo.', source: 'They will love good deeds.' },
    { target: 'Ok adwar chiemo sani.', source: 'I do not want food now.' },
    { target: 'Kik idhi e aora.', source: 'Do not go to the river.' },
  ],
  'les-7-1-passive-reflexive-reciprocal-reduplicated': [
    { target: 'Aherora ahinya.', source: 'I love myself very much.' },
    { target: "Waherore ng'ato gi nyawadgi.", source: 'We love one another as companions.' },
    { target: 'Ji duto chokore kaeni.', source: 'All people assemble here.' },
  ],
  'les-7-2-defective-verbs-valency-syntax': [
    { target: "Onge ng'ato e ot.", source: 'There is nobody in the house.' },
    { target: 'Adwaro chamo rech gi kuon.', source: 'I want to eat fish with ugali.' },
    { target: 'Madhi pi malew.', source: 'Drink clean water.' },
  ],
  'les-8-1-adverbs-time-place-manner-idioms': [
    { target: 'Kiny wanadhi pacho.', source: 'Tomorrow we shall go home.' },
    { target: 'Tinende koth chwe.', source: 'Today it is raining.' },
    { target: 'Wach mos mondo awinji.', source: 'Speak slowly so that I understand you.' },
    { target: 'Otiyo matek ahinya.', source: 'He worked very hard.' },
  ],
  'les-8-2-prepositions-conjunctions-interjections-salutations': [
    { target: 'Oyawore, nade?', source: 'Good morning, how are you?' },
    { target: 'Oriti, wanenre kendo.', source: 'Goodbye, we shall see each other again.' },
    { target: 'Thuol ni e ot.', source: 'A snake is in the house.' },
    { target: "Nobiro gi tong'.", source: 'He came with a spear.' },
    { target: 'Tedi kuon mondo wacham.', source: 'Cook food so that we eat.' },
  ],
};

interface SkillWord {
  target: string;
  source: string;
  pronunciation?: string;
  partOfSpeech?: string;
  hint?: string;
  audio?: string;
  example?: string;
  response?: string;
}

function sanitizeCardText(text: string): string {
  return text
    .replace(/:/g, ' —')
    .replace(/->/g, 'to')
    .replace(/→/g, 'to')
    .replace(/\s+/g, ' ')
    .trim();
}

function addUniqueWord(
  list: SkillWord[],
  seenTargets: Set<string>,
  seenSources: Set<string>,
  word: SkillWord
): void {
  const cleanTarget = word.target
    .replace(/\s*\(or:?[^)]*\)/gi, '')
    .replace(/->/g, '')
    .replace(/→/g, '')
    .replace(/^[-•\s]+/, '')
    .trim();
  const cleanSource = sanitizeCardText(word.source);
  if (!cleanTarget || !cleanSource || cleanTarget.length < 2) return;
  const normTarget = cleanTarget.toLowerCase();
  const normSource = cleanSource.toLowerCase();
  if (normTarget === normSource) return;
  if (seenTargets.has(normTarget) || seenSources.has(normSource)) return;
  seenTargets.add(normTarget);
  seenSources.add(normSource);
  list.push({
    ...word,
    target: cleanTarget,
    source: cleanSource,
    pronunciation: word.pronunciation ? sanitizeCardText(word.pronunciation) : undefined,
  });
}

function isCleanPracticeSentence(luo: string, english: string): boolean {
  if (!luo || !english) return false;
  if (luo.includes('->') || luo.includes('vs.') || luo.includes('/')) return false;
  if (english.includes('->') || english.includes('vs.')) return false;
  const words = luo.trim().split(/\s+/);
  return words.length >= 2 && words.length <= 10;
}

function deterministicRotate<T>(items: T[], offset: number): T[] {
  if (items.length <= 1) return [...items];
  const shift = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(shift), ...items.slice(0, shift)];
}

/**
 * Generates authored exercises that have 4 distinct `options` so they work
 * seamlessly in both the Mobile Practice Quiz (`LanguageCourseTool.tsx`) and
 * the Web `LessonPlayer.tsx` (where `generateExercises` supplements them with
 * interactive reorder, word_bank, match_pairs, and typing exercises).
 */
function buildExercisesForSkill(
  words: SkillWord[],
  sentences: { target: string; source: string }[]
): Exercise[] {
  const exercises: Exercise[] = [];

  const findSourceWord = (answer: string): SkillWord | undefined => {
    const normalizedAnswer = answer.toLowerCase().trim();
    const matches = words.filter((word) =>
      [word.target, word.source].some(
        (value) => value.toLowerCase().trim() === normalizedAnswer
      )
    );
    return matches.length === 1 ? matches[0] : undefined;
  };

  // 1. Multiple choice: Luo -> English (up to 4 items)
  const mcCount = Math.min(4, words.length);
  for (let i = 0; i < mcCount; i++) {
    const current = words[i];
    const distractors = words
      .filter((_, idx) => idx !== i)
      .map((w) => w.source)
      .filter((s) => s.toLowerCase() !== current.source.toLowerCase());
    const uniqueDistractors = Array.from(new Set(distractors)).slice(0, 3);
    if (uniqueDistractors.length === 3) {
      const options = deterministicRotate([current.source, ...uniqueDistractors], i + 1);
      exercises.push({
        type: 'multiple_choice',
        prompt: `What does "${current.target}" mean in English?`,
        correctAnswer: current.source,
        options,
        hint: current.pronunciation || undefined,
        sourceWord: current,
      });
    }
  }

  // 2. Multiple choice: English -> Luo (up to 4 items)
  const revStart = Math.min(2, Math.max(0, words.length - 4));
  const revEnd = Math.min(words.length, revStart + 4);
  for (let i = revStart; i < revEnd; i++) {
    const current = words[i];
    const distractors = words
      .filter((_, idx) => idx !== i)
      .map((w) => w.target)
      .filter((t) => t.toLowerCase() !== current.target.toLowerCase());
    const uniqueDistractors = Array.from(new Set(distractors)).slice(0, 3);
    if (uniqueDistractors.length === 3) {
      const options = deterministicRotate([current.target, ...uniqueDistractors], i + 2);
      exercises.push({
        type: 'multiple_choice',
        prompt: `How do you say "${current.source}" in Dholuo?`,
        correctAnswer: current.target,
        options,
        hint: current.pronunciation || undefined,
        sourceWord: current,
      });
    }
  }

  // 3. Fill in the blank exercises with 4 options (up to 2 sentences)
  let fillAdded = 0;
  for (let i = 0; i < sentences.length && fillAdded < 2; i++) {
    const sent = sentences[i % sentences.length];
    const cleanTarget = sent.target.replace(/\s+/g, ' ').trim();
    const tokens = cleanTarget.split(' ');
    if (tokens.length >= 3) {
      const blankIdx = i % 2 === 0 ? 0 : tokens.length - 1;
      const missingWord = tokens[blankIdx].replace(/[.,?!;:]+$/, '');
      if (missingWord.length >= 2) {
        const blankedTokens = [...tokens];
        blankedTokens[blankIdx] = tokens[blankIdx].replace(missingWord, '___');
        const distractorPool = words
          .map((w) => w.target.split(/\s+/)[0].replace(/[.,?!;:]+$/, ''))
          .filter((t) => t.length >= 2 && t.toLowerCase() !== missingWord.toLowerCase());
        const uniqueDistractors = Array.from(new Set(distractorPool)).slice(0, 3);
        if (uniqueDistractors.length === 3) {
          exercises.push({
            type: 'fill_blank',
            prompt: `Complete: "${blankedTokens.join(' ')}" (${sent.source})`,
            correctAnswer: missingWord,
            options: deterministicRotate([missingWord, ...uniqueDistractors], i + 1),
            hint: sent.source,
            sourceWord: findSourceWord(missingWord),
          });
          fillAdded++;
        }
      }
    }
  }

  // 4. Match pairs exercise (4 unique pairs)
  if (words.length >= 4) {
    const pairWords = words.slice(0, 4);
    exercises.push({
      type: 'match_pairs',
      prompt: 'Match the Dholuo words and expressions with their English meanings:',
      correctAnswer: pairWords.map((w) => `${w.target}: ${w.source}`).join(', '),
      pairs: pairWords.map((w) => ({ left: w.target, right: w.source })),
    });
  }

  return exercises;
}

function buildLessonTips(lesson: Lesson): string {
  const parts: string[] = [lesson.summary];
  for (const rule of lesson.grammarRules) {
    parts.push(`${rule.title}: ${rule.explanation}`);
    if (rule.subRules && rule.subRules.length > 0) {
      parts.push(rule.subRules.join(' '));
    }
  }
  return parts.join('\n\n');
}

function chunkWordsIntoSkills(
  baseId: string,
  baseTitle: string,
  icon: string,
  description: string,
  tips: string,
  culturalNote: string,
  allWords: SkillWord[],
  sentences: { target: string; source: string }[],
  maxPerSkill: number = 15
): CourseSkill[] {
  if (allWords.length <= maxPerSkill) {
    return [
      {
        id: baseId,
        title: baseTitle,
        icon,
        description,
        tips,
        culturalNote,
        words: allWords,
        sentences,
        authoredExercises: buildExercisesForSkill(allWords, sentences),
      },
    ];
  }

  const numParts = Math.ceil(allWords.length / maxPerSkill);
  const chunkSize = Math.ceil(allWords.length / numParts);
  const skills: CourseSkill[] = [];

  for (let p = 0; p < numParts; p++) {
    const slice = allWords.slice(p * chunkSize, (p + 1) * chunkSize);
    if (slice.length < 6 && skills.length > 0) {
      skills[skills.length - 1].words.push(...slice);
      skills[skills.length - 1].authoredExercises = buildExercisesForSkill(
        skills[skills.length - 1].words,
        sentences
      );
      break;
    }
    const partId = p === 0 ? baseId : `${baseId}-part-${p + 1}`;
    const partTitle = `${baseTitle} (Part ${p + 1})`;
    skills.push({
      id: partId,
      title: partTitle,
      icon,
      description,
      tips,
      culturalNote,
      words: slice,
      sentences,
      authoredExercises: buildExercisesForSkill(slice, sentences),
    });
  }

  return skills;
}

// Build Units 1-8 from COURSE_MODULES
const GRAMMAR_MODULE_UNITS: CourseUnit[] = COURSE_MODULES.map((mod) => {
  return {
    id: mod.moduleId,
    title: `Module ${mod.moduleNumber}: ${mod.title}`,
    description: mod.description,
    icon: MODULE_ICONS[mod.moduleId] || 'BookOpen',
    skills: mod.lessons.flatMap((lesson) => {
      const words: SkillWord[] = [];
      const seenTargets = new Set<string>();
      const seenSources = new Set<string>();

      // 1. Key Vocabulary
      for (const vocab of lesson.keyVocabulary) {
        const matchingExample = lesson.grammarRules
          .flatMap((r) => r.examples)
          .find((ex) => ex.luo.toLowerCase().includes(vocab.luo.toLowerCase().split(' ')[0]));
        addUniqueWord(words, seenTargets, seenSources, {
          target: vocab.luo,
          source: vocab.english,
          pronunciation: vocab.notes ? `${vocab.partOfSpeech} • ${vocab.notes}` : vocab.partOfSpeech,
          partOfSpeech: vocab.partOfSpeech,
          example: matchingExample ? `${matchingExample.luo} — ${matchingExample.english}` : undefined,
        });
      }

      // 2. Morphology Tables (transformed plural/construct forms as clean cards)
      if (lesson.morphologyTables) {
        for (const table of lesson.morphologyTables) {
          for (const ex of table.examples) {
            addUniqueWord(words, seenTargets, seenSources, {
              target: ex.transformedForm,
              source: `${ex.transformedMeaning} (from ${ex.baseForm})`,
              pronunciation: `${table.category} • base ${ex.baseForm} (${ex.baseMeaning})`,
              partOfSpeech: 'noun',
              example: `${ex.baseForm} (${ex.baseMeaning}) → ${ex.transformedForm}`,
            });
          }
          if (table.exceptions) {
            for (const exc of table.exceptions) {
              addUniqueWord(words, seenTargets, seenSources, {
                target: exc.transformedForm,
                source: `plural of ${exc.baseForm} (${exc.baseMeaning})`,
                pronunciation: exc.note || `Irregular form of ${exc.baseForm}`,
                partOfSpeech: 'noun',
                example: `${exc.baseForm} (${exc.baseMeaning}) → ${exc.transformedForm}`,
              });
            }
          }
        }
      }

      // 3. Verb Paradigms (clean conjugated forms without colons)
      if (lesson.verbParadigms) {
        for (const vp of lesson.verbParadigms) {
          for (const row of vp.rows) {
            addUniqueWord(words, seenTargets, seenSources, {
              target: row.affirmative[0],
              source: `${row.englishAffirmative} (${row.pronounLabel})`,
              pronunciation: row.negative ? `Neg ${row.negative[0]} • ${vp.tenseOrMood}` : vp.tenseOrMood,
              partOfSpeech: 'verb',
              example: row.negative
                ? `${row.pronounLabel} ${row.affirmative[0]} / ${row.negative[0]}`
                : `${row.pronounLabel} ${row.affirmative[0]}`,
            });
          }
        }
      }

      // 4. Grammar Rule Examples (clean items without '->' or 'vs.')
      for (const rule of lesson.grammarRules) {
        for (const ex of rule.examples) {
          if (!ex.luo.includes('->') && !ex.luo.includes('vs.') && !ex.luo.includes('/')) {
            addUniqueWord(words, seenTargets, seenSources, {
              target: ex.luo,
              source: ex.english,
              pronunciation: ex.grammarNote || rule.title,
              partOfSpeech: 'phrase',
            });
          }
        }
      }

      // Build clean practice sentences
      const sentences: { target: string; source: string }[] = [];
      const seenSentences = new Set<string>();
      const addSentence = (target: string, source: string) => {
        const cleanT = target.trim();
        const cleanS = source.trim();
        if (!cleanT || !cleanS) return;
        const key = cleanT.toLowerCase();
        if (seenSentences.has(key)) return;
        seenSentences.add(key);
        sentences.push({ target: cleanT, source: cleanS });
      };

      for (const rule of lesson.grammarRules) {
        for (const ex of rule.examples) {
          if (isCleanPracticeSentence(ex.luo, ex.english)) {
            addSentence(ex.luo, ex.english);
          }
        }
      }
      if (lesson.verbParadigms) {
        for (const vp of lesson.verbParadigms) {
          for (const ex of vp.examples) {
            if (isCleanPracticeSentence(ex.luo, ex.english)) {
              addSentence(ex.luo, ex.english);
            }
          }
        }
      }
      for (const sup of SUPPLEMENTAL_LESSON_SENTENCES[lesson.lessonId] || []) {
        addSentence(sup.target, sup.source);
      }

      return chunkWordsIntoSkills(
        lesson.lessonId,
        lesson.title,
        LESSON_ICONS[lesson.lessonId] || 'BookOpen',
        lesson.summary,
        buildLessonTips(lesson),
        `Source: A Handbook of the Kavirondo Language (1920), pp. ${lesson.sourcePages.join(', ')}. ${lesson.grammarRules[0]?.explanation || lesson.summary}`,
        words,
        sentences,
        15
      );
    }),
  };
});

// Build Unit 9 from PHRASEBOOK_SECTIONS
const PHRASEBOOK_UNIT: CourseUnit = {
  id: 'mod-9-phrasebook-dialogues',
  title: 'Module 9: Situational Phrasebook & Everyday Dialogues',
  description:
    'Practical conversational Dholuo across everyday greetings, weather, household tasks, market shopping, village visits, health care, farming, and safari travel (Pages 102–117).',
  icon: 'MessageSquare',
  skills: PHRASEBOOK_SECTIONS.flatMap((section) => {
    const words: SkillWord[] = [];
    const seenTargets = new Set<string>();
    const seenSources = new Set<string>();
    const sentences: { target: string; source: string }[] = [];
    const seenSentences = new Set<string>();

    for (const ex of section.exchanges) {
      const primaryLuo = ex.luo.replace(/\s*\(or:?\s*[^)]+\)/gi, '').trim();
      addUniqueWord(words, seenTargets, seenSources, {
        target: primaryLuo,
        source: ex.english,
        pronunciation: ex.notes || section.title,
        partOfSpeech: 'phrase',
        example: ex.luo !== primaryLuo ? ex.luo : undefined,
      });

      if (isCleanPracticeSentence(primaryLuo, ex.english)) {
        const key = primaryLuo.toLowerCase();
        if (!seenSentences.has(key)) {
          seenSentences.add(key);
          sentences.push({ target: primaryLuo, source: ex.english });
        }
      }
    }

    return chunkWordsIntoSkills(
      section.sectionId,
      section.title,
      PHRASEBOOK_ICONS[section.sectionId] || 'MessageCircle',
      section.contextDescription,
      `${section.title}: ${section.contextDescription}`,
      `Source: A Handbook of the Kavirondo Language (1920), Phrasebook pp. ${section.sourcePages.join(', ')}.`,
      words,
      sentences,
      15
    );
  }),
};

// Build Unit 10 from COURSE_EXERCISES
const EXERCISES_UNIT: CourseUnit = {
  id: 'mod-10-handbook-exercises',
  title: 'Module 10: Handbook Translation & Grammar Exercises (I–VIII)',
  description:
    'Comprehensive translation and morphology drills from Pages 118–123 of the 1920 Handbook with model solutions and grammatical commentary.',
  icon: 'Award',
  skills: COURSE_EXERCISES.map((exSet, idx) => {
    const words: SkillWord[] = [];
    const seenTargets = new Set<string>();
    const seenSources = new Set<string>();
    const sentences: { target: string; source: string }[] = [];
    const seenSentences = new Set<string>();

    for (const item of exSet.guidedItems) {
      const primaryLuo = item.solutionLuo.replace(/\s*\(or\s+[^)]+\)/gi, '').trim();
      addUniqueWord(words, seenTargets, seenSources, {
        target: primaryLuo,
        source: item.promptEnglish,
        pronunciation: item.grammarFocus,
        partOfSpeech: 'sentence',
        example: item.solutionLuo !== primaryLuo ? item.solutionLuo : item.explanation,
      });
      if (isCleanPracticeSentence(primaryLuo, item.promptEnglish)) {
        const key = primaryLuo.toLowerCase();
        if (!seenSentences.has(key)) {
          seenSentences.add(key);
          sentences.push({ target: primaryLuo, source: item.promptEnglish });
        }
      }
    }

    // Supplement with vocabulary from the corresponding module so every exercise skill has 10-14 words
    const linkedModule = COURSE_MODULES[idx % COURSE_MODULES.length];
    if (linkedModule && words.length < 12) {
      for (const lesson of linkedModule.lessons) {
        for (const vocab of lesson.keyVocabulary) {
          if (words.length >= 12) break;
          addUniqueWord(words, seenTargets, seenSources, {
            target: vocab.luo,
            source: vocab.english,
            pronunciation: `${vocab.partOfSpeech}${vocab.notes ? * • ${vocab.notes}* : ''}`,
            partOfSpeech: vocab.partOfSpeech,
          });
        }
      }
    }

    return {
      id: exSet.exerciseId,
      title: exSet.title,
      icon: 'CheckSquare',
      description: `Focus: ${exSet.focusTopics.join(', ')}.`,
      tips: `${exSet.title}\n\nFocus Topics: ${exSet.focusTopics.join(' • ')}\n\nOriginal Handbook Prompt (pp. ${exSet.sourcePages.join(', ')}):\n${exSet.fullOriginalPromptText}`,
      culturalNote: `Source: A Handbook of the Kavirondo Language (1920), Exercises pp. ${exSet.sourcePages.join(', ')}.`,
      words,
      sentences,
      authoredExercises: buildExercisesForSkill(words, sentences),
    };
  }),
};


// Build Unit 11 from luoProverbs, luoRiddles, and luoTongueTwisters
const ORAL_LITERATURE_UNIT: CourseUnit = (() => {
  // 1. Proverbs (Ngeche) — top 24 curated proverbs across 2 skills
  const proverbWords: SkillWord[] = [];
  const seenPT = new Set<string>();
  const seenPS = new Set<string>();
  for (const p of luoProverbs.slice(0, 45)) {
    const cleanMeaning = (p.meaning || p.moral || p.english || '').trim();
    if (!p.luo || !cleanMeaning || cleanMeaning.length > 95) continue;
    addUniqueWord(proverbWords, seenPT, seenPS, {
      target: p.luo,
      source: cleanMeaning,
      pronunciation: p.literal_translation ? `Lit. "${p.literal_translation}"` : 'Dholuo Proverb (Ngero)',
      partOfSpeech: 'proverb',
      example: p.explanation || p.literal_translation || cleanMeaning,
    });
    if (proverbWords.length >= 24) break;
  }

  const proverbSkills = chunkWordsIntoSkills(
    'oral-1-proverbs',
    'Dholuo Proverbs & Maxims (Ngeche)',
    'Award',
    'Traditional Dholuo proverbial wisdom (Ngeche) teaching caution, humility, kinship, and foresight.',
    'In Dholuo culture, proverbs (Ngeche, sing. Ngero) encapsulate centuries of ethical philosophy, legal reasoning, and social observation.',
    'Source: Dholuo Oral Literature Corpus & A Handbook of the Kavirondo Language (1920).',
    proverbWords,
    [
      { target: "Acham ayieng' ne onego suna.", source: 'Greed killed the mosquito.' },
      { target: 'Rieko oloyo tek.', source: 'Wisdom surpasses physical strength.' },
      { target: 'Wat en wat kata mabor.', source: 'Kinship remains kinship even from afar.' },
    ],
    12
  );

  // 2. Riddles (Miero) — top 15 riddles
  const riddleWords: SkillWord[] = [];
  const seenRT = new Set<string>();
  const seenRS = new Set<string>();
  for (const r of luoRiddles.slice(0, 25)) {
    if (!r.luo || !r.english) continue;
    addUniqueWord(riddleWords, seenRT, seenRS, {
      target: r.luo,
      source: `${r.english} (Answer — ${r.answer})`,
      pronunciation: `Riddle Answer — ${r.answer}`,
      partOfSpeech: 'riddle',
      example: `${r.luo} — ${r.english} → ${r.answer}`,
    });
    if (riddleWords.length >= 14) break;
  }

  const riddleSkills = chunkWordsIntoSkills(
    'oral-2-riddles',
    'Traditional Riddles (Miero /Ngero)',
    'HelpCircle',
    'Interactive Dholuo riddles (Miero) sharpening metaphorical thinking and nature vocabulary.',
    'Dholuo riddles (Miero) are traditionally exchanged in the evening around the grandmother’s hearth (siwindhe) using the call-and-response "Miero! — Kwiri!".',
    'Source: Traditional Dholuo Siwindhe Riddle Corpus.',
    riddleWords,
    [
      { target: 'Abet e kombe adek kinde duto.', source: 'I always sit on three chairs.' },
      { target: 'Adak e kind kuthe.', source: 'I live among thorns.' },
    ],
    14
  );

  // 3. Tongue Twisters & Phonetic Mastery
  const twisterWords: SkillWord[] = [];
  const seenTT = new Set<string>();
  const seenTS = new Set<string>();
  for (const t of luoTongueTwisters) {
    addUniqueWord(twisterWords, seenTT, seenTS, {
      target: t.luo,
      source: t.english,
      pronunciation: 'Alliterative Dholuo Tongue Twister',
      partOfSpeech: 'phrase',
      example: `${t.luo} — ${t.english}`,
    });
  }

  const twisterSkills = chunkWordsIntoSkills(
    'oral-3-tongue-twisters',
    'Dholuo Tongue Twisters & Diction',
    'Mic',
    'Master rapid dental/alveolar contrasts (dh/th vs. d/t) and nasal compounds (ng’ vs. ng) through traditional tongue twisters.',
    'Practicing Dholuo tongue twisters trains rapid articulation of dental stops (dh, th), velar nasals (ng’), and construct-state consonant mutations.',
    'Source: Dholuo Oral Phonetics & Siwindhe Tradition.',
    twisterWords,
    [
      { target: 'Rawo luor liel, liel luor rawo.', source: 'The hippo fears the elephant, and the elephant fears the hippo.' },
      { target: 'Atud tond atonga, tond atonga chodi.', source: 'I tie the basket rope, and the basket rope snaps.' },
    ],
    15
  );

  return {
    id: 'mod-11-oral-literature',
    title: 'Module 11: Dholuo Oral Literature — Proverbs (Ngeche), Riddles & Tongue Twisters',
    description: 'Master classical Dholuo proverbs (Ngeche), evening riddles (Miero), and alliterative tongue twisters.',
    icon: 'Sparkles',
    skills: [...proverbSkills, ...riddleSkills, ...twisterSkills],
  };
})();

export const LUO_UNITS: CourseUnit[] = [
  ...GRAMMAR_MODULE_UNITS,
  PHRASEBOOK_UNIT,
  EXERCISES_UNIT,
];

export default LUO_COURSE;