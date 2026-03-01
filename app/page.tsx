import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center px-6">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-6 text-sm tracking-widest text-zinc-400 uppercase">
          Design Engineer
        </p>
        <h1 className="mb-8 text-7xl font-semibold tracking-tight text-zinc-900 sm:text-8xl">
          Trevor
        </h1>
        <p className="mb-12 max-w-md text-xl leading-relaxed text-zinc-500">
          I build interfaces that are both beautiful and functional.
        </p>
        <Link
          href="/work"
          className="border-b border-zinc-900 pb-0.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:text-zinc-400"
        >
          View my work →
        </Link>
      </div>
    </div>
  );
}
