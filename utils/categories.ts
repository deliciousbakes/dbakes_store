import { IconType } from 'react-icons';
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaFirstOrder, FaPeopleCarryBox, FaPeopleGroup } from "react-icons/fa6";
import { GiMushroomHouse, GiWoodCabin } from 'react-icons/gi';
import { GoContainer } from 'react-icons/go';
import { MdCabin, MdOutlineSettings, MdProductionQuantityLimits } from 'react-icons/md';
import { PiLighthouse, PiVan, PiWarehouse } from 'react-icons/pi';
import { RxDashboard } from "react-icons/rx";
import { SiMediamarkt } from "react-icons/si";
import { TbBuildingCottage, TbCaravan, TbTent } from 'react-icons/tb';


type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'cabin'
  | 'tent'
  | 'airstream'
  | 'cottage'
  | 'container'
  | 'caravan'
  | 'tiny'
  | 'magic'
  | 'warehouse'
  | 'lodge';

export const Categories: Category[] = [
  {
    label: 'cabin',
    icon: MdCabin,
  },
  {
    label: 'airstream',
    icon: PiVan,
  },
  {
    label: 'tent',
    icon: TbTent,
  },
  {
    label: 'warehouse',
    icon: PiWarehouse,
  },
  {
    label: 'cottage',
    icon: TbBuildingCottage,
  },
  {
    label: 'magic',
    icon: GiMushroomHouse,
  },
  {
    label: 'container',
    icon: GoContainer,
  },
  {
    label: 'caravan',
    icon: TbCaravan,
  },

  {
    label: 'tiny',
    icon: PiLighthouse,
  },
  {
    label: 'lodge',
    icon: GiWoodCabin,
  },
];

export const ProductCategories: string[] = [
    'Baked Products',
    'Fried products',
    'Cooked Foods',
    'pressing',
    // 'cottage',
    // 'magic',
    // 'container',
    // 'caravan',
    // 'tiny',
    // 'lodge',

]
export type DashboardMenuProps = {
  label: DashboardMenuLabel;
  icon: IconType;
  link: string;
};

export type DashboardMenuLabel =
  | 'Dashboard'
  | 'Product'
  | 'Orders'
  | 'Clients'
  | 'Employees'
  | 'Market'
  | 'Setting'
  | 'Sales'
  | 'Logout'
  | 'Invoice';

export const DashboardMenu: DashboardMenuProps[] = [
  {
    label: 'Dashboard',
    icon:  RxDashboard,
    link:"/dashboard"
  },
  {
    label: 'Product',
    icon: MdProductionQuantityLimits,
    link:"/dashboard/product"
  },
  {
    label: 'Orders',
    icon: FaFirstOrder,
    link:"/dashboard/orders"
  },
  {
    label: 'Clients',
    icon: FaPeopleGroup,
    link:"/dashboard/client"
  },
  {
    label: 'Employees',
    icon: FaPeopleCarryBox,
    link:"/dashboard/employee"
  },
  {
    label: 'Sales',
    icon: SiMediamarkt,
    link:"/dashboard/sales"
  },
  {
    label: 'Setting',
    icon: MdOutlineSettings,
    link:"/dashboard/setting"
  },
  
  {
    label: 'Invoice',
    icon: FaFileInvoiceDollar,
    link:"/dashboard/Invoice"
  },
  
  
 
];
