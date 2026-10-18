import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ralnoria, a cloud infrastructure orchestration startup, collects, processes, and protects data from workspace, environment, and deployment activity.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "Account data: your name, work email, and workspace details when you sign up or request a demo.",
      "Infrastructure metadata: environment names, deployment events, configuration diffs, and audit logs generated as Ralnoria orchestrates your infrastructure — not the underlying application data running inside it.",
      "Usage and log data: IP addresses, request metadata, and product usage events, collected for security, billing, and reliability purposes.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Infrastructure metadata is used only to run the platform for you — rendering deployment timelines, enforcing your policies, and powering your own dashboards.",
      "We don't access the application data running inside your environments, and we never use your infrastructure metadata to train any model.",
    ],
  },
  {
    heading: "3. Who we share it with",
    body: [
      "Infrastructure sub-processors required to run the platform — cloud hosting, error monitoring, and email delivery. A current list is available on request.",
      "We do not sell customer data, and infrastructure metadata is never shared across workspaces.",
    ],
  },
  {
    heading: "4. Data retention",
    body: [
      "Deployment history retention depends on your plan — 7 days on the Beta tier, 90 days on Team, and configurable on Enterprise. Account data is retained for as long as your workspace is active, then deleted within 30 days of closure on request.",
    ],
  },
  {
    heading: "5. Your rights",
    body: [
      "You can request a copy of the data we hold for your workspace, ask us to correct it, or request deletion. Reach out through the contact details below.",
    ],
  },
  {
    heading: "6. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll notify active workspace owners by email before the change takes effect.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about this policy can be sent to hello@ralnoria.ltd, or by post to Sanepa, Lalitpur 44700, Nepal.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--ink)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data Ralnoria collects, how it&apos;s used,
            and what you can do about it.
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--ink)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
