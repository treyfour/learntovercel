import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100svh-8rem)] items-end px-6 pb-20">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-6 text-xs tracking-widest uppercase text-accent font-medium">
          Design Engineer
        </p>
        <h1 className="mb-8 text-7xl font-light tracking-tight text-foreground sm:text-8xl">
          Trevor
        </h1>
        <p className="mb-12 max-w-md text-sm leading-relaxed text-secondary font-light">
          I build interfaces that are both beautiful and functional.
        </p>
        <Link
          href="/work"
          className="text-sm font-medium text-foreground border-b border-foreground pb-0.5 transition-colors duration-300 hover:text-accent hover:border-accent"
        >
          View my work →
        </Link>
      </div>
    </div>
  );
}
