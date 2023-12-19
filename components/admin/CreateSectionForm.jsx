"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { generateSlug } from "@/lib/generateSlug";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";

export default function CreateSectionForm({ courseId, slug }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  // https://learnwithhasan.com/build-and-sell-apis-course/
  async function onSubmit(data) {
    data.courseId = courseId;
    console.log(data);
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/sections`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        setLoading(false);
        toast.success("Section Created Successfully");
        reset();
        router.push(`/platform/courses/${slug}/sections`);
      } else {
        setLoading(false);
        // Handle other errors
        console.error("Server Error:", responseData.error);
        toast.error("Oops Something Went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="flex flex-col mb-4">
          <h2 className="text-xl font-semibold">Customize your Section</h2>
          <small className="text-slate-400">
            Don't Worry you can always change this Later
          </small>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Section Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextAreaInput
            label="Section Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Section"
          loadingButtonTitle="Creating Section please wait..."
        />
      </form>
    </div>
  );
}
