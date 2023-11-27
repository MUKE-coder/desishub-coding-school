import DataTable from "@/components/DataTable";
// import TableHeaderActions from "@/components/TableHeaderActions";
import { getData } from "@/lib/getData";
import React from "react";
import Heading from "@/components/backoffice/Heading";
export default async function page() {
  const bootcamps = await getData("bootcamp");
  // console.log(waitlists);
  const columns = ["firstName", "lastName", "email", "phone", "createdAt"];
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
        <Heading title="Bootcamp List" />
      </div>
      {/* <TableHeaderActions
        columns={csvColumns}
        datas={waitlists}
        fileName="wailist"
      /> */}
      <DataTable data={bootcamps} columns={columns} resourceTitle="bootcamp" />
    </div>
  );
}
