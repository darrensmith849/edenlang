"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function AboutMission() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-eden-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
        <AnimatedText>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-8 font-medium">
            Looking Forward
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-eden-cream leading-snug mb-8">
            Building something bigger than music
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-eden-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Eden&apos;s vision extends beyond her own catalogue. She is driven by a
            deep commitment to empowering women and young creatives in Zimbabwe —
            making music production tools, knowledge, and opportunities more
            accessible. Preserving Zimbabwean musical traditions while building
            bridges to the global creative economy.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-eden-muted/70 text-sm leading-relaxed max-w-xl mx-auto mb-10">
            This is a long-term mission — one that unfolds through education,
            community, collaboration, and the simple act of showing what&apos;s
            possible.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Button href="/contact" variant="primary">
            Work With Eden
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
