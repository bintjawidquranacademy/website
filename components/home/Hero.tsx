"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  CirclePlay,
  FileBadge2,
  Globe2,
  GraduationCap,
  Headphones,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const heroHighlights = [
  {
    icon: Globe2,
    title: "Worldwide Access",
    description: "Learn from anywhere in the world",
  },
  {
    icon: GraduationCap,
    title: "Qualified Teachers",
    description: "Experienced and certified Quran instructors",
  },
  {
    icon: BookOpen,
    title: "Structured Courses",
    description: "From Noorani Qaida to Hifz and Tajweed",
  },
  {
    icon: Headphones,
    title: "1-on-1 Classes",
    description: "Personalized attention for every student",
  },
  {
    icon: FileBadge2,
    title: "Certificates",
    description: "Recognized certificates upon course completion",
  },
] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="page-shell pb-8 pt-4 md:pb-12 md:pt-5">
      <div className="relative min-h-[52rem] overflow-hidden rounded-[2.4rem] border border-[#e8dcc4] bg-[#fcfaf6] shadow-[0_34px_100px_rgba(23,39,31,0.14)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-0 h-[72%] md:h-[76%]">
            <Image
              alt="Mosque at sunset"
              className="object-cover object-[78%_50%]"
              fill
              priority
              sizes="100vw"
              src="/hero/mosque.png"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#fdfbf7_0%,rgba(253,251,247,0.9)_38%,rgba(253,251,247,0.62)_58%,rgba(253,251,247,0.08)_100%)]" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.76),transparent_26%),linear-gradient(180deg,rgba(252,250,246,0.26),rgba(252,250,246,0)_38%)]" />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, rgba(10,50,30,0.82) 1px, transparent 0),
                linear-gradient(45deg, transparent 48%, rgba(10,50,30,0.38) 49%, rgba(10,50,30,0.38) 51%, transparent 52%),
                linear-gradient(-45deg, transparent 48%, rgba(10,50,30,0.38) 49%, rgba(10,50,30,0.38) 51%, transparent 52%)
              `,
              backgroundPosition: "0 0, 0 0, 40px 40px",
              backgroundSize: "80px 80px, 80px 80px, 80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 grid gap-10 px-6 pb-[13rem] pt-10 md:px-10 md:pb-[15rem] md:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,22rem)] lg:items-center lg:pb-[11rem] lg:px-12 xl:px-14">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -26 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-[36rem]">
              <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#8b6a32]">
                <span className="h-px w-9 bg-[linear-gradient(90deg,#c29b62,transparent)]" />
                International Quran Academy
              </div>

              <h1 className="mt-6 max-w-[10ch] font-display text-[3.5rem] leading-[0.9] text-[#0a321e] sm:text-[4.35rem] md:text-[5.15rem] xl:text-[5.8rem]">
                Learn the Quran. Live by the Quran.
              </h1>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c29b62]" />
                <span className="h-0.5 w-14 bg-[#c29b62]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#c29b62]" />
              </div>

              <p className="mt-6 text-[1.18rem] leading-8 text-[#2e372f] md:text-[1.42rem] md:leading-9">
                Authentic Learning. Meaningful Practice.
                <br />
                Spiritual Growth for a Better Tomorrow.
              </p>

              <p className="mt-6 max-w-[34rem] text-[1rem] leading-8 text-[#5d635d]">
                {siteConfig.name} is dedicated to providing high-quality Quran education to
                students worldwide with experienced teachers and personalized learning.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#0a321e] bg-[#0a321e] px-8 text-[0.96rem] font-medium !text-white shadow-[0_18px_36px_rgba(10,50,30,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#082716]"
                  href="/courses"
                >
                  <BookOpen className="h-5 w-5 text-[#c29b62]" />
                  <span className="!text-white">Our Courses</span>
                </Link>
                <Link
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#a8aca7] bg-white/35 px-8 text-[0.96rem] font-medium text-[#0a321e] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/65"
                  href="/free-trial"
                >
                  <CirclePlay className="h-5 w-5" />
                  Start Free Trial
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="relative hidden min-h-[28rem] items-center justify-center lg:flex"
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 26 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[28rem] w-80">
              <div className="absolute inset-0 rounded-t-[10rem] border border-[#c29b62]/35 bg-white/18 shadow-[0_24px_60px_rgba(21,37,29,0.12)] backdrop-blur-sm" />
              <div className="relative flex h-full flex-col items-center justify-center px-8 py-10 text-center">
                <p className="font-arabic text-[2.1rem] leading-[2.25] text-[#0a321e]">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ
                  <br />
                  وَعَلَّمَهُ
                </p>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#c29b62]" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#c29b62]" />
                  <span className="h-1 w-1 rounded-full bg-[#c29b62]" />
                </div>
                <p className="mt-6 font-display text-[1.75rem] leading-[1.5] text-[#22362d]">
                  The best among you are those who learn the Quran and teach it.
                </p>
                <p className="mt-6 text-sm italic text-[#70716c]">(Sahih Bukhari)</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10">
          <div className="pointer-events-none absolute inset-x-0 -top-10 z-10 h-16 overflow-hidden md:hidden">
            <div className="absolute inset-x-[-12%] bottom-0 h-16 rounded-[100%_100%_0_0/100%_100%_0_0] bg-[#c29b62]" />
            <div className="absolute inset-x-[-4%] bottom-0 h-12 rounded-[100%_100%_0_0/100%_100%_0_0] bg-[#0a321e] shadow-[0_-12px_30px_rgba(0,0,0,0.2)]" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 -top-16 z-10 hidden h-24 overflow-hidden md:block">
            <div className="absolute inset-x-[-10%] bottom-0 h-24 rounded-[100%_100%_0_0/100%_100%_0_0] bg-[#c29b62]" />
            <div className="absolute inset-x-[-2%] bottom-0 h-20 rounded-[100%_100%_0_0/100%_100%_0_0] bg-[#0a321e] shadow-[0_-16px_34px_rgba(0,0,0,0.2)]" />
          </div>

          <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-[76vw] max-w-[18rem] -translate-x-1/2 -translate-y-[52%] md:left-auto md:right-4 md:w-[30rem] md:max-w-none md:translate-x-0 md:-translate-y-[58%] lg:right-8 lg:w-[36rem] lg:-translate-y-[62%] xl:right-12 xl:w-[40rem] xl:-translate-y-[64%]">
            <Image
              alt="Open Quran on a wooden stand"
              className="h-auto w-full drop-shadow-[0_36px_32px_rgba(0,0,0,0.38)]"
              height={1536}
              priority
              sizes="(max-width: 768px) 76vw, (max-width: 1280px) 36rem, 40rem"
              src="/hero/quran%20ima.png"
              width={1024}
            />
          </div>

          <div className="relative z-10 bg-[#0a321e] px-6 pb-10 pt-24 text-white md:px-10 md:pt-16 xl:px-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {heroHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-4 rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-center sm:flex-row sm:items-start sm:text-left lg:rounded-none lg:border-0 lg:bg-transparent lg:px-6 lg:py-0"
                  initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  key={item.title}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c29b62] text-[#c29b62]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 lg:relative lg:pr-6">
                    <p className="text-[0.98rem] font-medium leading-6 text-white">{item.title}</p>
                    <p className="mt-1 text-[0.84rem] leading-6 text-[#b8c0ba]">
                      {item.description}
                    </p>
                    {index < heroHighlights.length - 1 ? (
                      <span className="absolute right-0 top-1 hidden h-14 w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.12),transparent)] lg:block" />
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
