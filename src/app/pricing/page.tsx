import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Ralnoria pricing — a free beta tier for startup teams managing their first few services, a Team tier for production workloads, and custom Enterprise plans.",
  alternates: {
    canonical: "/pricing",
  },
};

const tiers = [
  {
    name: "Beta",
    price: "$0",
    period: "while in beta",
    description: "For a startup team orchestrating its first few services.",
    cta: "Start free trial",
    href: "/contact",
    variant: "outline" as const,
    features: [
      "Up to 3 services",
      "Ephemeral environments included",
      "7-day deployment history",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$450",
    period: "per month",
    description: "For teams running production infrastructure daily.",
    cta: "Start free trial",
    href: "/contact",
    variant: "solid" as const,
    highlighted: true,
    features: [
      "Unlimited services",
      "90-day deployment history",
      "Custom approval and drift policies",
      "Priority email and chat support",
      "Role-based access for your whole team",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual contract",
    description: "For organizations with dedicated infrastructure needs.",
    cta: "Talk to us",
    href: "/contact",
    variant: "outline" as const,
    features: [
      "Everything in Team",
      "Dedicated infrastructure and SSO",
      "Custom data retention and residency",
      "A named engineer for onboarding",
    ],
  },
];

const comparisonRows = [
  { label: "Services", beta: "Up to 3", team: "Unlimited", enterprise: "Unlimited" },
  { label: "Deployment history", beta: "7 days", team: "90 days", enterprise: "Custom" },
  { label: "Drift policies", beta: "Basic", team: "Advanced", enterprise: "Advanced" },
  { label: "SSO & RBAC", beta: "—", team: "Team roles", enterprise: "Full SSO" },
  { label: "Support", beta: "Community", team: "Priority", enterprise: "Dedicated" },
];

const faqs = [
  {
    q: "Is the Beta tier a time-limited trial?",
    a: "No — it's free for as long as you stay within 3 services, not a trial with an expiry date. We're a startup ourselves and want teams to actually run it before paying for it.",
  },
  {
    q: "What happens if we outgrow the Beta tier?",
    a: "We'll reach out before anything is restricted. You can upgrade to Team at that point, or talk to us if the limit doesn't fit how you're using Ralnoria.",
  },
  {
    q: "Do you charge based on cloud spend or resource usage?",
    a: "No — pricing is per workspace, not a percentage of your cloud bill. Your cloud provider costs are separate and billed directly by AWS, GCP, or Azure.",
  },
  {
    q: "Can we switch tiers later?",
    a: "Yes, at any time. Downgrading takes effect at the start of your next billing cycle; upgrading takes effect immediately.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
              Priced for a startup team, not an enterprise procurement cycle
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              No percentage-of-cloud-spend pricing and no sales call
              required to see numbers. Start free, upgrade when
              infrastructure orchestration moves from nice-to-have to
              load-bearing.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 40}>
                <div
                  className={`flex h-full flex-col rounded-2xl p-7 ${
                    t.highlighted
                      ? "border-2 border-[var(--primary)] bg-white"
                      : "border border-[var(--border)] bg-white"
                  }`}
                >
                  {t.highlighted && (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[var(--primary)] px-3 py-1 text-[11px] font-semibold text-white">
                      Most teams start here
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-[var(--ink)]">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">
                    {t.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--ink)]">
                      {t.price}
                    </span>
                    <span className="text-xs text-[var(--fg-muted)]">
                      {t.period}
                    </span>
                  </div>
                  <Button href={t.href} variant={t.variant} className="mt-6 justify-center">
                    {t.cta}
                  </Button>
                  <ul className="mt-7 flex flex-col gap-3">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-[var(--ink)]"
                      >
                        <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="teal">Compare</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              Full comparison
            </h2>
          </Reveal>
          <Reveal delay={60} className="mt-10 overflow-x-auto rounded-2xl border border-[var(--border)] bg-white">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] text-left">
                  <th className="px-5 py-4 font-semibold text-[var(--ink)]">Feature</th>
                  <th className="px-5 py-4 font-semibold text-[var(--ink)]">Beta</th>
                  <th className="px-5 py-4 font-semibold text-[var(--ink)]">Team</th>
                  <th className="px-5 py-4 font-semibold text-[var(--ink)]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-5 py-4 font-medium text-[var(--ink)]">{row.label}</td>
                    <td className="px-5 py-4 text-[var(--fg-muted)]">{row.beta}</td>
                    <td className="px-5 py-4 text-[var(--fg-muted)]">{row.team}</td>
                    <td className="px-5 py-4 text-[var(--fg-muted)]">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              Pricing FAQ
            </h2>
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <FaqAccordion items={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
