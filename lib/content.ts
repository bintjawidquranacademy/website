import courses from "@/data/courses.json";
import resources from "@/data/resources.json";
import teachers from "@/data/teachers.json";
import type { Course, Resource, Teacher } from "@/lib/types";

export const courseList = courses as Course[];
export const teacherList = teachers as Teacher[];
export const resourceList = resources as Resource[];

export const resourceCategories = [
  "All",
  "Quran",
  "Qaidah",
  "Islamic Studies",
  "Iqra",
  "Salah",
  "Wudhu",
  "Kalimahs",
  "Duas",
  "Hadith",
  "Audio",
] as const;

export function getCourseBySlug(slug: string) {
  return courseList.find((course) => course.slug === slug);
}

export function getResourceBySlug(slug: string) {
  return resourceList.find((resource) => resource.slug === slug);
}

export function getFeaturedResources(limit = 4) {
  return resourceList.filter((resource) => resource.featured).slice(0, limit);
}
