"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section";

const works = [
  {
    label: "Composition",
    title: "Film, TV & Brand Scoring",
    description:
      "Original music crafted for visual storytelling — emotionally precise, culturally rich, internationally ready.",
    href: "/work",
    gradient: "from-eden-gold/10 to-eden-gold/5",
  },
  {
    label: "Production",
    title: "Artist Collaboration",
    description:
      "Full-spectrum production for artists seeking a sound that is both soulful and modern.",
    href: "/work",
    gradient: "from-eden-cream/5 to-eden-cream/3",
  },
  {
    label: "Content",
    title: "Music-Tech Brands",
    description:
      "Authentic content connecting music technology products with real creative workflows.",
    href: "/work",
    gradient: "from-eden-gold/8 to-eden-gold/3",
  },
];

export function SelectedWork() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <SectionHeader
            label="What I Do"
            title="Creative work across disciplines"
            description="From scoring to songwriting, from studio production to brand storytelling."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <AnimatedSection key={work.title} delay={i * 0.1}>
              <Link href={work.href} className="group block">
                <div className="relative p-8 md:p-10 border border-white/5 hover:border-eden-gold/20 transition-all duration-500 h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative">
                    <span className="block text-xs uppercase tracking-[0.25em] text-eden-gold mb-4 font-medium">
                      {work.label}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-eden-cream mb-4 group-hover:text-eden-gold transition-colors duration-300">
                      {work.title}
                    </h3>
                    <p className="text-sm text-eden-muted leading-relaxed">
                      {work.description}
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
      </div>
    </section>
  );
}
