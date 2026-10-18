import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Ralnoria platform for orchestrating cloud environments, deployments, configurations, and operations.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    heading: "1. Using the platform",
    body: [
      "Ralnoria grants you a non-exclusive, non-transferable right to use the platform to orchestrate your cloud infrastructure, subject to the limits of your plan (Beta, Team, or Enterprise).",
      "You're responsible for the infrastructure changes your workspace triggers, including any cloud provider costs incurred as a result of actions taken through Ralnoria.",
    ],
  },
  {
    heading: "2. Acceptable use",
    body: [
      "You may not use the platform to orchestrate infrastructure in violation of applicable law, attempt to circumvent policies you've configured for safety or compliance reasons, or access cloud accounts you aren't authorized to connect.",
      "We may suspend a workspace that we reasonably believe poses a security risk to our infrastructure or other customers, with notice where practical.",
    ],
  },
  {
    heading: "3. Beta tier terms",
    body: [
      "The Beta tier is offered free of charge for workspaces managing 3 or fewer services, and may change or be discontinued with 30 days' notice. It's provided without the uptime commitments available on paid plans.",
    ],
  },
  {
    heading: "4. Billing",
    body: [
      "Team and Enterprise plans are billed in advance on a monthly or annual basis as agreed at signup. Fees are non-refundable except where required by law.",
    ],
  },
  {
    heading: "5. Data ownership",
    body: [
      "You own the infrastructure definitions, environments, and data you manage through the platform. We process infrastructure metadata only to operate the service for you, as described in our Privacy Policy, and you can export or delete it at any time.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    body: [
      "As an early-stage startup, we provide the platform on an as-is basis. To the extent permitted by law, Ralnoria is not liable for indirect or consequential damages arising from your use of the platform, including actions taken against infrastructure you've connected.",
    ],
  },
  {
    heading: "7. Termination",
    body: [
      "You may close your workspace at any time. We may suspend or terminate access for material breach of these terms, with an opportunity to cure where reasonable.",
    ],
  },
  {
    heading: "8. Contact",
    body: [
      "Questions about these terms can be sent to hello@ralnoria.ltd, or by post to Sanepa, Lalitpur 44700, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--ink)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern use of the Ralnoria platform. By using it,
            you agree to the terms below.
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
