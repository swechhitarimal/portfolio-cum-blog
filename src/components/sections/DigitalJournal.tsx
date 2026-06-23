import { motion } from "framer-motion";
import { Book } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { journalEntries } from "@/data/journal";

const spring = (stiffness: number, damping: number, delay = 0) =>
  ({ type: "spring" as const, stiffness, damping, delay });

const entryVariant = {
  hidden: (i: number) => ({ opacity: 0, y: 40, rotate: i % 2 === 0 ? -0.5 : 0.5, scale: 0.98 }),
  visible: (i: number) => ({
    opacity: 1, y: 0, rotate: 0, scale: 1,
    transition: spring(100, 12, 0.12 + i * 0.08),
  }),
};

const moodColor: Record<string, string> = {
  contemplative: "var(--color-cyan)",
  accomplished: "var(--color-emerald)",
  grateful: "var(--color-rose)",
  philosophical: "var(--color-lavender)",
  hopeful: "var(--color-amber)",
  joyful: "var(--color-coral)",
};

export function DigitalJournal() {
  return (
    <section id="journal" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <Book size={20} className="text-(--color-burgundy)" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Digital Journal</h2>
          </div>
          <p className="text--text-secondary font-light mb-10 max-w-xl">
            half-baked thoughts, small moments, and the quiet parts of my brain.
          </p>
        </ScrollReveal>

        <div className="space-y-5">
          {journalEntries.map((entry, i) => (
            <motion.div
              key={entry.id}
              custom={i}
              variants={entryVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="glass rounded-2xl relative overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: moodColor[entry.mood] || "var(--color-accent)" }}
              />
              <div className="p-6 md:p-7 pl-7 md:pl-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-serif font-bold text-lg">{entry.title}</h3>
                  <span className="text-[11px] text--text-secondary font-mono">
                    {entry.date}
                  </span>
                </div>

                <p className="text-sm text--text-secondary font-light leading-relaxed mb-4">
                  {entry.body}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-[11px] font-medium px-2 py-0.5 rounded"
                    style={{
                      color: moodColor[entry.mood] || "var(--color-accent)",
                      backgroundColor: (moodColor[entry.mood] || "var(--color-accent)") + "12",
                    }}
                  >
                    {entry.mood}
                  </span>
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded border border--border text--text-secondary font-mono text-[10px]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
