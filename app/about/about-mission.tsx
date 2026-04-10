"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function AboutMission() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-black overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-eden-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
        <AnimatedText>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-8 font-medium">
            The Approach
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-eden-cream leading-snug mb-8">
            Meaningful work, not hype
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-eden-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Every collaboration, every custom song, every creative partnership
            is approached with the same conviction: that music should serve
            something real. The craft is serious, but the heart behind it is
            always worship, gratitude, and an honest desire to create
            something of lasting value.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Enquire Now
            </Button>
            <Button href="/services" variant="ghost">
              View Services
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
