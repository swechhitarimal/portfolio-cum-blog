import { useState, useMemo } from "react";
import { Search, Shuffle, Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { tilEntries, tilCategories } from "@/data/til";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Til() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  const filtered = useMemo(() => {
    let entries = showFavorites ? tilEntries.filter((e) => e.favorite) : tilEntries;
    entries = activeCategory === "All" ? entries : entries.filter((e) => e.category === activeCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      entries = entries.filter((e) => e.title.toLowerCase().includes(q) || e.fact.toLowerCase().includes(q) || e.tags.some((t) => t.includes(q)));
    }
    return entries;
  }, [activeCategory, searchQuery, showFavorites]);

  const randomEntry = () => {
    const entry = tilEntries[Math.floor(Math.random() * tilEntries.length)];
    setActiveCategory("All");
    setSearchQuery("");
    setShowFavorites(false);
    document.getElementById(entry.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="til" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <Sparkles size={20} className="text--accent" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Today I Learned</h2>
          </div>
          <p className="text--text-secondary font-light mb-8 max-w-xl">
            A collection of weird, wonderful, and surprisingly useful things I've picked up.
            Facts that made me go "huh!" — shared so you can too.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text--text-secondary" />
              <input type="text" placeholder="Search facts..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border--border bg--surface text-sm focus:outline-none focus:border--accent transition-colors" />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <button onClick={randomEntry}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border--border text-sm text--text-secondary hover:text--accent hover:border--accent transition-all cursor-pointer">
                <Shuffle size={14} /> Random TIL
              </button>
              <button onClick={() => setShowFavorites(!showFavorites)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-sm transition-all cursor-pointer ${showFavorites ? "bg-(--color-burgundy)/10 border-(--color-burgundy)/30 text-(--color-burgundy)" : "border--border text--text-secondary hover:border-(--color-burgundy)/30 hover:text-(--color-burgundy)"}`}>
                <Heart size={14} /> Favorites
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {tilCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${activeCategory === cat ? "bg--accent text-white" : "border border--border text--text-secondary hover:border--accent hover:text--accent"}`}>
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text--text-secondary py-12">
              No facts found. Try a different search or category.
            </motion.p>
          ) : (
            <motion.div key={activeCategory + searchQuery + String(showFavorites)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((entry, i) => (
                <ScrollReveal key={entry.id} delay={i * 0.04}>
                  <div id={entry.id} className="glass rounded-2xl p-5 h-full flex flex-col group hover:border--accent/20 transition-all duration-300">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-xs px-2.5 py-1 rounded-full border border--accent/20 text--accent font-medium">{entry.category}</span>
                      <div className="flex items-center gap-1.5">
                        {entry.favorite && <Heart size={12} className="text-(--color-burgundy) fill-(--color-burgundy)" />}
                        <span className="text-xs text--text-secondary font-mono">{entry.date}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text--accent transition-colors">{entry.title}</h3>
                    <p className="text-sm text--text-secondary font-light leading-relaxed flex-1">{entry.fact}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border--border">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg--surface-alt text--text-secondary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
