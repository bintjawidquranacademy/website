"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function CTA() {
  return (
    <section className="bg-[#FAF8F3] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative overflow-hidden rounded-[32px] bg-[#0F4C3A] border-2 border-[#D4AF37]/60 text-white p-8 sm:p-12 md:p-16 shadow-[0_30px_70px_rgba(15,76,58,0.25)] text-center"
        >
          {/* Subtle Islamic Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Left Decorative Islamic Arch Silhouette matching Reference */}
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 lg:w-64 opacity-25 pointer-events-none hidden md:block">
            <svg
              viewBox="0 0 200 400"
              fill="none"
              className="h-full w-full stroke-[#D4AF37]"
              strokeWidth="1.5"
            >
              <path d="M 0 400 L 0 100 Q 100 0 200 100 L 200 400 Z" fill="rgba(212,175,55,0.08)" />
              <circle cx="100" cy="120" r="30" />
              <path d="M 50 180 Q 100 120 150 180" />
            </svg>
          </div>

          {/* Right Decorative Islamic Arch Silhouette matching Reference */}
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 lg:w-64 opacity-25 pointer-events-none hidden md:block">
            <svg
              viewBox="0 0 200 400"
              fill="none"
              className="h-full w-full stroke-[#D4AF37]"
              strokeWidth="1.5"
            >
              <path d="M 200 400 L 200 100 Q 100 0 0 100 L 0 400 Z" fill="rgba(212,175,55,0.08)" />
              <circle cx="100" cy="120" r="30" />
              <path d="M 50 180 Q 100 120 150 180" />
            </svg>
          </div>

          {/* Center Content Area */}
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transform Your Quran Learning</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to Begin Your Quran Journey?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-200 font-sans max-w-xl mx-auto leading-relaxed">
              Join thousands of students worldwide and start learning with confidence! Contact us on WhatsApp to get started.
            </p>

            {/* Buttons matching reference */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D4AF37] text-[#0F4C3A] font-bold text-sm shadow-xl shadow-[#D4AF37]/20 hover:bg-[#e2bf58] hover:scale-105 transition-all duration-300 group"
              >
                <span>WhatsApp</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
