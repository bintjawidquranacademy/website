import { cn } from "@/lib/utils";

type CategoryFilterProps = {
  activeCategory: string;
  categories: readonly string[];
  onChange: (value: string) => void;
};

export default function CategoryFilter({
  activeCategory,
  categories,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((category) => (
        <button
          className={cn(
            "rounded-full border px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] transition-all duration-300",
            activeCategory === category
              ? "border-[#0F3D2E] bg-[#0F3D2E] text-white shadow-[0_4px_12px_rgba(15,61,46,0.2)]"
              : "border-[var(--line)] bg-white/80 text-[var(--muted)] hover:-translate-y-0.5 hover:border-[#C9A227]/40 hover:bg-white hover:shadow-sm",
          )}
          key={category}
          onClick={() => onChange(category)}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
