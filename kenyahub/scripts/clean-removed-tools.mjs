import { existsSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsDir = resolve(__dirname, "../src/app/tools");

export const REMOVED_TOOL_DIRS = [
  "child-growth-schedule",
  "crop-planting-calendar",
  "driving-license-guide",
  "fertilizer-subsidy-guide",
  "housing-levy-calculator",
  "kcse-school-rankings",
  "kenya-customs-restricted-items",
  "kenya-postal-codes",
  "kenyan-food-nutrition",
  "kikuyu-proverbs",
  "livestock-market-prices",
  "matatu-routes",
  "national-parks-directory",
  "nhif-hospital-finder",
  "passport-id-fees",
  "professional-bodies-kenya",
  "public-holidays",
  "school-terms",
  "solar-roi-calculator",
  "trademark-cost-kenya",
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
