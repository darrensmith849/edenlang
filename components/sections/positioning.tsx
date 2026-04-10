"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";

export function Positioning() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-black">
      <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
        <AnimatedText>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-8 font-medium">
            Zimbabwe &middot; Worship &middot; Guitar
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-eden-cream leading-snug mb-8">
            Music offered in{" "}
            <span className="text-eden-gold">reverence</span>, born from a
            story that could have ended very differently.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-eden-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            All the Glory is a worship music project shaped by redemption,
            gratitude, and a desire to point everything back to God. Rooted in
            sincerity rather than performance — songs born from testimony, not
            persona.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-eden-cream/40">
            <span>Guitarist</span>
            <span className="w-1 h-1 rounded-full bg-eden-gold/40" />
            <span>Producer</span>
            <span className="w-1 h-1 rounded-full bg-eden-gold/40" />
            <span>Singer</span>
            <span className="w-1 h-1 rounded-full bg-eden-gold/40" />
            <span>Songwriter</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
