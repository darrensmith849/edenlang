"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section";
import { PRESS } from "@/lib/constants";

export function AboutPress() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Press & Features"
            title="Public references"
            description="Selected press coverage and public features."
          />
        </AnimatedSection>

        <div className="space-y-6">
          {PRESS.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 border border-white/5 hover:border-eden-gold/20 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <span className="block text-xs uppercase tracking-[0.2em] text-eden-gold mb-2 font-medium">
                        {item.publication}
                      </span>
                      <h3 className="font-serif text-lg text-eden-cream group-hover:text-eden-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      {item.year && (
                        <span className="text-xs text-eden-muted">{item.year}</span>
                      )}
                      <span className="text-xs text-eden-cream/30 group-hover:text-eden-gold transition-colors duration-300">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="p-6 border border-white/5">
                  <span className="block text-xs uppercase tracking-[0.2em] text-eden-gold mb-2 font-medium">
                    {item.publication}
                  </span>
                  <h3 className="font-serif text-lg text-eden-cream">
                    {item.title}
                  </h3>
                  {item.year && (
                    <span className="text-xs text-eden-muted mt-2 block">{item.year}</span>
                  )}
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
