import { GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";

import { brand } from "@/lib/site-data";

export function LogoMark() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label={brand.name}>
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/80 shadow-soft backdrop-blur-xl">
        <span className="relative flex">
          <GraduationCap className="h-5 w-5 text-ink" />
          <Sparkles className="absolute -right-2 -top-1 h-3.5 w-3.5 text-accent" />
        </span>
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold tracking-[0.18em] text-black/45">
          FACULTYOS
        </span>
        <span className="text-sm text-ink/70">AI Academy</span>
      </span>
    </Link>
  );
}
