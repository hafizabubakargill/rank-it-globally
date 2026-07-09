"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { calendlyUrl } from "@/content/publicPages";

const progressSteps = [
  "Checking page speed signals...",
  "Reviewing on-page SEO structure...",
  "Looking for crawlability blockers...",
  "Preparing your report email...",
];

const industries = [
  "Ecommerce",
  "Local Business",
  "Healthcare",
  "Law Firm",
  "Home Services",
  "Real Estate",
  "SaaS / Tech",
  "Other",
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

const goalOptions = [
  "More calls",
  "More form submissions",
  "More sales",
  "Better Google rankings",
  "Better website performance",
  "Full growth plan",
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
  companyName: string;
  website: string;
  businessLocation: string;
  industry: string;
  auditScope: string[];
  biggestProblem: string;
  mainGoal: string;
  budgetRange: string;
  message: string;
};

const emptyForm: AuditFormValues = {
  fullName: "",
  businessEmail: "",
  phoneNumber: "",
  companyName: "",
  website: "",
  businessLocation: "",
  industry: "",
  auditScope: [],
  biggestProblem: "",
  mainGoal: "",
  budgetRange: "",
  message: "",
};

export default function FreeAuditForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<AuditFormValues>(() => ({
    ...emptyForm,
    website: searchParams.get("website") || "",
    businessEmail: searchParams.get("email") || "",
  }));
  const [state, setState] = useState<AuditState>("idle");
  const [message, setMessage] = useState("");
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (state !== "loading") return;

    const timer = window.setInterval(() => {
      setStepIndex((current) => (current + 1) % progressSteps.length);
    }, 1200);

    return () => window.clearInterval(timer);
  }, [state]);

  const completedRequiredCount = useMemo(() => {
    const requiredValues = [
      form.fullName,
      form.businessEmail,
      form.phoneNumber,
      form.companyName,
      form.website,
      form.businessLocation,
      form.industry,
      form.biggestProblem,
      form.mainGoal,
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
    setState("loading");
    setMessage("");
    setStepIndex(0);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          email: form.businessEmail,
          sourcePage: "/free-audit",
        }),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setState("success");
      setMessage(
        data.message ||
          "Audit request received. Your report is being prepared and emailed.",
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
          <strong>{completedRequiredCount}/11 required fields complete</strong>
          <span>
            This helps us send a useful audit, not a generic checklist.
          </span>
        </div>
      </div>

      <fieldset className="audit-fieldset">
        <legend>Contact details</legend>
        <div className="audit-form-grid">
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
        <legend>Business profile</legend>
        <div className="audit-form-grid">
          <TextField
            id="auditCompany"
            label="Business / Company Name"
            name="companyName"
            value={form.companyName}
            onChange={updateField}
            autoComplete="organization"
            required
          />
          <TextField
            id="auditWebsite"
            label="Website URL"
            name="website"
            type="url"
            value={form.website}
            onChange={updateField}
            autoComplete="url"
            placeholder="https://yourwebsite.com"
            required
          />
          <TextField
            id="auditLocation"
            label="Business Location"
            name="businessLocation"
            value={form.businessLocation}
            onChange={updateField}
            autoComplete="address-level2"
            placeholder="City, State"
            required
          />
          <SelectField
            id="auditIndustry"
            label="Business Type / Industry"
            name="industry"
            value={form.industry}
            options={industries}
            onChange={updateField}
            required
          />
        </div>
      </fieldset>

      <fieldset className="audit-fieldset">
        <legend>Audit priorities</legend>
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
            id="auditGoal"
            label="Main Goal"
            name="mainGoal"
            value={form.mainGoal}
            options={goalOptions}
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
        <legend>Context</legend>
        <div>
          <label htmlFor="auditMessage">Message / Notes</label>
          <textarea
            id="auditMessage"
            name="message"
            placeholder="Tell us anything important about your website, goals, current marketing, or deadlines."
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={5}
          />
        </div>
      </fieldset>

      <button className="cta-e cta-e-lg" type="submit" disabled={isLoading}>
        {isLoading ? progressSteps[stepIndex] : "Get My Free Audit"}
        <span className="ar">→</span>
      </button>

      {isLoading ? (
        <div className="standalone-audit-progress" aria-live="polite">
          <span />
          <p>{progressSteps[stepIndex]}</p>
          <small>
            Keep this tab open for confirmation. The full report is sent by
            email.
          </small>
        </div>
      ) : null}

      {state === "success" ? (
        <div className="standalone-audit-result success" aria-live="polite">
          <strong>Audit started.</strong>
          <p>{message}</p>
          <Link href={calendlyUrl} target="_blank" rel="noreferrer">
            Book a call to walk through it
          </Link>
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
  value,
  placeholder,
  autoComplete,
  required,
  onChange,
}: {
  id: string;
  label: string;
  name: keyof AuditFormValues;
  type?: string;
  value: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  onChange: (name: keyof AuditFormValues, value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(name, event.target.value)}
        required={required}
      />
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
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        required={required}
      >
        <option value="">Choose one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
