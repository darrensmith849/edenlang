"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export function AboutStory() {
  return (
    <section className="relative py-20 md:py-28 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <AnimatedSection className="md:col-span-5" direction="left">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/[0.04] bg-eden-dark">
              <Image src={IMAGES.rooftop} alt="Daniel Jenkins" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 40vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-eden-black/50 via-transparent to-transparent" />
            </div>
          </AnimatedSection>
          <div className="md:col-span-7 flex flex-col justify-center">
            <AnimatedSection>
              <p className="text-eden-cream text-sm md:text-base leading-relaxed mb-5">
                Guitar has been at the centre of everything for over a decade. Songwriting, production, live performance, creative collaboration — all built on a foundation of real craft rather than trends or shortcuts.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-eden-muted/80 text-sm leading-relaxed mb-5">
                Worship sits at the core. The work is shaped by a deep spiritual grounding — a story of redemption that informs the sincerity and patience behind each project. This is not about persona. It is about substance.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-eden-muted/60 text-sm leading-relaxed">
                Whether creating a custom song, recording guitar for a campaign, collaborating on a production, or leading worship — the approach is always the same: serious craft, genuine care, zero filler.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
