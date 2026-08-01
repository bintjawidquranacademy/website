import ResourceCard from "@/components/resources/ResourceCard";
import type { Resource } from "@/lib/types";

type ResourceGridProps = {
  resources: Resource[];
};

export default function ResourceGrid({ resources }: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <div className="section-frame rounded-[28px] p-8 text-center text-sm leading-7 text-[var(--muted)]">
        No resources found. Try a different search or category.
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {resources.map((resource) => (
        <ResourceCard key={resource.slug} resource={resource} />
      ))}
    </div>
  );
}
