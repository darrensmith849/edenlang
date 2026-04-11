import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-eden-black border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link href="/" className="font-serif text-xl text-eden-cream hover:text-eden-gold transition-colors">
              Daniel Jenkins
            </Link>
            <p className="mt-3 text-xs text-eden-muted/60 leading-relaxed max-w-xs">
              Guitarist, producer, and songwriter. Custom songs, recorded
              guitar, production, and select worship bookings.
            </p>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-eden-gold mb-4 font-medium">Navigate</h3>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-eden-muted/50 hover:text-eden-cream transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-eden-gold mb-4 font-medium">Connect</h3>
            <div className="flex flex-col gap-2">
              {["Instagram", "YouTube", "Spotify"].map((name) => (
                <a key={name} href="#" target="_blank" rel="noopener noreferrer" className="text-xs text-eden-muted/50 hover:text-eden-cream transition-colors">
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-eden-muted/40">&copy; {new Date().getFullYear()} Daniel Jenkins</p>
          <a href={`mailto:${SITE.email}`} className="text-[10px] text-eden-muted/40 hover:text-eden-gold transition-colors">{SITE.email}</a>
        </div>
      </div>
    </footer>
  );
}
