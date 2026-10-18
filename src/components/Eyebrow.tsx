export function Eyebrow({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "teal" | "yellow" | "dark";
}) {
  const tones = {
    primary: "bg-[var(--primary-soft)] text-[var(--primary)]",
    teal: "bg-[var(--teal-soft)] text-[var(--teal)]",
    yellow: "bg-[var(--yellow)]/20 text-[#946800]",
    dark: "bg-white/10 text-white",
  };

  return <span className={`pill-tag ${tones[tone]}`}>{children}</span>;
}
