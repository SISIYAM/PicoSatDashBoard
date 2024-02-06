  <?php
//open the json file
$data = file_get_contents('index.json');
$data = json_decode($data);

//data in out POST
$input = array(
    'altitude' => $_POST['altitude'],
    'temperature' => $_POST['temperature']
);

//append the input to our array
$data[] = $input;
//encode back to json
$data = json_encode($data, JSON_PRETTY_PRINT);
$query = file_put_contents('index.json', $data);
if($query){
  echo 200;
}else{
  echo 404;
}

  ?>