import type { MetadataRoute } from "next";
import { courseList, resourceList } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/courses", "/teachers", "/pricing", "/resources", "/activities", "/contact"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const courseEntries = courseList.map((course) => ({
    url: `${siteConfig.url}/courses/${course.slug}`,
    lastModified: new Date(),
  }));

  const resourceEntries = resourceList.map((resource) => ({
    url: `${siteConfig.url}/resources/${resource.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...courseEntries, ...resourceEntries];
}
