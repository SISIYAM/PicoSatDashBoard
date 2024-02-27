$(document).ready(function () {
  // fetching data from OBCSensors
  setInterval(() => {
    $.ajax({
      type: "GET",
      url: "OBCTemp.json",
      success: function (response) {
        response.forEach((data) => {
          $("#batteryTemp_1").html(data["Battery Temperature 1"] + "&degC");
          $("#batteryTemp_2").html(data["Battery Temperature 2"] + "&degC");
          $("#batteryTemp_4").html(data["Battery Temperature 4"] + "&degC");
          $("#boardTemp").html(data["Board Temperature"] + "&degC");
        });
      },
    });
  }, 1000);

  // fetching data from BME280 sensor
  setInterval(() => {
    $.ajax({
      type: "GET",
      url: "BME280.json",
      success: function (result) {
        result.forEach((bme) => {
          $("#ambientTemp").html(bme["Ambient Temperature"] + "&degC");
          $("#data_humidity").html(bme.Humidity + "%");
          $("#data_pressure").html(bme.pressure + "hPa");
          $("#data_altitude").html(bme.altitude + "m");
        });
      },
    });
  }, 1000);

  setInterval(() => {
    $.ajax({
      type: "GET",
      url: "image.json",
      success: function (res) {
        res.forEach((element) => {
          $("#addImg").attr("src", element.path);
        });
      },
    });
  }, 1000);

  // // fetching Gyro sensor Data
  // setInterval(() => {
  //   $.ajax({
  //     type: "GET",
  //     url: "gyroSensor.json",
  //     success: function (gyroResponse) {
  //       gyroResponse.forEach((gyroElement) => {
  //         $("#acceleration_id").html(gyroElement.acceleration);
  //         $("#gyroscope_id").html(gyroElement.gyroscope);
  //       });
  //     },
  //   });
  // }, 1000);

  // // fetching data from GPS Sensor
  // setInterval(() => {
  //   $.ajax({
  //     type: "GET",
  //     url: "GPS.json",
  //     success: function (gpsResponse) {
  //       gpsResponse.forEach((gpsElement) => {
  //         $("#latitude_id").html(gpsElement.Latitude);
  //         $("#longitude_id").html(gpsElement.Longitude);
  //         $("#gps_altitude").html(gpsElement.gpsAltitude);
  //       });
  //     },
  //   });
  // }, 1000);
});
