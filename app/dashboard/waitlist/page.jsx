import DataTable from "@/components/DataTable";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page() {
  const waitlists = await getData("waitlist");
  const columns = ["firstName", "lastName", "email", "createdAt"];
  return (
    <div className="py-8 lg:py-16 mx-auto max-w-4xl">
      <DataTable data={waitlists} columns={columns} />
    </div>
  );
}
