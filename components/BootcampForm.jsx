"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import { makePostRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

export default function BootcampForm() {
  const router = useRouter();
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
    makePostRequest(
      setLoading,
      "api/bootcamp",
      data,
      "You have been successfully added to the Bootcamp",
      reset
    );
  }
  return (
    <div>
      <form
        id="book"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl p-4 bg-white border border-slate-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="First Name"
            name="firstName"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Phone Number"
            name="phone"
            type="tel"
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
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Join Bootcamp"
          loadingButtonTitle="Adding you Please Wait ..."
        />
      </form>
    </div>
  );
}
