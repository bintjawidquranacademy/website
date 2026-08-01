"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const resources: ResourceItem[] = [
  {
    id: "1",
    title: "Noorani Qaida PDF Book",
    description: "Learn the basic Arabic alphabet and reading rules for correct Quranic pronunciation.",
    image: "/noorni.png",
    href: "/resources/noorani-qaidah",
  },
  {
    id: "2",
    title: "Madani Qaida",
    description: "Primary Qaidah for reciting the Holy Quran with the correct pronunciation.",
    image: "/madni.png",
    href: "/resources/tajweed-guide",
  },
  {
    id: "3",
    title: "Color Coded Quran",
    description: "Read the Holy Quran with color-coded Tajweed rules to improve your recitation.",
    image: "/quran.png",
    href: "/resources/quran-reading-book",
  },
  {
    id: "4",
    title: "Six Kalimas of Islam",
    description: "Learn the six Kalimas of Islam with Arabic text, translation, and pronunciation.",
    image: "/kalma.png",
    href: "/resources/duas-supplications",
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Resources() {
  return (
    <section className="bg-[#FAF8F3] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20">
              LEARNING RESOURCES
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F4C3A] leading-tight">
              Useful Islamic learning resources that keep practice flowing at home.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#D4AF37]/50 text-[#0F4C3A] font-semibold text-xs shadow-sm hover:bg-[#0F4C3A] hover:text-white hover:border-[#0F4C3A] transition-all duration-300 group"
            >
              View All Resources
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-white transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Resources Grid matching Reference Image */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {resources.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex flex-col justify-between rounded-[24px] bg-white border border-[#EADFCB] p-6 shadow-[0_12px_30px_rgba(15,76,58,0.05)] hover:shadow-[0_20px_40px_rgba(15,76,58,0.12)] hover:border-[#D4AF37] transition-all duration-300"
            >
              <div>
                {/* Book Cover Image */}
                <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#FAF8F3] flex items-center justify-center p-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="font-display text-xl font-bold text-[#0F4C3A] group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-[#5A6E65] leading-relaxed font-sans line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="mt-6 pt-4 border-t border-[#EADFCB]/50 flex items-center gap-1.5 text-xs font-semibold text-[#0F4C3A] group-hover:text-[#D4AF37] transition-colors">
                <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-auto transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
