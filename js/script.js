// setup
const data = {
  labels: ["", "", "", "", "", "", ""],
  datasets: [
    // {
    //   label: "Battery Temperature 1",
    //   //data: [35, 27, 40, 15, 30, 25, 45],
    //   cubicInterpolationMode: "monotone",
    //   tension: 0.4,
    //   backgroundColor: ["rgba(95, 46, 234, 1)"],
    //   borderColor: ["rgba(95, 46, 234, 1)"],
    //   borderWidth: 2,
    // },
    // {
    //   label: "Battery Temperature 2",
    //   //data: [20, 36, 16, 45, 29, 32, 10],
    //   cubicInterpolationMode: "monotone",
    //   tension: 0.4,
    //   backgroundColor: ["rgba(255, 0, 19, 0.8)"],
    //   borderColor: ["rgba(255, 0, 19, 0.8)"],
    //   borderWidth: 2,
    // },
    // {
    //   label: "Battery Temperature 3",
    //   //data: [20, 11, 16, 5, 29, 82, 30],
    //   cubicInterpolationMode: "monotone",
    //   tension: 0.4,
    //   backgroundColor: ["rgba(8, 237, 255, 0.8)"],
    //   borderColor: ["rgba(8, 237, 255, 0.8)"],
    //   borderWidth: 2,
    // },
    {
      label: "Humidity",
      //data: [10, 41, 17, 5, 29, 92, 30],
      cubicInterpolationMode: "monotone",
      tension: 0.4,
      backgroundColor: ["rgba(227, 255, 8, 0.8)"],
      borderColor: ["rgba(227, 255, 8, 0.8)"],
      borderWidth: 2,
    },
    {
      label: "Pressure",
      //data: [0, 1, 19, 40, 19, 12, 39],
      cubicInterpolationMode: "monotone",
      tension: 0.4,
      backgroundColor: ["rgb(66, 245, 135)"],
      borderColor: ["rgb(66, 245, 135)"],
      borderWidth: 2,
    },
    {
      label: "Altitude",
      //data: [2, 21, 46, 85, 9, 4, 60],
      cubicInterpolationMode: "monotone",
      tension: 0.4,
      backgroundColor: ["rgba(236, 8, 255, 0.8)"],
      borderColor: ["rgba(236, 8, 255, 0.8)"],
      borderWidth: 2,
    },
  ],
};

// config
const config = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);
// function updateChart() {
//   fetch("OBCSensors.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((dataPoints) => {
//       const Temperature_1 = dataPoints.map((Temperature_1, index) => {
//         return Temperature_1["Battery Temperature 1"]
//           .toString()
//           .replace(/\u00b0C/g, "");
//       });

//       const Temperature_2 = dataPoints.map((Temperature_2, index) => {
//         return Temperature_2["Battery Temperature 2"]
//           .toString()
//           .replace(/\u00b0C/g, "");
//       });

//       const Temperature_3 = dataPoints.map((Temperature_3, index) => {
//         return Temperature_3["Battery Temperature 3"]
//           .toString()
//           .replace(/\u00b0C/g, "");
//       });

//       const Temperature_4 = dataPoints.map((Temperature_4, index) => {
//         return Temperature_4["Battery Temperature 4"]
//           .toString()
//           .replace(/\u00b0C/g, "");
//       });

//       const boardTemperature = dataPoints.map((boardTemperature, index) => {
//         return boardTemperature["Board Temperature"]
//           .toString()
//           .replace(/\u00b0C/g, "");
//       });
//       let arrayLength = Temperature_1.length;
//       let lastIndex = arrayLength - 1;
//       console.log(arrayLength);
//       console.log(lastIndex);

//       if (
//         myChart.config.data.datasets[0].data.length > 7 ||
//         myChart.config.data.datasets[1].data.length > 7 ||
//         myChart.config.data.datasets[2].data.length > 7 ||
//         myChart.config.data.datasets[3].data.length > 7 ||
//         myChart.config.data.datasets[4].data.length > 7
//       ) {
//         myChart.config.data.datasets[0].data.shift();
//         myChart.config.data.datasets[1].data.shift();
//         myChart.config.data.datasets[2].data.shift();
//         myChart.config.data.datasets[3].data.shift();
//         myChart.config.data.datasets[4].data.shift();
//       }
//       myChart.config.data.datasets[0].data.push(Temperature_1[lastIndex]);
//       myChart.config.data.datasets[1].data.push(Temperature_2[lastIndex]);
//       myChart.config.data.datasets[2].data.push(Temperature_3[lastIndex]);
//       myChart.config.data.datasets[3].data.push(Temperature_4[lastIndex]);
//       myChart.config.data.datasets[4].data.push(boardTemperature[lastIndex]);

//       myChart.update();
//       console.log("i =" + i);
//     });
// }

// ambient temp
function updateAmbientChart() {
  fetch("BME280.json")
    .then((res) => {
      return res.json();
    })
    .then((ambientData) => {
      const ambientHumidity = ambientData.map((ambientHumidity, index) => {
        return ambientHumidity.Humidity.toString().replace(/\%/g, "");
      });
      const ambientPressure = ambientData.map((ambientPressure, index) => {
        return ambientPressure.pressure.toString().replace(/\hPa/g, "");
      });
      const ambientAltitude = ambientData.map((ambientAltitude, index) => {
        return ambientAltitude.altitude.toString().replace(/\m/g, "");
      });
      let ambientDataLength = ambientHumidity.length;
      let lastIndexAmbientData = ambientDataLength - 1;
      console.log(ambientDataLength);
      console.log(lastIndexAmbientData);
      if (
        myChart.config.data.datasets[0].data.length > 7 ||
        myChart.config.data.datasets[1].data.length > 7 ||
        myChart.config.data.datasets[2].data.length > 7
      ) {
        myChart.config.data.datasets[0].data.shift();
        myChart.config.data.datasets[1].data.shift();
        myChart.config.data.datasets[2].data.shift();
      }
      myChart.config.data.datasets[0].data.push(
        ambientHumidity[lastIndexAmbientData]
      );
      myChart.config.data.datasets[1].data.push(
        ambientPressure[lastIndexAmbientData]
      );
      myChart.config.data.datasets[2].data.push(
        ambientAltitude[lastIndexAmbientData]
      );
      myChart.update();
    });
}

// setInterval(updateChart, 3000);
setInterval(updateAmbientChart, 3000);
