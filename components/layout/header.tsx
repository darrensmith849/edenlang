"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-eden-black/90 backdrop-blur-md border-b border-white/[0.04]"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-6xl px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-serif text-lg md:text-xl text-eden-cream tracking-wide hover:text-eden-gold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Daniel Jenkins
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] text-eden-cream/60 hover:text-eden-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col gap-1.5">
              <span className={cn("block w-6 h-px bg-eden-cream transition-all duration-300", isOpen && "rotate-45 translate-y-1")} />
              <span className={cn("block w-6 h-px bg-eden-cream transition-all duration-300", isOpen && "-rotate-45 -translate-y-0.5")} />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-eden-black/98 backdrop-blur-lg flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-2xl text-eden-cream hover:text-eden-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
