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
          $("#batteryTemp_3").html(data["Battery Temperature 3"] + "&degC");
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

  // fetching image from image.json

  // $.ajax({
  //   type: "GET",
  //   url: "image.json",
  //   success: function (res) {
  //     res.forEach((element) => {
  //       $("#image").prepend('<img height="350" src="' + element.path + '" />');
  //     });
  //   },
  // });

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

  // fetching Gyro sensor Data
  setInterval(() => {
    $.ajax({
      type: "GET",
      url: "gyroSensor.json",
      success: function (gyroResponse) {
        gyroResponse.forEach((gyroElement) => {
          $("#acceleration_id").html(gyroElement.acceleration);
          $("#gyroscope_id").html(gyroElement.gyroscope);
        });
      },
    });
  }, 1000);

  // fetching data from GPS Sensor
  setInterval(() => {
    $.ajax({
      type: "GET",
      url: "GPS.json",
      success: function (gpsResponse) {
        gpsResponse.forEach((gpsElement) => {
          $("#latitude_id").html(gpsElement.Latitude);
          $("#longitude_id").html(gpsElement.Longitude);
          $("#gps_altitude").html(gpsElement.gpsAltitude);
        });
      },
    });
  }, 1000);
  /*
  // insert json data automatically for obc sensor
  let Temperature_1 = 5;
  let Temperature_2 = 6;
  let Temperature_3 = 7;
  let Temperature_4 = 8;
  let board_temperature = 4;

  setInterval(() => {
    Temperature_1 = Temperature_1 + 0.01;
    Temperature_2 = Temperature_2 + 1;
    Temperature_3 = Temperature_3 + 4;
    Temperature_4 = Temperature_4 + 7;
    board_temperature = board_temperature + 10;
    $("#temp1").val(Temperature_1.toFixed(2));
    $("#temp2").val(Temperature_2.toFixed(2));
    $("#temp3").val(Temperature_3.toFixed(2));
    $("#temp4").val(Temperature_4.toFixed(2));
    $("#Boardtemp").val(board_temperature.toFixed(2));

    $.ajax({
      type: "post",
      url: "json.php",
      data: {
        BatteryTemperature1: Temperature_1.toFixed(2),
        BatteryTemperature2: Temperature_2.toFixed(2),
        BatteryTemperature3: Temperature_3.toFixed(2),
        BatteryTemperature4: Temperature_4.toFixed(2),
        BoardTemperature: board_temperature.toFixed(2),
        OBC: "OBC",
      },
      success: function (res) {
        if (res == 200) {
        } else {
          console.log(res);
        }
      },
    });
  }, 2000);

  // insert json data automatically for obc sensor
  let ambientTemperature = 17;
  let humidity = 30;
  let pressure = 800;
  let altitude = 0;

  setInterval(() => {
    ambientTemperature = ambientTemperature + 0.01;
    humidity = humidity + 0.01;
    pressure = pressure + 0.01;
    altitude = altitude + 10;
    $("#ambientTemperature").val(ambientTemperature.toFixed(2));
    $("#humidity").val(humidity.toFixed(2));
    $("#pressure").val(pressure.toFixed(2));
    $("#altitude").val(altitude);

    $.ajax({
      type: "post",
      url: "json.php",
      data: {
        ambientTemperature: ambientTemperature.toFixed(2),
        humidity: humidity.toFixed(2),
        pressure: pressure.toFixed(2),
        altitude: altitude,
        BME: "BME",
      },
      success: function (resBME) {
        if (resBME == 200) {
          console.log("Success");
        } else {
          console.log("Failed");
        }
      },
    });
  }, 2000);

  // insert data for gyro sensor
  let accelerationX = 0;
  let accelerationY = 0;
  let accelerationZ = 0;
  let gyroscopeX = 0;
  let gyroscopeY = 0;
  let gyroscopeZ = 0;

  setInterval(() => {
    accelerationX = accelerationX + 1;
    accelerationY = accelerationY + 1;
    accelerationZ = accelerationZ + 1;
    gyroscopeX = gyroscopeX + 1;
    gyroscopeY = gyroscopeY + 1;
    gyroscopeZ = gyroscopeZ + 1;

    $.ajax({
      type: "POST",
      url: "json.php",
      data: {
        accelerationX: accelerationX,
        accelerationY: accelerationY,
        accelerationZ: accelerationZ,
        gyroscopeX: gyroscopeX,
        gyroscopeY: gyroscopeY,
        gyroscopeZ: gyroscopeZ,
        submitGyro: "submitGyro",
      },
      success: function (submitResponse) {
        if (submitResponse == 200) {
          console.log("Success");
        }
        if (submitResponse == 404) {
          console.log("Failed");
        }
      },
    });
  }, 2000);

  // insert data for gps sensor
  let gpsLatitude = 10;
  let gpsLatitudeN = 30;
  let gpsLongitude = 18;
  let gpsLongitudeN = 30;
  let gpsAltitude = 100;

  setInterval(() => {
    gpsLatitude = gpsLatitude + 1;
    gpsLatitudeN = gpsLatitudeN + 1;
    gpsLongitude = gpsLongitude + 1;
    gpsLongitudeN = gpsLongitudeN + 1;
    gpsAltitude = gpsAltitude + 8;

    $.ajax({
      type: "POST",
      url: "json.php",
      data: {
        gpsLatitude: gpsLatitude,
        gpsLatitudeN: gpsLatitudeN,
        gpsLongitude: gpsLongitude,
        gpsLongitudeN: gpsLongitudeN,
        gpsAltitude: gpsAltitude,
        submitGPS: "submitGPS",
      },
      success: function (GpsResponse) {
        if (GpsResponse == 200) {
          console.log("Success");
        }
        if (GpsResponse == 404) {
          console.log("Failed");
        }
      },
    });
  }, 2000);
  */
});
