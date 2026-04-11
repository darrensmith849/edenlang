"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SERVICES } from "@/lib/constants";

export function ServicesPreview() {
  const preview = SERVICES.slice(0, 3);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % preview.length), 3200);
    return () => clearInterval(t);
  }, [preview.length]);

  const gradients = [
    "from-eden-gold/15 via-eden-gold/5 to-eden-black",
    "from-emerald-200/10 via-eden-charcoal to-eden-black",
    "from-sky-200/10 via-eden-charcoal to-eden-black",
  ];

  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <span className="text-[10px] uppercase tracking-[0.3em] text-eden-gold mb-3 block font-medium">
            Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-eden-cream leading-tight mb-4">
            What I do
          </h2>
          <p className="text-eden-muted text-sm md:text-base max-w-lg mb-14 leading-relaxed">
            Custom songs, recorded guitar, production, and select bookings.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {preview.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <Link
                href="/services"
                className="group block"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <div
                  className={`relative p-7 md:p-9 border transition-all duration-500 h-full overflow-hidden ${
                    active === i
                      ? "border-eden-gold/40"
                      : "border-white/[0.04] hover:border-eden-gold/15"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} ${
                      active === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    } transition-opacity duration-500`}
                  />
                  <div className="relative">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-eden-gold font-medium mb-3 block">
                      {s.icon}
                    </span>
                    <h3 className="font-serif text-xl text-eden-cream mb-3 group-hover:text-eden-gold transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-sm text-eden-muted/80 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-[10px] uppercase tracking-[0.2em] text-eden-gold hover:text-eden-gold-light transition-colors"
            >
              All services &rarr;
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
