export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        style={{ animation: "floatGlow 8s ease-in-out infinite" }}
      />

      <div className="absolute left-[20%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute bottom-[10%] right-[15%] h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />
    </div>
  );
}