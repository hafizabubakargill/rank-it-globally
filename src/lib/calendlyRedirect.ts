export type CalendlyRedirectParams = Record<string, string | string[] | undefined>;

export type CalendlyBookingDetails = {
  fullName?: string;
  email?: string;
  formattedStartTime?: string;
  answers: { label: string; value: string }[];
};

// Calendly only passes custom question answers positionally
// (answer_1, answer_2, ...), never the question text — this order
// matches the "Free Website Audit & Growth Call" event's invitee
// questions at calendly.com/rankitglobally/free-consultation, in the
// order they appear on that booking form. If those questions are
// reordered/added/removed in Calendly, update this list to match.
const CUSTOM_QUESTION_LABELS = [
  "How they want to connect",
  "Phone / WhatsApp number",
  "Website URL",
  "What they want audited",
  "Biggest problem right now",
  "Monthly budget range",
  "Message / notes",
];

function readParam(params: CalendlyRedirectParams, key: string): string | undefined {
  const value = params[key];
  const single = Array.isArray(value) ? value[0] : value;
  return single?.trim() || undefined;
}

// Calendly's event_start_time is already expressed in the invitee's own
// local time, via its UTC offset (e.g. "2026-09-15T09:00:00-07:00") — we
// pull out the literal wall-clock digits and format them as-is, rather
// than letting Intl reinterpret them in this server's own timezone.
//
// The offset itself only gives us a numeric GMT offset, not a named zone
// like "PST" or "ET" — multiple IANA zones can share the same offset, and
// Calendly's redirect doesn't include the zone name, so a offset label
// (e.g. "GMT-7") is the most specific thing we can show accurately.
function formatInviteeLocalTime(iso: string): string | undefined {
  const match = iso.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!match) return undefined;
  const [, year, month, day, hour, minute] = match;
  const asUtc = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute)),
  );
  const dateTime = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(asUtc);

  const gmtLabel = formatGmtOffsetLabel(iso);
  return gmtLabel ? `${dateTime} (${gmtLabel})` : dateTime;
}

function formatGmtOffsetLabel(iso: string): string | undefined {
  if (iso.endsWith("Z")) return "GMT+0";

  const offsetMatch = iso.match(/([+-])(\d{2}):(\d{2})$/);
  if (!offsetMatch) return undefined;

  const [, sign, hours, minutes] = offsetMatch;
  const hourLabel = String(Number(hours));
  return minutes === "00" ? `GMT${sign}${hourLabel}` : `GMT${sign}${hourLabel}:${minutes}`;
}

export function parseCalendlyRedirect(params: CalendlyRedirectParams): CalendlyBookingDetails | null {
  const fullName = readParam(params, "invitee_full_name");
  const email = readParam(params, "invitee_email");
  const startTime = readParam(params, "event_start_time");

  const answers = CUSTOM_QUESTION_LABELS.map((label, index) => {
    const value = readParam(params, `answer_${index + 1}`);
    return value ? { label, value } : null;
  }).filter((entry): entry is { label: string; value: string } => entry !== null);

  if (!fullName && !email && !startTime && answers.length === 0) return null;

  return {
    fullName,
    email,
    formattedStartTime: startTime ? formatInviteeLocalTime(startTime) : undefined,
    answers,
  };
}
