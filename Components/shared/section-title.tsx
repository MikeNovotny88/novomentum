interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-5 text-5xl font-black tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-xl leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}