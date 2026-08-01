import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site";
import AboutContent from "./AboutContent";

export const metadata: Metadata = buildMetadata(
  "About The Academy",
  "Learn about Bint Jawid International Quran Academy, our mission, teaching philosophy, and how we support learners with care and precision.",
);

export default function AboutPage() {
  return <AboutContent />;
}
