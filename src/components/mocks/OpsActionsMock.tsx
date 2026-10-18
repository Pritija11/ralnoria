import { IconRollback, IconUsers, IconServer } from "@/components/icons";

const actions = [
  {
    icon: IconRollback,
    label: "Rollback checkout-api to v2.13.2",
    meta: "Requires 1 approval · reversible",
  },
  {
    icon: IconUsers,
    label: "Grant temporary prod access to @sagar",
    meta: "Expires in 4 hours · logged",
  },
  {
    icon: IconServer,
    label: "Scale payments-worker to 6 replicas",
    meta: "Auto-approved · within policy",
  },
];

export function OpsActionsMock() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg-muted)]">
        Recent operations
      </p>
      <div className="mt-4 flex flex-col divide-y divide-[var(--border)]">
        {actions.map((a) => (
          <div key={a.label} className="flex items-start gap-3 py-3">
            <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-[var(--primary-soft)]">
              <a.icon className="h-4 w-4 text-[var(--primary)]" />
            </span>
            <div>
              <p className="text-sm text-[var(--ink)]">{a.label}</p>
              <p className="text-xs text-[var(--fg-faint)]">{a.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
