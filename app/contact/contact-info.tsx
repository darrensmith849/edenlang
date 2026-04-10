"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SITE } from "@/lib/constants";

const socialLinks = [
  { label: "Instagram", href: SITE.socials.instagram },
  { label: "YouTube", href: SITE.socials.youtube },
  { label: "Spotify", href: SITE.socials.spotify },
  { label: "Apple Music", href: SITE.socials.appleMusic },
];

export function ContactInfo() {
  return (
    <div className="lg:pl-8">
      <AnimatedSection delay={0.2}>
        <div className="space-y-12">
          {/* Direct contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-eden-gold mb-4 font-medium">
              Direct Email
            </h3>
            <a
              href={`mailto:${SITE.email}`}
              className="text-eden-cream hover:text-eden-gold transition-colors duration-300 text-base"
            >
              {SITE.email}
            </a>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-eden-gold mb-4 font-medium">
              Based In
            </h3>
            <p className="text-eden-muted text-base">
              Zimbabwe
              <br />
              <span className="text-eden-muted/60 text-sm">
                Available internationally
              </span>
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-eden-gold mb-4 font-medium">
              Follow
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

          {/* What to include */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-eden-gold mb-4 font-medium">
              What to Include
            </h3>
            <ul className="space-y-2">
              {[
                "The type of project or service you need",
                "Your timeline and any relevant details",
                "Budget range if applicable",
                "How you found All the Glory",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm text-eden-muted/70 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-eden-gold/40 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
