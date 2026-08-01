"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import CategoryFilter from "@/components/resources/CategoryFilter";
import ResourceCard from "@/components/resources/ResourceCard";
import SearchBar from "@/components/resources/SearchBar";
import { filterResources } from "@/lib/resource-filter";
import type { Resource } from "@/lib/types";

type ResourceExplorerProps = {
  categories: readonly string[];
  resources: Resource[];
};

export default function ResourceExplorer({ categories, resources }: ResourceExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedTerm(searchTerm), 250);
    return () => window.clearTimeout(timer);
  }, [searchTerm]);

  const filteredResources = useMemo(
    () => filterResources(resources, debouncedTerm, activeCategory),
    [activeCategory, debouncedTerm, resources],
  );

  return (
    <div className="space-y-10">
      {/* Search & Filter Bar */}
      <div className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,252,245,0.6))] p-6 shadow-[0_12px_30px_rgba(18,40,30,0.03)] backdrop-blur-md md:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:items-end">
          <div className="space-y-2">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Search resources</p>
            <SearchBar onChange={setSearchTerm} value={searchTerm} />
          </div>
          <div className="space-y-2">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Filter by category</p>
            <CategoryFilter activeCategory={activeCategory} categories={categories} onChange={setActiveCategory} />
          </div>
        </div>
      </div>

      {/* Resource Grid */}
      {filteredResources.length === 0 ? (
        <div className="rounded-[28px] border border-[var(--line)] bg-white/60 p-12 text-center text-[0.95rem] leading-7 text-[var(--muted)] backdrop-blur-md">
          No resources found. Try a different search or category.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map((resource, i) => (
            <motion.div
              key={resource.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.05 * (i % 6), ease: [0.22, 1, 0.36, 1] }}
            >
              <ResourceCard resource={resource} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
