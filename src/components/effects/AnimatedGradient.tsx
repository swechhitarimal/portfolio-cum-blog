import { cn } from "@/utils/cn";

interface AnimatedGradientProps {
  className?: string;
}

export function AnimatedGradient({ className }: AnimatedGradientProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05]",
        className
      )}
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 0% 20%, var(--color-accent) 0%, transparent 100%),
          radial-gradient(ellipse 60% 50% at 100% 40%, var(--color-cyan) 0%, transparent 100%),
          radial-gradient(ellipse 70% 40% at 50% 80%, var(--color-rose) 0%, transparent 100%)
        `,
        backgroundSize: "200% 200%",
        animation: "gradient-shift 20s ease infinite",
      }}
      aria-hidden="true"
    />
  );
}
