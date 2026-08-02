import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site";
import { courseList } from "@/lib/content";
import CoursesContent from "./CoursesContent";

export const metadata: Metadata = buildMetadata(
  "Courses",
  "Browse Quran, Tajweed (Recitation), Hifz, Islamic Studies, Arabic, and Qirat courses with personalised online teaching.",
);

export default function CoursesPage() {
  return <CoursesContent courseList={courseList} />;
}
