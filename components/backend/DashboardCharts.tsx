import BestSellingProducts from './BestSellingProducts'
import WeeklySalesChart from './WeeklySalesChart'

const DashboardCharts = () => {
  return (
    <div className=" p-4 grid lg:grid-cols-2  md:grid-cols-1 gap-4 overflow-x-auto">
      <WeeklySalesChart />
      <BestSellingProducts />
    </div>
  );
}

export default DashboardCharts
