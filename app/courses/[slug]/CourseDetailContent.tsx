"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Baby,
  Users,
  MessageCircle,
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
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CourseDetailContent({ course }: { course: Course }) {
  // Extract duration for badge and card
  const durationParts = course.duration.split(",");
  const durationBadge = durationParts[0]?.trim() || course.duration;
  const sessionLength = durationParts[1]?.trim() || "";

  return (
    <div className="overflow-hidden pb-16 md:pb-24">
      {/* Background Pattern */}
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-[0.02]">
        <div className="h-full w-full bg-[url('/bg-pattern.svg')] bg-repeat" />
      </div>

      {/* ====== HERO SECTION ====== */}
      <section className="page-shell pt-10 md:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Content */}
          <motion.div className="space-y-8" {...slideIn("left")}>
            <div className="space-y-6">
              <div className="section-label">COURSE DETAIL</div>
              <h1 className="font-display text-balance text-4xl leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                {course.title}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                {course.summary}
              </p>
            </div>

            {/* Premium Info Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: course.level,
                  desc: "Suitable level for this pathway.",
                },
                {
                  icon: Calendar,
                  title: durationBadge,
                  desc: sessionLength || "Typical lesson rhythm families choose.",
                },
                {
                  icon: User,
                  title: "Personalised",
                  desc: "Teaching adjusts to confidence, age, and long-term goals.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white/60 p-6 shadow-[0_8px_30px_rgba(18,40,30,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A227]/30 hover:shadow-[0_16px_40px_rgba(18,40,30,0.08)]"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E] text-white shadow-[0_4px_12px_rgba(15,61,46,0.2)]">
                    <item.icon className="h-4 w-4 text-[#C9A227]" />
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

          {/* Right Content - Hero Image & Panel */}
          <motion.div
            className="relative mx-auto mt-8 w-full max-w-[340px] lg:mt-0 lg:mx-0 lg:max-w-none lg:pr-10"
            {...slideIn("right", 0.15)}
          >
            {/* Background elements */}
            <div className="absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.08)_0%,transparent_60%)]" />

            <div className="relative flex justify-end">
              {/* Islamic Arch Image (Background) */}
              <motion.div
                className="w-full max-w-[320px] xl:max-w-[380px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full border border-[#C9A227]/30 shadow-2xl">
                  <Image
                    src="/about pic.png"
                    alt="Quran on wooden stand"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/30 to-transparent" />
                </div>
              </motion.div>

              {/* Floating Enrollment Panel (Foreground) */}
              <div className="absolute bottom-4 -left-4 z-10 w-[calc(100%-1rem)] max-w-[280px] sm:-left-8 sm:bottom-8 sm:w-[280px] lg:-left-12 lg:bottom-12 xl:-left-16">
                <div className="rounded-[24px] border border-[var(--line)] bg-[#FDFBF7] p-7 shadow-[0_24px_50px_rgba(18,40,30,0.12)]">
                  
                  {/* Badge */}
                  <div className="mb-6">
                    <span className="rounded-full border border-[#C9A227]/40 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-[#C9A227]">
                      {course.level}
                    </span>
                  </div>

                  {/* Duration Text */}
                  <div className="mb-5 flex flex-col">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[var(--ink)]">
                      {durationBadge}
                      {sessionLength ? "," : ""}
                    </span>
                    {sessionLength && (
                      <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[var(--ink)]">
                        {sessionLength}
                      </span>
                    )}
                  </div>
                  
                  {/* Separator / Spacer */}
                  <div className="mb-5 h-px w-full bg-gradient-to-r from-[var(--line)] to-transparent" />
                  
                  {/* Description */}
                  <p className="mb-8 text-[0.85rem] leading-[1.7] text-[var(--ink)]">
                    This course is designed for {course.audience.toLowerCase()}.
                  </p>
                  
                  {/* CTA Button */}
                  <Link
                    href="/free-trial"
                    className="group flex w-full items-center justify-between rounded-full bg-[#082E23] px-6 py-4 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:bg-[#0F3D2E] hover:shadow-xl"
                  >
                    <span className="text-white">Book Trial</span>
                    <ArrowRight className="h-4 w-4 text-[#C9A227] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== TWO COLUMN CONTENT LAYOUT ====== */}
      <section className="page-shell mt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          
          {/* LEFT COLUMN: Who It's For */}
          <div className="space-y-8">


            {/* Who It's For Card */}
            <motion.div
              className="relative overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,252,245,0.6))] p-8 shadow-[0_12px_40px_rgba(18,40,30,0.05)] backdrop-blur-md lg:p-10"
              {...fadeUp(0.1)}
            >
              <h2 className="mb-4 font-display text-3xl text-[var(--ink)]">
                Who it&apos;s for
              </h2>
              {/* Gold divider */}
              <div className="mb-6 h-px w-16 bg-gradient-to-r from-[#C9A227] to-transparent" />
              
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E]/5">
                    <Baby className="h-5 w-5 text-[#0F3D2E]" />
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E]/5">
                    <GraduationCap className="h-5 w-5 text-[#0F3D2E]" />
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E]/5">
                    <Users className="h-5 w-5 text-[#0F3D2E]" />
                  </div>
                </div>
                <p className="text-[0.95rem] leading-[1.8] text-[var(--muted)]">
                  {course.audience}
                </p>
              </div>

              {/* Decorative faint icon */}
              <Users className="absolute -bottom-8 -right-8 h-48 w-48 text-[#0F3D2E] opacity-[0.03]" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Curriculum & CTA */}
          <div className="space-y-8">
            {/* Curriculum Card */}
            <motion.div
              className="rounded-[24px] border border-[var(--line)] bg-white/70 p-8 shadow-[0_16px_50px_rgba(18,40,30,0.06)] backdrop-blur-xl lg:p-10"
              {...fadeUp(0.2)}
            >
              <h2 className="mb-4 font-display text-3xl text-[var(--ink)]">
                Curriculum Outline
              </h2>
              {/* Gold divider */}
              <div className="mb-8 h-px w-16 bg-gradient-to-r from-[#C9A227] to-transparent" />

              <ul className="space-y-3">
                {course.curriculum.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="group flex cursor-default items-center gap-4 rounded-[20px] border border-[var(--line)] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-md"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E]/5 transition-colors group-hover:bg-[#0F3D2E]">
                      <CheckCircle2 className="h-4 w-4 text-[#0F3D2E] transition-colors group-hover:text-[#C9A227]" />
                    </div>
                    <span className="text-[0.9rem] font-medium text-[var(--ink)]">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Ready to Begin CTA (Full Width) */}
        <div className="mt-12">
            <motion.div
              className="relative overflow-hidden rounded-[24px] bg-[#0F4C3A] border-2 border-[#D4AF37]/60 text-white p-8 shadow-[0_30px_70px_rgba(15,76,58,0.25)] backdrop-blur-xl lg:p-10 text-center"
              {...fadeUp(0.3)}
            >
              {/* Subtle Islamic Geometric Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#D4AF37] backdrop-blur-md shadow-lg border border-white/5">
                  <BookOpen className="h-8 w-8" />
                </div>

                <h2 className="mb-4 font-display text-3xl text-white">
                  Ready to begin?
                </h2>
                
                <p className="mb-8 text-[0.95rem] leading-[1.8] text-gray-200">
                  Book a trial lesson to meet a teacher, discuss the learner&apos;s needs, and receive a recommended plan.
                </p>

                <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/free-trial"
                    className="group flex flex-1 items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-6 py-4 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#0F4C3A] shadow-xl shadow-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e2bf58] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)]"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Book Trial</span>
                  </Link>
                  <Link
                    href="https://wa.me/923259839004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-1 items-center justify-center gap-3 rounded-full bg-white/10 border border-white/20 px-6 py-4 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Talk to Advisor</span>
                  </Link>
                </div>
              </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
