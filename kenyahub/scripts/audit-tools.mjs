#!/usr/bin/env node
/**
 * KenyaHub Comprehensive Multi-Platform Audit Engine
 * Audits 12 domains across Next.js Web (kenyahub/) and Expo Mobile (mobile/):
 *  1. Tool Registry, Valid Categories & Route Integrity (50 tools)
 *  2. Tool Guides, FAQ Completeness & Deduplication
 *  3. 23-Language Course, Grammar, Proverb & Dictionary Integrity
 *  4. Commercial License Compliance (Zero CC-BY-NC / JW300 leakage)
 *  5. Web <-> Mobile 1:1 Data Sync Parity
 *  6. React Rules of Hooks & Android Crash Guards
 *  7. UI/UX Overlays, Stacking Contexts & WCAG Contrast Guards
 *  8. Android Theme Atomicity, SafeArea & Mobile Ergonomics
 *  9. Search Placeholder Truncation & Copy Hygiene
 * 10. JSX Structural Integrity Across All 50 Web Tools
 * 11. Calculator Controls & Math Consistency Guards
 * 12. Audio Manifest & Permissive Dataset Pipeline Health
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = resolve(root, "..");
const mobileRoot = join(repoRoot, "mobile");
const sourceRoot = join(root, "src");
const toolsRoot = join(sourceRoot, "app", "tools");
const dataRoot = join(sourceRoot, "data");
const coursesRoot = join(dataRoot, "courses");
const proverbsRoot = join(coursesRoot, "proverbs");
const dictionariesRoot = join(dataRoot, "dictionaries");
const manifestPath = join(dataRoot, "tool-data-sources.json");
const guidesPath = join(dataRoot, "tool-guides.json");
const reportRoot = join(root, "reports");
const checkSources = process.argv.includes("--check-sources") || process.argv.includes("--check-links");
const strict = process.argv.includes("--strict");
const today = new Date();
const STATUTORY_MAX_AGE_DAYS = 90;

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const toolGuides = JSON.parse(readFileSync(guidesPath, "utf8"));
const registryText = readFileSync(join(sourceRoot, "lib", "tools-registry.ts"), "utf8");
const registrySlugs = [...registryText.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
const validCategories = new Set(
  [...registryText.matchAll(/\{\s*id:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
);
const routeSlugs = [...new Set([
  ...readdirSync(toolsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "[slug]")
    .map((entry) => entry.name)
    .filter((slug) => slug !== "layout"),
  ...registrySlugs.filter((slug) => existsSync(join(toolsRoot, slug, "page.tsx"))),
])];

function readSafe(filePath) {
  return existsSync(filePath) ? readFileSync(filePath, "utf8") : "";
}

function parseDate(value) {
  if (!value) return null;
  const date = new Date(value.length === 4 ? `${value}-12-31` : value);
  return Number.isNaN(date.valueOf()) ? null : date;
}

function findImportedData(slug) {
  const pagePath = join(toolsRoot, slug, "page.tsx");
  if (!existsSync(pagePath)) return [];
  const page = readFileSync(pagePath, "utf8");
  const resolved = [...page.matchAll(/(?:from\s+|import\(\s*)["']@\/data\/([^"']+)["']/g)]
    .map((match) => match[1])
    .map((importPath) => {
      const direct = join(sourceRoot, "data", importPath);
      if (existsSync(direct)) return direct;
      for (const ext of [".json", ".ts", ".tsx"]) {
        if (existsSync(`${direct}${ext}`)) return `${direct}${ext}`;
      }
      return direct;
    })
    .filter((filePath) => existsSync(filePath));

  // Attach dictionary/course JSON datasets for learn & kenyan-translator so ageDays is never null (F-048)
  if (slug === "learn" || slug === "kenyan-translator") {
    if (existsSync(dictionariesRoot)) {
      const dictFiles = readdirSync(dictionariesRoot)
        .filter((f) => f.endsWith(".json"))
        .sort()
        .map((f) => join(dictionariesRoot, f));
      for (const df of dictFiles) {
        if (!resolved.includes(df)) resolved.push(df);
      }
    }
  }
  return resolved;
}

function inspectData(filePath, config = {}) {
  if (extname(filePath) !== ".json") {
    return {
      file: relative(root, filePath).replaceAll("\\", "/"),
      lastUpdated: config.lastUpdated ?? null,
      source: config.source ?? config.sourceUrl ?? null,
    };
  }
  try {
    const data = JSON.parse(readFileSync(filePath, "utf8"));
    const isArray = Array.isArray(data);
    return {
      file: relative(root, filePath).replaceAll("\\", "/"),
      lastUpdated: !isArray && data.lastUpdated ? data.lastUpdated : (config.lastUpdated ?? null),
      source: !isArray && (data.source ?? data.sourceUrl) ? (data.source ?? data.sourceUrl) : (config.source ?? config.sourceUrl ?? null),
    };
  } catch (error) {
    return {
      file: relative(root, filePath).replaceAll("\\", "/"),
      lastUpdated: null,
      source: null,
      parseError: error.message,
    };
  }
}

async function checkUrl(url) {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
    });
    return { url, status: response.status, reachable: response.ok || response.status < 500 };
  } catch (error) {
    return { url, status: null, reachable: false, error: error.message };
  }
}

const errors = [];
const warnings = [];
const checks = [];

function recordCheck(domain, name, ok, detail = "", severity = "error") {
  checks.push({ domain, name, status: ok ? "pass" : severity, detail });
  if (!ok) {
    const msg = `[${domain}] ${name}${detail ? `: ${detail}` : ""}`;
    if (severity === "warning") warnings.push(msg);
    else errors.push(msg);
  }
}

// ── 1. Tool Registry, Categories, Routes & Freshness ──
const tools = [];
const uniqueRegistrySlugs = [...new Set(registrySlugs)];

for (const slug of uniqueRegistrySlugs) {
  const config = manifest.tools[slug] ?? {};
  const dataFiles = findImportedData(slug);
  const data = dataFiles.map((fp) => inspectData(fp, config));
  const dates = data.map((item) => parseDate(item.lastUpdated)).filter(Boolean);
  if (dates.length === 0 && config.lastUpdated) {
    const fallbackDate = parseDate(config.lastUpdated);
    if (fallbackDate) dates.push(fallbackDate);
  }
  // Use Math.max(...ages) so stale sub-files are never masked by newer siblings (F-036)
  const ages = dates.map((date) => Math.max(0, Math.floor((today - date) / 86400000)));
  const ageDays = ages.length ? Math.max(...ages) : null;
  // Tighten statutory/official tools from 365 days to 90 days (F-041)
  const maxAgeDays = config.maxAgeDays ?? (config.official ? STATUTORY_MAX_AGE_DAYS : manifest.defaultMaxAgeDays);
  const sourceUrl = config.sourceUrl ?? null;

  const record = {
    slug,
    routeExists: routeSlugs.includes(slug),
    sourceUrl,
    maxAgeDays,
    ageDays,
    data,
    status: "ok",
  };

  if (!record.routeExists) {
    record.status = "error";
    errors.push(`[registry] ${slug}: registry entry has no matching route directory`);
  }
  if (data.some((item) => item.parseError)) {
    record.status = "error";
    errors.push(`[data] ${slug}: one or more imported JSON files cannot be parsed`);
  }
  if (dataFiles.length > 0 && ages.length === 0) {
    record.status = "review";
    warnings.push(`[freshness] ${slug}: imported data has no parseable lastUpdated metadata`);
  }
  if (ageDays !== null && ageDays > maxAgeDays) {
    record.status = "stale";
    warnings.push(`[freshness] ${slug}: data is ${ageDays} days old (maximum ${maxAgeDays})`);
  }
  if (config.official && !sourceUrl) {
    record.status = "review";
    warnings.push(`[sources] ${slug}: official-source tool has no source URL in tool-data-sources.json`);
  }

  // Validate tool category matches ToolCategory union
  const slugIdx = registryText.indexOf(`slug: '${slug}'`) !== -1
    ? registryText.indexOf(`slug: '${slug}'`)
    : registryText.indexOf(`slug: "${slug}"`);
  if (slugIdx !== -1) {
    const snippet = registryText.slice(slugIdx, slugIdx + 600);
    const catMatch = snippet.match(/category:\s*['"]([^'"]+)['"]/);
    if (catMatch && !validCategories.has(catMatch[1])) {
      record.status = "error";
      errors.push(`[registry] ${slug}: invalid category '${catMatch[1]}'`);
    }
  }

  tools.push(record);
}

const orphanRoutes = routeSlugs.filter((slug) => !uniqueRegistrySlugs.includes(slug));
for (const slug of orphanRoutes) {
  errors.push(`[registry] ${slug}: route exists in src/app/tools but is missing from src/lib/tools-registry.ts`);
}

// ── 2. Tool Guides & FAQ Completeness + Deduplication ──
const misplacedTopLevelGuides = Object.keys(toolGuides).filter((k) => k !== "lastUpdated" && k !== "guides");
recordCheck(
  "guides",
  "No misplaced top-level guides in tool-guides.json",
  misplacedTopLevelGuides.length === 0,
  misplacedTopLevelGuides.join(", ")
);

let totalFaqs = 0;
for (const slug of uniqueRegistrySlugs) {
  const g = toolGuides.guides?.[slug];
  const faqs = g?.faq || [];
  totalFaqs += faqs.length;
  recordCheck("guides", `${slug} has guide & >= 3 FAQs`, Boolean(g) && faqs.length >= 3, `found ${faqs.length} FAQs`);
  const seenQ = new Set();
  for (const item of faqs) {
    const key = (item.question || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (seenQ.has(key)) {
      errors.push(`[guides] ${slug}: duplicate FAQ question "${item.question}"`);
    }
    seenQ.add(key);
  }
}

// ── 3. Modular Language Courses, Grammar, Proverbs & Dictionaries ──
const courseMetaText = readFileSync(join(coursesRoot, "metadata.ts"), "utf8");
const courseIds = [...courseMetaText.matchAll(/"([a-z]+)"/g)].map((m) => m[1]);
const coursesAudit = [];
let totalDictEntries = 0;
let totalAudioLinked = 0;

for (const langId of courseIds) {
  const coursePath = join(coursesRoot, langId, "course.ts");
  const grammarPath = join(coursesRoot, langId, "grammar-reference.ts");
  const proverbPath = join(proverbsRoot, `${langId}.ts`);
  const dictJsonPath = join(dictionariesRoot, `${langId}.json`);

  const hasCourseFile = existsSync(coursePath);
  const hasGrammarFile = existsSync(grammarPath);
  const hasProverbFile = existsSync(proverbPath);
  const hasDictJson = existsSync(dictJsonPath);

  let dictEntries = 0;
  let audioCount = 0;
  if (hasDictJson) {
    try {
      const raw = readFileSync(dictJsonPath, "utf8");
      const parsedDict = JSON.parse(raw);
      for (const c of parsedDict.categories || []) {
        for (const e of c.entries || []) {
          dictEntries++;
          if (e.audioFile) audioCount++;
        }
      }
      totalDictEntries += dictEntries;
      totalAudioLinked += audioCount;

      // 4. Commercial License Compliance Check (Zero NC / JW300)
      for (const forbidden of ["CC-BY-NC", "JW300", "NonCommercial", "NC-SA", "NC-ND"]) {
        if (raw.toLowerCase().includes(forbidden.toLowerCase())) {
          errors.push(`[license] dictionary/${langId}.json contains forbidden non-commercial reference: ${forbidden}`);
        }
      }
    } catch (err) {
      errors.push(`[dictionary] ${langId}.json: JSON parse error (${err.message})`);
    }
  } else {
    errors.push(`[dictionary] ${langId}.json: missing dictionary JSON file`);
  }

  if (!hasCourseFile) errors.push(`[courses] ${langId}/course.ts missing`);
  if (!hasGrammarFile) errors.push(`[courses] ${langId}/grammar-reference.ts missing`);
  if (!hasProverbFile) errors.push(`[courses] proverbs/${langId}.ts missing`);

  coursesAudit.push({
    languageId: langId,
    dictionaryEntries: dictEntries,
    audioLinked: audioCount,
    status: hasCourseFile && hasGrammarFile && hasProverbFile && hasDictJson ? "ok" : "error",
  });
}

recordCheck("license", "Zero CC-BY-NC / JW300 leakage across all 23 dictionaries", !errors.some((e) => e.startsWith("[license]")));

// ── 5. Web <-> Mobile 1:1 Data Sync Parity ──
if (existsSync(mobileRoot)) {
  const parityFiles = [
    ["src/lib/tools-registry.ts", "src/shared/lib/tools-registry.ts"],
    ["src/lib/learn-engine.ts", "src/shared/lib/learn-engine.ts"],
    ["src/data/tool-guides.json", "src/shared/data/tool-guides.json"],
    ["src/data/courses/catalog-summary.ts", "src/shared/data/courses/catalog-summary.ts"],
    ["src/data/blog-posts.ts", "src/shared/data/blog-posts.ts"],
  ];
  for (const [webRel, mobRel] of parityFiles) {
    const wPath = join(root, webRel);
    const mPath = join(mobileRoot, mobRel);
    const norm = (t) => t.replaceAll("@/data/", "../data/").replaceAll("@/lib/", "./");
    const synced = existsSync(wPath) && existsSync(mPath) && norm(readFileSync(wPath, "utf8")) === norm(readFileSync(mPath, "utf8"));
    recordCheck("parity", `${webRel} synced 1:1 to mobile`, synced, synced ? "" : "Run node mobile/scripts/sync-data.mjs");
  }
}

// ── 6. React Rules of Hooks & Android Crash Guards ──
const lctPath = join(mobileRoot, "src/tools/LanguageCourseTool.tsx");
if (existsSync(lctPath)) {
  const lctLines = readFileSync(lctPath, "utf8").split("\n");
  const earlyRetIdx = lctLines.findIndex((l) => l.includes("if (lessonStage !== 'idle' && activeSkill)"));
  const hooksAfterReturn = earlyRetIdx >= 0
    ? lctLines.slice(earlyRetIdx + 1).filter((l) => /\buse(State|Effect|Memo|Callback|Ref|Context|Reducer|LayoutEffect)\s*[<(]/.test(l))
    : [];
  recordCheck("hooks", "LanguageCourseTool.tsx has zero hooks after early return", hooksAfterReturn.length === 0, `${hooksAfterReturn.length} misplaced hooks`);

  const learnEngine = readSafe(join(sourceRoot, "lib/learn-engine.ts"));
  recordCheck("hooks", "learn-engine.ts exports isSingleWordLexical (Word Scramble & Wordle)", learnEngine.includes("export function isSingleWordLexical"));

  const lctText = lctLines.join("\n");
  recordCheck("android", "Android Speed Match filters out 'none' distractors", lctText.includes("cleanSrc.toLowerCase() === 'none'"));
  recordCheck("android", "Android Learn tracks lastVisitedLangId for Resume CTA", lctText.includes("kenyahub_last_visited_lang_v1"));
}

// ── 7. UI/UX Overlays, Stacking Contexts & Contrast Guards ──
const navbarSrc = readSafe(join(sourceRoot, "components/nav/Navbar.tsx"));
recordCheck("ui-overlay", "Navbar elevated z-[80] & Tools dropdown z-[90]", navbarSrc.includes("z-[80]") && navbarSrc.includes("z-[90]"));
recordCheck("ui-overlay", "Navbar Command-K dialog sits above backdrop (z-[121])", navbarSrc.includes("z-[121]"));
recordCheck("ui-overlay", "Navbar search ranks title prefix ahead of description", navbarSrc.includes("title.startsWith(q)"));

const customSelectSrc = readSafe(join(sourceRoot, "components/ui/CustomSelect.tsx"));
recordCheck("ui-overlay", "CustomSelect uses opaque surface & skips touch keyboard auto-focus", customSelectSrc.includes("var(--bg-card)") && customSelectSrc.includes("(pointer: fine)"));

const pillRowSrc = readSafe(join(sourceRoot, "components/ui/ExpandablePillRow.tsx"));
recordCheck("ui-overlay", "ExpandablePillRow disables scroll mask & stagger fade when expanded", pillRowSrc.includes("!expanded\n    ? getScrollMaskImage") && !pillRowSrc.includes("pill-expanded-stagger"));

const scrollResetSrc = readSafe(join(sourceRoot, "components/ScrollReset.tsx"));
recordCheck("ui-overlay", "ScrollReset hides floating ↑ button in focus mode (Wordle / LessonPlayer)", scrollResetSrc.includes("khFocusMode") && scrollResetSrc.includes("right-4"));

const odpcSrc = readSafe(join(toolsRoot, "odpc-hr-retention-vault/page.tsx"));
recordCheck("contrast", "ODPC warning banners use high-contrast Light/Dark text", odpcSrc.includes("text-amber-950 dark:text-amber-200"));

// Check #52 (F-036 fix): Case-insensitive check so `Easting, Northing` is never missed
const ardhisasaSrc = readSafe(join(toolsRoot, "ardhisasa-cad-title-auditor/page.tsx"));
const hasArdhisasaBackticks = /`\s*easting\s*,\s*northing\s*`/i.test(ardhisasaSrc);
recordCheck(
  "copy",
  "Ardhisasa has no literal backticks in UTM label",
  !hasArdhisasaBackticks,
  hasArdhisasaBackticks ? "Found literal backtick-wrapped Easting, Northing in ardhisasa-cad-title-auditor/page.tsx" : ""
);

// ── 8. Android Theme Atomicity & Mobile Ergonomics ──
const mobileThemeSrc = readSafe(join(mobileRoot, "src/theme.tsx"));
recordCheck("android-theme", "Mobile ThemeProvider syncs Appearance.setColorScheme", mobileThemeSrc.includes("Appearance.setColorScheme"));

const mobileTabsLayout = readSafe(join(mobileRoot, "app/(tabs)/_layout.tsx"));
recordCheck("android-theme", "Android bottom tab bar uses atomic theme tabBarBackground", mobileTabsLayout.includes("tabBarBackground"));

const mobileToolsTab = readSafe(join(mobileRoot, "app/(tabs)/tools.tsx"));
recordCheck("android-ux", "Matatu Routes not permanently pinned above Most used in All Tools", mobileToolsTab.includes('const showMatatuHubCard =\n    category === "transport-travel"'));

const mobileKplc = readSafe(join(mobileRoot, "src/tools/finance/KplcTokenCalculator.tsx"));
recordCheck("android-ux", "Android KPLC Token Calculator has no duplicate preset row", !mobileKplc.includes("[500, 1000, 2000, 3500, 5000, 10000]"));

// ── 9. Copy Hygiene & Corpus Count Consistency ──
const copyChecks = [
  ["src/app/matatu/page.tsx", "interactive Leaflet maps", "Remove developer library name 'Leaflet'"],
  ["src/app/about/page.tsx", "300,067+", "Use unified 208,776+ corpus count"],
  ["src/data/tool-guides.json", "22-Language", "Use 23-Language heading"],
  ["src/data/tool-guides.json", "Online Search Fee (KES 500)", "Use KES 550 NTSA search fee"],
  ["src/data/tool-guides.json", "WARMA Levy", "Use WRA Levy consistently"],
  ["src/app/tools/airtime-drain-guide/page.tsx", "Tap 'Dial Now'", "Remove non-existent Dial Now instruction"],
  ["src/app/tools/mobile-number-prefix/page.tsx", "Calling Outside Kenya:", "Use 'Calling Kenya from Abroad:'"],
];
for (const [rel, forbidden, reason] of copyChecks) {
  const txt = readSafe(join(root, rel));
  recordCheck("copy", `${rel}: ${reason}`, !txt.includes(forbidden), txt.includes(forbidden) ? `Found "${forbidden}"` : "");
}

// ── 10. JSX Structural Integrity (Balanced <div> across all 50 Web Tool pages) ──
for (const slug of uniqueRegistrySlugs) {
  const pagePath = join(toolsRoot, slug, "page.tsx");
  if (!existsSync(pagePath)) continue;
  const cleaned = readFileSync(pagePath, "utf8").replace(/<div\b[^>]*\/>/g, "");
  const opens = (cleaned.match(/<div[\s>]/g) || []).length;
  const closes = (cleaned.match(/<\/div>/g) || []).length;
  if (opens !== closes) {
    errors.push(`[jsx] ${slug}/page.tsx: unbalanced <div> tags (${opens} opens vs ${closes} closes)`);
  }
}
recordCheck("jsx", "All 50 Web tool pages have balanced <div> tags", !errors.some((e) => e.startsWith("[jsx]")));

// ── 11. Calculator Controls & Math Consistency Guards ──
// Check #65 (F-036 fix): Verify dipMatch branch actually populates rendered county, plateType & yearRange fields
const plateDecoderSrc = readSafe(join(toolsRoot, "number-plate-decoder/page.tsx"));
const dipBlockMatch = plateDecoderSrc.match(/if\s*\(\s*dipMatch\s*\)\s*\{([\s\S]*?)\n\s*\}/);
const dipBlock = dipBlockMatch ? dipBlockMatch[1] : "";
const dipPopulatesRenderedFields =
  Boolean(dipBlock) &&
  /\bcounty\s*:/.test(dipBlock) &&
  /\bplateType\s*:/.test(dipBlock) &&
  /\byearRange\s*:/.test(dipBlock);
recordCheck(
  "calc",
  "Plate Decoder supports diplomatic CD/CC/UN plates with populated county, plateType & yearRange",
  dipPopulatesRenderedFields,
  dipPopulatesRenderedFields ? "" : "dipMatch branch must populate county, plateType, and yearRange so 29 CD 1K does not blank output"
);

recordCheck("calc", "KPLC Token Calculator includes EPRA tariff selector", readSafe(join(toolsRoot, "kplc-token-calculator/page.tsx")).includes("tariffMode"));
recordCheck("calc", "Water Bill Calculator includes county sewer toggle", readSafe(join(toolsRoot, "water-bill-calculator/page.tsx")).includes("includeSewer"));
recordCheck("calc", "PAYE Benchmark Table computes live rows via calculatePAYE", readSafe(join(toolsRoot, "paye-calculator/page.tsx")).includes("calculatePAYE(taxable)"));
recordCheck("calc", "Small Claims Court removes leaked Passport/KIPI tables & handles >1M disposal", !readSafe(join(toolsRoot, "small-claims-calculator/page.tsx")).includes("eCitizen Passport") && readSafe(join(toolsRoot, "small-claims-calculator/page.tsx")).includes("amount <= 1000000"));
recordCheck("calc", "M-Pesa Calculator has single Transaction Type control", !readSafe(join(toolsRoot, "mpesa-fee-calculator/page.tsx")).includes("mpesa-type-select"));
recordCheck("calc", "EUDR Packager syncs 7.08 ha default & checks >10% variance", readSafe(join(toolsRoot, "eudr-coop-geojson-packager/page.tsx")).includes("Variance warning"));

// Check #72 (F-036 fix): Verify MR1–MR15 is absent across page.tsx, tools-registry.ts, AND tool-guides.json
const ppraPageSrc = readSafe(join(toolsRoot, "ppra-egp-tender-serializer/page.tsx"));
const toolGuidesRaw = readSafe(guidesPath);
const ppraLeaks = [];
if (/MR1[–-]MR15/i.test(ppraPageSrc)) ppraLeaks.push("ppra-egp-tender-serializer/page.tsx");
if (/MR1[–-]MR15/i.test(registryText)) ppraLeaks.push("src/lib/tools-registry.ts");
if (/MR1[–-]MR15/i.test(toolGuidesRaw)) ppraLeaks.push("src/data/tool-guides.json");
const ppraOk = ppraLeaks.length === 0 && ppraPageSrc.includes("bidValidityDays");
recordCheck(
  "calc",
  "PPRA e-GP uses MR1–MR11 & dynamic bidValidityDays (across page, registry & guides)",
  ppraOk,
  ppraLeaks.length ? `Found stale MR1–MR15 in: ${ppraLeaks.join(", ")}` : (ppraPageSrc.includes("bidValidityDays") ? "" : "Missing dynamic bidValidityDays")
);

recordCheck("calc", "LanguageClientPage scopes vocab table out of Mini-Games & fixes 3rd column", (readSafe(join(sourceRoot, "components/learn/LanguageClientPage.tsx")).includes('view === "lessons"') && !readSafe(join(sourceRoot, "components/learn/LanguageClientPage.tsx")).includes('view === "games"') || readSafe(join(sourceRoot, "components/learn/LanguageClientPage.tsx")).includes('view === "lessons" &&')) && !readSafe(join(sourceRoot, "components/learn/LanguageClientPage.tsx")).includes("{w.example || course.config.family}"));

// ── 12. Audio Manifest & Permissive Dataset Pipeline ──
const ciScript = readSafe(join(root, "scripts/ci-ingest-audio-and-text-r2.py"));
recordCheck("datasets", "CI audio ingestion script sets trust_remote_code=True & maps mas_asr -> luhya", ciScript.includes("trust_remote_code") && ciScript.includes('"lang_id": "luhya", "repo": "google/WaxalNLP", "config": "mas_asr"'));

if (checkSources) {
  const urls = [...new Set(tools.map((tool) => tool.sourceUrl).filter(Boolean))];
  const urlResults = new Map();
  for (const url of urls) {
    urlResults.set(url, await checkUrl(url));
  }
  for (const tool of tools) {
    if (tool.sourceUrl) {
      tool.sourceCheck = urlResults.get(tool.sourceUrl);
      if (!tool.sourceCheck.reachable) {
        tool.status = tool.status === "ok" ? "review" : tool.status;
        warnings.push(`[sources] ${tool.slug}: source URL check failed (${tool.sourceUrl})`);
      }
    }
  }
}

const courseErrors = coursesAudit.filter((c) => c.status !== "ok").length;
const passedChecks = checks.filter((c) => c.status === "pass").length;
const summary = {
  generatedAt: today.toISOString(),
  registryCount: uniqueRegistrySlugs.length,
  routeCount: routeSlugs.length,
  courseCount: coursesAudit.length,
  totalFaqs,
  totalDictEntries,
  totalAudioLinked,
  checksPassed: passedChecks,
  checksTotal: checks.length,
  okCount: tools.filter((tool) => tool.status === "ok").length,
  reviewCount: tools.filter((tool) => tool.status === "review").length,
  staleCount: tools.filter((tool) => tool.status === "stale").length,
  errorCount: errors.length + courseErrors,
  warningCount: warnings.length,
  errors,
  warnings,
  checks,
  tools,
  courses: coursesAudit,
};

mkdirSync(reportRoot, { recursive: true });
writeFileSync(join(reportRoot, "tool-audit.json"), `${JSON.stringify(summary, null, 2)}\n`);

console.log(`Audited ${summary.registryCount} registered tools (${summary.routeCount} routes), ${summary.courseCount} language courses (${totalDictEntries.toLocaleString()} dict entries, ${totalAudioLinked.toLocaleString()} audio-linked), and ${totalFaqs} FAQs.`);
console.log(`Comprehensive Checks: ${passedChecks}/${checks.length} PASSED | Tools OK: ${summary.okCount}/${summary.registryCount} | Courses OK: ${coursesAudit.length - courseErrors}/${coursesAudit.length} | Warnings: ${warnings.length} | Errors: ${summary.errorCount}`);

if (warnings.length) {
  console.log("\nWarnings:");
  for (const w of warnings) console.log(`- ${w}`);
}
if (errors.length) {
  console.log("\nErrors:");
  for (const e of errors) console.log(`- ${e}`);
}

if (strict && summary.errorCount > 0) {
  process.exit(1);
}
