"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, ShieldCheck, UserCheck, CalendarDays } from "lucide-react";
import TrialBookingForm from "@/components/forms/TrialBookingForm";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeScale = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const steps = [
  {
    icon: UserCheck,
    step: "Step 1",
    title: "Details",
    description: "Tell us about the learner, preferred time, and course interest.",
  },
  {
    icon: CalendarCheck,
    step: "Step 2",
    title: "Match",
    description: "We suggest the right teacher and structure for the learner's level.",
  },
  {
    icon: ShieldCheck,
    step: "Step 3",
    title: "Clarity",
    description: "You leave the session knowing the best next step with confidence.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FreeTrialContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="overflow-hidden pb-14 md:pb-24">
      {/* ============================================================ */}
      {/*  HERO SECTION                                                 */}
      {/* ============================================================ */}
      <section className="relative px-4 pt-10 md:px-6 md:pt-14 lg:pt-16">
        {/* Background ornaments */}
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[rgba(200,155,60,0.08)] blur-[100px]" />
        <div className="absolute -left-20 top-40 h-56 w-56 rounded-full bg-[rgba(15,77,58,0.06)] blur-[80px]" />

        <div className="mx-auto max-w-[1240px]">
          <div className="relative overflow-hidden rounded-[40px] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,252,245,0.6))] px-6 py-10 shadow-[0_26px_90px_rgba(18,40,30,0.08)] backdrop-blur md:px-10 md:py-14 lg:px-14">
            {/* Top gold line */}
            <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(200,155,60,0.72),transparent)]" />
            <div className="absolute -right-18 top-8 h-44 w-44 rounded-full bg-[rgba(200,155,60,0.14)] blur-3xl" />
            <div className="absolute -left-12 bottom-8 h-36 w-36 rounded-full bg-[rgba(15,77,58,0.09)] blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start">
              {/* Left Column */}
              <div className="space-y-8">
                <motion.div {...fadeUp(0)} className="space-y-5">
                  <div className="section-label">Free Trial</div>
                  <h1 className="font-display text-balance text-5xl leading-[0.96] text-[#13281f] md:text-7xl">
                    Book your first lesson.
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-[#56655e] md:text-lg md:leading-relaxed">
                    Share your learner&apos;s details, preferred time, and course
                    interest. We will recommend the best teacher match and next step.
                  </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {steps.map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      {...fadeUp(0.1 + i * 0.08)}
                      className="group relative rounded-[20px] border border-[rgba(15,77,58,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,252,245,0.68))] p-5 shadow-[0_8px_30px_rgba(20,40,30,0.06)] backdrop-blur-md transition-all duration-400 hover:-translate-y-0.5 hover:border-[rgba(200,155,60,0.3)] hover:shadow-[0_16px_50px_rgba(20,40,30,0.1)]"
                    >
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(15,77,58,0.08)]">
                        <feature.icon className="h-5 w-5 text-[#0F4C3A]" />
                      </div>
                      <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-1">{feature.step}</div>
                      <h3 className="font-display text-lg text-[#13281f]">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-[0.82rem] leading-relaxed text-[#56655e]">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column — Islamic Arch Image */}
              <motion.div
                {...fadeScale(0.15)}
                className="relative hidden lg:block"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-[rgba(200,155,60,0.2)] shadow-[0_20px_60px_rgba(20,40,30,0.12)]">
                  {/* Gold arch outline */}
                  <div className="absolute inset-0 z-10 rounded-[28px] ring-2 ring-inset ring-[rgba(200,155,60,0.15)]" />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/about pic.png"
                      alt="Islamic study room"
                      width={400}
                      height={480}
                      className="h-[440px] w-full object-cover"
                      priority
                    />
                  </motion.div>
                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[rgba(250,249,244,0.9)] to-transparent" />
                </div>

                {/* Decorative orbs */}
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[rgba(200,155,60,0.12)] blur-2xl" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[rgba(15,77,58,0.1)] blur-xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FORM SECTION                                                 */}
      {/* ============================================================ */}
      <section className="relative px-4 pt-10 md:px-6 md:pt-12">
        <div className="mx-auto max-w-[1240px]">
          {isSubmitted ? (
            <motion.div 
              className="relative w-full overflow-hidden rounded-[36px] shadow-[0_20px_60px_rgba(15,77,58,0.15)] bg-white"
              {...fadeUp(0.1)}
            >
              <Image
                src="/after form.png"
                alt="Thank you – our team will contact you shortly"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
          ) : (
            <motion.div
              {...fadeUp(0.1)}
              className="relative overflow-hidden rounded-[36px] border border-[rgba(15,77,58,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,252,245,0.7))] p-6 shadow-[0_20px_60px_rgba(20,40,30,0.08)] backdrop-blur-xl md:p-12 lg:p-16"
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0F4C3A 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <div className="mb-10 flex items-center gap-4 border-b border-[rgba(200,155,60,0.2)] pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(200,155,60,0.1)]">
                  <CalendarDays className="h-6 w-6 text-[#C9A227]" />
                </div>
                <h2 className="font-display text-3xl leading-tight text-[#13281f] md:text-4xl">
                  Trial booking form
                </h2>
              </div>
              
              <TrialBookingForm onSuccess={() => setIsSubmitted(true)} />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
