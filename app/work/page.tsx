import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    name: "Forma Design System",
    description:
      "A component library and token system for a fintech startup, scaling across web and mobile products.",
    tags: ["Design Systems", "Figma", "React"],
  },
  {
    name: "Waypoint App",
    description:
      "A navigation app redesign focused on reducing cognitive load during active journeys.",
    tags: ["Product Design", "iOS", "UX Research"],
  },
  {
    name: "Studio Site",
    description:
      "Brand identity and marketing site for a creative studio in New York.",
    tags: ["Web Design", "Branding", "Next.js"],
  },
  {
    name: "Pulse Dashboard",
    description:
      "Real-time analytics dashboard for a SaaS platform — designed for clarity at scale.",
    tags: ["Product Design", "Data Visualization"],
  },
  {
    name: "Open Type Lab",
    description:
      "An experimental type specimen site exploring variable font capabilities.",
    tags: ["Typography", "Web Design"],
  },
  {
    name: "Shelf",
    description:
      "A minimal reading tracker app — my first solo shipped product.",
    tags: ["App Design", "React Native"],
  },
];

export default function Work() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs tracking-widest uppercase text-accent">Selected Work</p>
        <h1 className="mb-16 text-4xl font-light tracking-tight text-foreground">
          Work
        </h1>
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 border border-border">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
