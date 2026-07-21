import { auditLead } from "./auditLead";
import { author } from "./author";
import { blockContent } from "./blockContent";
import { category } from "./category";
import { post } from "./post";
import { responsiveTable } from "./responsiveTable";
import { seo } from "./seo";

export const schemaTypes = [
  auditLead,
  post,
  author,
  category,
  seo,
  responsiveTable,
  blockContent,
];
