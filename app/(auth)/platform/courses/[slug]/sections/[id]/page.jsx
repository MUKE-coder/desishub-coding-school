import { getData } from "@/lib/getData";
import React from "react";

export default async function Update({ params: { id } }) {
  const section = await getData(`sections/${id}`);
  return (
    <div>
      <h2>Update the Section: {id}</h2>
      <div className="flex"></div>
    </div>
  );
}
