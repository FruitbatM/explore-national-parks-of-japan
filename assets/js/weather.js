// OpenWeather API

function getWeather(cityID) {
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
	let celsius = Math.round(parseFloat(data.main.temp));
    let fahrenheit = Math.round(((parseFloat(data.main.temp))*1.8)+32); //Convert temperature from celsius to fahrenheit

    document.getElementById('weather-icon').innerHTML = data.weather[0].icon + '<img src="assets/images/icons.png"/>';
	document.getElementById('temp-description').innerHTML = data.weather[0].description;
    document.getElementById('temp-value').innerHTML = celsius + '&deg;' + ' C';
    document.getElementById('wind-speed').innerHTML = 'Wind: ' + data.wind.speed + ' m/s';
    document.getElementById('sunrise').innerHTML = 'Sunrise: ' + data.sys.sunrise;
    document.getElementById('sunset').innerHTML = 'Sunset: ' + data.sys.sunset;
    document.getElementById('location').innerHTML = data.name;
}

`<img src="icons/${weather.iconId}.png"/>`;

// API returns EPOCH time, this function converts it to a user-friendly date
const convertEpochToDate = (time) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let fullDate = new Date(time * 1000);
  return `${daysOfWeek[fullDate.getDay()]} ${fullDate.getDate()}`;
};


// API returns time that is local to where the request originated
// The time needs to be relative to the location searched
// There is an offset to calculate to convert this
const convertEpochToTime = (time, shift) => {
  let fullDate = new Date((time + shift) * 1000);
  return `${fullDate.getHours()}:${fullDate.getMinutes()}:${fullDate.getSeconds()}`;
};