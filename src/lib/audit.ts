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

  const report = await generateClaudeReport(input, pageSpeed, dataForSeo);

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

    await sleep(4500);

    const [summary, pages] = await Promise.all([
      fetchJson(`https://api.dataforseo.com/v3/on_page/summary/${taskId}`, {
        headers: { Authorization: auth },
      }),
      fetchJson("https://api.dataforseo.com/v3/on_page/pages", {
        method: "POST",
        headers: {
          Authorization: auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([{ id: taskId, limit: 1 }]),
      }),
    ]);

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
) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return fallbackReport(input, pageSpeed, dataForSeo);
  }

  const anthropic = new Anthropic({ apiKey });
  const message = await anthropic.messages.create({
    model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5",
    max_tokens: 1800,
    temperature: 0.2,
    system:
      "You write concise, practical website audit reports for a web design and SEO agency. Be specific, avoid scare tactics, and format with clear headings and bullets.",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Create a useful website audit report for ${input.website}. The visitor email is ${input.email}.

Use the available JSON from Google PageSpeed and DataForSEO. If a data source failed or is missing, say that section is pending and still provide useful next steps.

Google PageSpeed:
${JSON.stringify(pageSpeed).slice(0, 12_000)}

DataForSEO:
${JSON.stringify(dataForSeo).slice(0, 12_000)}

Return the report as plain text suitable for an email.`,
          },
        ],
      },
    ],
  });

  return message.content
    .map((block) => (block.type === "text" ? block.text : ""))
    .join("\n")
    .trim();
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
