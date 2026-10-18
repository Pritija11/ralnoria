"use client";

import { useState } from "react";
import { IconArrowRight } from "@/components/icons";

export function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-sm font-semibold text-[var(--ink)]">
                {item.q}
              </span>
              <IconArrowRight
                className={`h-4 w-4 flex-none text-[var(--fg-muted)] transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="px-6 pb-5 text-sm leading-6 text-[var(--fg-muted)]">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
