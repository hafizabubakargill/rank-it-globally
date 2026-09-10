import { defineField, defineType } from "sanity";

const improvementGoalOptions = [
  "Conversion rate",
  "Average order value",
  "Site speed",
  "Not sure",
];

export const lpLead = defineType({
  name: "lpLead",
  title: "Landing Page Lead",
  type: "document",
  fields: [
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["received", "admin_notified", "failed"],
        layout: "radio",
      },
      initialValue: "received",
    }),
    defineField({ name: "sourcePage", title: "Source Page", type: "string" }),
    defineField({
      name: "formVariant",
      title: "Form Variant",
      type: "string",
      options: {
        list: ["hero", "compact"],
      },
    }),
    defineField({ name: "fullName", title: "Full Name", type: "string" }),
    defineField({
      name: "workEmail",
      title: "Work Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({ name: "websiteUrl", title: "Website URL", type: "url" }),
    defineField({
      name: "normalizedWebsite",
      title: "Normalized Website",
      type: "url",
      readOnly: true,
    }),
    defineField({
      name: "improvementGoal",
      title: "What are you looking to improve?",
      type: "string",
      options: {
        list: improvementGoalOptions,
      },
    }),
    defineField({
      name: "adminLeadEmailStatus",
      title: "Admin Lead Email Status",
      type: "string",
      readOnly: true,
      options: {
        list: ["pending", "sent", "failed"],
      },
    }),
    defineField({
      name: "adminEmailError",
      title: "Admin Email Error",
      type: "text",
      rows: 3,
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Newest submissions",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      name: "fullName",
      email: "workEmail",
      website: "websiteUrl",
      submittedAt: "submittedAt",
      variant: "formVariant",
    },
    prepare(selection) {
      const title = selection.name || selection.email || "Landing Page Lead";
      const date = selection.submittedAt
        ? new Date(selection.submittedAt).toLocaleString()
        : "No date";
      return {
        title,
        subtitle: `${selection.variant || "hero"} - ${selection.website || selection.email || "No website"} - ${date}`,
      };
    },
  },
});
