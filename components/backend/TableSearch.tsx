/** @format */

"use client";

import { SearchIcon } from "lucide-react";

const  TableSearch=()=> {
    return (
      
        <div className="">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                   <SearchIcon/>
            </div>
            <input type="text" id="table-search" className=" block pt-2 ps-10 text-xl text-gray-900 border h-1/2 border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
        </div>
    </div>
) 
}
export default TableSearch;
