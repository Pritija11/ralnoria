import {
  IconServer,
  IconGitBranch,
  IconCloud,
  IconConfig,
  IconTerminal,
  IconMessageSquare,
} from "@/components/icons";

const tools = [
  { icon: IconConfig, label: "Terraform & OpenTofu" },
  { icon: IconServer, label: "Kubernetes" },
  { icon: IconGitBranch, label: "GitHub Actions & GitLab CI" },
  { icon: IconCloud, label: "AWS, GCP, Azure" },
  { icon: IconTerminal, label: "Datadog & Grafana" },
  { icon: IconMessageSquare, label: "Slack & Microsoft Teams" },
];

export function ToolGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {tools.map((t) => (
        <div
          key={t.label}
          className="flex flex-col items-start gap-3 rounded-xl border border-[var(--border)] bg-white p-4"
        >
          <t.icon className="h-5 w-5 text-[var(--primary)]" />
          <span className="text-xs font-medium text-[var(--ink)]">
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}
