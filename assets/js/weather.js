// OpenWeather API

function getWeather() {
  const apiKey = 'b3e0a4fb9d29b25beb45fdf2cad771b0';
 
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + 1863357 + '&appid=' + apiKey + '&units=metric')   
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      displayWeather(data);
  })
    .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  getWeather( 1863357 );
}

// Display live weather to User Interface
function displayWeather(data) {
    const celsius = Math.round(parseFloat(data.main.temp));
    const fahrenheit = Math.round((celsius * 9/5) +32); //Convert temperature from celsius to fahrenheit

    const currentDate = new Date();
    const localDate = currentDate.toDateString();

    // Get weather icons from OpenWeather API
    const icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"

    document.getElementById('weather-icon').innerHTML = '<img src=' + icon + '><br>';
    document.getElementById('location-date').innerHTML = localDate.slice(0, 3) + ", " + localDate.slice(4,10);
    document.getElementById('temp-description').innerHTML = data.weather[0].description;
    document.getElementById('temp-value').innerHTML = celsius + '&deg;' + ' C';
    document.getElementById('wind-speed').innerHTML = 'Wind: ' + data.wind.speed + ' m/s';
    document.getElementById('sunrise').innerHTML = 'Sunrise: ' + data.sys.sunrise;
    document.getElementById('sunset').innerHTML = 'Sunset: ' + data.sys.sunset;
    document.getElementById('location').innerHTML = data.name;
}

