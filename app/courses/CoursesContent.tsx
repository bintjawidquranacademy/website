"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  User,
  Calendar,
  MonitorPlay,
  CheckCircle2,
  TrendingUp,
  Headphones,
  ArrowRight,
  Library,
  Book,
  Globe,
  Mic,
  Award,
} from "lucide-react";
import type { Course } from "@/lib/types";

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
/*  Data Mappings                                                      */
/* ------------------------------------------------------------------ */

// Course icons mapping
const iconMap: Record<string, React.ElementType> = {
  "noorani-qaidah": BookOpen,
  "tajweed": Award,
  "hifz": Book,
  "islamic-studies": Library,
  "arabic-language": Globe,
  "qirat": Mic,
};

export default function CoursesContent({ courseList }: { courseList: Course[] }) {
  return (
    <div className="overflow-hidden pb-16 md:pb-24">
      {/* Background Pattern */}
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-[0.02]">
        <div className="h-full w-full bg-[url('/bg-pattern.svg')] bg-repeat" />
      </div>

      {/* ====== HERO SECTION ====== */}
      <section className="page-shell pt-10 md:pt-16 lg:pt-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <motion.div className="space-y-8" {...slideIn("left")}>
            <div className="space-y-6">
              <div className="section-label">Courses</div>
              <h1 className="font-display text-balance text-4xl leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl md:text-[3.4rem]">
                Choose a pathway that matches your learner’s stage.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Every course is taught one-to-one, shaped around the learner’s age, confidence level, and long-term goal.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: "Structured Learning",
                  desc: "Learning pathways across Noorani Qaida, Tajweed, Quran Reading, Hifz, Arabic Language and Islamic Studies.",
                },
                {
                  icon: User,
                  title: "Personalized Learning",
                  desc: "Every class is one-to-one and tailored to each student's age, confidence level and learning pace.",
                },
                {
                  icon: Calendar,
                  title: "Flexible Scheduling",
                  desc: "Choose lesson times that fit your family's routine from anywhere in the world.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--line)] bg-white/40 p-5 shadow-[0_4px_20px_rgba(18,40,30,0.03)] backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0F3D2E]/5">
                    <item.icon className="h-5 w-5 text-[#0F3D2E]" />
                  </div>
                  <h3 className="mb-2 font-display text-[1.1rem] font-medium text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="text-[0.8rem] leading-relaxed text-[var(--muted)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div className="relative mx-auto w-full max-w-lg lg:max-w-none" {...slideIn("right", 0.15)}>
            <div className="relative z-10 flex flex-col gap-6 md:flex-row lg:flex-col xl:flex-row xl:items-start">
              {/* Image with Arch */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full overflow-hidden rounded-t-full border-4 border-white bg-white shadow-xl md:w-1/2 lg:w-full xl:w-[55%]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full">
                  <Image
                    src="/about pic.png"
                    alt="Quran on wooden stand"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/20 to-transparent" />
                </div>
              </motion.div>

              {/* Info Panel */}
              <div className="relative w-full flex-1 md:w-1/2 lg:w-full xl:w-[45%] xl:-ml-6 xl:mt-12">
                <div className="rounded-[24px] border border-[var(--line)] bg-white/90 p-6 shadow-[0_20px_40px_rgba(18,40,30,0.08)] backdrop-blur-md">
                  <div className="mb-5 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--ink)]">
                        HOW WE TEACH
                      </span>
                      <div className="flex w-16 items-center gap-1">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A227]" />
                        <div className="h-1.5 w-1.5 rotate-45 border border-[#C9A227]" />
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A227]" />
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      { icon: MonitorPlay, text: "Traditional one-to-one online learning" },
                      { icon: User, text: "Qualified teachers matched to student level" },
                      { icon: CheckCircle2, text: "Structured lessons with measurable progress" },
                      { icon: TrendingUp, text: "Smooth pathway from beginner to advanced recitation" },
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E] shadow-sm">
                          <feature.icon className="h-3.5 w-3.5 text-[#C9A227]" />
                        </div>
                        <span className="text-[0.85rem] leading-tight text-[var(--muted)]">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -right-8 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-[#C9A227]/10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* ====== COURSE CARDS GRID ====== */}
      <section className="page-shell mt-20 md:mt-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courseList.map((course, i) => {
            const Icon = iconMap[course.slug] || BookOpen;
            
            return (
              <motion.div
                key={course.slug}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,252,245,0.7))] p-7 shadow-[0_12px_40px_rgba(18,40,30,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C9A227]/40 hover:shadow-[0_24px_60px_rgba(18,40,30,0.1)]"
                {...fadeUp(0.06 * i)}
              >
                {/* Header: Icon & Badges */}
                <div className="mb-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F3D2E]/5 text-[#0F3D2E] transition-colors duration-500 group-hover:bg-[#0F3D2E] group-hover:text-[#C9A227]">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="rounded-full border border-[#C9A227]/30 bg-[#C9A227]/5 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[#C9A227]">
                      {course.level}
                    </span>
                    <span className="rounded-full border border-[var(--line)] bg-white/50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--muted)]">
                      {course.duration.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="font-display text-2xl font-medium text-[var(--ink)] lg:text-3xl">
                    {course.title}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.8] text-[var(--muted)]">
                    {course.summary}
                  </p>
                </div>

                {/* Action */}
                <div className="mt-8 pt-6 border-t border-[var(--line)]">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="group/link flex w-fit items-center gap-2 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#0F3D2E] transition-colors hover:text-[#C9A227]"
                  >
                    Explore Course
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ====== CONSULTATION CTA ====== */}
      <section className="page-shell mt-20 md:mt-32">
        <motion.div
          className="relative overflow-hidden rounded-[32px] bg-[#0F4C3A] border-2 border-[#D4AF37]/60 text-white px-8 py-12 shadow-[0_30px_70px_rgba(15,76,58,0.25)] md:px-12 md:py-16 lg:px-16"
          {...fadeUp(0.1)}
        >
          {/* Subtle Islamic Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row md:justify-between">
            <div className="flex max-w-xl flex-col items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#D4AF37] backdrop-blur-md shadow-lg border border-white/5">
                <Headphones className="h-8 w-8" />
              </div>
              <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
                Not sure which course is right?
              </h2>
              <p className="text-sm leading-relaxed text-gray-200 md:text-base">
                Our education advisors will help you choose the perfect learning pathway based on age, goals and experience.
              </p>
            </div>
            
            <div className="shrink-0">
              <Link
                href="/contact"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-8 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#0F4C3A] shadow-xl shadow-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e2bf58] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)]"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
