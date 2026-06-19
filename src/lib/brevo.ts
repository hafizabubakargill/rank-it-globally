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

export function reportToHtml(report: string) {
  const escaped = escapeHtml(report);
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1A1630">
      <h1 style="font-size:24px;margin:0 0 16px">Your Rank It Globally Site Audit</h1>
      <div style="white-space:pre-wrap">${escaped}</div>
      <p style="margin-top:24px">
        <a href="https://calendly.com/rankitglobally/free-consultation" style="background:#5552D4;color:#fff;text-decoration:none;padding:12px 18px;border-radius:4px;display:inline-block">
          Book a call to walk through it
        </a>
      </p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
