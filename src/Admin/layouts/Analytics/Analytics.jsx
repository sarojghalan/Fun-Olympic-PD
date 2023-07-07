// import { Bar } from "@ant-design/charts";
import { Bar, Doughnut ,PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {
  argentina,
  hongkong,
  india,
  bangladesh,
  china,
  japan,
  nepal,
  spain,
  turkry,
  uk,
} from "../../../assets/index";

function Analytics() {
  const dataAll = [
    { id: 1, name: "User 1", users: 3, hours: 9 },
    { id: 2, name: "User 2", users: 2, hours: 2 },
    { id: 3, name: "User 3", users: 4, hours: 8 },
    { id: 4, name: "User 4", users: 1, hours: 4 },
    { id: 5, name: "User 5", users: 5, hours: 6 },
  ];
  const customLabel = (tooltipItem) => {
    const index = tooltipItem.dataIndex;
    const imageUrl = imageUrls[index];
    return '<img src="' + imageUrl + '" />';
  };
  const RankingArr = [
    {
      country: "hongkong",
      image: hongkong,
      gold: 8,
      silver: 8,
      bronze: 8,
    },
    {
      country: "nepal",
      image: nepal,
      gold: 10,
      silver: 10,
      bronze: 10,
    },
    {
      country: "uk",
      image: uk,
      gold: 4,
      silver: 4,
      bronze: 4,
    },
    {
      country: "bangladesh",
      image: bangladesh,
      gold: 8,
      silver: 9,
      bronze: 8,
    },
    {
      country: "india",
      image: india,
      gold: 7,
      silver: 6,
      bronze: 8,
    },
    {
      country: "china",
      image: china,
      gold: 10,
      silver: 9,
      bronze: 9,
    },
    {
      country: "japan",
      image: japan,
      gold: 7,
      silver: 6,
      bronze: 7,
    },
    {
      country: "argentina",
      image: argentina,
      gold: 9,
      silver: 8,
      bronze: 10,
    },
    {
      country: "spain",
      image: spain,
      gold: 6,
      silver: 5,
      bronze: 6,
    },
    {
      country: "turkey",
      image: turkry,
      gold: 5,
      silver: 5,
      bronze: 5,
    },
  ];
  const labels = RankingArr.map((item) => item.country);
  const goldData = RankingArr.map((item) => item.gold);
  const silverData = RankingArr.map((item) => item.silver);
  const bronzeData = RankingArr.map((item) => item.bronze);
  const imageUrls = RankingArr.map((item) => item.image);

  const data = {
    labels: labels.map((data) => data),
    datasets: [
      {
        label: "Gold",
        data: goldData,
        backgroundColor: "gold",
      },
      {
        label: "Silver",
        data: silverData,
        backgroundColor: "silver",
      },
      {
        label: "Bronze",
        data: bronzeData,
        backgroundColor: "peru",
      },
      // {
      //   label: "hours",
      //   data: RankingArr.map((data) => data.gold),
      //   backgroundColor: [
      //     "rgba(75,192,192,1)",
      //     "purple",
      //     "#50AF95",
      //     "#f3ba2f",
      //     "#2a71d0",
      //   ],
      // },
    ],
  };
  const options = {
    tooltips: {
      callbacks: {
        label: customLabel,
      },
    },
  };
  return (
    <div className="admin__category__wrapper">
      {/* <Bar {...config} /> */}
      <div className="graph__wrapper">
        <Doughnut data={data} />
        {/* <Bar data={data} /> */}
      </div>
      <p className="graph__watch__time">Ranking Chart</p>
    </div>
  );
}
export default Analytics;
