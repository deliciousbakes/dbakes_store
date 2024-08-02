/** @format */

import PageHeader from "@/components/backend/PageHeader";
import TableActions from "@/components/backend/TableActions";

const CategoriesPage = () => {
  return (
    <div className="rounded-lg   bg-slate-700 ">
      <PageHeader
        title="Categories"
        href="/dashboard/catalogue/categories/new"
        btnTitle="Add Category"
      />
     <TableActions/>
    </div>
  );
};

export default CategoriesPage;
