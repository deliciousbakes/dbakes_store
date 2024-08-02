/** @format */

import { AddNewButton } from "./Buttons";
import HeadingPage from "./Heading";

const PageHeader = ({
  title,
  href,
  btnTitle,
}: {
  btnTitle: string;
  title: string;
  href: string;
}) => {
  return (
    <div>
      <div className="flex justify-between items-center  mr-5">
        <HeadingPage title={title} />
        <AddNewButton btnTitle={btnTitle} href={href}/>
        
      </div>
    </div>
  );
};

export default PageHeader;
{
  /*   */
}
