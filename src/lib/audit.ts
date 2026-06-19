import Anthropic from "@anthropic-ai/sdk";

type AuditInput = {
  website: string;
  email: string;
};

type ProviderResult = {
  ok: boolean;
  source: string;
  data?: unknown;
  error?: string;
};

type ReportResult = {
  report: string;
  pageSpeed: ProviderResult;
  dataForSeo: ProviderResult;
};

const REQUEST_TIMEOUT_MS = 35_000;

export function normalizeWebsite(value: string) {
  const trimmed = value.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  const url = new URL(withProtocol);
  url.hash = "";
  return url.toString();
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function buildAuditReport(input: AuditInput): Promise<ReportResult> {
  const [pageSpeed, dataForSeo] = await Promise.all([
    fetchPageSpeed(input.website),
    fetchDataForSeo(input.website),
  ]);

  const dataSnapshot = buildDataSnapshot(input, pageSpeed, dataForSeo);
  const recommendations = await generateClaudeReport(
    input,
    pageSpeed,
    dataForSeo,
    dataSnapshot,
  );
  const report = `${dataSnapshot}\n\n${recommendations}`.trim();

  return {
    report,
    pageSpeed,
    dataForSeo,
  };
}

async function fetchPageSpeed(website: string): Promise<ProviderResult> {
  const key = process.env.GOOGLE_PAGESPEED_API_KEY;
  if (!key) {
    return {
      ok: false,
      source: "Google PageSpeed Insights",
      error: "GOOGLE_PAGESPEED_API_KEY is not configured.",
    };
  }

  const params = new URLSearchParams({
    url: website,
    key,
    strategy: "mobile",
    category: "performance",
  });
  params.append("category", "accessibility");
  params.append("category", "best-practices");
  params.append("category", "seo");

  try {
    const data = await fetchJson(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`,
    );
    const lighthouse = data.lighthouseResult as
      | {
          categories?: Record<string, { score?: number }>;
          audits?: Record<string, { score?: number | null; displayValue?: string }>;
        }
      | undefined;

    return {
      ok: true,
      source: "Google PageSpeed Insights",
      data: {
        categories: lighthouse?.categories ?? {},
        audits: pickRecord(lighthouse?.audits ?? {}, [
          "first-contentful-paint",
          "largest-contentful-paint",
          "total-blocking-time",
          "cumulative-layout-shift",
          "speed-index",
          "interactive",
          "meta-description",
          "document-title",
          "crawlable-anchors",
          "is-crawlable",
        ]),
      },
    };
  } catch (error) {
    return {
      ok: false,
      source: "Google PageSpeed Insights",
      error: getErrorMessage(error),
    };
  }
}

async function fetchDataForSeo(website: string): Promise<ProviderResult> {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;
  if (!login || !password) {
    return {
      ok: false,
      source: "DataForSEO OnPage",
      error: "DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD are not configured.",
    };
  }

  const auth = `Basic ${Buffer.from(`${login}:${password}`).toString("base64")}`;

  try {
    const posted = await fetchJson("https://api.dataforseo.com/v3/on_page/task_post", {
      method: "POST",
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          target: new URL(website).hostname,
          start_url: website,
          max_crawl_pages: 1,
          load_resources: true,
          enable_javascript: true,
          enable_browser_rendering: true,
        },
      ]),
    });

    const taskId = extractDataForSeoTaskId(posted);
    if (!taskId) {
      return {
        ok: false,
        source: "DataForSEO OnPage",
        error: "DataForSEO did not return a task id.",
        data: posted,
      };
    }

    const { summary, pages } = await pollDataForSeoTask(taskId, auth);

    return {
      ok: true,
      source: "DataForSEO OnPage",
      data: {
        taskId,
        summary,
        pages,
      },
    };
  } catch (error) {
    return {
      ok: false,
      source: "DataForSEO OnPage",
      error: getErrorMessage(error),
    };
  }
}

async function generateClaudeReport(
  input: AuditInput,
  pageSpeed: ProviderResult,
  dataForSeo: ProviderResult,
  dataSnapshot: string,
) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return fallbackReport(input, pageSpeed, dataForSeo);
  }

  try {
    const anthropic = new Anthropic({ apiKey });
    const message = await anthropic.messages.create({
      model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5",
      max_tokens: 900,
      temperature: 0.2,
      system:
        "You write concise, practical website audit recommendations for a web design and SEO agency. Be specific, avoid scare tactics, and format with short headings and bullets. Do not invent metrics. Do not repeat the automated data snapshot verbatim. Keep the visitor-facing report short enough to scan in under 2 minutes.",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Create useful recommendations for ${input.website}. The visitor email is ${input.email}.

Start with "## Recommended Action Plan". Include no more than 4 priority bullets, then "## Quick Wins" with no more than 4 bullets. Use the available JSON from Google PageSpeed and DataForSEO. If a data source failed or is missing, say what to manually verify next.

Automated data snapshot already included above the recommendations:
${dataSnapshot}

Google PageSpeed:
${JSON.stringify(pageSpeed).slice(0, 12_000)}

DataForSEO:
${JSON.stringify(dataForSeo).slice(0, 12_000)}

Return concise plain text suitable for an email. Do not write a long technical checklist.`,
            },
          ],
        },
      ],
    });

    return message.content
      .map((block) => (block.type === "text" ? block.text : ""))
      .join("\n")
      .trim();
  } catch {
    return fallbackReport(input, pageSpeed, dataForSeo);
  }
}

function fallbackReport(
  input: AuditInput,
  pageSpeed: ProviderResult,
  dataForSeo: ProviderResult,
) {
  return `Website Audit Request

Website: ${input.website}

We received your request and queued your site for review.

Automated checks:
- ${pageSpeed.source}: ${pageSpeed.ok ? "completed" : pageSpeed.error}
- ${dataForSeo.source}: ${dataForSeo.ok ? "completed" : dataForSeo.error}

Initial recommendations:
- Check that every important page has a clear title tag and meta description.
- Confirm your primary calls to action are visible above the fold on mobile.
- Review image sizes, unused scripts, and Core Web Vitals before scaling paid traffic.
- Make sure service pages include local/industry search terms and structured headings.

Our team will review the data and follow up with clearer priorities.`;
}

function buildDataSnapshot(
  input: AuditInput,
  pageSpeed: ProviderResult,
  dataForSeo: ProviderResult,
) {
  const lines = [
    "## Automated Data Snapshot",
    "",
    `Website: ${input.website}`,
    `Prepared for: ${input.email}`,
    `Date: ${new Date().toLocaleDateString("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}`,
    "",
    "## PageSpeed Insights",
    ...formatPageSpeedSnapshot(pageSpeed),
    "",
    "## Technical SEO Crawl",
    ...formatDataForSeoSnapshot(dataForSeo),
  ];

  return lines.join("\n");
}

function formatPageSpeedSnapshot(result: ProviderResult) {
  if (!result.ok) {
    return [
      `Status: Unable to complete`,
      `Reason: ${result.error || "Unknown error"}`,
      "Manual next step: run the URL through PageSpeed Insights and confirm the site is publicly reachable.",
    ];
  }

  const data = result.data as
    | {
        categories?: Record<string, { score?: number }>;
        audits?: Record<string, { displayValue?: string; score?: number | null }>;
      }
    | undefined;
  const categories = data?.categories ?? {};
  const audits = data?.audits ?? {};

  return [
    `Status: Completed`,
    `Performance: ${formatScore(categories.performance?.score)}`,
    `Accessibility: ${formatScore(categories.accessibility?.score)}`,
    `Best Practices: ${formatScore(categories["best-practices"]?.score)}`,
    `SEO: ${formatScore(categories.seo?.score)}`,
    `First Contentful Paint: ${audits["first-contentful-paint"]?.displayValue || "n/a"}`,
    `Largest Contentful Paint: ${audits["largest-contentful-paint"]?.displayValue || "n/a"}`,
    `Total Blocking Time: ${audits["total-blocking-time"]?.displayValue || "n/a"}`,
    `Cumulative Layout Shift: ${audits["cumulative-layout-shift"]?.displayValue || "n/a"}`,
    `Speed Index: ${audits["speed-index"]?.displayValue || "n/a"}`,
  ];
}

function formatDataForSeoSnapshot(result: ProviderResult) {
  if (!result.ok) {
    return [
      `Status: Unable to complete`,
      `Reason: ${result.error || "Unknown error"}`,
      "Manual next step: confirm the page is crawlable, not blocking bots, and not returning server errors.",
    ];
  }

  const data = result.data as { taskId?: string; summary?: unknown; pages?: unknown };
  const summary = firstDataForSeoResult(data.summary);
  const page = firstDataForSeoItem(data.pages);
  const checks = getObject(summary, "checks");
  const pageChecks = getObject(page, "checks");
  const meta = getObject(page, "meta");

  return [
    `Status: Completed`,
    data.taskId ? `Task ID: ${data.taskId}` : "",
    `Crawled Pages: ${valueAt(summary, "crawl_progress.pages_in_queue") === 0 ? valueAt(summary, "crawl_progress.pages_crawled") : valueAt(summary, "crawl_progress.pages_crawled") || valueAt(summary, "pages_crawled") || "n/a"}`,
    `Pages In Queue: ${valueAt(summary, "crawl_progress.pages_in_queue") ?? "n/a"}`,
    `Broken Links: ${valueAt(summary, "broken_links") ?? valueAt(summary, "checks.broken_links") ?? "n/a"}`,
    `Duplicate Titles: ${valueAt(checks, "duplicate_title") ?? "n/a"}`,
    `Duplicate Descriptions: ${valueAt(checks, "duplicate_description") ?? "n/a"}`,
    `Title: ${valueAt(meta, "title") || valueAt(page, "meta.title") || "n/a"}`,
    `Meta Description: ${valueAt(meta, "description") || valueAt(page, "meta.description") || "n/a"}`,
    `H1 Count: ${valueAt(pageChecks, "h1") ?? valueAt(page, "meta.htags.h1.length") ?? "n/a"}`,
  ].filter(Boolean) as string[];
}

async function fetchJson(url: string, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      ...init,
      signal: controller.signal,
      cache: "no-store",
    });
    const data = (await res.json()) as unknown;
    if (!res.ok) {
      throw new Error(`Request failed with ${res.status}: ${JSON.stringify(data)}`);
    }
    return data as Record<string, unknown>;
  } finally {
    clearTimeout(timeout);
  }
}

function extractDataForSeoTaskId(data: Record<string, unknown>) {
  const tasks = Array.isArray(data.tasks) ? data.tasks : [];
  const first = tasks[0] as { id?: string } | undefined;
  return first?.id;
}

async function pollDataForSeoTask(taskId: string, auth: string) {
  let summary: Record<string, unknown> | undefined;
  let pages: Record<string, unknown> | undefined;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    if (attempt > 0) await sleep(3500);

    summary = await fetchJson(`https://api.dataforseo.com/v3/on_page/summary/${taskId}`, {
      headers: { Authorization: auth },
    });

    const result = firstDataForSeoResult(summary);
    const crawlProgress = getObject(result, "crawl_progress");
    const pagesInQueue = valueAt(crawlProgress, "pages_in_queue");
    const pagesCrawled = valueAt(crawlProgress, "pages_crawled");

    if (
      pagesInQueue === 0 ||
      (typeof pagesCrawled === "number" && pagesCrawled > 0) ||
      attempt === 4
    ) {
      pages = await fetchJson("https://api.dataforseo.com/v3/on_page/pages", {
        method: "POST",
        headers: {
          Authorization: auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([{ id: taskId, limit: 1 }]),
      });
      break;
    }
  }

  return {
    summary: summary ?? {},
    pages: pages ?? {},
  };
}

function pickRecord<T>(record: Record<string, T>, keys: string[]) {
  return keys.reduce<Record<string, T>>((acc, key) => {
    if (key in record) acc[key] = record[key];
    return acc;
  }, {});
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown error";
}

function formatScore(score?: number) {
  if (typeof score !== "number") return "n/a";
  return `${Math.round(score * 100)}/100`;
}

function firstDataForSeoResult(data: unknown) {
  const obj = data as { tasks?: Array<{ result?: unknown[] }> } | undefined;
  return (obj?.tasks?.[0]?.result?.[0] ?? {}) as Record<string, unknown>;
}

function firstDataForSeoItem(data: unknown) {
  const result = firstDataForSeoResult(data);
  const items = Array.isArray(result.items) ? result.items : [];
  return (items[0] ?? {}) as Record<string, unknown>;
}

function getObject(source: unknown, path: string) {
  const value = valueAt(source, path);
  return isRecord(value) ? value : {};
}

function valueAt(source: unknown, path: string) {
  return path.split(".").reduce<unknown>((current, key) => {
    if (!isRecord(current)) return undefined;
    return current[key];
  }, source);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
