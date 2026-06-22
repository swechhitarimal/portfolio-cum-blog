import { type ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "magnetic";
  size?: "sm" | "md" | "lg";
}

export function Button({ children, href, onClick, type = "button", className, variant = "primary", size = "md" }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary: "bg-[var(--color-text)] text-[var(--color-surface)] hover:bg-[var(--color-accent)] border border-transparent",
    secondary: "border border-[var(--color-border)] bg-transparent hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
    ghost: "border border-transparent bg-transparent hover:bg-[var(--color-surface-alt)]",
    magnetic: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] border border-transparent shadow-lg shadow-[var(--color-accent)]/20",
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (variant !== "magnetic" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  const classes = cn(
    "inline-flex items-center gap-2 rounded-xl font-medium transition-all duration-300 cursor-pointer",
    sizes[size],
    variants[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
