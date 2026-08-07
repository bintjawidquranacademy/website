"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Section = {
  title: string;
  galleryUrls: string[];
};

export default function ResourceSections({ sections, resourceTitle }: { sections: Section[], resourceTitle: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSection = sections[activeIdx];

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="page-shell mx-auto max-w-4xl">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeIdx === idx 
                  ? "bg-[#D4AF37] text-[#0F4C3A]" 
                  : "bg-white/50 text-[var(--ink)] hover:bg-[#D4AF37]/20"
              } border border-[var(--border)] shadow-sm`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="page-shell mx-auto grid max-w-3xl gap-6">
        {activeSection.galleryUrls.map((imageUrl, index) => (
          <Reveal delay={0.03 * (index + 1)} key={imageUrl}>
            <div className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[0_18px_40px_rgba(16,28,21,0.08)]">
              <Image
                alt={`${resourceTitle} - ${activeSection.title} - page ${index + 1}`}
                className="h-auto w-full"
                height={1200}
                priority={index === 0}
                src={imageUrl}
                width={900}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
