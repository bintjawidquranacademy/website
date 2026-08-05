"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Calendar,
  User,
  ShieldCheck,
  Star,
  MessageCircle,
  Plus,
  Minus,
  Video,
  Clock,
  ClipboardList,
  Users,
  BookOpen,
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

const slideIn = (direction: "left" | "right", delay = 0) => ({
  initial: { opacity: 0, x: direction === "left" ? -40 : 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const plans = [
  {
    name: "3 Day",
    price: "£48.20/month",
    features: [
      "3 Days a Week",
      "12 Classes a Month",
      "30 Minute Session",
    ]
  },
  {
    name: "4 Day",
    price: "£53.40/month",
    features: [
      "4 Days a Week",
      "16 Classes a Month",
      "30 Minute Session",
    ]
  },
  {
    name: "5 Day",
    price: "£58.50/month",
    features: [
      "5 Days a Week",
      "20 Classes a Month",
      "30 Minute Session",
    ],
    isPopular: true
  },
  {
    name: "6 Day",
    price: "£62.30/month",
    features: [
      "6 Days a Week",
      "24 Classes a Month",
      "30 Minute Session",
    ]
  },
];

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "You meet a teacher, discuss goals, and receive a recommended learning plan before committing.",
  },
  {
    question: "Can we reschedule lessons?",
    answer: "Yes. We offer flexible scheduling and support rescheduling with reasonable notice.",
  },
  {
    question: "Do you offer male and female teachers?",
    answer: "Yes. Families can request male or female teachers based on comfort and preference.",
  },
  {
    question: "Can siblings share one plan?",
    answer: "Each student requires their own dedicated lesson time to ensure one-to-one focus, however, families can schedule siblings back-to-back with the same teacher.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major debit and credit cards, as well as secure bank transfers via our online portal.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PricingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-hidden pb-16 md:pb-24">
      {/* Background Pattern */}
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-[0.02]">
        <div className="h-full w-full bg-[url('/bg-pattern.svg')] bg-repeat" />
      </div>

      {/* ====== HERO SECTION ====== */}
      <section className="page-shell pt-10 md:pt-16 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Content */}
          <motion.div className="space-y-10" {...slideIn("left")}>
            <div className="space-y-6">
              <div className="section-label">PRICING</div>
              <h1 className="font-display text-balance text-4xl leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                Flexible plans for steady Quran progress.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Plans are designed to stay simple: choose the weekly pace that matches your learner’s availability and ambition.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Clear",
                  desc: "Simple and transparent pricing with no complicated structure.",
                },
                {
                  icon: Calendar,
                  title: "Weekly",
                  desc: "Choose a rhythm that supports consistency without overwhelming.",
                },
                {
                  icon: User,
                  title: "Trial",
                  desc: "Meet a teacher first and receive a recommendation before continuing.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex h-full flex-col rounded-[24px] border border-[var(--line)] bg-white/70 p-6 shadow-[0_8px_30px_rgba(18,40,30,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A227]/40 hover:shadow-[0_16px_40px_rgba(18,40,30,0.08)]"
                >
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E] text-white shadow-[0_4px_12px_rgba(15,61,46,0.2)] transition-colors duration-300 group-hover:bg-[#0a291f]">
                    <item.icon className="h-5 w-5 text-[#C9A227]" />
                  </div>
                  <h3 className="mb-2 font-display text-xl text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="text-[0.8rem] leading-relaxed text-[var(--muted)]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative mx-auto mt-8 w-full max-w-[340px] lg:mt-0 lg:mx-0 lg:max-w-none lg:pl-10"
            {...slideIn("right", 0.15)}
          >
            {/* Background glowing orb */}
            <div className="absolute inset-0 -z-10 rounded-full bg-[#C9A227]/10 blur-3xl" />

            <div className="relative flex justify-center lg:justify-end">
              {/* Islamic Arch Image */}
              <motion.div
                className="w-full max-w-[360px] xl:max-w-[420px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[160px] border-4 border-[#FDFBF7] bg-[#FDFBF7] shadow-[0_30px_60px_rgba(18,40,30,0.15)] ring-1 ring-[var(--line)]">
                  <Image
                    src="/about pic.png"
                    alt="Quran on wooden stand with lantern"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/40 via-transparent to-transparent" />
                  
                  {/* Subtle inner gold border */}
                  <div className="absolute inset-2 rounded-t-[152px] border border-[#C9A227]/30" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== PRICING CARDS ====== */}
      <section className="page-shell mt-24 lg:mt-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center">
          {plans.map((plan, i) => {
            const isPopular = plan.isPopular;
            return (
              <motion.article
                key={plan.name}
                {...fadeUp(0.1 * i)}
                whileHover={{ y: -10, scale: isPopular ? 1.03 : 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`relative flex flex-col justify-between rounded-[24px] bg-white transition-all duration-300 ${
                  isPopular
                    ? "border-2 border-[#D4AF37] shadow-[0_25px_60px_rgba(15,76,58,0.18)] z-10 py-2 scale-[1.03]"
                    : "border border-[#EADFCB] shadow-[0_15px_35px_rgba(15,76,58,0.06)] hover:shadow-[0_20px_45px_rgba(15,76,58,0.12)] hover:border-[#D4AF37]"
                }`}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="w-full bg-[#0F4C3A] text-white text-center py-2.5 rounded-t-[20px] font-semibold text-sm tracking-wide shadow-inner">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <h3 className="font-display text-2xl font-bold text-[#0F4C3A]">
                    {plan.name} Plan
                  </h3>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-extrabold text-[#0F4C3A]">
                      {plan.price.split('/')[0]}
                    </span>
                    <span className="text-sm font-medium text-[#5A6E65]">
                      /{plan.price.split('/')[1] || "month"}
                    </span>
                  </div>

                  {/* Feature List */}
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-[#0F4C3A] font-medium">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 stroke-[3]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Action */}
                <div className="p-8 pt-0">
                  <Link
                    href="/free-trial"
                    className={`group w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isPopular
                        ? "bg-[#0F4C3A] !text-white hover:bg-[#135A46] shadow-lg shadow-[#0F4C3A]/20"
                        : "bg-[#FAF8F3] text-[#0F4C3A] border border-[#D4AF37]/50 hover:bg-[#0F4C3A] hover:!text-white hover:border-[#0F4C3A]"
                    }`}
                  >
                    <span className={isPopular ? "!text-white" : "group-hover:!text-white"}>Get Started</span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ====== COMPARISON STRIP ====== */}
      <section className="page-shell mt-16 md:mt-24">
        <motion.div 
          className="rounded-[24px] border border-[#C9A227]/20 bg-[linear-gradient(90deg,rgba(255,255,255,0.6),rgba(253,251,247,0.9))] p-6 shadow-sm md:p-8"
          {...fadeUp(0.2)}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Video, text: "One-to-One Classes" },
              { icon: Clock, text: "Flexible Scheduling" },
              { icon: ClipboardList, text: "Progress Reports" },
              { icon: Users, text: "Qualified Teachers" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E]/5">
                  <item.icon className="h-5 w-5 text-[#C9A227]" />
                </div>
                <span className="text-[0.85rem] font-bold uppercase tracking-wider text-[var(--ink)]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="page-shell mt-24 md:mt-32">
        <motion.div 
          className="mx-auto max-w-4xl rounded-[32px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,252,245,0.7))] p-8 shadow-[0_20px_50px_rgba(18,40,30,0.06)] backdrop-blur-md md:p-12 lg:p-16"
          {...fadeUp(0.1)}
        >
          <h2 className="mb-10 text-center font-display text-3xl text-[var(--ink)] md:text-4xl">
            Frequently asked questions
          </h2>
          
          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`overflow-hidden rounded-[20px] border bg-white transition-all duration-300 hover:border-[#C9A227]/40 hover:shadow-md ${
                  openFaq === i ? "border-[#C9A227]/40 shadow-md" : "border-[var(--line)]"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${openFaq === i ? "bg-[#0F3D2E] text-white" : "bg-[#0F3D2E]/5 text-[#0F3D2E]"}`}>
                      {openFaq === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                    <span className="text-[0.85rem] font-bold uppercase tracking-wider text-[var(--ink)]">
                      {faq.question}
                    </span>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
                        <p className="text-[0.95rem] leading-relaxed text-[var(--muted)]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="page-shell mt-24 md:mt-32">
        <motion.div
          className="relative overflow-hidden rounded-[32px] bg-[#0F4C3A] border-2 border-[#D4AF37]/60 text-white px-8 py-16 shadow-[0_30px_70px_rgba(15,76,58,0.25)] text-center md:px-12 md:py-24 lg:px-20"
          {...fadeUp(0.2)}
        >
          {/* Subtle Islamic Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Center Content Area */}
          <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#D4AF37] backdrop-blur-md shadow-lg border border-white/5">
              <Star className="h-8 w-8" />
            </div>

            <h2 className="mb-6 font-display text-4xl text-white sm:text-5xl md:text-6xl">
              Start Your Quran Journey Today
            </h2>

            <p className="mb-12 max-w-xl text-base leading-relaxed text-gray-200 md:text-lg">
              Take the first step towards beautiful recitation and deep understanding. Meet a teacher for free and discover the right path for your family.
            </p>

            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:w-auto">
              <Link
                href="/free-trial"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-10 py-5 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#0F4C3A] shadow-xl shadow-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e2bf58] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)]"
              >
                <BookOpen className="h-4 w-4" />
                <span>Book Free Trial</span>
              </Link>
              <Link
                href="https://wa.me/923259839004"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-full bg-white/10 border border-white/20 px-10 py-5 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Talk to an Advisor</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
