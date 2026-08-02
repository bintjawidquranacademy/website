"use client";

import { motion, type Variants } from "framer-motion";
import {
  BookMarked,
  ScrollText,
  BookOpenText,
  LibraryBig,
  GraduationCap,
  Medal,
} from "lucide-react";

const milestones = [
  {
    icon: BookMarked,
    number: "01",
    title: "Noorani Qaida",
    description: "Master foundational Arabic alphabets, sound rules, and essential pronunciation.",
  },
  {
    icon: ScrollText,
    number: "02",
    title: "Basic Tajweed (Recitation)",
    description: "Learn core rules of recitation, vocal points, and proper sound articulation.",
  },
  {
    icon: BookOpenText,
    number: "03",
    title: "Quran Reading",
    description: "Develop smooth, fluent Quranic recitation with steady teacher supervision.",
  },
  {
    icon: LibraryBig,
    number: "04",
    title: "Advanced Tajweed (Recitation)",
    description: "Refine intricate Tajweed (Recitation) nuances, stops, elongation, and melodic rules.",
  },
  {
    icon: GraduationCap,
    number: "05",
    title: "Hifz Program",
    description: "Structured memorization with daily revision, retention strategies, and tracking.",
  },
  {
    icon: Medal,
    number: "06",
    title: "Ijazah",
    description: "Earn authentic sanad and teaching authorization through rigorous verification.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function LearningJourney() {
  return (
    <section className="bg-[#FAF8F3] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20">
            Learning Journey
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F4C3A] tracking-tight">
            From Beginner to Mastery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A6E65] max-w-2xl mx-auto font-sans leading-relaxed">
            A step-by-step structured curriculum tailored for students of all ages to recite and connect with the Holy Quran.
          </p>
        </motion.div>

        {/* Horizontal Timeline Container */}
        <div className="mt-16 relative">
          {/* Scroll wrapper for mobile */}
          <div className="overflow-x-auto pb-8 pt-4 no-scrollbar scroll-smooth">
            <motion.div
              className="relative min-w-[980px] lg:min-w-0 grid grid-cols-6 gap-4 lg:gap-6 px-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Gold Connecting Line */}
              <div className="absolute top-[38px] left-[7%] right-[7%] h-[2px] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 -z-0" />

              {milestones.map((milestone) => {
                const Icon = milestone.icon;
                return (
                  <motion.div
                    key={milestone.title}
                    variants={itemVariants}
                    className="relative flex flex-col items-center text-center group"
                  >
                    {/* Circle Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.12, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#0F4C3A] border-2 border-[#D4AF37] text-[#D4AF37] shadow-[0_10px_25px_rgba(15,76,58,0.25)] transition-colors duration-300 group-hover:bg-[#135A46] group-hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)]"
                    >
                      <Icon className="h-9 w-9 text-[#D4AF37]" />
                      <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-[#0F4C3A] shadow">
                        {milestone.number}
                      </span>
                    </motion.div>

                    {/* Milestone Content */}
                    <div className="mt-6 flex flex-col items-center">
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-[#0F4C3A] group-hover:text-[#D4AF37] transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-[#5A6E65] leading-relaxed font-sans max-w-[170px]">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
