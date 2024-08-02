import { IconType } from 'react-icons/lib';

type ItemProps = {
      icon: IconType;
      sales: String;
      className:string;
      iconBg:string;
      title:string;
}




// const SmallCard = ({ item}:ItemProps) => {
const SmallCard = ({ className, title, sales, icon:Icon,iconBg}: ItemProps) => {
  return (
    <div   className={` flex flex-row gap-3 dark:text-white rounded-lg bg-slate-700 m-2 justify-around items-center ${className}`}>
      <Icon className={`border  ml-2 rounded-full  w-10 h-10 ${iconBg} `} />
      <div className="flex-col">
          <h2>{title}</h2>
          <h3   className="lg:text-3xl text-2xl font-bold">{sales}</h3>
      </div>
    </div>
    
  )
}

export default SmallCard
