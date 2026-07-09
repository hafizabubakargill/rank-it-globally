import { createClient } from "next-sanity";
import { apiVersion, dataset, hasSanityConfig, projectId } from "./env";

export const hasSanityWriteConfig = Boolean(
  hasSanityConfig && process.env.SANITY_API_WRITE_TOKEN,
);

export const writeClient = createClient({
  projectId: projectId || "yourprojectid",
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});
