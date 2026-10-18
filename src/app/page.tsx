import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Avatar } from "@/components/Avatar";
import { OrchestratorDiagram } from "@/components/mocks/OrchestratorDiagram";
import { EnvironmentGrid } from "@/components/mocks/EnvironmentGrid";
import { DeploymentTimeline } from "@/components/mocks/DeploymentTimeline";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconDrift,
  IconOps,
  IconConfig,
} from "@/components/icons";

const stats = [
  { value: "Beta", label: "Current stage" },
  { value: "10 min", label: "To first provisioned environment" },
  { value: "100%", label: "Changes logged and reversible" },
  { value: "Lalitpur", label: "Where we build" },
];

const problems = [
  {
    icon: IconConfig,
    tag: "SPRAWL",
    title: "Every team configures infrastructure its own way",
    body: "One team's Terraform doesn't match another's. By the time something breaks, nobody can say with confidence what's actually running where.",
  },
  {
    icon: IconDrift,
    tag: "DRIFT",
    title: "Production quietly stops matching what's in code",
    body: "A manual fix here, a console change there. Months later, the infrastructure-as-code repo is more of a suggestion than a source of truth.",
  },
  {
    icon: IconOps,
    tag: "BOTTLENECK",
    title: "Every deploy waits on a platform engineer",
    body: "Developers can't self-serve, so they file a ticket and wait — and the platform team becomes a queue instead of a force multiplier.",
  },
];

const capabilities = [
  {
    eyebrow: "Environments",
    title: "Ephemeral environments, spun up and torn down automatically",
    body: "Every pull request gets its own full environment, provisioned from the same rules as production and torn down the moment it's no longer needed — no idle infrastructure quietly racking up cost.",
    href: "/environments",
    mock: <EnvironmentGrid />,
  },
  {
    eyebrow: "Deployments",
    title: "One view of every deployment, from build to production",
    body: "See exactly where a deployment is stuck — build, test, staging, or waiting on an approval — instead of piecing it together across four different dashboards.",
    href: "/platform",
    mock: <DeploymentTimeline />,
  },
];

const testimonials = [
  {
    quote:
      "We went from a shared spreadsheet of \"who owns what environment\" to actually knowing what's running, in a weekend.",
    highlight: "actually knowing what's running",
    name: "Sagar Thapa",
    initials: "ST",
    role: "Platform engineer, early-access team",
  },
  {
    quote:
      "Config drift used to be something we found out about during an incident. Now it shows up on a dashboard before it becomes one.",
    highlight: "before it becomes one",
    name: "Nadia Petrov",
    initials: "NP",
    role: "DevOps lead, early-access team",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — dark navy, bold display headline */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[var(--ink)] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 0%, rgba(33,86,246,0.25), transparent 50%)",
          }}
        />
        <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              One orchestration layer for your whole cloud stack.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/65">
              Ralnoria connects the tools you already run — Terraform,
              Kubernetes, your CI/CD pipelines, your cloud accounts — into
              one governed layer for environments, deployments,
              configuration, and day-to-day operations. As a startup
              ourselves, we built it because every platform team we talked
              to was stitching this together by hand.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact">
                Free trial
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/platform" variant="dark">
                See the platform
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <OrchestratorDiagram />
          </Reveal>
        </Container>
      </section>

      {/* Stat strip */}
      <section className="border-b border-[var(--border)] py-10">
        <Container className="grid grid-cols-2 divide-x divide-[var(--border)] sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0">
              <p className="break-words font-[family-name:var(--font-display)] text-lg font-bold text-[var(--ink)] sm:text-2xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* The problem */}
      <section className="py-24">
        <Container className="text-center">
          <Reveal>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              Cloud infrastructure gets harder to manage the more teams
              touch it
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.tag} delay={i * 40}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6">
                  <span className="pill-tag bg-[var(--bg-alt)] text-[var(--fg-muted)]">
                    {p.tag}
                  </span>
                  <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-soft)]">
                    <p.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Capability highlights, alternating */}
      {capabilities.map((c, i) => (
        <section
          key={c.eyebrow}
          className={`py-24 ${i % 2 === 1 ? "bg-[var(--bg-alt)]" : ""}`}
        >
          <Container
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <Eyebrow>{c.eyebrow}</Eyebrow>
              <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
                {c.title}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[var(--fg-muted)]">
                {c.body}
              </p>
              <Link
                href={c.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline"
              >
                Learn more
                <IconArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
            <Reveal delay={60}>{c.mock}</Reveal>
          </Container>
        </section>
      ))}

      {/* Testimonials */}
      <section className="border-t border-[var(--border)] py-24">
        <Container>
          <Reveal>
            <Eyebrow tone="teal">What early-access teams say</Eyebrow>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              Made for platform teams, by a platform team
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 50}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-8">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none text-[var(--yellow)]">
                    &ldquo;
                  </span>
                  <p className="mt-2 text-lg leading-[1.6] text-[var(--ink)]">
                    {t.quote.split(t.highlight)[0]}
                    <span className="font-semibold text-[var(--primary)]">
                      {t.highlight}
                    </span>
                    {t.quote.split(t.highlight)[1]}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                    <Avatar initials={t.initials} className="h-9 w-9 text-xs bg-[var(--primary-soft)] text-[var(--primary)]" />
                    <div>
                      <p className="text-sm font-medium text-[var(--ink)]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[var(--fg-faint)]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 bg-[var(--ink)] py-24">
        <Container className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-lg font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white md:text-5xl">
              See your infrastructure in one place.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-white/65">
              Connect your first environment in a free trial — no cloud
              account migration, no rip-and-replace of your existing CI/CD.
            </p>
            <Button href="/contact" className="mt-8">
              Start free trial
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
