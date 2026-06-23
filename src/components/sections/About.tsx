import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { funFacts } from "@/data/funFacts";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border--accent/30 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="me" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Hey, I'm <span className="text--accent">a friend you haven't met yet</span></h2>
                <p className="text-sm text--text-secondary font-light">
                  I like to keep things real here. No corporate bio, no buzzwords.
                </p>
              </div>
            </div>

            <div className="space-y-4 text--text-secondary leading-relaxed font-light">
              <p>
                I'm someone who's deeply curious about... everything. How things work, why people do what they do,
                what makes a good story, and whether clouds have feelings (still researching that last one).
              </p>
              <p>
                By day I build things for the web. By night I read, write, take photos of interesting doors,
                and try to perfect my Japanese curry recipe. I believe in the power of analog notebooks,
                the importance of afternoon tea, and that everyone should have at least one weird hobby.
              </p>
              <p>
                This website is my digital home — a place where I can share the things I learn, the thoughts
                I have at 3am, the books I love, and the tiny wins that make life worth living.
              </p>
              <p>
                If any of this resonates, I'd love to hear from you. The journal is always open.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border--border">
              <h3 className="text-sm font-semibold uppercase tracking-wider text--text-secondary mb-4">
                Some random things about me
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {funFacts.slice(0, 6).map((f) => (
                  <div key={f.id} className="flex items-center gap-2 text-sm text--text-secondary font-light">
                    <span>{f.fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
