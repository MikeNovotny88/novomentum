"use client";

export default function Stars() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Large Stars */}

      <div className="absolute left-[10%] top-[15%] h-1 w-1 animate-pulse rounded-full bg-white" />
      <div className="absolute left-[25%] top-[40%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
      <div className="absolute left-[70%] top-[22%] h-1 w-1 animate-pulse rounded-full bg-white" />
      <div className="absolute left-[82%] top-[55%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
      <div className="absolute left-[40%] top-[70%] h-1 w-1 animate-pulse rounded-full bg-white" />
      <div className="absolute left-[62%] top-[83%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-200" />
      <div className="absolute left-[15%] top-[80%] h-1 w-1 animate-pulse rounded-full bg-white" />
      <div className="absolute left-[90%] top-[15%] h-1 w-1 animate-pulse rounded-full bg-white" />

      {/* Extra Glow */}

      <div className="absolute left-[50%] top-[30%] h-2 w-2 rounded-full bg-cyan-400/50 blur-sm" />
      <div className="absolute left-[75%] top-[75%] h-2 w-2 rounded-full bg-cyan-400/50 blur-sm" />

    </div>
  );
}