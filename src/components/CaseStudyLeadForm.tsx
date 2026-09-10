"use client";

import { FormEvent, useState } from "react";
import { normalizeWebsite } from "@/lib/website";

const improvementOptions = [
  "Conversion rate",
  "Average order value",
  "Site speed",
  "Not sure",
];

type FormVariant = "hero" | "compact";
type FormState = "idle" | "loading" | "success" | "error";

declare global {
  interface Window {
    lintrk?: (event: string, options: { conversion_id: number }) => void;
  }
}

// Create this in LinkedIn Campaign Manager under Website Conversions once
// this page has enough traffic to define a conversion action, then set
// NEXT_PUBLIC_LINKEDIN_CONVERSION_ID in the environment. Firing is a no-op
// until that's configured, so shipping this without it is safe.
function fireLinkedInConversion() {
  const conversionId = process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_ID;
  if (!conversionId || typeof window.lintrk !== "function") return;
  window.lintrk("track", { conversion_id: Number(conversionId) });
}

export default function CaseStudyLeadForm({
  variant,
  sourcePage,
}: {
  variant: FormVariant;
  sourcePage: string;
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [improvementGoal, setImprovementGoal] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (variant === "hero" && !fullName.trim()) {
      setState("error");
      setMessage("Please enter your name.");
      return;
    }
    if (!email.trim() || !website.trim()) {
      setState("error");
      setMessage("Work email and website URL are required.");
      return;
    }

    let normalizedWebsite: string;
    try {
      normalizedWebsite = normalizeWebsite(website);
    } catch {
      setState("error");
      setMessage(
        "Enter a complete website domain, such as example.com or www.example.co.uk.",
      );
      return;
    }

    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/lp-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          website: normalizedWebsite,
          improvementGoal,
          formVariant: variant,
          sourcePage,
        }),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setState("success");
      setMessage(data.message || "Thanks — we'll be in touch shortly.");
      fireLinkedInConversion();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't submit the form. Please try again.",
      );
    }
  }

  const isLoading = state === "loading";

  if (state === "success") {
    return (
      <div className="standalone-audit-result success" aria-live="polite">
        <strong>Request received.</strong>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form
      className={`standalone-audit-form lp-lead-form lp-lead-form-${variant}`}
      onSubmit={handleSubmit}
    >
      <div className="audit-form-grid">
        {variant === "hero" ? (
          <div>
            <label htmlFor={`${variant}-fullName`}>Name</label>
            <input
              id={`${variant}-fullName`}
              type="text"
              autoComplete="name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            />
          </div>
        ) : null}
        <div>
          <label htmlFor={`${variant}-email`}>Work email</label>
          <input
            id={`${variant}-email`}
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor={`${variant}-website`}>Website URL</label>
          <input
            id={`${variant}-website`}
            type="text"
            inputMode="url"
            placeholder="yourstore.com"
            autoComplete="url"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            required
          />
        </div>
        {variant === "hero" ? (
          <div>
            <label htmlFor={`${variant}-goal`}>
              What are you looking to improve?
            </label>
            <select
              id={`${variant}-goal`}
              value={improvementGoal}
              onChange={(event) => setImprovementGoal(event.target.value)}
            >
              <option value="">Choose one (optional)</option>
              {improvementOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ) : null}
      </div>

      <button className="cta-e cta-e-lg" type="submit" disabled={isLoading}>
        {isLoading
          ? "Sending..."
          : variant === "hero"
            ? "See what a rebuild could do"
            : "Get my free breakdown"}
        <span className="ar">→</span>
      </button>

      {state === "error" ? (
        <div className="standalone-audit-result error" aria-live="polite">
          <strong>Could not submit yet.</strong>
          <p>{message}</p>
        </div>
      ) : null}
    </form>
  );
}
