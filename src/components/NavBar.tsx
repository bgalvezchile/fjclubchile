import Link from "next/link";
import { Compass } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-semibold uppercase tracking-wide text-ink"
        >
          <Compass className="h-6 w-6 text-rust" strokeWidth={2.2} />
          FJ Club <span className="text-rust">Chile</span>
        </Link>

        <Link
          href="/ruta5"
          className="rounded-sm bg-rust px-4 py-2 font-display text-sm font-medium uppercase tracking-wider text-bone transition-colors hover:bg-rust-dark"
        >
          Inscripción 5ª Ruta
        </Link>
      </div>
    </header>
  );
}
