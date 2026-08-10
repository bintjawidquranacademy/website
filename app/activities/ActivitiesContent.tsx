"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Palette, Search, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ------------------------------------------------------------------ */
/*  Activities data                                                    */
/* ------------------------------------------------------------------ */

interface Activity {
  src: string;
  title: string;
  category: string;
}

const activities: Activity[] = [
  // Duas & Prayers
  { src: "/activities/7_short_duas.png", title: "7 Short Duas", category: "Duas & Prayers" },
  { src: "/activities/daily_duas_for_kids.png", title: "Daily Duas for Kids", category: "Duas & Prayers" },
  { src: "/activities/islamic_duas_for_kids.png", title: "Islamic Duas for Kids", category: "Duas & Prayers" },
  { src: "/activities/duas_for_knowledge.png", title: "Duas for Knowledge", category: "Duas & Prayers" },
  { src: "/activities/dua_for_waking_up.png", title: "Dua for Waking Up", category: "Duas & Prayers" },
  { src: "/activities/dua_bathroom.png", title: "Dua for Bathroom", category: "Duas & Prayers" },
  { src: "/activities/dua_is_the_key.png", title: "Dua Is the Key", category: "Duas & Prayers" },
  { src: "/activities/morning_askar.png", title: "Morning Adhkar", category: "Duas & Prayers" },
  { src: "/activities/after_a_sneeze.png", title: "After a Sneeze", category: "Duas & Prayers" },
  { src: "/activities/five_prayers_nursery.png", title: "Five Prayers Nursery", category: "Duas & Prayers" },

  // Quran & Surahs
  { src: "/activities/surah_al_fatihah.png", title: "Surah Al-Fatihah", category: "Quran & Surahs" },
  { src: "/activities/surah_al_ikhlas.png", title: "Surah Al-Ikhlas", category: "Quran & Surahs" },
  { src: "/activities/what_is_surah_al_ikhlas.png", title: "What is Surah Al-Ikhlas", category: "Quran & Surahs" },
  { src: "/activities/surah_al_falaq.png", title: "Surah Al-Falaq", category: "Quran & Surahs" },
  { src: "/activities/surah_an_nas.png", title: "Surah An-Nas", category: "Quran & Surahs" },
  { src: "/activities/the_4_qul.png", title: "The 4 Qul", category: "Quran & Surahs" },
  { src: "/activities/baqarah_for_kids.png", title: "Baqarah for Kids", category: "Quran & Surahs" },
  { src: "/activities/first_3_kalimas.png", title: "First 3 Kalimas", category: "Quran & Surahs" },

  // Prophets & Stories
  { src: "/activities/25_prophets.png", title: "25 Prophets", category: "Prophets & Stories" },
  { src: "/activities/prophet_adam.png", title: "Prophet Adam (AS)", category: "Prophets & Stories" },
  { src: "/activities/prophet_nuh.png", title: "Prophet Nuh (AS)", category: "Prophets & Stories" },
  { src: "/activities/prophet_idrees.png", title: "Prophet Idrees (AS)", category: "Prophets & Stories" },
  { src: "/activities/story_of_prophet_ayyub.png", title: "Story of Prophet Ayyub (AS)", category: "Prophets & Stories" },
  { src: "/activities/boy_ant_allahs_mercy.png", title: "The Boy, the Ant & Allah's Mercy", category: "Prophets & Stories" },
  { src: "/activities/boy_dates_honesty.png", title: "The Boy, the Dates & Honesty", category: "Prophets & Stories" },
  { src: "/activities/omar_learns_patience.png", title: "Omar Learns Patience", category: "Prophets & Stories" },
  { src: "/activities/truthful_boy.png", title: "The Truthful Boy", category: "Prophets & Stories" },
  { src: "/activities/yusuf_keeps_promise.png", title: "Yusuf Keeps His Promise", category: "Prophets & Stories" },

  // Islamic Knowledge
  { src: "/activities/pillars_of_islam.png", title: "Pillars of Islam", category: "Islamic Knowledge" },
  { src: "/activities/six_articles_of_faith.png", title: "Six Articles of Faith", category: "Islamic Knowledge" },
  { src: "/activities/5_names_of_allah.png", title: "5 Names of Allah", category: "Islamic Knowledge" },
  { src: "/activities/the_angels.png", title: "The Angels", category: "Islamic Knowledge" },
  { src: "/activities/the_holy_books.png", title: "The Holy Books", category: "Islamic Knowledge" },
  { src: "/activities/islamic_months_for_kids.png", title: "Islamic Months for Kids", category: "Islamic Knowledge" },
  { src: "/activities/muharram_for_kids.png", title: "Muharram for Kids", category: "Islamic Knowledge" },
  { src: "/activities/what_is_hajj.png", title: "What is Hajj?", category: "Islamic Knowledge" },
  { src: "/activities/miracle_of_zamzam.png", title: "Miracle of Zamzam", category: "Islamic Knowledge" },
  { src: "/activities/why_allah_created_haram.png", title: "Why Allah Created Haram", category: "Islamic Knowledge" },
  { src: "/activities/sunnah_of_jummah.png", title: "Sunnah of Jummah", category: "Islamic Knowledge" },

  // Manners & Habits
  { src: "/activities/10_good_deeds_for_kids.png", title: "10 Good Deeds for Kids", category: "Manners & Habits" },
  { src: "/activities/good_manners_in_islam.png", title: "Good Manners in Islam", category: "Manners & Habits" },
  { src: "/activities/good_vs_bad_manners.png", title: "Good vs Bad Manners", category: "Manners & Habits" },
  { src: "/activities/islamic_rules_for_kids.png", title: "Islamic Rules for Kids", category: "Manners & Habits" },
  { src: "/activities/habits_that_bring_barakah.png", title: "Habits That Bring Barakah", category: "Manners & Habits" },
  { src: "/activities/small_habits_big_rewards.png", title: "Small Habits, Big Rewards", category: "Manners & Habits" },
  { src: "/activities/rights_of_parents.png", title: "Rights of Parents", category: "Manners & Habits" },
  { src: "/activities/rights_of_relatives.png", title: "Rights of Relatives", category: "Manners & Habits" },
  { src: "/activities/mahram_men_for_woman.png", title: "Mahram Men for Women", category: "Manners & Habits" },

  // Daily Routines & Sunnah
  { src: "/activities/after_school_routine.png", title: "After School Routine", category: "Daily Routines & Sunnah" },
  { src: "/activities/sunnah_of_sleeping.png", title: "Sunnah of Sleeping", category: "Daily Routines & Sunnah" },
  { src: "/activities/sunnah_of_wearing_clothes.png", title: "Sunnah of Wearing Clothes", category: "Daily Routines & Sunnah" },
  { src: "/activities/steps_of_wudu.png", title: "Steps of Wudu", category: "Daily Routines & Sunnah" },
  { src: "/activities/things_that_break_wudu.png", title: "Things That Break Wudu", category: "Daily Routines & Sunnah" },

  // Health & Wellness
  { src: "/activities/benefits_of_miswak.png", title: "Benefits of Miswak", category: "Health & Wellness" },
  { src: "/activities/prophetic_pharmacy.png", title: "Prophetic Pharmacy", category: "Health & Wellness" },
  { src: "/activities/water_in_islam.png", title: "Water in Islam", category: "Health & Wellness" },
  { src: "/activities/natural_islamic_endorphins.png", title: "Natural Islamic Endorphins", category: "Health & Wellness" },
  { src: "/activities/natural_islamic_oxytocin.png", title: "Natural Islamic Oxytocin", category: "Health & Wellness" },
  { src: "/activities/natural_islamic_serotonin.png", title: "Natural Islamic Serotonin", category: "Health & Wellness" },
  { src: "/activities/halal_entertainment_ideas.png", title: "Halal Entertainment Ideas", category: "Health & Wellness" },

  // Misc / uncategorised numbered images
  { src: "/activities/1786396375465_image.png", title: "Islamic Activity 1", category: "More Activities" },
  { src: "/activities/1786396382267_image.png", title: "Islamic Activity 2", category: "More Activities" },
  { src: "/activities/1786396386843_image.png", title: "Islamic Activity 3", category: "More Activities" },
  { src: "/activities/1786396392219_image.png", title: "Islamic Activity 4", category: "More Activities" },
  { src: "/activities/1786396396427_image.png", title: "Islamic Activity 5", category: "More Activities" },
];

const categories = [
  "All",
  ...Array.from(new Set(activities.map((a) => a.category))),
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ActivitiesContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activities.filter((a) => {
    const matchesCategory =
      activeCategory === "All" || a.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null,
    );
  const goPrev = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null,
    );

  return (
    <div className="overflow-hidden pb-16 md:pb-24">
      {/* ====== HERO ====== */}
      <section className="page-shell pt-10 md:pt-16 lg:pt-20">
        <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp()}>
          <div className="section-label mx-auto justify-center">
            <Palette className="h-4 w-4" />
            Learn &amp; Explore
          </div>

          <h1 className="mt-6 font-display text-balance text-[2.6rem] leading-[1.02] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            Islamic Activities for Kids
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg md:leading-[1.85]">
            Engaging educational resources covering duas, stories of prophets, Quran learning, Islamic manners, and much more — designed to make learning fun.
          </p>
        </motion.div>
      </section>

      {/* ====== SEARCH & FILTERS ====== */}
      <section className="page-shell mt-10 md:mt-14">
        <motion.div {...fadeUp(0.1)}>
          {/* Search bar */}
          <div className="mx-auto mb-6 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
              <input
                id="activities-search"
                type="text"
                placeholder="Search activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-[var(--line)] bg-white/70 py-3 pl-11 pr-10 text-sm text-[var(--ink)] shadow-[0_4px_16px_rgba(18,40,30,0.04)] backdrop-blur transition-all duration-300 placeholder:text-[var(--muted)] focus:border-[#C9A227]/50 focus:shadow-[0_6px_24px_rgba(200,155,60,0.1)] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-[#C9A227]/50 bg-[linear-gradient(135deg,#0F3D2E,#0d4635)] text-[#fff0ca] shadow-[0_8px_20px_rgba(15,77,58,0.2)]"
                    : "border-[var(--line)] bg-white/60 text-[var(--muted)] shadow-[0_2px_8px_rgba(18,40,30,0.04)] backdrop-blur hover:border-[#C9A227]/30 hover:bg-white/80 hover:text-[var(--ink)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="mt-4 text-center text-xs tracking-wide text-[var(--muted)]">
            Showing {filtered.length} of {activities.length} activities
          </p>
        </motion.div>
      </section>

      {/* ====== GALLERY GRID ====== */}
      <section className="page-shell mt-10 md:mt-14">
        {filtered.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center py-20 text-center"
            {...fadeUp()}
          >
            <Search className="mb-4 h-12 w-12 text-[var(--muted)]" />
            <p className="font-display text-2xl text-[var(--ink)]">
              No activities found
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Try adjusting your search or filter.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((activity, i) => (
              <motion.div
                key={activity.src}
                className="group relative cursor-pointer overflow-hidden rounded-[20px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,252,245,0.62))] shadow-[0_10px_36px_rgba(18,40,30,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(18,40,30,0.12)]"
                {...fadeUp(Math.min(0.04 * (i % 8), 0.28))}
                onClick={() => openLightbox(i)}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-[20px] border border-transparent transition-all duration-500 group-hover:border-[#C9A227]/20" />
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#C9A227]/0 blur-2xl transition-all duration-500 group-hover:bg-[#C9A227]/10" />

                {/* Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={activity.src}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0F3D2E]/0 transition-all duration-500 group-hover:bg-[#0F3D2E]/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/0 shadow-none transition-all duration-500 group-hover:bg-white/90 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                      <Search className="h-5 w-5 text-[#0F3D2E] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="relative px-4 py-3.5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                    {activity.category}
                  </p>
                  <h3 className="mt-1 font-display text-base text-[var(--ink)] md:text-lg">
                    {activity.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ====== LIGHTBOX ====== */}
      {lightboxIndex !== null && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a1f18]/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-white/20 md:left-6"
            aria-label="Previous activity"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-white/20 md:right-6"
            aria-label="Next activity"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Image container */}
          <div
            className="relative mx-12 max-h-[85vh] max-w-[90vw] overflow-hidden rounded-[20px] shadow-[0_40px_120px_rgba(0,0,0,0.5)] md:mx-20 md:max-w-2xl lg:max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              width={800}
              height={1000}
              className="h-auto max-h-[85vh] w-full object-contain"
            />

            {/* Title bar */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a1f18]/90 to-transparent px-6 pb-5 pt-12">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                {filtered[lightboxIndex].category}
              </p>
              <p className="mt-1 font-display text-xl text-white md:text-2xl">
                {filtered[lightboxIndex].title}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
