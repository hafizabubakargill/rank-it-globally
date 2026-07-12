"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { calendlyUrl } from "@/content/publicPages";
import { normalizeWebsite } from "@/lib/website";

const MIN_PROGRESS_MS = 8000;
const SLOW_PROGRESS_MS = 10000;

const progressSteps = [
  "Connecting to your website",
  "Running Google PageSpeed check",
  "Reviewing SEO structure",
  "Checking conversion friction",
  "Preparing your audit call",
];

const auditOptions = [
  "Website Design",
  "SEO",
  "Local SEO / Google Business Profile",
  "Website Speed",
  "Leads / Conversions",
  "Ecommerce Performance",
  "Full Audit",
];

const problemOptions = [
  "Not getting enough leads",
  "Low website traffic",
  "Not ranking on Google",
  "Website is slow",
  "Website looks outdated",
  "Ads not converting",
  "Not sure",
];

const budgetOptions = [
  "Under $500",
  "$500-$1,000",
  "$1,000-$2,500",
  "$2,500+",
  "Not sure yet",
];

type AuditState = "idle" | "loading" | "success" | "error";

type AuditFormValues = {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  website: string;
  auditScope: string[];
  biggestProblem: string;
  budgetRange: string;
  message: string;
};

type CalendlyWidgetOptions = {
  url: string;
  parentElement: HTMLElement;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
};

type CalendlyMessage = {
  event?: string;
  payload?: {
    invitee?: {
      uri?: string;
    };
  };
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget?: (options: CalendlyWidgetOptions) => void;
    };
  }
}

const emptyForm: AuditFormValues = {
  fullName: "",
  businessEmail: "",
  phoneNumber: "",
  website: "",
  auditScope: [],
  biggestProblem: "",
  budgetRange: "",
  message: "",
};

export default function FreeAuditForm() {
  const searchParams = useSearchParams();
  const calendlyContainerRef = useRef<HTMLDivElement | null>(null);
  const postedInviteesRef = useRef<Set<string>>(new Set());
  const [form, setForm] = useState<AuditFormValues>(() => ({
    ...emptyForm,
    website: searchParams.get("website") || "",
    businessEmail: searchParams.get("email") || "",
  }));
  const [submittedForm, setSubmittedForm] = useState<AuditFormValues | null>(
    null,
  );
  const [state, setState] = useState<AuditState>("idle");
  const [message, setMessage] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    if (state !== "loading") return;

    const stepTimer = window.setInterval(() => {
      setStepIndex((current) =>
        Math.min(current + 1, progressSteps.length - 1),
      );
    }, MIN_PROGRESS_MS / progressSteps.length);
    const slowTimer = window.setTimeout(() => {
      setIsSlow(true);
    }, SLOW_PROGRESS_MS);

    return () => {
      window.clearInterval(stepTimer);
      window.clearTimeout(slowTimer);
    };
  }, [state]);

  useEffect(() => {
    function handleCalendlyMessage(event: MessageEvent<CalendlyMessage>) {
      if (event.origin !== "https://calendly.com") return;
      if (event.data?.event !== "calendly.event_scheduled") return;

      const inviteeUri = event.data.payload?.invitee?.uri;
      if (!inviteeUri || postedInviteesRef.current.has(inviteeUri)) return;

      postedInviteesRef.current.add(inviteeUri);
      void fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invitee_uri: inviteeUri }),
      }).catch((error) => {
        console.error("Calendly booking capture failed", error);
      });
    }

    window.addEventListener("message", handleCalendlyMessage);
    return () => window.removeEventListener("message", handleCalendlyMessage);
  }, []);

  useEffect(() => {
    if (state !== "success" || !submittedForm || !calendlyContainerRef.current) {
      return;
    }

    let cancelled = false;

    loadCalendlyWidget()
      .then(() => {
        if (
          cancelled ||
          !window.Calendly?.initInlineWidget ||
          !calendlyContainerRef.current
        ) {
          return;
        }

        calendlyContainerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: calendlyContainerRef.current,
          prefill: {
            name: submittedForm.fullName,
            email: submittedForm.businessEmail,
            customAnswers: {
              a1: submittedForm.phoneNumber,
              a2: submittedForm.website,
              a3: submittedForm.auditScope.join(", "),
              a4: submittedForm.biggestProblem,
              a5: submittedForm.budgetRange,
              a6: submittedForm.message,
            },
          },
        });
      })
      .catch((error) => {
        console.error("Calendly widget failed to load", error);
      });

    return () => {
      cancelled = true;
    };
  }, [state, submittedForm]);

  const completedRequiredCount = useMemo(() => {
    const requiredValues = [
      form.fullName,
      form.businessEmail,
      form.phoneNumber,
      form.website,
      form.biggestProblem,
      form.budgetRange,
    ];
    return (
      requiredValues.filter(Boolean).length + (form.auditScope.length ? 1 : 0)
    );
  }, [form]);

  function updateField(name: keyof AuditFormValues, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function toggleAuditScope(option: string) {
    setForm((current) => {
      const exists = current.auditScope.includes(option);
      return {
        ...current,
        auditScope: exists
          ? current.auditScope.filter((item) => item !== option)
          : [...current.auditScope, option],
      };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const missingFields = getClientMissingFields(form);
    if (missingFields.length) {
      setState("error");
      setMessage(`Please complete: ${missingFields.join(", ")}.`);
      return;
    }

    let normalizedWebsite: string;
    try {
      normalizedWebsite = normalizeWebsite(form.website);
    } catch {
      setState("error");
      setMessage(
        "Enter a complete website domain, such as example.com, example.net, or www.example.co.uk.",
      );
      return;
    }

    const normalizedForm = { ...form, website: normalizedWebsite };
    setForm(normalizedForm);

    setState("loading");
    setMessage("");
    setStepIndex(0);
    setIsSlow(false);
    setSubmittedForm(null);

    try {
      const apiRequest = fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...normalizedForm,
          email: normalizedForm.businessEmail,
          sourcePage: "/free-audit",
        }),
      });

      const [response] = await Promise.all([
        apiRequest,
        wait(MIN_PROGRESS_MS),
      ]);
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setState("success");
      setSubmittedForm(normalizedForm);
      setMessage(
        data.message ||
          "Audit request received. Pick a time below and we will walk through the findings together.",
      );
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't submit the audit. Please try again.",
      );
    }
  }

  const isLoading = state === "loading";

  return (
    <form className="standalone-audit-form" onSubmit={handleSubmit}>
      <div className="audit-form-intro">
        <div>
          <strong>{completedRequiredCount}/7 required fields complete</strong>
          <span>
            This helps us review the right things before you choose a time.
          </span>
        </div>
      </div>

      <fieldset className="audit-fieldset">
        <legend>Contact details</legend>
        <div className="audit-form-grid audit-form-grid-contact">
          <TextField
            id="auditFullName"
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={updateField}
            autoComplete="name"
            required
          />
          <TextField
            id="auditEmail"
            label="Business Email"
            name="businessEmail"
            type="email"
            value={form.businessEmail}
            onChange={updateField}
            autoComplete="email"
            required
          />
          <TextField
            id="auditPhone"
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={form.phoneNumber}
            onChange={updateField}
            autoComplete="tel"
            required
          />
        </div>
      </fieldset>

      <fieldset className="audit-fieldset">
        <legend>Website audit priorities</legend>
        <div className="audit-form-grid audit-form-grid-single">
          <TextField
            id="auditWebsite"
            label="Website URL"
            name="website"
            type="text"
            inputMode="url"
            value={form.website}
            onChange={updateField}
            autoComplete="url"
            placeholder="yourwebsite.com"
            helper="A full URL is not required. You can enter example.com, example.net, or www.example.co.uk."
            required
          />
        </div>
        <div>
          <span className="audit-form-label">What do you want audited?</span>
          <div className="audit-chip-grid">
            {auditOptions.map((option) => (
              <label key={option} className="audit-check-chip">
                <input
                  type="checkbox"
                  checked={form.auditScope.includes(option)}
                  onChange={() => toggleAuditScope(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="audit-form-grid">
          <SelectField
            id="auditProblem"
            label="Biggest Problem Right Now"
            name="biggestProblem"
            value={form.biggestProblem}
            options={problemOptions}
            onChange={updateField}
            required
          />
          <SelectField
            id="auditBudget"
            label="Monthly Budget Range"
            name="budgetRange"
            value={form.budgetRange}
            options={budgetOptions}
            onChange={updateField}
            required
          />
        </div>
      </fieldset>

      <fieldset className="audit-fieldset">
        <legend>Budget and notes</legend>
        <div>
          <label htmlFor="auditMessage">Message / Notes</label>
          <textarea
            id="auditMessage"
            name="message"
            placeholder="Tell us anything important about your website, current marketing, or deadlines."
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={5}
          />
        </div>
      </fieldset>

      <button className="cta-e cta-e-lg" type="submit" disabled={isLoading}>
        {isLoading
          ? isSlow
            ? "Still preparing your audit..."
            : progressSteps[stepIndex]
          : "Get My Free Audit"}
        <span className="ar">→</span>
      </button>

      {isLoading ? (
        <div className="standalone-audit-progress" aria-live="polite">
          <div className="audit-progress-heading">
            <strong>
              {isSlow ? "Still preparing your audit..." : "Analysing your site"}
            </strong>
            <span>{form.website || "Your website"}</span>
          </div>
          <ol className="audit-progress-list">
            {progressSteps.map((step, index) => {
              const status =
                index < stepIndex
                  ? "done"
                  : index === stepIndex
                    ? "current"
                    : "pending";
              return (
                <li className={`audit-progress-step ${status}`} key={step}>
                  <span aria-hidden="true">{index < stepIndex ? "✓" : ""}</span>
                  <p>{step}</p>
                </li>
              );
            })}
          </ol>
          <small>
            Keep this tab open. We will show the calendar after the audit
            request is accepted.
          </small>
        </div>
      ) : null}

      {state === "success" ? (
        <div className="standalone-audit-result success" aria-live="polite">
          <strong>Audit started. Book your walkthrough below.</strong>
          <p>{message}</p>
          <div className="standalone-calendly-panel">
            <div
              ref={calendlyContainerRef}
              className="standalone-calendly-embed"
            />
          </div>
        </div>
      ) : null}

      {state === "error" ? (
        <div className="standalone-audit-result error" aria-live="polite">
          <strong>Could not submit yet.</strong>
          <p>{message}</p>
        </div>
      ) : null}
    </form>
  );
}

function TextField({
  id,
  label,
  name,
  type = "text",
  inputMode,
  value,
  placeholder,
  helper,
  autoComplete,
  required,
  onChange,
}: {
  id: string;
  label: string;
  name: keyof AuditFormValues;
  type?: string;
  inputMode?: "url" | "email" | "tel" | "text";
  value: string;
  placeholder?: string;
  helper?: string;
  autoComplete?: string;
  required?: boolean;
  onChange: (name: keyof AuditFormValues, value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        aria-describedby={helper ? `${id}Helper` : undefined}
        id={id}
        inputMode={inputMode}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(name, event.target.value)}
        required={required}
        spellCheck={inputMode === "url" ? false : undefined}
      />
      {helper ? (
        <small className="audit-field-helper" id={`${id}Helper`}>
          {helper}
        </small>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  name,
  value,
  options,
  required,
  onChange,
}: {
  id: string;
  label: string;
  name: keyof AuditFormValues;
  value: string;
  options: string[];
  required?: boolean;
  onChange: (name: keyof AuditFormValues, value: string) => void;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const buttonId = `${id}Button`;
  const labelId = `${id}Label`;
  const listboxId = `${id}Listbox`;

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function chooseOption(option: string) {
    onChange(name, option);
    setIsOpen(false);
  }

  return (
    <div className="audit-select-field" ref={wrapperRef}>
      <label id={labelId} htmlFor={buttonId}>
        {label}
      </label>
      <input
        aria-hidden="true"
        className="audit-select-hidden"
        name={name}
        tabIndex={-1}
        value={value}
        readOnly
      />
      <button
        aria-controls={isOpen ? listboxId : undefined}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={`${labelId} ${buttonId}`}
        className={`audit-select-trigger${value ? "" : " is-placeholder"}`}
        id={buttonId}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "Enter") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        type="button"
      >
        <span>{value || "Choose one"}</span>
        <span className="audit-select-chevron" aria-hidden="true">
          ↓
        </span>
      </button>
      {required && !value ? (
        <span className="audit-select-required" aria-hidden="true" />
      ) : null}
      {isOpen ? (
          <div
            className="audit-select-menu"
            id={listboxId}
            role="listbox"
            aria-labelledby={labelId}
          >
          {options.map((option) => (
            <button
              aria-selected={value === option}
              className="audit-select-option"
              key={option}
              onClick={() => chooseOption(option)}
              role="option"
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function getClientMissingFields(form: AuditFormValues) {
  const missingFields: string[] = [];

  if (!form.fullName.trim()) missingFields.push("Full Name");
  if (!form.businessEmail.trim()) missingFields.push("Business Email");
  if (!form.phoneNumber.trim()) missingFields.push("Phone Number");
  if (!form.website.trim()) missingFields.push("Website URL");
  if (!form.auditScope.length) missingFields.push("What do you want audited?");
  if (!form.biggestProblem.trim()) {
    missingFields.push("Biggest Problem Right Now");
  }
  if (!form.budgetRange.trim()) missingFields.push("Monthly Budget Range");

  return missingFields;
}

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function loadCalendlyWidget() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly?.initInlineWidget) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    const existingScript = document.getElementById(
      "calendly-widget-script",
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Calendly script failed to load.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("Calendly script failed to load.")),
      { once: true },
    );
    document.body.appendChild(script);
  });
}
