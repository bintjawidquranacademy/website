"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  review: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sumera K.",
    country: "United Kingdom",
    flag: "🇬🇧",
    review:
      "The teachers are amazing and so patient! My Tajweed and recitation have improved dramatically within just three months of one-on-one sessions.",
  },
  {
    id: "2",
    name: "Omar R.",
    country: "Canada",
    flag: "🇨🇦",
    review:
      "Flexible schedule and personalized lessons fit perfectly into my busy working routine. The progress reports keep me consistently accountable.",
  },
  {
    id: "3",
    name: "Ayesha L.",
    country: "Australia",
    flag: "🇦🇺",
    review:
      "Alhamdulillah, my 7-year-old daughter completed her Noorani Qaida with Ustadha Fatima. She now reads the Quran with pure joy and correct Makharij.",
  },
  {
    id: "4",
    name: "Tariq Mansoor",
    country: "United States",
    flag: "🇺🇸",
    review:
      "The structured Hifz program combined with weekly revision trackers helped me memorize Surah Al-Baqarah seamlessly. Highly recommended!",
  },
  {
    id: "5",
    name: "Zainab Bint Ali",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    review:
      "Assigned an exceptionally qualified female scholar for my sister. Polite staff, punctual classes, and a truly spiritual learning atmosphere.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = testimonialsData.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Get current window of 3 cards (wraps around)
  const visibleTestimonials = [
    testimonialsData[currentIndex % total],
    testimonialsData[(currentIndex + 1) % total],
    testimonialsData[(currentIndex + 2) % total],
  ];

  return (
    <section className="relative bg-[#0F4C3A] text-white pt-20 pb-32 overflow-hidden">
      {/* Background Decorative Pattern & Light Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#135A46] via-[#0F4C3A] to-[#0A382B] opacity-90" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header & Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] bg-[#D4AF37]/15 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
              What Our Students Say
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Testimonials From Around The World
            </h2>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <button
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#135A46]/80 text-[#D4AF37] backdrop-blur-md transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0F4C3A] hover:scale-105 active:scale-95 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#135A46]/80 text-[#D4AF37] backdrop-blur-md transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0F4C3A] hover:scale-105 active:scale-95 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        </div>

        {/* Testimonials Slide Area */}
        <div className="mt-14 min-h-[290px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              {visibleTestimonials.map((item, idx) => (
                <motion.article
                  key={`${item.id}-${idx}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative flex flex-col justify-between rounded-[24px] bg-[#135A46]/60 border border-[#D4AF37]/30 p-8 backdrop-blur-md shadow-[0_20px_45px_rgba(0,0,0,0.25)] hover:border-[#D4AF37] hover:bg-[#135A46]/90 transition-all duration-300 group"
                >
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-[#D4AF37]/15 group-hover:text-[#D4AF37]/30 transition-colors" />

                  <div>
                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1.5 text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="mt-5 text-sm sm:text-base text-gray-100 font-sans leading-relaxed italic">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  {/* Student Details */}
                  <div className="mt-8 pt-5 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#D4AF37]/90 font-medium">Verified Student</p>
                    </div>

                    {/* Flag & Country */}
                    <div className="flex items-center gap-1.5 bg-[#0F4C3A]/80 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 text-xs">
                      <span className="text-sm">{item.flag}</span>
                      <span className="text-gray-200 font-medium">{item.country}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex justify-center items-center gap-2.5">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-[#D4AF37]" : "w-2.5 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Premium Curved Gold Divider at Bottom */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FAF8F3]"
        >
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,-20 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>
    </section>
  );
}
