import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = join(root, "src");
const toolsRoot = join(sourceRoot, "app", "tools");
const dataRoot = join(sourceRoot, "data");
const manifestPath = join(dataRoot, "tool-data-sources.json");
const reportRoot = join(root, "reports");
const checkSources = process.argv.includes("--check-sources");
const strict = process.argv.includes("--strict");
const today = new Date();

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const registryText = readFileSync(join(sourceRoot, "lib", "tools-registry.ts"), "utf8");
const registrySlugs = [...registryText.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);
const routeSlugs = readdirSync(toolsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== "[slug]")
  .map((entry) => entry.name)
  .filter((slug) => slug !== "layout");

function parseDate(value) {
  if (!value) return null;
  const date = new Date(value.length === 4 ? `${value}-12-31` : value);
  return Number.isNaN(date.valueOf()) ? null : date;
}

function findImportedData(slug) {
  const pagePath = join(toolsRoot, slug, "page.tsx");
  if (!existsSync(pagePath)) return [];
  const page = readFileSync(pagePath, "utf8");
  return [...page.matchAll(/from\s+["']@\/data\/([^"']+)["']/g)]
    .map((match) => match[1])
    .map((importPath) => join(sourceRoot, "data", importPath))
    .filter((filePath) => existsSync(filePath));
}

function inspectData(filePath) {
  if (extname(filePath) !== ".json") {
    return { file: relative(root, filePath).replaceAll("\\", "/"), lastUpdated: null, source: null };
  }
  try {
    const data = JSON.parse(readFileSync(filePath, "utf8"));
    return {
      file: relative(root, filePath).replaceAll("\\", "/"),
      lastUpdated: data.lastUpdated ?? null,
      source: data.source ?? data.sourceUrl ?? null,
    };
  } catch (error) {
    return {
      file: relative(root, filePath).replaceAll("\\", "/"),
      lastUpdated: null,
      source: null,
      parseError: error.message,
    };
  }
}

async function checkUrl(url) {
  try {
    const response = await fetch(url, { method: "HEAD", redirect: "follow" });
    return { url, status: response.status, reachable: response.ok || response.status < 500 };
  } catch (error) {
    return { url, status: null, reachable: false, error: error.message };
  }
}

const issues = [];
const tools = [];
const uniqueRegistrySlugs = [...new Set(registrySlugs)];

for (const slug of uniqueRegistrySlugs) {
  const config = manifest.tools[slug] ?? {};
  const dataFiles = findImportedData(slug);
  const data = dataFiles.map(inspectData);
  const dates = data.map((item) => parseDate(item.lastUpdated)).filter(Boolean);
  const newestDate = dates.length ? new Date(Math.max(...dates.map((date) => date.valueOf()))) : null;
  const ageDays = newestDate ? Math.floor((today - newestDate) / 86400000) : null;
  const maxAgeDays = config.maxAgeDays ?? manifest.defaultMaxAgeDays;
  const sourceUrl = config.sourceUrl ?? null;

  const record = {
    slug,
    routeExists: routeSlugs.includes(slug),
    sourceUrl,
    maxAgeDays,
    ageDays,
    data,
    status: "ok",
  };

  if (!record.routeExists) {
    record.status = "error";
    issues.push(`${slug}: registry entry has no matching route directory`);
  }
  if (data.some((item) => item.parseError)) {
    record.status = "error";
    issues.push(`${slug}: one or more imported JSON files cannot be parsed`);
  }
  if (dataFiles.length > 0 && !newestDate) {
    record.status = "review";
    issues.push(`${slug}: imported data has no parseable lastUpdated metadata`);
  }
  if (ageDays !== null && ageDays > maxAgeDays) {
    record.status = "stale";
    issues.push(`${slug}: data is ${ageDays} days old (maximum ${maxAgeDays})`);
  }
  if (config.official && !sourceUrl) {
    record.status = "review";
    issues.push(`${slug}: official-source tool has no source URL in the audit manifest`);
  }

  tools.push(record);
}

for (const slug of routeSlugs) {
  if (!uniqueRegistrySlugs.includes(slug)) {
    issues.push(`${slug}: route directory is missing from tools-registry.ts`);
  }
}

const sourceChecks = [];
if (checkSources) {
  for (const tool of tools.filter((item) => item.sourceUrl)) {
    sourceChecks.push(await checkUrl(tool.sourceUrl));
  }
  for (const result of sourceChecks.filter((item) => !item.reachable)) {
    issues.push(`source URL is unreachable: ${result.url}`);
  }
}

const report = {
  generatedAt: today.toISOString(),
  summary: {
    registryTools: uniqueRegistrySlugs.length,
    routeDirectories: routeSlugs.length,
    errors: issues.filter((issue) => issue.includes("no matching route") || issue.includes("cannot be parsed") || issue.includes("missing from")).length,
    staleOrReview: issues.filter((issue) => !issue.includes("no matching route") && !issue.includes("cannot be parsed") && !issue.includes("missing from")).length,
  },
  issues,
  sourceChecks,
  tools,
};

mkdirSync(reportRoot, { recursive: true });
writeFileSync(join(reportRoot, "tool-audit.json"), `${JSON.stringify(report, null, 2)}\n`);

console.log(`Audited ${report.summary.registryTools} registry tools and ${report.summary.routeDirectories} route directories.`);
console.log(`Structural errors: ${report.summary.errors}; stale/review findings: ${report.summary.staleOrReview}.`);
for (const issue of issues) console.log(`- ${issue}`);

if (report.summary.errors > 0 || (strict && report.summary.staleOrReview > 0)) {
  process.exitCode = 1;
}
