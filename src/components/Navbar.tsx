"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { IconClose, IconMenu, IconLogo } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/environments", label: "Environments" },
  { href: "/integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[var(--primary)] py-2 text-center text-xs font-medium text-white">
        🚀 Ralnoria is in open beta — get provisioned in under 10 minutes.
      </div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--ink)]">
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]">
              <IconLogo className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-white">
              ralnoria
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-light)] lg:inline-flex"
          >
            Free trial
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-white lg:hidden"
          >
            {open ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </Container>

        {open && (
          <div className="border-t border-white/10 lg:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-2 py-2.5 text-sm font-medium transition-colors ${
                      active ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-lg bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Free trial
              </Link>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
