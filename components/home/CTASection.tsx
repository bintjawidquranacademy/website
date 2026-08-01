import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="section-divider pb-20 pt-8 md:pb-24">
      <Reveal className="page-shell">
        <div className="luxury-card overflow-hidden rounded-[40px] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(248,242,226,0.74))] px-6 py-8 md:px-10 md:py-10">
          <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-[rgba(200,155,60,0.14)] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[rgba(15,77,58,0.08)] blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.15fr_auto] md:items-center">
            <div className="space-y-5">
              <p className="section-label">Begin With A Trial</p>
              <h2 className="font-display text-balance text-5xl leading-[0.95] md:text-6xl">
                Start with a guided session and feel the difference from the first class.
              </h2>
              <p className="copy-muted max-w-2xl text-base">
                We help each family choose the right teacher, course, schedule, and pace so the
                learning journey begins with clarity rather than guesswork.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="/free-trial">Book Free Trial</Button>
              <Button href="/contact" variant="secondary">
                Speak To Our Team
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
