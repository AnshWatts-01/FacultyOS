import { Plus } from "lucide-react";

import type { FAQItem } from "@/lib/site-data";

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-[24px] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur-xl"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-[-0.03em] text-ink">
            {item.question}
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition group-open:rotate-45">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p className="mt-4 max-w-3xl pr-12 text-base leading-7 text-black/62">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
