// Lightweight course availability list — safe to import in client components
// without pulling in the 30K+ line course data bundle.

export const AVAILABLE_COURSE_IDS: string[] = [
  "swahili",
  "kikuyu",
  "luo",
  "luhya",
  "kamba",
  "kalenjin",
  "kisii",
  "meru",
  "somali",
  "maasai",
  "turkana",
  "mijikenda",
  "teso",
  "embu",
  "taita",
  "taveta",
  "pokomo",
  "borana",
  "rendille",
  "samburu",
  "ilchamus",
  "pokot",
  "daasanach",
];

export function hasCourse(languageId: string): boolean {
  return AVAILABLE_COURSE_IDS.includes(languageId);
}

export {
  NORTHCOTE_1907_COMPLETE_ETHNOGRAPHIC_SUMMARY,
  BEECH_1911_COMPLETE_ETHNOGRAPHIC_SUMMARY,
  HOLLIS_1909_COMPLETE_ETHNOGRAPHIC_SUMMARY,
  HOLLIS_1905_COMPLETE_ETHNOGRAPHIC_SUMMARY,
  HINDE_1901_COMPLETE_ETHNOGRAPHIC_SUMMARY,
  STAM_1929_COMPLETE_ETHNOGRAPHIC_SUMMARY,
  LINDBLOM_1920_COMPLETE_ETHNOGRAPHIC_SUMMARY,
} from "../language-sources/ethnographic-summaries";
