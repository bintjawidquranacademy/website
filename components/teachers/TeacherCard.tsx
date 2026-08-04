"use client";

import { motion } from "framer-motion";
import { Star, Clock } from "lucide-react";
import type { Teacher } from "@/lib/types";

type TeacherCardProps = {
  teacher: Teacher;
  index?: number;
};

export default function TeacherCard({ teacher, index = 0 }: TeacherCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] as const }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[rgba(15,77,58,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,252,245,0.65))] shadow-[0_20px_60px_rgba(20,40,30,0.08)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(20,40,30,0.14)] hover:border-[rgba(200,155,60,0.3)]"
    >
      {/* Top gold accent line */}
      <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(200,155,60,0.5),transparent)]" />

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6 pt-5">
        {/* Name */}
        <h3 className="font-display text-[1.6rem] leading-tight text-[#13281f]">
          {teacher.name}
        </h3>

        {/* Specialization badge */}
        <div className="mt-3">
          <span className="inline-flex items-center rounded-full border border-[rgba(200,155,60,0.4)] bg-[rgba(15,60,40,0.85)] px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] !text-[#e8d5a3]">
            {teacher.specialization}
          </span>
        </div>

        {/* Bio */}
        <p className="mt-4 text-[0.88rem] leading-relaxed text-[#56655e]">
          {teacher.bio}
        </p>

        {/* Info tags */}
        <div className="mt-4 flex flex-col gap-2.5">
          <div className="flex items-center gap-2 text-[0.82rem] text-[#56655e]">
            <Clock className="h-3.5 w-3.5 text-[#C9A227]" />
            <span>{teacher.experienceYears}+ years experience</span>
          </div>
          <div className="flex items-center gap-2 text-[0.82rem] text-[#56655e]">
            <Star className="h-3.5 w-3.5 fill-[#C9A227] text-[#C9A227]" />
            <span className="font-medium text-[#30453c]">Highly Rated</span>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="w-full rounded-full border border-[#0F4C3A] bg-[#0F4C3A] py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.15em] !text-white transition-all duration-300 hover:bg-[#135A46] hover:shadow-lg hover:shadow-[#0F4C3A]/20">
            Book Trial
          </button>
        </div>
      </div>
    </motion.article>
  );
}
