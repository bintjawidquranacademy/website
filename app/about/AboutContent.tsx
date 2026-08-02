"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Globe,
  GraduationCap,
  BookOpen,
  Clock,
  ArrowRight,
  Quote,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeScale = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
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
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const featureCards = [
  {
    icon: Users,
    title: "1:1",
    subtitle: "Personal Learning",
    description:
      "Each learner receives a pace and teaching style shaped around them.",
  },
  {
    icon: Heart,
    title: "Adab",
    subtitle: "Islamic Etiquette",
    description:
      "We teach with clarity, patience, and the etiquette families expect.",
  },
  {
    icon: Globe,
    title: "Global",
    subtitle: "Worldwide Access",
    description:
      "Lessons are scheduled for families across time zones and routines.",
  },
];

const benefitCards = [
  {
    icon: GraduationCap,
    title: "Expert Teachers",
    description:
      "Qualified teachers who combine Tajweed (Recitation) precision with patient communication.",
  },
  {
    icon: BookOpen,
    title: "Personalised Pace",
    description:
      "A calm one-to-one learning environment shaped around each student's pace.",
  },
  {
    icon: Clock,
    title: "Sustainable Growth",
    description:
      "Progress-focused routines that families can sustain long term.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutContent() {
  return (
    <div className="overflow-hidden pb-16 md:pb-24">
      {/* ====== HERO SECTION ====== */}
      <section className="page-shell pt-10 md:pt-16 lg:pt-20">
        <div className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_480px]">
            {/* Left Content */}
            <motion.div className="space-y-7" {...slideIn("left")}>
              {/* Eyebrow */}
              <div className="section-label">About Us</div>

              {/* Heading */}
              <h1 className="font-display text-balance text-[2.6rem] leading-[1.02] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                A modern Quran academy rooted in careful teaching and family
                trust.
              </h1>

              {/* Description */}
              <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg md:leading-[1.85]">
                Bint Jawid International Quran Academy was shaped for families
                who want Quran education that feels trustworthy, organised, and
                warm from the first interaction.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
                <Link
                  href="/teachers"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-[#14523f] bg-[linear-gradient(180deg,#0f5b45,#0d4635)] px-7 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#fff0ca] shadow-[0_12px_28px_rgba(15,77,58,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,77,58,0.24)]"
                >
                  <Users className="h-4 w-4 text-[#ddb866]" />
                  Meet Our Teachers
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/courses"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-[var(--line-strong)] bg-white/60 px-7 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--primary)] shadow-[0_6px_20px_rgba(18,40,30,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-[0_10px_28px_rgba(18,40,30,0.1)]"
                >
                  <BookOpen className="h-4 w-4 text-[var(--accent)]" />
                  Explore Courses
                </Link>
              </div>
            </motion.div>

            {/* Right — Hero Image */}
            <motion.div
              className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none"
              {...slideIn("right", 0.15)}
            >
              {/* Decorative Islamic geometric pattern behind */}
              <div className="absolute -inset-6 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.08)_0%,transparent_70%)]" />
              <div className="absolute -right-4 -top-4 -z-10 h-[calc(100%+32px)] w-[calc(100%+32px)] rounded-[36px] border border-[#C9A227]/20" />

              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Gold outlined frame */}
                <div className="relative overflow-hidden rounded-[28px] border-2 border-[#C9A227]/40 shadow-[0_30px_80px_rgba(18,40,30,0.14),0_0_60px_rgba(200,155,60,0.1)]">
                  {/* Islamic arch shape overlay at top */}
                  <div className="absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#0F3D2E]/10 to-transparent" />

                  <Image
                    src="/about pic.png"
                    alt="Holy Quran on a decorative stand"
                    width={480}
                    height={540}
                    className="h-auto w-full object-cover"
                    priority
                  />

                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F3D2E]/20 to-transparent" />
                </div>
              </motion.div>

              {/* Gold sparkle decoration */}
              <motion.div
                className="absolute -right-3 top-8 text-[#C9A227]"
                animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-6 w-6 opacity-60" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== FEATURE CARDS ====== */}
      <section className="page-shell mt-16 md:mt-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,252,245,0.62))] p-7 shadow-[0_16px_48px_rgba(18,40,30,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(18,40,30,0.12)]"
              {...fadeUp(0.08 * i)}
            >
              {/* Top glow on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/0 to-transparent transition-all duration-500 group-hover:via-[#C9A227]/50" />

              {/* Subtle corner accent */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--accent-soft)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A227]/25 bg-[linear-gradient(135deg,#0F3D2E,#0d4635)] shadow-[0_8px_20px_rgba(15,77,58,0.2)] transition-transform duration-500 group-hover:scale-110">
                  <card.icon className="h-6 w-6 text-[#C9A227]" />
                </div>

                {/* Title */}
                <h3 className="font-display text-3xl text-[var(--ink)] md:text-4xl">
                  {card.title}
                </h3>
                <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== MISSION & FOUNDER SECTION ====== */}
      <section className="page-shell mt-16 md:mt-24">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Mission Card */}
          <motion.div
            className="group relative overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,252,245,0.62))] p-8 shadow-[0_20px_60px_rgba(18,40,30,0.08)] backdrop-blur-xl md:p-10"
            {...fadeUp(0)}
          >
            {/* Top gold line */}
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

            {/* Faded mosque silhouette in background */}
            <div className="absolute -bottom-6 -right-6 h-52 w-52 opacity-[0.03]">
              <svg
                viewBox="0 0 200 200"
                fill="currentColor"
                className="h-full w-full text-[#0F3D2E]"
              >
                <path d="M100 10c-8 0-14 20-14 45h-8c0-20-5-35-12-35s-12 15-12 35H46c0-15-4-25-10-25s-10 10-10 25H10v120h180V55h-16c0-15-4-25-10-25s-10 10-10 25h-8c0-20-5-35-12-35s-12 15-12 35h-8C114 30 108 10 100 10z" />
                <rect x="40" y="130" width="20" height="45" rx="10" />
                <rect x="90" y="110" width="20" height="65" rx="10" />
                <rect x="140" y="130" width="20" height="45" rx="10" />
              </svg>
            </div>

            <div className="relative space-y-5">
              <h2 className="font-display text-3xl text-[var(--ink)] md:text-4xl">
                Our Mission
              </h2>

              {/* Gold divider */}
              <div className="h-px w-16 bg-gradient-to-r from-[#C9A227] to-transparent" />

              <div className="space-y-4 text-[0.92rem] leading-[1.9] text-[var(--muted)]">
                <p>
                  We help children, teens, and adults build a lifelong
                  relationship with the Quran through clear recitation,
                  meaningful memorisation, and Islamic understanding that fits
                  modern family life.
                </p>
                <p>
                  Every lesson is designed to be personalised, respectful, and
                  sustainable so that progress feels steady rather than
                  overwhelming.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Founder Card */}
          <motion.div
            className="group relative overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,252,245,0.62))] p-8 shadow-[0_20px_60px_rgba(18,40,30,0.08)] backdrop-blur-xl md:p-10"
            {...fadeUp(0.1)}
          >
            {/* Top gold line */}
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

            <div className="relative flex h-full flex-col">
              <h2 className="font-display text-3xl italic text-[var(--ink)] md:text-4xl">
                Founder&apos;s Note
              </h2>

              {/* Gold divider */}
              <div className="mt-5 h-px w-16 bg-gradient-to-r from-[#C9A227] to-transparent" />

              {/* Quote icon */}
              <div className="mt-6 flex items-start gap-3">
                <Quote className="mt-1 h-8 w-8 shrink-0 text-[#C9A227]/30" />
                <p className="text-[0.92rem] italic leading-[1.9] text-[var(--muted)]">
                  We started Bint Jawid International Quran Academy to close the
                  gap between traditional Quran teaching values and the
                  convenience modern families need. That means stronger
                  communication, better scheduling, and teachers who care about
                  adab as much as outcomes.
                </p>
              </div>

              {/* Founder signature */}
              <div className="mt-auto pt-8">
                <div className="h-px w-full bg-gradient-to-r from-[var(--line)] to-transparent" />
                <div className="mt-5">
                  <p className="font-display text-2xl text-[#C9A227]">
                    Bint Jawid
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                    Founder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== BENEFITS SECTION ====== */}
      <section className="page-shell mt-16 md:mt-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefitCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,252,245,0.62))] p-7 shadow-[0_16px_48px_rgba(18,40,30,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(18,40,30,0.12)]"
              {...fadeScale(0.08 * i)}
            >
              {/* Animated border glow on hover */}
              <div className="absolute inset-0 rounded-[24px] border border-transparent transition-all duration-500 group-hover:border-[#C9A227]/20" />

              {/* Subtle glow */}
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[#C9A227]/0 blur-2xl transition-all duration-500 group-hover:bg-[#C9A227]/8" />

              <div className="relative">
                {/* Circular icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227]/25 bg-[linear-gradient(135deg,#0F3D2E,#0d4635)] shadow-[0_10px_24px_rgba(15,77,58,0.22)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_14px_32px_rgba(15,77,58,0.28)]">
                  <card.icon className="h-7 w-7 text-[#C9A227]" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-[var(--ink)] md:text-2xl">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
