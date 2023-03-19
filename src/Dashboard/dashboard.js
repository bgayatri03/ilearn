import React, { useState } from "react";
import "../Styles/dashboard.css";
import Navbar from "../Navbar";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import dashboardTestData from "../dashboardTestData.json";
import dashboardGameData from "../dashboardGameData.json";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Dashboard = () => {
  const filters = ["daily", "all time"];
  const [defaultFilter, setDefaultFilter] = useState("Filter");

  //test-->
  let todaysDate = new Date().toLocaleDateString();
  let correctArray = [];
  let wrongArray = [];
  let skippedArray = [];

  dashboardTestData.forEach((item) => {
    if (defaultFilter.value === "daily") {
      if (item.correct) {
        if (item.Date === todaysDate) {
          correctArray.push(item.correct);
        }
      }
      if (item.wrong) {
        if (item.Date === todaysDate) {
          wrongArray.push(item.wrong);
        }
      }
      if (item.skipped) {
        if (item.Date === todaysDate) {
          skippedArray.push(item.skipped);
        }
      }
    }

    if (defaultFilter.value === "all time") {
      if (item.correct) {
        correctArray.push(item.correct);
      }
      if (item.wrong) {
        wrongArray.push(item.wrong);
      }
      if (item.skipped) {
        skippedArray.push(item.skipped);
      }
    }
  });

  let reducedCorrectArray = correctArray.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  let reducedWrongArray = wrongArray.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  let reducedSkippedArray = skippedArray.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  const myData = {
    datasets: [
      {
        data: [reducedCorrectArray, reducedWrongArray, reducedSkippedArray],
        backgroundColor: ["green", "red", "blue"],
      },
    ],
    labels: ["Correct", "Wrong", "Skipped"],
  };

  //game-->
  let gameCorrectArray = [];
  let gameWrongArray = [];
  let gameTotalArray = [];

  if (defaultFilter.value === "all time") {
    dashboardGameData.forEach((item) => {
      if (item.correct) {
        gameCorrectArray.push(item.correct);
      }
      if (item.wrong) {
        gameWrongArray.push(item.wrong);
      }
      if (item.total) {
        gameTotalArray.push(item.total);
      }
    });
  }

  if (defaultFilter.value === "daily") {
    dashboardGameData.forEach((item) => {
      if (item.correct) {
        if (item.Date === todaysDate) {
          gameCorrectArray.push(item.correct);
        }
      }
      if (item.wrong) {
        if (item.Date === todaysDate) {
          gameWrongArray.push(item.wrong);
        }
      }
      if (item.total) {
        if (item.Date === todaysDate) {
          gameTotalArray.push(item.total);
        }
      }
    });
  }

  let gameReducedCorrectArray = gameCorrectArray.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  let gameReducedWrongArray = gameWrongArray.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  let gameReducedTotalArray = gameTotalArray.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  const myGameDataCorrect = {
    datasets: [
      {
        data: [gameReducedCorrectArray, gameReducedTotalArray],
        backgroundColor: ["green", "blue"],
      },
    ],
    labels: ["Correct", "Total"],
  };

  const myGameDataWrong = {
    datasets: [
      {
        data: [gameReducedWrongArray, gameReducedTotalArray],
        backgroundColor: ["red", "blue"],
      },
    ],
    labels: ["Wrong", "Total"],
  };

  return (
    <div className="mainDashboardDiv">
      <Navbar />
      <div className="filterDiv">
        <Dropdown
          options={filters}
          value={defaultFilter}
          selected={defaultFilter}
          onChange={setDefaultFilter}
          placeholder="Select filter"
        />
      </div>

      {defaultFilter.value === "all time" && (
        <div className="chartContainer">
          <div className="pieStyle">
            <h3 className="testCaption">Test Insights</h3>
            <Pie data={myData} options={{ radius: "40%" }} />
          </div>
          <div className="doughnutStyle">
            <h3 className="gameCaption">Game Insights</h3>
            <div className="doughClass">
              <Doughnut
                data={myGameDataCorrect}
                options={{
                  radius: "80%",
                  rotation: -90,
                  circumference: 180,
                  cutout: "60%",
                  maintainAspectRatio: true,
                  responsive: true,
                }}
              />
            </div>

            <div className="doughClass">
              <Doughnut
                data={myGameDataWrong}
                options={{
                  radius: "80%",
                  rotation: -90,
                  circumference: 180,
                  cutout: "60%",
                  maintainAspectRatio: true,
                  responsive: true,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {defaultFilter.value === "daily" && (
        <div className="chartContainer">
          <div className="pieStyle">
            <h3 className="testCaption">Test Insights</h3>
            <Pie data={myData} options={{ radius: "40%" }} />
          </div>
          <div className="doughnutStyle">
            <h3 className="gameCaption">Game Insights</h3>
            <div className="doughClass">
              <Doughnut
                data={myGameDataCorrect}
                options={{
                  radius: "80%",
                  rotation: -90,
                  circumference: 180,
                  cutout: "60%",
                  maintainAspectRatio: true,
                  responsive: true,
                }}
              />
            </div>
            <div className="doughClass">
              <Doughnut
                data={myGameDataWrong}
                options={{
                  radius: "80%",
                  rotation: -90,
                  circumference: 180,
                  cutout: "60%",
                  maintainAspectRatio: true,
                  responsive: true,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
