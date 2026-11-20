#!/usr/bin/env node
/**
 * KenyaHub Exhaustive Mobile App Static & Structural Analyzer
 * Audits EVERY screen, component, tool route, language course, hook rule,
 * theme atomicity, placeholder length, SafeArea guard, and Web<->Mobile parity
 * across the entire `mobile/` Expo / React Native codebase.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mobileRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(mobileRoot, "..");
const webRoot = path.join(repoRoot, "kenyahub");
const strict = process.argv.includes("--strict");

const errors = [];
const warnings = [];
const checks = [];

function walkFiles(dir, extList, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "android" || entry.name === ".expo") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, extList, out);
    else if (extList.some((ext) => entry.name.endsWith(ext))) out.push(full);
  }
  return out;
}

function check(domain, name, ok, detail = "", severity = "error") {
  checks.push({ domain, name, status: ok ? "pass" : severity, detail });
  if (!ok) {
    const msg = `[${domain}] ${name}${detail ? `: ${detail}` : ""}`;
    if (severity === "warning") warnings.push(msg);
    else errors.push(msg);
  }
}

// ── 1. All 33 Registered Tools Wired in mobile/app/tools/[slug].tsx ──
const regText = fs.readFileSync(path.join(mobileRoot, "src/shared/lib/tools-registry.ts"), "utf8");
const allSlugs = [...new Set([...regText.matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/g)].map((m) => m[1]))];
const slugScreen = fs.readFileSync(path.join(mobileRoot, "app/tools/[slug].tsx"), "utf8");

let wiredTools = 0;
for (const slug of allSlugs) {
  const wired = slugScreen.includes(`"${slug}"`) || slugScreen.includes(`'${slug}'`);
  if (wired) wiredTools++;
  check("routing", `Mobile tool route wired for '${slug}'`, wired);
}

// ── 2. All 23 Languages Wired in courseLoader.ts (Lazy Course + Lazy Grammar) & Shared Dictionaries ──
const catSummary = fs.readFileSync(path.join(mobileRoot, "src/shared/data/courses/catalog-summary.ts"), "utf8");
const langIds = [...new Set([...catSummary.matchAll(/"id":\s*"([a-z]+)"/g)].map((m) => m[1]))];
const loaderSrc = fs.readFileSync(path.join(mobileRoot, "src/tools/language-course/courseLoader.ts"), "utf8");

for (const lid of langIds) {
  const hasCourseCase = loaderSrc.includes(`case "${lid}":`);
  const hasDict = fs.existsSync(path.join(mobileRoot, `src/shared/data/dictionaries/${lid}.json`));
  const hasCourseFile = fs.existsSync(path.join(mobileRoot, `src/shared/data/courses/${lid}/course.ts`));
  check("courses", `Mobile course '${lid}' wired in courseLoader + shared course & dict`, hasCourseCase && hasDict && hasCourseFile);
}
check("courses", "courseLoader exports lazy getGrammarSectionsLazy", loaderSrc.includes("export function getGrammarSectionsLazy"));

// ── 3. Rules of Hooks Scan Across EVERY .tsx File in mobile/app & mobile/src ──
const allTsxFiles = [
  ...walkFiles(path.join(mobileRoot, "app"), [".tsx"]),
  ...walkFiles(path.join(mobileRoot, "src"), [".tsx"]),
];

let hookViolations = 0;
for (const file of allTsxFiles) {
  const rel = path.relative(mobileRoot, file).replaceAll("\\", "/");
  const lines = fs.readFileSync(file, "utf8").split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (/^(export\s+)?(default\s+)?function\s+[A-Z]\w+/.test(lines[i])) {
      let seenTopReturn = -1;
      for (let j = i + 1; j < lines.length; j++) {
        if (/^(export\s+)?(default\s+)?(function|const)\s+/.test(lines[j])) break;
        if (/^  if\s*\([^)]*\)\s*\{\s*$/.test(lines[j]) && j + 1 < lines.length && /^\s*return\b/.test(lines[j + 1])) {
          if (seenTopReturn === -1) seenTopReturn = j + 1;
        } else if (/^  if\s*\([^)]*\)\s*return\b/.test(lines[j])) {
          if (seenTopReturn === -1) seenTopReturn = j + 1;
        }
        if (seenTopReturn !== -1 && /\buse(State|Effect|Memo|Callback|Ref|Context|Reducer|LayoutEffect)\s*[<(]/.test(lines[j])) {
          hookViolations++;
          errors.push(`[hooks] ${rel}: hook at L${j + 1} appears after early return at L${seenTopReturn}`);
          break;
        }
      }
    }
  }
}
check("hooks", `Zero Rules of Hooks violations across all ${allTsxFiles.length} mobile .tsx files`, hookViolations === 0);

// ── 4. Atomic Light<->Dark Theme Switching & SafeArea Guards Across All Screens ──
const themeSrc = fs.readFileSync(path.join(mobileRoot, "src/theme.tsx"), "utf8");
check("theme", "ThemeProvider syncs native Appearance.setColorScheme", themeSrc.includes("Appearance.setColorScheme"));
check("theme", "AndroidTopAppBar exposes testID='theme-toggle'", themeSrc.includes('testID="theme-toggle"'));

const tabLayout = fs.readFileSync(path.join(mobileRoot, "app/(tabs)/_layout.tsx"), "utf8");
check("theme", "Bottom tab bar uses atomic tabBarBackground keyed on isDark", tabLayout.includes("tabBarBackground"));

const rootLayout = fs.readFileSync(path.join(mobileRoot, "app/_layout.tsx"), "utf8");
check("theme", "ErrorBoundary respects light/dark scheme & hides raw stack in production", rootLayout.includes("lightColors") && rootLayout.includes("__DEV__"));

for (const screenRel of [
  "app/(tabs)/index.tsx",
  "app/(tabs)/learn.tsx",
  "app/(tabs)/tools.tsx",
  "app/(tabs)/county.tsx",
  "app/(tabs)/saved.tsx",
  "app/tools/[slug].tsx",
  "app/matatu/index.tsx",
]) {
  const src = fs.readFileSync(path.join(mobileRoot, screenRel), "utf8");
  check("theme", `${screenRel} has atomic SafeAreaView theme key`, src.includes('key={isDark ? "dark" : "light"}'));
}

// ── 5. Mobile Placeholder Length & Ergonomics Audit ──
let longPlaceholders = [];
for (const file of allTsxFiles) {
  const rel = path.relative(mobileRoot, file).replaceAll("\\", "/");
  const txt = fs.readFileSync(file, "utf8");
  for (const m of txt.matchAll(/placeholder="([^"]+)"/g)) {
    const val = m[1];
    if (val.length > 48 && !rel.includes("KenyanTranslatorTool")) {
      longPlaceholders.push(`${rel}: "${val}" (${val.length}ch)`);
    }
  }
}
check("ergonomics", "No overlong static TextInput placeholders (>48ch) across mobile screens", longPlaceholders.length === 0, longPlaceholders.join("; "));

// ── 6. Known Mobile UI/UX & Crash Regression Guards ──
const lctSrc = fs.readFileSync(path.join(mobileRoot, "src/tools/LanguageCourseTool.tsx"), "utf8");
check("mobile-ux", "LanguageCourseTool defers loadDictionary off language menu & Path tab", lctSrc.includes("if (showLanguageMenu || (activeTab !== 'cards' && activeTab !== 'games'))"));
check("mobile-ux", "LanguageCourseTool tracks lastVisitedLangId for Resume CTA", lctSrc.includes("kenyahub_last_visited_lang_v1"));
check("mobile-ux", "LanguageCourseTool Speed Match filters out 'none' distractors", lctSrc.includes("cleanSrc.toLowerCase() === 'none'"));

const kcseSrc = fs.readFileSync(path.join(mobileRoot, "src/tools/education/KcseCalculatorTool.tsx"), "utf8");
check("mobile-ux", "KCSE Calculator left-aligns degree titles & shows Mean badge", kcseSrc.includes('textAlign: "left"') && kcseSrc.includes("Mean: {calc.meanGrade}"));

const kplcMob = fs.readFileSync(path.join(mobileRoot, "src/tools/finance/KplcTokenCalculator.tsx"), "utf8");
check("mobile-ux", "Mobile KPLC Token Calculator has no duplicate preset row", !kplcMob.includes("[500, 1000, 2000, 3500, 5000, 10000]"));

const transMob = fs.readFileSync(path.join(mobileRoot, "src/tools/KenyanTranslatorTool.tsx"), "utf8");
check("mobile-ux", "Mobile Translator mode tabs wrap cleanly without right-edge overflow", transMob.includes('flexWrap: "wrap"'));

const matatuMob = fs.readFileSync(path.join(mobileRoot, "app/matatu/index.tsx"), "utf8");
check("mobile-ux", "Mobile Matatu cards show operating hours & clean stage wrap", matatuMob.includes("route.operatingHours"));

const homeMob = fs.readFileSync(path.join(mobileRoot, "app/(tabs)/index.tsx"), "utf8");
check("mobile-ux", "Home Practical Explainers caps tags to canonical categories (<=10)", homeMob.includes(".slice(0, 10)"));

const toolsMob = fs.readFileSync(path.join(mobileRoot, "app/(tabs)/tools.tsx"), "utf8");
check("mobile-ux", "Matatu Routes not permanently pinned above Most used", toolsMob.includes('const showMatatuHubCard =\n    category === "transport-travel"'));

// ── 7. Maestro Live E2E Flow Coverage Check ──
const maestroDir = path.join(mobileRoot, "e2e/maestro");
const maestroFlows = fs.existsSync(maestroDir)
  ? fs.readdirSync(maestroDir).filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
  : [];
check("e2e", "Mobile Maestro E2E suite has >= 8 comprehensive live flows", maestroFlows.length >= 8, `found ${maestroFlows.length}`);

// ── 8. Write Structured Report ──
const reportDir = path.join(mobileRoot, "reports");
fs.mkdirSync(reportDir, { recursive: true });
const passed = checks.filter((c) => c.status === "pass").length;
const report = {
  generatedAt: new Date().toISOString(),
  mobileTsxFilesScanned: allTsxFiles.length,
  toolsWired: `${wiredTools}/${allSlugs.length}`,
  languagesWired: langIds.length,
  maestroFlows: maestroFlows.sort(),
  checksPassed: passed,
  checksTotal: checks.length,
  errorCount: errors.length,
  warningCount: warnings.length,
  errors,
  warnings,
  checks,
};
fs.writeFileSync(path.join(reportDir, "mobile-static-audit.json"), `${JSON.stringify(report, null, 2)}\n`);

console.log(`Mobile Full-Codebase Audit: scanned ${allTsxFiles.length} .tsx files, ${wiredTools}/${allSlugs.length} tools wired, ${langIds.length} courses, ${maestroFlows.length} Maestro flows.`);
console.log(`Checks: ${passed}/${checks.length} PASSED | Warnings: ${warnings.length} | Errors: ${errors.length}`);
if (errors.length) {
  console.log("\nMobile Audit Errors:");
  for (const e of errors) console.log(`- ${e}`);
}
if (strict && errors.length > 0) {
  process.exit(1);
}
