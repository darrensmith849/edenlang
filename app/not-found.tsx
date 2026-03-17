import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-eden-black">
      <div className="mx-auto max-w-2xl px-6 md:px-8 text-center">
        <span className="block text-xs uppercase tracking-[0.3em] text-eden-gold mb-6 font-medium">
          404
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-eden-cream leading-tight mb-6">
          Page not found
        </h1>
        <p className="text-eden-muted text-base leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
