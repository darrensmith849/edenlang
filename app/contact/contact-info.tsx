"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SITE } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div className="lg:pl-8">
      <AnimatedSection delay={0.2}>
        <div className="space-y-10">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-eden-gold mb-3 font-medium">Email</h3>
            <a href={`mailto:${SITE.email}`} className="text-eden-cream text-sm hover:text-eden-gold transition-colors">{SITE.email}</a>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-eden-gold mb-3 font-medium">Based in</h3>
            <p className="text-eden-muted text-sm">Zimbabwe<br /><span className="text-eden-muted/50 text-xs">Available internationally</span></p>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-eden-gold mb-3 font-medium">Include</h3>
            <ul className="space-y-1.5">
              {["The type of project or service", "Your timeline", "Budget range if applicable"].map((item) => (
                <li key={item} className="text-xs text-eden-muted/50 flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-eden-gold/30 mt-1.5 shrink-0" />
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
