import { useState } from "react";
import { ExternalLink, Sparkles, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { curiosities } from "@/data/curiosities";

const types = ["All", "article", "video", "quote", "image", "discovery"];

export function CuriosityCabinet() {
  const [activeType, setActiveType] = useState("All");
  const filtered = activeType === "All" ? curiosities : curiosities.filter((c) => c.type === activeType);

  return (
    <section id="cabinet" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <Compass size={20} className="text-[var(--color-burgundy)]" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Curiosity Cabinet</h2>
          </div>
          <p className="text-[var(--color-text-secondary)] font-light mb-8 max-w-xl">
            Interesting things I've found on the internet — articles, videos, quotes, and discoveries
            that made me stop scrolling and pay attention. A museum of wonderful things.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {types.map((type) => (
              <button key={type} onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-xl text-sm capitalize font-medium transition-all cursor-pointer ${activeType === type ? "bg-[var(--color-accent)] text-white" : "border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"}`}>
                {type}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <motion.a
                  href={item.url} target="_blank" rel="noopener noreferrer"
                  layoutId={`cur-${item.id}`}
                  className="glass rounded-2xl p-5 block group hover:border-[var(--color-burgundy)]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-burgundy)]/20 text-[var(--color-burgundy)] font-medium capitalize">{item.type}</span>
                    <span className="text-xs text-[var(--color-text-secondary)] ml-auto">{item.source}</span>
                  </div>
                  <h3 className="text-base font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed mb-3">{item.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles size={12} /> {item.whyILoveIt}
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors">
                    <ExternalLink size={11} /> Visit
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
