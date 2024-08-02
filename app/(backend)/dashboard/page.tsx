import CustomDataTable from "@/components/backend/CustomDataTable"
import DashboardCharts from "@/components/backend/DashboardCharts"
import DataTableInput from "@/components/backend/DataTableInput"
import HeadingPage from "@/components/backend/Heading"
import LargeCards from "@/components/backend/LargeCards"
import SmallCards from "@/components/backend/SmallCards"
import { Category } from "@prisma/client"


const DashboardPage = () => {
  return (
    <div>
      <HeadingPage title="Dashboard Overvivew" />
      <LargeCards />
      <SmallCards />

      {/* charts */}
      <DashboardCharts />
      {/* Orders table */}
      <CustomDataTable  />
    </div>
  );
}

export default DashboardPage
