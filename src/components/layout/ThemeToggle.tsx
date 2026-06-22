import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggle: () => void;
}

export function ThemeToggle({ theme, toggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggle}
      className="relative w-10 h-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {theme === "light" ? (
          <Sun size={18} className="text-[var(--color-amber)]" />
        ) : (
          <Moon size={18} className="text-[var(--color-accent-light)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
