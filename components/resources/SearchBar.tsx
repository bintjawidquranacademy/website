import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="group relative flex items-center">
      <Search className="absolute left-5 h-5 w-5 text-[#0F3D2E]/40 transition-colors duration-300 group-focus-within:text-[#C9A227]" />
      <input
        className="w-full rounded-full border border-[var(--line)] bg-white/70 py-4 pl-14 pr-6 text-[0.85rem] text-[var(--ink)] shadow-[0_2px_10px_rgba(18,40,30,0.02)] backdrop-blur-sm outline-none transition-all duration-300 placeholder:text-[var(--muted)] hover:border-[#C9A227]/40 focus:border-[#C9A227] focus:bg-white focus:ring-4 focus:ring-[#C9A227]/10"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search books, lessons, guides and worksheets..."
        value={value}
      />
    </label>
  );
}
