import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { letters } from "@/data/letters";

export function Letterbox() {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="letterbox" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <Mail size={20} className="text-(--color-burgundy)" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Letterbox</h2>
          </div>
          <p className="text--text-secondary font-light mb-8 max-w-xl">
            Notes to my future self. Little letters tucked away in a digital drawer —
            a time capsule for the person I'm becoming.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <ScrollReveal>
            <div className="space-y-5">
              {letters.map((letter, i) => (
                <motion.div
                  key={letter.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 border-l-4 border-l-(--color-burgundy)"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={12} className="text-(--color-burgundy)" />
                    <span className="text-xs font-medium text--text-secondary uppercase tracking-wider">
                      To: {letter.to}
                    </span>
                    <span className="text-xs text--text-secondary ml-auto">{letter.date}</span>
                  </div>
                  <p className="text-sm text--text-secondary font-light leading-relaxed italic"
                    style={{ fontFamily: "var(--font-hand)" }}>
                    {letter.message}
                  </p>
                  <div className="mt-3 text-xs text--text-secondary capitalize">Mood: {letter.mood}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass rounded-2xl p-6 sticky top-28">
              <h3 className="font-semibold mb-1">Write a letter to your future self</h3>
              <p className="text-xs text--text-secondary mb-4 font-light">
                (This one stays with you — just a demo of the idea.)
              </p>
              <form onSubmit={(e) => { e.preventDefault(); if (to && message) { alert("Your letter has been tucked away! (This is a demo — in a real app this would be saved.)"); setTo(""); setMessage(""); }}} className="space-y-4">
                <input type="text" placeholder="To: Future me in..." value={to} onChange={(e) => setTo(e.target.value)} required
                  className="w-full px-4 py-3 rounded-xl border border--border bg--surface text-sm focus:outline-none focus:border--accent transition-colors" />
                <textarea placeholder="Dear future me..." value={message} onChange={(e) => setMessage(e.target.value)} required rows={5}
                  className="w-full px-4 py-3 rounded-xl border border--border bg--surface text-sm focus:outline-none focus:border--accent transition-colors resize-none"
                  style={{ fontFamily: "var(--font-hand)" }} />
                <button type="submit"
                  className="w-full px-6 py-3 rounded-xl bg--text text--surface font-medium text-sm flex items-center justify-center gap-2 hover:bg--accent transition-colors cursor-pointer">
                  <Send size={16} /> Tuck letter away
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
