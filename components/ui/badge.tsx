interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {children}
      </span>
    </div>
  );
}