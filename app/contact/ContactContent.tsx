"use client";


import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Globe,
  Phone,
  Headset,
  Clock,
  BookOpen,
  Instagram,
  Facebook,
  Music
} from "lucide-react";

import { siteConfig } from "@/lib/site";

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
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactContent() {

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
              <div className="section-label">CONTACT</div>
              <h1 className="font-display text-balance text-4xl leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                Speak to the academy team.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Ask about courses, teacher recommendations, schedules, or anything else you need before joining. Our team is ready to guide you.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  desc: "Fast support for families who prefer a quick conversation.",
                },
                {
                  icon: Mail,
                  title: "Email",
                  desc: "Thoughtful replies for course guidance, enrollment, and logistics.",
                },
                {
                  icon: Globe,
                  title: "Online",
                  desc: "Serving families across the UK, North America, and beyond.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex h-full flex-col rounded-[24px] border border-[var(--line)] bg-white/70 p-6 shadow-[0_8px_30px_rgba(18,40,30,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A227]/40 hover:shadow-[0_16px_40px_rgba(18,40,30,0.08)]"
                >
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E] text-white shadow-[0_4px_12px_rgba(15,61,46,0.2)] transition-colors duration-300 group-hover:bg-[#0a291f]">
                    <item.icon className="h-5 w-5 text-[#C9A227]" />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="text-[0.8rem] leading-[1.6] text-[var(--muted)]">
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

      {/* ====== CONTACT SECTION ====== */}
      <section className="page-shell mt-24 lg:mt-32">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            className="grid gap-8 lg:grid-cols-2 lg:gap-12"
            {...fadeUp(0.1)}
          >
            {/* Contact Details */}
            <div className="flex flex-col space-y-8">
              <div className="flex-1 rounded-[32px] border border-[var(--line)] bg-white/70 p-8 shadow-[0_20px_50px_rgba(18,40,30,0.04)] backdrop-blur-xl md:p-10 lg:p-12">
                <h2 className="mb-4 font-display text-3xl text-[var(--ink)]">
                  Contact details
                </h2>
                {/* Gold divider */}
                <div className="mb-10 flex w-16 items-center gap-1">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C9A227] to-transparent" />
                  <div className="h-1 w-1 rotate-45 border border-[#C9A227]" />
                </div>

                <div className="flex flex-col">
                  {[
                    { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
                    { icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                    { icon: MessageCircle, label: "WhatsApp support", href: siteConfig.whatsapp },
                    { icon: Globe, label: "Online: Serving families across the UK, North America, and beyond." },
                  ].map((item, i) => (
                    <div key={i} className="group relative flex items-center gap-5 border-b border-[var(--line)] py-6 last:border-0 hover:bg-[#0F3D2E]/[0.02] -mx-6 px-6 transition-colors rounded-xl">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[var(--line)] transition-transform duration-300 group-hover:scale-110 group-hover:ring-[#C9A227]/40">
                        <item.icon className="h-5 w-5 text-[#0F3D2E] transition-colors group-hover:text-[#C9A227]" />
                      </div>
                      {item.href ? (
                        <a href={item.href} className="text-[0.95rem] leading-relaxed text-[var(--muted)] transition-colors hover:text-[#C9A227]">
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-[0.95rem] leading-relaxed text-[var(--muted)]">
                          {item.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="relative overflow-hidden rounded-[24px] border border-[#C9A227]/30 bg-[#FDFBF7] p-8 shadow-sm">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#C9A227]/10 blur-2xl" />
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0F3D2E] text-[#C9A227] shadow-md">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-[var(--ink)]">Need immediate assistance?</h4>
                    <p className="mt-1 text-[0.85rem] text-[var(--muted)]">Available on WhatsApp every day.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Details */}
            <div className="flex flex-col space-y-8">
              <div className="flex-1 rounded-[32px] border border-[var(--line)] bg-white/70 p-8 shadow-[0_20px_50px_rgba(18,40,30,0.04)] backdrop-blur-xl md:p-10 lg:p-12">
                <h2 className="mb-4 font-display text-3xl text-[var(--ink)]">
                  Socials
                </h2>
                {/* Gold divider */}
                <div className="mb-10 flex w-16 items-center gap-1">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C9A227] to-transparent" />
                  <div className="h-1 w-1 rotate-45 border border-[#C9A227]" />
                </div>

                <div className="flex flex-col">
                  {[
                    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/bintjawid?utm_source=qr&igsh=N2FvMG82cDVuMGtk" },
                    { icon: Music, label: "TikTok", href: "https://tiktok.com/@bintjawidquranacademy" },
                    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/198mz8jn3P/" },
                  ].map((item, i) => (
                    <div key={i} className="group relative flex items-center gap-5 border-b border-[var(--line)] py-6 last:border-0 hover:bg-[#0F3D2E]/[0.02] -mx-6 px-6 transition-colors rounded-xl">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[var(--line)] transition-transform duration-300 group-hover:scale-110 group-hover:ring-[#C9A227]/40">
                        <item.icon className="h-5 w-5 text-[#0F3D2E] transition-colors group-hover:text-[#C9A227]" />
                      </div>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[0.95rem] leading-relaxed text-[var(--muted)] transition-colors hover:text-[#C9A227]">
                        {item.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== HELP CTA SECTION ====== */}
      <section className="page-shell mt-24 md:mt-32">
        <motion.div
          className="relative overflow-hidden rounded-[32px] bg-[#0F4C3A] border-2 border-[#D4AF37]/60 text-white px-8 py-16 shadow-[0_30px_70px_rgba(15,76,58,0.25)] text-center md:px-12 md:py-24 lg:px-20"
          {...fadeUp(0.3)}
        >
          {/* Subtle Islamic Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-12 lg:flex-row lg:justify-between lg:text-left">
            <div className="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#C9A227] backdrop-blur-md shadow-lg border border-white/5">
                <Headset className="h-8 w-8" />
              </div>
              <h2 className="mb-6 font-display text-4xl text-white sm:text-5xl md:text-5xl lg:max-w-md">
                We&apos;re here to help you begin with confidence.
              </h2>
              <div className="mb-6 flex w-16 items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A227] lg:bg-gradient-to-l" />
                <div className="h-1.5 w-1.5 rotate-45 border border-[#C9A227]" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A227] lg:bg-gradient-to-r" />
              </div>
              <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Our team is ready to guide you, answer your questions, and help your family start the best learning journey.
              </p>
            </div>

            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:w-auto lg:shrink-0 lg:flex-col xl:flex-row">
              <Link
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-10 py-5 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#0F4C3A] shadow-xl shadow-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e2bf58] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
