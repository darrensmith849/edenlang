"use client";

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";

export function GivingContent() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-eden-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-eden-cream text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Giving here is entirely voluntary. It is not a purchase, a
              subscription, or an exchange for perks. The songs are shared
              freely. There are no tiers, no rewards, no transactional
              expectations.
            </p>
            <p className="text-eden-muted text-base leading-relaxed max-w-xl mx-auto">
              If the music has been meaningful to you — if it has served your
              worship, your quiet moments, your walk with God — and you feel
              led to support the work, you are welcome to do so.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="border border-white/5 p-8 md:p-12 text-center">
            <AnimatedText>
              <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium">
                Support the Work
              </span>
            </AnimatedText>

            <h3 className="font-serif text-2xl md:text-3xl text-eden-cream mb-6">
              Your generosity helps the mission continue
            </h3>

            <p className="text-eden-muted text-sm leading-relaxed max-w-lg mx-auto mb-8">
              Every gift — of any amount — goes directly towards future music,
              worship events, production, and the continuation of this project.
              Open-ended amounts are welcome.
            </p>

            {/* Placeholder for giving mechanism — replace with actual payment link/widget */}
            <div className="inline-flex items-center justify-center px-9 py-4 border border-eden-gold/40 bg-eden-gold/10 text-eden-gold text-xs uppercase tracking-widest font-medium hover:bg-eden-gold/20 transition-all duration-300 cursor-pointer">
              Give Now
            </div>

            <p className="mt-6 text-[11px] text-eden-muted/50 uppercase tracking-[0.15em]">
              Giving link placeholder — replace with payment integration
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 text-center">
            <p className="text-eden-muted/60 text-sm leading-relaxed max-w-md mx-auto">
              Thank you for your generosity. Every gift is received with
              gratitude and stewardship.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
