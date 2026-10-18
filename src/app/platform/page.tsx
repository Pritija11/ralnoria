import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EnvironmentGrid } from "@/components/mocks/EnvironmentGrid";
import { DeploymentTimeline } from "@/components/mocks/DeploymentTimeline";
import { ConfigDriftMock } from "@/components/mocks/ConfigDriftMock";
import { OpsActionsMock } from "@/components/mocks/OpsActionsMock";
import { IconArrowRight, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "How Ralnoria's platform lets startup and growing engineering teams manage cloud environments, deployment workflows, infrastructure configurations, and operations from one place.",
  alternates: {
    canonical: "/platform",
  },
};

const pillars = [
  {
    eyebrow: "Environments",
    title: "Every environment provisioned from the same rules as production",
    body: [
      "Ephemeral environments are created automatically for every pull request, and torn down the moment they're no longer needed — so nobody is paying for infrastructure nobody remembers spinning up.",
      "Because every environment is provisioned through the same orchestration layer, a bug that only shows up in a preview environment is a bug that reflects production, not a quirk of someone's manual setup.",
    ],
    bullets: [
      "Automatic environment creation on every pull request",
      "Automatic teardown when a branch merges or goes stale",
      "The same provisioning rules in preview as in production",
    ],
    mock: <EnvironmentGrid />,
  },
  {
    eyebrow: "Deployments",
    title: "One view of every deployment, across every service",
    body: [
      "Instead of checking four different CI/CD dashboards to find out where a deployment is stuck, Ralnoria gives you one timeline — build, test, staging, approval, production — for every service your teams ship.",
      "Deployments that need a human sign-off wait visibly, with the approver and reason attached, instead of silently sitting in a queue someone has to go looking for.",
    ],
    bullets: [
      "A single timeline view across build, test, staging, and production",
      "Approval gates with a visible owner and reason",
      "Works with your existing CI/CD — nothing to migrate",
    ],
    mock: <DeploymentTimeline />,
  },
  {
    eyebrow: "Configurations",
    title: "Know the moment infrastructure drifts from what's in code",
    body: [
      "A console change here, a manual kubectl edit there — small deviations from infrastructure-as-code add up until nobody fully trusts the repo anymore. Ralnoria continuously compares what's declared against what's actually running.",
      "When drift is detected, you get a diff, not just an alert — so fixing it is a two-minute task instead of a forensic investigation.",
    ],
    bullets: [
      "Continuous comparison between declared and live infrastructure",
      "A readable diff, not just a yes/no drift alert",
      "Works with Terraform and OpenTofu modules you already maintain",
    ],
    mock: <ConfigDriftMock />,
  },
  {
    eyebrow: "Operations",
    title: "Day-to-day operational tasks, without a ticket queue",
    body: [
      "Rollbacks, temporary access grants, and scaling requests are some of the most common things a platform team gets asked to do manually. Ralnoria lets developers trigger them directly, within limits the platform team sets once.",
      "Every action is logged with who requested it, who approved it, and what changed — so \"self-service\" doesn't mean losing visibility into what happened.",
    ],
    bullets: [
      "Self-service rollbacks, scaling, and temporary access grants",
      "Policy-based auto-approval for low-risk actions",
      "A full log of who did what, and when",
    ],
    mock: <OpsActionsMock />,
  },
];

const faqs = [
  {
    q: "Do we need to migrate off our current CI/CD or IaC tools?",
    a: "No. Ralnoria connects to your existing Terraform or OpenTofu modules and your existing CI/CD pipelines — it's an orchestration and governance layer on top of what you already run, not a replacement for it.",
  },
  {
    q: "How long does setup actually take?",
    a: "Most teams connect their first environment and see it provisioned within 10 minutes, since there's no cloud account migration involved. A full rollout across every service usually takes a few weeks.",
  },
  {
    q: "Is this only useful for large platform teams?",
    a: "We built Ralnoria as a small startup ourselves, so the free beta tier is sized for a small team managing a handful of services, not just large platform organizations.",
  },
  {
    q: "What happens if Ralnoria goes down — does our infrastructure stop working?",
    a: "No. Ralnoria orchestrates changes to your infrastructure, but your running services don't depend on Ralnoria staying up to keep serving traffic.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[var(--ink)] py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="dark">Platform</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
              Four pillars, one orchestration layer
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65">
              Environments, Deployments, Configurations, and Operations
              aren&apos;t four separate tools bolted together — they&apos;re
              one runtime, governed by the same rules, for a startup
              engineering team that doesn&apos;t have a dozen platform
              engineers to spare.
            </p>
          </Reveal>
        </Container>
      </section>

      {pillars.map((p, i) => (
        <section key={p.eyebrow} className={i % 2 === 1 ? "bg-[var(--bg-alt)]" : ""}>
          <Container className="py-20 md:py-24">
            <div
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <Eyebrow>{p.eyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
                  {p.title}
                </h2>
                {p.body.map((para) => (
                  <p
                    key={para.slice(0, 20)}
                    className="mt-4 max-w-md text-sm leading-7 text-[var(--fg-muted)]"
                  >
                    {para}
                  </p>
                ))}
                <ul className="mt-6 flex flex-col gap-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--ink)]">
                      <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={60}>{p.mock}</Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-[var(--border)] py-20 text-center md:py-24">
        <Container className="max-w-xl">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              See it running against your own stack
            </h2>
            <Button href="/contact" className="mt-7">
              Start free trial
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="teal">Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              Platform FAQ
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
