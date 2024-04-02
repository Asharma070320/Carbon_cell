import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chart.css";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { CategoryScale } from "chart.js";
import wallet from "../../src/wallet.png";
import MiniCards from "./MiniCards";

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);
  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetchapi = async () => {
      try {
        const res = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setApi(res.data.bpi);
      } catch (error) {
        console.log(error);
      }
    };
    fetchapi();
  }, []);
  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        setPopulationData(response.data.data);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    };

    fetchData();
  }, []);

  const renderGraph = () => {
    if (!populationData) return null;

    const nations = populationData.map((entry) => entry.Population);
    const populations = populationData.map((entry) => entry.Year);

    const data = {
      labels: nations,
      datasets: [
        {
          label: "Year",
          backgroundColor: "rgba(255,255,255,0.7)",
          borderColor: "rgba(36,147,36,1)",
          borderWidth: 2,
          data: populations,
        },
      ],
    };

    const options = {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Population",
          },
          // ticks: {
          //   callback: function(value) {
          //     return value.toLocaleString();
          //   },
          // },
        },
        x: {
          title: {
            display: true,
            text: "Years",
          },
        },
      },
      legend: {
        display: true,
        position: "top",
      },
    };

    return (
      <>
        <div className="chart_container">
          <div className="mini_chart">
            <Line className="set" data={data} options={options} />
          </div>
          <div className="wallet">
            <h3>Wallet Balance</h3>
            <div className="line"></div>
            <img src={wallet} alt="" width={"150px"} height={"150px"} />
            <div className="line"></div>
            <button className="manage_btn">Manage Wallet</button>
          </div>
        </div>
        <p className="assests">Assests</p>
        <MiniCards name={api} />
      </>
    );
  };

  return <div>{renderGraph()}</div>;
};

export default PopulationGraph;
