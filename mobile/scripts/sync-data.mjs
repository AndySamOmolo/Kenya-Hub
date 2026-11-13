import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");
const source = resolve(root, "kenyahub/src");
const destination = resolve(__dirname, "../src/shared");

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
    const sPath = join(srcDir, entry.name);
    const dPath = join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirFiltered(sPath, dPath);
    } else if (entry.isFile()) {
      writeFileSync(dPath, readFileSync(sPath));
    }
  }
}

copyDirFiltered(resolve(source, "data"), resolve(destination, "data"));

ensureDir(resolve(destination, "lib"));
const libFiles = [
  "types.ts",
  "tools-registry.ts",
  "learn-engine.ts",
  "learn-progress.ts",
  "dictionary-search.ts",
  "dictionary-loader.ts",
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

console.log("Synchronized KenyaHub modular tool registry, 23 language courses, proverbs, dictionaries, and datasets to mobile/src/shared.");
