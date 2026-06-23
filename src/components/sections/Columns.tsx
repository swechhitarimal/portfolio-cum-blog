import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, BookOpen, Feather, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { columns } from "@/data/columns";

export function Columns() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="columns" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <Feather size={20} className="text--accent" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Columns & Essays</h2>
          </div>
          <p className="text--text-secondary font-light mb-12 max-w-xl">
            Things I think about too much, written down so my brain has more space.
            Long-form thoughts on life, technology, books, and the art of being human.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {columns.map((col, i) => (
            <ScrollReveal key={col.id} delay={i * 0.1}>
              <motion.article
                layoutId={`col-${col.id}`}
                onClick={() => setExpandedId(expandedId === col.id ? null : col.id)}
                className="glass rounded-2xl p-6 md:p-8 cursor-pointer group hover:border--accent/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full border border--accent/20 text--accent font-medium capitalize">{col.vibe}</span>
                  {col.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text--text-secondary">{tag}</span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 group-hover:text--accent transition-colors">{col.title}</h3>
                <p className="text--text-secondary font-light leading-relaxed mb-4">{col.excerpt}</p>

                <div className="flex items-center gap-4 text-xs text--text-secondary">
                  <span className="flex items-center gap-1"><Clock size={12} /> {col.readTime} min read</span>
                  <span className="font-mono">{col.date}</span>
                </div>

                <AnimatePresence>
                  {expandedId === col.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pt-5 mt-5 border-t border--border text--text-secondary font-light leading-relaxed space-y-4">
                        {col.content.split("\n\n").map((p, j) => (
                          <p key={j}>{p.trim()}</p>
                        ))}
                        <div className="pt-2 flex items-center gap-2 text--accent">
                          <Heart size={14} />
                          <span className="text-xs">Thanks for reading</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-1.5 mt-3 text-xs text--accent font-medium">
                  <BookOpen size={12} />
                  {expandedId === col.id ? "Collapse" : "Read full essay"}
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
