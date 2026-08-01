"use client";

import { motion, type Variants } from "framer-motion";
import { Star, ArrowRight, Award, Languages, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { teacherList } from "@/lib/content";

const teachers = teacherList.slice(0, 4);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Teachers() {
  return (
    <section className="bg-[#FAF8F3] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header Section with Title & Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20">
              Meet Our Teachers
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-[#0F4C3A] tracking-tight">
              Learn from Certified & Experienced Scholars
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/teachers"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0F4C3A] !text-white font-medium text-sm border border-[#D4AF37]/30 shadow-[0_10px_25px_rgba(15,76,58,0.18)] transition-all duration-300 hover:bg-[#135A46] hover:border-[#D4AF37] hover:shadow-[0_15px_30px_rgba(15,76,58,0.3)] hover:-translate-y-0.5 group"
            >
              View All Teachers
              <ArrowRight className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Teachers Cards Grid */}
        <motion.div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {teachers.map((teacher) => (
            <motion.article
              key={teacher.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-white border border-[#EADFCB] p-6 shadow-[0_15px_35px_rgba(15,76,58,0.06)] hover:shadow-[0_25px_50px_rgba(15,76,58,0.15)] hover:border-[#D4AF37] transition-all duration-300"
            >
              <div>
                {/* Blank Photo Header */}
                <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-[#FAF8F3]">
                  {/* Image removed as requested, remaining blank */}
                </div>

                {/* Teacher Details */}
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-[#0F4C3A] group-hover:text-[#D4AF37] transition-colors duration-300">
                      {teacher.name}
                    </h3>
                  </div>

                  {/* Experience */}
                  <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-md w-fit">
                    <Award className="w-3.5 h-3.5" />
                    <span>{teacher.experienceYears}+ Years Experience</span>
                  </div>

                  {/* Specialization */}
                  <div className="mt-4 flex items-start gap-2 text-xs text-[#5A6E65]">
                    <GraduationCap className="w-4 h-4 text-[#0F4C3A] shrink-0 mt-0.5" />
                    <span className="line-clamp-1 font-medium">{teacher.specialization}</span>
                  </div>

                  {/* Languages */}
                  <div className="mt-2.5 flex items-center gap-2 text-xs text-[#5A6E65]">
                    <Languages className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                    <span className="font-medium">{teacher.languages.join(", ")}</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-[#EADFCB]/60 flex items-center justify-between text-xs font-semibold text-[#0F4C3A] group-hover:text-[#D4AF37] transition-colors">
                <span>Book Trial Class</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
