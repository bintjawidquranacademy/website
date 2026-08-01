"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  CalendarCheck,
  BarChart3,
  Star,
  Quote,
  MessageCircle,
  GraduationCap,
  Globe2,
  BookOpen,
} from "lucide-react";
import TeacherCard from "@/components/teachers/TeacherCard";
import type { Teacher } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeScale = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ------------------------------------------------------------------ */
/*  Static Data                                                        */
/* ------------------------------------------------------------------ */

const heroFeatures = [
  {
    icon: Award,
    title: "Certified Teachers",
    description:
      "Qualified male and female Quran teachers with years of teaching experience.",
  },
  {
    icon: Users,
    title: "One-to-One Learning",
    description:
      "Every lesson is personalized according to the student's age, level, and goals.",
  },
  {
    icon: Globe2,
    title: "Worldwide Classes",
    description:
      "Professional online classes available across different countries and time zones.",
  },
];


const whyFeatures = [
  {
    icon: GraduationCap,
    title: "Certified Quran Scholars",
    description:
      "Every teacher holds an Ijazah or recognized qualification in Quranic sciences and Islamic education.",
  },
  {
    icon: Users,
    title: "Personalized Learning",
    description:
      "Lessons are tailored to each student's level, learning pace, and individual goals.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Scheduling",
    description:
      "Choose class times that suit your lifestyle, with options across all major time zones.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Regular assessments and detailed feedback so families can see clear improvement.",
  },
];

const testimonials = [
  {
    name: "Aisha K.",
    country: "United Kingdom",
    text: "My daughter has improved so much in her Tajweed. The teacher is patient, warm, and makes every lesson enjoyable.",
    rating: 5,
  },
  {
    name: "Omar R.",
    country: "Canada",
    text: "I was searching for a qualified Hifz teacher for months. Bint Jawid connected me with the perfect mentor for my son.",
    rating: 5,
  },
  {
    name: "Fatima S.",
    country: "Australia",
    text: "As a busy professional, I love the flexible scheduling. My teacher is incredibly dedicated and supportive.",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type TeachersContentProps = {
  teachers: Teacher[];
};

export default function TeachersContent({ teachers }: TeachersContentProps) {
  return (
    <div className="overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO SECTION                                                 */}
      {/* ============================================================ */}
      <section className="relative px-4 pt-10 md:px-6 md:pt-14 lg:pt-16">
        {/* Background ornaments */}
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[rgba(200,155,60,0.08)] blur-[100px]" />
        <div className="absolute -left-20 top-40 h-56 w-56 rounded-full bg-[rgba(15,77,58,0.06)] blur-[80px]" />

        <div className="mx-auto max-w-[1240px]">
          <div className="relative overflow-hidden rounded-[40px] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,252,245,0.6))] px-6 py-10 shadow-[0_26px_90px_rgba(18,40,30,0.08)] backdrop-blur md:px-10 md:py-14 lg:px-14">
            {/* Top gold line */}
            <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(200,155,60,0.72),transparent)]" />
            <div className="absolute -right-18 top-8 h-44 w-44 rounded-full bg-[rgba(200,155,60,0.14)] blur-3xl" />
            <div className="absolute -left-12 bottom-8 h-36 w-36 rounded-full bg-[rgba(15,77,58,0.09)] blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
              {/* Left Column */}
              <div className="space-y-8">
                <motion.div {...fadeUp(0)} className="space-y-5">
                  <div className="section-label">Our Teachers</div>
                  <h1 className="font-display text-balance text-4xl leading-[0.96] text-[#13281f] md:text-6xl lg:text-[4.2rem]">
                    Meet Experienced Quran Teachers Dedicated to Your Learning.
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-[#56655e] md:text-lg md:leading-relaxed">
                    Every teacher is carefully selected, highly qualified in Tajweed and
                    Islamic studies, and committed to providing personalized one-to-one
                    Quran education for students of all ages.
                  </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {heroFeatures.map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      {...fadeUp(0.1 + i * 0.08)}
                      className="group relative rounded-[20px] border border-[rgba(15,77,58,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,252,245,0.68))] p-5 shadow-[0_8px_30px_rgba(20,40,30,0.06)] backdrop-blur-md transition-all duration-400 hover:-translate-y-0.5 hover:border-[rgba(200,155,60,0.3)] hover:shadow-[0_16px_50px_rgba(20,40,30,0.1)]"
                    >
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(15,77,58,0.08)]">
                        <feature.icon className="h-5 w-5 text-[#0F4C3A]" />
                      </div>
                      <h3 className="font-display text-lg text-[#13281f]">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-[0.82rem] leading-relaxed text-[#56655e]">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column — Islamic Arch Image */}
              <motion.div
                {...fadeScale(0.15)}
                className="relative hidden lg:block"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-[rgba(200,155,60,0.2)] shadow-[0_20px_60px_rgba(20,40,30,0.12)]">
                  {/* Gold arch outline */}
                  <div className="absolute inset-0 z-10 rounded-[28px] ring-2 ring-inset ring-[rgba(200,155,60,0.15)]" />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/about pic.png"
                      alt="Quran teaching environment"
                      width={380}
                      height={460}
                      className="h-[420px] w-full object-cover"
                      priority
                    />
                  </motion.div>
                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[rgba(250,249,244,0.9)] to-transparent" />
                </div>

                {/* Decorative orbs */}
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[rgba(200,155,60,0.12)] blur-2xl" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[rgba(15,77,58,0.1)] blur-xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TEACHERS GRID                                                */}
      {/* ============================================================ */}
      <section className="relative px-4 py-20 md:px-6 md:py-28">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="grid-fade absolute inset-0 opacity-40" />
        </div>

        <div className="mx-auto max-w-[1240px]">
          {/* Section Heading */}
          <motion.div {...fadeUp(0)} className="mb-14 text-center">
            <div className="section-label mx-auto inline-flex">Meet Our Expert Teachers</div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-[#13281f] md:text-5xl">
              Qualified educators for every learning goal
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#56655e]">
              From foundational Qaidah to advanced Hifz mentoring, our teachers bring
              years of experience and genuine care to every lesson.
            </p>
          </motion.div>

          {/* Teacher Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {teachers.map((teacher, index) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHY CHOOSE OUR TEACHERS                                      */}
      {/* ============================================================ */}
      <section className="relative px-4 py-20 md:px-6 md:py-28">
        <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[rgba(200,155,60,0.06)] blur-[100px]" />

        <div className="mx-auto max-w-[1240px]">
          <motion.div {...fadeUp(0)} className="mb-14 text-center">
            <div className="section-label mx-auto inline-flex">
              Why Bint Jawid
            </div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-[#13281f] md:text-5xl">
              Why families trust our teachers
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fadeUp(0.08 * i)}
                className="group relative overflow-hidden rounded-[24px] border border-[rgba(15,77,58,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,252,245,0.68))] p-6 shadow-[0_16px_50px_rgba(20,40,30,0.06)] backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:border-[rgba(200,155,60,0.3)] hover:shadow-[0_22px_70px_rgba(20,40,30,0.1)]"
              >
                {/* Top line */}
                <div className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(200,155,60,0.4),transparent)] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(15,77,58,0.08)] transition-colors duration-300 group-hover:bg-[rgba(200,155,60,0.12)]">
                  <feature.icon className="h-5.5 w-5.5 text-[#0F4C3A] transition-colors duration-300 group-hover:text-[#C9A227]" />
                </div>
                <h3 className="font-display text-xl text-[#13281f]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-[#56655e]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                 */}
      {/* ============================================================ */}
      <section className="relative px-4 py-20 md:px-6 md:py-28">
        <div className="absolute -right-24 top-20 h-56 w-56 rounded-full bg-[rgba(15,77,58,0.05)] blur-[90px]" />

        <div className="mx-auto max-w-[1240px]">
          <motion.div {...fadeUp(0)} className="mb-14 text-center">
            <div className="section-label mx-auto inline-flex">
              Testimonials
            </div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-[#13281f] md:text-5xl">
              What our students say
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                {...fadeUp(0.08 * i)}
                className="group relative overflow-hidden rounded-[24px] border border-[rgba(15,77,58,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,252,245,0.65))] p-7 shadow-[0_16px_50px_rgba(20,40,30,0.06)] backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:border-[rgba(200,155,60,0.25)] hover:shadow-[0_22px_70px_rgba(20,40,30,0.1)]"
              >
                {/* Quote icon */}
                <Quote className="mb-4 h-8 w-8 text-[rgba(200,155,60,0.3)]" />

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="h-4 w-4 fill-[#C9A227] text-[#C9A227]"
                    />
                  ))}
                </div>

                <p className="text-[0.92rem] leading-relaxed text-[#30453c]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-[rgba(15,77,58,0.08)] pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(15,77,58,0.08)] font-display text-sm text-[#0F4C3A]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#13281f]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#56655e]">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA — BOOK A FREE TRIAL                                      */}
      {/* ============================================================ */}
      <section className="px-4 pb-20 md:px-6 md:pb-28">
        <motion.div
          {...fadeScale(0)}
          className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[36px]"
        >
          {/* Dark emerald background */}
          <div className="relative bg-[linear-gradient(135deg,#0a2e22,#0F4C3A_50%,#0d3f30)] px-8 py-16 md:px-14 md:py-20">
            {/* Decorative elements */}
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[rgba(200,155,60,0.1)] blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-[rgba(200,155,60,0.08)] blur-[60px]" />
            <div className="absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(200,155,60,0.4),transparent)]" />

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[rgba(200,155,60,0.15)]"
                style={{
                  width: 4 + i * 2,
                  height: 4 + i * 2,
                  left: `${15 + i * 18}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <motion.div {...fadeUp(0.1)}>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#C9A227] backdrop-blur-md shadow-lg border border-white/5">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h2 className="font-display text-3xl leading-tight !text-white md:text-5xl">
                  Find the Perfect Quran Teacher Today
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[rgba(255,255,255,0.7)]">
                  Book a free trial lesson and meet a teacher before enrolling.
                  Experience the quality of personalized Quran education with no
                  obligation.
                </p>
              </motion.div>

              <motion.div
                {...fadeUp(0.2)}
                className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link
                  href="/free-trial"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#C9A227] px-8 text-[0.82rem] font-semibold uppercase tracking-[0.18em] !text-[#13281f] shadow-[0_12px_36px_rgba(200,155,60,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4ad35] hover:shadow-[0_16px_48px_rgba(200,155,60,0.4)]"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Book Free Trial</span>
                </Link>
                <Link
                  href="https://wa.me/923259839004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.08)] px-8 text-[0.82rem] font-semibold uppercase tracking-[0.18em] !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.14)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Talk to an Advisor</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
