import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/utils/cn";
import { Mascot } from "@/components/ui/Mascot";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Learning", href: "#learning" },
  { label: "TIL", href: "#til" },
  { label: "Reading", href: "#reading" },
  /* { label: "Music", href: "#music" }, */
  { label: "Joys", href: "#joys" },
];

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-[var(--color-surface)]/85 backdrop-blur-lg border-b border-[var(--color-border)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <Mascot size={32} pose="tea" className="transition-transform duration-300 group-hover:animate-cozy-wiggle" />
          <span className="font-round font-bold text-base tracking-tight text-[var(--color-text)]">
            wanderer
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "px-3.5 py-2 rounded-full text-sm font-round font-medium transition-all duration-300",
                activeSection === link.href.slice(1)
                  ? "text-[var(--color-accent-dark)] bg-[var(--color-accent-light)]/30"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-3 pl-3 border-l border-[var(--color-border)]">
            <ThemeToggle theme={theme} toggle={toggleTheme} />
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle theme={theme} toggle={toggleTheme} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-2xl text-sm font-round font-medium transition-colors",
                    activeSection === link.href.slice(1)
                      ? "text-[var(--color-accent-dark)] bg-[var(--color-accent-light)]/30"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
