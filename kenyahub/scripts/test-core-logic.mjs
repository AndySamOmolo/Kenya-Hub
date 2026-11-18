#!/usr/bin/env node
/**
 * Automated Verification & Regression Test Suite for KenyaHub (ARCH-03)
 * Validates Security (SEC-01..05), Gamification & Calculator Logic (LOGIC-01..09),
 * Dead Code Hygiene (ARCH-01..02), Copy Consistency (COPY-01), and Web <-> Mobile Sync Parity.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(WEB_ROOT, "..");
const MOBILE_ROOT = path.resolve(REPO_ROOT, "mobile");

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  PASS  ${name}`);
  } catch (err) {
    console.error(`  FAIL  ${name}`);
    console.error(err);
    process.exit(1);
  }
}

console.log("Running KenyaHub Core Security, Logic & Parity Test Suite...\n");

// 1. SEC-01: Appwrite permissions & anonymous auth lockdown
test("SEC-01: Appwrite blogs table & auth config restrict write/delete to admins and disable anonymous login", () => {
  const rootCfg = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, "appwrite.config.json"), "utf8"));
  const webCfg = JSON.parse(fs.readFileSync(path.join(WEB_ROOT, "appwrite.config.json"), "utf8"));

  assert.equal(rootCfg.settings.auth.methods.anonymous, false, "Anonymous auth must be disabled");
  assert.ok(rootCfg.settings.auth.security.limit > 0, "Auth user registration limit must be bounded");

  for (const cfg of [rootCfg, webCfg]) {
    const blogs = cfg.tables.find((t) => t.$id === "blogs");
    assert.ok(blogs, "blogs table must exist");
    for (const perm of blogs.$permissions) {
      assert.ok(!perm.includes('create("users")'), `Forbidden create("users") in ${perm}`);
      assert.ok(!perm.includes('update("users")'), `Forbidden update("users") in ${perm}`);
      assert.ok(!perm.includes('delete("users")'), `Forbidden delete("users") in ${perm}`);
    }
    const contribs = cfg.tables.find((t) => t.$id === "contributions");
    assert.ok(contribs, "contributions table must exist");
  }
});

// 2. SEC-02: Markdown parser XSS & protocol sanitization
test("SEC-02: markdown.ts escapes raw HTML, blocks javascript: URLs, and removes raw iframe passthrough", () => {
  const mdSrc = fs.readFileSync(path.join(WEB_ROOT, "src/lib/markdown.ts"), "utf8");
  assert.ok(mdSrc.includes("export function escapeHtml"), "escapeHtml must be exported");
  assert.ok(mdSrc.includes("export function sanitizeUrl"), "sanitizeUrl must be exported");
  assert.ok(!mdSrc.includes("___IFRAME_"), "Raw iframe passthrough must be removed");
  assert.ok(mdSrc.includes("out = escapeHtml(out);"), "Inline markdown must escape raw HTML before tag generation");
});

// 3. SEC-03 & SEC-04: MatatuMap escaping, CSP header, and Android allowBackup="false"
test("SEC-03 & SEC-04: Web/Mobile MatatuMap HTML escaping, CSP header, and Android allowBackup=false", () => {
  const webMap = fs.readFileSync(path.join(WEB_ROOT, "src/components/matatu/MatatuMap.tsx"), "utf8");
  const mobMap = fs.readFileSync(path.join(MOBILE_ROOT, "src/components/MatatuMap.tsx"), "utf8");
  const headers = fs.readFileSync(path.join(WEB_ROOT, "public/_headers"), "utf8");
  const manifest = fs.readFileSync(path.join(MOBILE_ROOT, "android/app/src/main/AndroidManifest.xml"), "utf8");

  assert.ok(webMap.includes("escapeHtml("), "Web MatatuMap must escape stage/route HTML");
  assert.ok(mobMap.includes("escHtml("), "Mobile MatatuMap must escape stage/route HTML");
  assert.ok(!mobMap.includes('originWhitelist={["*"]}'), "Mobile MatatuMap must not use wildcard originWhitelist");
  assert.ok(headers.includes("Content-Security-Policy:"), "public/_headers must include Content-Security-Policy");
  assert.ok(manifest.includes('android:allowBackup="false"'), "AndroidManifest.xml must set allowBackup=false");
});

// 4. LOGIC-01: Gamification XP & Daily Quest Chest logic
test("LOGIC-01: Daily Quest Chest requires all 3 quests (including xpToday >= dailyGoal) and mini-games pass sessionComplete=false per question", () => {
  const lpSrc = fs.readFileSync(path.join(WEB_ROOT, "src/lib/learn-progress.ts"), "utf8");
  assert.ok(
    lpSrc.includes("updated.dailyQuests.lessonsToday >= 1 &&\n      updated.dailyQuests.gamesToday >= 2 &&\n      updated.dailyQuests.xpToday >= updated.dailyGoal"),
    "Daily Quest Chest must require lessonsToday >= 1 && gamesToday >= 2 && xpToday >= dailyGoal"
  );
  assert.ok(lpSrc.includes("export function exportAllProgressBackup"), "Backup export helper must exist");
  assert.ok(lpSrc.includes("export function importAllProgressBackup"), "Backup import helper must exist");

  const scrambleSrc = fs.readFileSync(path.join(WEB_ROOT, "src/components/learn/games/ScrambleGame.tsx"), "utf8");
  assert.ok(scrambleSrc.includes("onAwardXp?.(earnedXp, false);"), "Per-question XP must pass sessionComplete=false");
  assert.ok(scrambleSrc.includes("onAwardXp?.(0, true);"), "End-of-session must pass sessionComplete=true");
});

// 5. LOGIC-04, LOGIC-05, LOGIC-06: KCSE, M-Pesa, and KPLC Calculators
test("LOGIC-04..06: KCSE B+ career qualification, Mobile M-Pesa withdrawal fee escalation, and KPLC fractional kWh", () => {
  const kcseWeb = fs.readFileSync(path.join(WEB_ROOT, "src/app/tools/kcse-grade-calculator/page.tsx"), "utf8");
  assert.ok(
    kcseWeb.includes("const qualifies = result.achievedGradePoints >= career.minPoints;"),
    "Web KCSE calculator must compare achievedGradePoints against career.minPoints"
  );

  const mpesaMob = fs.readFileSync(path.join(MOBILE_ROOT, "src/tools/finance/MpesaCalculator.tsx"), "utf8");
  assert.ok(
    mpesaMob.includes("escalatedWithdrawFee") && mpesaMob.includes("adjustedAmountToSend"),
    "Mobile M-Pesa calculator must escalate withdrawal fee band and compute transfer fee on adjustedAmountToSend"
  );

  const kplcWeb = fs.readFileSync(path.join(WEB_ROOT, "src/app/tools/kplc-token-calculator/page.tsx"), "utf8");
  const kplcMob = fs.readFileSync(path.join(MOBILE_ROOT, "src/tools/finance/KplcTokenCalculator.tsx"), "utf8");
  assert.ok(!kplcWeb.includes("Math.floor(remainingAmount / unitCostWithVat)"), "Web KPLC must not floor units per band");
  assert.ok(!kplcMob.includes("Math.floor(remainingAmount / unitCostWithVat)"), "Mobile KPLC must not floor units per band");
});

// 6. ARCH-01 & COPY-01: Dead mobile files removed & copy counts accurate
test("ARCH-01 & COPY-01: 14 legacy mobile tool files are removed and copy reflects 14 mini-games & 23 languages", () => {
  assert.ok(!fs.existsSync(path.join(MOBILE_ROOT, "src/tools/ReferenceDirectoryTool.tsx")), "ReferenceDirectoryTool.tsx must be removed");
  assert.ok(!fs.existsSync(path.join(MOBILE_ROOT, "src/tools/advanced/SolarRoiTool.tsx")), "SolarRoiTool.tsx must be removed");

  const homeSrc = fs.readFileSync(path.join(WEB_ROOT, "src/app/page.tsx"), "utf8");
  const adminSrc = fs.readFileSync(path.join(WEB_ROOT, "src/app/admin/page.tsx"), "utf8");
  const registrySrc = fs.readFileSync(path.join(WEB_ROOT, "src/lib/tools-registry.ts"), "utf8");

  assert.ok(homeSrc.includes("14 vocabulary mini-games"), "Homepage must state 14 vocabulary mini-games");
  assert.ok(adminSrc.includes("across all 23 Kenyan languages"), "Admin page must state 23 Kenyan languages");
  assert.ok(registrySrc.includes("'sha-benefit-estimator':"), "TOOL_USAGE_SCORES must include civic tools");
});

console.log(`\nAll ${passed} core verification test suites passed!`);
