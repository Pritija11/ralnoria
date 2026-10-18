const environments = [
  { name: "pr-2481-checkout", status: "running", age: "12m" },
  { name: "pr-2479-auth-fix", status: "running", age: "1h" },
  { name: "staging", status: "running", age: "14d" },
  { name: "pr-2470-search", status: "tearing down", age: "3d" },
];

const statusStyle: Record<string, string> = {
  running: "bg-[var(--teal-soft)] text-[var(--teal)]",
  "tearing down": "bg-[var(--yellow)]/20 text-[#946800]",
};

export function EnvironmentGrid() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg-muted)]">
        Ephemeral environments
      </p>
      <div className="mt-4 flex flex-col divide-y divide-[var(--border)]">
        {environments.map((e) => (
          <div key={e.name} className="flex items-center justify-between py-3">
            <div>
              <p className="font-mono text-sm text-[var(--ink)]">{e.name}</p>
              <p className="text-xs text-[var(--fg-faint)]">alive for {e.age}</p>
            </div>
            <span
              className={`flex-none rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyle[e.status]}`}
            >
              {e.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
