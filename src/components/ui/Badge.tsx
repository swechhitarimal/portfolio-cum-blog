import { cn } from "@/utils/cn";

interface BadgeProps {
  children: string;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg--surface-alt text--text-secondary border--border",
    accent: "bg--accent/10 text--accent border--accent/20",
    outline: "bg-transparent border--border text--text-secondary",
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
