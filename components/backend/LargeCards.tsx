import { MdCabin } from 'react-icons/md';
import LargeCard from "./LargeCard";

import { TbCaravan, TbTent } from 'react-icons/tb';

import { GiMushroomHouse, GiWoodCabin } from 'react-icons/gi';
import { PiLighthouse } from 'react-icons/pi';

const LargeCards = () => {


  const orderStats = [
    {
      icon:MdCabin,
      sales:"XAF 8450000" ,
      className:"bg-sky-600",
      title: "Today's Orders",
    },
    {
      icon:TbCaravan,
      sales:"XAF 48270000" ,
      className:"bg-slate-700",
      title: "Yesterday's Orders",
    },
    {

      icon:TbTent,
      sales:"XAF 1450000" ,
      className:"bg-gray-800",
      title: "This Month's Orders",
    },
    {

       icon:GiMushroomHouse,
      sales:"XAF 4650000" ,
      className:"bg-teal-600",
      title: "Last Month's Orders",
    },
    {

       icon:PiLighthouse,
      sales:"XAF 41,500,800" ,
      className:"bg-green-900",
      title: "Annual Orders",
    },
    {

       icon:GiWoodCabin,
      sales:"XAF 78450000" ,
      className:"bg-orange-900",
      title: "Quater Orders",
    },
  ]
  return (
    <div className="grid xl:grid-cols-6   lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2">

      {orderStats?.map((data, index) => {
        return <LargeCard className={`${data.className}`}  icon={data.icon}   key={index}  sales = { data.sales }  title={data.title} />}
      )}
    
    </div>
  )
}

export default LargeCards
