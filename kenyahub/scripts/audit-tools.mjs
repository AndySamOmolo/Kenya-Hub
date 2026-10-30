import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
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
const routeSlugs = [...new Set([
  ...readdirSync(toolsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "[slug]")
    .map((entry) => entry.name)
    .filter((slug) => slug !== "layout"),
  ...registrySlugs.filter((slug) => existsSync(join(toolsRoot, slug, "page.tsx"))),
])];

function parseDate(value) {
  if (!value) return null;
  const date = new Date(value.length === 4 ? `${value}-12-31` : value);
  return Number.isNaN(date.valueOf()) ? null : date;
}

function findImportedData(slug) {
  const pagePath = join(toolsRoot, slug, "page.tsx");
  if (!existsSync(pagePath)) return [];
  const page = readFileSync(pagePath, "utf8");
  return [...page.matchAll(/(?:from\s+|import\(\s*)["']@\/data\/([^"']+)["']/g)]
    .map((match) => match[1])
    .map((importPath) => join(sourceRoot, "data", importPath))
    .filter((filePath) => existsSync(filePath));
}

function inspectData(filePath, config = {}) {
  if (extname(filePath) !== ".json") {
    return { file: relative(root, filePath).replaceAll("\\", "/"), lastUpdated: null, source: null };
  }
  try {
    const data = JSON.parse(readFileSync(filePath, "utf8"));
    const isArray = Array.isArray(data);
    return {
      file: relative(root, filePath).replaceAll("\\", "/"),
      lastUpdated: (!isArray && data.lastUpdated) ? data.lastUpdated : (config.lastUpdated ?? null),
      source: (!isArray && (data.source ?? data.sourceUrl)) ? (data.source ?? data.sourceUrl) : (config.source ?? config.sourceUrl ?? null),
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
  const data = dataFiles.map((fp) => inspectData(fp, config));
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

const orphanRoutes = routeSlugs.filter((slug) => !uniqueRegistrySlugs.includes(slug));
for (const slug of orphanRoutes) {
  issues.push(`${slug}: route exists in src/app/tools but is missing from src/lib/tools-registry.ts`);
}

if (checkSources) {
  const urls = [...new Set(tools.map((tool) => tool.sourceUrl).filter(Boolean))];
  const urlResults = new Map();
  for (const url of urls) {
    urlResults.set(url, await checkUrl(url));
  }
  for (const tool of tools) {
    if (tool.sourceUrl) {
      tool.sourceCheck = urlResults.get(tool.sourceUrl);
      if (!tool.sourceCheck.reachable) {
        tool.status = tool.status === "ok" ? "review" : tool.status;
        issues.push(`${tool.slug}: source URL check failed (${tool.sourceUrl})`);
      }
    }
  }
}

const summary = {
  generatedAt: today.toISOString(),
  registryCount: uniqueRegistrySlugs.length,
  routeCount: routeSlugs.length,
  okCount: tools.filter((tool) => tool.status === "ok").length,
  reviewCount: tools.filter((tool) => tool.status === "review").length,
  staleCount: tools.filter((tool) => tool.status === "stale").length,
  errorCount: tools.filter((tool) => tool.status === "error").length + orphanRoutes.length,
  issues,
  tools,
};

mkdirSync(reportRoot, { recursive: true });
writeFileSync(join(reportRoot, "tool-audit.json"), `${JSON.stringify(summary, null, 2)}\n`);

console.log(`Audited ${summary.registryCount} registered tools across ${summary.routeCount} route directories.`);
console.log(`OK: ${summary.okCount} | Review: ${summary.reviewCount} | Stale: ${summary.staleCount} | Errors: ${summary.errorCount}`);
if (issues.length) {
  console.log("\nIssues requiring attention:");
  for (const issue of issues) console.log(`- ${issue}`);
}

if (strict && summary.errorCount > 0) {
  process.exit(1);
}
