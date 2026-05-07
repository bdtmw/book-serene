import { Facebook, Youtube, Music2, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <img src={logo} alt="stop-poprire" className="h-20 w-auto" />
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Educație financiară practică pentru a înțelege poprirea și executarea silită.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-medium text-ink mb-1">Navigare</div>
          <Link to="/" className="text-muted-foreground hover:text-ink">Acasă</Link>
          <Link to="/ebook" className="text-muted-foreground hover:text-ink">Ebook</Link>
          <a href="/#contact" className="text-muted-foreground hover:text-ink">Contact</a>
        </div>
        <div>
          <div className="font-medium text-ink mb-3 text-sm">Urmărește-ne</div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" aria-label="Facebook" className="rounded-full border border-border p-2.5 hover:bg-ink hover:text-cream transition"><Facebook size={16} /></a>
            <a href="https://tiktok.com" aria-label="TikTok" className="rounded-full border border-border p-2.5 hover:bg-ink hover:text-cream transition"><Music2 size={16} /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="rounded-full border border-border p-2.5 hover:bg-ink hover:text-cream transition"><Youtube size={16} /></a>
            <a href="mailto:contact@stop-poprire.ro" aria-label="Email" className="rounded-full border border-border p-2.5 hover:bg-ink hover:text-cream transition"><Mail size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} stop-poprire.ro — Toate drepturile rezervate</span>
          <span>Galați, România</span>
        </div>
      </div>
    </footer>
  );
}