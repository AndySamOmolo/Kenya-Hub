import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");
const source = resolve(root, "kenyahub/src");
const destination = resolve(__dirname, "../src/shared");

async function copyDirFiltered(srcDir, destDir) {
  await mkdir(destDir, { recursive: true });
  const entries = await readdir(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "languages data" || entry.name === "raw" || entry.name === "__pycache__") continue;
    if (entry.name.endsWith(".pyc") || entry.name.endsWith(".log") || entry.name.endsWith(".pdf")) continue;
    const sPath = join(srcDir, entry.name);
    const dPath = join(destDir, entry.name);
    if (entry.isDirectory()) {
      await copyDirFiltered(sPath, dPath);
    } else if (entry.isFile()) {
      const buf = await readFile(sPath);
      await writeFile(dPath, buf);
    }
  }
}

await copyDirFiltered(resolve(source, "data"), resolve(destination, "data"));

const explicitDataFiles = [
  "kra-car-import-crsp.json",
  "mjengo-construction-rates.json",
  "sacco-chama-rates.json",
  "tool-guides.json",
  "kikuyu-proverbs.json",
  "blog-posts.ts",
];
for (const df of explicitDataFiles) {
  const buf = await readFile(resolve(source, "data", df));
  await writeFile(resolve(destination, "data", df), buf);
}

await mkdir(resolve(destination, "lib"), { recursive: true });
const libFiles = ["types.ts", "tools-registry.ts", "learn-engine.ts", "learn-progress.ts"];
for (const file of libFiles) {
  const srcPath = resolve(source, "lib", file);
  const destPath = resolve(destination, "lib", file);
  const content = await readFile(srcPath, "utf8");
  const normalized = content
    .replace(/from\s+(['"])@\/data\//g, "from $1../data/")
    .replace(/from\s+(['"])@\/lib\//g, "from $1./");
  await writeFile(destPath, normalized, "utf8");
}

const registryPath = resolve(destination, "data/courses/registry.ts");
const registryContent = await readFile(registryPath, "utf8");
await writeFile(
  registryPath,
  registryContent.replace(/from\s+(['"])@\/data\/language-sources(['"])/g, "from $1../language-sources$2"),
  "utf8"
);

console.log("Synchronized KenyaHub tool registry, courses, learn engine, and datasets.");
