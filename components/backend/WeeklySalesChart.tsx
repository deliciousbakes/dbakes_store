
"use client"

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Button } from "../ui/button";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const WeeklySalesChart = () => {
  const tabs = [
    {
      title: "Sales",
      type:"sales"
  },
    {
      title: "Orders",
      type:"orders"
  },
]
const [chartToDisplay, setChartToDisplay] =useState(tabs[0].type)

  

    const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  const chartData = {
    labels: ['test', 'test2', 'test3'],
    datasets: [
      {
        label: 'Temperature',
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Humidity',
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Brightness',
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        fill: false,
        borderColor: 'rgb(255, 206, 86)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive:true,
    plugins: {
      legend: {
        position: "top" as const,
       
      },
      title: {
        display: true,
        text:"Chartjs Line Charts"
       
      },
    },
  };

  
  return (
    <div className="p-4 rounded-lg bg-jade   dark:text-white ">
      <h1 className="text-2xl font-bold mb-4">Weekly Sales chart</h1>
      <div className="p-4  ">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => {
              return (
                <li className="me-2" key={i}>
                  <Button
                    key={i}
                    variant="ghost"
                    size="lg"
                    onClick={() => setChartToDisplay(tab.type)}
                    className={
                      chartToDisplay === tab.type
                        ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                        : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                  >
                    {tab.title}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
        {tabs.map((tab, i) => {
          if (chartToDisplay === tab.type) {
            return <Line data={chartData} options={options} key={i} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default WeeklySalesChart
