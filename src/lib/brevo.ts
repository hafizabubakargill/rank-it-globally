type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

type ContactPayload = {
  email: string;
  website: string;
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
        WEBSITE: payload.website,
        SOURCE: "Free site audit",
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
  const reportHtml = markdownToEmailHtml(report);
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
