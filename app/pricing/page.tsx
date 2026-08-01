import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site";
import PricingContent from "./PricingContent";

export const metadata: Metadata = buildMetadata(
  "Pricing",
  "Compare Quran class plans, session frequency, and support levels for beginners, regular learners, and Hifz students.",
);

export default function PricingPage() {
  return <PricingContent />;
}
