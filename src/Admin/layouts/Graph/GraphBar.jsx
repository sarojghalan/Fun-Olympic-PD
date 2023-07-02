// import { Bar } from "@ant-design/charts";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function GraphBar() {
  const dataAll = [
    { id: 1, name: "Product 1", users: 3, hours: 1000 },
    { id: 2, name: "Product 2", users: 2, hours: 2000 },
    { id: 3, name: "Product 3", users: 4, hours: 1500 },
    { id: 4, name: "Product 4", users: 1, hours: 3000 },
    { id: 5, name: "Product 5", users: 5, hours: 2000 },
  ];

  const data = {
    labels: dataAll.map((data) => data.users),
    datasets: [
      {
        label: "hours",
        data: dataAll.map((data) => data.hours),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  //   const data = [
  //     { year: "2015", hours: 1000 },
  //     { year: "2016", hours: 2000 },
  //     { year: "2017", hours: 1500 },
  //     { year: "2018", hours: 3000 },
  //     { year: "2019", hours: 2000 },
  //   ];
  //   const config = {
  //     data: data,
  //     xField: "year",
  //     yField: "hours",
  //     height: 400,
  //     width: 600,
  //   };
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
      {/* <Line data={data} /> */}
      <Bar data={data} />
      </div>
    </div>
  );
}
export default GraphBar;
