import { BookOpenText, Home, Laptop2 } from "lucide-react";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const classTypes = [
  {
    icon: Laptop2,
    title: "Live Online Sessions",
    description:
      "Interactive one-to-one teaching with clear recitation correction, lesson notes, and revision support between classes.",
  },
  {
    icon: Home,
    title: "A Home-Tuition Feel",
    description:
      "Children learn with calm familiarity while parents enjoy the convenience of a premium academy experience from home.",
  },
  {
    icon: BookOpenText,
    title: "Structured Learning Paths",
    description:
      "Noorani Qaidah, Tajweed, Hifz, Islamic Studies, Arabic, and Qirat are all mapped into progressive, easy-to-follow tracks.",
  },
];

export default function ClassTypes() {
  return (
    <section className="section-divider py-16 md:py-24">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          description="Whether your child is beginning with letters or moving toward memorisation and Tajweed refinement, each class type is shaped to feel thoughtful, calm, and premium."
          eyebrow="Learning Formats"
          title="Flexible lesson formats for families who want clarity and comfort."
        />
        <div className="grid gap-5">
          {classTypes.map(({ icon: Icon, title, description }, index) => (
            <Reveal delay={0.08 * (index + 1)} key={title}>
              <Card className="flex h-full flex-col gap-5 md:flex-row md:items-start">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[20px] bg-[rgba(15,77,58,0.08)] text-[var(--primary)]">
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
