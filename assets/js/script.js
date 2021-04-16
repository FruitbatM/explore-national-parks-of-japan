// Full screen overlay navigation
// Code with a modification was sourced from w3school: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp

function openNav() {
  document.getElementById('myNav').style.width = "100%";
}

// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
  document.getElementById('myNav').style.width = "0%";
}

// Close navigation menu after clicking on anchor link
let menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach (
  function(menuLink) {
    menuLink.addEventListener('click', closeNav);
  }
);


// Back to Top Arrow - code with modification taken from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
mybutton = document.getElementById('arrow_2top');

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50|| document.documentElement.scrollTop > 50) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the page
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Tooltip
// Code source: https://getbootstrap.com/docs/4.6/components/tooltips/-->
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});