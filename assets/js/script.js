// Full screen overlay navigation
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

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


// Get live weather data
async function getLocationWeather(location) {
  const result = await fetch(`api.openweathermap.org/data/2.5/forecast?id={1863357}&appid={b3e0a4fb9d29b25beb45fdf2cad771b0}`)

  if (result.status === 200) {
    return {success: true, data: await result.json() };
  }

    return {success: false, error: result.statusText};
  }