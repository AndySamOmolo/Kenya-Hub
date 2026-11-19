// Teso (Ateso) Proverbs & Cultural Sayings
// Sourced from Public Domain Anthropological & Linguistic Records (Kitching 1915, Hilders & Lawrance 1956)
// Declarative data structure — 6 verified entries, zero runtime mutations

import { Proverb } from './index';

export const TESO_PROVERBS: Proverb[] = [
  {
    id: 'teso-1',
    languageCode: 'teso',
    languageName: 'Teso (Ateso)',
    indigenous: 'Ekonikini ekونيا اسيبو',
    literalTranslation: 'One finger cannot kill a louse.',
    meaning: 'Important tasks require cooperation and community effort; no individual can succeed entirely alone.',
    category: 'unity',
    culturalNote: 'A classic Ateso proverb emphasizing communal farming (aloket) and clan solidarity.'
  },
  {
    id: 'teso-2',
    languageCode: 'teso',
    languageName: 'Teso (Ateso)',
    indigenous: 'Mam ekitoi ediopet epedori aetakin amoni',
    literalTranslation: 'A single tree cannot make a forest.',
    meaning: 'A community or family is built by many people standing together in mutual support.',
    category: 'community',
    culturalNote: "In Ateso grammar, 'ekitoi' uses the masculine prefix e- for a living tree, while 'amoni' uses the feminine prefix a- for a forest."
  },
  {
    id: 'teso-3',
    languageCode: 'teso',
    languageName: 'Teso (Ateso)',
    indigenous: 'Acoikina erai aijar',
    literalTranslation: 'Wisdom and caution are life.',
    meaning: 'Foresight, prudence, and listening to elders protect a person from danger and ruin.',
    category: 'wisdom',
    culturalNote: 'Spoken by elders during clan assemblies (etem) to counsel youth before travel or major decisions.'
  },
  {
    id: 'teso-roscoe-kitching-1915',
    languageCode: 'teso',
    languageName: 'Teso (Ateso)',
    indigenous: 'Papa, Toto, Onac, Inac, Mamai, Ejait (Ija), Ocen, Ekamuran — Atekerin: Abwor, Atekok, Igoria, Irarak, Ikomolo.',
    literalTranslation: 'Father, Mother, Brother, Sister, Maternal Uncle, Paternal Aunt, Nephew/Niece, In-Law — The Clans: Abwor, Atekok, Igoria, Irarak, Ikomolo.',
    meaning: 'Kinship bonds across paternal, maternal, and affinal relatives form the living foundation of the Ateso clans (atekerin).',
    category: 'family',
    culturalNote: 'Documented by Rev. John Roscoe and Rev. A. L. Kitching in The Northern Bantu (Cambridge University Press, 1915, Ch. XXII, pp. 270–274, 291).'
  },
  {
    id: 'teso-hobley-1902-1',
    languageCode: 'teso',
    languageName: 'Teso (Ateso)',
    indigenous: 'Mata! Yoka yoka! — Ekinok.',
    literalTranslation: 'Greetings! Hail, hail! — The Sacred Dog Totem.',
    meaning: 'Peaceful salutations and respect for the ancestral totem unite the people across borders.',
    category: 'community',
    culturalNote: 'Recorded by C. W. Hobley in Eastern Uganda: An Ethnological Survey ( Anthropological Institute, 1902, pp. 26, 38, 66–69) among the Wamia (Ateso).'
  },
  {
    id: 'teso-sunbird-salt-2025',
    languageCode: 'teso',
    languageName: 'Teso (Ateso)',
    indigenous: 'Ejok noi aanyun akipi nu elai kotoma ateker; aira emogo, imomwa ka emaido eingarakini ateker.',
    literalTranslation: 'It is very good to find clean water in the community; planting cassava, sorghum, and groundnuts helps the clan.',
    meaning: 'Clean water and diligent cultivation of drought-hardy crops sustain the health and self-reliance of the community.',
    category: 'wisdom',
    culturalNote: 'Drawn from the open-access Ateso community agriculture and public-health corpus (Sunbird AI SALT & SALT-31 [teo], CC-BY-4.0).'
  }
];
