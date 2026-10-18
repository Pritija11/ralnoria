import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ToolGrid } from "@/components/mocks/ToolGrid";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Ralnoria connects to the infrastructure tools a startup engineering team already runs — Terraform, Kubernetes, CI/CD pipelines, and major cloud providers.",
  alternates: {
    canonical: "/integrations",
  },
};

const categories = [
  {
    title: "Infrastructure as code",
    body: "Point Ralnoria at your existing Terraform or OpenTofu modules. It reads your resource definitions as the source of truth — it doesn't ask you to rewrite them in a new format.",
  },
  {
    title: "CI/CD pipelines",
    body: "Trigger environment provisioning and deployment orchestration from GitHub Actions, GitLab CI, or whatever's already running your builds. No separate pipeline to maintain.",
  },
  {
    title: "Cloud providers",
    body: "AWS, GCP, and Azure are supported from day one, using your existing cloud accounts — Ralnoria orchestrates against them, it doesn't ask you to migrate into a new one.",
  },
  {
    title: "Observability",
    body: "Deployment and environment events are forwarded to Datadog or Grafana, so they show up next to the metrics your team already watches instead of in a separate dashboard.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[var(--ink)] py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="dark">Integrations</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
              Connects to what you already run
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65">
              Ralnoria is an orchestration layer, not a replacement for your
              infrastructure stack. As a small startup, we&apos;d rather
              ship deep integrations with a handful of tools than a shallow
              connector to everything.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <ToolGrid />
          </Reveal>
          <Reveal delay={60}>
            <div className="flex flex-col gap-8">
              {categories.map((c) => (
                <div key={c.title}>
                  <h2 className="text-lg font-semibold text-[var(--ink)]">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 text-center md:py-24">
        <Container className="max-w-xl">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              Don&apos;t see a tool you need?
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--fg-muted)]">
              Tell us what you&apos;re running — most of our integration roadmap
              comes directly from early-access teams asking for it.
            </p>
            <Button href="/contact" className="mt-7">
              Tell us about your stack
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
