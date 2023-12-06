import CreateSectionForm from "@/components/admin/CreateSectionForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function NewSection({ params: { slug } }) {
  const course = await getData(`/courses/${slug}`);
  const courseId = course.id;

  return <CreateSectionForm courseId={courseId} slug={slug} />;
}
