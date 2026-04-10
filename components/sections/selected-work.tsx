"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section";
import { SERVICES } from "@/lib/constants";

export function ServicesPreview() {
  const preview = SERVICES.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % preview.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [preview.length]);

  const gradients = [
    "from-eden-gold/20 via-eden-gold/8 to-eden-black",
    "from-emerald-200/12 via-eden-charcoal to-eden-black",
    "from-sky-200/15 via-eden-charcoal to-eden-black",
  ];

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Services"
            title="What I offer"
            description="Custom songs, guitar-led creative work, production collaboration, and select bookings."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <Link
                href="/services"
                className="group block"
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
              >
                <div
                  className={`relative p-8 md:p-10 border transition-all duration-500 h-full overflow-hidden ${
                    activeIndex === i
                      ? "border-eden-gold/45 shadow-[0_0_40px_rgba(196,149,106,0.16)]"
                      : "border-white/5 hover:border-eden-gold/20"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} ${
                      activeIndex === i
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    } transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_35%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <span className="block text-xs uppercase tracking-[0.25em] text-eden-gold font-medium mb-4">
                      {service.icon}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-eden-cream mb-4 group-hover:text-eden-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-eden-muted leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-block mt-6 text-xs uppercase tracking-[0.2em] text-eden-cream/40 group-hover:text-eden-gold transition-colors duration-300">
                      Learn more &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-xs uppercase tracking-[0.2em] text-eden-gold hover:text-eden-gold-light transition-colors duration-300"
            >
              View all services &rarr;
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
