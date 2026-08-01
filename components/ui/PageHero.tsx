import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type HeroStat = {
  value: string;
  label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: HeroStat[];
  actions?: ReactNode;
  aside?: ReactNode;
  className?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  stats = [],
  actions,
  aside,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("page-shell pt-10 md:pt-14", className)}>
      <div className="curve-shell relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,252,245,0.6))] px-6 py-8 shadow-[0_26px_90px_rgba(18,40,30,0.08)] ring-1 ring-white/50 md:px-10 md:py-12">
        <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(200,155,60,0.72),transparent)]" />
        <div className="absolute -right-18 top-8 h-44 w-44 rounded-full bg-[rgba(200,155,60,0.14)] blur-3xl" />
        <div className="absolute -left-12 bottom-8 h-36 w-36 rounded-full bg-[rgba(15,77,58,0.09)] blur-3xl" />
        <div className={cn("relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start", !aside && "lg:grid-cols-1")}>
          <Reveal className="space-y-6">
            <div className="space-y-5">
              <p className="section-label">{eyebrow}</p>
              <h1 className="font-display text-balance text-5xl leading-[0.94] text-[var(--ink)] md:text-7xl">
                {title}
              </h1>
              <p className="copy-muted max-w-3xl text-base md:text-lg">{description}</p>
            </div>

            {actions ? <div className="flex flex-col gap-3 sm:flex-row">{actions}</div> : null}

            {stats.length ? (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {stats.map((stat, index) => (
                  <Reveal
                    className="glass-panel rounded-[24px] px-4 py-4"
                    delay={0.08 * (index + 1)}
                    key={`${stat.value}-${stat.label}`}
                  >
                    <p className="font-display text-3xl text-[var(--primary)] md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{stat.label}</p>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </Reveal>

          {aside ? (
            <Reveal className="section-frame rounded-[32px] p-5 md:p-6" delay={0.12}>
              {aside}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
