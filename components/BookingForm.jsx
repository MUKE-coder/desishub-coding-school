"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateUserCode";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

export default function BookingForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  function redirect() {
    router.push("https://gmukejohnbaptist.gumroad.com/l/ecommerce");
  }
  async function onSubmit(data) {
    const regNo = generateUserCode("CCL", data.firstName);
    data.regNo = regNo;
    try {
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/bookings`, {
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
        toast.success("Joined Class Created Successfully");
        reset();
        router.push(`/booking/${responseData.data.id}/credentials`);
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.error);
          toast.error("Oops Something Went wrong");
        }
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
        id="book"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl p-4 bg-white border border-slate-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
      >
        <h2 className="text-slate-300 text-center text-2xl sm:text-2xl border-b border-slate-500 pb-3 mb-6">
          {" "}
          Fill in the Info Below to Enroll to one-on-one coaching program
        </h2>
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
          buttonTitle="Join Class"
          loadingButtonTitle="Adding you Please Wait ..."
        />
      </form>
    </div>
  );
}
