import type { Metadata } from "next";

function getSiteUrl() {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ??
    "http://localhost:3000";

  return candidate.endsWith("/") ? candidate.slice(0, -1) : candidate;
}

export const siteConfig = {
  name: "Bint Jawid International Quran Academy",
  shortName: "Bint Jawid",
  url: getSiteUrl(),
  description:
    "Learn Quran, Tajweed (Recitation), Hifz, Arabic, and Islamic Studies online with certified male and female teachers, flexible timings, and personalised one-to-one lessons.",
  email: "bintjawidquranacademy@gmail.com",
  phone: "+92 325 9839004",
  whatsapp: "https://wa.me/923259839004",
  instagram: null,
  facebook: null,
} as const;

export function buildMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
