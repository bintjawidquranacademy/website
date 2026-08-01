"use client";

import { motion } from "framer-motion";
import { ChartNoAxesColumnIncreasing, Clock3, Presentation, UsersRound } from "lucide-react";

const reasons = [
  {
    icon: UsersRound,
    title: "Male & Female Teachers",
    description:
      "Learn comfortably with certified male and female Quran teachers who guide with care.",
  },
  {
    icon: Clock3,
    title: "Flexible Timings",
    description: "Choose lesson times that suit your schedule, including evenings and weekends.",
  },
  {
    icon: Presentation,
    title: "Interactive Classes",
    description: "Engaging live sessions with clear explanations, recitation practice, and feedback.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Progress Tracking",
    description: "Receive clear progress updates so every step of learning stays visible and focused.",
  },
] as const;

export default function WhyChoose() {
  return (
    <section className="bg-[#FAF8F3] py-18 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[#123728] md:text-5xl">
            Excellence in Quran Education
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                className="rounded-[24px] border border-[#eadfcb] bg-[#fdfbf7] p-6 shadow-[0_16px_40px_rgba(17,34,26,0.07)]"
                initial={{ opacity: 0, y: 24 }}
                key={reason.title}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8, scale: 1.01 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f5ecd6] text-[#0F4C3A] shadow-[inset_0_0_0_1px_rgba(212,175,55,0.15)]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-[1.8rem] leading-8 text-[#173d2d]">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-[#5c685f]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
