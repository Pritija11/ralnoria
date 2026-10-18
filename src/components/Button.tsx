import Link from "next/link";

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "dark";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors";
  const variants = {
    solid: "bg-[var(--primary)] text-white hover:bg-[var(--primary-light)]",
    outline:
      "border border-[var(--border-strong)] text-[var(--ink)] hover:border-[var(--primary)]",
    dark: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
