export function normalizeWebsite(value: string) {
  const trimmed = value.trim();
  if (!trimmed || /\s/.test(trimmed)) {
    throw new Error("Invalid website domain.");
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  const url = new URL(withProtocol);

  if (!/^https?:$/.test(url.protocol) || url.username || url.password) {
    throw new Error("Invalid website protocol.");
  }

  const hostname = url.hostname.toLowerCase().replace(/\.$/, "");
  const labels = hostname.split(".");
  const validLabel = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i;
  const validSuffix = /^(?:[a-z]{2,63}|xn--[a-z0-9-]{2,59})$/i;

  if (
    hostname.length > 253 ||
    labels.length < 2 ||
    !labels.every((label) => validLabel.test(label)) ||
    !validSuffix.test(labels.at(-1) || "")
  ) {
    throw new Error("Enter a complete website domain, such as example.com.");
  }

  url.hostname = hostname;
  url.hash = "";
  return url.toString();
}

export function isWebsite(value: string) {
  try {
    normalizeWebsite(value);
    return true;
  } catch {
    return false;
  }
}
