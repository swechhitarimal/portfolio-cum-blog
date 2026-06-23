import { useState } from "react";
import { BookOpen, Film, Monitor, Headphones, Music, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { mediaItems } from "@/data/media";

const typeIcons: Record<string, React.ElementType> = { book: BookOpen, movie: Film, show: Monitor, podcast: Headphones, music: Music };
const typeColors: Record<string, string> = { book: "text--accent", movie: "text-(--color-burgundy)", show: "text-(--color-sky)", podcast: "text-(--color-lavender)", music: "text-(--color-amber)" };
const types = ["All", "book", "movie", "show", "podcast", "music"];

export function MediaCorner() {
  const [activeType, setActiveType] = useState("All");
  const filtered = activeType === "All" ? mediaItems : mediaItems.filter((m) => m.type === activeType);

  return (
    <section id="media" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <Headphones size={20} className="text--accent" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Media Corner</h2>
          </div>
          <p className="text--text-secondary font-light mb-8 max-w-xl">
            Everything I'm reading, watching, listening to, and consuming.
            Books, movies, TV, podcasts, music — the good stuff.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {types.map((type) => (
              <button key={type} onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-xl text-sm capitalize font-medium transition-all cursor-pointer ${activeType === type ? "bg--accent text-white" : "border border--border text--text-secondary hover:border--accent hover:text--accent"}`}>
                {type}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div key={activeType} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => {
              const Icon = typeIcons[item.type] || BookOpen;
              return (
                <ScrollReveal key={item.id} delay={i * 0.05}>
                  <div className="glass rounded-2xl p-5 group hover:border--accent/20 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={14} className={typeColors[item.type]} />
                      <span className="text-xs px-2 py-0.5 rounded-full border border--border text--text-secondary capitalize">{item.type}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ml-auto ${item.status === "finished" ? "bg--accent/10 text--accent" : item.status === "consuming" ? "bg-(--color-amber)/10 text-(--color-amber)" : "bg-(--color-burgundy)/10 text-(--color-burgundy)"}`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold mb-1 group-hover:text--accent transition-colors">{item.title}</h3>
                    <p className="text-xs text--text-secondary mb-3">{item.creator}</p>
                    <p className="text-sm text--text-secondary font-light leading-relaxed">"{item.thoughts}"</p>
                    {item.rating && (
                      <div className="flex items-center gap-0.5 mt-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={12} className={i < item.rating! ? "text-(--color-burgundy) fill-(--color-burgundy)" : "text--border"} />
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
