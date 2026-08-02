import { Sparkles, Star } from "lucide-react";

export default function FloatingQuranIllustration() {
  return (
    <div className="relative mx-auto aspect-[0.92] w-full max-w-[30rem]">
      <div className="absolute inset-[10%] rounded-full bg-[rgba(200,155,60,0.2)] blur-3xl" />
      <div className="absolute inset-x-[14%] top-[13%] h-[62%] rounded-[40px] border border-[rgba(200,155,60,0.3)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.78),_rgba(255,250,241,0.4))] shadow-[0_0_70px_rgba(200,155,60,0.18)]" />
      <div className="absolute left-[22%] top-[18%] h-[56%] w-[26%] -rotate-[12deg] rounded-[26px] border border-[rgba(255,255,255,0.5)] bg-[linear-gradient(180deg,_#1b6a53,_#0f4d3a)] shadow-[0_30px_80px_rgba(15,77,58,0.35)]" />
      <div className="absolute right-[22%] top-[18%] h-[56%] w-[26%] rotate-[12deg] rounded-[26px] border border-[rgba(255,255,255,0.5)] bg-[linear-gradient(180deg,_#1b6a53,_#0f4d3a)] shadow-[0_30px_80px_rgba(15,77,58,0.35)]" />
      <div className="absolute left-1/2 top-[19%] h-[56%] w-[6%] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,_#e8d0a0,_#c89b3c)] shadow-[0_10px_30px_rgba(200,155,60,0.4)]" />
      <div className="absolute left-[28%] top-[24%] h-[44%] w-[14%] -rotate-[12deg] rounded-[18px] border border-[rgba(200,155,60,0.4)] bg-[rgba(250,249,244,0.98)]" />
      <div className="absolute right-[28%] top-[24%] h-[44%] w-[14%] rotate-[12deg] rounded-[18px] border border-[rgba(200,155,60,0.4)] bg-[rgba(250,249,244,0.98)]" />
      <div className="absolute left-[18%] top-[30%] rounded-full border border-white/70 bg-white/70 p-3 text-[var(--accent)] shadow-[0_12px_30px_rgba(200,155,60,0.18)]">
        <Sparkles size={18} />
      </div>
      <div className="absolute bottom-[18%] right-[16%] rounded-full border border-white/70 bg-white/80 p-3 text-[var(--primary)] shadow-[0_12px_30px_rgba(15,77,58,0.18)]">
        <Star size={18} />
      </div>
      <div className="absolute left-[13%] top-[14%] h-24 w-24 rounded-full border border-[rgba(200,155,60,0.28)]" />
      <div className="absolute right-[10%] top-[22%] h-16 w-16 rounded-full border border-dashed border-[rgba(15,77,58,0.24)]" />
      <div className="absolute bottom-[14%] left-[18%] luxury-card max-w-[13rem] px-4 py-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted-strong)]">
          Guided Recitation
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Tajweed (Recitation), adab, and daily consistency shaped into a calm learning journey.
        </p>
      </div>
    </div>
  );
}
