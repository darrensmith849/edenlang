import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  narrow?: boolean;
}

export function Section({ children, className, id, dark, narrow }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 lg:py-40",
        dark ? "bg-eden-charcoal" : "bg-eden-black",
        className
      )}
    >
      <div className={cn("mx-auto px-6 md:px-8", narrow ? "max-w-4xl" : "max-w-6xl")}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="block text-xs uppercase tracking-[0.25em] text-eden-gold mb-4 font-medium">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-eden-cream leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-eden-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
