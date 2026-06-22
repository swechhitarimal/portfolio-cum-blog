import { Heart, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center">
            <a href="#" className="text-lg font-bold font-serif tracking-tight flex items-center justify-center gap-2 mb-3">
              <Sparkles size={14} className="text-[var(--color-accent)]" /> Hidden Corner
            </a>
            <p className="text-sm text-[var(--color-text-secondary)] font-light mb-4">
              Made with <Heart size={12} className="inline text-[var(--color-rose)]" />, lots of tea, and a deep love for the weird and wonderful internet.
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-[var(--color-text-secondary)]">
              <span>&copy; {year} Hidden Corner</span>
              <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
              <span>Built with React + Tailwind</span>
              <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
              <span>Indie web forever</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
