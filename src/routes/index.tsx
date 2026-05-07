import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ShieldCheck, Sparkles, Star, Check } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "stop-poprire — Ghid practic pentru executarea silită" },
      { name: "description", content: "Ebook practic care te ajută să înțelegi poprirea și executarea silită, pas cu pas." },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroBg} alt="" aria-hidden width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-background/60 to-background" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Sparkles size={12} className="text-accent" /> Ediția 2026
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] text-ink">
              Înțelege poprirea.<br />
              <span className="italic text-accent">Protejează-ți</span> veniturile.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Un ghid clar, practic și uman despre executarea silită — scris pentru oameni reali, nu pentru juriști.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/ebook" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream hover:bg-ink/90 transition">
                Get the Ebook
                <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
              </Link>
              <a href="#beneficii" className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-medium text-ink hover:bg-secondary transition">
                Vezi ce conține
              </a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-sand to-clay/40" />)}
              </div>
              <span><strong className="text-ink">+1.200</strong> cititori și-au organizat finanțele</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40, rotate: -3 }} animate={{ opacity: 1, y: 0, rotate: -3 }} transition={{ duration: 1, ease: [0.22,1,0.36,1] }} className="relative mx-auto">
            <div className="absolute -inset-10 bg-accent/10 blur-3xl rounded-full" />
            <div className="relative w-[260px] sm:w-[320px] aspect-[3/5] rounded-md overflow-hidden shadow-2xl shadow-ink/20 ring-1 ring-ink/5">
              <img src={ebookCover} alt="Coperta ebook Stop Poprire" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-cream/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-6 flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-widest text-muted-foreground">
          <span>Plată securizată Stripe</span>
          <span className="hidden sm:inline">•</span>
          <span>Descărcare instant</span>
          <span className="hidden sm:inline">•</span>
          <span>Garanție 14 zile</span>
          <span className="hidden sm:inline">•</span>
          <span>PDF + Mobile</span>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-24 text-center">
        <motion.div {...fadeUp}>
          <span className="text-xs uppercase tracking-widest text-accent">Despre autor</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink">Scris din experiență, nu din teorie.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Stop-Poprire.ro este un proiect de educație financiară bazat pe experiență personală, dedicat celor care vor să înțeleagă clar poprirea, datoriile și executarea silită — fără jargon, fără frici inutile.
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <section id="beneficii" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-accent">Beneficii</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink">Tot ce-ți trebuie ca să nu mai fii surprins.</h2>
          </motion.div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Pași clari", text: "Procesul de executare silită explicat etapă cu etapă, în limbaj uman." },
              { icon: ShieldCheck, title: "Drepturile tale", text: "Ce poți contesta, ce este ilegal și cum reacționezi corect." },
              { icon: Sparkles, title: "Exemple reale", text: "Cazuri practice și șabloane pentru a-ți organiza situația financiară." },
            ].map((b, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="rounded-2xl bg-background p-7 border border-border/60 hover:shadow-lg hover:shadow-ink/5 transition">
                <b.icon size={22} className="text-accent" />
                <h3 className="mt-5 font-display text-xl text-ink">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the book */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.div {...fadeUp}>
          <span className="text-xs uppercase tracking-widest text-accent">Conținut</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink">Ce vei învăța</h2>
          <ul className="mt-8 space-y-4">
            {[
              "Ce înseamnă poprirea și cum funcționează exact",
              "Sumele care nu pot fi poprite — protecția salariului minim",
              "Cum contești o executare silită incorectă",
              "Cum negociezi cu executorul și creditorul",
              "Documente, termene și formulare gata de folosit",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-foreground/85">
                <Check size={18} className="text-accent mt-0.5 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-6 bg-clay/10 blur-3xl rounded-full" />
          <img src={ebookCover} alt="Ebook" className="relative mx-auto w-[280px] aspect-[3/5] object-cover rounded-md shadow-xl shadow-ink/20" />
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimoniale" className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-accent">Mărturii</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Ce spun cititorii.</h2>
          </motion.div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { name: "Andrei M.", role: "Angajat cu poprire pe salariu", quote: "Cele mai clare explicații pe care le-am găsit. Am înțeles ce pași pot urma și mi-am organizat plățile lunare." },
              { name: "Ioana D.", role: "Antreprenor", quote: "Mi-a salvat timp și nervi. Limbaj simplu, exemple practice — exact ce-mi trebuia." },
              { name: "Radu P.", role: "Cititor", quote: "Mi-a redat sentimentul că pot controla situația. Recomand cu încredere." },
            ].map((t, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="rounded-2xl bg-cream/5 border border-cream/10 p-7 backdrop-blur">
                <div className="flex gap-0.5 text-accent">{Array.from({length:5}).map((_,j)=><Star key={j} size={14} fill="currentColor" />)}</div>
                <p className="mt-4 text-sm leading-relaxed text-cream/85">"{t.quote}"</p>
                <div className="mt-6 text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-cream/50 text-xs">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-4xl px-5 sm:px-8 py-28 text-center">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-4xl sm:text-5xl text-ink">Începe astăzi.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Descarcă ghidul și obține claritate în mai puțin de o oră de citit.</p>
          <Link to="/ebook" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition">
            Get the Ebook <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
          <p className="mt-6 text-xs text-muted-foreground">contact@stop-poprire.ro · Galați, România</p>
        </motion.div>
      </section>
    </>
  );
}