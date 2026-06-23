import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = true, glow = false, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      className={cn(
        "relative rounded-2xl border border--border bg--surface p-6 overflow-hidden",
        glow && "shadow-[0_0_30px_-12px_var(--color-accent)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
