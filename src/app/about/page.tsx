import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ralnoria is a cloud infrastructure orchestration startup based in Lalitpur, Nepal, building one governed layer for environments, deployments, configuration, and operations.",
  alternates: {
    canonical: "/about",
  },
};

const stats = [
  { value: "2026", label: "Founded" },
  { value: "7", label: "People on the team" },
  { value: "Lalitpur", label: "Where we build" },
];

const roles = [
  {
    title: "Founder & CEO",
    initials: "FC",
    body: "Spent six years as a platform engineer before starting Ralnoria, and still reviews every new integration personally.",
  },
  {
    title: "Head of Infrastructure",
    initials: "HI",
    body: "Owns the orchestration runtime — the part of the platform that has to behave correctly under every edge case.",
  },
  {
    title: "Solutions Engineer",
    initials: "SE",
    body: "Works directly with early-access teams to connect their first environment, then folds what breaks back into the product.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[var(--ink)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow tone="dark">About Ralnoria</Eyebrow>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
              We were the platform team stitching this together by hand
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/65">
              Ralnoria started in 2026 as a small team in Lalitpur
              who&apos;d each spent years as the platform engineer everyone
              pinged when an environment went missing or a deploy got
              stuck. As a startup ourselves, we didn&apos;t have the
              headcount to keep doing that manually — so the orchestration
              layer we needed for our own infrastructure became the
              product.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="break-words font-[family-name:var(--font-display)] text-lg font-bold text-white sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <blockquote className="border-l-2 border-[var(--primary)] pl-6 text-2xl font-medium leading-snug text-[var(--ink)]">
              &ldquo;We didn&apos;t want another dashboard. We wanted the
              rules enforced automatically, everywhere, without us in the
              loop for every request.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm leading-7 text-[var(--fg-muted)]">
              Every tool we tried early on either gave visibility without
              control — a dashboard that showed drift but couldn&apos;t fix
              it —
              or control without visibility, a policy engine nobody could
              actually see working. Neither was enough for a team our size,
              where the people writing policy and the people requesting
              infrastructure are often the same three or four engineers.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              Ralnoria is our attempt to close that gap: one orchestration
              layer that enforces the rules a platform team sets, and shows
              everyone exactly what happened when it did. We&apos;re still
              early, a few months into building it with early-access teams,
              and the roadmap is shaped directly by what they run into.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow tone="teal">Who you&apos;d work with</Eyebrow>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              A small team, directly involved in your rollout
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 40}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6">
                  <Avatar initials={r.initials} className="h-10 w-10 text-sm bg-[var(--primary-soft)] text-[var(--primary)]" />
                  <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
              Want to see it running on your own stack?
            </h2>
            <Button href="/contact" className="mt-7">
              Start free trial
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
