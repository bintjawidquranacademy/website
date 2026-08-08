"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Library,
  Search,
  Eye,
  MessageCircle,
  Mail,
  BookOpen,
} from "lucide-react";
import ResourceQuickLinks from "@/components/resources/ResourceQuickLinks";
import ResourceExplorer from "@/components/resources/ResourceExplorer";
import type { Resource } from "@/lib/types";
import { siteConfig } from "@/lib/site";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const slideIn = (direction: "left" | "right", delay = 0) => ({
  initial: { opacity: 0, x: direction === "left" ? -40 : 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

type ResourcesContentProps = {
  resources: Resource[];
  categories: readonly string[];
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ResourcesContent({ resources, categories }: ResourcesContentProps) {
  return (
    <div className="overflow-hidden pb-16 md:pb-24">
      {/* Background Pattern */}
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-[0.02]">
        <div className="h-full w-full bg-[url('/bg-pattern.svg')] bg-repeat" />
      </div>

      {/* ====== HERO SECTION ====== */}
      <section className="page-shell pt-10 md:pt-16 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Content */}
          <motion.div className="space-y-10" {...slideIn("left")}>
            <div className="space-y-6">
              <div className="section-label">RESOURCES</div>
              <h1 className="font-display text-balance text-4xl leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl md:text-[3.4rem]">
                Browse Quran learning resources for every student.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                A searchable library of Quran reading materials, Qaidah books, duas, prayer guides, and study aids for home practice.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Library,
                  title: "Comprehensive",
                  desc: "Access all learning materials in one place.",
                },
                {
                  icon: Search,
                  title: "Searchable",
                  desc: "Instantly find books, guides and worksheets.",
                },
                {
                  icon: Eye,
                  title: "Visual",
                  desc: "Beautiful illustrations designed for every learner.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex h-full flex-col rounded-[24px] border border-[var(--line)] bg-white/70 p-6 shadow-[0_8px_30px_rgba(18,40,30,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A227]/40 hover:shadow-[0_16px_40px_rgba(18,40,30,0.08)]"
                >
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E] text-white shadow-[0_4px_12px_rgba(15,61,46,0.2)] transition-colors duration-300 group-hover:bg-[#0a291f]">
                    <item.icon className="h-5 w-5 text-[#C9A227]" />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="text-[0.8rem] leading-relaxed text-[var(--muted)]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative mx-auto mt-8 w-full max-w-[340px] lg:mt-0 lg:mx-0 lg:max-w-none lg:pl-10"
            {...slideIn("right", 0.15)}
          >
            {/* Background glowing orb */}
            <div className="absolute inset-0 -z-10 rounded-full bg-[#C9A227]/10 blur-3xl" />

            <div className="relative flex justify-center lg:justify-end">
              {/* Islamic Arch Image */}
              <motion.div
                className="w-full max-w-[360px] xl:max-w-[420px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[160px] border-4 border-[#FDFBF7] bg-[#FDFBF7] shadow-[0_30px_60px_rgba(18,40,30,0.15)] ring-1 ring-[var(--line)]">
                  <Image
                    src="/about pic.png"
                    alt="Islamic learning library"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/40 via-transparent to-transparent" />
                  
                  {/* Subtle inner gold border */}
                  <div className="absolute inset-2 rounded-t-[152px] border border-[#C9A227]/30" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== QUICK ACCESS SECTION ====== */}
      <section className="page-shell mt-20 md:mt-28">
        <motion.div {...fadeUp(0.1)}>
          <ResourceQuickLinks resources={resources} />
        </motion.div>
      </section>

      {/* ====== SEARCH & RESOURCE GRID ====== */}
      <section className="page-shell mt-16 md:mt-20">
        <motion.div {...fadeUp(0.15)}>
          <ResourceExplorer categories={categories} resources={resources} />
        </motion.div>
      </section>

      {/* ====== NEWSLETTER CTA ====== */}
      <section className="page-shell mt-24 md:mt-32">
        <motion.div
          className="relative overflow-hidden rounded-[32px] bg-[#0F4C3A] border-2 border-[#D4AF37]/60 text-white px-8 py-16 shadow-[0_30px_70px_rgba(15,76,58,0.25)] text-center md:px-12 md:py-24 lg:px-20"
          {...fadeUp(0.2)}
        >
          {/* Subtle Islamic Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          
          {/* Floating particles */}
          <motion.div 
            className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-[#C9A227]"
            animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute right-[20%] top-[15%] h-3 w-3 rounded-full bg-[#C9A227]"
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#C9A227] backdrop-blur-md shadow-lg border border-white/5">
              <Mail className="h-8 w-8" />
            </div>
            <h2 className="mb-6 font-display text-4xl text-white sm:text-5xl">
              Never miss new learning resources
            </h2>
            <div className="mb-6 flex w-24 items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A227]" />
              <div className="h-1.5 w-1.5 rotate-45 border border-[#C9A227]" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A227]" />
            </div>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Subscribe to receive free Quran learning materials, new resource updates, and study guides delivered directly to your inbox.
            </p>

            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:w-auto">
              <Link
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-10 py-5 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#0F4C3A] shadow-xl shadow-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e2bf58] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </Link>
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-10 py-5 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
