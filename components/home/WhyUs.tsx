import { Clock3, Globe2, GraduationCap, HeartHandshake } from "lucide-react";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    icon: HeartHandshake,
    title: "Warm Family Communication",
    description:
      "Parents stay informed with thoughtful updates, respectful guidance, and a learning approach that feels personal rather than transactional.",
  },
  {
    icon: GraduationCap,
    title: "Certified Teaching Standards",
    description:
      "Every lesson is shaped around correct recitation, adab, and strong educational structure from beginner foundations to advanced pathways.",
  },
  {
    icon: Clock3,
    title: "Schedules Built for Real Life",
    description:
      "Flexible timing supports school routines, working parents, and different time zones without sacrificing consistency.",
  },
  {
    icon: Globe2,
    title: "Global, Multilingual Access",
    description:
      "Families can choose teachers who communicate clearly in English, Arabic, Urdu, Bengali, and other familiar languages.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-divider py-16 md:py-24">
      <div className="page-shell space-y-10">
        <SectionHeading
          description="The academy is designed to feel premium without feeling distant: refined visuals, careful structure, and the kind of warmth families immediately recognise."
          eyebrow="The Experience"
          title="A modern Quran academy built around trust, elegance, and consistency."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map(({ icon: Icon, title, description }, index) => (
            <Reveal delay={0.08 * (index + 1)} key={title}>
              <Card className="h-full space-y-6">
                <div className="grid h-14 w-14 place-items-center rounded-[20px] bg-[var(--accent-soft)] text-[var(--primary)]">
                  <Icon size={24} />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-3xl leading-tight">{title}</h3>
                  <p className="text-sm leading-7 text-[var(--muted)]">{description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
