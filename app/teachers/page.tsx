import type { Metadata } from "next";
import TeachersContent from "./TeachersContent";
import { teacherList } from "@/lib/content";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata(
  "Teachers",
  "Meet experienced male and female Quran teachers specialising in Tajweed, Hifz, Arabic, and Islamic Studies.",
);

export default function TeachersPage() {
  return <TeachersContent teachers={teacherList} />;
}
