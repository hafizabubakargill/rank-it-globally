import { defineArrayMember, defineField, defineType } from "sanity";

export const responsiveTable = defineType({
  name: "responsiveTable",
  title: "Responsive Table",
  type: "object",
  fields: [
    defineField({
      name: "caption",
      title: "Table caption",
      type: "string",
      description:
        "A short description of the table for readers and screen readers.",
      validation: (rule) => rule.max(120),
    }),
    defineField({
      name: "headers",
      title: "Column headings",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "Add between 2 and 6 column headings.",
      validation: (rule) => rule.required().min(2).max(6),
    }),
    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      validation: (rule) => rule.required().min(1),
      of: [
        defineArrayMember({
          name: "responsiveTableRow",
          title: "Table row",
          type: "object",
          fields: [
            defineField({
              name: "cells",
              title: "Cells",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
              description:
                "Add cells in the same order as the column headings.",
              validation: (rule) => rule.required().min(2).max(6),
            }),
            defineField({
              name: "tone",
              title: "Last-cell emphasis",
              type: "string",
              initialValue: "default",
              options: {
                layout: "radio",
                list: [
                  { title: "Default", value: "default" },
                  { title: "Critical", value: "critical" },
                  { title: "High", value: "high" },
                  { title: "Medium", value: "medium" },
                ],
              },
            }),
          ],
          preview: {
            select: {
              cells: "cells",
              tone: "tone",
            },
            prepare({ cells, tone }) {
              const values = Array.isArray(cells) ? cells : [];
              return {
                title: values[0] || "Table row",
                subtitle: `${values.slice(1).join(" | ")}${
                  tone && tone !== "default" ? ` (${tone})` : ""
                }`,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      caption: "caption",
      headers: "headers",
      rows: "rows",
    },
    prepare({ caption, headers, rows }) {
      const columnCount = Array.isArray(headers) ? headers.length : 0;
      const rowCount = Array.isArray(rows) ? rows.length : 0;
      return {
        title: caption || "Responsive table",
        subtitle: `${columnCount} columns | ${rowCount} rows`,
      };
    },
  },
});
