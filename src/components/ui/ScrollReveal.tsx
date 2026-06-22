import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "tilt-left" | "tilt-right";
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function ScrollReveal({
  children, className, delay = 0, direction = "up",
  duration = 0.7, distance = 40, once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const variants: Record<string, { opacity: number; [key: string]: any }> = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    none: { opacity: 1 },
    "tilt-left": { opacity: 1, y: 0, rotate: 0 },
    "tilt-right": { opacity: 1, y: 0, rotate: 0 },
  };

  const initial: Record<string, any> = {
    up: { opacity: 0, y: distance },
    down: { opacity: 0, y: -distance },
    left: { opacity: 0, x: distance },
    right: { opacity: 0, x: -distance },
    none: { opacity: 0 },
    "tilt-left": { opacity: 0, y: distance, rotate: -3 },
    "tilt-right": { opacity: 0, y: distance, rotate: 3 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initial[direction]}
      animate={isInView ? variants[direction] : initial[direction]}
      transition={{
        duration,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
