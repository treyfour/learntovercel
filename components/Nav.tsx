import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-zinc-100 px-6 py-5">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-500"
        >
          Trevor
        </Link>
        <div className="flex gap-8">
          <Link href="/about" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900">
            About
          </Link>
          <Link href="/work" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900">
            Work
          </Link>
          <Link href="/contact" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
