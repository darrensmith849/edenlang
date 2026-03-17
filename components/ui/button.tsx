import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
}

const variants = {
  primary:
    "bg-eden-gold text-eden-black hover:bg-eden-gold-light active:bg-eden-gold",
  secondary:
    "bg-eden-cream text-eden-black hover:bg-eden-warm active:bg-eden-cream",
  outline:
    "border border-eden-cream/30 text-eden-cream hover:border-eden-gold hover:text-eden-gold",
  ghost:
    "text-eden-cream hover:text-eden-gold",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs tracking-widest",
  md: "px-7 py-3.5 text-xs tracking-widest",
  lg: "px-9 py-4 text-sm tracking-widest",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  onClick,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center uppercase font-medium transition-all duration-300 ease-out",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
