<?php
// code for BME sensor
if(isset($_POST['BME'])){
  
//open the json file
$data = file_get_contents('BME280.json');
$data_array = json_decode($data);

//data in out POST
$input = array(
    'Ambient Temperature' => $_POST['ambientTemperature']."°C",
    'Humidity' => $_POST['humidity']."%",
    'pressure' => $_POST['pressure']."hPa",
    'altitude' => $_POST['altitude']."m"
);

//append the input to our array
$data_array[] = $input;
//encode back to json
$data = json_encode($data_array, JSON_PRETTY_PRINT);
$query = file_put_contents('BME280.json', $data);
if($query){
  echo 200;
}else{
  echo 404;
}

}

// code for OBC Sensor

if(isset($_POST['OBC'])){
//open the json file
$dataOBC = file_get_contents('OBCSensors.json');
$dataOBC_array = json_decode($dataOBC);

//dataOBC in out POST
$inputOBC = array(
    'Battery Temperature 1' => $_POST['BatteryTemperature1']."°C",
    'Battery Temperature 2' => $_POST['BatteryTemperature2']."°C",
    'Battery Temperature 3' => $_POST['BatteryTemperature3']."°C",
    'Battery Temperature 4' => $_POST['BatteryTemperature4']."°C",
    'Board Temperature' => $_POST['BoardTemperature']."°C"
);

//append the input to our array
$dataOBC_array[] = $inputOBC;
//encode back to json
$dataOBC = json_encode($dataOBC_array, JSON_PRETTY_PRINT);
$queryOBC = file_put_contents('OBCSensors.json', $dataOBC);
if($queryOBC){
  echo 200;
}else{
  echo 404;
}
}



// code for Gyro Sensor

if(isset($_POST['submitGyro'])){
  //open the json file
  $dataOBC = file_get_contents('gyroSensor.json');
  $dataOBC_array = json_decode($dataOBC);
  
  //dataOBC in out POST
  $inputOBC = array(
      'acceleration' => "X: ".$_POST['accelerationX']. ", Y: ".$_POST['accelerationY'].", Z: ".$_POST['accelerationZ'],
      'gyroscope' => "X: ".$_POST['accelerationX']. ", Y: ".$_POST['accelerationY'].", Z: ".$_POST['gyroscopeZ'],
  );
  
  //append the input to our array
  $dataOBC_array[] = $inputOBC;
  //encode back to json
  $dataOBC = json_encode($dataOBC_array, JSON_PRETTY_PRINT);
  $queryGyro = file_put_contents('gyroSensor.json', $dataOBC);
  if($queryGyro){ 
    echo 200;
  }else{
    echo 404;
  }
  }
  
  // code for GPS Sensor

if(isset($_POST['submitGPS'])){
  //open the json file
  $dataOBC = file_get_contents('GPS.json');
  $dataOBC_array = json_decode($dataOBC);
  
  //dataOBC in out POST
  $inputOBC = array(
      'Latitude' => $_POST['gpsLatitude']."&deg;".$_POST['gpsLatitudeN']."'N",
      'Longitude' => $_POST['gpsLongitude']."&deg;".$_POST['gpsLongitudeN']."'E",
      'gpsAltitude' => $_POST['gpsAltitude']."m",
      
  );
  
  //append the input to our array
  $dataOBC_array[] = $inputOBC;
  //encode back to json
  $dataOBC = json_encode($dataOBC_array, JSON_PRETTY_PRINT);
  $queryGPS = file_put_contents('GPS.json', $dataOBC);
  if($queryGPS){ 
    echo 200;
  }else{
    echo 404;
  }
  }


  ?>