/** @format */

import PageHeader from "@/components/backend/PageHeader";
import TableActions from "@/components/backend/TableActions";

const ProductsPage = () => {
  return (
    <div className="rounded-lg   bg-slate-700 ">
      <PageHeader
        title="Products"
        href="/dashboard/catalogue/products/new"
        btnTitle="Add Product"
      />
      <TableActions />
    </div>
  );
};

export default ProductsPage;
