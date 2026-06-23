import { ScrollReveal } from "./ScrollReveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <ScrollReveal className={`mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text--text-secondary max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
