interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.12)] ${className}`}
    >
      {children}
    </div>
  );
}