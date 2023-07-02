// import { Bar } from "@ant-design/charts";
import { Bar, Doughnut  } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Analytics() {
  const dataAll = [
    { id: 1, name: "User 1", users: 3, hours: 9 },
    { id: 2, name: "User 2", users: 2, hours: 2 },
    { id: 3, name: "User 3", users: 4, hours: 8 },
    { id: 4, name: "User 4", users: 1, hours: 4 },
    { id: 5, name: "User 5", users: 5, hours: 6 },
  ];

  const data = {
    labels: dataAll.map((data) => data.name),
    datasets: [
      {
        label: "hours",
        data: dataAll.map((data) => data.hours),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "purple",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  };
  const options = {
    scales: {
      y: {
        type: "linear",
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <div className="admin__category__wrapper">
      {/* <Bar {...config} /> */}
      <div className="graph__wrapper">
        <Doughnut  data={data} />
        {/* <Bar data={data} /> */}
      </div>
      <p className="graph__watch__time">-- User Watch Time --</p>
    </div>
  );
}
export default Analytics;
