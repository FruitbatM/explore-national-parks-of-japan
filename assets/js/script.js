// Full screen overlay navigation
// Open when someone clicks on the element
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Close navigation menu after clicking on anchor link
let menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach (
  function(menuLink) {
    menuLink.addEventListener('click', closeNav);
  }
)

// Back to Top Arrow - code with small modification taken from: 
https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

mybutton = document.getElementById("arrow_2top");

// When the user scrolls down 25px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 25|| document.documentElement.scrollTop > 25) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the page
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Weather API
// Tutorial by Code Explained (https://www.youtube.com/watch?v=KqZGuzrY9D4)
const notificationElement = document.getElementById('notification');
const iconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementsByClassName('temperature-value');
const descElement = document.getElementById('temperature-description');
const locationElement = document.getElementById('location');

// App variables
const weather = {};

weather.temperature = {
    unit : "celsius"
}

const kelvin = 273;
const apiKey = 'b3e0a4fb9d29b25beb45fdf2cad771b0';

// Get live weather data from Open Weather API
function getWeather(latitude, longitude) {
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  
  fetch(api)
    .then(function(response) {
      let data = response.json();
      return data;
  })
  .then(function(data) {
    weather.temperature.value = Math.floor(data.main.temp - kelvin);
    weather.description = data.weather[0].description;
    weather.iconId = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;
  })
  .then(function() {
    displayWeather();
  });
}

// Display live weather to User Interface
function displayWeather() {
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  temperatureElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

//Convert temperature from celsius to fahrenheit
function celsiusToFahrenheit(temperature) {
  return (temperature * 9/5) + 32;
};

//Function to change temp from celsius to fahrenheit and vice versa
temperatureElement.addEventListener('click', function() {
  if (weather.temperature.value === undefined) return;

  if (weather.temperature.unit === 'celsius') {
    let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    fahrenheit = Math.floor(fahrenheit);

    temperatureElement.innerHTML = `${fahrenheit}° <span>F</span>`;
    weather.temperature.unit = 'fahrenheit';
  } else {
    temperatureElement = `${weather.temperature.value}° <span>C</span>`;
    weather.temperature.unit = 'celsius';
  }
});