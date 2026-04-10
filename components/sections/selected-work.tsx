"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section";

const offerings = [
  {
    label: "Worship",
    title: "Events & Ministry",
    description:
      "For church gatherings, worship nights, ministry settings, and faith-rooted live moments.",
    href: "/bookings",
    gradient: "from-eden-gold/20 via-eden-gold/8 to-eden-black",
    details: ["Worship events", "Ministry invitations", "Live worship"],
    energy: "Reverent",
  },
  {
    label: "Collaborate",
    title: "Music & Creative",
    description:
      "Meaningful creative partnerships with artists, musicians, and aligned projects. Songwriting, production, and guitar-led sessions.",
    href: "/bookings",
    gradient: "from-emerald-200/12 via-eden-charcoal to-eden-black",
    details: ["Collaborations", "Commissioned songs", "Guitar sessions"],
    energy: "Creative",
  },
  {
    label: "Bookings",
    title: "Artist & Partnerships",
    description:
      "Live appearances, select performance opportunities, and tasteful brand partnerships aligned with the heart of the project.",
    href: "/bookings",
    gradient: "from-sky-200/15 via-eden-charcoal to-eden-black",
    details: ["Live bookings", "Select partnerships", "Enquiries"],
    energy: "Intentional",
  },
];

export function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offerings.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Work Together"
            title="Bookings, collaborations & enquiries"
            description="Worship events, ministry invitations, creative partnerships, and select opportunities."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <Link
                href={item.href}
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
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} ${
                      activeIndex === i
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    } transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_35%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="block text-xs uppercase tracking-[0.25em] text-eden-gold font-medium">
                        {item.label}
                      </span>
                      <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-eden-cream/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-eden-gold animate-pulse" />
                        {item.energy}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-eden-cream mb-4 group-hover:text-eden-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-eden-muted leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.details.map((detail) => (
                        <span
                          key={detail}
                          className="px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] border border-white/15 text-eden-cream/70 bg-eden-black/35"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block mt-6 text-xs uppercase tracking-[0.2em] text-eden-cream/40 group-hover:text-eden-gold transition-colors duration-300">
                      Enquire &rarr;
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
