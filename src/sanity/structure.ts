import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { EnvelopeIcon } from "@sanity/icons/Envelope";
import { TagIcon } from "@sanity/icons/Tag";
import { UserIcon } from "@sanity/icons/User";
import { WarningOutlineIcon } from "@sanity/icons/WarningOutline";
import type { StructureResolver } from "sanity/structure";

// Studio sidebar, grouped like a WordPress dashboard: posts first, then an
// SEO to-do list, taxonomy and authors, then incoming leads.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Rank It Globally")
    .items([
      S.listItem()
        .title("Blog posts")
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title("Blog posts")
            .items([
              S.listItem()
                .title("All posts")
                .icon(DocumentTextIcon)
                .child(S.documentTypeList("post").title("All posts").defaultOrdering([{ field: "publishedAt", direction: "desc" }])),
              S.listItem()
                .title("Needs SEO work")
                .icon(WarningOutlineIcon)
                .child(
                  S.documentList()
                    .title("Missing focus keyword, SEO title or meta description")
                    .schemaType("post")
                    .filter('_type == "post" && (!defined(seo.focusKeyword) || seo.focusKeyword == "" || !defined(seo.title) || !defined(seo.description))')
                    .defaultOrdering([{ field: "publishedAt", direction: "desc" }]),
                ),
              S.listItem()
                .title("Hidden from Google (noindex)")
                .icon(WarningOutlineIcon)
                .child(S.documentList().title("Noindex posts").schemaType("post").filter('_type == "post" && seo.noIndex == true')),
            ]),
        ),
      S.documentTypeListItem("category").title("Categories").icon(TagIcon),
      S.documentTypeListItem("author").title("Authors").icon(UserIcon),
      S.divider(),
      S.listItem()
        .title("Leads")
        .icon(EnvelopeIcon)
        .child(
          S.list()
            .title("Leads")
            .items([S.documentTypeListItem("auditLead").title("Growth audit leads"), S.documentTypeListItem("lpLead").title("Landing page leads")]),
        ),
    ]);
