"use client";
import { makePutRequest } from "@/lib/apiRequest";
import { Check, Trash2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function ToggleBtn({ endpoint, initialStatus, resourceName }) {
  console.log(initialStatus);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      status: initialStatus,
    },
  });

  const router = useRouter();
  function redirect() {
    router.refresh();
  }
  const status = watch("status");
  console.log(status);
  // const confirmed = confirm("Are you sure?");

  async function onSubmit(data) {
    console.log(data);
    makePutRequest(setLoading, endpoint, data, resourceName, redirect);
    setShowForm(false);
  }
  return (
    <>
      {showForm ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center gap-8"
        >
          <div className="w-full">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                {...register("status")}
                type="checkbox"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {status ? "Approved" : "Pending"}
              </span>
            </label>
          </div>
          {loading ? <p>updating...</p> : <button>Submit</button>}
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="font-medium text-green-600 dark:text-green-500 flex items-center space-x-1"
        >
          {status ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
          <span>{status ? "Disapprove" : "Approve"}</span>
        </button>
      )}
    </>
  );
}
