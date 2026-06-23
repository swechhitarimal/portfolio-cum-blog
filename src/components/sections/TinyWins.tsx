import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { tinyWins } from "@/data/tinyWins";

export function TinyWins() {
  return (
    <section id="wins" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <Trophy size={20} className="text-(--color-burgundy)" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Tiny Wins</h2>
          </div>
          <p className="text--text-secondary font-light mb-12 max-w-xl">
            A collection of small achievements and happy moments. Because not every win needs to be
            life-changing — some are just regular Tuesday victories.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tinyWins.map((win, i) => (
            <ScrollReveal key={win.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4, rotate: -0.5 }}
                className="glass rounded-2xl p-5 group hover:border-(--color-burgundy)/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text--text-secondary font-mono">{win.date}</span>
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-(--color-burgundy) transition-colors">{win.title}</h3>
                <p className="text-sm text--text-secondary font-light leading-relaxed">{win.story}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs text--accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles size={11} /> Celebrating this win
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
