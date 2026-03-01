type ProjectCardProps = {
  name: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ name, description, tags }: ProjectCardProps) {
  return (
    <div className="group border border-border transition-colors duration-300 hover:border-secondary">
      <div className="h-48 w-full bg-surface transition-colors duration-300 group-hover:bg-[var(--surface-hover)]" />
      <div className="p-5 border-t border-border">
        <h3 className="mb-1 text-sm font-medium text-foreground">{name}</h3>
        <p className="mb-4 text-xs leading-relaxed text-secondary font-light">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-border px-2 py-0.5 text-[10px] tracking-widest uppercase text-dim"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
