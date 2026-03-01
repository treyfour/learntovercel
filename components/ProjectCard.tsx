type ProjectCardProps = {
  name: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ name, description, tags }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-zinc-100 transition-colors hover:border-zinc-300">
      <div className="h-48 w-full bg-zinc-50 transition-colors group-hover:bg-zinc-100" />
      <div className="p-5">
        <h3 className="mb-1 font-medium text-zinc-900">{name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-zinc-500">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-zinc-200 px-2 py-0.5 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
