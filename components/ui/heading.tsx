interface HeadingProps {
  title: string;
  subtitle?: string;
}

export default function Heading({
  title,
  subtitle,
}: HeadingProps) {
  return (
    <>
      <h2 className="text-5xl font-black tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {subtitle}
        </p>
      )}
    </>
  );
}