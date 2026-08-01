import Hero from "@/components/home/Hero";
import WhyChoose from "@/components/home/WhyChoose";
import LearningJourney from "@/components/home/LearningJourney";
import Teachers from "@/components/home/Teachers";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import Resources from "@/components/home/Resources";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <Hero />
      <WhyChoose />
      <LearningJourney />
      <Teachers />
      <Testimonials />
      <Pricing />
      <Resources />
      <FAQ />
      <CTA />
    </>
  );
}
