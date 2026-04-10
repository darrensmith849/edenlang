"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";

export function Testimony() {
  return (
    <section className="relative py-20 md:py-28 bg-eden-charcoal grain overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-eden-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
        <AnimatedText>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium">
            The Story Behind the Work
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-eden-cream leading-snug mb-6">
            &ldquo;Drugs almost took my life. Jesus rewrote my story. Everything
            now is for His glory.&rdquo;
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-eden-muted text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            This story of redemption shapes every piece of work — not as a
            headline, but as a foundation. The craft, the care, and the
            sincerity behind each project come from a place that is deeply
            personal and spiritually grounded.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
