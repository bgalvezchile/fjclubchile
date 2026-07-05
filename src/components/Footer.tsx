import Image from "next/image";

export default function Footer() {
  return (
    <footer className="topo-bg-dark border-t border-bone/10 bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <div className="flex items-center justify-center">
          <Image
            src="/logos/logo-circle.jpg"
            alt="FJ Club Chile"
            width={56}
            height={56}
            className="rounded-full"
          />
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
