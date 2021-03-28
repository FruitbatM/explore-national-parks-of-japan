// OpenWeather API

function getWeather( cityID ) {
  const apiKey = 'b3e0a4fb9d29b25beb45fdf2cad771b0';
  
 fetch('https://api.openweathermap.org/data/2.5/weather?id=' + 1863357+ '&appid=' + apiKey + '&units=metric')   
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

	document.getElementById('temp-description').innerHTML = data.weather[0].description;
	document.getElementById('temp-value').innerHTML = celsius + '&deg;' + 'C';
	document.getElementById('location').innerHTML = data.name;
}
