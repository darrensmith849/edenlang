"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { RELEASES } from "@/lib/constants";

export function FeaturedMusic() {
  const featured = RELEASES.filter((r) => r.featured).slice(0, 3);

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-black">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Selected Releases"
            title="Don't hear the music — feel it"
            description="Songs and collaborations that explore heartbreak, identity, resilience, and the textures of becoming."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((release, i) => (
            <AnimatedSection key={release.title} delay={i * 0.1}>
              <div className="group">
                {/* Artwork placeholder */}
                <div className="relative aspect-square mb-6 overflow-hidden bg-eden-charcoal border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-eden-gold/10 via-eden-dark to-eden-charcoal" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-serif text-3xl md:text-4xl text-eden-cream/20 group-hover:text-eden-cream/40 transition-colors duration-500">
                        {release.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-eden-black/60 to-transparent" />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-eden-gold font-medium">
                    {release.type}
                  </span>
                  {release.year && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-eden-muted/30" />
                      <span className="text-xs text-eden-muted">{release.year}</span>
                    </>
                  )}
                </div>

                <h3 className="font-serif text-xl text-eden-cream mb-3">
                  {release.title}
                </h3>

                <p className="text-sm text-eden-muted leading-relaxed mb-4">
                  {release.description}
                </p>

                <div className="flex gap-3">
                  {release.appleMusicUrl && (
                    <a
                      href={release.appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.15em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300"
                    >
                      Apple Music
                    </a>
                  )}
                  {release.soundcloudUrl && (
                    <a
                      href={release.soundcloudUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.15em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300"
                    >
                      SoundCloud
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-16 text-center">
            <Button href="/music" variant="outline">
              View All Releases
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
