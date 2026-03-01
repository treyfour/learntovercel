export default function Contact() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs tracking-widest uppercase text-accent">Contact</p>
        <h1 className="mb-6 text-4xl font-light tracking-tight text-foreground">
          Let&apos;s work together
        </h1>
        <p className="mb-16 max-w-md text-sm leading-relaxed text-secondary font-light">
          I&apos;m open to freelance projects, full-time roles, and interesting
          collaborations. The best way to reach me is by email.
        </p>
        <div className="space-y-4">
          <div className="flex gap-8 border-t border-border pt-8">
            <a
              href="https://github.com"
              className="text-xs tracking-widest uppercase text-secondary transition-colors duration-300 hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="text-xs tracking-widest uppercase text-secondary transition-colors duration-300 hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              className="text-xs tracking-widest uppercase text-secondary transition-colors duration-300 hover:text-foreground"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

