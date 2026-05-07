import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Download, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/checkout-success")({
  head: () => ({
    meta: [
      { title: "Mulțumim! Descarcă ebook-ul — stop-poprire" },
      { name: "description", content: "Plata a fost confirmată. Descarcă ghidul tău acum." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 py-24 text-center">
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", duration: 0.8 }} className="mx-auto w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center">
          <Check size={28} />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 font-display text-4xl sm:text-5xl text-ink">
          Mulțumim pentru achiziție.
        </motion.h1>
        <p className="mt-5 text-muted-foreground text-lg">
          Plata a fost confirmată. Ghidul tău este gata de descărcare — am trimis și un link pe email.
        </p>
        <a href="#" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-cream hover:bg-ink/90 transition">
          <Download size={16} /> Descarcă ebook-ul (PDF)
        </a>
        <div className="mt-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-ink inline-flex items-center gap-1">
            Înapoi la pagina principală <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}