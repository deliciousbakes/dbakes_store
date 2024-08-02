/** @format */

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { links } from "../../utils/links";

// import UserIcon from './UserIcon';
// import { links } from '@/utils/links';

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className=" dark:bg-slate-500   bg-slate-950 "
      >
        <Image
          src="/images/profile.JPG"
          alt="profile"
          className="w-8 h-8   rounded-full "
          width={200}
          height={200}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="start" sideOffset={10}>
        <DropdownMenuLabel className="pl-4  font-semibold text-lg">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <span>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 capitalize "
                >
                  <link.icon /> {link.label}
                </Link>
              </span>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
