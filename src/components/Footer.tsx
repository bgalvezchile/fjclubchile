import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="topo-bg-dark border-t border-bone/10 bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <div className="flex items-center justify-center gap-2 font-display text-lg font-semibold uppercase tracking-wide">
          <Compass className="h-5 w-5 text-rust" />
          FJ Club Chile
        </div>
        <p className="mt-3 font-mono text-xs text-bone/40">
          contacto@fjclubchile.cl
        </p>
        <p className="mt-6 font-mono text-xs text-bone/30">
          © {new Date().getFullYear()} FJ Club Chile
        </p>
      </div>
    </footer>
  );
}
