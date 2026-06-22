import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Heart, Music, Globe, Lightbulb, Play, Pause, SkipBack, SkipForward, ListMusic } from "lucide-react";
import { Mascot } from "@/components/ui/Mascot";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
});

const springCard = (i: number) => ({
  initial: { opacity: 0, y: 24, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true },
  transition: { type: "spring" as const, stiffness: 90, damping: 13, delay: 0.06 + i * 0.05 },
});

const projects = [
  { name: "vibe-pipeline", desc: "generate CI/CD configs from plain English", tech: "Rust", lines: "3.4k" },
  { name: "knot", desc: "a personal knowledge graph in your terminal", tech: "Go", lines: "2.1k" },
  { name: "moodboard", desc: "component library for aesthetic UI patterns", tech: "React / TS", lines: "5.6k" },
  { name: "dotfiles", desc: "my dev environment, version-controlled", tech: "zsh / nvim", lines: "1.2k" },
];

const learning = [
  { topic: "Rust Lifetimes", note: "The borrow checker and I are becoming friends. Slowly.", tag: "deep dive" },
  { topic: "Japanese", note: "N4 level. Can order ramen and complain about humidity.", tag: "slow burn" },
  { topic: "Analog Photography", note: "36 frames. No delete button. Learning to be patient.", tag: "ongoing" },
];

const books = [
  { title: "Piranesi", author: "Susanna Clarke", thought: "A book that feels like a dream you don't want to wake from.", src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80" },
  { title: "The Creative Act", author: "Rick Rubin", thought: "Every page is a permission slip to make things.", src: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=300&q=80" },
  { title: "A Psalm for the Wild-Built", author: "Becky Chambers", thought: "Gentle optimism. The hug I didn't know I needed.", src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80" },
];

const til = [
  { fact: "Honey never spoils. Archaeologists found 3000-year-old honey in Egyptian tombs that was still edible.", cat: "Random" },
  { fact: "The name 'Russia' comes from a group of Viking rowers called 'Rus' who rowed their ships along rivers.", cat: "History" },
  { fact: "Octopuses have three hearts, nine brains, and blue blood. Two hearts pump blood to the gills; one pumps it to the body.", cat: "Nature" },
  { fact: "The first computer programmer was Ada Lovelace, who wrote an algorithm for Charles Babbage's Analytical Engine in 1843.", cat: "Tech" },
  { fact: "A group of flamingos is called a 'flamboyance.' A group of crows is a 'murder.' Language is beautiful.", cat: "Words" },
  { fact: "The Earth's rotation is gradually slowing. Days are getting longer by about 1.8 milliseconds per century.", cat: "Science" },
];

const queueTracks = [
  { title: "Wicked Games", artist: "The Weeknd", dur: "5:25", src: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&q=80" },
  { title: "The Morning", artist: "The Weeknd", dur: "5:15", src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80" },
  { title: "House of Balloons / Glass Table Girls", artist: "The Weeknd", dur: "6:47", src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80" },
  { title: "High for This", artist: "The Weeknd", dur: "4:07", src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80" },
  { title: "The Zone", artist: "The Weeknd feat. Drake", dur: "5:16", src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80" },
  { title: "What You Need", artist: "The Weeknd", dur: "4:35", src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80" },
  { title: "The Party & The After Party", artist: "The Weeknd", dur: "7:39", src: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=600&q=80" },
];

const joys = [
  { icon: Music, title: "On Repeat", text: "Yves Tumor, Japanese Breakfast, and that one Beach House album again." },
  { icon: Globe, title: "Internet Finds", text: "Musicforprogramming.net — 48 episodes of algorithmic flow state." },
  { icon: Lightbulb, title: "Late Night Ideas", text: "A search engine that only shows results from before 2010." },
  { icon: Heart, title: "Obsessed With", text: "Muji 0.38mm pens, yerba mate, and fermentation experiments." },
];

export function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const track = queueTracks[currentTrack];
  const [playedMin, playedSec] = track.dur.split(":").map(Number);
  const progressPct = isPlaying ? 38 : 0;

  const handlePrev = () => setCurrentTrack((p) => (p > 0 ? p - 1 : queueTracks.length - 1));
  const handleNext = () => setCurrentTrack((p) => (p < queueTracks.length - 1 ? p + 1 : 0));
  const handlePlayPause = () => setIsPlaying((p) => !p);

  return (
    <>
      <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden pt-20">
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-[var(--color-matcha)]/5 blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-[var(--color-denim)]/4 blur-3xl" />
        </motion.div>

        <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-dot badge-dot-pink" />
                <span className="cozy-label text-[var(--color-accent)]">cozy corner &bull; issue 01</span>
              </div>
              <h1 className="cozy-heading-xl text-[var(--color-text)] mb-4">
                hi there, i'm
                <span className="block text-[var(--color-accent)]">wanderer</span>
              </h1>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-lg font-light leading-relaxed mb-8">
                a developer, curious human, and collector of half-baked ideas.
                this is my cozy corner of the internet — where i share things i'm
                building, learning, reading, and thinking about.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#work" className="cozy-btn cozy-btn-primary">
                  see what i do <ArrowDown size={14} />
                </a>
                <a href="#reading" className="cozy-btn cozy-btn-ghost">
                  what i'm reading
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative">
                <Mascot size={200} pose="working" className="animate-cozy-float" />
                <motion.div
                  className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-[var(--color-matcha)]/20 border border-[var(--color-matcha)]/30"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-xs font-round font-semibold text-[var(--color-matcha)]">building things</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="work" className="py-10 md:py-14 px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-12">
          <Mascot size={48} pose="studying" className="flex-shrink-0" />
          <div>
            <span className="cozy-label text-[var(--color-matcha)]">Things I Build</span>
            <h2 className="cozy-heading text-3xl md:text-4xl mt-0.5">side projects & experiments</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div key={p.name} {...springCard(i)} className="cozy-card p-5 md:p-6 group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-round font-bold text-base group-hover:text-[var(--color-accent)] transition-colors">{p.name}</h3>
                <span className="text-xs font-mono text-[var(--color-text-secondary)]">{p.lines} LOC</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] font-light mb-3">{p.desc}</p>
              <div className="flex items-center gap-2">
                <span className="tag-pill tag-green">{p.tech}</span>
                <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-0.5 ml-auto group-hover:text-[var(--color-accent)] transition-colors">
                  view <ArrowUpRight size={11} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="learning" className="py-10 md:py-14 px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-12">
          <Mascot size={48} pose="reading" className="flex-shrink-0" />
          <div>
            <span className="cozy-label text-[var(--color-denim)]">Curiosity Log</span>
            <h2 className="cozy-heading text-3xl md:text-4xl mt-0.5">currently learning</h2>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {learning.map((l, i) => (
            <motion.div key={l.topic} {...springCard(i)} className="cozy-card p-5 md:p-6 text-center">
              <span className="tag-pill tag-blue inline-block mb-3">{l.tag}</span>
              <h3 className="font-round font-bold text-base mb-2">{l.topic}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] font-light">{l.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="til" className="py-10 md:py-14 px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-12">
          <Mascot size={48} pose="studying" className="flex-shrink-0" />
          <div>
            <span className="cozy-label text-[var(--color-accent)]">Today I Learned</span>
            <h2 className="cozy-heading text-3xl md:text-4xl mt-0.5">curious facts & discoveries</h2>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {til.map((t, i) => (
            <motion.div key={t.fact} {...springCard(i)} className="cozy-card p-5 md:p-6">
              <span className="tag-pill tag-pink inline-block mb-2">{t.cat}</span>
              <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">{t.fact}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14 px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="cozy-card p-6 md:p-8 text-center cozy-glow relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30">
            <span className="text-xs font-round font-semibold text-[var(--color-accent)]">random thought</span>
          </div>
          <p className="text-lg md:text-xl font-light italic text-[var(--color-text)] leading-relaxed mt-4">
            "maybe the opposite of burnout isn't rest. it's doing things that make you forget to check your phone."
          </p>
        </motion.div>
      </section>

      <section id="reading" className="py-10 md:py-14 px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-12">
          <Mascot size={48} pose="tea" className="flex-shrink-0" />
          <div>
            <span className="cozy-label text-[var(--color-accent)]">Bookshelf</span>
            <h2 className="cozy-heading text-3xl md:text-4xl mt-0.5">books i've loved</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {books.map((b, i) => (
            <motion.div key={b.title} {...springCard(i)} className="cozy-card overflow-hidden group">
              <div className="cozy-image aspect-[4/3]">
                <img src={b.src} alt={b.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-round font-bold text-base mb-0.5">{b.title}</h3>
                <p className="text-xs font-round font-semibold text-[var(--color-accent)] mb-2">{b.author}</p>
                <p className="text-sm text-[var(--color-text-secondary)] font-light italic">"{b.thought}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="joys" className="py-10 md:py-14 px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-12">
          <span className="cozy-label text-[var(--color-matcha)]">Little Things</span>
          <h2 className="cozy-heading text-3xl md:text-4xl mt-0.5">small joys & curiosities</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {joys.map((j, i) => (
            <motion.div key={j.title} {...springCard(i)} className="cozy-card p-5 md:p-6 group">
              <j.icon size={18} className="text-[var(--color-accent)] mb-3" />
              <h3 className="font-round font-bold text-sm mb-1.5 group-hover:text-[var(--color-accent)] transition-colors">{j.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] font-light">{j.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="music" className="py-10 md:py-14 px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-12">
          <Mascot size={48} pose="working" className="flex-shrink-0" />
          <div>
            <span className="cozy-label text-[var(--color-denim)]">Soundtrack</span>
            <h2 className="cozy-heading text-3xl md:text-4xl mt-0.5">music i love</h2>
          </div>
        </motion.div>

        <motion.div {...springCard(0)} className="cozy-card overflow-hidden mb-6">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative min-h-[280px]">
              <div className="absolute inset-0 rounded-none overflow-hidden">
                <motion.img
                  key={track.title}
                  src={track.src}
                  alt=""
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease }}
                />
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-surface)]/80 backdrop-blur-sm border border-[var(--color-border)]/50">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--color-matcha)]"
                  animate={{ opacity: isPlaying ? [1, 0.3, 1] : 0.3 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[10px] font-round font-semibold text-[var(--color-text)]">{isPlaying ? "now playing" : "paused"}</span>
              </div>
            </div>
            <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="badge-dot badge-dot-pink" />
                <span className="ml-2 text-xs font-round font-semibold text-[var(--color-accent)] uppercase tracking-wider">featured artist</span>
                <h3 className="font-round font-bold text-2xl md:text-3xl mt-2">The Weeknd</h3>
                <p className="text-sm text-[var(--color-text-secondary)] font-light mt-1 mb-4 leading-relaxed max-w-lg">
                  blends R&B, synth-pop, and emotional storytelling into cinematic soundscapes.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="tag-pill tag-pink">dark</span>
                  <span className="tag-pill tag-blue">emotional</span>
                  <span className="tag-pill tag-green">cinematic</span>
                  <span className="tag-pill tag-pink">late-night</span>
                </div>
              </div>
              <div className="space-y-3">
                <motion.div key={track.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease }}>
                  <p className="font-round font-bold text-sm text-[var(--color-text)]">{track.title}</p>
                  <p className="text-xs text-[var(--color-text-secondary)] font-light">{track.artist}</p>
                </motion.div>
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-accent-dark)] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SkipBack size={16} className="text-[var(--color-surface)]" />
                  </motion.button>
                  <motion.button
                    onClick={handlePlayPause}
                    className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-accent-dark)] transition-colors"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? <Pause size={18} className="text-[var(--color-surface)]" /> : <Play size={18} className="text-[var(--color-surface)] ml-0.5" />}
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-accent-dark)] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SkipForward size={16} className="text-[var(--color-surface)]" />
                  </motion.button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[var(--color-text-secondary)]">1:24</span>
                  <div className="flex-1 h-1.5 rounded-full bg-[var(--color-border)] overflow-hidden">
                    <motion.div
                      key={track.title}
                      className="h-full rounded-full bg-[var(--color-accent)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPct}%` }}
                      transition={{ duration: 0.8, ease }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-text-secondary)]">{track.dur}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] font-light">
                  <ListMusic size={12} />
                  <span>{track.title} &bull; Trilogy</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          <div className="md:col-span-3">
            <motion.div {...fadeUp(0.1)} className="cozy-card overflow-hidden h-full">
              <div className="p-4 md:p-5 border-b border-[var(--color-border)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ListMusic size={14} className="text-[var(--color-accent)]" />
                  <span className="text-xs font-round font-semibold uppercase tracking-wider text-[var(--color-text)]">queue</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--color-text-secondary)]">{queueTracks.length} tracks</span>
              </div>
              <div className="divide-y divide-[var(--color-border)]/50">
                {queueTracks.map((t, i) => (
                  <motion.div
                    key={t.title}
                    onClick={() => { setCurrentTrack(i); setIsPlaying(true); }}
                    className={`flex items-center gap-3 px-4 md:px-5 py-3 transition-colors hover:bg-[var(--color-accent)]/5 group/track cursor-pointer ${i === currentTrack ? "bg-[var(--color-accent)]/5 border-l-2 border-[var(--color-accent)]" : ""}`}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className={`w-5 text-xs font-mono font-medium tabular-nums ${i === currentTrack ? "text-[var(--color-accent)]" : "text-[var(--color-text-secondary)]"}`}>{String(i + 1).padStart(2, "0")}</span>
                    <div className="w-9 h-9 rounded-md overflow-hidden flex-shrink-0 bg-[var(--color-surface-alt)]">
                      <img src={t.src.replace("w=600", "w=100")} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm truncate ${i === currentTrack ? "font-bold text-[var(--color-accent)]" : "font-medium text-[var(--color-text)]"}`}>{t.title}</p>
                      <p className="text-[11px] text-[var(--color-text-secondary)] font-light">{t.artist}</p>
                    </div>
                    <Heart size={13} className="text-[var(--color-text-secondary)] opacity-50 group-hover/track:opacity-100 transition-opacity hover:text-[var(--color-accent)]" />
                    <span className="text-[11px] font-mono text-[var(--color-text-secondary)]">{t.dur}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <motion.div {...fadeUp(0.15)} className="cozy-card overflow-hidden h-full">
              <div className="p-4 md:p-5 border-b border-[var(--color-border)]">
                <span className="cozy-label text-[var(--color-matcha)]">On Repeat</span>
                <h3 className="font-round font-bold text-lg mt-1">current rotation</h3>
              </div>
              <div className="p-4 md:p-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { src: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80", label: "Yves Tumor" },
                    { src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&q=80", label: "Beach House" },
                    { src: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&q=80", label: "Japanese Breakfast" },
                    { src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=300&q=80", label: "Caroline Polachek" },
                  ].map((album, i) => (
                    <motion.div key={album.label} {...springCard(i + 1)} className="cozy-card overflow-hidden group">
                      <div className="cozy-image aspect-square rounded-none">
                        <img src={album.src} alt={album.label} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-2.5 text-center">
                        <p className="text-xs font-round font-semibold text-[var(--color-text-secondary)] truncate">{album.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      <section className="py-10 md:py-14 px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center">
          <div className="flex justify-center mb-6">
            <Mascot size={80} pose="tea" className="animate-cozy-float" />
          </div>
          <div className="cozy-divider mb-8" />
          <p className="text-xs font-round font-semibold text-[var(--color-text-secondary)] mb-2 tracking-widest uppercase">
            volume 01 &bull; summer 2026
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-light">
            made with curiosity, caffeine, and a black cat who supervises everything.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="badge-dot badge-dot-pink" />
            <span className="badge-dot badge-dot-green" />
            <span className="badge-dot badge-dot-blue" />
          </div>
        </motion.div>
      </section>
    </>
  );
}
