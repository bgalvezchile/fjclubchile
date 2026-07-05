import Link from "next/link";
import { AtSign, Mail, Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="topo-bg-dark border-t border-bone/10 bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-wide">
              <Compass className="h-5 w-5 text-rust" />
              FJ Club Chile
            </div>
            <p className="mt-3 max-w-xs text-sm text-bone/60">
              Club de propietarios de Toyota FJ Cruiser. Cordillera, desierto
              y costa — un rodado a la vez.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-medium uppercase tracking-wider text-bone/50">
              Navegación
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/salidas" className="hover:text-rust">Salidas</Link></li>
              <li><Link href="/galeria" className="hover:text-rust">Galería</Link></li>
              <li><Link href="/directorio" className="hover:text-rust">Directorio</Link></li>
              <li><Link href="/contacto" className="hover:text-rust">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-medium uppercase tracking-wider text-bone/50">
              Encuéntranos
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-rust"
                >
                  <AtSign className="h-4 w-4" /> fjclubchile
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@fjclubchile.cl"
                  className="flex items-center gap-2 hover:text-rust"
                >
                  <Mail className="h-4 w-4" /> contacto@fjclubchile.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-bone/10 pt-6 font-mono text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} FJ Club Chile</span>
          <span>33.4489° S, 70.6693° W — Santiago, Chile</span>
        </div>
      </div>
    </footer>
  );
}
