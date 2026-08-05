"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

interface Plan {
  id: string;
  name: string;
  price: string;
  billing: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

const plans: Plan[] = [
  {
    id: "3day",
    name: "3 Day Plan",
    price: "£48.20",
    billing: "/month",
    features: [
      "3 Days a Week",
      "12 Classes a Month",
      "30 Minute Session",
    ],
    ctaText: "Get Started",
    ctaHref: "/free-trial",
  },
  {
    id: "4day",
    name: "4 Day Plan",
    price: "£53.40",
    billing: "/month",
    features: [
      "4 Days a Week",
      "16 Classes a Month",
      "30 Minute Session",
    ],
    ctaText: "Get Started",
    ctaHref: "/free-trial",
  },
  {
    id: "5day",
    name: "5 Day Plan",
    price: "£58.50",
    billing: "/month",
    popular: true,
    features: [
      "5 Days a Week",
      "20 Classes a Month",
      "30 Minute Session",
    ],
    ctaText: "Get Started",
    ctaHref: "/free-trial",
  },
  {
    id: "6day",
    name: "6 Day Plan",
    price: "£62.30",
    billing: "/month",
    features: [
      "6 Days a Week",
      "24 Classes a Month",
      "30 Minute Session",
    ],
    ctaText: "Get Started",
    ctaHref: "/free-trial",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export default function Pricing() {
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
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: plan.popular ? 1.03 : 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`relative flex flex-col justify-between rounded-[24px] bg-white transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-[#D4AF37] shadow-[0_25px_60px_rgba(15,76,58,0.18)] z-10 py-2 scale-[1.03]"
                  : "border border-[#EADFCB] shadow-[0_15px_35px_rgba(15,76,58,0.06)] hover:shadow-[0_20px_45px_rgba(15,76,58,0.12)] hover:border-[#D4AF37]"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="w-full bg-[#0F4C3A] text-white text-center py-2.5 rounded-t-[20px] font-semibold text-sm tracking-wide shadow-inner">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <h3 className="font-display text-2xl font-bold text-[#0F4C3A]">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-extrabold text-[#0F4C3A]">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-[#5A6E65]">
                    {plan.billing}
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
                  href={plan.ctaHref}
                  className={`group w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#0F4C3A] !text-white hover:bg-[#135A46] shadow-lg shadow-[#0F4C3A]/20"
                      : "bg-[#FAF8F3] text-[#0F4C3A] border border-[#D4AF37]/50 hover:bg-[#0F4C3A] hover:!text-white hover:border-[#0F4C3A]"
                  }`}
                >
                  <span className={plan.popular ? "!text-white" : "group-hover:!text-white"}>{plan.ctaText}</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
