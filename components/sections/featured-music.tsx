"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ReleaseArtwork } from "@/components/ui/release-artwork";
import { RELEASES } from "@/lib/constants";

export function FeaturedMusic() {
  const featured = RELEASES.filter((r) => r.featured).slice(0, 3);

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-eden-black">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Music"
            title="The first worship album is out now"
            description="Listen, share, and return to it whenever you need music that lifts your eyes back to Jesus."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((release, i) => (
            <AnimatedSection key={release.title} delay={i * 0.1}>
              <div className="group">
                {release.primaryUrl && release.primaryUrl !== "#" ? (
                  <a
                    href={release.primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Listen to ${release.title}`}
                  >
                    <ReleaseArtwork
                      release={release}
                      className="mb-6 aspect-square group-hover:border-eden-gold/55 transition-colors duration-500"
                    />
                  </a>
                ) : (
                  <ReleaseArtwork
                    release={release}
                    className="mb-6 aspect-square group-hover:border-eden-gold/55 transition-colors duration-500"
                  />
                )}

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-eden-gold font-medium">
                    {release.type}
                  </span>
                  {release.year && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-eden-muted/30" />
                      <span className="text-xs text-eden-muted">
                        {release.year}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="font-serif text-xl text-eden-cream mb-3 group-hover:text-eden-gold transition-colors duration-300">
                  {release.title}
                </h3>

                <p className="text-sm text-eden-muted leading-relaxed mb-4">
                  {release.description}
                </p>

                <div className="flex gap-3">
                  {release.primaryUrl && release.primaryUrl !== "#" && (
                    <a
                      href={release.primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.15em] text-eden-gold hover:text-eden-gold-light transition-colors duration-300"
                    >
                      Listen
                    </a>
                  )}
                  {release.appleMusicUrl && release.appleMusicUrl !== "#" && (
                    <a
                      href={release.appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.15em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300"
                    >
                      Apple Music
                    </a>
                  )}
                  {release.spotifyUrl && release.spotifyUrl !== "#" && (
                    <a
                      href={release.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.15em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300"
                    >
                      Spotify
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
              View All Music
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
