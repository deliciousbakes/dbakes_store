/** @format */
"use client";

import { AlignJustify, Bell } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import LinksDropdown from "./LinksDropdown";

import { Dispatch, SetStateAction } from "react";
import DarkMode from "./DarkMode";

const Navbar = ({
  setShowSidebar,
  showSidebar,
}: {

  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  showSidebar: boolean;
}) => {
  return (
    <div
      className="flex items-center justify-evenly sm:justify-normal md:justify-between bg-slate-300
       dark:bg-slate-950  border-2 text-white  h-16  px-8 fixed w-full top-0 left-0 md:left-60 py-4 z-50 lg:pr-[15rem] ">
      {/* <Link href="/dashboard"   className="sm:hidden">Logo</Link> */}
      
      <Button
        asChild
        onClick={() => setShowSidebar(!showSidebar)}
        size="icon"
        variant="ghost"
        className="bg-slate-800 text-white"
      >
          <AlignJustify />
      </Button>

      <div className="flex  space-x-3 pr-9 md:pr-80">
        <DarkMode />
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="bg-transparent-50   relative inline-flex  border-2   dark:bg-slate-500   bg-slate-950 items-center p-3 text-sm font-medium text-center text-white rounded-lg "
        >
          <Link href="/">
            <Bell />
          </Link>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-jade border-2 border-white rounded-full -top-0 end-6 dark:border-gray-900">
            20
          </div>
        </Button>

        <LinksDropdown />
      </div>
    </div>
  );
};

export default Navbar;
