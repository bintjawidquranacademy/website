"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ArrowLeft } from "lucide-react";

type Section = {
  title: string;
  galleryUrls: string[];
};

export default function ResourceSections({ sections, resourceTitle }: { sections: Section[], resourceTitle: string }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  if (activeIdx !== null) {
    const activeSection = sections[activeIdx];
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header with Back button */}
        <div className="sticky top-[80px] z-40 bg-[#FDFBF7]/90 backdrop-blur-md py-4 border-b border-[var(--border)] shadow-sm">
          <div className="page-shell mx-auto flex items-center justify-between">
            <button 
              onClick={() => setActiveIdx(null)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-[var(--border)] text-[var(--ink)] hover:text-[#0F4C3A] hover:bg-[#D4AF37]/20 transition-all font-medium shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Grid
            </button>
            <h2 className="font-serif text-2xl text-[#3E2723] font-bold">
              {activeSection.title}
            </h2>
            <div className="w-32" /> {/* spacer for centering */}
          </div>
        </div>

        {/* Gallery */}
        <div className="page-shell mx-auto grid max-w-3xl gap-6 pt-4">
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

  // Grid View (Matches User Screenshot)
  // Clean up the title to match screenshot if it contains "(Recitation)"
  const displayTitle = resourceTitle.replace(" (Recitation)", "");

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 mt-10">
      {/* Title Bar */}
      <div className="bg-[#462d22] w-full py-5 px-6 shadow-md mb-10 border-b-4 border-[#d4b988]">
        <h1 className="font-serif text-3xl md:text-5xl text-center text-white font-semibold tracking-wide">
          {displayTitle.toUpperCase()}
        </h1>
      </div>

      {/* Grid of Paras */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-6">
        {sections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className="bg-[#e4d3b6] border border-[#462d22] py-4 px-4 text-center hover:bg-[#d5c19d] hover:-translate-y-1 transition-transform duration-200 flex items-center justify-center shadow-[2px_2px_0px_rgba(70,45,34,1)] active:shadow-none active:translate-y-0.5"
          >
            <span className="font-serif text-2xl md:text-3xl text-[#1a110d] font-medium tracking-wide">
              {section.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
