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

function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function copyDirFiltered(srcDir, destDir) {
  ensureDir(destDir);
  const entries = readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "languages data" || entry.name === "raw" || entry.name === "__pycache__") continue;
    if (entry.name.endsWith(".pyc") || entry.name.endsWith(".log") || entry.name.endsWith(".pdf")) continue;
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
    registryContent.replace(/from\s+(['"])@\/data\/language-sources(['"])/g, "from $1../language-sources$2"),
    "utf8"
  );
}


// Sync verified audio manifest metadata from kenyahub/public/audio-manifest.json
const audioManifestSrc = resolve(root, "kenyahub/public/audio-manifest.json");
if (existsSync(audioManifestSrc)) {
  writeFileSync(resolve(destination, "data/audio-manifest.json"), readFileSync(audioManifestSrc));
}

console.log("Synchronized KenyaHub modular tool registry, 23 language courses, proverbs, dictionaries, and datasets to mobile/src/shared.");
