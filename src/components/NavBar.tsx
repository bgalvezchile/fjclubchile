import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/logo-circle.jpg"
            alt="FJ Club Chile"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/galeria"
            className="font-display text-sm font-medium uppercase tracking-wider text-ink/70 transition-colors hover:text-rust"
          >
            Galería
          </Link>
          <Link
            href="/equipamiento"
            className="hidden font-display text-sm font-medium uppercase tracking-wider text-ink/70 transition-colors hover:text-rust sm:inline"
          >
            Equipamiento
          </Link>
          <Link
            href="/ruta5"
            className="rounded-sm bg-rust px-4 py-2 font-display text-sm font-medium uppercase tracking-wider text-bone transition-colors hover:bg-rust-dark"
          >
            Inscripción 5ª Ruta
          </Link>
        </div>
      </div>
    </header>
  );
}
