"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BookOpen, MessageCircle } from "lucide-react";
import MobileMenu from "@/components/layout/MobileMenu";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/teachers", label: "Teachers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="page-shell">
        <div className="flex items-center justify-between rounded-full border border-[#ece2c8] bg-[linear-gradient(180deg,rgba(255,252,245,0.96),rgba(251,247,237,0.92))] px-4 py-2.5 shadow-[0_14px_40px_rgba(25,43,34,0.08)] backdrop-blur md:px-5">
          <Link className="flex items-center gap-3.5" href="/">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>
            <div className="hidden min-[380px]:block">
              <p className="font-display text-[1.5rem] leading-none text-[#173d31]">
                {siteConfig.shortName}
              </p>
              <p className="mt-1 text-[0.52rem] font-bold uppercase tracking-[0.34em] text-[#C9A227]">
                International Quran Academy
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              
              return (
                <Link
                  className={`text-[0.66rem] font-bold uppercase tracking-[0.22em] transition-colors duration-300 ${
                    isActive
                      ? "!text-[#C9A227]"
                      : "!text-[#54645d] hover:!text-[#0f4d3a]"
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#14523f] bg-[linear-gradient(180deg,#0f5b45,#0d4635)] px-6 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_12px_28px_rgba(15,77,58,0.18)] transition duration-300 hover:-translate-y-0.5"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-3.5 w-3.5 text-[#C9A227]" />
              <span className="!text-white">WhatsApp</span>
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
