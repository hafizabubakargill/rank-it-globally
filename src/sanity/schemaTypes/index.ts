import { auditLead } from "./auditLead";
import { author } from "./author";
import { blockContent } from "./blockContent";
import { category } from "./category";
import { lpLead } from "./lpLead";
import { post } from "./post";
import { responsiveTable } from "./responsiveTable";
import { seo } from "./seo";

export const schemaTypes = [
  auditLead,
  lpLead,
  post,
  author,
  category,
  seo,
  responsiveTable,
  blockContent,
];
