#!/usr/bin/env node
/**
 * KenyaHub Live Android App Audit Runner (ADB + Maestro + Logcat Crash Monitor)
 *
 * Usage:
 *   npm run audit:android
 *   node e2e/run-android-audit.mjs --strict
 *
 * Requires:
 *   - Connected Android device or emulator (`adb devices`)
 *   - Installed KenyaHub APK (`ke.co.kenyahub.app`)
 *   - Maestro CLI (`curl -Ls "https://get.maestro.mobile.dev" | bash`)
 */

import { execSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mobileRoot = path.resolve(__dirname, "..");
const flowsDir = path.join(__dirname, "maestro");
const reportDir = path.join(mobileRoot, "reports");
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

function main() {
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

  fs.mkdirSync(reportDir, { recursive: true });
  execSync("adb logcat -c");

  const flows = fs
    .readdirSync(flowsDir)
    .filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
    .sort();

  const results = [];
  for (const flow of flows) {
    const start = Date.now();
    const flowPath = path.join(flowsDir, flow);
    console.log(`\n▶ Running Maestro flow: ${flow}`);
    const run = spawnSync("maestro", ["test", flowPath], {
      cwd: mobileRoot,
      stdio: "inherit",
    });
    const durationMs = Date.now() - start;
    results.push({
      flow,
      passed: run.status === 0,
      exitCode: run.status,
      durationMs,
    });
  }

  // Dump and scan logcat for JS/Native crashes during the entire audit
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

  // Capture Android GPU frame-jank summary
  let jankyFramesLine = null;
  try {
    const gfx = execSync("adb shell dumpsys gfxinfo ke.co.kenyahub.app", { encoding: "utf8", maxBuffer: 5 * 1024 * 1024 });
    const m = gfx.match(/Janky frames:\s*[^\n]+/i);
    if (m) jankyFramesLine = m[0].trim();
  } catch {}

  const summary = {
    jankyFrames: jankyFramesLine,
    generatedAt: new Date().toISOString(),
    deviceCount: connected.length,
    flowsTotal: results.length,
    flowsPassed: results.filter((r) => r.passed).length,
    fatalLogcatHits: logHits.length,
    results,
    logHits: logHits.slice(0, 50),
  };

  fs.writeFileSync(
    path.join(reportDir, "android-live-audit.json"),
    `${JSON.stringify(summary, null, 2)}\n`
  );

  console.log(`\nAndroid Live Audit: ${summary.flowsPassed}/${summary.flowsTotal} flows passed | Fatal logcat hits: ${summary.fatalLogcatHits}`);
  if (strict && (summary.flowsPassed < summary.flowsTotal || summary.fatalLogcatHits > 0)) {
    process.exit(1);
  }
}

main();
