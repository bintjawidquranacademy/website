import type { Resource } from "@/lib/types";

export function filterResources(resources: Resource[], searchTerm: string, activeCategory: string) {
  const normalized = searchTerm.trim().toLowerCase();

  return resources.filter((resource) => {
    const matchesSearch =
      normalized.length === 0 ||
      resource.title.toLowerCase().includes(normalized) ||
      resource.description.toLowerCase().includes(normalized);

    const matchesCategory = activeCategory === "All" || resource.category === activeCategory;

    return matchesSearch && matchesCategory;
  });
}
