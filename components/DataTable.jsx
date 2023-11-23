"use client";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
import { useState } from "react";
export default function DataTable({
  data = [],
  columns = [],
  resourceTitle = "",
}) {
  const PAGE_SIZE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentlyDisplayedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  // console.log(data);
  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);
  return (
    <div className="relative shadow-md sm:rounded-lg ">
      {currentlyDisplayedData.length > 0 ? (
        <>
          <table className="w-full min-w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {columns.map((columnName, i) => {
                  return (
                    <th key={i} scope="col" className="px-6 py-3">
                      {columnName}
                    </th>
                  );
                })}
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentlyDisplayedData.map((item, i) => {
                return (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    {columns.map((columnName, i) => (
                      <td key={i} className="px-6 py-4">
                        {columnName.includes(".") ? (
                          // If the column name contains a dot, it's a nested object
                          // Access the nested key using reduce
                          columnName
                            .split(".")
                            .reduce((obj, key) => obj[key], item)
                        ) : columnName === "createdAt" ||
                          columnName === "updatedAt" ? (
                          // Convert date columns to a more readable format
                          new Date(item[columnName]).toLocaleDateString()
                        ) : columnName === "imageUrl" ? (
                          // Special handling for imageUrl to render an image
                          <img
                            src={item[columnName]}
                            alt={`Image for ${resourceTitle}`}
                            className="w-10 h-10 object-cover rounded-full"
                          />
                        ) : (
                          // Otherwise, display the value as is
                          item[columnName]
                        )}
                      </td>
                    ))}

                    <td className="px-6 py-4 text-right flex items-center space-x-4">
                      {resourceTitle.includes("adjustments") ? (
                        ""
                      ) : (
                        <Link
                          href={`/dashboard/inventory/${resourceTitle}/update/${item.id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-1"
                        >
                          <Pencil className="w-4 h-4" />
                          <span>Edit</span>
                        </Link>
                      )}
                      <DeleteBtn id={item.id} endpoint={resourceTitle} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
            aria-label="Table navigation"
          >
            <span className="text-xl font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing{" "}
              <span className="font-semibold text-gray-50 dark:text-white">
                {itemStartIndex}-{itemEndIndex}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-50 dark:text-white">
                {data.length}
              </span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-14">
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage == 1}
                  className="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => {
                return (
                  <li key={index}>
                    <button
                      onClick={() => setCurrentPage(index + 1)}
                      disabled={currentPage == index + 1}
                      className={
                        currentPage == index + 1
                          ? "flex items-center justify-center px-3 h-10 leading-tight text-gray-50 bg-blue-600 border border-blue-300 hover:bg-blue-800 hover:text-white dark:bg-slate-300 dark:border-slate-400 dark:text-slate-800 dark:hover:bg-slate-300"
                          : "flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              })}

              <li>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage == totalPages}
                  className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <p className="p-4 text-xl bg-white text-center">
          There is No Data to Display
        </p>
      )}
    </div>
  );
}
