var x = document.getElementById("demo");
window.onload = getLocation;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position){
  demo.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  sendApirequest(position);
}

async function sendApirequest(position){
    var response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=050ef660cb3a26caa60021ed823bac6b`);
    var data = await response.json();
    var y = document.getElementById("okay"); 
    y.innerHTML = " data = " + `${data.main.temp}`;
    console.log(`${data.main.temp}`);
}