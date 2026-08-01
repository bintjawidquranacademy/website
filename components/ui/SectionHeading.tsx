import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn("max-w-3xl space-y-5", align === "center" && "mx-auto text-center")}
    >
      <div className={cn("flex", align === "center" ? "justify-center" : "justify-start")}>
        <Badge>{eyebrow}</Badge>
      </div>
      <div className="space-y-4">
        <h2 className="font-display text-balance text-5xl leading-[0.96] text-[var(--ink)] md:text-6xl">
          {title}
        </h2>
        <p className="copy-muted max-w-2xl text-base md:text-lg">{description}</p>
      </div>
    </Reveal>
  );
}
