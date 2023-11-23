import DataTable from "@/components/DataTable";
// import TableHeaderActions from "@/components/TableHeaderActions";
import { getData } from "@/lib/getData";
import React from "react";
import Heading from "@/components/backoffice/Heading";
export default async function page() {
  const waitlists = await getData("waitlist");
  const columns = ["firstName", "lastName", "email", "createdAt"];
  const csvColumns = [
    {
      id: "firstName",
      displayName: "First Name",
    },
    {
      id: "lastName",
      displayName: "Last Name",
    },
    {
      id: "email",
      displayName: "Email",
    },
    {
      id: "createdAt",
      displayName: "Created AT",
    },
  ];

  // const filteredData =fil
  return (
    <div className="mx-auto ">
      <div className="mb-6">
        <Heading title="Waitlist List" />
      </div>
      {/* <TableHeaderActions
        columns={csvColumns}
        datas={waitlists}
        fileName="wailist"
      /> */}
      <DataTable data={waitlists} columns={columns} />
    </div>
  );
}
