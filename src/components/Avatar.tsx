export function Avatar({
  initials,
  className = "h-9 w-9 text-xs",
}: {
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-none items-center justify-center rounded-full bg-[var(--primary-soft)] font-[family-name:var(--font-display)] font-semibold text-[var(--primary)] ${className}`}
    >
      {initials}
    </div>
  );
}
