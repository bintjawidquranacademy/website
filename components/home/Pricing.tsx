"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { pricingPlans } from "@/data/pricing";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function Pricing() {
  const [activeFilter, setActiveFilter] = useState<"all" | "30min" | "60min">("all");

  const filteredPlans = pricingPlans.filter((plan) => {
    if (activeFilter === "all") return true;
    return plan.category === activeFilter;
  });

  return (
    <section className="bg-[#FAF8F3] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              PRICING PLANS
            </span>
            <span className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-[#0F4C3A]">
            Affordable Plans For Every Learner
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A6E65]">
            Choose the pace and session duration that best matches your family’s routine.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap justify-center rounded-full bg-white p-1.5 border border-[#EADFCB] shadow-sm gap-1">
            <button
              onClick={() => setActiveFilter("all")}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-[#0F4C3A] text-white shadow-sm"
                  : "text-[#5A6E65] hover:text-[#0F4C3A]"
              }`}
            >
              All Plans (9)
            </button>
            <button
              onClick={() => setActiveFilter("30min")}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === "30min"
                  ? "bg-[#0F4C3A] text-white shadow-sm"
                  : "text-[#5A6E65] hover:text-[#0F4C3A]"
              }`}
            >
              30 Min Sessions
            </button>
            <button
              onClick={() => setActiveFilter("60min")}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === "60min"
                  ? "bg-[#0F4C3A] text-white shadow-sm"
                  : "text-[#5A6E65] hover:text-[#0F4C3A]"
              }`}
            >
              1 Hour Sessions (x2)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          key={activeFilter}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPlans.map((plan) => {
            const whatsappUrl = `${siteConfig.whatsapp}?text=${encodeURIComponent(
              `Salam, I would like to enroll in ${plan.name} (${plan.price}/month).`
            )}`;

            return (
              <motion.article
                key={plan.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative flex flex-col justify-between rounded-[24px] bg-white border border-[#EADFCB] shadow-[0_15px_35px_rgba(15,76,58,0.06)] hover:shadow-[0_20px_45px_rgba(15,76,58,0.12)] hover:border-[#D4AF37] transition-all duration-300"
              >
                <div className="p-7 sm:p-8 flex-1 flex flex-col">
                  {/* Badge & Title */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-2xl font-bold text-[#0F4C3A]">
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FAF8F3] text-[#0F4C3A] border border-[#D4AF37]/50 shrink-0">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#0F4C3A]">
                        {plan.price}
                      </span>
                      <span className="text-sm font-medium text-[#5A6E65]">
                        {plan.billing}
                      </span>
                    </div>
                    <span className="block text-xs font-medium text-[#8A9B93] mt-1">
                      Every month
                    </span>
                  </div>

                  {/* Feature List */}
                  <ul className="mt-6 space-y-3.5 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-[#0F4C3A] font-medium">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 stroke-[3]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Action */}
                <div className="p-7 sm:p-8 pt-0">
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full text-sm font-semibold transition-all duration-300 bg-[#FAF8F3] text-[#0F4C3A] border border-[#D4AF37]/50 hover:bg-[#0F4C3A] hover:!text-white hover:border-[#0F4C3A]"
                  >
                    <span className="group-hover:!text-white">
                      WhatsApp
                    </span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
