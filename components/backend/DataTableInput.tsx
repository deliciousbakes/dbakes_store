/** @format */

"use client";

import { Category } from "@prisma/client";
import { SetStateAction, useState } from "react";

const tableHeading = [
  {name:"ID"},
  {name:"Title"},
  {name:"Slug"},
  {name:"Description"},
]


const DataTableInput = ({ data }: { data: Category[] }) => {
  const PAGE_SIZE = 50;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentlyDisplayedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const itemStartIndex = startIndex + 1;
  const totalRecords = data.length;
  const itemEndIndex = Math.min(endIndex, totalRecords);

  const handlePageChange = (newPage: SetStateAction<number>) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="p-4 rounded-lg   bg-zinc-600  dark:bg-slate-900 mt-6 ">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Recent orders</h1>
      <div className="p-8">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg   z-20">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                {tableHeading.map((item) => {
                  return (
                    <th scope="col" className="px-6 py-3" key={item.name}>
                      {item.name}
                    </th>
                  );
                })}

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentlyDisplayedData.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.id}
                    </th>
                    <td className="px-6 py-4" key={item.id}>
                      {item.title}
                    </td>
                    <td className="px-6 py-4" key={item.id}>
                      {item.slug}
                    </td>
                    <td className="px-6 py-4" key={item.id}>
                      {item.description}
                    </td>

                    <td className="px-6 py-4" key={item.id}>
                      action
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
          >
            <span className="text-xl font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {itemStartIndex}-{itemEndIndex}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {totalRecords}
              </span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <button
                  onClick={() =>
                    currentPage - 1 === 0
                      ? currentPage
                      : handlePageChange(currentPage - 1)
                  }
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500  border border-gray-300 rounded-s-sm hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white   bg-white font-extrabold text-pretty"
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => {
                return (
                  <li key={index}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={
                        currentPage == index + 1
                          ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300  hover:text-white  hover:bg-purple-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white bg-slate-900 font-extrabold text-sm"
                          : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font-extrabold text-sm  "
                      }
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              })}

              <li>
                <button
                  disabled
                  onClick={() =>
                    currentPage + 1 > totalPages
                      ? currentPage
                      : handlePageChange(currentPage + 1)
                  }
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-sm hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white bg-slate-900 font-extrabold text-pretty"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DataTableInput;
