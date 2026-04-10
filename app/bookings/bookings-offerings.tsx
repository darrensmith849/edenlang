"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { OFFERINGS } from "@/lib/constants";

export function BookingsOfferings() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-4 font-medium">
            Opportunities
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-eden-cream leading-tight mb-16">
            How we can work together
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERINGS.map((offering, i) => (
            <AnimatedSection key={offering.title} delay={i * 0.06}>
              <div className="p-8 md:p-10 border border-white/5 hover:border-eden-gold/15 transition-all duration-500 h-full group">
                <span className="block text-xs uppercase tracking-[0.2em] text-eden-gold mb-6 font-medium">
                  {offering.icon}
                </span>

                <h3 className="font-serif text-xl md:text-2xl text-eden-cream mb-4 group-hover:text-eden-gold transition-colors duration-300">
                  {offering.title}
                </h3>

                <p className="text-sm text-eden-muted leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
