export default function Contact() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-zinc-900">
          Let&apos;s work together
        </h1>
        <p className="mb-16 max-w-md leading-relaxed text-zinc-500">
          I&apos;m open to freelance projects, full-time roles, and interesting
          collaborations. The best way to reach me is by email.
        </p>
        <div className="space-y-4">
          <a
            href="mailto:hello@trevor.com"
            className="block text-xl font-medium text-zinc-900 transition-colors hover:text-zinc-500"
          >
            hello@trevor.com
          </a>
          <div className="flex gap-8 pt-8">
            <a
              href="https://github.com"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
