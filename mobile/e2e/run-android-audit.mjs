#!/usr/bin/env node
/**
 * KenyaHub Live Android App Audit Runner (ADB + Maestro + Guaranteed-Playable MP4 + PNG + Logcat + GFXInfo)
 *
 * Never stops early on flow failures:
 * - Pre-launches the app and verifies the process stays alive + captures 00-app-launch.png
 * - Runs all Maestro flows asynchronously to completion
 * - Records MP4 via `adb shell screenrecord` (waiting for moov finalization) AND captures
 *   periodic `adb exec-out screencap -p` frames concurrently as an automatic H.264 yuv420p
 *   FFmpeg fallback if SwiftShader screenrecord produces a corrupt/unplayable MP4
 * - Always captures an end-of-flow PNG via `adb exec-out screencap -p` so every flow yields valid photos
 * - Captures multi-line crash stack traces from `adb logcat` and GPU janky frame metrics
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

function checkBinary(cmd, args = ["--version"]) {
  const res = spawnSync(cmd, args, { encoding: "utf8" });
  return res.status === 0;
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function capturePngAsync(destPath) {
  return new Promise((resolve) => {
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

function stitchFramesToMp4(framesDir, outputMp4) {
  const res = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-framerate",
      "1",
      "-i",
      path.join(framesDir, "frame_%04d.png"),
      "-vf",
      "scale=trunc(iw/2)*2:trunc(ih/2)*2",
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

  const hasFfmpeg = checkBinary("ffmpeg", ["-version"]);
  const hasFfprobe = checkBinary("ffprobe", ["-version"]);

  fs.mkdirSync(videosDir, { recursive: true });
  fs.mkdirSync(screenshotsDir, { recursive: true });
  execSync("adb logcat -c");

  // Wake & unlock screen, then pre-launch app to warm up Hermes/JS bundle and verify launch health
  try {
    execSync("adb shell svc power stayon true", { stdio: "ignore" });
    execSync("adb shell wm dismiss-keyguard", { stdio: "ignore" });
    execSync("adb shell input keyevent 82", { stdio: "ignore" });
    execSync(`adb shell monkey -p ${APP_ID} -c android.intent.category.LAUNCHER 1`, { stdio: "ignore" });
  } catch {}
  await sleep(5000);
  const appPidAfterLaunch = getAppPid();
  await capturePngAsync(path.join(screenshotsDir, "00-app-launch.png"));
  console.log(`App pre-launch PID: ${appPidAfterLaunch ?? "NOT RUNNING (crashed on launch?)"}`);

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
    const tmpFramesDir = fs.mkdtempSync(path.join(os.tmpdir(), `kh-frames-${slug}-`));

    // Start background MP4 screen recording (720x1280 @ 2Mbps for SwiftShader stability)
    const recProc = spawn(
      "adb",
      ["shell", "screenrecord", "--size", "720x1280", "--bit-rate", "2000000", "--time-limit", "180", remoteMp4],
      { stdio: "ignore" }
    );

    // Concurrent non-blocking PNG frame grabber (guaranteed FFmpeg fallback if SwiftShader corrupts MP4)
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
    console.log(`\n▶ Running Maestro flow (recording video + frames): ${flow}`);
    const exitCode = await runMaestroAsync(flowPath, screenshotsDir);
    const durationMs = Date.now() - start;

    // Stop concurrent frame grabber & capture guaranteed end-of-flow PNG
    capturingFrames = false;
    await frameLoop;
    const endPngPath = path.join(screenshotsDir, `${slug}-end.png`);
    if (await capturePngAsync(endPngPath)) {
      fs.copyFileSync(endPngPath, path.join(tmpFramesDir, `frame_${String(frameIndex).padStart(4, "0")}.png`));
      frameIndex++;
    }

    // Gracefully stop screenrecord and wait for MP4 moov atom finalization
    try {
      execSync("adb shell pkill -2 screenrecord", { stdio: "ignore" });
    } catch {}
    await waitForScreenrecordExit(6000);
    try {
      recProc.kill("SIGTERM");
    } catch {}
    await sleep(500);

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

    // Automatic FFmpeg fallback from captured PNG frames if screenrecord was unplayable
    if (!videoSaved && hasFfmpeg && frameIndex > 1) {
      if (stitchFramesToMp4(tmpFramesDir, localMp4)) {
        videoSaved = true;
        videoSource = "ffmpeg-screencap";
      }
    }

    fs.rmSync(tmpFramesDir, { recursive: true, force: true });

    results.push({
      flow,
      passed: exitCode === 0,
      exitCode,
      durationMs,
      video: videoSaved ? path.relative(mobileRoot, localMp4) : null,
      videoSource,
      framesCaptured: frameIndex - 1,
    });
  }

  // Dump and scan logcat for JS/Native crashes across all flows (capture 25-line stack traces)
  const logcat = execSync("adb logcat -d -v brief", { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 });
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
        if (crashStacks.length < 5) {
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

  const screenshotFiles = fs
    .readdirSync(screenshotsDir)
    .filter((f) => f.endsWith(".png"))
    .sort();

  const summary = {
    generatedAt: new Date().toISOString(),
    deviceCount: connected.length,
    appAliveAfterLaunch: Boolean(appPidAfterLaunch),
    flowsTotal: results.length,
    flowsPassed: results.filter((r) => r.passed).length,
    screenshotsCaptured: screenshotFiles.length,
    videosCaptured: results.filter((r) => r.video).length,
    jankyFrames: jankyFramesLine,
    fatalLogcatHits: logHits.length,
    results,
    screenshots: screenshotFiles,
    logHits: logHits.slice(0, 50),
    crashStacks,
  };

  fs.writeFileSync(
    path.join(reportDir, "android-live-audit.json"),
    `${JSON.stringify(summary, null, 2)}\n`
  );

  console.log(
    `\nAndroid Live Audit: ${summary.flowsPassed}/${summary.flowsTotal} flows passed | Screenshots: ${summary.screenshotsCaptured} | Videos: ${summary.videosCaptured} | Fatal logcat hits: ${summary.fatalLogcatHits}`
  );
  if (strict && (summary.flowsPassed < summary.flowsTotal || summary.fatalLogcatHits > 0)) {
    process.exit(1);
  }
}

main();
