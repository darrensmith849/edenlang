import { Release } from "@/lib/constants";

const TYPE_STYLES: Record<Release["type"], { ring: string; glow: string; text: string }> = {
  Single: {
    ring: "border-eden-gold/35",
    glow: "from-eden-gold/35 via-eden-charcoal to-eden-dark",
    text: "text-eden-gold/90",
  },
  Album: {
    ring: "border-eden-cream/25",
    glow: "from-eden-cream/20 via-eden-charcoal to-eden-dark",
    text: "text-eden-cream/80",
  },
  EP: {
    ring: "border-emerald-300/30",
    glow: "from-emerald-300/25 via-eden-charcoal to-eden-dark",
    text: "text-emerald-200/80",
  },
  Feature: {
    ring: "border-sky-300/30",
    glow: "from-sky-300/20 via-eden-charcoal to-eden-dark",
    text: "text-sky-200/80",
  },
};

interface ReleaseArtworkProps {
  release: Release;
  className?: string;
}

export function ReleaseArtwork({ release, className = "" }: ReleaseArtworkProps) {
  const style = TYPE_STYLES[release.type];

  return (
    <div
      className={`relative overflow-hidden border ${style.ring} bg-eden-dark ${className}`.trim()}
      aria-hidden="true"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${style.glow} opacity-70`} />
      <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-12 -right-8 h-32 w-32 rounded-full bg-eden-gold/15 blur-3xl" />
      <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
        <span className="text-[10px] uppercase tracking-[0.25em] text-eden-cream/45">
          Eden Lang
        </span>
        <div>
          <p className={`font-serif text-xl md:text-2xl leading-tight ${style.text}`}>
            {release.title}
          </p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-eden-cream/45">
            {release.type}
            {release.year ? ` · ${release.year}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
