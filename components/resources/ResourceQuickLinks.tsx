"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import type { Resource } from "@/lib/types";

type ResourceQuickLinksProps = {
  resources: Resource[];
};

export default function ResourceQuickLinks({ resources }: ResourceQuickLinksProps) {
  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,252,245,0.7))] p-8 shadow-[0_16px_40px_rgba(18,40,30,0.04)] backdrop-blur-md md:p-10 lg:p-12">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#C9A227]">
            Start Exploring
          </p>
          <h2 className="max-w-2xl font-display text-3xl text-[var(--ink)] md:text-4xl">
            Open the most requested Quran and Islamic learning materials.
          </h2>
          {/* Gold divider */}
          <div className="flex w-16 items-center gap-1 pt-2">
            <div className="h-px flex-1 bg-gradient-to-r from-[#C9A227] to-transparent" />
            <div className="h-1 w-1 rotate-45 border border-[#C9A227]" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <Link
                className="group flex items-center gap-3 rounded-[16px] border border-[var(--line)] bg-white/80 px-5 py-4 text-[var(--ink)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:bg-white hover:shadow-md"
                href={`/resources/${resource.slug}`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E]/5 transition-colors group-hover:bg-[#0F3D2E]">
                  <BookOpen className="h-4 w-4 text-[#0F3D2E] transition-colors group-hover:text-[#C9A227]" />
                </div>
                <span className="font-display text-[1rem] leading-tight">{resource.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
