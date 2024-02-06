let temperature = 0;
let altitude = 0;

setInterval(() => {
  temperature = temperature + 1;
  document.querySelector("#temperature").value = temperature;

  altitude = altitude + 10;
  document.querySelector("#altitude").value = altitude;
  const temp = document.querySelector("#temperature").value;
  const alt = document.querySelector("#altitude").value;
  $.ajax({
    type: "post",
    url: "json.php",
    data: {
      temperature: temp,
      altitude: alt,
    },
    success: function (response) {
      if (response == 200) {
        $("#altitudeValue").html(alt);
        $("#output").html(temp);
      }
    },
  });
}, 1000);
