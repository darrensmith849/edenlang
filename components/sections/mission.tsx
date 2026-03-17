"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";

export function Mission() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-charcoal grain overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-eden-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
        <AnimatedText>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-8 font-medium">
            Purpose & Vision
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-eden-cream leading-snug mb-8">
            &ldquo;I want people to feel — not just listen.&rdquo;
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-eden-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Beyond music, Eden is building towards something larger — empowering
            women and young creatives in Zimbabwe through music production,
            technology, and education. Preserving Zimbabwean musical heritage while
            connecting it to the global creative economy.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-eden-muted/70 text-sm leading-relaxed max-w-xl mx-auto">
            From creating content that makes music technology accessible to
            building pathways for the next generation of Zimbabwean producers —
            the work is just beginning.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
