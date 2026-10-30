export const AVAILABLE_COURSE_IDS: ReadonlySet<string> = new Set([
  "kikuyu",
  "luo",
  "kamba",
  "turkana",
  "swahili",
  "luhya",
  "kalenjin",
  "kisii",
  "meru",
  "mijikenda",
  "maasai",
  "somali",
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
]);

export function hasCourse(languageId: string): boolean {
  return AVAILABLE_COURSE_IDS.has(languageId);
}
