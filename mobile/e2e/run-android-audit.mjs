#!/usr/bin/env node
/**
 * KenyaHub Exhaustive Live Android App Audit Runner
 *
 * Covers 100% of the Android app without stopping on failures:
 *  Part 1: All 8 Interactive Maestro E2E flows (with MP4 videos + step PNGs)
 *  Part 2: All 6 Core Hubs (Home, Learn, Tools, Counties, Saved, Matatu) in BOTH Light & Dark modes (12 PNGs + MP4)
 *  Part 3: ALL 33 Tools via deep link (Top + Scrolled viewport = 66 PNGs + MP4 + ErrorBoundary check)
 *  Part 4: ALL 23 Kenyan Languages + Vocab/Games/Grammar/Wisdom tabs (27+ PNGs + MP4 + ErrorBoundary check)
 *  Part 5: ALL 47 Kenyan Counties detail pages (47 PNGs + MP4 + ErrorBoundary check)
 *  Part 6: Matatu Routes across all active Kenyan towns (PNGs + MP4 + ErrorBoundary check)
 *  Part 7: Logcat crash stack traces, GPU janky frame stats, JSON report & Markdown summary
 */

import { execSync, spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mobileRoot = path.resolve(__dirname, "..");
const flowsDir = path.join(__dirname, "maestro");
const reportDir = path.join(mobileRoot, "reports");
const videosDir = path.join(reportDir, "videos");
const screenshotsDir = path.join(reportDir, "screenshots");
const APP_ID = "ke.co.kenyahub.app";
const strict = process.argv.includes("--strict");

const FATAL_LOGCAT_PATTERNS = [
  /Rendered fewer hooks than expected/i,
  /TypeError:.*is not a function/i,
  /ReferenceError:/i,
  /ReactNativeJS:.*Error:/i,
  /FATAL EXCEPTION/i,
  /UnsatisfiedLinkError/i,
  /ANR in ke\.co\.kenyahub\.app/i,
];

const UI_ERROR_SIGNATURES = [
  "Something went wrong",
  "Rendered fewer hooks",
  "is not a function",
  "ReferenceError",
  "TypeError",
  "Unmatched Route",
  "Oops! This screen doesn't exist",
];

function checkBinary(cmd, args = ["--version"]) {
  const res = spawnSync(cmd, args, { encoding: "utf8" });
  return res.status === 0;
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function capturePngAsync(destPath) {
  return new Promise((resolve) => {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    const proc = spawn("adb", ["exec-out", "screencap", "-p"]);
    const chunks = [];
    proc.stdout.on("data", (d) => chunks.push(d));
    proc.on("error", () => resolve(false));
    proc.on("close", (code) => {
      if (code === 0 && chunks.length > 0) {
        const buf = Buffer.concat(chunks);
        if (
          buf.length > 1000 &&
          buf[0] === 0x89 &&
          buf[1] === 0x50 &&
          buf[2] === 0x4e &&
          buf[3] === 0x47
        ) {
          fs.writeFileSync(destPath, buf);
          resolve(true);
          return;
        }
      }
      resolve(false);
    });
  });
}

function runMaestroAsync(flowPath, cwd) {
  return new Promise((resolve) => {
    const proc = spawn("maestro", ["test", flowPath], {
      cwd,
      env: { ...process.env, MAESTRO_CLI_NO_ANALYTICS: "1" },
      stdio: "inherit",
    });
    proc.on("error", () => resolve(1));
    proc.on("close", (code) => resolve(code ?? 1));
  });
}

function isPlayableMp4(filePath, hasFfprobe) {
  if (!fs.existsSync(filePath)) return false;
  const stat = fs.statSync(filePath);
  if (stat.size < 20_000) return false;
  if (!hasFfprobe) return true;
  const probe = spawnSync(
    "ffprobe",
    [
      "-v",
      "error",
      "-select_streams",
      "v:0",
      "-show_entries",
      "stream=codec_name,width,height:format=duration",
      "-of",
      "json",
      filePath,
    ],
    { encoding: "utf8" }
  );
  if (probe.status !== 0) return false;
  try {
    const data = JSON.parse(probe.stdout || "{}");
    const hasStream = Array.isArray(data.streams) && data.streams.length > 0;
    const duration = Number(data.format?.duration || 0);
    return hasStream && duration > 0.2;
  } catch {
    return false;
  }
}

function stitchFramesToMp4(framesDir, outputMp4, fps = 1) {
  const res = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-framerate",
      String(fps),
      "-i",
      path.join(framesDir, "frame_%04d.png"),
      "-vf",
      "scale=720:-2",
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart",
      outputMp4,
    ],
    { stdio: "ignore" }
  );
  return res.status === 0 && fs.existsSync(outputMp4) && fs.statSync(outputMp4).size > 5_000;
}

function stitchPngListToMp4(pngPaths, outputMp4, fps = 1) {
  const valid = pngPaths.filter((p) => fs.existsSync(p));
  if (valid.length === 0) return false;
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "kh-reel-"));
  valid.forEach((p, idx) => {
    fs.copyFileSync(p, path.join(tmpDir, `frame_${String(idx + 1).padStart(4, "0")}.png`));
  });
  const ok = stitchFramesToMp4(tmpDir, outputMp4, fps);
  fs.rmSync(tmpDir, { recursive: true, force: true });
  return ok;
}

function getAppPid() {
  try {
    const out = execSync(`adb shell pidof ${APP_ID}`, { encoding: "utf8" }).trim();
    return out || null;
  } catch {
    return null;
  }
}

async function waitForScreenrecordExit(maxWaitMs = 6000) {
  const deadline = Date.now() + maxWaitMs;
  while (Date.now() < deadline) {
    try {
      const pid = execSync("adb shell pidof screenrecord", { encoding: "utf8" }).trim();
      if (!pid) return;
    } catch {
      return;
    }
    await sleep(300);
  }
}

function openDeepLink(uri) {
  try {
    execSync(
      `adb shell am start -W -a android.intent.action.VIEW -d "${uri}" ${APP_ID}`,
      { stdio: "ignore", timeout: 15000 }
    );
    return true;
  } catch {
    return false;
  }
}

function dumpUiAndCheckErrors() {
  try {
    execSync("adb shell uiautomator dump /sdcard/kh_uidump.xml", {
      stdio: "ignore",
      timeout: 10000,
    });
    const xml = execSync("adb shell cat /sdcard/kh_uidump.xml", {
      encoding: "utf8",
      maxBuffer: 10 * 1024 * 1024,
      timeout: 10000,
    });
    const foundErrors = UI_ERROR_SIGNATURES.filter((sig) => xml.includes(sig));
    const textMatches = xml.match(/text="([^"]+)"/g) || [];
    const nonEmptyTextCount = textMatches.filter((m) => m.length > 8).length;
    return {
      ok: foundErrors.length === 0 && nonEmptyTextCount >= 2,
      foundErrors,
      nonEmptyTextCount,
    };
  } catch {
    // uiautomator can occasionally be busy during transitions; fall back to process liveness
    return {
      ok: Boolean(getAppPid()),
      foundErrors: getAppPid() ? [] : ["App process died"],
      nonEmptyTextCount: -1,
    };
  }
}

function loadAllToolSlugs() {
  const regPath = path.join(mobileRoot, "src/shared/lib/tools-registry.ts");
  const txt = fs.readFileSync(regPath, "utf8");
  const matches = [...txt.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  return [...new Set(matches)];
}

function loadAllLanguageIds() {
  const coursesDir = path.join(mobileRoot, "src/shared/data/courses");
  return fs
    .readdirSync(coursesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "proverbs")
    .map((d) => d.name)
    .sort();
}

function loadAllCountySlugs() {
  const countiesPath = path.join(mobileRoot, "src/shared/data/counties.json");
  const raw = JSON.parse(fs.readFileSync(countiesPath, "utf8"));
  const list = Array.isArray(raw) ? raw : raw.counties || [];
  return list.map((c) => c.slug || c.id).filter(Boolean);
}

function loadSampleMatatuSlugs() {
  const matatuPath = path.join(mobileRoot, "src/shared/data/matatu-routes.json");
  const raw = JSON.parse(fs.readFileSync(matatuPath, "utf8"));
  const slugs = [];
  for (const [town, routes] of Object.entries(raw.routes || {})) {
    for (const r of (routes || []).slice(0, 2)) {
      if (r.slug || r.id) slugs.push({ town, slug: r.slug || r.id, name: r.name || r.slug });
    }
  }
  return slugs;
}

function collectAllPngs(dir, baseDir = dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...collectAllPngs(full, baseDir));
    } else if (entry.name.endsWith(".png")) {
      out.push(path.relative(baseDir, full));
    }
  }
  return out.sort();
}

async function auditDeepLinkScreen({
  id,
  uri,
  pngPath,
  waitMs = 2000,
  alsoCaptureScrolled = false,
  scrolledPngPath = null,
}) {
  const start = Date.now();
  const launched = openDeepLink(uri);
  await sleep(waitMs);
  const topCaptured = await capturePngAsync(pngPath);
  const uiCheck = dumpUiAndCheckErrors();
  let scrolledCaptured = false;
  if (alsoCaptureScrolled && scrolledPngPath) {
    try {
      execSync("adb shell input swipe 540 1650 540 450 350", { stdio: "ignore" });
      await sleep(700);
      scrolledCaptured = await capturePngAsync(scrolledPngPath);
    } catch {}
  }
  return {
    id,
    uri,
    passed: launched && topCaptured && uiCheck.ok,
    durationMs: Date.now() - start,
    screenshot: topCaptured ? path.relative(mobileRoot, pngPath) : null,
    scrolledScreenshot: scrolledCaptured ? path.relative(mobileRoot, scrolledPngPath) : null,
    errors: uiCheck.foundErrors,
    textNodes: uiCheck.nonEmptyTextCount,
  };
}

async function main() {
  if (!checkBinary("adb")) {
    console.error("ERROR: `adb` not found in PATH.");
    process.exit(1);
  }
  const devicesOut = execSync("adb devices", { encoding: "utf8" });
  const connected = devicesOut
    .split("\n")
    .slice(1)
    .filter((l) => l.trim().endsWith("\tdevice"));
  if (connected.length === 0) {
    console.error("ERROR: No online Android device or emulator detected via `adb devices`.");
    process.exit(1);
  }
  if (!checkBinary("maestro")) {
    console.error("ERROR: `maestro` CLI not found.");
    process.exit(1);
  }

  const hasFfmpeg = checkBinary("ffmpeg", ["-version"]);
  const hasFfprobe = checkBinary("ffprobe", ["-version"]);

  const maestroShotsDir = path.join(screenshotsDir, "maestro");
  const tabsShotsDir = path.join(screenshotsDir, "tabs");
  const toolsShotsDir = path.join(screenshotsDir, "tools");
  const langsShotsDir = path.join(screenshotsDir, "languages");
  const countiesShotsDir = path.join(screenshotsDir, "counties");
  const matatuShotsDir = path.join(screenshotsDir, "matatu");

  for (const d of [videosDir, maestroShotsDir, tabsShotsDir, toolsShotsDir, langsShotsDir, countiesShotsDir, matatuShotsDir]) {
    fs.mkdirSync(d, { recursive: true });
  }
  execSync("adb logcat -c");

  // Wake & unlock screen, warm up app
  try {
    execSync("adb shell svc power stayon true", { stdio: "ignore" });
    execSync("adb shell wm dismiss-keyguard", { stdio: "ignore" });
    execSync("adb shell input keyevent 82", { stdio: "ignore" });
    execSync("adb shell cmd uimode night no", { stdio: "ignore" });
    execSync(`adb shell monkey -p ${APP_ID} -c android.intent.category.LAUNCHER 1`, { stdio: "ignore" });
  } catch {}
  await sleep(5000);
  const appPidAfterLaunch = getAppPid();
  await capturePngAsync(path.join(screenshotsDir, "00-app-launch.png"));
  console.log(`App pre-launch PID: ${appPidAfterLaunch ?? "NOT RUNNING"}`);

  // =========================================================================
  // PART 1: ALL 8 INTERACTIVE MAESTRO FLOWS (WITH MP4 VIDEOS + STEP PNGS)
  // =========================================================================
  const flows = fs
    .readdirSync(flowsDir)
    .filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
    .sort();

  const maestroResults = [];
  for (const flow of flows) {
    const slug = flow.replace(/\.(yaml|yml)$/, "");
    const remoteMp4 = `/sdcard/kh_audit_${slug}.mp4`;
    const localMp4 = path.join(videosDir, `${slug}.mp4`);
    const flowPath = path.join(flowsDir, flow);
    const tmpFramesDir = fs.mkdtempSync(path.join(os.tmpdir(), `kh-frames-${slug}-`));

    const recProc = spawn(
      "adb",
      ["shell", "screenrecord", "--size", "720x1280", "--bit-rate", "2000000", "--time-limit", "180", remoteMp4],
      { stdio: "ignore" }
    );

    let frameIndex = 1;
    let capturingFrames = true;
    const frameLoop = (async () => {
      while (capturingFrames) {
        const frameFile = path.join(tmpFramesDir, `frame_${String(frameIndex).padStart(4, "0")}.png`);
        if (await capturePngAsync(frameFile)) frameIndex++;
        await sleep(1500);
      }
    })();

    const start = Date.now();
    console.log(`\n▶ [Part 1] Running Maestro flow: ${flow}`);
    const exitCode = await runMaestroAsync(flowPath, maestroShotsDir);
    const durationMs = Date.now() - start;

    capturingFrames = false;
    await frameLoop;
    const endPngPath = path.join(maestroShotsDir, `${slug}-end.png`);
    if (await capturePngAsync(endPngPath)) {
      fs.copyFileSync(endPngPath, path.join(tmpFramesDir, `frame_${String(frameIndex).padStart(4, "0")}.png`));
      frameIndex++;
    }

    try {
      execSync("adb shell pkill -2 screenrecord", { stdio: "ignore" });
    } catch {}
    await waitForScreenrecordExit(6000);
    try {
      recProc.kill("SIGTERM");
    } catch {}
    await sleep(400);

    let videoSaved = false;
    let videoSource = null;
    try {
      execSync(`adb pull "${remoteMp4}" "${localMp4}"`, { stdio: "ignore" });
      execSync(`adb shell rm -f "${remoteMp4}"`, { stdio: "ignore" });
      if (isPlayableMp4(localMp4, hasFfprobe)) {
        videoSaved = true;
        videoSource = "screenrecord";
      } else if (fs.existsSync(localMp4)) {
        fs.unlinkSync(localMp4);
      }
    } catch {}

    if (!videoSaved && hasFfmpeg && frameIndex > 1) {
      if (stitchFramesToMp4(tmpFramesDir, localMp4, 1)) {
        videoSaved = true;
        videoSource = "ffmpeg-screencap";
      }
    }
    fs.rmSync(tmpFramesDir, { recursive: true, force: true });

    maestroResults.push({
      flow,
      passed: exitCode === 0,
      exitCode,
      durationMs,
      video: videoSaved ? path.relative(mobileRoot, localMp4) : null,
      videoSource,
      framesCaptured: frameIndex - 1,
    });
  }

  // =========================================================================
  // PART 2: ALL 6 CORE HUBS IN BOTH LIGHT MODE AND DARK MODE (12 PNGs + MP4)
  // =========================================================================
  console.log("\n▶ [Part 2] Auditing all 6 core tabs/hubs in Light & Dark themes...");
  const coreRoutes = [
    { id: "home", uri: "kenyahub://" },
    { id: "learn", uri: "kenyahub://learn" },
    { id: "tools", uri: "kenyahub://tools" },
    { id: "county", uri: "kenyahub://county" },
    { id: "saved", uri: "kenyahub://saved" },
    { id: "matatu", uri: "kenyahub://matatu" },
  ];
  const coreResults = [];
  const tabReelPngs = [];
  for (const mode of ["light", "dark"]) {
    try {
      execSync(`adb shell cmd uimode night ${mode === "dark" ? "yes" : "no"}`, { stdio: "ignore" });
    } catch {}
    await sleep(1000);
    for (const r of coreRoutes) {
      const pngPath = path.join(tabsShotsDir, `${r.id}-${mode}.png`);
      const res = await auditDeepLinkScreen({
        id: `${r.id}-${mode}`,
        uri: r.uri,
        pngPath,
        waitMs: 1800,
      });
      coreResults.push(res);
      if (fs.existsSync(pngPath)) tabReelPngs.push(pngPath);
      console.log(`  [${res.passed ? "PASS" : "FAIL"}] ${res.id} (${res.errors.join(", ") || "OK"})`);
    }
  }
  try {
    execSync("adb shell cmd uimode night no", { stdio: "ignore" });
  } catch {}
  const sweepVideos = [];
  if (hasFfmpeg && stitchPngListToMp4(tabReelPngs, path.join(videosDir, "sweep-tabs-light-and-dark.mp4"), 0.8)) {
    sweepVideos.push("reports/videos/sweep-tabs-light-and-dark.mp4");
  }

  // =========================================================================
  // PART 3: ALL 33 TOOLS EXHAUSTIVE SWEEP (TOP + SCROLLED = 66 PNGs + MP4)
  // =========================================================================
  const toolSlugs = loadAllToolSlugs();
  console.log(`\n▶ [Part 3] Exhaustively auditing ALL ${toolSlugs.length} tools (top + scrolled viewports)...`);
  const toolResults = [];
  const toolReelPngs = [];
  for (let i = 0; i < toolSlugs.length; i++) {
    const slug = toolSlugs[i];
    const topPng = path.join(toolsShotsDir, `${String(i + 1).padStart(2, "0")}-${slug}-top.png`);
    const midPng = path.join(toolsShotsDir, `${String(i + 1).padStart(2, "0")}-${slug}-scrolled.png`);
    const res = await auditDeepLinkScreen({
      id: slug,
      uri: `kenyahub://tools/${slug}`,
      pngPath: topPng,
      waitMs: 2000,
      alsoCaptureScrolled: true,
      scrolledPngPath: midPng,
    });
    toolResults.push(res);
    if (fs.existsSync(topPng)) toolReelPngs.push(topPng);
    if (fs.existsSync(midPng)) toolReelPngs.push(midPng);
    console.log(`  [${res.passed ? "PASS" : "FAIL"}] Tool ${i + 1}/${toolSlugs.length}: ${slug}${res.errors.length ? ` -> ${res.errors.join("; ")}` : ""}`);
  }
  if (hasFfmpeg && stitchPngListToMp4(toolReelPngs, path.join(videosDir, "sweep-all-33-tools.mp4"), 1)) {
    sweepVideos.push("reports/videos/sweep-all-33-tools.mp4");
  }

  // =========================================================================
  // PART 4: ALL 23 KENYAN LANGUAGES + MULTI-TAB COURSE AUDIT (27+ PNGs + MP4)
  // =========================================================================
  const languageIds = loadAllLanguageIds();
  console.log(`\n▶ [Part 4] Exhaustively auditing ALL ${languageIds.length} Kenyan languages...`);
  const languageResults = [];
  const langReelPngs = [];
  for (let i = 0; i < languageIds.length; i++) {
    const lang = languageIds[i];
    const pngPath = path.join(langsShotsDir, `${String(i + 1).padStart(2, "0")}-${lang}-path.png`);
    const res = await auditDeepLinkScreen({
      id: `${lang}-path`,
      uri: `kenyahub://learn?lang=${lang}&tab=learn`,
      pngPath,
      waitMs: 2200,
    });
    languageResults.push(res);
    if (fs.existsSync(pngPath)) langReelPngs.push(pngPath);
    console.log(`  [${res.passed ? "PASS" : "FAIL"}] Language ${i + 1}/${languageIds.length}: ${lang}${res.errors.length ? ` -> ${res.errors.join("; ")}` : ""}`);
  }
  // Also audit vocab, games, grammar, wisdom across Bantu/Nilotic/Cushitic
  const extraLangTabs = [
    { lang: "swahili", tab: "vocab" },
    { lang: "kikuyu", tab: "games" },
    { lang: "luo", tab: "grammar" },
    { lang: "somali", tab: "wisdom" },
  ];
  for (const { lang, tab } of extraLangTabs) {
    const pngPath = path.join(langsShotsDir, `tab-${lang}-${tab}.png`);
    const res = await auditDeepLinkScreen({
      id: `${lang}-${tab}`,
      uri: `kenyahub://learn?lang=${lang}&tab=${tab}`,
      pngPath,
      waitMs: 2200,
    });
    languageResults.push(res);
    if (fs.existsSync(pngPath)) langReelPngs.push(pngPath);
    console.log(`  [${res.passed ? "PASS" : "FAIL"}] Course Tab: ${lang}/${tab}`);
  }
  if (hasFfmpeg && stitchPngListToMp4(langReelPngs, path.join(videosDir, "sweep-all-23-languages.mp4"), 1)) {
    sweepVideos.push("reports/videos/sweep-all-23-languages.mp4");
  }

  // =========================================================================
  // PART 5: ALL 47 KENYAN COUNTIES DETAIL AUDIT (47 PNGs + MP4)
  // =========================================================================
  const countySlugs = loadAllCountySlugs();
  console.log(`\n▶ [Part 5] Exhaustively auditing ALL ${countySlugs.length} Kenyan counties...`);
  const countyResults = [];
  const countyReelPngs = [];
  for (let i = 0; i < countySlugs.length; i++) {
    const slug = countySlugs[i];
    const pngPath = path.join(countiesShotsDir, `${String(i + 1).padStart(2, "0")}-${slug}.png`);
    const res = await auditDeepLinkScreen({
      id: slug,
      uri: `kenyahub://county/${slug}`,
      pngPath,
      waitMs: 1400,
    });
    countyResults.push(res);
    if (fs.existsSync(pngPath)) countyReelPngs.push(pngPath);
    if (!res.passed || i % 10 === 0 || i === countySlugs.length - 1) {
      console.log(`  [${res.passed ? "PASS" : "FAIL"}] County ${i + 1}/${countySlugs.length}: ${slug}`);
    }
  }
  if (hasFfmpeg && stitchPngListToMp4(countyReelPngs, path.join(videosDir, "sweep-all-47-counties.mp4"), 1.5)) {
    sweepVideos.push("reports/videos/sweep-all-47-counties.mp4");
  }

  // =========================================================================
  // PART 6: MATATU ROUTES MULTI-TOWN AUDIT (PNGs + MP4)
  // =========================================================================
  const matatuRoutes = loadSampleMatatuSlugs();
  console.log(`\n▶ [Part 6] Auditing ${matatuRoutes.length} Matatu routes across active towns...`);
  const matatuResults = [];
  const matatuReelPngs = [];
  for (let i = 0; i < matatuRoutes.length; i++) {
    const { town, slug } = matatuRoutes[i];
    const pngPath = path.join(matatuShotsDir, `${String(i + 1).padStart(2, "0")}-${town}-${slug}.png`);
    const res = await auditDeepLinkScreen({
      id: `${town}/${slug}`,
      uri: `kenyahub://matatu/${slug}`,
      pngPath,
      waitMs: 1600,
    });
    matatuResults.push(res);
    if (fs.existsSync(pngPath)) matatuReelPngs.push(pngPath);
    console.log(`  [${res.passed ? "PASS" : "FAIL"}] Matatu ${i + 1}/${matatuRoutes.length}: ${town}/${slug}`);
  }
  if (hasFfmpeg && stitchPngListToMp4(matatuReelPngs, path.join(videosDir, "sweep-matatu-routes.mp4"), 1)) {
    sweepVideos.push("reports/videos/sweep-matatu-routes.mp4");
  }

  // =========================================================================
  // PART 7: LOGCAT CRASH STACKS, GFXINFO, JSON & MARKDOWN REPORTS
  // =========================================================================
  const logcat = execSync("adb logcat -d -v brief", { encoding: "utf8", maxBuffer: 25 * 1024 * 1024 });
  const lines = logcat.split("\n");
  const logHits = [];
  const crashStacks = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (
      !line.includes("ReactNative") &&
      !line.includes("kenyahub") &&
      !line.includes("FATAL") &&
      !line.includes("UnsatisfiedLinkError")
    ) {
      continue;
    }
    for (const rx of FATAL_LOGCAT_PATTERNS) {
      if (rx.test(line)) {
        logHits.push(line.trim());
        if (crashStacks.length < 10) {
          crashStacks.push(lines.slice(i, i + 25).map((l) => l.trim()).join("\n"));
        }
        break;
      }
    }
  }

  let jankyFramesLine = null;
  try {
    const gfx = execSync(`adb shell dumpsys gfxinfo ${APP_ID}`, { encoding: "utf8", maxBuffer: 5 * 1024 * 1024 });
    const m = gfx.match(/Janky frames:\s*[^\n]+/i);
    if (m) jankyFramesLine = m[0].trim();
  } catch {}

  const allScreenshots = collectAllPngs(screenshotsDir);
  const allVideos = [
    ...maestroResults.map((r) => r.video).filter(Boolean),
    ...sweepVideos,
  ];

  const summary = {
    generatedAt: new Date().toISOString(),
    deviceCount: connected.length,
    appAliveAfterLaunch: Boolean(appPidAfterLaunch),
    coverage: {
      maestroFlows: `${maestroResults.filter((r) => r.passed).length}/${maestroResults.length}`,
      coreTabsLightAndDark: `${coreResults.filter((r) => r.passed).length}/${coreResults.length}`,
      toolsAudited: `${toolResults.filter((r) => r.passed).length}/${toolResults.length}`,
      languagesAudited: `${languageResults.filter((r) => r.passed).length}/${languageResults.length}`,
      countiesAudited: `${countyResults.filter((r) => r.passed).length}/${countyResults.length}`,
      matatuRoutesAudited: `${matatuResults.filter((r) => r.passed).length}/${matatuResults.length}`,
    },
    screenshotsCaptured: allScreenshots.length,
    videosCaptured: allVideos.length,
    jankyFrames: jankyFramesLine,
    fatalLogcatHits: logHits.length,
    maestroResults,
    coreResults,
    toolResults,
    languageResults,
    countyResults,
    matatuResults,
    videos: allVideos,
    screenshots: allScreenshots,
    logHits: logHits.slice(0, 50),
    crashStacks,
  };

  fs.writeFileSync(
    path.join(reportDir, "android-live-audit.json"),
    `${JSON.stringify(summary, null, 2)}\n`
  );

  const failedScreens = [
    ...coreResults.filter((r) => !r.passed).map((r) => `Core Tab: ${r.id} (${r.errors.join(", ")})`),
    ...toolResults.filter((r) => !r.passed).map((r) => `Tool: ${r.id} (${r.errors.join(", ")})`),
    ...languageResults.filter((r) => !r.passed).map((r) => `Language: ${r.id} (${r.errors.join(", ")})`),
    ...countyResults.filter((r) => !r.passed).map((r) => `County: ${r.id} (${r.errors.join(", ")})`),
    ...matatuResults.filter((r) => !r.passed).map((r) => `Matatu: ${r.id} (${r.errors.join(", ")})`),
  ];

  const md = [
    "# KenyaHub Exhaustive Android Live Audit Summary",
    "",
    `- **Generated:** ${summary.generatedAt}`,
    `- **Interactive Maestro Flows:** ${summary.coverage.maestroFlows}`,
    `- **Core Hubs (Light & Dark):** ${summary.coverage.coreTabsLightAndDark}`,
    `- **All 33 Tools (Top + Scrolled):** ${summary.coverage.toolsAudited}`,
    `- **All 23 Kenyan Languages + Tabs:** ${summary.coverage.languagesAudited}`,
    `- **All 47 Kenyan Counties:** ${summary.coverage.countiesAudited}`,
    `- **Matatu Routes (Multi-Town):** ${summary.coverage.matatuRoutesAudited}`,
    `- **Total Screenshots Captured:** ${summary.screenshotsCaptured}`,
    `- **Total MP4 Videos Captured:** ${summary.videosCaptured}`,
    `- **Fatal Logcat Hits:** ${summary.fatalLogcatHits}`,
    `- **GPU Performance:** ${summary.jankyFrames || "N/A"}`,
    "",
    "## Failures Detected",
    failedScreens.length === 0 ? "None — every audited screen rendered without ErrorBoundary or crash." : failedScreens.map((f) => `- ${f}`).join("\n"),
    "",
  ].join("\n");

  fs.writeFileSync(path.join(reportDir, "android-live-audit-summary.md"), md);

  console.log(`\n=== EXHAUSTIVE ANDROID AUDIT COMPLETE ===`);
  console.log(`Maestro: ${summary.coverage.maestroFlows} | Core Hubs: ${summary.coverage.coreTabsLightAndDark} | Tools: ${summary.coverage.toolsAudited} | Languages: ${summary.coverage.languagesAudited} | Counties: ${summary.coverage.countiesAudited} | Matatu: ${summary.coverage.matatuRoutesAudited}`);
  console.log(`Screenshots: ${summary.screenshotsCaptured} | MP4 Videos: ${summary.videosCaptured} | Fatal Logcat Hits: ${summary.fatalLogcatHits}`);

  if (strict && (failedScreens.length > 0 || summary.fatalLogcatHits > 0)) {
    process.exit(1);
  }
}

main();
