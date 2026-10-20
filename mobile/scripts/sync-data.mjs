import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");
const source = resolve(root, "kenyahub/src");
const destination = resolve(__dirname, "../src/shared");

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(resolve(source, "data"), resolve(destination, "data"), { recursive: true });
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

// Ensure registry.ts uses relative import for language-sources in mobile/src/shared
const registryPath = resolve(destination, "data/courses/registry.ts");
const registryContent = await readFile(registryPath, "utf8");
await writeFile(
  registryPath,
  registryContent.replace(/from\s+(['"])@\/data\/language-sources(['"])/g, "from $1../language-sources$2"),
  "utf8"
);

console.log("Synchronized KenyaHub tool registry, courses, learn engine, and datasets.");
