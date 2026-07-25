import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`rounded-xl bg-cyan-400 px-8 py-5 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,.35)] ${className}`}
    >
      {children}
    </button>
  );
}