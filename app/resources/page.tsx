import type { Metadata } from "next";
import { resourceCategories, resourceList } from "@/lib/content";
import { buildMetadata } from "@/lib/site";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = buildMetadata(
  "Resources",
  "Browse Quran reading materials, Qaidah books, duas, Salah guides, Islamic studies resources, and audio support.",
);

export default function ResourcesPage() {
  return <ResourcesContent resources={resourceList} categories={resourceCategories} />;
}
