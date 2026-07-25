import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-cyan-400 text-black hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,.35)]"
          : "border border-white/10 bg-white/5 text-white hover:border-cyan-400 hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  );
}