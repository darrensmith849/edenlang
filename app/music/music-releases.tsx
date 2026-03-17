"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ReleaseArtwork } from "@/components/ui/release-artwork";
import { RELEASES } from "@/lib/constants";

export function MusicReleases() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-charcoal grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="space-y-0">
          {RELEASES.map((release, i) => (
            <AnimatedSection key={release.title} delay={i * 0.05}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-b border-white/5 last:border-b-0">
                <div className="md:col-span-3">
                  <ReleaseArtwork
                    release={release}
                    className="aspect-square max-w-[200px] md:max-w-none group-hover:border-eden-gold/45 transition-colors duration-500"
                  />
                </div>

                {/* Details */}
                <div className="md:col-span-9 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
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

                  <h3 className="font-serif text-2xl md:text-3xl text-eden-cream mb-4 group-hover:text-eden-gold transition-colors duration-300">
                    {release.title}
                  </h3>

                  <p className="text-sm text-eden-muted leading-relaxed mb-6 max-w-xl">
                    {release.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {release.appleMusicUrl && (
                      <a
                        href={release.appleMusicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300 border border-white/10 hover:border-eden-gold/30 px-4 py-2"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.297.228.56.053 1.122.07 1.684.077.16.003.32 0 .48 0h11.722c.164 0 .328.004.492-.003.84-.037 1.676-.1 2.47-.45.763-.338 1.388-.822 1.88-1.472.515-.68.798-1.458.966-2.29.112-.558.166-1.122.193-1.69.022-.468.033-.937.038-1.405v-9.93c-.005-.085-.007-.17-.01-.256zm-6.67 5.478l-.003 5.894c0 .46-.053.91-.196 1.347-.19.585-.508 1.06-1.03 1.377-.37.226-.78.343-1.207.41-.21.033-.425.063-.64.058-.727-.015-1.377-.21-1.907-.727-.622-.607-.825-1.357-.71-2.193.105-.763.56-1.31 1.195-1.698.39-.238.822-.374 1.266-.476.25-.06.503-.112.755-.166.256-.055.51-.112.755-.19.256-.082.462-.235.58-.488.077-.164.11-.34.118-.524.003-.038.004-.076.004-.115V8.416c0-.2-.033-.393-.133-.57-.127-.227-.334-.34-.574-.37-.143-.02-.29-.018-.434 0-.515.07-1.03.147-1.544.224l-3.677.553c-.02.003-.042.008-.062.013-.26.054-.39.195-.426.46-.01.073-.015.15-.015.224l-.003 7.59c0 .478-.05.95-.19 1.41-.178.588-.498 1.072-1.024 1.398-.37.23-.78.35-1.21.42-.196.03-.393.06-.59.06-.755 0-1.42-.192-1.97-.722-.63-.604-.838-1.352-.72-2.187.103-.745.543-1.287 1.164-1.68.39-.244.822-.38 1.268-.486.247-.06.497-.11.746-.165.26-.056.52-.114.766-.196.254-.084.457-.235.57-.493.07-.155.104-.325.112-.498.003-.043.003-.087.003-.13V5.93c0-.24.036-.472.165-.682.158-.253.397-.388.68-.435.17-.03.343-.043.517-.065l3.07-.46 2.182-.328c.247-.037.493-.074.742-.098.155-.015.31.003.462.045.228.064.39.207.472.433.05.14.07.287.07.436v6.16z"/>
                        </svg>
                        Apple Music
                      </a>
                    )}
                    {release.spotifyUrl && (
                      <a
                        href={release.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300 border border-white/10 hover:border-eden-gold/30 px-4 py-2"
                      >
                        Spotify
                      </a>
                    )}
                    {release.soundcloudUrl && (
                      <a
                        href={release.soundcloudUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300 border border-white/10 hover:border-eden-gold/30 px-4 py-2"
                      >
                        SoundCloud
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
