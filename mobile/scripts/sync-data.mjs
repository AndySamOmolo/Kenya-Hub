import crypto from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");
const source = resolve(root, "kenyahub/src");
const destination = resolve(__dirname, "../src/shared");

// Internal editorial-only files excluded from mobile bundle (MOB-6)
const EXCLUDED_DATA_FILES = new Set([
  "ocr-review.ts",
]);

const EXCLUDED_DATA_DIRS = new Set([
  "languages data",
  "raw",
  "__pycache__",
  "cldf-cache",
  "benchmarks",
  "frequency-lists",
  "civic",
  "readers",
  "wikimedia",
  "locales",
  "staging",
]);

function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function copyDirFiltered(srcDir, destDir) {
  ensureDir(destDir);
  const entries = readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    if (EXCLUDED_DATA_DIRS.has(entry.name)) continue;
    if (entry.name.endsWith(".pyc") || entry.name.endsWith(".log") || entry.name.endsWith(".pdf") || entry.name.endsWith(".jsonl")) continue;
    if (EXCLUDED_DATA_FILES.has(entry.name)) continue;
    const sPath = join(srcDir, entry.name);
    const dPath = join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirFiltered(sPath, dPath);
    } else if (entry.isFile()) {
      writeFileSync(dPath, readFileSync(sPath));
    }
  }
}

rmSync(resolve(destination, "data/language-sources/raw"), { recursive: true, force: true });
for (const unusedDir of ["civic", "readers", "wikimedia", "locales", "dictionaries/staging"]) {
  rmSync(resolve(destination, "data", unusedDir), { recursive: true, force: true });
}
rmSync(resolve(destination, "data/language-sources/ocr-review.ts"), { force: true });
rmSync(resolve(destination, "lib/dictionary-loader.ts"), { force: true });
copyDirFiltered(resolve(source, "data"), resolve(destination, "data"));

ensureDir(resolve(destination, "lib"));
const libFiles = [
  "types.ts",
  "tools-registry.ts",
  "learn-engine.ts",
  "learn-progress.ts",
  "dictionary-search.ts",
  "language-audio.ts",
];
for (const file of libFiles) {
  const srcPath = resolve(source, "lib", file);
  if (!existsSync(srcPath)) continue;
  const destPath = resolve(destination, "lib", file);
  const content = readFileSync(srcPath, "utf8");
  const normalized = content
    .replace(/from\s+(['"])@\/data\//g, "from $1../data/")
    .replace(/from\s+(['"])@\/lib\//g, "from $1./")
    .replace(/import\(\s*(['"])@\/data\//g, "import($1../data/");
  writeFileSync(destPath, normalized, "utf8");
}

const registryPath = resolve(destination, "data/courses/registry.ts");
if (existsSync(registryPath)) {
  const registryContent = readFileSync(registryPath, "utf8");
  writeFileSync(
    registryPath,
    registryContent
      .replace(/from\s+(['"])@\/data\/language-sources(['"])/g, "from $1../language-sources$2")
      .replace(/from\s+(['"])@\/data\/language-typology(['"])/g, "from $1../language-typology$2"),
    "utf8"
  );
}

// Sync verified audio & KSL manifest metadata from kenyahub/public/
const audioManifestSrc = resolve(root, "kenyahub/public/audio-manifest.json");
if (existsSync(audioManifestSrc)) {
  writeFileSync(resolve(destination, "data/audio-manifest.json"), readFileSync(audioManifestSrc));
}
const kslIndexSrc = resolve(root, "kenyahub/public/ksl-index.json");
if (existsSync(kslIndexSrc)) {
  writeFileSync(resolve(destination, "data/ksl-index.json"), readFileSync(kslIndexSrc));
}
const dholuoChSrc = resolve(root, "kenyahub/public/dholuo-audio-chapters.json");
if (existsSync(dholuoChSrc)) {
  writeFileSync(resolve(destination, "data/dholuo-audio-chapters.json"), readFileSync(dholuoChSrc));
}
// Sync compact learning readers & comprehension quizzes for 1:1 Web-Mobile Listen & Read parity
for (const shardKind of ["quizzes", "readers"]) {
  const srcShardDir = resolve(root, `kenyahub/public/data/learning/${shardKind}`);
  const dstShardDir = resolve(destination, `data/learning/${shardKind}`);
  if (existsSync(srcShardDir)) {
    ensureDir(dstShardDir);
    const merged = {};
    for (const f of readdirSync(srcShardDir).filter((x) => x.endsWith(".json"))) {
      const lid = f.replace(/\.json$/, "");
      try {
        merged[lid] = JSON.parse(readFileSync(join(srcShardDir, f), "utf8"));
      } catch {}
    }
    writeFileSync(resolve(destination, `data/learning-${shardKind}.json`), JSON.stringify(merged));
  }
}

// Verify SHA-256 parity across all top-level statutory JSON datasets + key language provenance & typology files
const webDataDir = resolve(source, "data");
const mobDataDir = resolve(destination, "data");
const jsonFiles = readdirSync(webDataDir).filter((f) => f.endsWith(".json"));
const dictJsonFiles = readdirSync(join(webDataDir, "dictionaries"))
  .filter((f) => f.endsWith(".json"))
  .map((f) => `dictionaries/${f}`);
const extraParityFiles = [
  "language-sources/index.ts",
  "language-typology/profiles.json",
  "open-corpus-index.json",
  "dictionaries/catalog.ts",
  ...dictJsonFiles,
];

let verifiedCount = 0;
for (const fname of [...jsonFiles, ...extraParityFiles]) {
  const wPath = join(webDataDir, fname);
  const mPath = join(mobDataDir, fname);
  if (!existsSync(wPath)) continue;
  const wHash = sha256(readFileSync(wPath));
  const mHash = sha256(readFileSync(mPath));
  if (wHash !== mHash) {
    throw new Error(`SHA-256 parity mismatch after sync for ${fname}`);
  }
  verifiedCount++;
}

console.log(`Synchronized KenyaHub modular tool registry, 23 language courses, typology profiles, proverbs, dictionaries, and ${verifiedCount} SHA-256 verified data files to mobile/src/shared.`);
