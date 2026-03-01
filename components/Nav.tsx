import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-border px-6 py-5">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-foreground transition-colors duration-300 hover:text-accent"
        >
          Trevor
        </Link>
        <div className="flex gap-8">
          <Link href="/about" className="text-xs tracking-widest uppercase text-secondary transition-colors duration-300 hover:text-foreground">
            About
          </Link>
          <Link href="/work" className="text-xs tracking-widest uppercase text-secondary transition-colors duration-300 hover:text-foreground">
            Work
          </Link>
          <Link href="/contact" className="text-xs tracking-widest uppercase text-secondary transition-colors duration-300 hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
