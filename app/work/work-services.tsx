"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SERVICES } from "@/lib/constants";

export function WorkServices() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-4 font-medium">
            Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-eden-cream leading-tight mb-16">
            How we can work together
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="p-8 md:p-10 border border-white/5 hover:border-eden-gold/15 transition-all duration-500 h-full group">
                <span className="block text-xs uppercase tracking-[0.2em] text-eden-gold mb-6 font-medium">
                  0{i + 1}
                </span>

                <h3 className="font-serif text-xl md:text-2xl text-eden-cream mb-4 group-hover:text-eden-gold transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-eden-muted leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-xs text-eden-cream/40 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-eden-gold/40" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
