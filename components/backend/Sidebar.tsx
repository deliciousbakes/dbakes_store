/** @format */

"use client";
import { DashboardMenu } from "@/utils/categories";
import { links } from "@/utils/links";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import { GrCatalog } from "react-icons/gr";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Separator } from "../ui/separator";

const Sidebar = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div
        className={
          showSidebar
            ? " md:block  space-y-6  mt-16 md:mt-0  h-screen text-slate-900 bg-slate-300 dark:bg-slate-800  font-semibold dark:text-slate-50  p-4 gap-2 fixed left-0 top-0 z-50              overflow-y-scroll    "
            : " hidden md:block mt-16 md:mt-0   space-y-6  sm:w-10 md:w-60  h-screen text-slate-900 bg-slate-300 dark:bg-slate-800  font-semibold dark:text-slate-50  p-4 gap-2 fixed left-0 top-0 z-50      overflow-y-scroll"
        }
      >
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className="flex justify-center items-center p-2 text-white"
          key="Dbakes"
        >
          <div className="flex bg-slate-400  rounded-md p-1  ">
            <FaBagShopping
              size={35}
              href="/"
              className="text-sky-950 mt-1 mr-2 roboto"
            />
            <div className="flex-col">
              <p className="font-bold text-base text-justify text-sky-950 flex ">
                DELICIOUS{" "}
              </p>
              <p className="font-bold text-base text-justify  text-sky-950 flex ">
                B A K E S
              </p>
            </div>
          </div>
        </Link>
        <div className=" space-y-1 flex flex-col text-lg">
          {DashboardMenu.map((item, i) => {
            return (
              <Link
                onClick={() => setShowSidebar(false)}
                key={i}
                href={item.link}
                className={
                  item.link === pathname
                    ? " text-jade  flex items-center space-x-3 px-6 py-2  border-l-4 border-jade text-sm"
                    : "text-sm flex items-center space-x-3 px-6 py-2 "
                }
              >
                <item.icon />
                <span className="flex items-center gap-2">{item.label}</span>
              </Link>
            );
          })}
          <Separator />
          <Collapsible className="" key="openMenu">
            <CollapsibleTrigger asChild onClick={() => setOpenMenu(!openMenu)}>
              <Button
                variant="ghost"
                size="lg"
                className=" justify-between flex items-center space-x-3 px-6 "
              >
                <div className="flex items-center space-x-3  text-sm">
                  <GrCatalog />
                  <span>Catalogue</span>
                </div>
                {openMenu ? <ChevronDown /> : <ChevronRight />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className=" bg-zinc-500  text-white   pl-8  dark:bg-slate-900  rounded-sm ">
              <Collapsible key="setOpenMenu">
                {links.map((item) => {
                  return (
                    <>
                      <Link
                        onClick={() => setShowSidebar(false)}
                        href={item.href}
                        key={item.href}
                        className={
                          item.href === pathname
                            ? " text-jade  flex items-center space-x-2 px-6 py-2  border-l-4 border-jade text-sm   "
                            : "text-sm flex items-center space-x-3 px-6 py-2 "
                        }
                      >
                        <item.icon />
                        <span className="flex items-center gap-2  ">
                          {item.label}
                        </span>
                      </Link>
                    </>
                  );
                })}
              </Collapsible>
            </CollapsibleContent>
          </Collapsible >

          <Separator />
          <div className="px-6 py-2  border-l-4  border-jade">
            <Button
              asChild
              variant="outline"
              size="lg"
              className=" hover:bg-jade  flex items-center space-x-3 px-6 py-2  "
            >
              <Link href="/" className="flex gap-3   text-xl" key="DbakesBtn">
                <AiOutlineLogout />
                <span>Logout</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
