import { MdCabin } from 'react-icons/md';
import SmallCard from "./SmallCard";

import { TbCaravan } from 'react-icons/tb';

import { GiMushroomHouse, GiWoodCabin } from 'react-icons/gi';
import { PiLighthouse } from 'react-icons/pi';

import { TbBuildingCottage, TbTent } from 'react-icons/tb';


const SmallCards = () => {


  const orderStats = [
    {
      icon:TbTent,
      sales:"784" ,
      className:"bg-sky-900",
      iconBg:"bg-amber-500",
      title: "Total Orders",
    },
    {
      icon:MdCabin,
      sales:"784" ,
      className:"bg-indigo-600",
      iconBg:"bg-red-500",
      title: "Total Orders",
    },
    {
      icon:TbCaravan,
      sales:"99" ,
      className:"bg-slate-700",
      iconBg:"bg-orange-900",
      title: "Order pending",
    },
    {

      icon:TbBuildingCottage,
      sales:"285" ,
      className:"bg-zinc-800",
      iconBg:"bg-red-800",
      title: "Order processing",
    },
    {

       icon:GiMushroomHouse,
      sales:"500" ,
      className:"bg-teal-600",
      iconBg:"bg-red-600",
      title: "Order delivered",
    },
    {

       icon:PiLighthouse,
      sales:"22" ,
      className:"bg-fuchsia-500",
      iconBg:"bg-blue-500",
      title: "Annual Orders",
    },
    {

       icon:GiWoodCabin,
      sales:"45" ,
      className:"bg-orange-900",
      iconBg:"bg-green-900",
      title: "Quater Orders",
    },
  ]
  return (
    <div className="p-4 grid xl:grid-cols-6   lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2">
      {orderStats?.map((data, index) => {
        return <SmallCard className={`${data.className}`} key={index} sales={data.sales} title={data.title} icon={data.icon } iconBg={data.iconBg} />}
      )}
    
    </div>
  )
}

export default SmallCards
