import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "1,500+", label: "Learners guided across early reading, Tajweed (Recitation), Hifz, and Islamic Studies" },
  { value: "150+", label: "Qualified tutors and subject specialists available for global families" },
  { value: "25+", label: "Countries served with flexible timetables and multilingual support" },
];

export default function TrustBadges() {
  return (
    <section className="page-shell py-8 md:py-10">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal className="glass-panel rounded-[32px] px-6 py-6" delay={0.08 * (index + 1)} key={stat.label}>
            <p className="section-label">Trusted Scale</p>
            <p className="mt-4 font-display text-5xl leading-none text-[var(--primary)]">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
