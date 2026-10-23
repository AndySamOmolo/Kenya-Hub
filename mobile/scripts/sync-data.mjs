import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");
const source = resolve(root, "kenyahub/src");
const destination = resolve(__dirname, "../src/shared");

function ensureDir(dir) {
  if (!existsSync(dir)) {
    const parent = dirname(dir);
    if (parent !== dir && !existsSync(parent)) ensureDir(parent);
    try { mkdirSync(dir); } catch {}
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

const explicitDataFiles = [
  "kra-car-import-crsp.json",
  "mjengo-construction-rates.json",
  "sacco-chama-rates.json",
  "tool-guides.json",
  "kikuyu-proverbs.json",
  "blog-posts.ts",
];
for (const df of explicitDataFiles) {
  writeFileSync(resolve(destination, "data", df), readFileSync(resolve(source, "data", df)));
}

for (const lang of ["swahili", "kalenjin", "mijikenda", "meru", "somali"]) {
  ensureDir(resolve(destination, "data/courses", lang));
  for (const fn of ["course.ts", "grammar-reference.ts"]) {
    const s = resolve(source, "data/courses", lang, fn);
    const d = resolve(destination, "data/courses", lang, fn);
    if (existsSync(s)) {
      writeFileSync(d, readFileSync(s));
    }
  }
}

ensureDir(resolve(destination, "lib"));
const libFiles = ["types.ts", "tools-registry.ts", "learn-engine.ts", "learn-progress.ts"];
for (const file of libFiles) {
  const srcPath = resolve(source, "lib", file);
  const destPath = resolve(destination, "lib", file);
  const content = readFileSync(srcPath, "utf8");
  const normalized = content
    .replace(/from\s+(['"])@\/data\//g, "from $1../data/")
    .replace(/from\s+(['"])@\/lib\//g, "from $1./");
  writeFileSync(destPath, normalized, "utf8");
}

const registryPath = resolve(destination, "data/courses/registry.ts");
const registryContent = readFileSync(registryPath, "utf8");
writeFileSync(
  registryPath,
  registryContent.replace(/from\s+(['"])@\/data\/language-sources(['"])/g, "from $1../language-sources$2"),
  "utf8"
);

console.log("Synchronized KenyaHub tool registry, courses, learn engine, and datasets.");
