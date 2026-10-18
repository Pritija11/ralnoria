const stages = [
  { label: "Build", status: "done", time: "48s" },
  { label: "Test", status: "done", time: "1m 12s" },
  { label: "Staging", status: "done", time: "22s" },
  { label: "Approval", status: "active", time: "waiting" },
  { label: "Production", status: "pending", time: "" },
];

const dot: Record<string, string> = {
  done: "bg-[var(--teal)]",
  active: "bg-[var(--yellow)]",
  pending: "bg-[var(--border-strong)]",
};

export function DeploymentTimeline() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between text-xs text-[var(--fg-muted)]">
        <span className="font-mono">deploy_9f21 · checkout-api</span>
        <span>v2.14.0</span>
      </div>
      <div className="relative mt-6 flex items-center justify-between">
        <div className="absolute left-0 right-0 top-2 h-px bg-[var(--border)]" />
        {stages.map((s) => (
          <div key={s.label} className="relative flex flex-col items-center gap-2">
            <span className={`h-4 w-4 rounded-full ${dot[s.status]}`} />
            <span className="text-[11px] font-medium text-[var(--ink)]">{s.label}</span>
            <span className="text-[10px] text-[var(--fg-faint)]">{s.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
