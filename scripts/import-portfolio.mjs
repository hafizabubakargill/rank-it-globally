import { execFileSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const manifestPath = join(root, "src/content/portfolioProjects.json");
const screenshotsDirectory = join(root, "public/assets/screenshots");
const args = process.argv.slice(2);
const inputArgument = getArgument("--input");
const dryRun = args.includes("--dry-run");

if (!inputArgument) {
  fail(
    "Usage: npm run portfolio:import -- --input /absolute/path/batch.json [--dry-run]",
  );
}

const inputPath = resolve(process.cwd(), inputArgument);
const currentProjects = readJson(manifestPath);
const incomingProjects = readJson(inputPath);

if (!Array.isArray(incomingProjects) || incomingProjects.length === 0) {
  fail("The batch file must contain a non-empty JSON array.");
}

const knownSlugs = new Set(currentProjects.map((project) => project.slug));
const knownUrls = new Set(
  currentProjects.map((project) => normalizeUrl(project.url)),
);
const preparedProjects = incomingProjects.map((project, index) =>
  prepareProject(project, index),
);

for (const project of preparedProjects) {
  if (knownSlugs.has(project.slug)) {
    fail(`Duplicate portfolio slug: ${project.slug}`);
  }
  if (knownUrls.has(normalizeUrl(project.url))) {
    fail(`Duplicate portfolio URL: ${project.url}`);
  }
  knownSlugs.add(project.slug);
  knownUrls.add(normalizeUrl(project.url));
}

console.log(
  `${dryRun ? "Dry run:" : "Importing"} ${preparedProjects.length} portfolio project(s):`,
);
for (const project of preparedProjects) {
  console.log(
    `- ${project.name} -> public/assets/screenshots/${project.slug}-full.webp`,
  );
}

if (dryRun) {
  console.log("Validation passed. No files were changed.");
  process.exit(0);
}

assertCommand("sips");
assertCommand("cwebp");

const temporaryDirectory = mkdtempSync(
  join(tmpdir(), "rank-it-portfolio-import-"),
);

try {
  for (const project of preparedProjects) {
    const resizedPng = join(temporaryDirectory, `${project.slug}.png`);
    const optimizedWebp = join(
      temporaryDirectory,
      `${project.slug}-full.webp`,
    );
    const destination = join(
      screenshotsDirectory,
      `${project.slug}-full.webp`,
    );

    execFileSync(
      "sips",
      ["--resampleWidth", "900", project.sourceScreenshot, "--out", resizedPng],
      { stdio: "ignore" },
    );
    execFileSync("cwebp", ["-quiet", "-q", "78", resizedPng, "-o", optimizedWebp]);
    copyFileSync(optimizedWebp, destination);
  }

  const additions = preparedProjects.map(toManifestProject);
  writeFileSync(
    manifestPath,
    `${JSON.stringify([...currentProjects, ...additions], null, 2)}\n`,
  );
  console.log(
    `Imported ${additions.length} project(s). Run npm run lint and npm run build before deploying.`,
  );
} finally {
  rmSync(temporaryDirectory, { force: true, recursive: true });
}

function prepareProject(project, index) {
  const position = `entry ${index + 1}`;
  const requiredFields = [
    "name",
    "url",
    "category",
    "country",
    "platform",
    "location",
    "result",
    "screenshot",
  ];

  for (const field of requiredFields) {
    if (typeof project[field] !== "string" || !project[field].trim()) {
      fail(`${position} is missing a valid "${field}" value.`);
    }
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(project.url);
  } catch {
    fail(`${position} has an invalid URL: ${project.url}`);
  }
  if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
    fail(`${position} URL must use HTTP or HTTPS.`);
  }

  const sourceScreenshot = resolve(dirname(inputPath), project.screenshot);
  if (!existsSync(sourceScreenshot)) {
    fail(
      `${position} screenshot does not exist: ${sourceScreenshot} (from ${basename(inputPath)})`,
    );
  }

  const slug = slugify(project.slug || project.name);
  if (!slug) fail(`${position} could not produce a valid slug.`);

  return {
    slug,
    name: project.name.trim(),
    url: parsedUrl.toString(),
    screenshot: `/assets/screenshots/${slug}-full.webp`,
    category: project.category.trim(),
    country: project.country.trim().toUpperCase(),
    platform: project.platform.trim(),
    location: project.location.trim(),
    result: project.result.trim(),
    ...(project.highlightResult === true ? { highlightResult: true } : {}),
    sourceScreenshot,
  };
}

function getArgument(name) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    fail(`Could not read JSON from ${path}: ${error.message}`);
  }
}

function normalizeUrl(value) {
  const url = new URL(value);
  return `${url.hostname.replace(/^www\./, "")}${url.pathname.replace(/\/$/, "")}`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function assertCommand(command) {
  try {
    execFileSync("/usr/bin/which", [command], { stdio: "ignore" });
  } catch {
    fail(`Required image tool "${command}" is not installed.`);
  }
}

function toManifestProject(project) {
  return {
    slug: project.slug,
    name: project.name,
    url: project.url,
    screenshot: project.screenshot,
    category: project.category,
    country: project.country,
    platform: project.platform,
    location: project.location,
    result: project.result,
    ...(project.highlightResult ? { highlightResult: true } : {}),
  };
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
