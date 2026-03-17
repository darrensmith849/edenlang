"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const platforms = [
  { name: "Spotify", href: SITE.socials.spotify },
  { name: "Apple Music", href: SITE.socials.appleMusic },
  { name: "SoundCloud", href: SITE.socials.soundcloud },
  { name: "YouTube", href: SITE.socials.youtube },
];

export function MusicListen() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-eden-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium">
            Listen Everywhere
          </span>

          <h2 className="font-serif text-3xl md:text-4xl text-eden-cream leading-snug mb-6">
            Find Eden&apos;s music on your platform
          </h2>

          <p className="text-eden-muted text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Stream the full catalogue, discover new releases, and follow along
            on the platform you love.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {platforms.map((platform) => (
              <Button
                key={platform.name}
                href={platform.href}
                variant="outline"
                size="md"
                external
              >
                {platform.name}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-16">
            <Button href="/contact" variant="ghost">
              Sync &amp; licensing enquiries &rarr;
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
