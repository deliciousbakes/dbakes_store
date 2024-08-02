import { X } from "lucide-react";
import React from "react";
import { OtherButton } from "./Buttons";

const FormHeader = ({title}:{title:string}) => {
  return (
    <div className="">
    <div className="flex items-center  justify-between  ">
      <h2 className="p-4 text-2xl text-black   dark:text-white font-semibold ml-4  ">
        {title}
      </h2>
      <OtherButton href={""} btnTitle="Close">
        {React.createElement(X)}
      </OtherButton>
      </div>
    </div>
  );
}

export default FormHeader
