import Link from "next/link";
import { Container } from "./Container";
import { IconLogo } from "./icons";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/platform", label: "Platform" },
      { href: "/environments", label: "Environments" },
      { href: "/integrations", label: "Integrations" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--ink)] text-white/60">
      <Container className="flex flex-col gap-12 py-16 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]">
              <IconLogo className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-white">
              ralnoria
            </span>
          </div>
          <p className="mt-4 text-sm leading-6">
            One orchestration layer for cloud environments, deployments,
            configurations, and operations — built from Lalitpur, Nepal.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold text-white">
                {col.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {col.links.map((l, i) => (
                  <li key={`${l.href}-${i}`}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Ralnoria. All rights reserved.</p>
          <p>Cloud infrastructure orchestration, built from Lalitpur, Nepal.</p>
        </Container>
      </div>
    </footer>
  );
}
