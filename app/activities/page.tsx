import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site";
import ActivitiesContent from "./ActivitiesContent";

export const metadata: Metadata = buildMetadata(
  "Activities",
  "Explore fun and educational Islamic activities for kids — including duas, stories of prophets, Quran learning sheets, Islamic manners, and much more.",
);

export default function ActivitiesPage() {
  return <ActivitiesContent />;
}
