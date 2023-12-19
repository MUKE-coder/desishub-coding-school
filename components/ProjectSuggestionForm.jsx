"use client";
import { makePostRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import TextInput from "@/components/FormInputs/TextInput";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";

export default function ProjectSuggestionForm() {
  const router = useRouter();
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  function redirect() {
    router.push("/dashboard/inventory/categories");
  }
  async function onSubmit(data) {
    // console.log(data);
    await makePostRequest(
      setLoading,
      "api/suggested-projects",
      data,
      "Project Submitted Successfully",
      reset
    );
    setSuccessMsg(
      "Project has been Submitted Successfully: It will Appear on the List once approved. Thanks 👏 "
    );
    setTimeout(() => {
      setSuccessMsg("");
    }, 5000);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        {successMsg && (
          <p className="bg-lime-600 py-6 px-4 rounded-lg max-w-2xl mx-auto mb-8">
            {successMsg}
          </p>
        )}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Full Name"
            name="fullName"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <div className="sm:col-span-full">
            <div className="bg-slate-300 h-[1px] w-full"></div>
          </div>
          <TextInput
            label="Suggested Project Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Add a Link to the design of a similar project"
            type="url"
            name="design"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Suggest the Tech Stack for this project"
            name="techStack"
            register={register}
            errors={errors}
          />
          <TextAreaInput
            label="Describe Your Project so that we can Understand it"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Add Project Idea"
          loadingButtonTitle="Adding Project Please Wait ..."
        />
      </form>
    </div>
  );
}
