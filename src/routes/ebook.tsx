import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Download, ArrowRight, Facebook, Youtube, Music2, Share2 } from "lucide-react";
import { useState } from "react";
import ebookCover from "@/assets/ebook-cover.png";

export const Route = createFileRoute("/ebook")({
  head: () => ({
    meta: [
      { title: "Ebook — Ghid Supraviețuire Executare Silită | stop-poprire" },
      { name: "description", content: "Cumpără ghidul practic despre poprire și executare silită. PDF + Mobile, descărcare instant, plată Stripe securizată." },
      { property: "og:title", content: "Ghid Supraviețuire Executare Silită — Ediția 2026" },
      { property: "og:description", content: "Ghid complet despre poprire și executare silită." },
    ],
  }),
  component: EbookPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22,1,0.36,1] as const },
};

const faqs = [
  { q: "În ce format primesc ebook-ul?", a: "Primești un PDF de înaltă calitate, optimizat pentru desktop, tabletă și mobil." },
  { q: "Cât durează livrarea?", a: "Imediat după plată ești redirecționat către pagina de descărcare și primești și un email cu linkul." },
  { q: "Ce metode de plată acceptați?", a: "Card bancar prin Stripe (Visa, Mastercard) — securizat și criptat." },
  { q: "Pot cere returnarea banilor?", a: "Da, oferim garanție 14 zile fără întrebări." },
  { q: "Conținutul este actualizat?", a: "Ediția 2026 conține cele mai recente reglementări și exemple practice." },
];

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  maxLength,
  inputMode,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  inputMode?: "text" | "numeric" | "tel" | "email";
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] uppercase tracking-widest text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        autoComplete="off"
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-ink placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
      />
    </div>
  );
}

function EbookPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://stop-poprire.ro/ebook";
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "România",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const formatCard = (v: string) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const formatExpiry = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (form.name.trim().length < 2) return setError("Introdu numele complet.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError("Email invalid.");
    if (form.phone.replace(/\D/g, "").length < 9) return setError("Număr de telefon invalid.");
    if (form.address.trim().length < 5) return setError("Introdu adresa completă.");
    if (form.city.trim().length < 2) return setError("Introdu orașul.");
    if (form.postalCode.trim().length < 4) return setError("Cod poștal invalid.");
    if (form.cardName.trim().length < 2) return setError("Introdu numele de pe card.");
    if (form.cardNumber.replace(/\s/g, "").length < 13) return setError("Număr de card invalid.");
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) return setError("Data expirării trebuie să fie LL/AA.");
    if (form.cvc.length < 3) return setError("CVC invalid.");
    setSubmitting(true);
    // TODO: call Stripe Checkout server fn once Lovable Cloud + Payments are enabled.
    await new Promise((r) => setTimeout(r, 600));
    navigate({ to: "/checkout-success" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 30, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 2 }} transition={{ duration: 1, ease: [0.22,1,0.36,1] }} className="relative order-2 md:order-1">
            <div className="absolute -inset-10 bg-accent/15 blur-3xl rounded-full" />
            <div className="relative mx-auto w-[280px] sm:w-[360px] aspect-[3/5] rounded-md overflow-hidden shadow-2xl shadow-ink/30 ring-1 ring-ink/10">
              <img src={ebookCover} alt="Coperta ebook" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="order-1 md:order-2">
            <span className="text-xs uppercase tracking-widest text-accent">Ediția 2026 · PDF</span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-[1.05]">
              Ghid Supraviețuire <span className="italic">Executare Silită</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Resursa completă pentru a înțelege poprirea, a-ți cunoaște drepturile și a-ți proteja veniturile — pas cu pas.
            </p>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-5xl text-ink">49 lei</span>
              <span className="text-muted-foreground line-through">79 lei</span>
              <span className="rounded-full bg-accent/10 text-accent text-xs px-2 py-1">-38%</span>
            </div>
            <a href="#cumpara" className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-cream hover:bg-ink/90 transition">
              Cumpără acum <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck size={14} className="text-accent" /> Plată securizată Stripe · Garanție 14 zile
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description / outcomes */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8 py-24">
        <motion.div {...fadeUp} className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-accent">Pentru cine</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink">Pentru oricine vrea control asupra finanțelor sale.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Indiferent dacă ai deja o poprire activă sau vrei doar să fii pregătit, acest ghid îți oferă claritate și pași concreți de urmat.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Cum se calculează cuantumul popririi",
            "Sumele exceptate și protejate de lege",
            "Cum suspenzi sau contești o executare",
            "Negocierea cu creditorii și executorul",
            "Drepturile angajatului popritor",
            "Modele de cereri și contestații",
            "Termene legale și proceduri",
            "Strategii pentru recuperarea financiară",
          ].map((t) => (
            <div key={t} className="flex gap-3 py-3 border-b border-border/60">
              <Check size={18} className="text-accent mt-0.5 shrink-0" />
              <span className="text-foreground/85">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Buy */}
      <section id="cumpara" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-24 text-center">
          <motion.div {...fadeUp} className="rounded-3xl bg-background border border-border p-10 md:p-14 shadow-xl shadow-ink/5">
            <span className="text-xs uppercase tracking-widest text-accent">Ofertă lansare</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink">Ghid complet — PDF</h2>
            <div className="mt-8 flex items-baseline justify-center gap-3">
              <span className="font-display text-6xl text-ink">49</span>
              <span className="text-2xl text-muted-foreground">lei</span>
            </div>
            <ul className="mt-8 text-left max-w-sm mx-auto space-y-3 text-sm">
              {["Acces instant după plată", "PDF + versiune mobil", "Actualizări gratuite ediția 2026", "Garanție 14 zile"].map(t => (
                <li key={t} className="flex gap-2 text-foreground/85"><Check size={16} className="text-accent mt-0.5" />{t}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto text-left space-y-6">
              {/* Contact */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-accent">Date de contact</h3>
                <Field id="name" label="Nume complet" value={form.name} onChange={update("name")} placeholder="Ion Popescu" maxLength={100} />
                <div className="grid grid-cols-2 gap-3">
                  <Field id="email" label="Email" type="email" value={form.email} onChange={update("email")} placeholder="ion@email.com" maxLength={255} />
                  <Field id="phone" label="Telefon" type="tel" value={form.phone} onChange={update("phone")} placeholder="07xx xxx xxx" maxLength={20} />
                </div>
              </div>

              {/* Billing */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-accent">Adresă facturare</h3>
                <Field id="address" label="Adresă" value={form.address} onChange={update("address")} placeholder="Str. Exemplu nr. 12, ap. 4" maxLength={200} />
                <div className="grid grid-cols-2 gap-3">
                  <Field id="city" label="Oraș" value={form.city} onChange={update("city")} placeholder="București" maxLength={80} />
                  <Field id="postalCode" label="Cod poștal" value={form.postalCode} onChange={update("postalCode")} placeholder="010101" maxLength={20} />
                </div>
                <Field id="country" label="Țară" value={form.country} onChange={update("country")} maxLength={80} />
              </div>

              {/* Payment */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-accent flex items-center gap-2">
                  <ShieldCheck size={12} /> Date card
                </h3>
                <Field id="cardName" label="Nume pe card" value={form.cardName} onChange={update("cardName")} placeholder="ION POPESCU" maxLength={100} />
                <Field
                  id="cardNumber"
                  label="Număr card"
                  inputMode="numeric"
                  value={form.cardNumber}
                  onChange={(e) => setForm((f) => ({ ...f, cardNumber: formatCard(e.target.value) }))}
                  placeholder="4242 4242 4242 4242"
                  maxLength={19}
                />
                <div className="grid grid-cols-2 gap-3">
                  <Field
                    id="expiry"
                    label="Expirare"
                    inputMode="numeric"
                    value={form.expiry}
                    onChange={(e) => setForm((f) => ({ ...f, expiry: formatExpiry(e.target.value) }))}
                    placeholder="LL/AA"
                    maxLength={5}
                  />
                  <Field
                    id="cvc"
                    label="CVC"
                    inputMode="numeric"
                    value={form.cvc}
                    onChange={(e) => setForm((f) => ({ ...f, cvc: e.target.value.replace(/\D/g, "").slice(0, 4) }))}
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-cream hover:bg-ink/90 transition disabled:opacity-60"
              >
                <Download size={16} /> {submitting ? "Se procesează…" : "Plătește 49 lei"}
              </button>
              <p className="text-center text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
                <ShieldCheck size={12} className="text-accent" /> Plată criptată SSL · Garanție 14 zile
              </p>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">Demo — activează Lovable Cloud + Stripe pentru a procesa plățile reale și a emite factura.</p>

            {/* Share */}
            <div className="mt-10 pt-8 border-t border-border flex items-center justify-center gap-3 text-xs text-muted-foreground">
              <Share2 size={14} /> Distribuie:
              <a aria-label="Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="rounded-full border border-border p-2 hover:bg-ink hover:text-cream transition"><Facebook size={14} /></a>
              <a aria-label="TikTok" href="https://tiktok.com" target="_blank" rel="noreferrer" className="rounded-full border border-border p-2 hover:bg-ink hover:text-cream transition"><Music2 size={14} /></a>
              <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded-full border border-border p-2 hover:bg-ink hover:text-cream transition"><Youtube size={14} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-24">
        <motion.div {...fadeUp} className="text-center">
          <span className="text-xs uppercase tracking-widest text-accent">Întrebări frecvente</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink">Ce vrei să știi.</h2>
        </motion.div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left py-5 group">
              <div className="flex justify-between items-center gap-4">
                <span className="font-medium text-ink">{f.q}</span>
                <span className="text-accent text-xl leading-none">{openFaq === i ? "−" : "+"}</span>
              </div>
              {openFaq === i && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</motion.p>
              )}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}