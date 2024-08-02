

"use client"
import { useState } from "react"
import Navbar from "../../../components/backend/Navbar"
import Sidebar from "../../../components/backend/Sidebar"

const BackendLayoutPage = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] =useState(false)
  return (
    <div className="flex gap-2 mt-8">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="w-full lg:ml-60 ml-0 flex-grow  bg-slate-400 ">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <main className=" dark:bg-slate-950  bg-slate-400   min-h-screen ">{children}</main>
      </div>
    </div>
  );
}

export default BackendLayoutPage
