"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Compass } from "lucide-react";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/salidas", label: "Salidas" },
  { href: "/galeria", label: "Galería" },
  { href: "/directorio", label: "Directorio" },
  { href: "/contacto", label: "Contacto" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-semibold uppercase tracking-wide text-ink"
          onClick={() => setOpen(false)}
        >
          <Compass className="h-6 w-6 text-rust" strokeWidth={2.2} />
          FJ Club <span className="text-rust">Chile</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium uppercase tracking-wider text-ink/70 transition-colors hover:text-rust"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="rounded-sm bg-ink px-4 py-2 font-display text-sm font-medium uppercase tracking-wider text-bone transition-colors hover:bg-rust"
          >
            Únete
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-sand px-5 pb-5 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 font-display text-base font-medium uppercase tracking-wider text-ink/80 hover:text-rust"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
