/** @format */

"use client";

import Navbar from "@/components/backend/Navbar";
import Sidebar from "@/components/backend/Sidebar";
import { Inter, Merriweather, Roboto } from "next/font/google";
import { useState } from "react";
import Providers from "../context/providers";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500"],
  variable: "--font-roboto",
});

const merriweather_Init = Merriweather({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
  variable: "--font-merriweather",
});
// export const metadata: Metadata = {
//   title: "Dbake Store",
//   description: "Manage your store efficiently",
// };

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <div className="w-full">
            <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <main
              className={`merriweather_Init.variable p-8  text-slate-900   min-h-screen`}
            >
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
