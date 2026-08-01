import type { Metadata } from "next";
import FreeTrialContent from "./FreeTrialContent";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata(
  "Free Trial",
  "Book a free Quran trial lesson and let the academy recommend the right teacher and course plan for your learner.",
);

export default function FreeTrialPage() {
  return <FreeTrialContent />;
}
