import { IconType } from "react-icons";
import { MdOutlineSettings, MdProductionQuantityLimits } from 'react-icons/md';



import { FaFileInvoiceDollar, FaFirstOrder, FaPeopleCarryBox, FaPeopleGroup } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { SiMediamarkt } from "react-icons/si";
// import { LogOut, LogOutIcon } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon:IconType
};

export const links: NavLink[] = [
  {
    label: "Dashboard",
    icon: RxDashboard,
    href: "/dashboard",
  },
  {
    label: "Product",
    icon: MdOutlineSettings,
    href: "/dashboard/catalogue/products",
  },
  {
    label: "Categories",
    icon: MdProductionQuantityLimits,
    href: "/dashboard/catalogue/categories",
  },
  {
    label: "Orders",
    icon: FaFirstOrder,
    href: "/dashboard/orders",
  },
  {
    label: "Clients",
    icon: FaPeopleGroup,
    href: "/dashboard/client",
  },
  {
    label: "Employees",
    icon: FaPeopleCarryBox,
    href: "/dashboard/employee",
  },
  {
    label: "Sales",
    icon: SiMediamarkt,
    href: "/dashboard/sales",
  },
  {
    label: "Setting",
    icon: MdOutlineSettings,
    href: "/dashboard/setting",
  },

  {
    label: "Invoice",
    icon: FaFileInvoiceDollar,
    href: "/dashboard/Invoice",
  },
];