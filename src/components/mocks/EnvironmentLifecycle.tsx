const steps = [
  { label: "Pull request opened", detail: "Ralnoria provisions a full environment from your IaC modules" },
  { label: "Environment active", detail: "Reviewers and CI get a live URL, isolated from staging and prod" },
  { label: "Idle detected", detail: "No traffic or commits for 48 hours — a teardown warning is posted" },
  { label: "Torn down", detail: "All resources released automatically when the branch merges or closes" },
];

export function EnvironmentLifecycle() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-0">
        {steps.map((s, i) => (
          <div key={s.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)] text-xs font-bold text-[var(--primary)]">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span className="w-px flex-1 bg-[var(--border)]" />
              )}
            </div>
            <div className="pb-8">
              <p className="text-sm font-semibold text-[var(--ink)]">{s.label}</p>
              <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
