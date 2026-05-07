import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Acasă" },
  { to: "/#", label: "Ebook" },
  { to: "/#", label: "Mărturii" },
  { to: "/#", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="stop-poprire">
          <img src={logo} alt="stop-poprire" className="h-13 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <a key={n.to} href={n.to} className="text-foreground/70 hover:text-ink transition-colors">
              {n.label}
            </a>
          ))}
          <Link
            to="/ebook"
            className="ml-2 inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream hover:bg-ink/90 transition"
          >
            Cumpără ebook
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-5 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <a key={n.to} href={n.to} onClick={() => setOpen(false)} className="text-foreground/80">
                {n.label}
              </a>
            ))}
            <Link
              to="/ebook"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-cream"
            >
              Cumpără ebook
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}