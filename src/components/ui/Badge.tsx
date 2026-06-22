import { cn } from "@/utils/cn";

interface BadgeProps {
  children: string;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-[var(--color-surface-alt)] text-[var(--color-text-secondary)] border-[var(--color-border)]",
    accent: "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/20",
    outline: "bg-transparent border-[var(--color-border)] text-[var(--color-text-secondary)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
