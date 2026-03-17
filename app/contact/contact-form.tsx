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
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const type = data.get("enquiry-type") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`${type} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEnquiry Type: ${type}\n\n${message}`
    );

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatedSection>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-16 text-center"
          >
            <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium">
              Thank you
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-eden-cream mb-4">
              Your email client should have opened
            </h3>
            <p className="text-eden-muted text-sm leading-relaxed mb-8">
              If it didn&apos;t, you can reach me directly at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-eden-gold hover:underline"
              >
                {SITE.email}
              </a>
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs uppercase tracking-[0.2em] text-eden-cream/50 hover:text-eden-gold transition-colors duration-300"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Enquiry type */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-eden-cream/60 mb-4 font-medium">
                What are you reaching out about?
              </label>
              <div className="flex flex-wrap gap-2">
                {ENQUIRY_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2.5 text-xs uppercase tracking-[0.15em] border transition-all duration-300 ${
                      selectedType === type
                        ? "border-eden-gold bg-eden-gold/10 text-eden-gold"
                        : "border-white/10 text-eden-cream/50 hover:border-eden-cream/30 hover:text-eden-cream"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <input
                type="hidden"
                name="enquiry-type"
                value={selectedType}
                required
              />
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-[0.2em] text-eden-cream/60 mb-3 font-medium"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b border-white/10 focus:border-eden-gold text-eden-cream text-base py-3 outline-none transition-colors duration-300 placeholder:text-eden-muted/30"
                placeholder="Full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-[0.2em] text-eden-cream/60 mb-3 font-medium"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-white/10 focus:border-eden-gold text-eden-cream text-base py-3 outline-none transition-colors duration-300 placeholder:text-eden-muted/30"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] text-eden-cream/60 mb-3 font-medium"
              >
                Tell me about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-transparent border-b border-white/10 focus:border-eden-gold text-eden-cream text-base py-3 outline-none transition-colors duration-300 placeholder:text-eden-muted/30 resize-none"
                placeholder="What are you working on? How can I help?"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center justify-center px-9 py-4 bg-eden-gold text-eden-black text-xs uppercase tracking-widest font-medium hover:bg-eden-gold-light transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
