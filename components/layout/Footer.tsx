import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, Facebook, Instagram, Youtube, Music } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { courseList } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative bg-[#082E23] text-white pt-16 pb-8 border-t border-[#D4AF37]/30 overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#0F4C3A] via-[#082E23] to-[#041B14] opacity-95 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* 4-Column Grid matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Bio (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#D4AF37]/40 shadow-[0_4px_16px_rgba(212,175,55,0.15)]">
                <Image
                  src="/logo.png"
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                {siteConfig.shortName} <span className="text-[#D4AF37] block text-xs tracking-[0.3em] font-sans font-medium">INTERNATIONAL QURAN ACADEMY</span>
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed max-w-sm">
              Guiding hearts, illuminating minds through the timeless teachings of the Quran. Online private 1-on-1 classes for kids & adults worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.facebook && (
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F4C3A] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F4C3A] transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F4C3A] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F4C3A] transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.tiktok && (
                <a
                  href={siteConfig.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F4C3A] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F4C3A] transition-all duration-300"
                >
                  <Music className="w-4 h-4" />
                </a>
              )}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F4C3A] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F4C3A] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/teachers" className="hover:text-[#D4AF37] transition-colors">Our Teachers</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#D4AF37] transition-colors">Courses</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#D4AF37] transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#D4AF37] transition-colors">Resources</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Courses */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold text-[#D4AF37]">Our Courses</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {courseList.map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`} className="hover:text-[#D4AF37] transition-colors">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold text-[#D4AF37]">Contact Us</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#D4AF37] transition-colors truncate">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#D4AF37] transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors">WhatsApp support</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Small Gold Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent my-6" />

        {/* Bottom Copyright Bar */}
        <div className="text-center text-xs text-gray-400 font-sans">
          <p>© 2026 {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
