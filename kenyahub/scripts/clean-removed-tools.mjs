import { existsSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsDir = resolve(__dirname, "../src/app/tools");

const REMOVED_TOOL_DIRS = [
  "child-growth-schedule",
  "driving-license-guide",
  "housing-levy-calculator",
  "kcse-school-rankings",
  "kenya-postal-codes",
  "kikuyu-proverbs",
  "matatu-routes",
  "mobile-number-prefix",
  "passport-id-fees",
  "public-holidays",
  "school-terms",
  "solar-roi-calculator",
  "vehicle-insurance-calculator",
  "ward-constituency-finder",
];

let removedCount = 0;
for (const slug of REMOVED_TOOL_DIRS) {
  const dirPath = resolve(toolsDir, slug);
  if (existsSync(dirPath)) {
    rmSync(dirPath, { recursive: true, force: true });
    removedCount++;
  }
}

if (removedCount > 0) {
  console.log(`Removed ${removedCount} deprecated tool route directories before build.`);
}
