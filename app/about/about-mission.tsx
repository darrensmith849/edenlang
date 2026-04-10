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
            The Heart
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-eden-cream leading-snug mb-8">
            This is not about building a persona
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-eden-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            It is about music that serves worship and points the glory back to
            God. Every song, every collaboration, every live moment is shaped by
            that conviction. The music is freely available — offered in
            reverence, not as a product.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-eden-muted/70 text-sm leading-relaxed max-w-xl mx-auto mb-10">
            Worship. Reverence. Grace. Testimony. These are the foundations.
            Everything else follows.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
