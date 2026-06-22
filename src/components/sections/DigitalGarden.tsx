import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, ArrowRight, Leaf, TreePine } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { gardenNotes } from "@/data/garden";

const statusIcons: Record<string, React.ElementType> = { sprouting: Sprout, growing: Leaf, evergreen: TreePine };
const statusColors: Record<string, string> = { sprouting: "text-[var(--color-amber)]", growing: "text-[var(--color-emerald)]", evergreen: "text-[var(--color-cyan)]" };

export function DigitalGarden() {
  const [activeNote, setActiveNote] = useState<string | null>(null);

  const connected = useMemo(() => {
    if (!activeNote) return [];
    const note = gardenNotes.find((n) => n.id === activeNote);
    return note ? note.connections.map((id) => gardenNotes.find((n) => n.id === id)).filter(Boolean) : [];
  }, [activeNote]);

  return (
    <section id="garden" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <Sprout size={20} className="text-[var(--color-emerald)]" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Digital Garden</h2>
          </div>
          <p className="text-[var(--color-text-secondary)] font-light mb-12 max-w-xl">
            A place for unfinished thoughts, half-written ideas, and questions I'm sitting with.
            Some are freshly planted, others have been growing for a while. Wander through.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gardenNotes.map((note, i) => {
            const StatusIcon = statusIcons[note.status] || Sprout;
            return (
              <ScrollReveal key={note.id} delay={i * 0.06}>
                <motion.div layoutId={`garden-${note.id}`}
                  className={`glass rounded-2xl p-5 cursor-pointer transition-all duration-300 ${activeNote === note.id ? "ring-2 ring-[var(--color-accent)]" : "hover:border-[var(--color-emerald)]/30"}`}
                  onClick={() => setActiveNote(activeNote === note.id ? null : note.id)}>
                  <div className="flex items-center gap-2 mb-3">
                    <StatusIcon size={14} className={statusColors[note.status]} />
                    <span className="text-xs text-[var(--color-text-secondary)] capitalize">{note.status}</span>
                    <span className="text-xs text-[var(--color-text-secondary)] ml-auto">{note.category}</span>
                  </div>
                  <h3 className="text-base font-semibold mb-2">{note.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">{note.excerpt}</p>

                  <AnimatePresence>
                    {activeNote === note.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="pt-4 mt-4 border-t border-[var(--color-border)]">
                          <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed mb-3">{note.content}</p>
                          {connected.length > 0 && (
                            <div>
                              <span className="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">Connected notes</span>
                              <div className="mt-2 space-y-1">
                                {connected.map((cn) => cn ? (
                                  <button key={cn.id} onClick={(e) => { e.stopPropagation(); setActiveNote(cn.id); }}
                                    className="flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline cursor-pointer">
                                    <ArrowRight size={12} /> {cn.title}
                                  </button>
                                ) : null)}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
