"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section";
import { CREDITS } from "@/lib/constants";

const categoryLabels: Record<string, string> = {
  composition: "Composition",
  production: "Production",
  content: "Content",
  performance: "Performance",
  animation: "Animation & Visual",
};

export function WorkCredits() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-black">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Selected Credits"
            title="Featured work and publicly visible credits"
            description="A selection of professional credits and creative milestones drawn from publicly available sources."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CREDITS.map((credit, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="p-6 md:p-8 border border-white/5 hover:border-eden-gold/15 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-eden-gold font-medium">
                    {categoryLabels[credit.category] || credit.category}
                  </span>
                </div>

                <h3 className="font-serif text-lg md:text-xl text-eden-cream mb-2 group-hover:text-eden-gold transition-colors duration-300">
                  {credit.title}
                </h3>

                <p className="text-sm text-eden-muted mb-2">{credit.role}</p>

                {credit.client && (
                  <span className="text-xs text-eden-cream/30">
                    {credit.client}
                  </span>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
