import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courseList, getCourseBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/site";
import CourseDetailContent from "./CourseDetailContent";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return courseList.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return buildMetadata("Course Not Found", "The requested course could not be found.");
  }

  return buildMetadata(course.title, course.summary);
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailContent course={course} />;
}
