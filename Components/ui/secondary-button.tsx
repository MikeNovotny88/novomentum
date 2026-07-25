import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SecondaryButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`rounded-xl border border-cyan-500/30 bg-white/5 px-8 py-5 text-lg backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:bg-white/10 ${className}`}
    >
      {children}
    </button>
  );
}