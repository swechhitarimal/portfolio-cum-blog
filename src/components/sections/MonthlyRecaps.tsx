import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Music, BookOpen, Sparkles, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { monthlyRecaps } from "@/data/monthlyRecaps";

export function MonthlyRecaps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const recap = monthlyRecaps[activeIndex];

  return (
    <section id="recaps" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <Calendar size={20} className="text-[var(--color-burgundy)]" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Monthly Recaps</h2>
          </div>
          <p className="text-[var(--color-text-secondary)] font-light mb-8 max-w-xl">
            A visual journal of each month — memories, songs, books, lessons, and moments I want to remember.
          </p>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {recap && (
            <motion.div key={recap.id} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}>
              <div className="grid lg:grid-cols-5 gap-6 items-start">
                <div className="lg:col-span-3">
                  <div className="glass rounded-2xl overflow-hidden">
                    <img src={recap.photo} alt={`${recap.month} ${recap.year}`} className="w-full aspect-[16/9] object-cover" />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-serif font-bold">{recap.month} {recap.year}</h3>
                        <span className="text-lg">{recap.mood === "cozy" ? "☕" : recap.mood === "foggy" ? "🌫️" : "🌅"}</span>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Star size={16} className="text-[var(--color-amber)] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">Favorite memory</span>
                            <p className="text-sm mt-0.5">{recap.favoriteMemory}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Music size={16} className="text-[var(--color-burgundy)] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">Favorite song</span>
                            <p className="text-sm mt-0.5">{recap.favoriteSong}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <BookOpen size={16} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">Favorite book</span>
                            <p className="text-sm mt-0.5">{recap.favoriteBook}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Sparkles size={16} className="text-[var(--color-burgundy-light)] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">Biggest lesson</span>
                            <p className="text-sm mt-0.5 italic">"{recap.biggestLesson}"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="glass rounded-2xl p-6">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-secondary)] mb-4">Highlights</h4>
                    <ul className="space-y-3">
                      {recap.highlights.map((h, i) => (
                        <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                          <span className="text-sm font-light">{h}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : monthlyRecaps.length - 1))}
            className="w-10 h-10 rounded-xl border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-accent)] transition-colors cursor-pointer">
            <ChevronLeft size={16} />
          </button>
          <span className="text-sm text-[var(--color-text-secondary)] font-mono">{activeIndex + 1} / {monthlyRecaps.length}</span>
          <button onClick={() => setActiveIndex((prev) => (prev < monthlyRecaps.length - 1 ? prev + 1 : 0))}
            className="w-10 h-10 rounded-xl border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-accent)] transition-colors cursor-pointer">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
