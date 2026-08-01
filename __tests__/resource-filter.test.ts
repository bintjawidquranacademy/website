import { describe, expect, it } from "vitest";
import { filterResources } from "../lib/resource-filter";

const resources = [
  {
    slug: "tajweed-audio",
    title: "Tajweed Audio",
    category: "Audio",
    description: "Listening drills for tajweed.",
    image: "",
    fileUrl: "",
    featured: false,
  },
  {
    slug: "daily-duas",
    title: "Daily Duas",
    category: "Duas",
    description: "Morning and evening duas.",
    image: "",
    fileUrl: "",
    featured: true,
  },
];

describe("filterResources", () => {
  it("filters by search term", () => {
    const filtered = filterResources(resources, "tajweed", "All");
    expect(filtered).toHaveLength(1);
    expect(filtered[0]?.slug).toBe("tajweed-audio");
  });

  it("filters by category", () => {
    const filtered = filterResources(resources, "", "Duas");
    expect(filtered).toHaveLength(1);
    expect(filtered[0]?.slug).toBe("daily-duas");
  });

  it("combines category and keyword filters", () => {
    const filtered = filterResources(resources, "daily", "Duas");
    expect(filtered).toHaveLength(1);
    expect(filtered[0]?.slug).toBe("daily-duas");
  });
});
