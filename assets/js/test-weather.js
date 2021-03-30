// OpenWeather API
function getWeather() {
  const locationID = [
    {
        name: "Fuji Hakone Izu National Park",
        cityID: 1863357
    },
    {
        name: "Akan Mashu National Park",
        cityID: 2127822
    },
    {
        name: "Shiretoko National Park ",
        cityID: 2128430
    },
    { 
        name: "Nikko National Park ",
        cityID: 1855395
    },
    {
        city: "Yakushima National Park",
        cityID: 1860827
    },
    {
        name: "Yoshino Kumano National Park",
        cityID: 1848938
    },
    {
        name: "Towada Hachimantai National Park",
        cityID: 2111834
    },
    {
        name: "Aso Kuju National Park",
        cityID: 1856801
    },
    {
        name: "Iriomote Ishigaki National Park",
        cityID: 1850822
    },
    {
        name: "Saikai National Park",
        cityID: 1852899
    }
  ];

  document.getElementByclass('dropdown-item').click(function () {
    console.log(locationID);
  });

  // Match clicked national park with its location id
  function findLocation() {
    for (i = 0; i < locationID.length; i++) {
      if (locationID[i].name === name) {
        return locationID[i].cityID;
      }
    }
  }

  // Create API URL for clicked national park
  const parkLocationID = findLocation();
  const apiKey = 'b3e0a4fb9d29b25beb45fdf2cad771b0';
  const apiCall = 'https://api.openweathermap.org/data/2.5/weather?id=' + parkLocationID + '&appid=' + apiKey + '&units=metric';

  // Fetch API data
  fetch(apiCall)   
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      displayWeather(data);
  })
    .catch(function() {  // catch any errors
  });
  
  window.onload = function() {
  getWeather(parkLocationID);
  }
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