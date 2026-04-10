"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section";

const milestones = [
  {
    period: "The Beginning",
    title: "A life redirected by Jesus",
    description:
      "Drugs almost took everything. But grace intervened — and what followed was a radical redirection. Music became the response to redemption.",
  },
  {
    period: "Foundation",
    title: "Over a decade in music",
    description:
      "Years of songwriting, production, performance, and creative development — building a foundation rooted in craft, sincerity, and artistic integrity.",
  },
  {
    period: "Identity",
    title: "Guitar at the centre",
    description:
      "A strong guitar identity runs through everything. Multi-instrumentalist, producer, singer-songwriter — but guitar is the anchor.",
  },
  {
    period: "International",
    title: "Performance experience worldwide",
    description:
      "International performance background bringing the music beyond Zimbabwe — live worship, events, and collaborations across borders.",
  },
  {
    period: "2025",
    title: "First worship album released",
    description:
      "The debut worship album — songs of testimony, redemption, and praise. Music freely available, offered for the glory of God.",
  },
];

export function AboutMilestones() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-black">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <AnimatedSection>
          <SectionHeader
            label="The Journey"
            title="The path so far"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-white/5" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-[140px_1fr] md:gap-8">
                  {/* Period */}
                  <div className="md:text-right md:pr-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-eden-gold font-medium">
                      {milestone.period}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-[140px] top-1 w-2 h-2 rounded-full bg-eden-gold -translate-x-[3.5px]" />

                  {/* Content */}
                  <div className="md:pl-8">
                    <h3 className="font-serif text-lg md:text-xl text-eden-cream mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-eden-muted leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
