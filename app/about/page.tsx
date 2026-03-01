const skills = [
  "Figma",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Framer",
  "Design Systems",
  "Prototyping",
];

export default function About() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs tracking-widest uppercase text-accent">About</p>
        <h1 className="mb-16 text-4xl font-light tracking-tight text-foreground">
          Trevor
        </h1>
        <div className="grid gap-16 sm:grid-cols-2">
          <div className="space-y-6 text-sm leading-relaxed text-secondary font-light">
            <p>
              I&apos;m Trevor, a design engineer working at the intersection of design
              and code. I care deeply about the details — the kind that most people
              never notice, but always feel.
            </p>
            <p>
              My work spans product design, UI engineering, and design systems.
              I believe the best interfaces are invisible — they get out of the
              way and let people accomplish what they came to do.
            </p>
            <p>
              When I&apos;m not designing or building, I&apos;m usually reading about
              typography, tinkering with tools, or thinking about how software
              could be simpler.
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-xs tracking-widest uppercase text-accent">
              Tools &amp; Skills
            </h2>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-4 text-xs tracking-wide text-secondary">
                  <span className="text-accent">—</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
