import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bookmark } from "lucide-react";
import { isPdfResource } from "@/lib/resource-links";
import type { Resource } from "@/lib/types";

type ResourceCardProps = {
  resource: Resource;
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const isPdf = isPdfResource(resource.fileUrl);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,252,245,0.7))] shadow-[0_8px_30px_rgba(18,40,30,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A227]/40 hover:shadow-[0_20px_50px_rgba(18,40,30,0.1)]">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#f3f1ec]">
        <div className="flex h-56 items-center justify-center p-4">
          <Image
            alt={resource.title}
            className="h-full w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
            height={700}
            src={resource.image}
            width={900}
          />
        </div>
        
        {/* Bookmark */}
        <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/60 text-[var(--muted)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#C9A227]">
          <Bookmark className="h-4 w-4" />
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full border border-[#C9A227]/30 bg-[#0F3D2E]/80 px-4 py-1.5 text-[0.6rem] font-bold uppercase tracking-wider text-[#C9A227] backdrop-blur-md">
            {resource.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-display text-2xl leading-tight text-[var(--ink)]">
          {resource.title}
        </h3>
        <p className="mb-6 flex-1 text-[0.85rem] leading-relaxed text-[var(--muted)]">
          {resource.description}
        </p>
        <Link
          className="group/link flex w-fit items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[#0F3D2E] transition-colors hover:text-[#C9A227]"
          href={`/resources/${resource.slug}`}
        >
          {isPdf ? "Read PDF" : "Read More"}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
