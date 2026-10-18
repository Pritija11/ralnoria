import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EnvironmentGrid } from "@/components/mocks/EnvironmentGrid";
import { EnvironmentLifecycle } from "@/components/mocks/EnvironmentLifecycle";
import { IconArrowRight, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Environments",
  description:
    "Ephemeral environments from Ralnoria — a cloud infrastructure orchestration startup — provisioned automatically for every pull request and torn down when they're no longer needed.",
  alternates: {
    canonical: "/environments",
  },
};

const reasons = [
  "Every environment is provisioned from the same rules as production, so bugs found in preview are real bugs",
  "Idle environments are detected and torn down automatically, instead of quietly running up your cloud bill",
  "Reviewers get a live URL on every pull request, with no manual setup from the engineer who opened it",
  "Environment definitions live in version control, so changes to how environments are built go through the same review as any other code",
];

const faqs = [
  {
    q: "How is this different from just spinning up a namespace in Kubernetes?",
    a: "A namespace gives you isolation, but not a full environment — databases, secrets, networking, and any other services your app depends on. Ralnoria provisions the whole dependency graph, not just a namespace.",
  },
  {
    q: "What happens to data in an environment when it's torn down?",
    a: "By default, environment data is torn down with the environment. You can configure a snapshot step for environments that need to preserve state between runs, like ones used for manual QA.",
  },
  {
    q: "Can we cap how many environments run at once?",
    a: "Yes — you can set a maximum concurrent environment count per team, and Ralnoria will queue new requests instead of silently exceeding it.",
  },
  {
    q: "Do environments cost the same as production infrastructure?",
    a: "No — most teams configure a smaller resource profile for preview environments specifically to control cost, since they don't need production-scale capacity to be useful.",
  },
];

export default function EnvironmentsPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Environments</Eyebrow>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
              A full environment for every pull request, gone the moment
              it&apos;s not needed
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              As a startup building this ourselves, idle cloud spend was
              the first thing we noticed when we stopped tracking
              environments by hand — Ralnoria exists so no one on your team
              has to remember to clean up after a pull request merges.
            </p>
            <Button href="/contact" className="mt-7">
              Start free trial
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal delay={60}>
            <EnvironmentGrid />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow tone="teal">Lifecycle</Eyebrow>
            <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              From pull request to teardown, automatically
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--fg-muted)]">
              No step in this lifecycle requires someone to remember to do
              something manually — which is the entire point. The moment a
              branch stops being active, the environment it created stops
              existing.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <EnvironmentLifecycle />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              What teams actually notice first
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-4">
            {reasons.map((r, i) => (
              <Reveal key={r.slice(0, 20)} delay={i * 30}>
                <div className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white p-5">
                  <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                  <p className="text-sm leading-6 text-[var(--ink)]">{r}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="teal">Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              Environments FAQ
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
