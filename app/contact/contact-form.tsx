"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ENQUIRY_TYPES, SITE } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/animated-section";

export function ContactForm() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const type = data.get("enquiry-type") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`${type} — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nEnquiry Type: ${type}\n\n${message}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatedSection>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-16 text-center">
            <span className="block text-[10px] uppercase tracking-[0.3em] text-eden-gold mb-5 font-medium">Thank you</span>
            <h3 className="font-serif text-2xl text-eden-cream mb-4">Your email client should have opened</h3>
            <p className="text-eden-muted text-xs leading-relaxed mb-6">
              If it didn&apos;t, email directly at{" "}
              <a href={`mailto:${SITE.email}`} className="text-eden-gold hover:underline">{SITE.email}</a>
            </p>
            <button onClick={() => setSubmitted(false)} className="text-[10px] uppercase tracking-[0.2em] text-eden-cream/40 hover:text-eden-gold transition-colors">
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-eden-cream/50 mb-3 font-medium">Enquiry type</label>
              <div className="flex flex-wrap gap-2">
                {ENQUIRY_TYPES.map((type) => (
                  <button key={type} type="button" onClick={() => setSelectedType(type)}
                    className={`px-3 py-2 text-[10px] uppercase tracking-[0.15em] border transition-all duration-300 ${
                      selectedType === type ? "border-eden-gold bg-eden-gold/10 text-eden-gold" : "border-white/[0.06] text-eden-cream/40 hover:border-eden-cream/20 hover:text-eden-cream/60"
                    }`}>{type}</button>
                ))}
              </div>
              <input type="hidden" name="enquiry-type" value={selectedType} required />
            </div>
            <div>
              <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-eden-cream/50 mb-2 font-medium">Name</label>
              <input type="text" id="name" name="name" required className="w-full bg-transparent border-b border-white/[0.06] focus:border-eden-gold text-eden-cream text-sm py-2.5 outline-none transition-colors placeholder:text-eden-muted/25" placeholder="Full name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-eden-cream/50 mb-2 font-medium">Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-transparent border-b border-white/[0.06] focus:border-eden-gold text-eden-cream text-sm py-2.5 outline-none transition-colors placeholder:text-eden-muted/25" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-eden-cream/50 mb-2 font-medium">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full bg-transparent border-b border-white/[0.06] focus:border-eden-gold text-eden-cream text-sm py-2.5 outline-none transition-colors placeholder:text-eden-muted/25 resize-none" placeholder="What are you looking for?" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center px-7 py-3 bg-eden-gold text-eden-black text-[10px] uppercase tracking-widest font-medium hover:bg-eden-gold-light transition-all duration-300">
              Send Enquiry
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
