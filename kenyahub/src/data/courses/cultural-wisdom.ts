// ============================================================
// Kenyan Cultural Wisdom & Course Re-Exports Barrel
// Refactored into modular per-language directories:
// - Proverbs & oral wisdom: ./proverbs/<language>.ts
// - Course units & configs: ./<language>/course.ts
// - Grammar references: ./<language>/grammar-reference.ts
// ============================================================

export {
  type ProverbItem,
  type CulturalWisdomItem,
  KENYAN_PROVERBS,
  CULTURAL_WISDOM,
  getCulturalWisdomForLanguage,
  NORTHCOTE_1907_ETHNOGRAPHIC_WISDOM,
} from "./proverbs";

export { SWAHILI_CONFIG, SWAHILI_UNITS } from "./swahili/course";
export { type SwahiliGrammarSection, SWAHILI_GRAMMAR_SECTIONS } from "./swahili/grammar-reference";

export { KALENJIN_CONFIG, KALENJIN_UNITS } from "./kalenjin/course";
export { type KalenjinGrammarSection, KALENJIN_GRAMMAR_SECTIONS } from "./kalenjin/grammar-reference";

export { MIJIKENDA_CONFIG, MIJIKENDA_UNITS } from "./mijikenda/course";
export { type MijikendaGrammarSection, MIJIKENDA_GRAMMAR_SECTIONS } from "./mijikenda/grammar-reference";

export { MERU_CONFIG, MERU_UNITS } from "./meru/course";
export { type MeruGrammarSection, MERU_GRAMMAR_SECTIONS } from "./meru/grammar-reference";

export { SOMALI_CONFIG, SOMALI_UNITS } from "./somali/course";
export { type SomaliGrammarSection, SOMALI_GRAMMAR_SECTIONS } from "./somali/grammar-reference";

export { EMBU_CONFIG, EMBU_UNITS } from "./embu/course";
export { EMBU_GRAMMAR_SECTIONS } from "./embu/grammar-reference";

export { TAITA_CONFIG, TAITA_UNITS } from "./taita/course";
export { TAITA_GRAMMAR_SECTIONS } from "./taita/grammar-reference";

export { TAVETA_CONFIG, TAVETA_UNITS } from "./taveta/course";
export { TAVETA_GRAMMAR_SECTIONS } from "./taveta/grammar-reference";

export { POKOMO_CONFIG, POKOMO_UNITS } from "./pokomo/course";
export { POKOMO_GRAMMAR_SECTIONS } from "./pokomo/grammar-reference";

export { BORANA_CONFIG, BORANA_UNITS } from "./borana/course";
export { BORANA_GRAMMAR_SECTIONS } from "./borana/grammar-reference";

export { RENDILLE_CONFIG, RENDILLE_UNITS } from "./rendille/course";
export { RENDILLE_GRAMMAR_SECTIONS } from "./rendille/grammar-reference";

export { SAMBURU_CONFIG, SAMBURU_UNITS } from "./samburu/course";
export { SAMBURU_GRAMMAR_SECTIONS } from "./samburu/grammar-reference";

export { ILCHAMUS_CONFIG, ILCHAMUS_UNITS } from "./ilchamus/course";
export { ILCHAMUS_GRAMMAR_SECTIONS } from "./ilchamus/grammar-reference";

export { POKOT_CONFIG, POKOT_UNITS } from "./pokot/course";
export { POKOT_GRAMMAR_SECTIONS } from "./pokot/grammar-reference";

export { DAASANACH_CONFIG, DAASANACH_UNITS } from "./daasanach/course";
export { DAASANACH_GRAMMAR_SECTIONS } from "./daasanach/grammar-reference";
