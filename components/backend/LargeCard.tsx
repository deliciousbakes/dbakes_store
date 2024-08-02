/** @format */

import { IconType } from "react-icons/lib";

type ItemProps = {
  icon: IconType;
  sales: String;
  className: string;
  title: string;
};

// const LargeCard = ({ item}:ItemProps) => {
const LargeCard = ({ className, title, sales, icon: Icon }: ItemProps) => {
  return (
    <div
      className={` p-3 flex dark:text-white flex-col rounded-lg bg-green-500 m-5 justify-center items-center ${className}`}
    >
      <Icon className="w-10 h-10   mb-3" /> <h2>{title}</h2>
      <h3 className="lg:text-xl text-md">{sales}</h3>
    </div>
  );
};

export default LargeCard;
