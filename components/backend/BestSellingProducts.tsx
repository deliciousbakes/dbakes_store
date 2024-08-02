"use client"
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js"
// import {} from "chartjs"
import { Pie } from "react-chartjs-2"

ChartJS.register(Tooltip, Legend,ArcElement)
const BestSellingProducts = () => {

  const data = {
    labels: ["Watermelon", "Cabbage", "Maize", "broccoli"],
    datasets: [
      {
        label: "# of Votes",
        data: [45, 15, 22, 18],
        backgroundColor: [
          "rgba(215,205,16,1)",
          "rgba(15,215,22,0.7)",
          "rgba(25,222,106,0.1)",
          "rgba(155,250,15,1)",
        ],
        borderColor: [
          "rgba(128,67,27,1)",
          "rgba(74,32,217,1)",
          "rgba(74,52,47,1)",
          
        ],
        bandwidth:1
       },
     ]
}


  return (
    <div className="p-5 rounded-lg border   dark:text-white ">
      <h1 className="text-xl font-bold">Best Selling Products pie Chart</h1>
      <div className="grid place-items-center">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default BestSellingProducts
