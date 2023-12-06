"use client";
import { Pencil, Plus, Watch } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextInput from "../FormInputs/TextInput";
import TextareaInput from "../FormInputs/TextAreaInput";
import ArrayItemsInput from "../FormInputs/ArrayItemsInput";
import ImageInput from "../FormInputs/ImageInput";
import ToggleInput from "../FormInputs/ToggleInput";
import SubmitButton from "../FormInputs/SubmitButton";
import Link from "next/link";
import { makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { generateSlug } from "@/lib/generateSlug";
export default function CreateCourseForm({ course }) {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: course,
  });
  const router = useRouter();
  function redirect() {
    router.push("/platform/courses");
  }
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(course?.courseImage);

  const [courseOverview, setCourseOverview] = useState(course?.courseOverview);
  const [whatYouWillLearn, setWhatYouWillLearn] = useState(
    course?.whatYouWillLearn
  );
  const [whatWillYouBuild, setWhatWillYouBuild] = useState(
    course?.whatYouWillLearn
  );
  const [courseFor, setCourseFor] = useState(course?.courseFor);
  const [prerequisites, setPrerequisites] = useState(course?.prerequisites);
  const [keywords, setKeywords] = useState(course?.keywords);
  const isPublished = watch("isPublished");
  const isPaid = watch("isPaid");
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.courseImage = imageUrl;
    data.courseOverview = courseOverview;
    data.whatYouWillLearn = whatYouWillLearn;
    data.courseFor = courseFor;
    data.prerequisites = prerequisites;
    data.keywords = keywords;
    data.whatWillYouBuild = whatWillYouBuild;
    console.log(data);
    makePutRequest(
      setLoading,
      `api/courses/${course.slug}`,
      data,
      "Course",
      redirect,
      reset
    );
    setImageUrl("");
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="flex mb-4 justify-between flex-wrap">
        <div className="flex flex-col mb-3">
          <h2 className="text-xl font-semibold">Customize your Course</h2>
          <small className="text-slate-400">Add more course Details</small>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-400 flex-wrap ">
          <Link
            href={`/platform/courses/${course.slug}/sections`}
            className=" bg-purple-600 text-white  flex space-x-1 items-center px-3 py-2 rounded-md"
          >
            <Plus className="w-4 h-4" />
            <span>Sections</span>
          </Link>
          <Link
            href={`/platform/courses/${course.slug}/lessons`}
            className=" bg-purple-600 text-white  flex space-x-1 items-center px-3 py-2 rounded-md"
          >
            <Plus className="w-4 h-4" />
            <span>Lessons</span>
          </Link>
          <Link
            href={`/platform/courses/${course.slug}/faqs`}
            className=" bg-purple-600 text-white  flex space-x-1 items-center px-3 py-2 rounded-md"
          >
            <Plus className="w-4 h-4" />
            <span>FAQs</span>
          </Link>
          <Link
            href={`/platform/courses/${course.slug}/attachments`}
            className=" bg-purple-600 text-white  flex space-x-1 items-center px-3 py-2 rounded-md"
          >
            <Plus className="w-4 h-4" />
            <span>Attachments</span>
          </Link>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Title */}
        <TextInput
          label="Course Title"
          name="title"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Course Intro Video Link"
          name="courseIntroLink"
          register={register}
          errors={errors}
          className="w-full"
        />
        {/* Price */}
        <TextInput
          label="Now Course Price"
          name="nowPrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Soon Course Price"
          name="soonPrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Later Course Price"
          name="laterPrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />

        {/* Description */}
        <TextareaInput
          label="Course Description"
          name="description"
          register={register}
          errors={errors}
        />
        {/*overview*/}
        <ArrayItemsInput
          setItems={setCourseOverview}
          items={courseOverview}
          itemTitle="Course Overview"
        />
        <ArrayItemsInput
          setItems={setKeywords}
          items={keywords}
          itemTitle="Course Keywords"
        />
        {/* What you will learn */}
        <ArrayItemsInput
          setItems={setWhatYouWillLearn}
          items={whatYouWillLearn}
          itemTitle="What you will Learn"
        />
        {/* Course Image */}
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="courseImageUploader"
          label="Course Image"
        />
        <ArrayItemsInput
          setItems={setWhatWillYouBuild}
          items={whatWillYouBuild}
          itemTitle="What will you Build"
        />
        {/* Requirements */}
        <ArrayItemsInput
          setItems={setCourseFor}
          items={courseFor}
          itemTitle="Who is this Course For"
        />
        <ArrayItemsInput
          setItems={setPrerequisites}
          items={prerequisites}
          itemTitle="Course Prerequisites"
        />

        {/* IsPublished */}
        <ToggleInput
          label="Publish your Course"
          name="isPublished"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
        {/* IsPublished */}
        <ToggleInput
          label="Course Access"
          name="isPaid"
          trueTitle="Paid"
          falseTitle="Free"
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle="Update Course"
        loadingButtonTitle="Updating Course please wait..."
      />
    </form>
  );
}
