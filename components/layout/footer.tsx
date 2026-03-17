import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

const socialLinks = [
  { label: "Instagram", href: SITE.socials.instagram },
  { label: "YouTube", href: SITE.socials.youtube },
  { label: "Spotify", href: SITE.socials.spotify },
  { label: "Apple Music", href: SITE.socials.appleMusic },
  { label: "TikTok", href: SITE.socials.tiktok },
];

export function Footer() {
  return (
    <footer className="bg-eden-black border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl text-eden-cream hover:text-eden-gold transition-colors duration-300"
            >
              Eden Lang
            </Link>
            <p className="mt-4 text-sm text-eden-muted leading-relaxed max-w-xs">
              Zimbabwean music producer, composer, singer-songwriter, and content creator.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-eden-gold mb-6 font-medium">
              Navigate
            </h3>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-eden-muted hover:text-eden-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-eden-gold mb-6 font-medium">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-eden-muted hover:text-eden-cream transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-eden-muted/60">
            &copy; {new Date().getFullYear()} Eden Lang. All rights reserved.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="text-xs text-eden-muted/60 hover:text-eden-gold transition-colors duration-300"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
