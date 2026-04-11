"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";

export function Testimony() {
  return (
    <section className="relative py-16 md:py-20 bg-eden-black overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-eden-gold/3 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-8 text-center">
        <AnimatedText>
          <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-eden-cream/80 leading-snug italic">
            &ldquo;Drugs almost took my life. Jesus rewrote my story.
            Everything now is for His glory.&rdquo;
          </blockquote>
        </AnimatedText>
        <AnimatedSection delay={0.1}>
          <p className="mt-5 text-eden-muted/50 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
            This story shapes the craft — not as a headline, but as a
            foundation beneath everything.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
