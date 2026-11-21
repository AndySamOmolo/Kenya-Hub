// Cultural & linguistic identity metadata for Kenyan languages
// Provides iconic native greetings, cultural motifs, geographic regions, and linguistic family symbols.

export interface LanguageIdentity {
  greeting: string;
  greetingMeaning: string;
  region: string;
    motifName: string;
    accentColor: string;
}

export const LANGUAGE_IDENTITIES: Record<string, LanguageIdentity> = {
  swahili: {
    greeting: "Jambo!",
    greetingMeaning: "Peaceful greetings",
    region: "Swahili Coast",
        motifName: "Coastal Dhows",
        accentColor: "#0D9488",
  },
  kikuyu: {
    greeting: "Mwohoro!",
    greetingMeaning: "How is the news?",
    region: "Mount Kenya Highlands",
        motifName: "Kĩrĩnyaga Heights",
        accentColor: "#15803D",
  },
  luo: {
    greeting: "Oyawore!",
    greetingMeaning: "Good morning / daybreak",
    region: "Lake Victoria Basin",
        motifName: "Nam Lolwe Waters",
        accentColor: "#1D4ED8",
  },
  kalenjin: {
    greeting: "Chamgei!",
    greetingMeaning: "Welcome & health",
    region: "Great Rift Valley",
        motifName: "Champions' Cradle",
        accentColor: "#D97706",
  },
  luhya: {
    greeting: "Mulembe!",
    greetingMeaning: "Peace be with you",
    region: "Western Forest Lands",
        motifName: "Wanga Kingdom",
        accentColor: "#059669",
  },
  kamba: {
    greeting: "Ũmũvoo!",
    greetingMeaning: "Are you in peace?",
    region: "Ukambani Hills",
        motifName: "Woodcarvers' Hills",
        accentColor: "#B45309",
  },
  maasai: {
    greeting: "Sopa!",
    greetingMeaning: "Health & vitality",
    region: "Mara-Amboseli Plains",
        motifName: "Warrior Shield",
        accentColor: "#DC2626",
  },
  meru: {
    greeting: "Muuga!",
    greetingMeaning: "Peaceful welcome",
    region: "Nyambene Slopes",
        motifName: "Sacred Groves",
        accentColor: "#047857",
  },
  kisii: {
    greeting: "Bwakire!",
    greetingMeaning: "Good morning / sunrise",
    region: "Gusii Highlands",
        motifName: "Tabaka Soapstone",
        accentColor: "#0F766E",
  },
  somali: {
    greeting: "Nabad!",
    greetingMeaning: "Peace & abundance",
    region: "Northern Frontier",
        motifName: "Caravan Oasis",
        accentColor: "#CA8A04",
  },
  turkana: {
    greeting: "Mata!",
    greetingMeaning: "Life & health to herds",
    region: "Jade Sea Basin",
        motifName: "Turkwel Sands",
        accentColor: "#0891B2",
  },
  mijikenda: {
    greeting: "Vidze!",
    greetingMeaning: "Goodness inside homestead",
    region: "Coastal Kaya Forests",
        motifName: "Sacred Kaya",
        accentColor: "#16A34A",
  },
  embu: {
    greeting: "Mwega!",
    greetingMeaning: "Good news & health",
    region: "Southern Mount Kenya",
        motifName: "Highland Springs",
        accentColor: "#65A30D",
  },
  taita: {
    greeting: "Mwashuma!",
    greetingMeaning: "Greetings & good health",
    region: "Taita Cloud Hills",
        motifName: "Dawida Mist",
        accentColor: "#7C3AED",
  },
  samburu: {
    greeting: "Sopa!",
    greetingMeaning: "Peace upon your house",
    region: "Mathews Range",
        motifName: "Butterfly Warriors",
        accentColor: "#BE123C",
  },
  borana: {
    greeting: "Nagaa!",
    greetingMeaning: "Peace & tranquility",
    region: "Marsabit Plateau",
        motifName: "Singing Wells",
        accentColor: "#9A3412",
  },
  rendille: {
    greeting: "Nabur!",
    greetingMeaning: "Life & water",
    region: "Chalbi Desert",
        motifName: "Camel Caravans",
        accentColor: "#C2410C",
  },
  pokomo: {
    greeting: "Nafuyo!",
    greetingMeaning: "Health on the river",
    region: "Tana Floodplain",
        motifName: "River Delta",
        accentColor: "#0284C7",
  },
  ilchamus: {
    greeting: "Kaserian!",
    greetingMeaning: "Are you in peace?",
    region: "Lake Baringo Plains",
        motifName: "Island Furrows",
        accentColor: "#0284C7",
  },
  pokot: {
    greeting: "Kacham!",
    greetingMeaning: "Welcome & favor",
    region: "Cherangani Escarpment",
        motifName: "Cliff Aqueducts",
        accentColor: "#C2410C",
  },
  taveta: {
    greeting: "Mbuya!",
    greetingMeaning: "Goodness & health",
    region: "Lumi River Oasis",
        motifName: "Kilimanjaro Forest",
        accentColor: "#059669",
  },
  teso: {
    greeting: "Yoga!",
    greetingMeaning: "Greetings & strength",
    region: "Busia Granite Plains",
        motifName: "Tor Granite Land",
        accentColor: "#D97706",
  },
  daasanach: {
    greeting: "Nagaa!",
    greetingMeaning: "Peace & abundance",
    region: "Lake Turkana Delta",
        motifName: "Delta Floodplain",
        accentColor: "#E65100",
  },
};

export function getLanguageIdentity(languageId: string): LanguageIdentity {
  const norm = languageId.toLowerCase().trim();
  return (
    LANGUAGE_IDENTITIES[norm] || {
      greeting: "Habari!",
      greetingMeaning: "Greetings",
      region: "Kenya",
            motifName: "Kenyan Heritage",
            accentColor: "#C8961E",
    }
  );
}
