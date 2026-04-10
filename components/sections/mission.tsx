"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";

export function Testimony() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-charcoal grain overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-eden-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
        <AnimatedText>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-8 font-medium">
            Testimony
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-eden-cream leading-snug mb-8">
            &ldquo;Drugs almost took my life. Jesus rewrote my story.&rdquo;
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-eden-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            What could have been lost was redeemed. What should have ended in
            destruction was met with grace. Every song is a response to that
            grace — worship born from genuine gratitude, offered back to the God
            who made restoration possible.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-eden-muted/70 text-sm leading-relaxed max-w-xl mx-auto">
            Christ is the foundation of this project. The music, the
            performances, the collaborations — all of it points back to Him.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
