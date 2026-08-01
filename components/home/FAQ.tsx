"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "How can I start learning at the academy?",
    answer:
      "Simply fill out our short free trial form. Our team will contact you to confirm your preferred schedule and match you with a certified teacher for your trial session.",
  },
  {
    id: "2",
    question: "What age group can join?",
    answer:
      "We welcome learners of all ages! We have dedicated beginner courses for children (starting from age 4), structured programs for teens, and customized one-on-one tracks for adult brothers and sisters.",
  },
  {
    id: "3",
    question: "Are the classes really one-to-one?",
    answer:
      "Yes, 100% of our regular classes are private, interactive 1-on-1 sessions conducted live over video call, ensuring personalized attention and real-time pronunciation correction.",
  },
  {
    id: "4",
    question: "Do you offer certificates?",
    answer:
      "Yes! Upon successfully completing any course level (Noorani Qaida, Tajweed Mastery, or Hifz), students undergo evaluation and receive an official Academy Certificate.",
  },
  {
    id: "5",
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a completely free, no-obligation trial class so you can evaluate the teaching quality and online platform experience before subscribing.",
  },
  {
    id: "6",
    question: "Can I choose my teacher & payment methods?",
    answer:
      "Absoutely. You can request male or female instructors and select times that suit your timezone. We accept all major credit cards, PayPal, and online banking.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#FAF8F3] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header Section with Subtitle & View All Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-[#0F4C3A]">
              Have questions? We&apos;ve got answers.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#D4AF37]/50 text-[#0F4C3A] font-semibold text-xs shadow-sm hover:bg-[#0F4C3A] hover:text-white hover:border-[#0F4C3A] transition-all duration-300 group"
            >
              View All FAQs
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-white transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* 2-Column Accordion Grid matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-[20px] bg-white border border-[#EADFCB] shadow-[0_6px_20px_rgba(15,76,58,0.04)] overflow-hidden transition-all duration-300 hover:border-[#D4AF37]"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#0F4C3A] pr-4">
                    {faq.question}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3] text-[#0F4C3A] transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[#D4AF37]" />
                    ) : (
                      <Plus className="h-4 w-4 text-[#0F4C3A]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#5A6E65] leading-relaxed border-t border-[#EADFCB]/40">
                        <p className="mt-3">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
