import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 h-0.5">
      <div
        className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cyan)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
