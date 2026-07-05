import { Camera } from "lucide-react";

export default function PlaceholderPhoto({
  caption,
  ratio = "aspect-[4/3]",
  dark = false,
}: {
  caption: string;
  ratio?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden rounded-sm border ${
        dark
          ? "topo-bg-dark border-bone/10 bg-ink-2"
          : "topo-bg border-ink/10 bg-sand-2"
      }`}
    >
      <div className="absolute inset-0 flex items-end p-3">
        <div
          className={`flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide ${
            dark ? "text-bone/50" : "text-ink/45"
          }`}
        >
          <Camera className="h-3.5 w-3.5" strokeWidth={1.75} />
          {caption}
        </div>
      </div>
    </div>
  );
}
