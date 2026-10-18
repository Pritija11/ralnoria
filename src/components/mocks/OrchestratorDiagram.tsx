const inputs = ["Terraform", "Kubernetes", "CI/CD pipelines", "Cloud accounts"];

export function OrchestratorDiagram() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--ink-soft)] p-6 sm:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-col sm:gap-2.5">
          {inputs.map((label) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/80"
            >
              {label}
            </div>
          ))}
        </div>

        <svg className="hidden h-24 w-16 flex-none sm:block" viewBox="0 0 64 96" aria-hidden>
          <path
            d="M0 12h20M0 32h20M0 64h20M0 84h20"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M20 12 32 48M20 32 32 48M20 64 32 48M20 84 32 48"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        <div className="flex h-24 w-24 flex-none rotate-45 items-center justify-center rounded-2xl bg-[var(--primary)] shadow-[0_0_40px_rgba(33,86,246,0.5)]">
          <span className="-rotate-45 text-center text-[11px] font-bold leading-tight text-white">
            Ralnoria
            <br />
            Orchestrator
          </span>
        </div>

        <svg className="hidden h-4 w-10 flex-none sm:block" viewBox="0 0 40 16" aria-hidden>
          <path d="M0 8h36" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <path d="M30 2l6 6-6 6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
        </svg>

        <div className="rounded-lg border border-[var(--primary)]/40 bg-[var(--primary)]/10 px-4 py-3 text-center text-xs font-semibold text-white">
          Your
          <br />
          infrastructure
        </div>
      </div>
    </div>
  );
}
