"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/teachers", label: "Teachers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/75 text-[var(--ink)] backdrop-blur"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel absolute inset-x-3 top-[5.1rem] rounded-[32px] p-5 shadow-[0_24px_80px_rgba(18,40,30,0.14)]"
            exit={{ opacity: 0, y: -16 }}
            initial={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)] transition hover:border-[var(--line)] hover:bg-white/70"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button href={siteConfig.whatsapp} onClick={() => setOpen(false)} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
