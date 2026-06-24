type EmailPayload = {
  to: string;
  bcc?: string[];
  subject: string;
  html: string;
  text: string;
};

type ContactPayload = {
  email: string;
  website?: string;
  source?: string;
  name?: string;
};

const BREVO_API = "https://api.brevo.com/v3";

export async function sendBrevoEmail(payload: EmailPayload) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "Rank It Globally";

  if (!apiKey || !senderEmail) {
    return {
      ok: false,
      skipped: true,
      error: "BREVO_API_KEY or BREVO_SENDER_EMAIL is not configured.",
    };
  }

  const res = await fetch(`${BREVO_API}/smtp/email`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [{ email: payload.to }],
      ...(payload.bcc?.length
        ? { bcc: payload.bcc.map((email) => ({ email })) }
        : {}),
      subject: payload.subject,
      htmlContent: payload.html,
      textContent: payload.text,
    }),
  });

  if (!res.ok) {
    return {
      ok: false,
      skipped: false,
      error: await res.text(),
    };
  }

  return {
    ok: true,
    skipped: false,
  };
}

export async function upsertBrevoContact(payload: ContactPayload) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    return {
      ok: false,
      skipped: true,
      error: "BREVO_API_KEY or BREVO_LIST_ID is not configured.",
    };
  }

  const res = await fetch(`${BREVO_API}/contacts`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: payload.email,
      updateEnabled: true,
      listIds: [Number(listId)],
      attributes: {
        ...(payload.website ? { WEBSITE: payload.website } : {}),
        ...(splitName(payload.name).firstName
          ? { FIRSTNAME: splitName(payload.name).firstName }
          : {}),
        ...(splitName(payload.name).lastName
          ? { LASTNAME: splitName(payload.name).lastName }
          : {}),
        SOURCE: payload.source || "Free site audit",
      },
    }),
  });

  if (!res.ok) {
    return {
      ok: false,
      skipped: false,
      error: await res.text(),
    };
  }

  return {
    ok: true,
    skipped: false,
  };
}

function splitName(name?: string) {
  const clean = name?.trim();
  if (!clean) return { firstName: "", lastName: "" };

  const [firstName, ...rest] = clean.split(/\s+/);
  return {
    firstName,
    lastName: rest.join(" "),
  };
}

type ReportEmailOptions = {
  title?: string;
  eyebrow?: string;
  intro?: string;
  website?: string;
  email?: string;
  admin?: boolean;
};

export function reportToHtml(report: string, options: ReportEmailOptions = {}) {
  const title = options.title || "Your Rank It Globally Site Audit";
  const eyebrow = options.eyebrow || "Website Audit Report";
  const intro =
    options.intro ||
    "Here is your audit report, translated into practical next steps.";
  const reportHtml = options.admin
    ? markdownToEmailHtml(report)
    : compactAuditReportHtml(report);
  const metaRows = [
    options.website ? ["Website", options.website] : null,
    options.email ? ["Email", options.email] : null,
  ].filter(Boolean) as string[][];

  return `
    <div style="margin:0;padding:0;background:#F4F3FF;font-family:Arial,Helvetica,sans-serif;color:#1A1630">
      <div style="display:none;max-height:0;overflow:hidden;color:transparent;opacity:0">
        ${escapeHtml(intro)}
      </div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F4F3FF;padding:28px 12px">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px;background:#FFFFFF;border:1px solid #E1DFFF;border-radius:14px;overflow:hidden">
              <tr>
                <td style="background:#1A1630;padding:28px 30px;color:#FFFFFF">
                  <div style="font-size:12px;letter-spacing:1.8px;text-transform:uppercase;color:#C9C7FF;font-weight:700;margin-bottom:10px">${escapeHtml(eyebrow)}</div>
                  <h1 style="font-size:28px;line-height:1.15;margin:0 0 10px;font-weight:800">${escapeHtml(title)}</h1>
                  <p style="font-size:15px;line-height:1.7;margin:0;color:#E5E3FF">${escapeHtml(intro)}</p>
                </td>
              </tr>
              ${
                metaRows.length
                  ? `<tr><td style="padding:18px 30px 0"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F8F6FF;border:1px solid #E7E3FF;border-radius:10px">${metaRows
                      .map(
                        ([label, value]) =>
                          `<tr><td style="padding:10px 14px;color:#6B6880;font-size:12px;font-weight:700;text-transform:uppercase;width:120px">${escapeHtml(label)}</td><td style="padding:10px 14px;color:#1A1630;font-size:14px">${escapeHtml(value)}</td></tr>`,
                      )
                      .join("")}</table></td></tr>`
                  : ""
              }
              <tr>
                <td style="padding:26px 30px 8px">
                  ${reportHtml}
                </td>
              </tr>
              <tr>
                <td style="padding:12px 30px 30px">
                  <a href="https://calendly.com/rankitglobally/free-consultation" style="background:#5552D4;color:#FFFFFF;text-decoration:none;padding:13px 18px;border-radius:6px;display:inline-block;font-weight:700;font-size:14px">
                    ${options.admin ? "Open Calendly" : "Book a call to walk through it"}
                  </a>
                  <p style="font-size:12px;line-height:1.6;color:#8A86A3;margin:18px 0 0">Rank It Globally uses automated tools and AI to prepare this report. A manual review is recommended before making major technical changes.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function compactAuditReportHtml(report: string) {
  const summary = parseAuditSummary(report);
  const scoreCards = [
    ["Performance", summary.performance, "How fast the site feels"],
    ["Accessibility", summary.accessibility, "Clarity for users and agents"],
    ["Best Practices", summary.bestPractices, "Technical browser hygiene"],
    ["SEO", summary.seo, "Search-ready foundations"],
  ];

  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 18px">
      <tr>
        <td style="background:#F8F6FF;border:1px solid #E3DFFF;border-radius:12px;padding:18px">
          <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:#6B6880;font-weight:700;margin-bottom:8px">Audit snapshot</div>
          <div style="font-size:22px;line-height:1.25;color:#1A1630;font-weight:800;margin-bottom:6px">${escapeHtml(summary.headline)}</div>
          <div style="font-size:14px;line-height:1.7;color:#5B5877">${escapeHtml(summary.subhead)}</div>
        </td>
      </tr>
    </table>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 18px">
      <tr>
        ${scoreCards
          .map(
            ([label, value, hint]) => `
              <td width="25%" style="padding:0 5px 10px 0;vertical-align:top">
                <div style="border:1px solid #E3DFFF;border-radius:10px;padding:13px 10px;background:#FFFFFF">
                  <div style="font-size:11px;color:#6B6880;font-weight:700;text-transform:uppercase;letter-spacing:.8px;margin-bottom:7px">${escapeHtml(label)}</div>
                  <div style="font-size:24px;color:${scoreColor(value)};font-weight:800;line-height:1">${escapeHtml(value)}</div>
                  <div style="font-size:11px;color:#8A86A3;line-height:1.45;margin-top:7px">${escapeHtml(hint)}</div>
                </div>
              </td>`,
          )
          .join("")}
      </tr>
    </table>
    <div style="background:#1A1630;color:#FFFFFF;border-radius:12px;padding:20px;margin:0 0 18px">
      <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.6px;color:#C9C7FF;font-weight:700;margin-bottom:10px">Top priorities</div>
      ${summary.priorities
        .map(
          (item, index) => `
          <div style="display:flex;gap:12px;margin:${index === 0 ? "0" : "14px"} 0 0">
            <div style="width:26px;height:26px;border-radius:50%;background:#6664E4;color:#FFFFFF;font-size:13px;font-weight:800;text-align:center;line-height:26px;flex-shrink:0">${index + 1}</div>
            <div style="font-size:14px;line-height:1.65;color:#F1F0FF">${formatInline(item)}</div>
          </div>`,
        )
        .join("")}
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 18px">
      <tr>
        <td style="background:#FFFFFF;border:1px solid #E3DFFF;border-radius:12px;padding:18px">
          <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.4px;color:#6B6880;font-weight:700;margin-bottom:10px">What we checked</div>
          ${summary.checks
            .map(
              (item) => `
              <div style="display:flex;gap:10px;margin:0 0 9px">
                <div style="width:8px;height:8px;border-radius:50%;background:#5552D4;margin-top:8px;flex-shrink:0"></div>
                <div style="font-size:13px;line-height:1.65;color:#3F3B5F">${formatInline(item)}</div>
              </div>`,
            )
            .join("")}
        </td>
      </tr>
    </table>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 12px">
      <tr>
        <td style="background:#F8F6FF;border:1px solid #E3DFFF;border-radius:12px;padding:18px">
          <div style="font-size:15px;font-weight:800;color:#1A1630;margin-bottom:10px">Quick wins</div>
          <ul style="margin:0;padding-left:19px;color:#3F3B5F;font-size:14px;line-height:1.75">
            ${summary.quickWins.map((item) => `<li style="margin:0 0 6px">${formatInline(item)}</li>`).join("")}
          </ul>
        </td>
      </tr>
    </table>
    <p style="font-size:13px;line-height:1.75;color:#6B6880;margin:14px 0 0">
      The full technical notes are saved with Rank It Globally. Book a call and we will walk through the findings in plain English, prioritize the highest-impact fixes, and explain what is worth doing now versus later.
    </p>
  `;
}

function parseAuditSummary(report: string) {
  const performance = extractMetric(report, "Performance");
  const accessibility = extractMetric(report, "Accessibility");
  const bestPractices = extractMetric(report, "Best Practices");
  const seo = extractMetric(report, "SEO");
  const priorities = extractBulletsAfter(report, "Recommended Action Plan", 4);
  const quickWins = extractBulletsAfter(report, "Quick Wins", 4);
  const checks = extractBulletsAfter(report, "What We Checked", 4);
  const pageSpeedStatus = extractMetric(report, "Status");

  return {
    performance,
    accessibility,
    bestPractices,
    seo,
    headline:
      performance !== "n/a"
        ? `Your site scored ${performance} for mobile performance`
        : "Your audit is ready for review",
    subhead:
      "We checked speed, crawlability, on-page SEO signals, and conversion friction. Here are the actions most likely to improve leads, rankings, and user experience.",
    checks:
      checks.length > 0
        ? checks
        : [
            pageSpeedStatus === "Unable to complete"
              ? "PageSpeed could not complete automatically, so the site should be manually tested for Core Web Vitals and public access."
              : "PageSpeed Insights completed and supplied mobile performance, accessibility, best-practices, and SEO signals.",
            report.includes("Technical SEO Crawl")
              ? "Technical crawl signals were reviewed for titles, descriptions, H1 usage, crawlability, and broken-link indicators."
              : "On-page SEO and crawlability should be manually verified on the highest-value pages.",
            "Conversion friction was reviewed from the available page signals, with focus on mobile clarity and call-to-action visibility.",
          ],
    priorities:
      priorities.length > 0
        ? priorities
        : [
            "Improve mobile load speed and Core Web Vitals before scaling paid or organic traffic.",
            "Confirm titles, meta descriptions, headings, and crawlability on the highest-value pages.",
            "Review conversion flow above the fold so visitors can understand the offer and take action quickly.",
          ],
    quickWins:
      quickWins.length > 0
        ? quickWins
        : [
            "Compress heavy images and remove scripts that do not need to load immediately.",
            "Make the main call to action visible on mobile without extra scrolling.",
            "Check that important pages have unique page titles and meta descriptions.",
          ],
  };
}

function extractMetric(report: string, label: string) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = report.match(new RegExp(`${escaped}:\\s*([^\\n]+)`, "i"));
  return match?.[1]?.trim() || "n/a";
}

function extractBulletsAfter(report: string, heading: string, limit: number) {
  const lines = report.replace(/\r\n/g, "\n").split("\n");
  const start = lines.findIndex((line) =>
    line.toLowerCase().includes(heading.toLowerCase()),
  );
  if (start === -1) return [];

  const bullets: string[] = [];
  for (const rawLine of lines.slice(start + 1)) {
    const line = rawLine.trim();
    if (line.startsWith("## ") && bullets.length > 0) break;
    const bullet = line.match(/^[-*]\s+(.+)/)?.[1] || line.match(/^\d+\.\s+(.+)/)?.[1];
    if (bullet && !/^week\s+\d+/i.test(bullet)) bullets.push(bullet);
    if (bullets.length >= limit) break;
  }
  return bullets;
}

function scoreColor(value: string) {
  const score = Number.parseInt(value, 10);
  if (Number.isNaN(score)) return "#6B6880";
  if (score >= 90) return "#0a7a4a";
  if (score >= 70) return "#B45309";
  return "#B42318";
}

function markdownToEmailHtml(report: string) {
  const lines = report
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim());
  const html: string[] = [];
  let listOpen = false;

  function closeList() {
    if (listOpen) {
      html.push("</ul>");
      listOpen = false;
    }
  }

  for (const line of lines) {
    if (!line || /^-{3,}$/.test(line)) {
      closeList();
      continue;
    }

    if (line.startsWith("## ")) {
      closeList();
      html.push(
        `<h2 style="font-size:18px;line-height:1.35;margin:24px 0 10px;color:#1A1630">${formatInline(line.replace(/^##\s+/, ""))}</h2>`,
      );
      continue;
    }

    if (line.startsWith("# ")) {
      closeList();
      html.push(
        `<h2 style="font-size:20px;line-height:1.35;margin:0 0 12px;color:#1A1630">${formatInline(line.replace(/^#\s+/, ""))}</h2>`,
      );
      continue;
    }

    if (/^(\d+\.|-|\*)\s+/.test(line)) {
      if (!listOpen) {
        html.push(
          '<ul style="margin:8px 0 18px;padding-left:22px;color:#3F3B5F;font-size:14px;line-height:1.75">',
        );
        listOpen = true;
      }
      html.push(
        `<li style="margin:0 0 7px">${formatInline(line.replace(/^(\d+\.|-|\*)\s+/, ""))}</li>`,
      );
      continue;
    }

    closeList();
    html.push(
      `<p style="font-size:14px;line-height:1.8;color:#3F3B5F;margin:0 0 14px">${formatInline(line)}</p>`,
    );
  }

  closeList();
  return html.join("");
}

function formatInline(value: string) {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
