"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";

export function Positioning() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-black">
      <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
        <AnimatedText>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-8 font-medium">
            Daniel Jenkins &middot; All the Glory
          </span>
        </AnimatedText>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-eden-cream leading-snug mb-8">
            Bespoke music, guitar-led{" "}
            <span className="text-eden-gold">creativity</span>, and select
            collaborations shaped with depth and intention.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-eden-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Daniel Jenkins is a Zimbabwean guitarist, producer, singer, and
            songwriter with over a decade of professional musical experience.
            From custom songs for personal milestones to guitar-led work for
            creative campaigns, each project is approached with artistic
            sincerity and strong musical craft.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-eden-cream/40">
            <span>Custom Songs</span>
            <span className="w-1 h-1 rounded-full bg-eden-gold/40" />
            <span>Guitar</span>
            <span className="w-1 h-1 rounded-full bg-eden-gold/40" />
            <span>Production</span>
            <span className="w-1 h-1 rounded-full bg-eden-gold/40" />
            <span>Songwriting</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
