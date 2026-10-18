const items = [
  { label: "checkout-api / replicas", state: "in sync" },
  { label: "checkout-api / cpu-limit", state: "in sync" },
  { label: "payments-worker / env-vars", state: "drift detected" },
  { label: "auth-service / network-policy", state: "in sync" },
];

const style: Record<string, string> = {
  "in sync": "bg-[var(--teal-soft)] text-[var(--teal)]",
  "drift detected": "bg-red-50 text-red-600",
};

export function ConfigDriftMock() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg-muted)]">
        Configuration drift
      </p>
      <div className="mt-4 flex flex-col divide-y divide-[var(--border)]">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between py-3 text-sm">
            <span className="font-mono text-xs text-[var(--ink)]">{item.label}</span>
            <span className={`flex-none rounded-full px-2.5 py-1 text-[11px] font-medium ${style[item.state]}`}>
              {item.state}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
