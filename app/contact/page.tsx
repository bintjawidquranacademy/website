import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site";
import ContactContent from "./ContactContent";

export const metadata: Metadata = buildMetadata(
  "Contact",
  "Get in touch with Bint Jawid International Quran Academy for course guidance, teacher matching, or family enrollment support.",
);

export default function ContactPage() {
  return <ContactContent />;
}
