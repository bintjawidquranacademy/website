import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const inclusions = [
  "Private one-to-one teaching",
  "Flexible weekly scheduling",
  "Beginner to advanced learning tracks",
];

export default function PricingTeaser() {
  return (
    <section className="section-divider py-16 md:py-24">
      <Reveal className="page-shell">
        <div className="curve-shell overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,#0f4d3a,#123f33)] px-6 py-8 text-white shadow-[0_34px_100px_rgba(15,77,58,0.28)] md:px-10 md:py-10">
          <div className="absolute inset-y-0 right-0 hidden w-[40%] bg-[radial-gradient(circle_at_center,_rgba(200,155,60,0.25),_transparent_58%)] md:block" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-5">
              <p className="section-label text-white/80 before:bg-[linear-gradient(90deg,#c89b3c,transparent)]">
                Flexible Pricing
              </p>
              <h2 className="font-display text-5xl leading-[0.94] md:max-w-3xl md:text-6xl">
                Premium private Quran classes starting from £8 per hour.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/78 md:text-base">
                Weekly plans are available for foundational reading, Tajweed refinement,
                memorisation, and family-focused Islamic education with room to scale as progress
                grows.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-white/82">
                {inclusions.map((item) => (
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2.5" key={item}>
                    <Check size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Button className="bg-white text-[var(--primary)] hover:bg-[#f7f1e3]" href="/pricing">
              See Full Pricing
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
