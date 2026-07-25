import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        <Image
          src="/logo.png"
          alt="Novomentum"
          width={180}
          height={50}
          className="h-auto w-40"
        />

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Novomentum LLC
        </p>

      </div>
    </footer>
  );
}