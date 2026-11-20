#!/usr/bin/env node
/**
 * KenyaHub Live Android App Audit Runner (ADB + Maestro + MP4 Screenrecord + Logcat + GFXInfo)
 *
 * Never stops early on flow failures: runs all Maestro flows to completion,
 * records an MP4 video per flow, saves screenshots into `mobile/reports/screenshots/`,
 * scans `adb logcat` for JS/Native crashes, and records GPU janky frame metrics.
 */

import { execSync, spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mobileRoot = path.resolve(__dirname, "..");
const flowsDir = path.join(__dirname, "maestro");
const reportDir = path.join(mobileRoot, "reports");
const videosDir = path.join(reportDir, "videos");
const screenshotsDir = path.join(reportDir, "screenshots");
const strict = process.argv.includes("--strict");

const FATAL_LOGCAT_PATTERNS = [
  /Rendered fewer hooks than expected/i,
  /TypeError:.*is not a function/i,
  /ReferenceError:/i,
  /ReactNativeJS:.*Error:/i,
  /FATAL EXCEPTION/i,
  /ANR in ke\.co\.kenyahub\.app/i,
];

function checkBinary(cmd) {
  const res = spawnSync(cmd, ["--version"], { encoding: "utf8" });
  return res.status === 0;
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  if (!checkBinary("adb")) {
    console.error("ERROR: `adb` not found in PATH. Install Android Platform Tools.");
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
    console.error("ERROR: `maestro` CLI not found. Install via https://maestro.mobile.dev");
    process.exit(1);
  }

  fs.mkdirSync(videosDir, { recursive: true });
  fs.mkdirSync(screenshotsDir, { recursive: true });
  execSync("adb logcat -c");

  const flows = fs
    .readdirSync(flowsDir)
    .filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
    .sort();

  const results = [];
  for (const flow of flows) {
    const slug = flow.replace(/\.(yaml|yml)$/, "");
    const remoteMp4 = `/sdcard/kh_audit_${slug}.mp4`;
    const localMp4 = path.join(videosDir, `${slug}.mp4`);
    const flowPath = path.join(flowsDir, flow);

    // Start background MP4 screen recording on device (max 180s per flow)
    const recProc = spawn("adb", ["shell", "screenrecord", "--time-limit", "180", remoteMp4], {
      stdio: "ignore",
    });

    const start = Date.now();
    console.log(`\n▶ Running Maestro flow (recording video): ${flow}`);
    const run = spawnSync("maestro", ["test", flowPath], {
      cwd: screenshotsDir,
      stdio: "inherit",
    });
    const durationMs = Date.now() - start;

    // Gracefully stop screenrecord and pull MP4 video
    try {
      recProc.kill("SIGINT");
      execSync("adb shell pkill -2 screenrecord", { stdio: "ignore" });
    } catch {}
    await sleep(1200);
    let videoSaved = false;
    try {
      execSync(`adb pull "${remoteMp4}" "${localMp4}"`, { stdio: "ignore" });
      execSync(`adb shell rm -f "${remoteMp4}"`, { stdio: "ignore" });
      videoSaved = fs.existsSync(localMp4);
    } catch {}

    results.push({
      flow,
      passed: run.status === 0,
      exitCode: run.status,
      durationMs,
      video: videoSaved ? path.relative(mobileRoot, localMp4) : null,
    });
  }

  // Dump and scan logcat for JS/Native crashes across all flows
  const logcat = execSync("adb logcat -d -v brief", { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 });
  const logHits = [];
  for (const line of logcat.split("\n")) {
    if (!line.includes("ReactNative") && !line.includes("kenyahub") && !line.includes("FATAL")) continue;
    for (const rx of FATAL_LOGCAT_PATTERNS) {
      if (rx.test(line)) {
        logHits.push(line.trim());
        break;
      }
    }
  }

  let jankyFramesLine = null;
  try {
    const gfx = execSync("adb shell dumpsys gfxinfo ke.co.kenyahub.app", { encoding: "utf8", maxBuffer: 5 * 1024 * 1024 });
    const m = gfx.match(/Janky frames:\s*[^\n]+/i);
    if (m) jankyFramesLine = m[0].trim();
  } catch {}

  const screenshotFiles = fs
    .readdirSync(screenshotsDir)
    .filter((f) => f.endsWith(".png"))
    .sort();

  const summary = {
    generatedAt: new Date().toISOString(),
    deviceCount: connected.length,
    flowsTotal: results.length,
    flowsPassed: results.filter((r) => r.passed).length,
    screenshotsCaptured: screenshotFiles.length,
    videosCaptured: results.filter((r) => r.video).length,
    jankyFrames: jankyFramesLine,
    fatalLogcatHits: logHits.length,
    results,
    screenshots: screenshotFiles,
    logHits: logHits.slice(0, 50),
  };

  fs.writeFileSync(
    path.join(reportDir, "android-live-audit.json"),
    `${JSON.stringify(summary, null, 2)}\n`
  );

  console.log(`\nAndroid Live Audit: ${summary.flowsPassed}/${summary.flowsTotal} flows passed | Screenshots: ${summary.screenshotsCaptured} | Videos: ${summary.videosCaptured} | Fatal logcat hits: ${summary.fatalLogcatHits}`);
  if (strict && (summary.flowsPassed < summary.flowsTotal || summary.fatalLogcatHits > 0)) {
    process.exit(1);
  }
}

main();
