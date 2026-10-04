import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const source = resolve(root, "kenyahub/src");
const destination = resolve(import.meta.dirname, "../src/shared");

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(resolve(source, "data"), resolve(destination, "data"), { recursive: true });
await mkdir(resolve(destination, "lib"), { recursive: true });
await cp(resolve(source, "lib/types.ts"), resolve(destination, "lib/types.ts"));
await cp(resolve(source, "lib/tools-registry.ts"), resolve(destination, "lib/tools-registry.ts"));
console.log("Synchronized KenyaHub tool registry and datasets.");
